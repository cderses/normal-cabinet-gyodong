// 노멀캐비넷 교동점(워크인 페이지) 실시간 빈 방 조회 Worker — 배포본
// GET 아무 경로 -> availability.json 과 같은 포맷의 JSON
//   { "updated_at": "2026-11-16T23:27:36+09:00",
//     "rooms": { "<listing_id>": { "blocked": [["YYYY-MM-DD","YYYY-MM-DD"], ...] }, ... },
//     "errors": [{ "listing_id": "...", "error": "..." }] }
// 객실 목록(.ics URL)은 Worker Secret `ICAL_MAP_JSON`({"<listing_id>": "<ical_url>"}) 에서 읽습니다.
// .ics 주소는 비공개 토큰이므로 공개 저장소(rooms.json)에는 두지 않습니다.
// 결과는 Worker 인스턴스 메모리에 20초 캐시.
// ?fresh=1 로 호출하면 캐시를 건너뛰고 즉시 다시 받아옵니다 — 단, 직전 조회가 끝난 뒤 5초가 지나지
// 않았으면 연속 호출로 Airbnb 를 두드리지 않도록 캐시를 그대로 돌려줍니다(최소 5초 쿨다운).
// CORS 는 워크인 페이지(https://cderses.github.io)만 허용합니다.

const ALLOWED_ORIGIN = "https://cderses.github.io";
const T = 9000;      // ics 1건당 타임아웃
const C = 20000;     // 메모리 캐시 20초
const MIN = 5000;    // ?fresh=1 최소 쿨다운 5초

let cache = { at: 0, body: null };

function iso(d) {
  return d.slice(0, 4) + "-" + d.slice(4, 6) + "-" + d.slice(6, 8);
}

function parse(t) {
  const out = [];
  const re = /BEGIN:VEVENT([\s\S]*?)END:VEVENT/g;
  const u = String(t).replace(/\r?\n[ \t]/g, ""); // RFC 5545 접힌 줄 펴기
  let x;
  while ((x = re.exec(u))) {
    const b = x[1];
    const s = /DTSTART[^:\r\n]*:(\d{8})/.exec(b);
    const e = /DTEND[^:\r\n]*:(\d{8})/.exec(b);
    if (s && e) out.push([iso(s[1]), iso(e[1])]);
  }
  return out;
}

async function get(u) {
  const c = new AbortController();
  const h = setTimeout(() => c.abort(), T);
  try {
    const r = await fetch(u, { signal: c.signal });
    if (!r.ok) throw new Error("HTTP " + r.status);
    return r.text();
  } finally {
    clearTimeout(h);
  }
}

function icalMap(env) {
  const raw = (env && env.ICAL_MAP_JSON) || "";
  if (!raw) throw new Error("ICAL_MAP_JSON secret is not set");
  const map = JSON.parse(raw);
  if (!map || typeof map !== "object" || Array.isArray(map)) {
    throw new Error("ICAL_MAP_JSON must be an object of listing_id -> ical_url");
  }
  return map;
}

async function build(env) {
  const map = icalMap(env);
  const ids = Object.keys(map);
  const rooms = {};
  const errors = [];
  const res = await Promise.all(
    ids.map((id) =>
      get(map[id])
        .then((text) => [id, parse(text)])
        .catch((err) => {
          errors.push({ listing_id: id, error: String(err) });
          return [id, []];
        })
    )
  );
  res.forEach((p) => {
    rooms[p[0]] = { blocked: p[1] };
  });
  return {
    updated_at: new Date(Date.now() + 324e5).toISOString().slice(0, 19) + "+09:00",
    rooms: rooms,
    errors: errors,
  };
}

export default {
  async fetch(request, env) {
    const h = {
      "content-type": "application/json",
      "access-control-allow-origin": ALLOWED_ORIGIN,
      "vary": "origin",
    };
    try {
      const fresh = new URL(request.url).searchParams.get("fresh") === "1";
      const stale = !cache.body || Date.now() - cache.at > C;
      const cooled = cache.body && Date.now() - cache.at < MIN;
      if (stale && !(fresh && cooled)) {
        const body = await build(env);
        cache = { at: Date.now(), body: body };
      }
      return new Response(JSON.stringify(cache.body), { headers: h });
    } catch (e) {
      return new Response(JSON.stringify({ error: "upstream_failed", detail: String(e) }), {
        status: 502,
        headers: h,
      });
    }
  },
};
