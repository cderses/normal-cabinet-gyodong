/**
 * 노멀캐비넷 교동점 - 실시간 빈 방 조회 Worker
 *
 * GET /  또는 /availability.json
 *   -> availability.json 과 동일한 포맷으로 응답
 *      { "updated_at": "2026-11-16T23:30:00+09:00",
 *        "rooms": { "<listing_id>": { "blocked": [["YYYY-MM-DD","YYYY-MM-DD"], ...] }, ... },
 *        "errors": [] }
 *
 * 25개 객실의 Airbnb .ics 피드를 병렬로 받아 파싱하며,
 * 결과는 Worker 인스턴스 메모리에 20초만 캐시합니다(에지 요청 폭주 방어).
 * 비밀값은 없습니다. .ics URL 은 이미 공개 저장소(rooms.json)에 있는 값입니다.
 */

const FEEDS = {
  "1814852983471104053": "https://www.airbnb.co.kr/calendar/ical/1814852983471104053.ics?t=2aa4e9d75e4b42099b826e4280d53ad3",
  "1814856937247553023": "https://www.airbnb.co.kr/calendar/ical/1814856937247553023.ics?t=0b25f02b52f54645872f1ea9a4598af5",
  "1814871912587769835": "https://www.airbnb.co.kr/calendar/ical/1814871912587769835.ics?t=b880b8c8ce134b5e987e826a0263bc0a",
  "1814874933693290746": "https://www.airbnb.co.kr/calendar/ical/1814874933693290746.ics?t=ad408a215aa9429eac858b65f0056c42",
  "1814883010975676797": "https://www.airbnb.co.kr/calendar/ical/1814883010975676797.ics?t=6dc425e50949410582bf0965f77fb0a0",
  "1814884946540748524": "https://www.airbnb.co.kr/calendar/ical/1814884946540748524.ics?t=744d114869db4edf8472f87ceb30f4f8",
  "1814960665596083265": "https://www.airbnb.co.kr/calendar/ical/1814960665596083265.ics?t=bbd37d98ea0c4d829af6d8b6be5649d9",
  "1814962346326668411": "https://www.airbnb.co.kr/calendar/ical/1814962346326668411.ics?t=e7ba814bd8724fb6bd259e6f6f441e1b",
  "1814963231899394153": "https://www.airbnb.co.kr/calendar/ical/1814963231899394153.ics?t=8f5d674782114c75bbdd862c3a3bf079",
  "1814964147939032842": "https://www.airbnb.co.kr/calendar/ical/1814964147939032842.ics?t=04c35c09288d46608ef572561c162925",
  "1814965027690999327": "https://www.airbnb.co.kr/calendar/ical/1814965027690999327.ics?t=bf3c86c24b0e4c29b7d9ce11c1e8af36",
  "1814966187730601502": "https://www.airbnb.co.kr/calendar/ical/1814966187730601502.ics?t=df73c2ed5ac149528240f6990d2e5e46",
  "1814967058430677891": "https://www.airbnb.co.kr/calendar/ical/1814967058430677891.ics?t=94316ed8fb6848bf92473e998764cb57",
  "1814967897125006778": "https://www.airbnb.co.kr/calendar/ical/1814967897125006778.ics?t=434ba89608f24b06bf0bf9663ce2e960",
  "1814968809775026870": "https://www.airbnb.co.kr/calendar/ical/1814968809775026870.ics?t=29e52f449ed1417b9bae3bb3c4f45f6c",
  "1814969624998864924": "https://www.airbnb.co.kr/calendar/ical/1814969624998864924.ics?t=23f1af0b492f4b0081cfabff2135421b",
  "1814970472723559549": "https://www.airbnb.co.kr/calendar/ical/1814970472723559549.ics?t=b50eeb2c913243bf9320c88241f54f3c",
  "1814971369840083417": "https://www.airbnb.co.kr/calendar/ical/1814971369840083417.ics?t=b27dfa52074a4682bf4e0714726c8fff",
  "1814972397895705621": "https://www.airbnb.co.kr/calendar/ical/1814972397895705621.ics?t=5074398c0b0548b9b4ac2c7a157bc35f",
  "1814973410036260725": "https://www.airbnb.co.kr/calendar/ical/1814973410036260725.ics?t=6d62de14f3f142999741878452773ba7",
  "1814974247643788406": "https://www.airbnb.co.kr/calendar/ical/1814974247643788406.ics?t=cdb291502d1d41928f35aa7166eee71c",
  "1814975064687815745": "https://www.airbnb.co.kr/calendar/ical/1814975064687815745.ics?t=07f4dbc9b11c4bb1aa2526ec6a4d9390",
  "1814975837820401085": "https://www.airbnb.co.kr/calendar/ical/1814975837820401085.ics?t=ea61c0948b61487a9e54456ea3535c37",
  "1814976697218053645": "https://www.airbnb.co.kr/calendar/ical/1814976697218053645.ics?t=586abad0a816487a88219b27bf9a6271",
  "1814977801137448123": "https://www.airbnb.co.kr/calendar/ical/1814977801137448123.ics?t=1c9c7122a5634d95aa9f7d7012939a8f",
};

const CACHE_MS = 20000;
const FETCH_TIMEOUT_MS = 9000;

let cache = { at: 0, body: null };

function isoDate(s) {
  return `${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6, 8)}`;
}

function parseIcs(text) {
  const unfolded = String(text).replace(/\r?\n[ \t]/g, "");
  const out = [];
  const re = /BEGIN:VEVENT([\s\S]*?)END:VEVENT/g;
  let m;
  while ((m = re.exec(unfolded)) !== null) {
    const block = m[1];
    const s = /DTSTART[^:\r\n]*:(\d{8})/.exec(block);
    const e = /DTEND[^:\r\n]*:(\d{8})/.exec(block);
    if (!s || !e) continue;
    out.push([isoDate(s[1]), isoDate(e[1])]);
  }
  out.sort((a, b) => (a[0] === b[0] ? (a[1] < b[1] ? -1 : 1) : a[0] < b[0] ? -1 : 1));
  return out;
}

async function fetchRoom(id) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(FEEDS[id], {
      signal: controller.signal,
      headers: { accept: "text/calendar,*/*" },
      cf: { cacheTtl: 0, cacheEverything: false },
    });
    if (!res.ok) throw new Error("HTTP " + res.status);
    return parseIcs(await res.text());
  } finally {
    clearTimeout(timer);
  }
}

function kstStamp() {
  return new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 19) + "+09:00";
}

async function buildPayload() {
  const ids = Object.keys(FEEDS);
  const settled = await Promise.allSettled(ids.map((id) => fetchRoom(id)));
  const rooms = {};
  const errors = [];
  settled.forEach((r, i) => {
    const id = ids[i];
    if (r.status === "fulfilled") {
      rooms[id] = { blocked: r.value };
    } else {
      rooms[id] = { blocked: [] };
      errors.push({ listing_id: id, error: String((r.reason && r.reason.message) || r.reason) });
    }
  });
  return { updated_at: kstStamp(), rooms, errors };
}

function jsonResponse(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET, HEAD, OPTIONS",
      "access-control-max-age": "86400",
    },
  });
}

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "GET, HEAD, OPTIONS",
          "access-control-allow-headers": "*",
          "access-control-max-age": "86400",
        },
      });
    }
    if (request.method !== "GET" && request.method !== "HEAD") {
      return jsonResponse({ error: "method_not_allowed" }, 405);
    }

    const url = new URL(request.url);
    if (url.pathname !== "/" && url.pathname !== "/availability" && url.pathname !== "/availability.json") {
      return jsonResponse({ error: "not_found" }, 404);
    }

    const fresh = url.searchParams.get("fresh") === "1";
    const now = Date.now();
    try {
      if (fresh || !cache.body || now - cache.at > CACHE_MS) {
        const body = await buildPayload();
        cache = { at: Date.now(), body };
      }
    } catch (err) {
      if (!cache.body) {
        return jsonResponse({ error: "upstream_failed", detail: String((err && err.message) || err) }, 502);
      }
    }

    return jsonResponse(cache.body, 200);
  },
};
