import React from 'react';
import { CalendarCheck, MessageCircle, ShieldCheck, Award, Car, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/tourData';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Background Image with Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=2000&q=85"
          alt="다낭 프리미엄 골프장"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transform animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>다낭 No.1 럭셔리 자유여행 & 명문 골프투어 공식 에이전시</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.25] sm:leading-[1.2] mb-6">
          다낭에서의 완벽한 휴양과 라운딩,
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-300 bg-clip-text text-transparent">
            맞춤형 자유 / 골프 투어
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-8">
          항공권만 챙겨오세요. <span className="text-white font-semibold">단독 전용 차량</span>,{' '}
          <span className="text-white font-semibold">프리미엄 풀빌라</span>,{' '}
          <span className="text-white font-semibold">명문 골프장 골든 티오프</span>까지{' '}
          <br className="hidden sm:inline" />
          다낭 현지 전담 매니저가 처음부터 끝까지 원스톱 케어해 드립니다.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 mb-12">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-base shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <CalendarCheck className="w-5 h-5 text-emerald-100" />
            <span>견적 및 예약 신청하기</span>
          </button>

          <a
            href={COMPANY_INFO.kakaoChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-kakao-bg hover:brightness-95 text-kakao-text font-bold text-base shadow-lg shadow-yellow-500/10 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-kakao-text" />
            <span>카카오톡 실시간 상담</span>
          </a>
        </div>

        {/* Value Propositions / Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3.5 sm:p-4 text-white hover:bg-white/15 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold">100% 단독 단독행사</h4>
            <p className="text-[11px] text-slate-300 mt-0.5">모르는 사람과 조인 없는 우리 일행만의 프라이빗 여행</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3.5 sm:p-4 text-white hover:bg-white/15 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
              <Award className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold">명문 티오프 100% 확정</h4>
            <p className="text-[11px] text-slate-300 mt-0.5">호이아나·바나힐스·BRG 직통 라인 골든 타임 선점</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3.5 sm:p-4 text-white hover:bg-white/15 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
              <Car className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold">VIP 전용차량 & 기사</h4>
            <p className="text-[11px] text-slate-300 mt-0.5">골프백 넉넉 수납! 공항-골프장-시내 어디든 자유 이동</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3.5 sm:p-4 text-white hover:bg-white/15 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold">NO 강요 · NO 쇼핑</h4>
            <p className="text-[11px] text-slate-300 mt-0.5">원치 않는 의무 쇼핑센터 방문 절대 없음 (0건 원칙)</p>
          </div>
        </div>
      </div>
    </section>
  );
};
