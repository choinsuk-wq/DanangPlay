import React, { useState } from 'react';
import { Calendar, Users, Flag, ArrowRight, ShieldCheck, Award, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { GOLF_COURSES } from '../data/tourData';

interface HeroProps {
  onBookClick: () => void;
  onQuickSearch?: (courseName: string, date: string, guestCount: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onQuickSearch }) => {
  const [selectedCourse, setSelectedCourse] = useState('BRG 다낭 골프 리조트');
  const [travelDate, setTravelDate] = useState('');
  const [guestCount, setGuestCount] = useState(4);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onQuickSearch) {
      onQuickSearch(selectedCourse, travelDate, guestCount);
    } else {
      onBookClick();
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-forest-950">
      {/* High-Resolution Wide Panoramic Background with Luxury Contrast Vignette */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=2400&q=88"
          alt="다낭 챔피언십 명문 골프 코스 전경"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform animate-fade-in"
        />
        {/* Layered deep forest green gradient overlays for timeless prestige */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-transparent to-forest-950/85" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Tag: Luxury Crest / Official Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-forest-900/80 border border-gold-400/50 text-gold-300 text-xs sm:text-sm font-bold mb-6 backdrop-blur-md shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>DANANG PREMIER GOLF & PRIVATE TRAVEL CONCIERGE</span>
        </div>

        {/* Main Headline (Clean, modern Pretendard font) */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.3] sm:leading-[1.22] mb-6 font-sans">
          다낭 골프의 <span className="text-gold-400 underline decoration-gold-500/40 underline-offset-8">격(格)</span>을 높이다.
          <br />
          <span className="text-xl sm:text-3xl lg:text-4xl font-normal text-slate-100 block mt-3.5 tracking-normal">
            현지 상주 전문가가 완성하는 프리미엄 부킹 & 투어
          </span>
        </h1>

        {/* Subtitle with High Readability (3 distinct clean lines) */}
        <div className="max-w-4xl mx-auto text-base sm:text-lg lg:text-xl text-slate-200/90 font-normal leading-relaxed mb-10 space-y-1.5 sm:space-y-1 text-center break-keep">
          <p className="text-gold-300 font-bold text-lg sm:text-xl">
            항공권만 챙겨오십시오.
          </p>
          <p>
            <strong className="text-gold-300 font-bold">세계 100대 명문 골든 티오프 100% 확정</strong>,{' '}
            <strong className="text-white font-bold">단독 의전 차량</strong>, 그리고{' '}
            <strong className="text-white font-bold">최고급 독채 풀빌라</strong>까지
          </p>
          <p className="text-slate-300">
            10년 이상 다낭에 상주한 전담 한국인 총괄 매니저가 처음부터 끝까지 품격 있게 풀케어합니다.
          </p>
        </div>

        {/* 2. Quick Consultation Bar [골프장 선택] [희망 일정] [인원수] [원클릭 견적 문의] */}
        <div className="w-full max-w-4xl bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border-2 border-gold-400/40 mb-12 text-left">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <span className="text-xs sm:text-sm font-black text-forest-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gold-500"></span>
              빠른 실시간 예약 & 견적 상담 바 (Quick Concierge)
            </span>
            <span className="text-[11px] sm:text-xs text-charcoal-600 font-medium hidden sm:inline">
              * 원하시는 조건을 입력하시면 담당 매니저가 티타임을 바로 조회합니다.
            </span>
          </div>

          <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
            {/* 1. Course Selection */}
            <div>
              <label className="block text-xs font-extrabold text-charcoal-800 mb-1.5 flex items-center gap-1">
                <Flag className="w-3.5 h-3.5 text-forest-800" />
                <span>희망 골프장 선택</span>
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full h-[52px] px-3.5 rounded-xl border border-slate-300 bg-cream-50 text-charcoal-900 font-semibold text-sm focus:outline-none focus:border-forest-800 focus:ring-2 focus:ring-forest-800/10 cursor-pointer"
              >
                <option value="전체 / 추천 희망">전체 명문 코스 (전문가 추천)</option>
                {GOLF_COURSES.map((course) => (
                  <option key={course.id} value={course.name}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Travel Date */}
            <div>
              <label className="block text-xs font-extrabold text-charcoal-800 mb-1.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-forest-800" />
                <span>출발 / 희망 일정</span>
              </label>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full h-[52px] px-3.5 rounded-xl border border-slate-300 bg-cream-50 text-charcoal-900 font-semibold text-sm focus:outline-none focus:border-forest-800 focus:ring-2 focus:ring-forest-800/10 cursor-pointer"
              />
            </div>

            {/* 3. Guest Count */}
            <div>
              <label className="block text-xs font-extrabold text-charcoal-800 mb-1.5 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-forest-800" />
                <span>플레이 인원</span>
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-[52px] px-3.5 rounded-xl border border-slate-300 bg-cream-50 text-charcoal-900 font-semibold text-sm focus:outline-none focus:border-forest-800 focus:ring-2 focus:ring-forest-800/10 cursor-pointer"
              >
                <option value={4}>4인 (정규 1팀 추천)</option>
                <option value={8}>8인 (정규 2팀 단체)</option>
                <option value={2}>2인 라운딩 희망</option>
                <option value={3}>3인 라운딩 희망</option>
                <option value={12}>12인 이상 대형 단체</option>
              </select>
            </div>

            {/* 4. Submit CTA Button */}
            <div>
              <button
                type="submit"
                className="w-full min-h-[52px] px-5 rounded-xl bg-forest-900 hover:bg-forest-800 active:scale-98 text-white font-black text-[15px] sm:text-[16px] shadow-lg shadow-forest-900/30 flex items-center justify-center gap-2 transition-all cursor-pointer border border-forest-700"
              >
                <span>원클릭 견적 문의</span>
                <ArrowRight className="w-4 h-4 text-gold-400 stroke-[2.5]" />
              </button>
            </div>
          </form>
        </div>

        {/* Trust Badges / 4 Key Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto w-full text-left">
          <div className="bg-forest-900/60 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-white hover:bg-forest-900/80 transition-colors shadow-md">
            <div className="w-9 h-9 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-2.5 border border-gold-400/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm sm:text-base font-bold text-white">100% 프라이빗 단독</h4>
            <p className="text-xs text-slate-300 mt-1 leading-snug">모르는 타인 조인 일체 없음! 우리 일행만의 전용 의전</p>
          </div>

          <div className="bg-forest-900/60 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-white hover:bg-forest-900/80 transition-colors shadow-md">
            <div className="w-9 h-9 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-2.5 border border-gold-400/30">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-sm sm:text-base font-bold text-white">골든 티오프 100% 확정</h4>
            <p className="text-xs text-slate-300 mt-1 leading-snug">호이아나·바나힐·BRG 직통 라인 프라임 타임 배정</p>
          </div>

          <div className="bg-forest-900/60 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-white hover:bg-forest-900/80 transition-colors shadow-md">
            <div className="w-9 h-9 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-2.5 border border-gold-400/30">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="text-sm sm:text-base font-bold text-white">현지 10년 직영 케어</h4>
            <p className="text-xs text-slate-300 mt-1 leading-snug">중간 수수료 거품 없는 합리적 정찰 견적 및 실시간 케어</p>
          </div>

          <div className="bg-forest-900/60 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-white hover:bg-forest-900/80 transition-colors shadow-md">
            <div className="w-9 h-9 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-2.5 border border-gold-400/30">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h4 className="text-sm sm:text-base font-bold text-white">NO 쇼핑 · NO 옵션강요</h4>
            <p className="text-xs text-slate-300 mt-1 leading-snug">의무 쇼핑센터 방문 0건 원칙, 100% 순수 여행 보장</p>
          </div>
        </div>
      </div>
    </section>
  );
};
