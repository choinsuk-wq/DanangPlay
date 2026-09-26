import React from 'react';
import { VEHICLE_OPTIONS, VILLA_OPTIONS } from '../data/tourData';
import {
  Car,
  Home,
  Users,
  Briefcase,
  Clock,
  Waves,
  Bed,
  CheckCircle,
  Award,
  ArrowRight
} from 'lucide-react';

const FALLBACK_RESORT_IMAGE = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80';
const FALLBACK_VEHICLE_IMAGE = 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80';

interface AddonServicesProps {
  onSelectService: (serviceType: 'vehicle' | 'villa') => void;
}

export const AddonServices: React.FC<AddonServicesProps> = ({ onSelectService }) => {
  return (
    <>
      {/* ========================================================
          Section 3: 하이엔드 호텔 & 프라이빗 독채 풀빌라 (#villas)
         ======================================================== */}
      <section id="villas" className="py-24 bg-cream-50 border-t border-[#EBE7DF] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900 text-gold-400 text-xs sm:text-sm font-bold mb-4 border border-gold-400/30 shadow-sm">
              <Home className="w-4 h-4 text-gold-400" />
              <span>PRIVATE RESIDENCES & 5-STAR VILLAS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight mb-4 font-sans break-keep">
              하이엔드 호텔 & 프라이빗 풀빌라
            </h2>
            <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed break-keep">
              라운딩 후 우리 일행만을 위한 단독 수영장과 정원 바베큐 파티.<br className="hidden sm:inline" />
              다낭 미케비치 해안가 및 명문 골프장 인접 3~5베드룸 럭셔리 독채 풀빌라를 엄선하여 안내합니다.
            </p>
          </div>

          {/* Villa Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {VILLA_OPTIONS.map((villa, idx) => (
              <div
                key={villa.id}
                className="bg-white rounded-3xl overflow-hidden border-2 border-[#EBE7DF] hover:border-gold-400/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Area */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-forest-950">
                  <img
                    src={villa.imageUrl}
                    alt={villa.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_RESORT_IMAGE;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-md bg-forest-900/90 text-gold-300 font-extrabold text-xs border border-gold-400/40 shadow-sm">
                      {idx === 0 ? '골프 1팀 (4~6인 추천)' : '골프 2팀 (8~10인 추천)'}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-gold-500 text-white font-extrabold text-xs shadow-sm">
                      독채 풀빌라
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="text-xs text-gold-300 font-bold block mb-1">
                      {villa.location}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans break-keep">
                      {villa.name}
                    </h3>
                  </div>
                </div>

                {/* Specs & Features (Directly Addressing User Requirements) */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Key Specs Icons Strip */}
                    <div className="grid grid-cols-3 gap-2.5 p-4 rounded-2xl bg-cream-100/90 border border-[#EBE7DF] mb-5 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <Clock className="w-5 h-5 text-forest-800 mb-1" />
                        <span className="text-[11px] text-charcoal-500 font-medium">골프장 이동</span>
                        <span className="text-xs sm:text-sm font-extrabold text-charcoal-900">
                          {idx === 0 ? '차량 10~15분' : '차량 3~10분'}
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center border-x border-[#E0DCCE]">
                        <Bed className="w-5 h-5 text-forest-800 mb-1" />
                        <span className="text-[11px] text-charcoal-500 font-medium">침실 / 욕실</span>
                        <span className="text-xs sm:text-sm font-extrabold text-charcoal-900">
                          {idx === 0 ? '3베드룸 (전용욕실)' : '4~5베드룸 (욕실 6개)'}
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <Waves className="w-5 h-5 text-forest-800 mb-1" />
                        <span className="text-[11px] text-charcoal-500 font-medium">수영장</span>
                        <span className="text-xs sm:text-sm font-extrabold text-charcoal-900">
                          단독 프라이빗 풀
                        </span>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed mb-5 break-keep">
                      {villa.description}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {villa.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-charcoal-800 break-keep">
                          <CheckCircle className="w-4 h-4 text-forest-800 flex-shrink-0" />
                          <span className="break-keep">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onSelectService('villa')}
                    className="w-full min-h-[52px] px-4 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-forest-900/20 flex items-center justify-center gap-2 transition-all cursor-pointer border border-forest-700 active:scale-98 break-keep"
                  >
                    <span className="break-keep">이 풀빌라 포함 맞춤 견적 신청하기</span>
                    <ArrowRight className="w-4 h-4 text-gold-400 stroke-[2.5] flex-shrink-0" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 5-Star Beach Resort Banner */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#EBE7DF] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-300 flex items-center justify-center text-gold-700 font-black flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-charcoal-900 font-sans mb-1 break-keep">
                  5성급 비치 리조트 & 특급 호텔 예약 대행
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl leading-relaxed break-keep">
                  인터컨티넨탈 다낭, 하얏트 리젠시, 쉐라톤 그랜드, 풀만 리조트 등 원하시는 5성급 리조트 객실을 기업 특가 및 골프 패키지와 결합하여 함께 예약해 드립니다.
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectService('villa')}
              className="px-6 min-h-[48px] rounded-xl bg-cream-100 hover:bg-cream-200 border border-slate-300 text-charcoal-900 font-extrabold text-xs sm:text-sm whitespace-nowrap cursor-pointer transition-colors break-keep"
            >
              호텔 & 리조트 상담 요청
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          Section 4: VIP 전용 의전 차량 & 현지 신뢰 지표 (#vehicles)
         ======================================================== */}
      <section id="vehicles" className="py-24 bg-forest-950 text-white relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-forest-800/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900/90 text-gold-400 text-xs sm:text-sm font-bold mb-4 border border-gold-400/30 shadow-md">
              <Car className="w-4 h-4 text-gold-400" />
              <span>VIP CHAUFFEUR FLEET & GUARANTEE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 font-sans break-keep">
              전용 의전 차량 & 현지 신뢰 보증 지표
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed break-keep">
              모르는 사람과 조인 없이 오직 우리 일행만 탑승하는 단독 전용 차량.<br className="hidden sm:inline" />
              인원수와 골프백 수납에 완벽히 최적화된 최고급 차량 라인업과 10년 상주 노하우의 신뢰를 드립니다.
            </p>
          </div>

          {/* Vehicle Fleet Cards (With Clear Golf Bag Capacity Guidance) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {VEHICLE_OPTIONS.map((veh) => (
              <div
                key={veh.id}
                className="bg-forest-900/70 rounded-3xl overflow-hidden border border-forest-700/80 hover:border-gold-400/70 shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-900">
                    <img
                      src={veh.imageUrl}
                      alt={veh.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = FALLBACK_VEHICLE_IMAGE;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-gold-300 text-xs font-bold">
                      {veh.englishName}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-sans break-keep">
                      {veh.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed break-keep">
                      {veh.description}
                    </p>

                    {/* Dedicated Capacity & Golf Bag Specs Callout */}
                    <div className="space-y-2.5 mb-5 p-4 rounded-2xl bg-forest-950/80 border border-forest-800 text-xs sm:text-sm">
                      <div className="flex items-center gap-2.5 text-slate-200">
                        <Users className="w-4 h-4 text-gold-400 flex-shrink-0" />
                        <span className="break-keep"><strong>권장 인원:</strong> {veh.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-slate-200">
                        <Briefcase className="w-4 h-4 text-gold-400 flex-shrink-0" />
                        <span className="break-keep"><strong>골프백 탑재:</strong> <strong className="text-gold-300">{veh.luggage}</strong></span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-1.5 mb-2">
                      {veh.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300 break-keep">
                          <CheckCircle className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                          <span className="break-keep">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectService('vehicle')}
                    className="w-full min-h-[50px] px-4 rounded-xl bg-forest-800 hover:bg-forest-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer border border-forest-600 active:scale-98 break-keep"
                  >
                    <span className="break-keep">이 차량으로 배차 문의</span>
                    <ArrowRight className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Local Trust Indicators (Targeting 40~60 High-end Reassurance) */}
          <div className="p-6 sm:p-12 rounded-3xl bg-forest-900/90 border-2 border-gold-400/40 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-gold-400 font-extrabold text-xs uppercase tracking-widest block mb-2">
                WHY TRAVEL WITH US
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans break-keep">
                다낭플레이만의 4대 신뢰 보증 시스템
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-2xl bg-forest-950/60 border border-forest-800">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center font-black mb-3 border border-gold-400/30 flex-shrink-0">
                  1
                </div>
                <h4 className="text-base font-bold text-white mb-1.5 break-keep">10년 이상 다낭 현지 상주</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed break-keep">
                  서울 여행사가 하청을 주는 구조가 아닌, 현지 법인 직영 매니저가 직접 모든 일정을 총괄합니다.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-forest-950/60 border border-forest-800">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center font-black mb-3 border border-gold-400/30 flex-shrink-0">
                  2
                </div>
                <h4 className="text-base font-bold text-white mb-1.5 break-keep">24시간 한국어 긴급 핫라인</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed break-keep">
                  항공 지연, 골프장 기상 악화, 응급 상황 발생 시 한국어로 24시간 실시간 조율 및 병원/통역 지원.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-forest-950/60 border border-forest-800">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center font-black mb-3 border border-gold-400/30 flex-shrink-0">
                  3
                </div>
                <h4 className="text-base font-bold text-white mb-1.5 break-keep">노쇼 방지 티타임 100% 확정</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed break-keep">
                  골프장과의 직통 계약 라인을 통해 바우처 발행과 티오프를 100% 보증하여 불안감을 원천 차단합니다.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-forest-950/60 border border-forest-800">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center font-black mb-3 border border-gold-400/30 flex-shrink-0">
                  4
                </div>
                <h4 className="text-base font-bold text-white mb-1.5 break-keep">베트남 관광청 정식 인가</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed break-keep">
                  정식 여행업 인가 라이선스(No. 0402198845)를 보유한 합법 현지 여행사로 안전한 여행을 보장합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
