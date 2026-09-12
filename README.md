# 다낭플레이 (DanangPlay) - 다낭 자유여행 & 프리미엄 골프투어 예약 웹사이트

다낭을 방문하는 한국인 여행객 및 프리미엄 골프 여행객을 위한 반응형 원페이지 랜딩 및 실시간 예약 웹 애플리케이션입니다.

---

## 🛠 기술 스택 (Tech Stack)
- **Framework**: React 18 / Vite 6 + TypeScript
- **Styling**: Tailwind CSS, Pretendard 웹폰트
- **Icons**: Lucide React
- **Form & Validation**: React Hook Form + Zod
- **Email API**: Web3Forms (무료 키 연동 지원 및 데모 모드 내장)
- **Design Tone**: 에메랄드 그린(`primary-700/800`), 딥 네이비(`slate-900/950`), 카카오 옐로우(`kakao-bg #FEE500`)

---

## 🚀 빠른 시작 (Getting Started)

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경 변수 설정 (선택 사항)
`.env.example` 파일을 복사하여 `.env`를 생성하고 키를 입력하세요:
```bash
cp .env.example .env
```
- `VITE_WEB3FORMS_ACCESS_KEY`: [Web3Forms](https://web3forms.com)에서 무료로 발급받은 키를 넣으면 이메일 수신이 즉시 연동됩니다. (키가 없어도 화면에서 정상 접수 피드백이 시뮬레이션됩니다)
- `VITE_KAKAO_CHANNEL_URL`: 운영하시는 카카오 채널 주소를 설정할 수 있습니다.

### 3. 로컬 개발 서버 실행
```bash
npm run dev
```

### 4. 프로덕션 빌드 & 미리보기
```bash
npm run build
npm run preview
```

---

## 📂 프로젝트 폴더 구조 (Project Structure)
```
danangplay/
├── src/
│   ├── components/
│   │   ├── Header.tsx           # 상단 네비게이션, 모바일 드로어, 카톡 상담 버튼
│   │   ├── Hero.tsx             # 메인 비주얼, 강렬한 헤드카피, 신뢰 뱃지, CTA
│   │   ├── TourItinerary.tsx    # 3박4일 / 4박5일 탭, 일자별 타임라인, 포함/불포함 체크리스트
│   │   ├── GolfCourses.tsx      # 호이아나, 바나힐, BRG, 몽고메리, 빈펄 5대 명문 코스 카드 그리드
│   │   ├── AddonServices.tsx    # 전용 렌터카 (7/16/29인승) 및 단독 풀빌라 안내
│   │   ├── BookingForm.tsx      # Zod 유효성 검사 + Web3Forms 이메일 연동 예약 폼
│   │   ├── SuccessModal.tsx     # 예약 접수 완료 팝업 & 카카오톡 바로 연결
│   │   ├── FloatingKakao.tsx    # 우측 하단 고정 카카오톡 플로팅 버튼 (#FEE500)
│   │   └── Footer.tsx           # 베트남 공식 라이선스, 고객센터, FAQ 아코디언
│   ├── data/
│   │   └── tourData.ts          # 골프장, 투어 일정, 차량/숙소, 회사 정보 (손쉬운 수정 지원)
│   ├── types/
│   │   └── tour.ts              # 데이터 타입 정의
│   ├── App.tsx                  # 메인 레이아웃 및 컴포넌트 간 상호작용
│   ├── index.css                # 테일윈드 및 전역 스타일
│   └── main.tsx
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 💡 주요 기능 및 데이터 수정 가이드

모든 텍스트 및 세부 정보는 **`src/data/tourData.ts`** 파일 하나에서 손쉽게 수정하실 수 있습니다:
1. **회사 정보 & 카카오톡 링크**: `COMPANY_INFO` 객체 수정
2. **골프장 정보**: `GOLF_COURSES` 배열에서 코스명, 사진, 홀 수, 설명 수정
3. **투어 일정**: `TOUR_PACKAGES` 배열에서 3박4일/4박5일 일정 및 포함/불포함 항목 수정
4. **차량 & 풀빌라**: `VEHICLE_OPTIONS`, `VILLA_OPTIONS` 배열 수정
5. **자주 묻는 질문**: `FAQ_ITEMS` 배열 수정
