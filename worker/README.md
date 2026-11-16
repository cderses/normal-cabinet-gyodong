# 교동점 실시간 달력 Worker

`normal-cabinet-gyodong-ical` (Cloudflare Workers, 무료 플랜)

- 배포 URL: https://normal-cabinet-gyodong-ical.cderses.workers.dev/
- 응답: `availability.json` 과 동일한 포맷
  ```json
  { "updated_at": "…+09:00",
    "rooms": { "<listing_id>": { "blocked": [["YYYY-MM-DD","YYYY-MM-DD"]] } },
    "errors": [] }
  ```
- 동작: `rooms.json`(GitHub Pages)을 읽어 25개 객실 `.ics` 를 병렬 fetch → 파싱 → 20초 메모리 캐시
- CORS: `access-control-allow-origin: *` (공개 데이터, 비밀값 없음)

## 파일
- `index.js` — 사람이 읽는 소스(이 파일이 기준).
- `index.min.js` — Cloudflare 대시보드 코드 편집기에 그대로 넣는 한 줄 배포본(내용 동일).

## 배포 방법
Cloudflare 대시보드 → Workers & Pages → `normal-cabinet-gyodong-ical` → 코드 편집 → `index.min.js` 내용 붙여넣기 → 배포.
(운영센터·다른 Worker 는 건드리지 않습니다.)
