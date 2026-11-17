# 교동점 실시간 달력 Worker

`normal-cabinet-gyodong-ical` (Cloudflare Workers, 무료 플랜)

- 배포 URL: https://normal-cabinet-gyodong-ical.cderses.workers.dev/
- 응답: `availability.json` 과 동일한 포맷
  ```json
  { "updated_at": "…+09:00",
    "rooms": { "<listing_id>": { "blocked": [["YYYY-MM-DD","YYYY-MM-DD"]] } },
    "errors": [] }
  ```
- 동작: Worker Secret **`ICAL_MAP_JSON`** (`{"<listing_id>": "<ical_url>"}` JSON 또는 그 base64)에서 25개 객실 `.ics` 주소를 읽어 병렬 fetch → 파싱 → 20초 메모리 캐시.
  `.ics` 주소는 비공개 토큰이므로 **공개 저장소(`rooms.json`)에는 두지 않습니다.**
- `?fresh=1` 로 호출하면 20초 캐시를 건너뛰고 바로 다시 조회. 단 **직전 조회가 끝난 뒤 5초 이내**면 캐시를 돌려줍니다(연속 호출로 Airbnb를 두드리지 않도록 하는 최소 쿨다운).
- CORS: `access-control-allow-origin: https://cderses.github.io` 만 허용 (워크인 페이지 외 도메인 차단).

## 파일
- `index.js` — 사람이 읽는 소스(이 파일이 기준).
- `index.min.js` — Cloudflare 대시보드 코드 편집기에 그대로 넣는 한 줄 배포본(내용 동일).

## 배포 방법
Cloudflare 대시보드 → Workers 및 Pages → `normal-cabinet-gyodong-ical` → 코드 편집 → `index.min.js` 내용 붙여넣기 → 배포.
Secret `ICAL_MAP_JSON` 은 같은 Worker의 설정 → 런타임 변수 및 시크릿에 등록되어 있습니다.
(운영센터·다른 Worker 는 건드리지 않습니다.)
