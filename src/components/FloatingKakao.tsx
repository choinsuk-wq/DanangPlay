import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/tourData';

export const FloatingKakao: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-6 z-50 flex flex-col sm:flex-row items-end sm:items-center gap-2 group select-none">
      {/* Prestigious Speech Bubble: Compact on mobile to never block FAQ/Content */}
      {showTooltip && (
        <div className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full sm:rounded-2xl bg-white/95 backdrop-blur-md text-charcoal-900 shadow-xl border border-gold-400/80 text-[11px] sm:text-xs font-bold relative">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping flex-shrink-0" />
          <a
            href={COMPANY_INFO.kakaoChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest-900 tracking-tight whitespace-nowrap break-keep font-sans hover:underline"
          >
            카카오톡 1:1 상담 <span className="hidden sm:inline">(24H 실시간)</span>
          </a>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-charcoal-800 p-0.5 ml-0.5 transition-colors cursor-pointer"
            aria-label="말풍선 닫기"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Desktop Bubble Arrow */}
          <div className="hidden sm:block absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-gold-400 transform rotate-45" />
        </div>
      )}

      {/* Main Floating Action Button (54px on mobile, 64px on desktop) */}
      <a
        href={COMPANY_INFO.kakaoChannelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-kakao-bg hover:scale-105 active:scale-95 shadow-xl shadow-yellow-500/40 flex items-center justify-center text-kakao-text transition-all duration-300 relative border-2 border-amber-300 cursor-pointer"
        aria-label="카카오톡 1:1 상담 바로가기"
        title="카카오톡 1:1 상담 (24H 실시간)"
      >
        {/* Subtle Luxury Pulsing Glow */}
        <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-kakao-text relative z-10" />
      </a>
    </div>
  );
};
