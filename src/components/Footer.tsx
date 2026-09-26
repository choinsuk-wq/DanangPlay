import React, { useState } from 'react';
import { COMPANY_INFO, FAQ_ITEMS } from '../data/tourData';
import { Phone, Mail, MessageCircle, ChevronDown, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <footer className="bg-forest-950 text-slate-300 text-xs sm:text-sm border-t-2 border-forest-900">
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:py-20 border-b border-forest-900">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-gold-400 font-extrabold text-xs uppercase tracking-widest block mb-2">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h3 className="text-2xl sm:text-4xl font-bold text-white font-sans break-keep">
            자주 묻는 질문 (FAQ)
          </h3>
          <p className="text-slate-400 text-sm mt-2 break-keep">
            고객님들이 가장 궁금해하시는 핵심 사항을 투명하게 안내해 드립니다.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-forest-900/60 border border-forest-800/80 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 text-white hover:text-gold-300 transition-colors cursor-pointer"
                >
                  <span className="font-extrabold text-sm sm:text-lg flex items-start gap-2.5 sm:gap-3 leading-snug break-keep">
                    <span className="text-gold-400 font-black flex-shrink-0 mt-0.5">Q.</span>
                    <span className="break-keep">{item.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 mt-0.5 ${
                      isOpen ? 'transform rotate-180 text-gold-400' : 'text-slate-400'
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2 text-slate-200 text-xs sm:text-base leading-relaxed border-t border-forest-800/60 break-keep">
                      <span className="text-gold-400 font-black mr-1.5 flex-shrink-0">A.</span>
                      <span className="break-keep">{item.a}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="다낭 자유여행 & 골프투어" className="w-12 h-12 object-contain drop-shadow" />
              <div>
                <span className="font-bold text-xl text-white font-sans tracking-tight">다낭 자유여행 & 골프투어</span>
                <span className="text-[11px] text-slate-400 block font-sans">DANANG PLAY • 프리미엄 프라이빗 컨시어지</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-5 break-keep">
              다낭 현지 법인 기반의 프리미엄 골프투어 및 단독 맞춤 여행 전문 에이전시입니다.
              중간 수수료 없는 현지 직통 부킹 시스템으로 최적의 골든 티타임과 안전한 VIP 의전 서비스를 약속드립니다.
            </p>
            <div className="flex items-center gap-2 text-gold-400 font-bold text-xs sm:text-sm">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>베트남 관광청 정식 인가 라이선스 (No. 0402198845)</span>
            </div>
          </div>

          {/* Col 2: Fast Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 font-sans">고객센터 & 빠른 상담</h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>직통 문의: <a href={`tel:${COMPANY_INFO.vietnamContact}`} className="text-white font-bold hover:underline">{COMPANY_INFO.vietnamContact}</a></span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span>카카오톡 채널: <a href={COMPANY_INFO.kakaoChannelUrl} target="_blank" rel="noopener noreferrer" className="text-yellow-400 font-bold hover:underline">상담 바로가기</a></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>이메일: {COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Operating Hours */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 font-sans">현지 운영 안내</h4>
            <p className="text-slate-300 leading-relaxed mb-3">
              <strong className="text-white">상담 시간:</strong><br />
              {COMPANY_INFO.workingHours}
            </p>
            <div className="p-3 rounded-xl bg-forest-900 border border-forest-800 text-xs text-gold-300 font-semibold">
              * 현지 24시간 긴급 한국어 핫라인 항시 가동
            </div>
          </div>
        </div>

        {/* Corporate Legal & Copyright */}
        <div className="pt-8 border-t border-forest-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>상호명: {COMPANY_INFO.legalName} | 대표자: {COMPANY_INFO.representative}</p>
            <p className="mt-1">사업자등록번호: {COMPANY_INFO.bizNumber} | 현지 주소: {COMPANY_INFO.address}</p>
          </div>
          <p>© {new Date().getFullYear()} DANANG PLAY TOUR & TRAVEL CO., LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
