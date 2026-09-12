import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/tourData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '홈', href: '#home' },
    { name: '투어 일정', href: '#itinerary' },
    { name: '골프장 안내', href: '#golf' },
    { name: '차량 & 풀빌라', href: '#services' },
    { name: '예약 문의', href: '#booking' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <img
              src="/logo.png"
              alt="다낭 자유여행 & 골프투어 로고"
              className="w-11 h-11 sm:w-12 sm:h-12 object-contain drop-shadow-md group-hover:scale-105 transition-transform flex-shrink-0"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className={`font-black text-base sm:text-xl tracking-tight transition-colors ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  다낭 자유여행 & 골프투어
                </span>
              </div>
              <p className={`text-[10px] tracking-wider transition-colors hidden sm:block ${
                isScrolled ? 'text-slate-500' : 'text-slate-300'
              }`}>
                DANANG TOUR & GOLF OFFICIAL
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 relative py-1 group ${
                  isScrolled ? 'text-slate-700' : 'text-slate-100'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Action Button & Kakao CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.koreanContact}`}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-slate-600 bg-slate-100 hover:bg-slate-200'
                  : 'text-white/90 bg-white/10 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.koreanContact}</span>
            </a>
            <a
              href={COMPANY_INFO.kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-kakao-bg text-kakao-text font-bold text-xs shadow-sm hover:brightness-95 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-kakao-text" />
              <span>카카오톡 빠른상담</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={COMPANY_INFO.kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-kakao-bg text-kakao-text font-bold text-xs flex items-center gap-1 shadow-sm"
              aria-label="카카오톡 상담"
            >
              <MessageCircle className="w-4 h-4 fill-kakao-text" />
              <span className="text-[11px]">카톡</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-slate-800 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" /> 다낭플레이 바로가기
              </span>
              <span className="text-[11px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                24시간 예약 접수중
              </span>
            </div>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2.5 text-base font-semibold text-slate-800 hover:text-emerald-600 hover:pl-2 transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-slate-300 text-sm">→</span>
              </button>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={COMPANY_INFO.kakaoChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-kakao-bg text-kakao-text font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-98 transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-kakao-text" />
                <span>카카오톡 1:1 빠른 견적 상담</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.koreanContact}`}
                className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-700 font-medium text-xs flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>직통 전화 문의: {COMPANY_INFO.koreanContact}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
