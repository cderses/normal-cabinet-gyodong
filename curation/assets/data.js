/* normal cabinet. — 대구여행 큐레이션 데이터 (호텔 컨셉 리디자인)
   조사 기준일 2026-11-16 · 교동점(대구 중구 교동2길 29-11) 출발 기준
   b: 'f' 대표 유명 / 'h' 숨은 로컬 픽
   route.steps: t 시각 · n 상호(3개국어) · m 한 줄 이유/이동 · q 지도 검색어(클릭 시 지도 이동) */
window.CURATION = {
  updated: "2026-11-16",
  cats: [
    {
      id: 1, key: "food",
      title: { ko: "로컬 맛집 · 노포", en: "Food & Local Gems", zh: "本地美食 · 老店" },
      sub: { ko: "막창·뭉티기·찜갈비, 그리고 시장 분식", en: "Makchang, raw beef, braised ribs and market snacks", zh: "小肠、生牛肉、炖排骨与市场小吃" },
      img: "assets/cat-food.jpg"
    },
    {
      id: 2, key: "cafe",
      title: { ko: "카페 · 바 · 감성 공간", en: "Cafes & Bars", zh: "咖啡 · 酒吧 · 氛围空间" },
      sub: { ko: "낮의 커피부터 새벽의 한 잔까지", en: "From afternoon coffee to a last drink at dawn", zh: "从午后咖啡到凌晨的最后一杯" },
      img: "assets/cat-cafe.jpg"
    },
    {
      id: 3, key: "run",
      title: { ko: "러닝 · 산책 코스", en: "Running & Walks", zh: "跑步 · 散步路线" },
      sub: { ko: "거리와 구간, 야간 조명까지 확인한 코스", en: "Distances, segments and night lighting checked", zh: "距离、路段与夜间照明都确认过的路线" },
      img: "assets/cat-run.jpg"
    },
    {
      id: 4, key: "spots",
      title: { ko: "명소 · 전시 · 야경", en: "Spots & Culture", zh: "景点 · 展览 · 夜景" },
      sub: { ko: "골목의 낮과 도시의 밤", en: "Alleys by day, the city by night", zh: "白天的胡同，夜晚的城市" },
      img: "assets/cat-spots.jpg"
    },
    {
      id: 5, key: "essentials",
      title: { ko: "편의 · 약국 · 마트", en: "Convenience & Mart", zh: "便利店 · 药店 · 超市" },
      sub: { ko: "편의점 · 약국 · 빨래방 · 올리브영 · 생활 마트", en: "Convenience stores, pharmacy, laundry, cosmetics, supermarket", zh: "便利店 · 药店 · 洗衣房 · 美妆 · 超市" },
      img: "assets/cat-essentials.jpg"
    }
  ],
  places: [
    {
      c: 1, b: "f", n: { ko: "영남막창 교동점", en: "Yeongnam Makchang · Gyodong (영남막창)", zh: "岭南小肠 校洞店 (Yeongnam Makchang)" },
      w: { ko: "도보 2분", en: "2 min walk", zh: "步行 2 分钟" }, d: "0.1km",
      a: "대구 중구 교동2길 37-8",
      h: { ko: "17:00–24:00 · 금·토 ~01:00", en: "17:00–24:00 · Fri–Sat to 01:00", zh: "17:00–24:00 · 周五六至 01:00" },
      s: { ko: "교동에서 가장 먼저 소문난 막창집. 초벌 막창에 막장, 서비스로 나오는 우동이 시그니처.", en: "The first makchang house in Gyodong to earn a name. Pre-grilled intestine with fermented bean paste, and udon on the house.", zh: "校洞最早出名的小肠烤肉店。先烤小肠配大酱，附赠乌冬面是招牌。" },
      t: { ko: "오픈 직후 17시나 21시 이후가 여유", en: "Go at 17:00 or after 21:00", zh: "17点刚开门或21点后较空" }
    },
    {
      c: 1, b: "h", n: { ko: "막삼가", en: "Mak Samga (막삼가)", zh: "幕三街 (Mak Samga)" },
      w: { ko: "도보 2분", en: "2 min walk", zh: "步行 2 分钟" }, d: "0.1km",
      a: "대구 중구 교동길 70 1층",
      h: { ko: "매일 17:00–24:00", en: "Daily 17:00–24:00", zh: "每日 17:00–24:00" },
      s: { ko: "막창과 삼겹을 함께 굽는 교동 로컬 단골집. 구글 4.9(리뷰 424) — 관광 리스트보다 이웃 발길이 많은 곳.", en: "A neighbourhood favourite grilling makchang and pork belly together. Google 4.9 (424 reviews) — more repeat locals than tourist lists.", zh: "小肠与五花肉同烤的本地常客店谷歌4.9分（424条），回头客比游客更多。" },
      t: { ko: "2인 이상이면 막창·삼겹 반반", en: "For two, order half intestine, half belly", zh: "两人可点半半小肠五花" }
    },
    {
      c: 1, b: "h", n: { ko: "남도횟집 (교동시장)", en: "Namdo Hoetjip · Gyodong Market (남도횟집)", zh: "南道生鱼店（校洞市场）(Namdo Hoetjip)" },
      w: { ko: "교동시장 도보 4분", en: "4 min walk · market", zh: "校洞市场步行 4 分钟" }, d: "0.2km",
      a: "대구 중구 경상감영길 165-5",
      h: { ko: "매일 10:30–22:00", en: "Daily 10:30–22:00", zh: "每日 10:30–22:00" },
      s: { ko: "교동시장 횟집거리의 50년 노포. 대구 10미 무침회와 따끈한 소라가 시그니처.", en: "A 50-year fixture on the market's raw-fish row. Its spicy muchimhoe is on Daegu's ten-food list, served with warm conch.", zh: "校洞市场生鱼片街的五十年老店。辣拌生鱼片是大邱十大美食之一，配热海螺。" },
      t: { ko: "옆집 납작만두(현금)를 함께", en: "Add next-door flat dumplings (cash)", zh: "顺便加隔壁扁饺子（现金）" }
    },
    {
      c: 1, b: "h", n: { ko: "남경분식", en: "Namgyeong Bunsik (남경분식)", zh: "南京小吃 (Namgyeong Bunsik)" },
      w: { ko: "교동시장 도보 3분", en: "3 min walk · market", zh: "校洞市场步行 3 分钟" }, d: "0.2km",
      a: "대구 중구 교동시장 안 (개미분식 골목 입구)",
      h: { ko: "11:00–19:00 (시장 영업시간 내)", en: "11:00–19:00 (market hours)", zh: "11:00–19:00（市场营业时间内）" },
      s: { ko: "지도에도 잘 안 나오는 교동시장 분식 노포. 떡볶이·양념오뎅·납작만두 모두 4,000원대, 감주 서비스.", en: "A market stall that barely appears on maps. Tteokbokki, sauce oden and flat dumplings all around ₩4,000, with a free sweet rice drink.", zh: "地图上都难找的市场小吃老铺。炒年糕、酱鱼饼、扁饺子都在4,000韩元价位，还送甜米露。" },
      t: { ko: "'개미분식' 골목 입구에서 찾기", en: "Look near the Gaemi Bunsik alley mouth", zh: "在“蚂蚁小吃”巷口附近找" }
    },
    {
      c: 1, b: "f", n: { ko: "동아식당", en: "Donga Sikdang (동아식당)", zh: "东阿食堂 (Donga Sikdang)" },
      w: { ko: "도보 5분", en: "5 min walk", zh: "步行 5 分钟" }, d: "0.3km",
      a: "대구 중구 국채보상로125길 14",
      h: { ko: "매일 11:30–20:00", en: "Daily 11:30–20:00", zh: "每日 11:30–20:00" },
      s: { ko: "고등어소면 하나로 국채보상공원 앞 카페 상권을 연 집. 10석 남짓이라 평일도 웨이팅.", en: "One bowl of mackerel somyeon made this corner a café district. About ten seats, so even weekdays bring a wait.", zh: "凭一碗鲭鱼素面带火了国债报偿公园一带。只有十来席，平日也要排队。" },
      t: { ko: "이름 적어두고 근처 카페 다녀오기", en: "Leave your name, wait in a café", zh: "登记后去附近咖啡馆等" }
    },
    {
      c: 1, b: "h", n: { ko: "교동따로식당", en: "Gyodong Ddaro Sikdang (교동따로식당)", zh: "校洞分碗汤饭 (Gyodong Ddaro)" },
      w: { ko: "도보 12분", en: "12 min walk", zh: "步行 12 分钟" }, d: "0.8km",
      a: "대구 중구 경상감영1길 11 1층",
      h: { ko: "24시간 연중무휴", en: "24 hours, every day", zh: "24 小时全年无休" },
      s: { ko: "만경관 뒤 골목의 24시간 따로국밥. 선지가 따로 나오고 국물이 진해 해장·혼밥·야식 모두에 맞는다.", en: "A 24-hour pork soup rice behind Mangeyonggwan, blood curd served separately, broth deep — hangover cure, solo meal, late-night bowl.", zh: "万名馆后巷的24小时猪肉汤饭。血肠另盛、汤头浓厚，解酒、独食、夜宵都合适。" },
      t: { ko: "새벽 2시 이후에도 문을 연다", en: "Still open after 2 a.m.", zh: "凌晨两点后仍在营业" }
    },
    {
      c: 1, b: "f", n: { ko: "낙영찜갈비 본점", en: "Nangyeong Jjimgalbi (낙영찜갈비)", zh: "乐英炖排骨 (Nangyeong Jjimgalbi)" },
      w: { ko: "도보 15분", en: "15 min walk", zh: "步行 15 分钟" }, d: "0.9km",
      a: "대구 중구 동덕로36길 9-17",
      h: { ko: "매일 10:00–21:00", en: "Daily 10:00–21:00", zh: "每日 10:00–21:00" },
      s: { ko: "동인동 찜갈비 골목의 1티어. 남은 양념에 김가루·참기름 볶음밥은 필수 코스.", en: "The biggest name in Dongin-dong's braised short-rib alley. Finish with fried rice in the leftover sauce, seaweed, sesame oil.", zh: "东仁洞炖排骨一条街的头号店。用剩酱汁加海苔碎和香油炒饭是必点收尾。" },
      t: { ko: "2인 1대 + 볶음밥", en: "One rack for two, plus fried rice", zh: "两人一份排骨加炒饭" }
    },
    {
      c: 1, b: "f", n: { ko: "왕거미식당", en: "Wanggeomi Sikdang (왕거미식당)", zh: "王蜘蛛食堂 (Wanggeomi Sikdang)" },
      w: { ko: "도보 19분", en: "19 min walk", zh: "步行 19 分钟" }, d: "1.2km",
      a: "대구 중구 국채보상로 696-8",
      h: { ko: "16:00–21:00 · 일 휴무", en: "16:00–21:00 · closed Sun", zh: "16:00–21:00 · 周日休" },
      s: { ko: "1976년부터 이어온 뭉티기·오드레기 노포. 당일 도축분이 떨어지면 끝이라 이른 저녁이 안전.", en: "A 1976 institution for raw beef and odregi. When the day's beef runs out it closes, so go early evening.", zh: "1976年开业的生牛肉老店。当天肉卖完就打烊，傍晚早点去最稳。" },
      t: { ko: "냄새가 배니 외출 전엔 피하기", en: "Smoky clothes — not before an outing", zh: "油烟味重，外出前别去" }
    },

    {
      c: 2, b: "f", n: { ko: "까사넬로", en: "Casanello (까사넬로)", zh: "卡萨内洛 (Casanello)" },
      w: { ko: "도보 3분", en: "3 min walk", zh: "步行 3 分钟" }, d: "0.2km",
      a: "대구 중구 동문동 18-5",
      h: { ko: "매일 12:00–22:00", en: "Daily 12:00–22:00", zh: "每日 12:00–22:00" },
      s: { ko: "이탈리아 빈티지 감성의 에스프레소·케이크집. 노출콘크리트에 유럽 가구, 1·2층 모두 카페.", en: "Italian-vintage espresso and cake in exposed concrete with European furniture — two floors of seats.", zh: "意大利复古风浓缩咖啡与蛋糕店。清水混凝土配欧式家具，一二层都是座位。" },
      t: { ko: "산미 적은 커피 + 케이크", en: "Low-acid coffee, one cake", zh: "低酸咖啡配蛋糕" }
    },
    {
      c: 2, b: "h", n: { ko: "블렌딩바 대구", en: "Blending Bar Daegu (블렌딩바)", zh: "混合酒吧 (Blending Bar)" },
      w: { ko: "도보 2분", en: "2 min walk", zh: "步行 2 分钟" }, d: "0.1km",
      a: "대구 중구 교동2길 37-8 2층",
      h: { ko: "19:15–02:00 · 금·토 ~04:00", en: "19:15–02:00 · Fri–Sat to 04:00", zh: "19:15–02:00 · 周五六至 04:00" },
      s: { ko: "숙소에서 가장 가까운 바. 초저녁엔 대화, 늦으면 음악이 올라가는 교동식 라운지.", en: "The closest bar to the house. Conversation early, louder music late — a Gyodong-style lounge.", zh: "离民宿最近的酒吧。早场适合聊天，夜深音乐渐起。" },
      t: { ko: "걸어서 2분, 마지막 잔으로", en: "Two minutes on foot, for the last drink", zh: "步行两分钟，喝最后一杯" }
    },
    {
      c: 2, b: "h", n: { ko: "스몰스 레코드바", en: "smalls Record Bar (스몰스)", zh: "smalls 唱片酒吧 (smalls)", },
      w: { ko: "도보 3분", en: "3 min walk", zh: "步行 3 分钟" }, d: "0.2km",
      a: "대구 중구 국채보상로123길 22 1층",
      h: { ko: "매일 19:00–02:00", en: "Daily 19:00–02:00", zh: "每日 19:00–02:00" },
      s: { ko: "10석 남짓 L자 바. DJ가 고른 LP와 칵테일이 전부, 안주는 과자와 초콜릿 정도.", en: "A ten-seat L-shaped bar where the records and the cocktails are the whole menu; snacks are crackers and chocolate.", zh: "十来个座位的L形吧台。DJ的黑胶和鸡尾酒就是全部，配酒只有饼干和巧克力。" },
      t: { ko: "2차로 짧게 들르기", en: "A short second stop", zh: "适合当第二站" }
    },
    {
      c: 2, b: "h", n: { ko: "바이닐바이브", en: "Vinyl Vibe (바이닐바이브)", zh: "黑胶氛围 (Vinyl Vibe)" },
      w: { ko: "도보 4분", en: "4 min walk", zh: "步行 4 分钟" }, d: "0.3km",
      a: "대구 중구 국채보상로123길 16",
      h: { ko: "매일 12:00–24:00 · 금·토 ~00:30", en: "Daily 12:00–24:00 · Fri–Sat to 00:30", zh: "每日 12:00–24:00 · 周五六至 00:30" },
      s: { ko: "LP를 골라 들으며 커피·맥주를 마시는 공간. 비 오는 날 오후를 통째로 쓰기 좋다.", en: "Pick a record, then coffee or beer. A good way to spend a rainy afternoon whole.", zh: "自选黑胶，边听边喝咖啡或啤酒。下雨的下午可以整个泡在这里。" },
      t: { ko: "창가 자리 + LP 한 장", en: "Window seat, one record", zh: "窗边座位加一张唱片" }
    },
    {
      c: 2, b: "h", n: { ko: "교동낙원", en: "Gyodong Nagwon (교동낙원)", zh: "校洞乐园 (Gyodong Nagwon)" },
      w: { ko: "도보 6분", en: "6 min walk", zh: "步行 6 分钟" }, d: "0.4km",
      a: "대구 중구 국채보상로 627 1층",
      h: { ko: "매일 18:00–02:00 · 주말 17:00 오픈", en: "Daily 18:00–02:00 · weekends from 17:00", zh: "每日 18:00–02:00 · 周末 17:00 开" },
      s: { ko: "모츠나베(대창전골)와 사시미로 유명한 교동 야간 코스. 구글 4.9(리뷰 107).", en: "Known for motsunabe and sashimi — a Gyodong night staple. Google 4.9 (107 reviews).", zh: "以牛肠锅和生鱼片出名的校洞夜间必去。谷歌4.9分（107条）。" },
      t: { ko: "맵기 선택 가능", en: "Choose your spice level", zh: "可选辣度" }
    },
    {
      c: 2, b: "f", n: { ko: "수평적관계", en: "Horizontal Relationship (수평적관계)", zh: "水平关系 (Horizontal Relationship)" },
      w: { ko: "차 7분", en: "7 min by car", zh: "车程 7 分钟" }, d: { ko: "삼덕동", en: "Samdeok-dong", zh: "三德洞" },
      a: "대구 중구 동덕로26길 115",
      h: { ko: "매일 10:00–22:00", en: "Daily 10:00–22:00", zh: "每日 10:00–22:00" },
      s: { ko: "직화 로스터로 직접 볶는 핸드드립 전문점. 중정을 둘러싼 그레이톤 무채색 공간.", en: "A hand-drip specialist roasting on a direct-fire roaster, in a grey room wrapped around a courtyard.", zh: "直火烘焙的手冲专门店。围绕中庭的灰色调空间。" },
      t: { ko: "오후 햇살 시간대", en: "Afternoon light", zh: "下午光线最好" }
    },
    {
      c: 2, b: "h", n: { ko: "아르티커피", en: "Arti Coffee (아르티커피)", zh: "阿尔蒂咖啡 (Arti Coffee)" },
      w: { ko: "차 6분", en: "6 min by car", zh: "车程 6 分钟" }, d: { ko: "봉산문화거리", en: "Bongsan", zh: "凤山文化街" },
      a: "대구 중구 봉산문화길 24 1층",
      h: { ko: "11:00–20:00 · 목 휴무", en: "11:00–20:00 · closed Thu", zh: "11:00–20:00 · 周四休" },
      s: { ko: "바리스타·문화기획자·예술가가 함께 만든 유럽 감성 카페. 초코 카스테라와 아르티 라테가 시그니처.", en: "A European-feel café run by a barista, a cultural planner and an artist — chocolate kasutera and the Arti latte.", zh: "由咖啡师、文化策划人和艺术家共同打造的欧式咖啡馆。巧克力长崎蛋糕与Arti拿铁是招牌。" },
      t: { ko: "봉산문화거리 산책과 함께", en: "Pair with the Bongsan art street", zh: "与凤山文化街散步一起" }
    },

    {
      c: 3, b: "f", n: { ko: "국채보상운동기념공원", en: "Gukchae Bosang Memorial Park (국채보상공원)", zh: "国债报偿运动纪念公园 (Gukchae Bosang Park)" },
      w: { ko: "도보 12분", en: "12 min walk", zh: "步行 12 分钟" }, d: { ko: "0.8km · 둘레 1km", en: "0.8 km · 1 km loop", zh: "0.8 公里 · 环路 1 公里" },
      a: "대구 중구 국채보상로 670",
      h: { ko: "24시간 · 가로등 양호", en: "24 hours · well lit", zh: "24 小时 · 照明良好" },
      s: { ko: "숙소에서 가장 가까운 조깅 코스. 둘레 약 1km 평지, 255m 대왕참나무 오솔길과 연못 데크.", en: "The nearest jogging loop: about 1 km of flat path, a 255 m oak avenue and a pond deck.", zh: "离民宿最近的慢跑路线。约1公里平地环路，255米大橡树步道和池塘木栈道。" },
      t: { ko: "20~40분 워밍업 코스", en: "A 20–40 min warm-up", zh: "20–40分钟热身路线" }
    },
    {
      c: 3, b: "f", n: { ko: "신천 둔치 러닝", en: "Sincheon Riverside Run (신천 둔치)", zh: "新川河畔跑步 (Sincheon Riverside)" },
      w: { ko: "동신교까지 차 6분", en: "6 min by car to Dongsin bridge", zh: "到东新桥车程 6 分钟" }, d: { ko: "5km 코스", en: "5 km course", zh: "5 公里路线" },
      a: "대구 중구 동인동4가 동신교 일대",
      h: { ko: "24시간 · 야간 조명", en: "24 hours · lights at night", zh: "24 小时 · 夜间照明" },
      s: { ko: "대봉교~칠성교 약 5km 평지. 보행·자전거 분리, 탄성 포장, 칠성시장 인근 야간 조명.", en: "About 5 km flat from Daebong to Chilseong bridge, separate foot and bike lanes, springy surface, lights near Chilseong market.", zh: "大凤桥至七星桥约5公里平路。人行与自行车道分离，弹性路面，七星市场附近夜间照明好。" },
      t: { ko: "차 6분 이동 후 5km", en: "Drive 6 min, run 5 km", zh: "车程6分钟，跑5公里" }
    },
    {
      c: 3, b: "f", n: { ko: "수성못 둘레길", en: "Suseong Lake Loop (수성못)", zh: "寿城池环湖路 (Suseong Lake)" },
      w: { ko: "차 17분", en: "17 min by car", zh: "车程 17 分钟" }, d: { ko: "2,020m 순환", en: "2,020 m loop", zh: "2,020 米环线" },
      a: "대구 수성구 수성못길 37",
      h: { ko: "24시간 무료 · 3호선 수성못역 300m", en: "24 h, free · 300 m from Suseongmot stn.", zh: "24 小时免费 · 距寿城池站 300 米" },
      s: { ko: "한 바퀴 2,020m 순환. 서쪽 마사토 흙길, 동쪽 수변데크, 남쪽 왕벚나무길 — 차량 없는 호수길.", en: "A 2,020 m loop: dirt path west, waterside deck east, cherry avenue south — no cars on the lake path.", zh: "一圈2,020米的环湖路。西侧土路、东侧水边木栈道、南侧樱花道，全程无车。" },
      t: { ko: "음악 들으며 2~4km", en: "2–4 km with music", zh: "边听音乐跑2–4公里" }
    },
    {
      c: 3, b: "f", n: { ko: "경상감영공원 → 근대골목", en: "Gamyeong Park → Modern Alleys (경상감영공원)", zh: "庆尚监营公园 → 近代胡同 (Gamyeong Park)" },
      w: { ko: "도보 11분", en: "11 min walk", zh: "步行 11 分钟" }, d: { ko: "약 3km · 1시간~1시간 30분", en: "about 3 km · 1–1.5 h", zh: "约 3 公里 · 1–1.5 小时" },
      a: "대구 중구 포정동 경상감영공원",
      h: { ko: "야외 24시간 · 저녁 조명", en: "Outdoors 24 h · evening lights", zh: "户外 24 小时 · 傍晚灯光" },
      s: { ko: "공원에서 만경관·계산성당·청라언덕까지 약 3km. 차 없는 골목과 옛 건물 조명이 이어진다.", en: "About 3 km from the park through Mangeyonggwan, Gyesan Cathedral and Cheongna Hill — car-free alleys and lit old buildings.", zh: "从公园经万名馆、桂山圣堂到青罗山丘约3公里，无车胡同与老建筑灯光相连。" },
      t: { ko: "밤 산책으로도 좋은 코스", en: "Also a good night walk", zh: "也适合夜间散步" }
    },
    {
      c: 3, b: "h", n: { ko: "봉산문화거리 산책", en: "Bongsan Culture Street (봉산문화거리)", zh: "凤山文化街散步 (Bongsan Culture St.)" },
      w: { ko: "차 6분", en: "6 min by car", zh: "车程 6 分钟" }, d: { ko: "약 1km · 20~30분", en: "about 1 km · 20–30 min", zh: "约 1 公里 · 20–30 分钟" },
      a: "대구 중구 봉산문화길 일대",
      h: { ko: "상점별 상이 · 대개 20시까지", en: "Shop by shop · mostly to 20:00", zh: "各店不同 · 多至 20:00" },
      s: { ko: "대구의 '작은 인사동'. 갤러리·공방·카페가 이어지는 약 1km, 20~30분.", en: "Daegu's \"little Insadong\": about 1 km of galleries, studios and cafés in 20–30 minutes.", zh: "大邱的“小仁寺洞”。画廊、工坊、咖啡馆相连约1公里，20–30分钟。" },
      t: { ko: "비 오는 날·한적한 오전", en: "Rainy days, quiet mornings", zh: "雨天或清静的上午" }
    },
    {
      c: 3, b: "f", n: { ko: "김광석 다시그리기길", en: "Kim Gwangseok Street (김광석길)", zh: "金光石再绘之路 (Kim Gwangseok St.)" },
      w: { ko: "차 9분", en: "9 min by car", zh: "车程 9 分钟" }, d: { ko: "왕복 약 1km", en: "about 1 km round trip", zh: "往返约 1 公里" },
      a: "대구 중구 대봉동 6-11",
      h: { ko: "24시간 개방", en: "Open 24 hours", zh: "24 小时开放" },
      s: { ko: "벽화 골목 왕복 약 1km. 대봉교로 내려가면 신천 5km 코스와 바로 연결된다.", en: "A mural alley about 1 km round trip; drop to Daebong bridge and it meets the 5 km Sincheon course.", zh: "壁画胡同往返约1公里。从大凤桥下去可直接接上新川5公里路线。" },
      t: { ko: "경사·계단 있어 산책용", en: "Slopes and stairs — walk it", zh: "有坡度和台阶，适合散步" }
    },

    {
      c: 4, b: "f", n: { ko: "교동시장 & 교동 골목", en: "Gyodong Market & Alleys (교동시장)", zh: "校洞市场与胡同 (Gyodong Market)" },
      w: { ko: "도보 3분", en: "3 min walk", zh: "步行 3 分钟" }, d: "0.2km",
      a: "대구 중구 교동2길 11",
      h: { ko: "11:00–19:00 (매장별 상이)", en: "11:00–19:00 (shop by shop)", zh: "11:00–19:00（各店不同）" },
      s: { ko: "100m 골목에 횟집거리·분식 노포·납작만두, 바깥 골목엔 빈티지숍과 바. 한 시간 걷기 가장 밀도 높은 구역.", en: "In 100 m: a raw-fish row, old snack stalls, flat dumplings; outside, vintage shops and bars. The densest hour of walking here.", zh: "百米胡同里有生鱼片街、小吃老铺和扁饺子，外围是复古小店与酒吧。散步密度最高的一带。" },
      t: { ko: "점심 전 11시가 가장 한적", en: "Quietest just before 11:00", zh: "11点前最清静" }
    },
    {
      c: 4, b: "h", n: { ko: "13상점", en: "13 Shop (13상점)", zh: "13商店 (13 Shop)" },
      w: { ko: "도보 3분", en: "3 min walk", zh: "步行 3 分钟" }, d: "0.2km",
      a: "대구 중구 교동2길 47 1층",
      h: { ko: "13:00–20:00 · 월 휴무", en: "13:00–20:00 · closed Mon", zh: "13:00–20:00 · 周一休" },
      s: { ko: "교동 골목 감성이 가장 진한 빈티지·소품샵. 엽서·키링 하나 고르기 좋은 10분.", en: "The most Gyodong-feeling vintage shop — ten minutes to pick a postcard or a keyring.", zh: "校洞气味最浓的复古杂货店。十分钟挑一张明信片或钥匙扣。" },
      t: { ko: "소액 현금 준비", en: "Bring a little cash", zh: "备些现金" }
    },
    {
      c: 4, b: "h", n: { ko: "홀리데이비지터샵", en: "Holiday Visitor Shop (홀리데이비지터샵)", zh: "Holiday Visitor 商店 (Holiday Visitor)" },
      w: { ko: "도보 3분", en: "3 min walk", zh: "步行 3 分钟" }, d: "0.2km",
      a: "대구 중구 경상감영길 184 1층",
      h: { ko: "매일 12:00–20:00", en: "Daily 12:00–20:00", zh: "每日 12:00–20:00" },
      s: { ko: "직접 만든 가방, 빈티지 인형·LP, 해외 잡화와 병와인까지 있는 편집숍. 선물 사기 좋다.", en: "An edit shop of handmade bags, vintage dolls and records, imported odds and natural wine — good for gifts.", zh: "自制包袋、复古玩偶与黑胶、海外杂货和自然酒的买手店。适合买礼物。" },
      t: { ko: "가방·LP 구경", en: "Bags and records", zh: "看看包和黑胶" }
    },
    {
      c: 4, b: "f", n: { ko: "대구근대역사관", en: "Daegu Modern History Museum (대구근대역사관)", zh: "大邱近代历史馆 (Modern History Museum)" },
      w: { ko: "도보 12분", en: "12 min walk", zh: "步行 12 分钟" }, d: "0.8km",
      a: "대구 중구 경상감영길 67",
      h: { ko: "화–일 09:00–18:00 · 월 휴관 · 무료", en: "Tue–Sun 09:00–18:00 · closed Mon · free", zh: "周二–日 09:00–18:00 · 周一闭馆 · 免费" },
      s: { ko: "옛 대구부청사 건물. 근대 골목 투어의 출발점이자 비 오는 날 실내 카드.", en: "The old Daegu city hall: the start of the modern alley walk and the rainy-day indoor card.", zh: "旧大邱府厅建筑。近代胡同游的起点，也是雨天的室内去处。" },
      t: { ko: "무료 관람, 30~40분", en: "Free, 30–40 minutes", zh: "免费参观，30–40分钟" }
    },
    {
      c: 4, b: "f", n: { ko: "청라언덕 & 3.1만세운동길", en: "Cheongna Hill & March 1st Road (청라언덕)", zh: "青罗山丘与3·1万岁路 (Cheongna Hill)" },
      w: { ko: "차 9분 · 도보 32분", en: "9 min by car · 32 on foot", zh: "车程 9 分钟 · 步行 32 分钟" }, d: "2.1km",
      a: "대구 중구 달구벌대로 2029",
      h: { ko: "야외 24시간 개방", en: "Outdoors, open 24 hours", zh: "户外，24 小时开放" },
      s: { ko: "선교사 주택과 90계단, 계산성당으로 이어지는 근대 골목의 하이라이트.", en: "Missionary houses, the 90 steps and on to Gyesan Cathedral — the highlight of the modern alleys.", zh: "传教士住宅、90级台阶通往桂山圣堂，是近代胡同的精华。" },
      t: { ko: "낮 사진 · 저녁 산책", en: "Photos by day, a walk by night", zh: "白天拍照，傍晚散步" }
    },
    {
      c: 4, b: "f", n: { ko: "서문시장 & 서문야시장", en: "Seomun Market & Night Market (서문시장)", zh: "西门市场与夜市 (Seomun Market)" },
      w: { ko: "차 9분", en: "9 min by car", zh: "车程 9 分钟" }, d: "2.0km",
      a: "대구 중구 큰장로26길 45",
      h: { ko: "시장 09:00–18:00 · 야시장 금·토 19:00–23:30, 일 ~22:30", en: "Market 09:00–18:00 · night market Fri–Sat 19:00–23:30, Sun to 22:30", zh: "市场 09:00–18:00 · 夜市周五六 19:00–23:30、日 至 22:30" },
      s: { ko: "낮엔 포목·건어물, 밤엔 350m 야시장. 납작만두·칼국수·찹쌀수제비가 기본값.", en: "Fabric and dried fish by day, a 350 m night market after 19:00 — flat dumplings, noodles, sweet rice dumplings.", zh: "白天是布匹与干货，夜里是350米夜市。扁饺子、刀削面、糯米团子是标配。" },
      t: { ko: "야시장은 금·토·일만", en: "Night market: Fri–Sun only", zh: "夜市仅周五、六、日" }
    },
    {
      c: 4, b: "f", n: { ko: "앞산전망대 & 케이블카", en: "Apsan Observatory & Cable Car (앞산케이블카)", zh: "前山展望台与缆车 (Apsan Cable Car)" },
      w: { ko: "차 17분", en: "17 min by car", zh: "车程 17 分钟" }, d: "8.0km",
      a: "대구 남구 앞산순환로 574-114",
      h: { ko: "케이블카 10:30–19:30 · 금·토·일 ~22:00", en: "Cable car 10:30–19:30 · Fri–Sun to 22:00", zh: "缆车 10:30–19:30 · 周五六日至 22:00" },
      s: { ko: "해발 660m에서 대구 시내를 통째로 내려다보는 야경 최고봉. 케이블카 왕복 14,000원.", en: "The best night view, 660 m up over the whole city. Cable car return ₩14,000.", zh: "海拔660米俯瞰大邱全市的最佳夜景。缆车往返14,000韩元。" },
      t: { ko: "막차가 일찍 끊긴다 — 역산할 것", en: "The last car is early — plan backwards", zh: "末班车较早，要倒算时间" }
    },
    {
      c: 4, b: "f", n: { ko: "대구간송미술관", en: "Daegu Kansong Art Museum (대구간송미술관)", zh: "大邱涧松美术馆 (Kansong Art Museum)" },
      w: { ko: "차 25분", en: "25 min by car", zh: "车程 25 分钟" }, d: "11.9km",
      a: "대구 수성구 미술관로 70",
      h: { ko: "화–일 10:00–18:00 (입장 17:00까지) · 월 휴관", en: "Tue–Sun 10:00–18:00 (last entry 17:00) · closed Mon", zh: "周二–日 10:00–18:00（17:00 停止入场）· 周一闭馆" },
      s: { ko: "2025년 개관한 대구 최대 핫플. 지금은 《겸재 정선 — 조선의 눈으로 조선을 그리다》(2026.9.16~12.27).", en: "Opened in 2025 and now the city's biggest draw. Currently 《Jeong Seon》 (16 Sep – 27 Dec 2026).", zh: "2025年开馆的大邱最热门地标。正在展出《谦斋郑敾》（2026.9.16–12.27）。" },
      t: { ko: "특별전 14,000원 · 대구시민 20% 할인", en: "Special show ₩14,000 · 20% off for Daegu residents", zh: "特展14,000韩元 · 大邱市民八折" }
    },

    {
      c: 5, b: "h", n: { ko: "세븐일레븐 대구교동수현점", en: "7-Eleven Gyodong Suhyeon (세븐일레븐)", zh: "7-Eleven 校洞水贤店 (7-Eleven)" },
      w: { ko: "도보 1분", en: "1 min walk", zh: "步行 1 分钟" }, d: "0.1km",
      a: "대구 중구 교동2길 31",
      h: { ko: "24시간", en: "24 hours", zh: "24 小时" },
      s: { ko: "숙소 바로 옆. 밤 12시 이후 필요한 것은 사실상 여기서 해결된다.", en: "Right next door — after midnight, this is where everything gets solved.", zh: "就在民宿旁边。午夜之后需要的东西基本都在这里解决。" },
      t: { ko: "우산·상비약도 있음", en: "Umbrellas and basics too", zh: "也有雨伞和常备用品" }
    },
    {
      c: 5, b: "h", n: { ko: "GS25 교동타운점", en: "GS25 Gyodong Town (GS25)", zh: "GS25 校洞Town店 (GS25)" },
      w: { ko: "도보 4분", en: "4 min walk", zh: "步行 4 分钟" }, d: "0.2km",
      a: "대구 중구 교동4길 30",
      h: { ko: "24시간", en: "24 hours", zh: "24 小时" },
      s: { ko: "교동 안쪽 24시간 편의점. 과자·아이스크림·주류까지 기본기가 탄탄하다.", en: "A 24-hour convenience store inside Gyodong — solid basics from snacks to ice cream and drinks.", zh: "校洞内的24小时便利店。零食、冰淇淋、酒水等基础商品齐全。" },
      t: { ko: "ATM 가능", en: "ATM inside", zh: "内有ATM" }
    },
    {
      c: 5, b: "h", n: { ko: "CU 대구중구문화점", en: "CU Jung-gu Munhwa (CU)", zh: "CU 中区文化店 (CU)" },
      w: { ko: "도보 4분", en: "4 min walk", zh: "步行 4 分钟" }, d: "0.3km",
      a: "대구 중구 국채보상로123길 16",
      h: { ko: "24시간", en: "24 hours", zh: "24 小时" },
      s: { ko: "국채보상로 골목의 24시간 편의점. 교동 안쪽이라 늦은 밤 동선에 편하다.", en: "A 24-hour store on the Gukchaebosang-ro alley, handy late at night.", zh: "国债报偿路巷内的24小时便利店，深夜动线方便。" },
      t: { ko: "택배·ATM 가능", en: "Parcel and ATM", zh: "可寄件、有ATM" }
    },
    {
      c: 5, b: "h", n: { ko: "대하약국", en: "Daeha Pharmacy (대하약국)", zh: "大荷药局 (Daeha Pharmacy)" },
      w: { ko: "도보 7분", en: "7 min walk", zh: "步行 7 分钟" }, d: "0.4km",
      a: "대구 중구 중앙대로 447-1",
      h: { ko: "09:00–22:00 · 토 ~22:30", en: "09:00–22:00 · Sat to 22:30", zh: "09:00–22:00 · 周六至 22:30" },
      s: { ko: "교동권에서 가장 늦게까지 여는 약국. 상비약·해열제·밴드류까지.", en: "The latest-closing pharmacy around Gyodong — basics, fever medicine, bandages.", zh: "校洞一带营业最晚的药局。常备药、退烧药、创可贴都有。" },
      t: { ko: "일요일 영업은 확인", en: "Check Sunday hours", zh: "周日营业需确认" }
    },
    {
      c: 5, b: "h", n: { ko: "올리브영 대구동성로점", en: "Olive Young Dongseongno (올리브영)", zh: "Olive Young 东城路店 (Olive Young)" },
      w: { ko: "도보 8분", en: "8 min walk", zh: "步行 8 分钟" }, d: "0.5km",
      a: "대구 중구 국채보상로 593",
      h: { ko: "10:00–22:00", en: "10:00–22:00", zh: "10:00–22:00" },
      s: { ko: "국채보상로변 올리브영. 여행용 화장품·마스크팩·상비용품 보충에 가장 빠르다.", en: "Olive Young on Gukchaebosang-ro — the fastest refill for travel cosmetics, masks and essentials.", zh: "国债报偿路上的Olive Young，补旅行化妆品、面膜和日用品最快。" },
      t: { ko: "여권 들고 택스리펀", en: "Passport for tax refund", zh: "带护照可退税" }
    },
    {
      c: 5, b: "h", n: { ko: "GS더프레시 대구역풍경채점", en: "GS The Fresh Daegu Station (GS더프레시)", zh: "GS The Fresh 大邱站店 (GS The Fresh)" },
      w: { ko: "차 4분 · 도보 20분", en: "4 min by car · 20 on foot", zh: "车程 4 分钟 · 步行 20 分钟" }, d: "1.3km",
      a: "대구 중구 달성로26길 70",
      h: { ko: "생활 마트 · 매장 시간 확인", en: "Supermarket · check hours", zh: "生活超市 · 营业时间需确认" },
      s: { ko: "대구역 방향 생활 마트. 과일·물·간단한 장보기를 산책 겸 해결.", en: "A neighbourhood supermarket toward Daegu station — fruit, water, light groceries on a walk.", zh: "往大邱站方向的生活超市。水果、瓶装水、简单采购顺路解决。" },
      t: { ko: "대구역 구경과 함께", en: "Pair with Daegu station", zh: "可顺便逛大邱站" }
    },
    {
      c: 5, b: "h", n: { ko: "워시프렌즈 셀프빨래방", en: "Wash Friends Laundry (워시프렌즈)", zh: "Wash Friends 自助洗衣 (Wash Friends)" },
      w: { ko: "도보 2분", en: "2 min walk", zh: "步行 2 分钟" }, d: "0.1km",
      a: "대구 중구 교동4길 16",
      h: { ko: "24시간 무인", en: "24 hours, unattended", zh: "24 小时无人" },
      s: { ko: "무인 24시간 셀프빨래방. 세탁기·건조기 모두 있고 카드 결제.", en: "Unattended 24-hour laundry with washers, dryers and card payment.", zh: "无人24小时自助洗衣房，洗衣机烘干机齐全，可刷卡。" },
      t: { ko: "세탁+건조 약 1시간 30분", en: "Wash and dry, about 1.5 hours", zh: "洗加烘约1.5小时" }
    }
  ],

  routes: [
    {
      id: "r1", tag: { ko: "COURSE 01 · 반나절", en: "COURSE 01 · Half day", zh: "COURSE 01 · 半天" },
      title: { ko: "교동 반나절 로컬 발견", en: "Gyodong Half Day: Local Discovery", zh: "校洞半日 · 发现本地" },
      meta: { ko: "도보 약 3km · 12:00–22:00 · 점심부터 밤까지", en: "about 3 km on foot · 12:00–22:00 · lunch to night", zh: "步行约3公里 · 12:00–22:00 · 从午餐到夜晚" },
      steps: [
        { t: "12:00", q: "남경분식", n: { ko: "남경분식 · 교동시장", en: "Namgyeong Bunsik · Gyodong Market (남경분식)", zh: "南京小吃 · 校洞市场 (Namgyeong Bunsik)" }, m: { ko: "숙소 도보 3분 — 시장 분식으로 가볍게 시작", en: "3 min walk — start light with market snacks", zh: "步行3分钟——以市场小吃轻松开场" } },
        { t: "13:30", q: "까사넬로", n: { ko: "까사넬로 커피", en: "Coffee at Casanello (까사넬로)", zh: "卡萨内洛咖啡 (Casanello)" }, m: { ko: "도보 3분 — 골목 이탈리아 커피 한 잔", en: "3 min walk — an Italian espresso in the alley", zh: "步行3分钟——胡同里的意式咖啡" } },
        { t: "15:00", q: "13상점", n: { ko: "13상점 · 홀리데이비지터샵", en: "13 Shop · Holiday Visitor Shop (13상점)", zh: "13商店 · Holiday Visitor (13상점)" }, m: { ko: "도보 1분 — 빈티지숍 두 곳은 맞은편", en: "1 min walk — the two vintage shops face each other", zh: "步行1分钟——两家复古店隔街相望" } },
        { t: "18:30", q: "영남막창 교동점", n: { ko: "영남막창 교동점 (또는 막삼가)", en: "Yeongnam Makchang Gyodong (or Mak Samga) (영남막창)", zh: "岭南小肠 校洞店（或幕三街）(Yeongnam Makchang)" }, m: { ko: "도보 2분 — 17시 오픈 직후 아니면 21시 이후가 여유", en: "2 min walk — go at opening or after 21:00", zh: "步行2分钟——刚开门或21点后较空" } },
        { t: "21:00", q: "스몰스 레코드바", n: { ko: "스몰스 레코드바 (또는 블렌딩바)", en: "smalls Record Bar (or Blending Bar) (스몰스)", zh: "smalls唱片酒吧（或混合酒吧）(smalls)" }, m: { ko: "도보 3분 — LP와 칵테일로 하루를 닫는 2차", en: "3 min walk — close the day with records and cocktails", zh: "步行3分钟——用黑胶和鸡尾酒收尾" } }
      ]
    },
    {
      id: "r2", tag: { ko: "COURSE 02 · 종일", en: "COURSE 02 · Full day", zh: "COURSE 02 · 全天" },
      title: { ko: "대구 10미 하루 코스", en: "Daegu's Ten Foods in a Day", zh: "大邱十大美食一日路线" },
      meta: { ko: "도보 약 5km + 차 9분 · 09:00–22:00 · 월요일엔 근대역사관 휴관", en: "about 5 km on foot + 9 min by car · 09:00–22:00 · museum closed Mon", zh: "步行约5公里 + 车程9分钟 · 09:00–22:00 · 周一博物馆闭馆" },
      steps: [
        { t: "09:00", q: "군위식당 대구", n: { ko: "군위식당 고기밥 아침", en: "Breakfast at Gunwi Sikdang (군위식당)", zh: "军威食堂 肉汤饭早餐 (Gunwi Sikdang)" }, m: { ko: "차 6분 — 대구식 하루는 고기밥부터", en: "6 min by car — start the Daegu way with gogi-bap", zh: "车程6分钟——大邱的一天从肉汤饭开始" } },
        { t: "10:30", q: "대구근대역사관", n: { ko: "대구근대역사관 · 계산성당", en: "Modern History Museum · Gyesan Cathedral (대구근대역사관)", zh: "近代历史馆 · 桂山圣堂 (Modern History Museum)" }, m: { ko: "도보 11분 — 무료 관람 30~40분, 월 휴관", en: "11 min walk — free, 30–40 min, closed Mon", zh: "步行11分钟——免费参观30–40分钟，周一闭馆" } },
        { t: "12:30", q: "원조국수", n: { ko: "원조국수 칼국수 점심", en: "Lunch: kalguksu at Wonjo Guksu (원조국수)", zh: "元祖面条 刀削面午餐 (Wonjo Guksu)" }, m: { ko: "도보 11분 — 18시 전 도착, 일요일 휴무", en: "11 min walk — arrive before 18:00, closed Sun", zh: "步行11分钟——18点前到达，周日休" } },
        { t: "15:00", q: "청라언덕", n: { ko: "청라언덕 · 3.1만세운동길", en: "Cheongna Hill · March 1st Road (청라언덕)", zh: "青罗山丘 · 3·1万岁路 (Cheongna Hill)" }, m: { ko: "도보 5분 — 90계단과 선교사 주택", en: "5 min walk — the 90 steps and missionary houses", zh: "步行5分钟——90级台阶与传教士住宅" } },
        { t: "18:00", q: "왕거미식당", n: { ko: "왕거미식당 뭉티기", en: "Raw beef at Wanggeomi (왕거미식당)", zh: "王蜘蛛食堂 生牛肉 (Wanggeomi)" }, m: { ko: "차 4분 — 일 휴무, 당일 물량 소진 시 조기 마감", en: "4 min by car — closed Sun; closes early when sold out", zh: "车程4分钟——周日休，卖完提前收摊" } },
        { t: "20:30", q: "서문야시장", n: { ko: "서문야시장 (금·토·일)", en: "Seomun Night Market (Fri–Sun) (서문야시장)", zh: "西门夜市（周五六日）(Seomun Night Market)" }, m: { ko: "차 10분 — 야시장은 금·토·일만 운영", en: "10 min by car — night market Fri–Sun only", zh: "车程10分钟——夜市仅周五六日" } }
      ]
    },
    {
      id: "r3", tag: { ko: "COURSE 03 · 저녁", en: "COURSE 03 · Evening", zh: "COURSE 03 · 傍晚" },
      title: { ko: "러닝 & 야경", en: "A Run and a Night View", zh: "跑步与夜景" },
      meta: { ko: "차 이동 포함 · 17:30–21:30 · 11월은 케이블카 막차가 이르다", en: "with car legs · 17:30–21:30 · November's cable-car last run is early", zh: "含车程移动 · 17:30–21:30 · 11月缆车末班较早" },
      steps: [
        { t: "17:30", q: "국채보상운동기념공원", n: { ko: "국채보상공원 워밍업", en: "Warm-up at Gukchae Bosang Park (국채보상공원)", zh: "国债报偿公园热身 (Gukchae Bosang Park)" }, m: { ko: "숙소 도보 12분 — 1km 루프로 몸 풀기", en: "12 min walk — loosen up on the 1 km loop", zh: "步行12分钟——1公里环路热身" } },
        { t: "18:00", q: "신천 대봉교", n: { ko: "차 8분 → 신천 5km 러닝", en: "8 min by car → 5 km on Sincheon (신천)", zh: "车程8分钟 → 新川5公里 (Sincheon)" }, m: { ko: "대봉교 출발 — 평지 탄성 포장, 야간 조명", en: "Start at Daebong bridge — flat, springy, lit at night", zh: "从大凤桥出发——平地弹性路面，夜间有照明" } },
        { t: "19:30", q: "교동낙원", n: { ko: "숙소 샤워 후 교동낙원", en: "Shower, then Gyodong Nagwon (교동낙원)", zh: "回酒店洗漱后去校洞乐园 (Gyodong Nagwon)" }, m: { ko: "모츠나베로 소금 보충", en: "Refuel with motsunabe", zh: "用牛肠锅补充盐分" } },
        { t: "21:00", q: "앞산케이블카", n: { ko: "차 10분 → 앞산 케이블카 야경", en: "10 min by car → Apsan cable car night view (앞산케이블카)", zh: "车程10分钟 → 前山缆车夜景 (Apsan Cable Car)" }, m: { ko: "주말 정상 마지막 22:00 — 20:30 상행 탑승 목표", en: "Weekend last summit run 22:00 — board up by 20:30", zh: "周末山顶末班22:00——争取20:30前上车" } },
        { t: "22:30", q: "교동따로식당", n: { ko: "교동따로식당 (또는 야키토리도쿄)", en: "Gyodong Ddaro Sikdang (or Yakitori Tokyo) (교동따로식당)", zh: "校洞分碗汤饭（或烧鸟东京）(Gyodong Ddaro)" }, m: { ko: "심야 마무리 — 24시간 따로국밥", en: "A late finish — 24-hour pork soup rice", zh: "深夜收尾——24小时猪肉汤饭" } }
      ]
    }
  ]
};
