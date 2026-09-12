import React, { useState } from 'react';
import { TOUR_PACKAGES } from '../data/tourData';
import { Clock, Check, X, Sparkles, Calendar, ArrowRight, Utensils, Hotel, Car, Info } from 'lucide-react';

interface TourItineraryProps {
  onSelectPackage: (packageId: string) => void;
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
    <section id="itinerary" className="py-20 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>CUSTOM TOUR ITINERARY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            다낭 추천 투어 스케줄
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            최고의 명문 코스를 경험하는 <strong>프리미엄 골프투어</strong>와 바나힐·호이안 명소를 편안하게 즐기는 <strong>시그니처 자유투어</strong> 중 선택해 보세요.<br className="hidden sm:inline" />
            모든 일정은 100% 단독 전용 차량 행사로 고객님의 항공 스케줄에 맞춰 자유롭게 커스텀 가능합니다.
          </p>
        </div>

        {/* 1. Category Switcher (Golf vs Free Tour) */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/90 backdrop-blur-sm shadow-inner w-full max-w-md">
            <button
              onClick={() => handleCategoryChange('golf')}
              className={`flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                activeCategory === 'golf'
                  ? 'bg-emerald-700 text-white shadow-md transform scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <span className="text-base">🏌️</span>
              <span>프리미엄 골프투어</span>
            </button>
            <button
              onClick={() => handleCategoryChange('free')}
              className={`flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                activeCategory === 'free'
                  ? 'bg-emerald-700 text-white shadow-md transform scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <span className="text-base">🌴</span>
              <span>시그니처 자유투어</span>
            </button>
          </div>
        </div>

        {/* 2. Duration Sub-Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-slate-200/60 border border-slate-200 shadow-sm w-full max-w-xl">
            {categoryPackages.map((pkg) => {
              const isActive = activeTab === pkg.id;
              const durationLabel = pkg.id.includes('3n4d') ? '3박 4일 일정' : '4박 5일 일정';
              const badgeLabel = pkg.id.includes('free')
                ? pkg.id.includes('3n4d') ? '바나힐·호이안' : '선짜반도·스파'
                : pkg.id.includes('3n4d') ? '시그니처 54홀' : '황제 72홀·풀빌라';

              return (
                <button
                  key={pkg.id}
                  onClick={() => setActiveTab(pkg.id)}
                  className={`flex-1 py-3 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center cursor-pointer ${
                    isActive
                      ? 'bg-white text-emerald-900 shadow-sm font-extrabold border border-slate-200/80 transform scale-[1.01]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/40'
                  }`}
                >
                  <span>{durationLabel}</span>
                  <span
                    className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-emerald-100 text-emerald-800' : 'text-slate-400 bg-slate-200/60'
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
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-100 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-md bg-emerald-600 text-white font-bold text-xs">
                  {currentPkg.durationTag}
                </span>
                {currentPkg.badge && (
                  <span className="px-3 py-1 rounded-md bg-amber-500 text-white font-bold text-xs flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {currentPkg.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                {currentPkg.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {currentPkg.summary}
              </p>

              {currentPkg.notice && (
                <div className="mt-3.5 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-medium">
                  <Info className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{currentPkg.notice}</span>
                </div>
              )}
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={() => onSelectPackage(currentPkg.id)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>이 코스로 견적 문의하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="mt-6">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              핵심 포인트 (Key Highlights)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {currentPkg.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100/60">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-xs font-semibold text-slate-800 leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Day-by-Day Timeline */}
        <div className="space-y-6 mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-600" />
            <span>일자별 세부 일정 타임라인</span>
          </h3>

          <div className="space-y-4">
            {currentPkg.days.map((day) => (
              <div
                key={day.day}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-xl bg-slate-900 text-white font-extrabold text-sm tracking-wide">
                      DAY {day.day}
                    </span>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900">
                        {day.title}
                      </h4>
                      <p className="text-xs text-emerald-700 font-medium">
                        {day.subtitle}
                      </p>
                    </div>
                  </div>

                  {(day.stay || day.vehicle) && (
                    <div className="flex items-center gap-3 text-xs text-slate-500 pt-1 sm:pt-0">
                      {day.stay && (
                        <span className="flex items-center gap-1">
                          <Hotel className="w-3.5 h-3.5 text-slate-400" /> {day.stay}
                        </span>
                      )}
                      {day.vehicle && (
                        <span className="flex items-center gap-1">
                          <Car className="w-3.5 h-3.5 text-slate-400" /> {day.vehicle}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Timeline Events */}
                <div className="relative pl-6 sm:pl-8 space-y-4 before:absolute before:left-2.5 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                  {day.timeline.map((event, eIdx) => (
                    <div key={eIdx} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-6 sm:-left-8 top-1.5 w-3 h-3 rounded-full bg-white border-2 border-emerald-600 shadow-sm" />

                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                        {event.time && (
                          <span className="text-xs font-bold text-emerald-800 w-28 flex-shrink-0">
                            {event.time}
                          </span>
                        )}
                        <div>
                          <p className="text-sm font-bold text-slate-900">
                            {event.activity}
                          </p>
                          {event.description && (
                            <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
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
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600 bg-slate-50/80 px-3 py-2 rounded-lg">
                    <Utensils className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    <span className="font-semibold text-slate-700">식사:</span>
                    <span className="text-slate-500">
                      조식({day.meal.breakfast || '불포함'}) / 중식({day.meal.lunch || '자유식'}) / 석식({day.meal.dinner || '자유식'})
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Included / Excluded Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Included Card */}
          <div className="bg-white rounded-2xl p-6 border-2 border-emerald-100 shadow-sm">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-emerald-50">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">포함 사항 (Included)</h4>
                <p className="text-xs text-emerald-600 font-medium">단독 행사로 일체 추가 경비 없이 투명하게</p>
              </div>
            </div>
            <ul className="space-y-2.5">
              {currentPkg.included.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Excluded Card */}
          <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
                <X className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">불포함 사항 (Excluded)</h4>
                <p className="text-xs text-slate-500 font-medium">현지에서 직접 지출하시는 실비 항목</p>
              </div>
            </div>
            <ul className="space-y-2.5">
              {currentPkg.excluded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <span className="w-4 h-4 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
