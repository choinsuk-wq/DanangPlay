import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/tourData';

export const FloatingKakao: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col sm:flex-row items-end sm:items-center gap-2.5 group select-none">
      {/* Prestigious Speech Bubble: "카카오톡 1:1 상담 (24H 실시간)" */}
      {showTooltip && (
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white text-charcoal-900 shadow-2xl border-2 border-gold-400 text-xs sm:text-sm font-extrabold relative animate-pulse">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-forest-900 tracking-tight font-sans">
            카카오톡 1:1 상담 (24H 실시간)
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-charcoal-800 p-0.5 ml-1 transition-colors cursor-pointer"
            aria-label="말풍선 닫기"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Bubble Arrow */}
          <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-t-2 border-r-2 border-gold-400 transform rotate-45" />
        </div>
      )}

      {/* Main Large Floating Action Button with Enhanced Pulse Animation */}
      <a
        href={COMPANY_INFO.kakaoChannelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-kakao-bg hover:scale-105 active:scale-95 shadow-2xl shadow-yellow-500/50 flex items-center justify-center text-kakao-text transition-all duration-300 relative border-2 border-amber-300 cursor-pointer"
        aria-label="카카오톡 1:1 상담 바로가기"
        title="카카오톡 1:1 상담 (24H 실시간)"
      >
        {/* Subtle Luxury Pulsing Glow */}
        <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-40 animate-ping pointer-events-none" />

        <MessageCircle className="w-8 h-8 fill-kakao-text relative z-10" />
      </a>
    </div>
  );
};
