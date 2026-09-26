import React, { useState } from 'react';
import { TOUR_PACKAGES } from '../data/tourData';
import { Clock, Check, X, Sparkles, ArrowRight, Utensils, Hotel, Car, Info, Compass } from 'lucide-react';

interface TourItineraryProps {
  onSelectPackage: (packageId: string, packageName?: string) => void;
}

export const TourItinerary: React.FC<TourItineraryProps> = ({ onSelectPackage }) => {
  const [activeCategory, setActiveCategory] = useState<'golf' | 'free'>('golf');
  const [activeTab, setActiveTab] = useState<string>('3n4d');

  const categoryPackages = TOUR_PACKAGES.filter((p) => (p.category || 'golf') === activeCategory);
  const currentPkg = TOUR_PACKAGES.find((p) => p.id === activeTab) || categoryPackages[0];

  const handleCategoryChange = (category: 'golf' | 'free') => {
    setActiveCategory(category);
    if (category === 'golf') {
      setActiveTab(activeTab.includes('4n5d') ? '4n5d' : '3n4d');
    } else {
      setActiveTab(activeTab.includes('4n5d') ? '4n5d-free' : '3n4d-free');
    }
  };

  return (
    <section id="itinerary" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900 text-gold-400 text-xs sm:text-sm font-bold mb-4 border border-gold-400/30 shadow-sm">
            <Compass className="w-4 h-4 text-gold-400" />
            <span>BESPOKE PRIVATE TOUR & HEALING</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight mb-4 font-sans break-keep">
            다낭 프라이빗 투어 & 힐링 일정
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed break-keep">
            골퍼를 위한 <strong>프리미엄 골프투어</strong>와 동반 가족 및 힐링을 위한 <strong>시그니처 자유투어</strong> 중 선택해 보세요.<br className="hidden sm:inline" />
            모든 일정은 100% 단독 전용 의전 차량 행사로 고객님의 항공 스케줄에 맞춰 유연하게 조율됩니다.
          </p>
        </div>

        {/* 💡 Guidance Notice Banner: 옵션 선택 및 실시간 견적 연동 안내 (User Request 1) */}
        <div className="max-w-4xl mx-auto mb-9 p-4 sm:p-5 rounded-2xl bg-[#F7F5F0] border-2 border-gold-400/60 shadow-md flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-forest-900 text-gold-400 flex items-center justify-center flex-shrink-0 shadow-md border border-gold-400/40">
            <Sparkles className="w-6 h-6 text-gold-400" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
              <span className="text-sm sm:text-base font-extrabold text-forest-950">
                투어 옵션 선택 및 실시간 견적 연동 안내
              </span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-800 border border-gold-400/40">
                원클릭 견적서 자동 반영
              </span>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed break-keep">
              아래 <strong>투어 옵션 탭([골프투어] / [자유투어] 및 [3박4일] / [4박5일])</strong>을 선택하시면 일자별 세부 일정, 포함/불포함 내역을 자세히 보실 수 있습니다. 코스 확인 후 오른쪽 <strong>[이 코스로 견적 문의하기]</strong> 버튼을 누르시면 해당 코스가 아래 견적서에 자동 반영되어 즉시 맞춤 상담이 진행됩니다.
            </p>
          </div>
        </div>

        {/* Tab Helper Hint */}
        <div className="text-center text-xs sm:text-sm font-extrabold text-forest-900 mb-3 flex items-center justify-center gap-1.5">
          <Sparkles className="w-4 h-4 text-gold-500" />
          <span>아래 탭을 클릭하여 상세 일정을 확인해 보세요 (실시간 코스 전환)</span>
        </div>

        {/* 1. Category Switcher (Golf vs Free Tour) */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex p-1.5 rounded-2xl bg-cream-100 border border-[#E0DCCE] w-full max-w-lg shadow-inner">
            <button
              onClick={() => handleCategoryChange('golf')}
              className={`flex-1 py-3.5 px-4 rounded-xl text-sm sm:text-base font-black transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer break-keep ${
                activeCategory === 'golf'
                  ? 'bg-forest-900 text-white shadow-lg shadow-forest-900/20 transform scale-[1.02] border border-forest-700'
                  : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-white/60'
              }`}
            >
              <span className="text-lg flex-shrink-0">🏌️</span>
              <span className="break-keep">프리미엄 골프투어</span>
            </button>
            <button
              onClick={() => handleCategoryChange('free')}
              className={`flex-1 py-3.5 px-4 rounded-xl text-sm sm:text-base font-black transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer break-keep ${
                activeCategory === 'free'
                  ? 'bg-forest-900 text-white shadow-lg shadow-forest-900/20 transform scale-[1.02] border border-forest-700'
                  : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-white/60'
              }`}
            >
              <span className="text-lg flex-shrink-0">🌴</span>
              <span className="break-keep">시그니처 자유투어</span>
            </button>
          </div>
        </div>

        {/* 2. Duration Sub-Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 shadow-xs w-full max-w-xl">
            {categoryPackages.map((pkg) => {
              const isActive = activeTab === pkg.id;
              const durationLabel = pkg.id.includes('3n4d') ? '3박 4일 맞춤 코스' : '4박 5일 완전정복 코스';
              const badgeLabel = pkg.id.includes('free')
                ? pkg.id.includes('3n4d') ? '바나힐·호이안' : '선짜반도·스파'
                : pkg.id.includes('3n4d') ? '시그니처 54홀' : '황제 72홀·풀빌라';

              return (
                <button
                  key={pkg.id}
                  onClick={() => setActiveTab(pkg.id)}
                  className={`flex-1 py-3 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-extrabold transition-all duration-200 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center cursor-pointer break-keep ${
                    isActive
                      ? 'bg-white text-forest-900 shadow-md border border-[#E5E0D8] transform scale-[1.01]'
                      : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-slate-200/50'
                  }`}
                >
                  <span className="text-xs sm:text-base break-keep">{durationLabel}</span>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full break-keep ${
                      isActive ? 'bg-gold-50 text-gold-700 border border-gold-300' : 'text-slate-400 bg-slate-200/60'
                    }`}
                  >
                    {badgeLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Package Overview Card */}
        <div className="bg-[#FAF9F6] rounded-3xl p-5 sm:p-10 shadow-lg border-2 border-[#EBE7DF] mb-12">
          <div className="pb-8 border-b border-[#EBE7DF]">
            {/* Top Row: Badges, Title & Action Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3.5">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className="px-3.5 py-1.5 rounded-lg bg-forest-900 text-gold-300 font-extrabold text-xs tracking-wide border border-gold-400/40">
                    {currentPkg.durationTag}
                  </span>
                  {currentPkg.badge && (
                    <span className="px-3.5 py-1.5 rounded-lg bg-gold-50 text-gold-700 font-extrabold text-xs flex items-center gap-1 border border-gold-300">
                      <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                      {currentPkg.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900 font-sans break-keep">
                  {currentPkg.name}
                </h3>
              </div>

              <div className="flex-shrink-0 text-center sm:text-right">
                <button
                  onClick={() => onSelectPackage(currentPkg.id, currentPkg.name)}
                  className="w-full sm:w-auto min-h-[50px] sm:min-h-[54px] px-6 sm:px-8 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-black text-sm sm:text-base shadow-xl shadow-forest-900/25 flex items-center justify-center gap-2.5 transition-all cursor-pointer border border-forest-700 active:scale-98 break-keep group"
                >
                  <span className="break-keep">이 코스로 견적 문의하기</span>
                  <ArrowRight className="w-4 h-4 text-gold-400 stroke-[2.5] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="block text-[11px] text-charcoal-500 font-semibold mt-1.5 break-keep">
                  * 클릭 시 아래 [실시간 무료 견적] 양식에 본 코스가 즉시 반영됩니다.
                </span>
              </div>
            </div>

            {/* Bottom Row: Full-width Package Summary on one clean line */}
            <p className="text-charcoal-700 text-sm sm:text-[15px] lg:text-base leading-relaxed tracking-tight break-keep mt-2">
              {currentPkg.summary}
            </p>

            {/* Watersports seasonal notice banner */}
            {currentPkg.notice && (
              <div className="mt-3.5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold-50 border border-gold-300 text-gold-800 text-xs sm:text-sm font-semibold">
                <Info className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <span>{currentPkg.notice}</span>
              </div>
            )}
          </div>

          {/* Key Highlights */}
          <div className="mt-8">
            <h4 className="text-xs font-bold text-charcoal-500 uppercase tracking-widest mb-4">
              핵심 포함 포인트 (KEY HIGHLIGHTS)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {currentPkg.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E5E0D8] shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center flex-shrink-0 text-xs font-black mt-0.5 border border-gold-400/50">
                    {idx + 1}
                  </div>
                  <span className="text-sm font-bold text-charcoal-800 leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Day-by-Day Timeline Container with Dynamic Ambient Photo Background */}
        <div className="relative rounded-3xl p-4 sm:p-8 lg:p-10 mb-16 border-2 border-[#E7E2D6] shadow-md overflow-hidden bg-cream-50/60">
          {/* Dynamic Ambient Background: Golf vs Free Tour */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden rounded-3xl">
            {/* GOLF TOUR BACKGROUND: BRG Da Nang & Montgomerie Links */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                activeCategory === 'golf' ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Upper Section: BRG Da Nang Golf Resort */}
              <div className="absolute top-0 left-0 right-0 h-3/5 overflow-hidden">
                <img
                  src="/images/golf/brg.jpg"
                  alt="BRG 다낭 골프 리조트 배경"
                  className="w-full h-full object-cover object-center opacity-25 filter saturate-110"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/95" />
              </div>

              {/* Lower Section: Montgomerie Links */}
              <div className="absolute bottom-0 left-0 right-0 h-3/5 overflow-hidden">
                <img
                  src="/images/golf/montgomerie.jpg"
                  alt="몽고메리 링크스 배경"
                  className="w-full h-full object-cover object-center opacity-25 filter saturate-110"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/95" />
              </div>

              {/* Prestige subtle wash */}
              <div className="absolute inset-0 bg-gradient-to-b from-cream-50/60 via-white/50 to-cream-100/60" />
            </div>

            {/* FREE TOUR BACKGROUND: Ba Na Hills & Hoi An */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                activeCategory === 'free' ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Upper Section: Ba Na Hills Golden Bridge */}
              <div className="absolute top-0 left-0 right-0 h-3/5 overflow-hidden">
                <img
                  src="/images/tour/banahills.jpg"
                  alt="바나힐 골든 브릿지 배경"
                  className="w-full h-full object-cover object-center opacity-25 filter saturate-110"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/95" />
              </div>

              {/* Lower Section: Hoi An Ancient Town */}
              <div className="absolute bottom-0 left-0 right-0 h-3/5 overflow-hidden">
                <img
                  src="/images/tour/hoian.jpg"
                  alt="호이안 올드타운 풍경 배경"
                  className="w-full h-full object-cover object-center opacity-25 filter saturate-110"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/95" />
              </div>

              {/* Prestige subtle wash */}
              <div className="absolute inset-0 bg-gradient-to-b from-cream-50/60 via-white/50 to-cream-100/60" />
            </div>
          </div>

          {/* Timeline Header (Relative to stay above ambient backdrop) */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-[#E2DDD2]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center shadow-xs flex-shrink-0 border border-gold-400/30">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 flex items-center gap-2 font-sans break-keep">
                  <span>일자별 상세 일정 타임라인</span>
                </h3>
                <p className="text-xs sm:text-sm text-forest-800 font-semibold mt-0.5 break-keep">
                  {activeCategory === 'golf'
                    ? '다낭 대표 명문 코스 (BRG 다낭 CC & 몽고메리 링크스) 부킹 일정'
                    : '다낭 & 호이안 대표 명소 (바나힐스 & 호이안 올드타운) 단독 힐링 일정'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs text-charcoal-500 font-medium hidden lg:inline break-keep">
                * 전 일정 전용 차량 및 기사 100% 단독 지원
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-charcoal-800 border border-[#D5D0C5] shadow-xs backdrop-blur-xs break-keep">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse flex-shrink-0" />
                {activeCategory === 'golf' ? '배경: BRG 다낭 CC · 몽고메리' : '배경: 바나힐 · 호이안 풍경'}
              </span>
            </div>
          </div>

          {/* Timeline Cards List (Relative to stay above ambient backdrop) */}
          <div className="relative z-10 space-y-6">
            {currentPkg.days.map((day) => (
              <div
                key={day.day}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-8 shadow-sm border-2 border-[#EBE7DF] hover:border-forest-700/40 hover:bg-white hover:shadow-md transition-all"
              >
                {/* Day Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
                  <div className="flex items-center gap-3.5">
                    <span className="px-3.5 py-1.5 rounded-xl bg-forest-900 text-gold-300 font-black text-sm tracking-wider shadow-xs flex-shrink-0">
                      DAY {day.day}
                    </span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-charcoal-900 break-keep">
                        {day.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-forest-800 font-bold mt-0.5 break-keep">
                        {day.subtitle}
                      </p>
                    </div>
                  </div>

                  {(day.stay || day.vehicle) && (
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold text-charcoal-600 pt-1 sm:pt-0">
                      {day.stay && (
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cream-100 border border-[#E5E0D8] break-keep">
                          <Hotel className="w-3.5 h-3.5 text-forest-800 flex-shrink-0" /> {day.stay}
                        </span>
                      )}
                      {day.vehicle && (
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cream-100 border border-[#E5E0D8] break-keep">
                          <Car className="w-3.5 h-3.5 text-forest-800 flex-shrink-0" /> {day.vehicle}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Timeline Events (16px font readability for 4060 travelers) */}
                <div className="relative pl-6 sm:pl-8 space-y-4 before:absolute before:left-2.5 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#EBE7DF]">
                  {day.timeline.map((event, eIdx) => (
                    <div key={eIdx} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-6 sm:-left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-forest-800 shadow-xs" />

                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                        {event.time && (
                          <span className="text-xs sm:text-sm font-extrabold text-forest-900 w-fit sm:w-28 flex-shrink-0 bg-forest-50 px-2 py-0.5 rounded border border-forest-200">
                            {event.time}
                          </span>
                        )}
                        <div>
                          <p className="text-base font-extrabold text-charcoal-900 break-keep">
                            {event.activity}
                          </p>
                          {event.description && (
                            <p className="text-sm sm:text-[15px] text-charcoal-700 mt-1 leading-relaxed break-keep">
                              {event.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Meals */}
                {day.meal && (
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2.5 text-xs sm:text-sm text-charcoal-700 bg-cream-50 px-3.5 sm:px-4 py-2.5 rounded-xl border border-[#EBE7DF] break-keep">
                    <Utensils className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span className="font-extrabold text-charcoal-900 flex-shrink-0">제공 식사:</span>
                    <span className="text-charcoal-600 break-keep">
                      조식({day.meal.breakfast || '불포함'}) / 중식({day.meal.lunch || '자유식'}) / 석식({day.meal.dinner || '자유식'})
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Included / Excluded Checklist (Clear 4060 Readability) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Included Card */}
          <div className="bg-[#FAF9F6] rounded-2xl p-5 sm:p-8 border-2 border-forest-800/30 shadow-md">
            <div className="flex items-center gap-3 pb-4 mb-5 border-b border-[#EBE7DF]">
              <div className="w-9 h-9 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center font-black flex-shrink-0">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-bold text-charcoal-900 text-base sm:text-lg font-sans break-keep">포함 사항 (INCLUDED)</h4>
                <p className="text-xs sm:text-sm text-forest-800 font-bold break-keep">100% 단독 행사로 숨겨진 추가 비용 없이 투명하게</p>
              </div>
            </div>
            <ul className="space-y-3">
              {currentPkg.included.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-charcoal-800 font-medium break-keep">
                  <span className="w-5 h-5 rounded-full bg-forest-800 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className="break-keep">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Excluded Card */}
          <div className="bg-white rounded-2xl p-5 sm:p-8 border-2 border-[#EBE7DF] shadow-md">
            <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-charcoal-600 flex items-center justify-center font-black flex-shrink-0">
                <X className="w-5 h-5 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-bold text-charcoal-900 text-base sm:text-lg font-sans break-keep">불포함 사항 (EXCLUDED)</h4>
                <p className="text-xs sm:text-sm text-charcoal-500 font-bold break-keep">현지에서 직접 지출하시는 실비 안내</p>
              </div>
            </div>
            <ul className="space-y-3">
              {currentPkg.excluded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-charcoal-600 break-keep">
                  <span className="w-5 h-5 rounded-full bg-slate-200 text-charcoal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className="break-keep">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA Card after reviewing full itinerary */}
        <div className="mt-12 bg-forest-900 rounded-3xl p-6 sm:p-8 text-white border-2 border-gold-400 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 text-xs font-bold mb-2 border border-gold-400/30">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>현재 확인 중인 코스: {currentPkg.durationTag}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white break-keep">
              [{currentPkg.name}] 로 여행을 떠나시겠습니까?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 break-keep">
              버튼을 누르시면 본 코스가 아래 [실시간 무료 견적] 양식에 자동 입력되어 바로 상담이 가능합니다.
            </p>
          </div>
          <button
            onClick={() => onSelectPackage(currentPkg.id, currentPkg.name)}
            className="w-full md:w-auto min-h-[52px] px-8 rounded-xl bg-gold-500 hover:bg-gold-400 active:scale-98 text-forest-950 font-black text-sm sm:text-base shadow-lg shadow-gold-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer flex-shrink-0 break-keep group"
          >
            <span>이 코스로 견적 문의하기</span>
            <ArrowRight className="w-4 h-4 text-forest-950 stroke-[3] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
