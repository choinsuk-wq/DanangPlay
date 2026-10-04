import React from 'react';
import { Sparkles, MapPin, Compass } from 'lucide-react';

interface Landmark {
  id: string;
  name: string;
  vietnameseName: string;
  badge: string;
  description: string;
  imageUrl: string;
  fallbackUrl: string;
  highlightTag: string;
}

const LANDMARKS: Landmark[] = [
  {
    id: 'banahills',
    name: '바나힐 골든 브릿지',
    vietnameseName: 'Cầu Vàng (Ba Na Hills)',
    badge: '세계적 랜드마크',
    highlightTag: '해발 1,487m 구름 위 산책',
    description: '거대한 신의 손이 황금빛 다리를 떠받치고 있는 다낭 최고의 상징. 세계 최장 케이블카와 프랑스 마을 테마파크가 함께합니다.',
    imageUrl: '/images/landmarks/banahills.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'hoian',
    name: '호이안 올드타운 & 풍등 거리',
    vietnameseName: 'Phố Cổ Hội An',
    badge: '유네스코 세계문화유산',
    highlightTag: '투본강 소원배 & 감성 야경',
    description: '수백 년 전통 목조 가옥과 형형색색의 비단 풍등이 밤을 밝히는 낭만의 고도시. 투본강 소원초 띄우기와 야시장 탐방은 필수 코스입니다.',
    imageUrl: '/images/landmarks/hoian.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mykhe',
    name: '미케 비치 해안선',
    vietnameseName: 'Bãi Biển Mỹ Khê',
    badge: '포브스 선정 세계 6대 해변',
    highlightTag: '끝없이 펼쳐진 에메랄드 백사장',
    description: '부드러운 백사장과 야자수, 오션뷰 카페 및 5성급 리조트가 줄지어 선 다낭 휴양의 심장. 라운딩 후 붉은 석양을 감상하기 가장 좋습니다.',
    imageUrl: '/images/landmarks/mykhe.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ladybuddha',
    name: '선짜반도 영흥사 (해수관음상)',
    vietnameseName: 'Chùa Linh Ứng - Bán Đảo Sơn Trà',
    badge: '동양 최대 67m 해수관음상',
    highlightTag: '다낭 바다를 굽어보는 천혜의 비경',
    description: '푸른 바다와 다낭 시내 전경이 파노라마로 펼쳐지는 영험한 명소. 웅장한 백색 해수관음상과 울창한 열대 원시림 절벽이 어우러집니다.',
    imageUrl: '/images/landmarks/ladybuddha.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dragonbridge',
    name: '한강 용다리 & 나이트 뷰',
    vietnameseName: 'Cầu Rồng Đà Nẵng',
    badge: '다낭 도심 시그니처',
    highlightTag: '주말 황금 불쇼 & 낭만 한강 야경',
    description: '다낭 시내 한강을 가로지르는 황금빛 용 모양의 거대 교량. 주말 밤 화려한 불쇼/물쇼와 강변 유람선, 야시장이 펼쳐지는 활기의 중심입니다.',
    imageUrl: '/images/landmarks/dragonbridge.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80',
  },
];

export const DanangLandmarks: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-forest-950 via-[#0B2A20] to-[#FAF9F6] text-white relative overflow-hidden">
      {/* Background Subtle Ambiance */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-forest-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900/90 text-gold-400 text-xs sm:text-sm font-bold mb-4 border border-gold-400/30 shadow-md">
            <Compass className="w-4 h-4 text-gold-400" />
            <span>VIETNAM & DANANG ICONIC LANDMARKS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-sans break-keep">
            다낭을 가장 완벽하게 경험하는 5대 대표 명소
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed break-keep">
            푸른 바다와 산, 유네스코 역사 문화까지 간직한 베트남 중부의 보석.<br className="hidden sm:inline" />
            라운딩 후 이어지는 프라이빗 단독 차량 투어로 다낭의 핵심 랜드마크를 품격 있게 누려보세요.
          </p>
        </div>

        {/* 5 Landmark Cards Grid (1 col mobile, 2 col sm, 3 col lg, 5 col xl) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {LANDMARKS.map((landmark) => (
            <div
              key={landmark.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#EBE7DF] hover:border-gold-400 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col text-charcoal-900"
            >
              {/* Photo Area */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-forest-950">
                <img
                  src={landmark.imageUrl}
                  alt={landmark.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-95"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = landmark.fallbackUrl;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-forest-900/90 text-gold-300 font-extrabold text-[11px] border border-gold-400/40 shadow-sm">
                    {landmark.badge}
                  </span>
                </div>

                {/* Bottom Highlight Tag */}
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <span className="text-[11px] font-bold text-gold-300 flex items-center gap-1 drop-shadow">
                    <Sparkles className="w-3 h-3 text-gold-400 flex-shrink-0" />
                    <span className="truncate">{landmark.highlightTag}</span>
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-charcoal-900 mb-1 font-sans break-keep group-hover:text-forest-900 transition-colors">
                    {landmark.name}
                  </h3>
                  <span className="text-[11px] text-charcoal-500 font-medium block mb-2.5 truncate">
                    {landmark.vietnameseName}
                  </span>
                  <p className="text-xs text-charcoal-700 leading-relaxed break-keep line-clamp-3">
                    {landmark.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-forest-900 font-bold">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                    <span>단독 투어 포함</span>
                  </span>
                  <span className="text-gold-600 font-extrabold">전용 차량 이동</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
