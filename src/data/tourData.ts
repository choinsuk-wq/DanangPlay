import { TourPackage, GolfCourse, VehicleOption, VillaOption } from '../types/tour';

export const COMPANY_INFO = {
  name: '다낭 자유여행 & 골프투어',
  legalName: 'DANANG PLAY TOUR & TRAVEL CO., LTD.',
  representative: '김다낭 / Le Van Minh',
  bizNumber: '0402198845 (베트남 관광청 정식 인가 라이선스)',
  koreanContact: '+84 974157108',
  vietnamContact: '+84 974157108',
  kakaoId: 'danangplay_golf',
  kakaoChannelUrl: 'https://pf.kakao.com/_YxiHdX/chat', // 카카오톡 채널 링크
  address: '254 Vo Nguyen Giap, Phuoc My, Son Tra, Da Nang, Vietnam',
  email: 'reservation@danangplay.com',
  workingHours: '연중무휴 한국시간 08:00 ~ 23:00 (현지 응급지원 24시간)',
};

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: '3n4d',
    category: 'golf',
    name: '3박 4일 명문 골프 & 힐링 코스',
    durationTag: '3박 4일 (54홀 라운딩/자유선택)',
    badge: '가장 인기있는 시그니처 코스',
    target: '휴가 일정에 맞춘 알찬 라운딩과 다낭 시내 힐링을 원하시는 골퍼',
    summary: '다낭의 랜드마크 코스 2~3회 라운딩과 미케비치 석양, 호이안 야경 투어까지 핵심만 담은 콤팩트 프리미엄 패키지',
    keyPoints: [
      '다낭 대표 명문 코스 (다낭 CC / 몽고메리 / 바나힐스 / 호이아나)',
      '단독 전용 차량 및 한국어 현지 매니저 풀케어',
      '라운딩 후 호이안 올드타운 감성 야경 투어 포함',
      '미케비치 5성급 리조트 or 프라이빗 풀빌라 숙박'
    ],
    included: [
      '전 일정 단독 전용 차량 및 전담 기사 (유류비, 톨게이트비 일체 포함)',
      '명문 골프장 18홀 2회 또는 3회 (그린피, 캐디피, 1/2 전동카트 포함)',
      '5성급 리조트 또는 럭셔리 풀빌라 숙박 (조식 포함)',
      '호이안 올드타운 단독 투어 차량 지원',
      '전 일정 여행자 안심 케어 (현지 한국어 카카오톡 24시간 핫라인)'
    ],
    excluded: [
      '국제선 왕복 항공권 (발권 대행 요청 가능)',
      '캐디 팁 (18홀 기준 400,000 ~ 500,000 VND / 약 2만5천원)',
      '일정 외 개인 경비 및 매너 팁',
      '중/석식 (선호하시는 로컬 맛집 및 미슐랭 레스토랑 자유 선택 안내)'
    ],
    days: [
      {
        day: 1,
        title: '다낭 야간 입국 & VIP 전용 픽업',
        subtitle: '심야 단독 피켓 미팅 후 리조트/풀빌라 프라이빗 체크인',
        stay: '5성급 비치 리조트 또는 프라이빗 풀빌라',
        vehicle: 'VIP 전용 단독 차량 (골프백/수하물 탑재)',
        meal: { dinner: '기내식 또는 개별 야식' },
        timeline: [
          { time: '22:00', activity: '다낭 국제공항 도착 & VIP 기사 미팅', description: '입국장 출구에서 고객님 성함 피켓을 든 전담 기사 단독 미팅 및 골프백 적재' },
          { time: '22:40', activity: '숙소(리조트/풀빌라) 이동 및 체크인', description: '단독 전용 차량으로 신속하고 편안하게 숙소 이동 (시내/미케비치 약 15~20분 소요)' },
          { time: '23:20 ~', activity: '웰컴 드링크 및 여장 풀기, 휴식', description: '비행 피로 회복 및 다음 날 1차전 라운딩을 위한 컨디션 조절 & 티오프 브리핑' }
        ]
      },
      {
        day: 2,
        title: '명문 코스 1차전 & 선셋 힐링',
        subtitle: '다낭 CC 또는 몽고메리 링크스 18홀 라운딩',
        meal: { breakfast: '리조트 조식 뷔페', lunch: '클럽하우스 개별식', dinner: '다낭 시내 BBQ 특식' },
        timeline: [
          { time: '07:30', activity: '숙소 픽업 후 골프장 이동', description: '전용 차량으로 여유 있게 골프장 이동 (약 15~20분 소요)' },
          { time: '08:30', activity: 'BRG 다낭 CC or 몽고메리 18홀 티오프', description: '관리가 완벽한 페어웨이에서 쾌적한 오전 라운딩' },
          { time: '13:30', activity: '클럽하우스 중식 및 샤워', description: '라운딩 후 개운한 스파 및 런치' },
          { time: '16:00', activity: '미케비치 카페 & 석양 감상', description: '세계 6대 해변 미케비치 루프탑 라운지에서 커피/칵테일 타임' },
          { time: '18:30', activity: '석식 및 자유 시간', description: '다낭 현지 맛집 탐방 후 프라이빗 풀빌라 휴식' }
        ]
      },
      {
        day: 3,
        title: '바나힐스 CC & 호이안 야경 투어',
        subtitle: '산악 챔피언십 코스 라운딩 + 유네스코 세계문화유산 호이안',
        meal: { breakfast: '숙소 조식', lunch: '클럽하우스 식사', dinner: '호이안 전통식 또는 강변 레스토랑' },
        timeline: [
          { time: '08:00', activity: '바나힐스 골프클럽 이동', description: '루크 도널드가 설계한 베트남 최고 산악형 명문 코스 이동' },
          { time: '09:00', activity: '바나힐스 CC 18홀 티오프', description: '시원한 산바람과 웅장한 지형 속 다이내믹한 샷' },
          { time: '14:30', activity: '호이안 올드타운으로 이동', description: '전용 차량으로 호이안 이동 (약 45분 소요)' },
          { time: '16:00', activity: '호이안 구시가지 산책 & 소원배 체험', description: '투본강 소원초 띄우기, 야시장, 풍등 포토존 감상' },
          { time: '20:30', activity: '다낭 숙소로 복귀', description: '편안한 단독 전용 차량으로 안전하게 숙소 이동' }
        ]
      },
      {
        day: 4,
        title: '자유 힐링, 쇼핑, 미식 & 심야 공항 샌딩',
        subtitle: '한시장 쇼핑, 선셋 디너, 전신 마사지 후 밤 23시 안전 귀국 샌딩',
        stay: '체크아웃 후 전용 차량 짐 보관 케어',
        vehicle: '전 일정 VIP 단독 전용 차량',
        meal: { breakfast: '숙소 조식 뷔페', lunch: '베트남 쌀국수/반쎄오 명가', dinner: '미케비치 시푸드 또는 한식 특식' },
        timeline: [
          { time: '11:00 ~ 12:00', activity: '숙소 여유로운 체크아웃 & 차량 짐 탑재', description: '조식 후 짐정리, 골프백 및 수하물을 전용 차량에 안전하게 적재' },
          { time: '12:30', activity: '다낭 3대 쌀국수 & 반쎄오 맛집 중식', description: '미슐랭 셀렉티드 로컬 퀴진 점심 식사' },
          { time: '14:00 ~ 17:00', activity: '한시장 & 핑크성당 & 콩카페 & 롯데마트 쇼핑', description: '망고, 아오자이, 라탄백, 베트남 커피 쇼핑 (기사님이 차량 대기하여 편안하게 짐 맡기고 쇼핑)' },
          { time: '17:30 ~ 19:30', activity: '미케비치 오션뷰 석양 만찬', description: '신선한 해산물 또는 BBQ 디너와 함께 다낭의 낭만적인 노을 감상' },
          { time: '20:00 ~ 22:00', activity: '출국 전 VIP 힐링 스파 90~120분 & 샤워', description: '여행 피로를 말끔히 풀어주는 전신 마사지 테라피 및 개운한 샤워' },
          { time: '22:30 ~ 23:00', activity: '다낭 국제공항 VIP 샌딩 (밤 23시경) & 출국 수속', description: '심야 귀국 항공편 2~3시간 전 공항 안전 샌딩, 기사님과 작별 후 귀국길' }
        ]
      }
    ]
  },
  {
    id: '4n5d',
    category: 'golf',
    name: '4박 5일 황제 골프 & 호이안 완전정복',
    durationTag: '4박 5일 (최대 72홀 명문 릴레이)',
    badge: 'VIP 풀빌라 & 프리미엄 올인클루시브 추천',
    target: '다낭 최고의 골프장 3~4곳을 모두 섭렵하고 럭셔리 풀빌라 라이프를 즐길 골퍼',
    summary: '세계 100대 링크스 호이아나 쇼어스부터 바나힐스, BRG, 빈펄, 라구나까지 아우르는 럭셔리 골프 투어의 결정판',
    keyPoints: [
      '바나힐스 GC 18홀 라운딩 + 썬월드 바나힐(골든브릿지) 연계 투어',
      '전 일정 최고급 단독 풀빌라 (단독 수영장 + 프라이빗 BBQ)',
      '호이안 올드타운 & 안방비치 핫플레이스 올데이 투어',
      '포드 트랜짓 / 29인승 럭셔리 리무진 전일정 전용 배차'
    ],
    included: [
      '전 일정 VIP 단독 전용 차량 (골프백 대용량 적재 전용 리무진)',
      '명문 골프장 18홀 3회 또는 4회 (그린피, 캐디피, 1/2 전동카트 포함)',
      '최고급 4~5베드룸 프라이빗 풀빌라 4박 (전담 조식 세팅)',
      '풀빌라 프라이빗 해산물 & 스테이크 BBQ 1회 무료 특전',
      '24시간 전담 한국어 매니저 비상 대응 서비스'
    ],
    excluded: [
      '국제선 왕복 항공권',
      '캐디 팁 (18홀 기준 400,000 ~ 500,000 VND / 약 2만5천원)',
      '일정 외 개인 쇼핑 및 주류'
    ],
    days: [
      {
        day: 1,
        title: 'VIP 야간 입국 & 럭셔리 풀빌라 입실',
        subtitle: '전용 리무진 심야 단독 픽업 및 프라이빗 웰컴 타임',
        stay: '프리미엄 4~5베드룸 단독 풀빌라',
        vehicle: 'VIP 리무진 전용 배차 (골프백 대용량 적재)',
        meal: { dinner: '기내식 또는 풀빌라 야식/웰컴 드링크' },
        timeline: [
          { time: '22:00', activity: '다낭 국제공항 도착 & VIP 리무진 픽업', description: '수하물 수령 후 입국장 출구에서 전담 기사 단독 피켓 미팅 및 골프백 적재' },
          { time: '22:40', activity: '프리미엄 풀빌라 이동 및 입실', description: '전용 리무진으로 쾌적하게 풀빌라로 이동 (약 20분 소요)' },
          { time: '23:20 ~', activity: '풀빌라 웰컴 드링크 및 휴식', description: '시원한 맥주 한 잔과 여장 풀기, 다음 날 바나힐스 1차전 라운딩 브리핑' }
        ]
      },
      {
        day: 2,
        title: '바나힐스 CC 라운딩 & 썬월드 바나힐 투어',
        subtitle: '오전 산악 챔피언십 18홀 라운딩 + 오후 바나힐 정상 점심 & 골든브릿지 관광',
        meal: { breakfast: '풀빌라 전용 조식', lunch: '바나힐 정상 뷔페 또는 프렌치 레스토랑', dinner: '풀빌라 셰프 출장 BBQ 파티' },
        timeline: [
          { time: '07:30', activity: '바나힐스 골프클럽 이동', description: '전용 리무진으로 시원한 바나힐 기슭 골프장으로 출발 (약 35분 소요)' },
          { time: '08:30', activity: '바나힐스 CC 18홀 오전 티오프', description: '루크 도널드가 설계한 아시아 최고 산악 챔피언십 코스에서 상쾌한 라운딩' },
          { time: '13:30', activity: '샤워 후 썬월드 바나힐 케이블카 이동', description: '라운딩 후 개운하게 샤워를 마치고 세계 최장 케이블카로 바나힐 정상 이동' },
          { time: '14:00', activity: '바나힐 정상 이동 & 점심 식사', description: '해발 1,487m 바나힐 정상 프렌치 빌리지 레스토랑에서 즐기는 특별한 중식' },
          { time: '15:00 ~ 17:30', activity: '바나힐 골든브릿지 & 테마파크 구경', description: '거대한 신의 손 골든브릿지, 프랑스 마을, 판타지 파크 테마파크 자유 관람 및 포토타임' },
          { time: '18:00', activity: '케이블카 하선 및 풀빌라 복귀', description: '전용 리무진으로 안전하고 편안하게 풀빌라로 이동' },
          { time: '19:30 ~', activity: '숙소 전용 풀사이드 BBQ 파티', description: '프라이빗 풀에서 셰프가 직접 구워주는 랍스터, 왕새우, 바비큐 스테이크 특식' }
        ]
      },
      {
        day: 3,
        title: 'BRG 다낭 CC & 호이안 야간 투어',
        subtitle: '노먼/니클라우스 36홀 명문 코스 + 유네스코 야경',
        meal: { breakfast: '풀빌라 조식', lunch: 'BRG 클럽하우스', dinner: '호이안 감성 루프탑 디너' },
        timeline: [
          { time: '08:00', activity: 'BRG 다낭 CC 이동', description: '시내와 해변에 인접한 다낭 최초의 명문 골프장 이동' },
          { time: '08:50', activity: 'BRG 다낭 CC 18홀 티오프', description: '전략적인 벙커와 바닷바람이 어우러진 챔피언십 라운딩' },
          { time: '14:00', activity: '안방비치 감성 카페 라운지', description: '에메랄드 바다를 바라보는 서핑 비치 라운지 휴식' },
          { time: '16:30', activity: '호이안 올드타운 감성 투어', description: '투본강 소원배, 풍등 거리 산책 및 현지 전통 식사' },
          { time: '21:00', activity: '풀빌라 귀가 및 야간 수영', description: '프라이빗 풀에서 시원한 맥주 한 잔과 힐링' }
        ]
      },
      {
        day: 4,
        title: '호이아나 쇼어스 GC 또는 남호이안 빈펄 CC',
        subtitle: '세계 100대 링크스 3차전 라운딩 또는 럭셔리 자유 일정 선택',
        meal: { breakfast: '풀빌라 조식', lunch: '클럽하우스 런치', dinner: '다낭 프리미엄 한우/삼겹살 특식' },
        timeline: [
          { time: '08:00', activity: '호이아나 쇼어스 or 빈펄 골프장 이동', description: '원하시는 명문 코스로 전용 리무진 단독 이동' },
          { time: '09:00', activity: '18홀 챔피언십 라운딩', description: '남중국해를 품은 정통 링크스 또는 광활한 듄스 코스 공략' },
          { time: '14:30', activity: '다낭 프리미엄 스파 120분 코스', description: '연속 라운딩의 근육 피로를 풀어주는 VIP 황제 마사지' },
          { time: '18:00', activity: '한강 용다리 & 사랑의 부두 야경', description: '주말 불쇼 관람 및 다낭 한강 야경 드라이브' }
        ]
      },
      {
        day: 5,
        title: '자유 힐링, 쇼핑, 미식 & 심야 공항 샌딩',
        subtitle: '풀빌라 체크아웃, 명품 쇼핑, 칠리크랩 만찬, 스파 후 밤 23시 공항 샌딩',
        stay: '체크아웃 후 리무진 짐 보관 케어',
        vehicle: 'VIP 리무진 전용 배차',
        meal: { breakfast: '풀빌라 조식', lunch: '다낭 3대 쌀국수 맛집', dinner: '미케비치 칠리크랩 & 해산물 만찬' },
        timeline: [
          { time: '11:00 ~ 12:00', activity: '풀빌라 여유로운 체크아웃 & 리무진 짐 적재', description: '단독 수영장 모닝 수영 후 여유로운 짐 정리, 골프백 및 캐리어 전용 차량 적재' },
          { time: '12:30', activity: '미슐랭 셀렉티드 로컬 미식 투어', description: '다낭 최고의 로컬 퀴진 점심 식사' },
          { time: '14:30 ~ 17:00', activity: '한시장 & 롯데마트 VIP 쇼핑', description: '기사님이 차량 대기하여 편안하게 짐 맡기고 쇼핑 (커피, 과일, 선물 등)' },
          { time: '17:30 ~ 19:30', activity: '미케비치 오션뷰 루프탑 선셋 & 해산물 만찬', description: '다낭 여행을 마무리하는 붉은 노을 감상과 칠리크랩/타이거새우 디너' },
          { time: '20:00 ~ 22:00', activity: '출국 전 VIP 황제 마사지 120분 & 샤워', description: '3~4회 연속 라운딩의 누적 피로를 완벽하게 풀어주는 럭셔리 스파 & 샤워' },
          { time: '22:30 ~ 23:00', activity: '다낭 국제공항 VIP 샌딩 (밤 23시경) & 출국 수속', description: '출국 2~3시간 전 공항까지 편안하게 모셔다 드리며 안전하게 귀국 수속 지원' }
        ]
      }
    ]
  },
  {
    id: '3n4d-free',
    category: 'free',
    name: '3박 4일 시그니처 자유투어',
    durationTag: '3박 4일 (바나힐·호이안·오행산 핵심 일주)',
    badge: '인기 No.1 자유여행 코스',
    notice: '다낭·호이안 수상레포츠 및 해양스포츠 액티비티는 3월부터 10월까지만 가능합니다.',
    target: '골프 없이 바나힐, 호이안 야경, 오행산, 미케비치 등 다낭의 핵심 명소를 단독 차량으로 알차게 즐길 여행객',
    summary: '바나힐 골든브릿지부터 호이안 구시가지 소원배, 오행산, 미케비치까지 다낭 필수 코스를 여유롭고 완벽하게 즐기는 맞춤 단독 자유투어',
    keyPoints: [
      '썬월드 바나힐 (세계 최장 케이블카, 골든브릿지, 프랑스마을, 놀이시설)',
      '호이안 올드타운 투어 (뱀부하우스 중식, 바구니배 체험, 투본강 소원배, 야시장)',
      '오행산(마블마운틴) 대리석 산 & 동굴 사원 탐방',
      '단독 전용 차량 픽업/샌딩 & 미케비치 해변 힐링 & 자유 쇼핑'
    ],
    included: [
      '전 일정 단독 전용 차량 및 전담 기사 (유류비, 톨게이트비 일체 포함)',
      '다낭 공항 단독 픽업 및 마지막 날 공항 샌딩',
      '썬월드 바나힐 왕복 케이블카 및 테마파크 입장권',
      '호이안 바구니배(틴퉁) 체험권 및 투본강 소원배 탑승권',
      '오행산(마블마운틴) 입장료 및 엘리베이터 이용권',
      '24시간 현지 한국어 비상 대응 케어 서비스'
    ],
    excluded: [
      '국제선 왕복 항공권',
      '호텔/리조트 숙박비 (고객 선호도에 맞춰 최저가 예약 대행 가능)',
      '일정표 내 식사 및 음료비 (로컬 맛집 및 카페 자유 선택)',
      '선택 일정 마사지 비용 및 매너 팁',
      '개인 쇼핑 경비 및 여행자 보험'
    ],
    days: [
      {
        day: 1,
        title: '도착 & 호텔 체크인',
        subtitle: '다낭 야간 도착 및 전용 차량 호텔 이동',
        stay: '다낭 시내 또는 미케비치 호텔/리조트',
        vehicle: '단독 전용 픽업 차량',
        meal: { dinner: '기내식 또는 호텔 주변 야식' },
        timeline: [
          { time: '21:35', activity: '다낭 국제공항 도착', description: '입국 수속 및 픽업 차량 탑승 (공항 – 호텔 이동)' },
          { time: '22:30', activity: '호텔 도착 & 체크인', description: '호텔 체크인 후 여장 풀기, 간단한 야식 또는 호텔 주변 마사지 (선택)' }
        ]
      },
      {
        day: 2,
        title: '바나힐 + 다낭 시내 야경 투어',
        subtitle: '골든브릿지, 프랑스마을, 한시장, 용다리 불쇼 & 선짜 야시장',
        stay: '다낭 호텔/리조트',
        vehicle: '단독 전용 차량',
        meal: { breakfast: '호텔 조식', lunch: '바나힐 내 뷔페 또는 레스토랑', dinner: '한시장 근처 베트남 로컬 레스토랑' },
        timeline: [
          { time: '08:00', activity: '조식 후 바나힐로 출발', description: '단독 전용 차량으로 바나힐 이동 (차량 약 1시간 소요)' },
          { time: '09:30 ~ 14:00', activity: '바나힐 관광 & 중식', description: '골든브릿지 (손 모양 다리), 프랑스 마을, 와인셀러, 놀이시설, 케이블카 왕복 탑승 (세계에서 가장 긴 케이블카 중 하나), 중식(바나힐 내 뷔페 또는 레스토랑)' },
          { time: '15:30', activity: '다낭 시내 복귀 후 휴식', description: '호텔 복귀 후 편안한 휴식 및 정비' },
          { time: '16:30', activity: '한시장 또는 한강 주변 산책', description: '다낭 대표 쇼핑 스팟 한시장 또는 낭만적인 한강 주변 산책' },
          { time: '18:30', activity: '저녁식사', description: '한시장 근처 베트남 로컬 레스토랑에서 맛있는 현지 석식' },
          { time: '20:00', activity: '용다리 야경 & 불쇼 관람', description: '다낭 랜드마크 용다리 야경 감상 (금/토/일만 불쇼 있음)' },
          { time: '21:00', activity: '드래곤브리지 & 선짜 야시장 (선택)', description: '활기 넘치는 야시장 구경, 스트리트 푸드 및 기념품 탐방' }
        ]
      },
      {
        day: 3,
        title: '호이안 투어 + 오행산 + 마사지',
        subtitle: '오행산, 뱀부하우스 점심, 바구니배, 호이안 구시가지 & 소원배',
        stay: '다낭 호텔/리조트',
        vehicle: '단독 전용 차량',
        meal: { breakfast: '호텔 조식', lunch: '호이안 뱀부하우스(Bamboo House)', dinner: '호이안 로컬 레스토랑 또는 바베큐' },
        timeline: [
          { time: '08:00', activity: '조식 후 호텔 출발', description: '전용 차량으로 오행산으로 이동' },
          { time: '09:00 ~ 10:30', activity: '오행산(마블마운틴) 관광', description: '대리석 산과 동굴 사원들 탐방 (엘리베이터 탑승 & 트레킹 가능)' },
          { time: '11:30', activity: '호이안 이동', description: '유네스코 세계문화유산 호이안으로 이동 (약 30분 소요)' },
          { time: '12:00 ~ 13:00', activity: '호이안 도착 & 점심식사', description: '호이안 인기 맛집 뱀부하우스에서 맛있는 런치' },
          { time: '13:00', activity: '바구니배 체험', description: '울창한 코코넛 숲 바구니배 탑승 & 신나는 전통 퍼포먼스' },
          { time: '15:00', activity: '호이안 구시가지 관광', description: '일본교(내원교), 풍흥고택, 호이안 전통 거리 산책 & 아오자이 입고 사진 촬영 (선택)' },
          { time: '18:00', activity: '소원배 띄우기 + 야시장 구경', description: '강가에서 소원초 띄우기 체험 & 형형색색 풍등 야시장 구경' },
          { time: '19:00', activity: '저녁식사', description: '호이안 로컬 레스토랑 또는 바베큐 디너' },
          { time: '20:30', activity: '마사지 1.5시간 (선택)', description: '하루의 피로를 풀어주는 힐링 스파 90분' },
          { time: '22:00', activity: '다낭 호텔로 복귀', description: '전용 차량으로 편안하게 다낭 숙소로 복귀' }
        ]
      },
      {
        day: 4,
        title: '자유시간 + 미케비치 + 공항이동',
        subtitle: '미케비치 힐링, 쇼핑/카페 투어, 석식 후 공항 샌딩',
        stay: '체크아웃 후 전용 차량 짐 보관 케어',
        vehicle: '단독 전용 차량',
        meal: { breakfast: '호텔 조식', lunch: '현지 로컬 레스토랑', dinner: '가벼운 저녁식사' },
        timeline: [
          { time: '08:00', activity: '호텔 조식', description: '여유로운 아침 식사' },
          { time: '09:00 ~ 11:00', activity: '미케비치 산책 or 수영 or 해양스포츠', description: '미케비치 해변 힐링 (수상레포츠·해양스포츠는 3월~10월 운영)' },
          { time: '11:30', activity: '호텔 체크아웃', description: '짐 정리 및 체크아웃, 전용 차량에 캐리어 보관' },
          { time: '12:00', activity: '점심식사', description: '현지 로컬 레스토랑에서 맛있는 식사' },
          { time: '13:30 ~ 17:30', activity: '자유시간 (마사지 / 쇼핑 / 카페 투어)', description: '추천 코스: 다낭 핑크성당, 빈컴플라자, 롯데마트 쇼핑 & 힐링 카페 투어' },
          { time: '17:30 ~ 18:00', activity: '저녁식사 (가볍게)', description: '공항 출발 전 가벼운 현지 석식' },
          { time: '18:30', activity: '공항으로 출발', description: '전용 차량으로 안전하게 다낭 국제공항 이동' },
          { time: '21:30', activity: '다낭 국제공항 도착 후 출국 수속', description: '공항 도착 후 항공사 체크인 및 출국 수속 지원' }
        ]
      }
    ]
  },
  {
    id: '4n5d-free',
    category: 'free',
    name: '4박 5일 힐링 & 선짜반도 완전정복 자유투어',
    durationTag: '4박 5일 (바나힐·호이안·선짜반도·미케비치 풀코스)',
    badge: '다낭/호이안 명소 올인원 코스',
    notice: '다낭·호이안 수상레포츠 및 해양스포츠 액티비티는 3월부터 10월까지만 가능합니다.',
    target: '바나힐, 호이안뿐만 아니라 선짜반도 린응사, 목식당 미식, 오션뷰 카페, 2시간 마사지까지 완벽한 여유를 즐길 여행객',
    summary: '바나힐과 호이안 올드타운에 선짜반도 해수관음상, 다낭 1등 해산물 맛집 목식당, 미케비치 오션뷰 카페 및 2시간 프리미엄 스파까지 더해진 시그니처 힐링 패키지',
    keyPoints: [
      '썬월드 바나힐 (케이블카, 골든브릿지, 프랑스마을, 놀이시설)',
      '호이안 올드타운, 뱀부하우스 런치, 바구니배 & 소원배 체험',
      '선짜반도 린응사(거대 여불상) & 다낭 최고 인기 맛집 [목식당] 점심',
      '미케비치 오션뷰 카페 투어 & 2시간 전신 스파/마사지 포함'
    ],
    included: [
      '전 일정 단독 전용 차량 및 전담 기사 (유류비, 톨게이트비 일체 포함)',
      '다낭 공항 단독 픽업 및 귀국일 공항 샌딩',
      '썬월드 바나힐 왕복 케이블카 및 테마파크 입장권',
      '호이안 바구니배(틴퉁) 체험권 및 투본강 소원배 탑승권',
      '오행산(마블마운틴) 입장료 및 엘리베이터 이용권',
      '4일차 프리미엄 전신 마사지/스파 120분 포함',
      '24시간 현지 한국어 비상 대응 케어 서비스'
    ],
    excluded: [
      '국제선 왕복 항공권',
      '호텔/리조트 숙박비 (고객 선호도에 맞춰 최저가 예약 대행 가능)',
      '일정표 내 식사 및 음료비 (목식당, 뱀부하우스, 카페 등 자유 선택)',
      '일정표 외 선택 관광 비용 및 매너 팁',
      '개인 쇼핑 경비 및 여행자 보험'
    ],
    days: [
      {
        day: 1,
        title: '도착 & 호텔 체크인',
        subtitle: '다낭 야간 도착 및 전용 차량 호텔 이동',
        stay: '다낭 시내 또는 미케비치 호텔/리조트',
        vehicle: '단독 전용 픽업 차량',
        meal: { dinner: '기내식 또는 호텔 주변 야식' },
        timeline: [
          { time: '21:05', activity: '다낭 국제공항 도착', description: '입국 수속 및 픽업 차량 탑승 (공항 – 호텔 이동)' },
          { time: '22:00', activity: '호텔 도착 & 체크인', description: '호텔 도착 후 체크인, 휴식 또는 간단한 야식' }
        ]
      },
      {
        day: 2,
        title: '바나힐 + 다낭 시내 야경 투어',
        subtitle: '골든브릿지, 프랑스마을, 한시장, 용다리 불쇼 & 선짜 야시장',
        stay: '다낭 호텔/리조트',
        vehicle: '단독 전용 차량',
        meal: { breakfast: '호텔 조식', lunch: '바나힐 내 뷔페 또는 레스토랑', dinner: '한시장 근처 베트남 로컬 레스토랑' },
        timeline: [
          { time: '08:00', activity: '조식 후 바나힐로 출발', description: '전용 차량으로 바나힐 이동 (차량 약 1시간 소요)' },
          { time: '09:00 ~ 14:00', activity: '바나힐 관광 & 중식', description: '골든브릿지 (손 모양 다리), 프랑스 마을, 와인셀러, 놀이시설, 케이블카 왕복 탑승 (세계에서 가장 긴 케이블카 중 하나), 중식(바나힐 내 뷔페 또는 레스토랑)' },
          { time: '15:30', activity: '다낭 시내 복귀 후 휴식', description: '호텔 복귀 후 편안한 휴식' },
          { time: '16:30', activity: '한시장 구경 또는 한강 주변 산책', description: '한시장 쇼핑 및 한강변 산책' },
          { time: '18:30', activity: '저녁식사', description: '한시장 근처 베트남 로컬 레스토랑에서 즐기는 석식' },
          { time: '20:00', activity: '용다리 야경 & 불쇼 관람', description: '용다리 야경 및 불쇼 관람 (금/토/일만 불쇼 있음)' },
          { time: '21:00', activity: '드래곤브리지 & 선짜 야시장 (선택)', description: '선짜 야시장 구경 및 스트리트 푸드 탐방' }
        ]
      },
      {
        day: 3,
        title: '호이안 투어 + 오행산 + 마사지',
        subtitle: '오행산, 뱀부하우스 점심, 바구니배, 호이안 구시가지 & 소원배',
        stay: '다낭 호텔/리조트',
        vehicle: '단독 전용 차량',
        meal: { breakfast: '호텔 조식', lunch: '호이안 뱀부하우스(Bamboo House)', dinner: '호이안 로컬 레스토랑 또는 바베큐' },
        timeline: [
          { time: '08:00', activity: '조식 후 호텔 출발', description: '전용 차량으로 오행산으로 이동' },
          { time: '09:00 ~ 10:30', activity: '오행산(마블마운틴) 관광', description: '대리석 산과 동굴 사원들 탐방 (엘리베이터 탑승 & 트레킹 가능)' },
          { time: '11:30', activity: '호이안 이동', description: '호이안 이동 (약 30분 소요)' },
          { time: '12:00 ~ 13:00', activity: '호이안 도착 & 점심식사', description: '호이안 뱀부하우스에서 맛있는 런치' },
          { time: '13:00', activity: '바구니배 체험', description: '코코넛 숲 바구니배 탑승 & 신나는 퍼포먼스' },
          { time: '15:00', activity: '호이안 구시가지 관광', description: '일본교(내원교), 풍흥고택, 호이안 전통 거리 산책 & 아오자이 입고 사진 촬영 (선택)' },
          { time: '18:00', activity: '소원배 띄우기 + 야시장 구경', description: '강가에서 소원배 띄우기 & 호이안 야시장 구경' },
          { time: '19:00', activity: '저녁식사', description: '호이안 로컬 레스토랑 또는 바베큐 디너' },
          { time: '20:30', activity: '마사지 1.5시간 (선택)', description: '지친 하루의 피로를 풀어주는 전신 마사지 90분' },
          { time: '22:00', activity: '다낭 호텔로 복귀', description: '전용 차량으로 편안하게 다낭 숙소 복귀' }
        ]
      },
      {
        day: 4,
        title: '선짜반도 + 해변 카페 + 마사지',
        subtitle: '린응사 해수관음상, 목식당 점심, 오션뷰 카페, 2시간 마사지 & 시푸드 디너',
        stay: '다낭 호텔/리조트',
        vehicle: '단독 전용 차량',
        meal: { breakfast: '호텔 조식', lunch: '목식당(Moc Seafood)', dinner: '시푸드 뷔페 또는 바비큐' },
        timeline: [
          { time: '08:30', activity: '호텔 조식', description: '여유로운 조식 식사' },
          { time: '09:30 ~ 12:00', activity: '선짜반도 투어', description: '린응사 (거대한 여불상/해수관음상), 선짜 산전망 포인트 및 바다 절경 감상' },
          { time: '12:30', activity: '점심식사 (목식당)', description: '다낭 최고 인기 맛집 [목식당]에서 즐기는 푸짐한 점심' },
          { time: '14:00 ~ 16:00', activity: '미케비치 앞 오션뷰 카페 투어', description: '추천 오션뷰 카페: Horizon bar, The Deck House, 43 Factory 등' },
          { time: '16:30 ~ 18:00', activity: '전신 마사지 or 스파 (2시간)', description: '여행 피로를 말끔히 풀어주는 120분 전신 스파 & 마사지' },
          { time: '18:30', activity: '저녁식사', description: '신선한 시푸드 뷔페 또는 바비큐 디너' },
          { time: '20:00 이후', activity: '자유 시간 or 야시장 재방문 (선택)', description: '다낭의 밤거리를 자유롭게 만끽하거나 야시장 재방문' }
        ]
      },
      {
        day: 5,
        title: '자유시간 + 미케비치 + 공항이동',
        subtitle: '미케비치 산책/수영, 쇼핑/카페 투어, 석식 후 공항 샌딩',
        stay: '체크아웃 후 전용 차량 짐 보관 케어',
        vehicle: '단독 전용 차량',
        meal: { breakfast: '호텔 조식', lunch: '현지 로컬 레스토랑', dinner: '가벼운 저녁식사' },
        timeline: [
          { time: '08:00', activity: '호텔 조식', description: '여유로운 아침 식사' },
          { time: '09:00 ~ 11:00', activity: '미케비치 산책 or 수영 or 해양스포츠', description: '미케비치 해변 산책 및 해양 액티비티 (해양스포츠는 3월~10월 운영)' },
          { time: '11:30', activity: '호텔 체크아웃', description: '체크아웃 후 전용 차량에 수하물 보관' },
          { time: '12:00', activity: '점심식사', description: '현지 로컬 레스토랑 점심 식사' },
          { time: '13:30 ~ 17:30', activity: '자유시간 (마사지 / 쇼핑 / 카페 투어)', description: '추천 코스: 다낭 핑크성당, 빈컴플라자, 롯데마트 쇼핑 & 카페 투어' },
          { time: '17:30 ~ 18:00', activity: '저녁식사 (가볍게)', description: '공항 출발 전 가벼운 식사' },
          { time: '18:30', activity: '공항으로 출발', description: '전용 차량으로 안전하게 다낭 국제공항 이동' },
          { time: '21:30', activity: '다낭 국제공항 도착 후 출국 수속', description: '공항 도착 후 귀국편 탑승 수속 및 안심 배웅' }
        ]
      }
    ]
  }
];

export const GOLF_COURSES: GolfCourse[] = [
  {
    id: 'brg-danang',
    name: 'BRG 다낭 골프 리조트',
    englishName: 'BRG Da Nang Golf Resort',
    summary: '전설의 골퍼 그렉 노먼 & 잭 니클라우스가 완성한 36홀 초대형 명문 리조트 (야간 라이트 라운딩 완비)',
    holes: '36홀 (노먼 18홀 + 니클라우스 18홀)',
    par: 72,
    designer: 'Greg Norman & Jack Nicklaus',
    distanceFromAirport: '다낭 공항에서 약 20분',
    distanceFromCity: '다낭 시내에서 약 15분',
    courseLength: '노먼 7,190 Yds / 니클라우스 7,380 Yds',
    officialUrl: 'https://dananggolfclub.com/',
    badge: '36홀 & 야간 라이트',
    tags: ['36홀 매머드 코스', '그렉 노먼', '잭 니클라우스', '야간 라이트 완비', '공항 20분'],
    features: [
      '그렉 노먼 해안 사구 코스 + 잭 니클라우스 목재 벌크헤드 코스 36홀',
      '니클라우스 코스 최신 고화질 LED 야간 라이트 라운딩 시설 완비',
      '다낭 시내 및 미케비치 주요 리조트에서 15분 최적의 접근성',
      '초대형 클럽하우스, 프로샵, 드라이빙 레인지, 락커룸 완비'
    ],
    facilities: ['36홀 챔피언십 코스', '드라이빙 레인지', '야간 조명 시설', '고급 레스토랑 & 프로샵', 'VIP 락커룸'],
    description: '다낭 골프의 랜드마크로 불리는 36홀 초대형 명문 리조트입니다. 자연 모래언덕(Dunes)을 살린 그렉 노먼 코스와 아시아 최초로 수입 목재 옹벽을 도입한 잭 니클라우스 코스를 동시에 경험할 수 있습니다. 최근 야간 라이트 시스템이 도입되어 선선한 밤 라운딩도 가능합니다.',
    imageUrl: '/images/golf/brg.jpg'
  },
  {
    id: 'montgomerie-links',
    name: '몽고메리 링크스 베트남',
    englishName: 'Montgomerie Links Vietnam',
    summary: '라이더컵의 영웅 콜린 몽고메리가 설계한 유러피언 감성의 클래식 링크스',
    holes: '18홀 / Par 72',
    par: 72,
    designer: 'Colin Montgomerie (콜린 몽고메리)',
    distanceFromAirport: '다낭 공항에서 약 20분',
    distanceFromCity: '다낭 시내에서 약 15분',
    courseLength: '7,090 Yards',
    officialUrl: 'https://montgomerielinks.com/',
    badge: '접근성 최고 명문',
    tags: ['클래식 링크스', '공항 20분', '유러피언 감성', '수려한 조경'],
    features: [
      '포브스 선정 아시아 10대 골프 코스',
      '전략적인 팟 벙커와 수려한 야자수 조경의 아름다운 조화',
      '초보부터 싱글 골퍼까지 모두 즐길 수 있는 균형 잡힌 코스',
      '다낭-호이안 중간 도로변 위치로 이동 동선 최적'
    ],
    facilities: ['18홀 챔피언십 코스', '천연 잔디 드라이빙 레인지', '퍼팅 그린', 'PGA 아카데미', '스위트 클럽하우스'],
    description: '아름다운 오아시스 형태의 벙커와 페어웨이 굴곡이 인상적인 클래식 링크스 코스입니다. 시내에서 접근성이 매우 뛰어나며, 섬세하고 정교한 그린 공략을 요하여 여성 골퍼 및 중상급자 모두에게 찬사를 받습니다.',
    imageUrl: '/images/golf/montgomerie.jpg'
  },
  {
    id: 'bana-hills',
    name: '바나힐스 골프클럽',
    englishName: 'Ba Na Hills Golf Club',
    summary: '산악형 지형의 웅장함과 18홀 전 홀 야간 라이트 라운딩이 가능한 아시아 최고 코스',
    holes: '18홀 / Par 72',
    par: 72,
    designer: 'Luke Donald (루크 도널드)',
    distanceFromAirport: '다낭 공항에서 약 35분',
    distanceFromCity: '다낭 시내에서 약 30분',
    courseLength: '7,858 Yards (베트남 최장 전장)',
    officialUrl: 'https://banahillsgolf.com/',
    badge: '전 홀 나이트 라운딩',
    tags: ['산악형 코스', '야간 라이트', '루크 도널드 설계', '시원한 기후'],
    features: [
      '월드 골프 어워드 아시아 최고의 골프코스 5년 연속 수상',
      '18홀 전 코스 고화질 야간 라이트 조명 시설 완비',
      '울창한 산림과 계곡 지형을 활용한 다이내믹 레이아웃',
      '쾌적하고 서늘한 산악 기후로 여름에도 인기'
    ],
    facilities: ['18홀 조명 완비 코스', '언덕 위 전망형 클럽하우스', '프로샵', '레스토랑 & 바', '카트 GPS 시스템'],
    description: '해발 고도가 높은 바나힐 기슭에 위치하여 한낮에도 시원한 피서 라운딩이 가능합니다. 18홀 전 홀에 최신 LED 라이트 시스템이 완비되어 있어, 선선한 저녁 나이트 라운딩으로 유명합니다.',
    imageUrl: '/images/golf/banahills.jpg'
  },
  {
    id: 'vinpearl-nam-hoi-an',
    name: '남호이안 빈펄 골프클럽',
    englishName: 'Vinpearl Golf Nam Hoi An',
    summary: '새하얀 모래언덕과 푸른 바다가 어우러진 챔피언십 인터내셔널 듄스 리조트 코스',
    holes: '18홀 / Par 72',
    par: 72,
    designer: 'IMG Design',
    distanceFromAirport: '다낭 공항에서 약 50분',
    distanceFromCity: '호이안 시내에서 약 20분',
    courseLength: '7,038 Yards',
    officialUrl: 'https://vinpearl.com/en/vinpearl-golf-nam-hoi-an',
    badge: '가족 동반 추천',
    tags: ['빈펄 리조트 연계', '듄스 코스', '넓은 페어웨이', 'IMG 설계'],
    features: [
      '빈펄 리조트 & 빈원더스 테마파크와 인접하여 가족 여행에 이상적',
      '천연 백사장 모래언덕을 활용한 독창적인 벙커 디자인',
      '넓은 페어웨이로 드라이버를 시원하게 공략하기 좋은 레이아웃',
      '바닷바람과 함께 즐기는 이국적인 리조트 골프'
    ],
    facilities: ['18홀 챔피언십 코스', '5성급 빈펄 리조트 연계', '사파리 & 테마파크 인접', '클럽하우스 레스토랑'],
    description: '남호이안 빈펄 리조트 & 테마파크 단지 내에 위치한 18홀 링크스 스타일 코스입니다. 넓은 페어웨이와 거대한 천연 벙커가 조화를 이루며, 인근 빈펄랜드와 연계하여 가족 동반 골프 여행객에게 최적입니다.',
    imageUrl: '/images/golf/vinpearl.jpg'
  },
  {
    id: 'hoiana-shores',
    name: '호이아나 쇼어스 골프클럽',
    englishName: 'Hoiana Shores Golf Club',
    summary: '세계 100대 골프장 선정! 남중국해를 마주보는 정통 링크스 코스의 정점',
    holes: '18홀 / Par 71',
    par: 71,
    designer: 'Robert Trent Jones Jr. (로버트 트렌트 존스 주니어)',
    distanceFromAirport: '다낭 공항에서 약 45분',
    distanceFromCity: '호이안 올드타운에서 약 15분',
    courseLength: '7,004 Yards',
    officialUrl: 'https://www.hoiana.com/golf/',
    badge: '세계 100대 코스',
    tags: ['정통 링크스', '오션뷰', '5성급 클럽하우스', '월드클래스'],
    features: [
      '세계 골프 어워드 아시아 최고 코스 수상',
      '전 홀 오션브리즈 & 탁 트인 남중국해 조망',
      '최고급 럭셔리 라커룸 및 레스토랑 완비',
      '정밀한 페어웨이 롤과 도전적인 그린 난이도'
    ],
    facilities: ['세계 100대 링크스 코스', '초호화 클럽하우스', '오션뷰 레스토랑', '인조/천연잔디 레인지', '특급 락커'],
    description: '유네스코 세계문화유산 호이안 인근 해안 듄스에 조성된 아시아 최고의 링크스 코스입니다. 시원한 바닷바람과 자연 모래언덕의 굴곡을 그대로 살려, 모든 홀에서 드라마틱한 샷 메이킹의 묘미를 선사합니다.',
    imageUrl: '/images/golf/hoiana.jpg'
  },
  {
    id: 'laguna-lang-co',
    name: '라구나 랑코 골프클럽',
    englishName: 'Laguna Golf Lang Co',
    summary: '닉 팔도 경의 마스터피스! 산, 강, 실제 논(Rice Paddy), 바다를 넘나드는 천혜의 챔피언십 코스',
    holes: '18홀 / Par 71',
    par: 71,
    designer: 'Sir Nick Faldo (닉 팔도 경)',
    distanceFromAirport: '다낭 공항에서 약 60분',
    distanceFromCity: '다낭 시내에서 약 60분',
    courseLength: '6,958 Yards',
    officialUrl: 'https://www.lagunalangco.com/en/golf/',
    badge: '닉 팔도 마스터피스',
    tags: ['닉 팔도 설계', '아시안 투어 개최지', '반얀트리 연계', '라이스패디 해저드'],
    features: [
      '아시안 투어(Asian Tour) 파이널 대회 공식 개최 코스',
      '열대 밀림, 논(Rice field), 바다가 공존하는 자연 친화적 설계',
      '반얀트리 & 앙사나 랑코 럭셔리 복합 리조트 연계 휴양',
      '골프 매거진 선정 베트남 최고 명문 코스 수상'
    ],
    facilities: ['18홀 챔피언십 코스', '반얀트리/앙사나 5성급 리조트', '드라이빙 레인지', '야외 테라스 레스토랑', '스파'],
    description: '베트남 센트럴 코스트의 보석 같은 챔피언십 코스입니다. 실제 벼가 자라는 라이스 패디(논) 해저드와 울창한 열대림, 그리고 동해 바다가 어우러져 전 세계 어디에서도 볼 수 없는 경이로운 라운딩을 선사합니다.',
    imageUrl: '/images/golf/laguna.jpg'
  },
  {
    id: 'golden-sands',
    name: '골든샌드 골프 리조트',
    englishName: 'Golden Sands Golf Resort',
    summary: '잭 니클라우스 디자인의 신규 프리미엄 챔피언십 해안 링크스 리조트',
    holes: '18홀 / Par 72',
    par: 72,
    designer: 'Nicklaus Design (잭 니클라우스 디자인)',
    distanceFromAirport: '다낭 공항에서 약 75분',
    distanceFromCity: '후에/다낭 해안가 인접',
    courseLength: '7,445 Yards (베트남 최장 챔피언십 코스)',
    officialUrl: 'https://goldensandsgolf.vn/',
    badge: '최신 럭셔리 링크스',
    tags: ['신규 챔피언십 코스', '닉클라우스 디자인', '광활한 듄스', '최고 코스 컨디션'],
    features: [
      '골프의 제왕 잭 니클라우스 사단이 설계한 최신 정통 해안 링크스 코스',
      '7,445야드의 광활한 전장과 거대한 화이트 샌드 벙커의 웅장함',
      '바닷바람의 강약에 따라 매 홀 새로운 전략적 샷을 요구하는 레이아웃',
      '최신 5성급 클럽하우스 및 완벽하게 관리된 최고급 잔디 컨디션'
    ],
    facilities: ['18홀 최신 챔피언십 코스', '최신 모던 클럽하우스', '드라이빙 레인지 & 어프로치 연습장', 'VIP 라운지'],
    description: '베트남 중부 해안의 거대한 모래 언덕을 배경으로 잭 니클라우스 사단이 새롭게 선보인 최첨단 럭셔리 링크스 코스입니다. 끝없이 펼쳐지는 해안 사구와 도전적인 벙커 배치가 일품이며, 최상급 잔디 관리 상태로 오픈 직후부터 폭발적인 인기를 끌고 있습니다.',
    imageUrl: '/images/golf/goldensands.jpg'
  }
];

export const VEHICLE_OPTIONS: VehicleOption[] = [
  {
    id: 'suv-7s',
    name: '7인승 SUV (토요타 포츄너 / 이노바)',
    englishName: 'Toyota Fortuner / Innova 7-Seater',
    capacity: '성인 2~3인 권장',
    luggage: '골프백 2~3개 + 캐리어 2~3개',
    bestFor: '2~3인 소인원, 부부 동반 골프 & 시내 자유일정',
    description: '골목이 많은 다낭 시내와 맛집 이동에 기동성이 탁월하며, 쾌적한 에어컨과 숙련된 전담 기사가 편안하게 모십니다.',
    features: ['단독 전용 차량 & 기사 포함', '유류비 & 톨게이트비 포함', '차량 내 생수 제공', '24시간 카톡 배차 지원'],
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'van-16s',
    name: '16인승 밴 (포드 트랜짓 / 현대 쏠라티)',
    englishName: 'Ford Transit / Hyundai Solati 16-Seater',
    capacity: '골프팀 4~8인 권장',
    luggage: '골프백 6~8개 + 캐리어 8개 이상 넉넉 탑재',
    bestFor: '4인 1팀 또는 8인 2팀 단체 골퍼에게 가장 인기 있는 차종',
    description: '천장이 높고 트렁크 공간이 넓어 골프백과 대형 캐리어를 가득 실어도 탑승 공간이 쾌적합니다. 1팀 골프투어의 필수 차종입니다.',
    features: ['하이루프 넓은 실내 공간', '골프백 대용량 적재 전용 개조', '기사 팁 제외 전 비용 포함', '현지 핫라인 통역 지원'],
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'limo-29s',
    name: '29인승 VIP 리무진 버스 (현대 카운티 럭셔리)',
    englishName: 'Hyundai County VIP Limousine 29-Seater',
    capacity: '단체 8~16인 VIP',
    luggage: '골프백 16개 + 캐리어 20개 이상 완전 수용',
    bestFor: '골프 동호회, 법인 워크샵, 3팀 이상 대형 단체 VIP',
    description: '비행기 비즈니스석 같은 안락한 VIP 리무진 독립 시트와 대형 냉장고, 스마트 TV를 갖춘 최고급 의전 차량입니다.',
    features: ['우등 리무진 독립 리클라이닝 시트', 'USB 고속 충전 포트 전 좌석 완비', '골프백 전용 트렁크 룸', 'VIP 의전 전문 기사 배정'],
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80'
  }
];

export const VILLA_OPTIONS: VillaOption[] = [
  {
    id: 'ocean-3br',
    name: '프리미엄 비치프론트 3베드룸 풀빌라',
    bedrooms: '3 침실 (킹/퀸 베드룸 3개, 각 룸 단독 욕실)',
    capacity: '기준 6인 / 최대 8인',
    location: '다낭 미케비치 해안가 고급 리조트 단지 내',
    description: '거실에서 프라이빗 인피니티 풀로 바로 연결되며, 몇 걸음만 걸어나가면 에메랄드빛 프라이빗 비치가 펼쳐지는 럭셔리 휴양 빌라입니다.',
    features: ['프라이빗 수영장', '주방 및 다이닝 룸', '매일 아침 객실 조식 딜리버리', '24시간 리조트 보안'],
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'luxury-5br',
    name: '시그니처 로얄 가든 4~5베드룸 대저택 풀빌라',
    bedrooms: '4~5 침실 (침실 5개, 욕실 6개, 대형 거실)',
    capacity: '기준 8~10인 / 최대 12인',
    location: '다낭-호이안 중간 몽고메리 골프장 인접 리조트',
    description: '골프 2팀(8인) 이상이 한 공간에서 라운딩 후 단독 BBQ 파티와 수영을 즐길 수 있는 초대형 풀빌라입니다. 완벽한 프라이버시가 보장됩니다.',
    features: ['대형 단독 풀 & 썬베드', '야외 바베큐 가든 파티 가능', '골프장 차량 5분 거리', '전담 하우스키핑 케어'],
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQ_ITEMS = [
  {
    q: '골프장 티오프 시간은 어떻게 배정되나요?',
    a: '예약 문의 접수 시 원하시는 희망 시간대(예: 오전 8시 전후)를 말씀해 주시면, 현지 골프장과 직통 라인으로 실시간 조율하여 가장 쾌적한 골든 티타임을 선점해 드립니다.'
  },
  {
    q: '골프백 및 캐디 팁은 얼마 정도 준비해야 하나요?',
    a: '베트남 다낭의 캐디 팁은 18홀 기준 보통 400,000 ~ 500,000 VND (한화 약 2만 5천 원 내외)가 매너 팁 기준입니다. 라운딩 후 캐디에게 직접 전달하시면 됩니다.'
  },
  {
    q: '일정에 없는 식당이나 마사지샵도 전용 차량으로 갈 수 있나요?',
    a: '네, 물론입니다! 다낭플레이의 단독 전용 차량은 정해진 틀에 얽매이지 않고, 고객님이 원하시는 맛집, 카페, 마사지샵 어디든 기사님이 안전하게 이동시켜 드립니다.'
  },
  {
    q: '예약금 및 결제 절차는 어떻게 되나요?',
    a: '견적 확정 후 숙소 및 차량은 예약 확정을 위해 예약금을 입금해 주시면 바우처가 발송되며, 골프장 티오프는 전액 결재가 이루어져야 예약확정이 됩니다. 베트남 동화, 한국 원화 계좌이체로 결제 가능합니다.'
  }
];
