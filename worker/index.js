// 노멀캐비넷 교동점(워크인 페이지) 실시간 빈 방 조회 Worker — 배포본
// GET 아무 경로 -> availability.json 과 같은 포맷의 JSON
//   { "updated_at": "2026-11-16T23:27:36+09:00",
//     "rooms": { "<listing_id>": { "blocked": [["YYYY-MM-DD","YYYY-MM-DD"], ...] }, ... },
//     "errors": [{ "listing_id": "...", "error": "..." }] }
// 객실 목록(.ics URL)은 저장소의 rooms.json 을 그대로 읽어 쓰므로 중복 관리가 없습니다.
// 결과는 Worker 인스턴스 메모리에 20초 캐시. 비밀값 없음.

const R = "https://cderses.github.io/normal-cabinet-gyodong/rooms.json";
const T = 9000;      // ics 1건당 타임아웃
const C = 20000;     // 메모리 캐시 20초

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

async function build() {
  const list = JSON.parse(await get(R));
  const rooms = {};
  const errors = [];
  const res = await Promise.all(
    list.map((room) =>
      get(room.ical_url)
        .then((text) => [room.listing_id, parse(text)])
        .catch((err) => {
          errors.push({ listing_id: room.listing_id, error: String(err) });
          return [room.listing_id, []];
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
  async fetch() {
    const h = {
      "content-type": "application/json",
      "access-control-allow-origin": "*",
    };
    try {
      if (!cache.body || Date.now() - cache.at > C) {
        cache = { at: Date.now(), body: await build() };
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
