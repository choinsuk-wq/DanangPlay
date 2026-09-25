import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Shield, ChevronRight } from 'lucide-react';
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
    { name: '골프 부킹', href: '#golf' },
    { name: '다낭/호이안 투어', href: '#itinerary' },
    { name: '호텔 & 풀빌라', href: '#villas' },
    { name: '전용 차량', href: '#vehicles' },
    { name: '실시간 견적', href: '#booking' },
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
          ? 'bg-white/98 backdrop-blur-md border-b border-[#EBE7DF] shadow-[0_4px_24px_rgba(15,56,42,0.07)] py-3'
          : 'bg-gradient-to-b from-[#09231A]/95 via-[#0F382A]/70 to-transparent py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Classic Prestigious Emblem Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group select-none cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <div className="relative">
              <img
                src="/logo.png"
                alt="DANANG PLAY"
                className="w-11 h-11 sm:w-12 sm:h-12 object-contain drop-shadow-md group-hover:scale-105 transition-transform flex-shrink-0"
              />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-forest-900 border border-gold-400 rounded-full flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span
                  className={`font-bold text-lg sm:text-2xl tracking-wider transition-colors font-sans ${
                    isScrolled ? 'text-forest-900' : 'text-white'
                  }`}
                >
                  DANANG PLAY
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-gold-500/20 text-gold-600 font-extrabold tracking-tight border border-gold-400/40 hidden sm:inline-block">
                  CLUB
                </span>
              </div>
              <span
                className={`text-[11px] font-medium tracking-wide transition-colors ${
                  isScrolled ? 'text-charcoal-600' : 'text-slate-300'
                }`}
              >
                다낭 명문 골프 & 프라이빗 투어
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-[16px] font-bold tracking-tight transition-all relative py-1.5 group cursor-pointer ${
                  isScrolled
                    ? 'text-charcoal-800 hover:text-forest-800'
                    : 'text-white/95 hover:text-gold-300'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                    isScrolled ? 'bg-forest-800' : 'bg-gold-400'
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          {/* Right Action: Phone & Kakao 1:1 Consultation with Live Bubble */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.koreanContact}`}
              className={`flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-xl border transition-colors ${
                isScrolled
                  ? 'text-charcoal-700 bg-cream-100/80 border-[#E5E0D8] hover:bg-cream-200'
                  : 'text-white/90 bg-white/10 border-white/20 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{COMPANY_INFO.koreanContact}</span>
            </a>

            {/* Kakao 1:1 Quick Inquiry Button with 24H Notice Pill */}
            <div className="relative">
              <a
                href={COMPANY_INFO.kakaoChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-kakao-bg hover:brightness-95 active:scale-95 text-kakao-text font-black text-xs sm:text-sm shadow-md transition-all border border-amber-300/40"
              >
                <MessageCircle className="w-4 h-4 fill-kakao-text flex-shrink-0" />
                <span>카카오톡 1:1 상담</span>
              </a>
              {/* Prestigious mini tooltip label */}
              <div className="absolute -bottom-5 right-0 hidden xl:flex items-center gap-1 text-[10px] text-gold-600 font-bold whitespace-nowrap bg-gold-50/90 px-1.5 py-0.2 rounded border border-gold-200 shadow-xs pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>현지 24H 실시간 티타임 확인</span>
              </div>
            </div>
          </div>

          {/* Mobile Actions: Kakao Quick Icon & Hamburger */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href={COMPANY_INFO.kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-kakao-bg text-kakao-text font-black text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
              aria-label="카카오톡 상담"
            >
              <MessageCircle className="w-4 h-4 fill-kakao-text" />
              <span>상담</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isScrolled
                  ? 'text-charcoal-900 hover:bg-cream-100'
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
        <div className="lg:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-2xl border-b border-[#E5E0D8] shadow-2xl px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-3">
            <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-forest-900 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-gold-500" /> 베트남 관광청 정식 인가 에이전시
              </span>
              <span className="text-[11px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full font-bold border border-emerald-200">
                24시간 상시 접수
              </span>
            </div>

            {/* Menu Items with 4060 friendly 18px font size */}
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-3 text-[17px] font-bold text-charcoal-900 hover:text-forest-800 hover:pl-2 transition-all flex items-center justify-between border-b border-slate-50 cursor-pointer"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </button>
            ))}

            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={COMPANY_INFO.kakaoChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[52px] rounded-xl bg-kakao-bg text-kakao-text font-black text-[15px] flex items-center justify-center gap-2 shadow-md active:scale-98 transition-transform"
              >
                <MessageCircle className="w-5 h-5 fill-kakao-text" />
                <span>카카오톡 실시간 티타임 / 견적 문의</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.koreanContact}`}
                className="w-full min-h-[48px] rounded-xl bg-cream-100 border border-[#E0DCCE] text-charcoal-800 font-bold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-forest-800" />
                <span>현지 직통 전화: {COMPANY_INFO.koreanContact}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
