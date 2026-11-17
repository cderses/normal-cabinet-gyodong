#!/usr/bin/env python3
"""Fetch Airbnb iCal (.ics) feeds for Normal Cabinet Gyodong and write availability.json.

The .ics addresses are private tokens, so they are NOT stored in this public repo.
They arrive in the environment variable GYODONG_ICAL_MAP as a JSON object
{"<listing_id>": "<ical_url>", ...} (GitHub Actions secret), and rooms.json only
lists the public room metadata (listing_id, room number, ...).
"""

from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone, timedelta
import json
import os
import re
import sys
import urllib.request

KST = timezone(timedelta(hours=9))
ENV_NAME = "GYODONG_ICAL_MAP"


def load_ical_map():
    raw = os.environ.get(ENV_NAME, "").strip()
    if not raw:
        sys.exit(f"{ENV_NAME} is not set; refusing to run without the private iCal map.")
    try:
        data = json.loads(raw)
    except json.JSONDecodeError as exc:
        sys.exit(f"{ENV_NAME} is not valid JSON: {exc}")
    if not isinstance(data, dict) or not data:
        sys.exit(f"{ENV_NAME} must be a non-empty JSON object of listing_id -> ical_url.")
    return {str(k): str(v) for k, v in data.items()}


def parse_ics_events(ics_text: str):
    events = []
    # Unfold RFC 5545 folded lines
    unfolded = re.sub(r"\r?\n[ \t]", "", ics_text)
    for block in re.findall(r"BEGIN:VEVENT(.*?)END:VEVENT", unfolded, flags=re.S):
        start_m = re.search(r"DTSTART(?:;[^:\r\n]*)?:(\d{8})", block)
        end_m = re.search(r"DTEND(?:;[^:\r\n]*)?:(\d{8})", block)
        if not start_m or not end_m:
            continue
        s = start_m.group(1)
        e = end_m.group(1)
        start_iso = f"{s[:4]}-{s[4:6]}-{s[6:8]}"
        end_iso = f"{e[:4]}-{e[4:6]}-{e[6:8]}"
        events.append([start_iso, end_iso])
    events.sort()
    return events


def fetch_room(item):
    room, ical_url = item
    req = urllib.request.Request(
        ical_url,
        headers={"User-Agent": "NormalCabinet-iCal-Sync/1.0"},
    )
    with urllib.request.urlopen(req, timeout=20) as resp:
        body = resp.read().decode("utf-8", errors="replace")
    return room["listing_id"], parse_ics_events(body)


def main():
    with open("rooms.json", "r", encoding="utf-8") as f:
        rooms = json.load(f)

    ical_map = load_ical_map()

    result = {
        "updated_at": datetime.now(KST).strftime("%Y-%m-%dT%H:%M:%S+09:00"),
        "rooms": {},
        "errors": [],
    }

    work = []
    for room in rooms:
        lid = str(room["listing_id"])
        ical_url = ical_map.get(lid)
        if not ical_url:
            result["rooms"][lid] = {"blocked": []}
            result["errors"].append(
                {"room": room["room"], "listing_id": lid, "error": f"no iCal URL in {ENV_NAME}"}
            )
        else:
            work.append((room, ical_url))

    with ThreadPoolExecutor(max_workers=8) as pool:
        futures = {pool.submit(fetch_room, item): item for item in work}
        for fut in as_completed(futures):
            room, _ = futures[fut]
            lid = str(room["listing_id"])
            try:
                _, events = fut.result()
                result["rooms"][lid] = {"blocked": events}
            except Exception as exc:
                result["rooms"][lid] = {"blocked": []}
                result["errors"].append({"room": room["room"], "listing_id": lid, "error": str(exc)})

    with open("availability.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    print(f"Synced {len(result['rooms'])} rooms, errors={len(result['errors'])}")


if __name__ == "__main__":
    main()
