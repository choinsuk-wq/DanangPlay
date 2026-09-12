import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/tourData';

export const FloatingKakao: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-2 group select-none">
      {/* Animated Speech Bubble Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white text-slate-900 shadow-xl border border-slate-200 text-xs font-bold animate-bounce mb-1 relative">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>빠른 견적 & 카톡 상담</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-700 p-0.5"
            aria-label="닫기"
          >
            <X className="w-3 h-3" />
          </button>
          {/* Arrow */}
          <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-slate-200 transform rotate-45" />
        </div>
      )}

      {/* Main Kakao Floating Action Button */}
      <a
        href={COMPANY_INFO.kakaoChannelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-kakao-bg hover:scale-110 active:scale-95 shadow-2xl shadow-yellow-500/30 flex items-center justify-center text-kakao-text transition-all duration-300 relative"
        aria-label="카카오톡 빠른상담"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-40 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-kakao-text relative z-10" />

        {/* Small live notification badge */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white rounded-full text-[9px] font-black flex items-center justify-center border-2 border-white">
          1
        </span>
      </a>
    </div>
  );
};
