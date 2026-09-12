import React, { useState } from 'react';
import { COMPANY_INFO, FAQ_ITEMS } from '../data/tourData';
import { Phone, Mail, MapPin, MessageCircle, ChevronDown, ChevronUp, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800/80">
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <div className="text-center mb-10">
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-1">
            FAQ & NOTICE
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            자주 묻는 질문 (FAQ)
          </h3>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-slate-900/90 border border-slate-800 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 text-left flex items-center justify-between text-slate-200 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                <span className="font-bold text-sm flex items-center gap-2">
                  <span className="text-emerald-400 font-black">Q.</span>
                  {item.q}
                </span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                )}
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 pt-1 text-slate-400 text-xs leading-relaxed border-t border-slate-800/60">
                  <span className="text-amber-400 font-bold mr-1">A.</span>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/logo.png" alt="다낭 자유여행 & 골프투어 로고" className="w-10 h-10 object-contain drop-shadow" />
              <span className="font-black text-lg text-white">다낭 자유여행 & 골프투어</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md mb-4">
              다낭 현지 법인 기반의 프리미엄 골프투어 및 맞춤 자유여행 전문 기업입니다.
              중간 유통 마진 없는 현지 직통 부킹 시스템으로 최적의 견적과 안전한 VIP 단독 서비스를 약속드립니다.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>베트남 관광청 정식 인가 여행 라이선스 보유</span>
            </div>
          </div>

          {/* Col 2: Fast Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">고객센터 & 빠른상담</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>직통 문의: <a href={`tel:${COMPANY_INFO.vietnamContact}`} className="text-white font-bold hover:underline">{COMPANY_INFO.vietnamContact}</a></span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-yellow-400" />
                <span>카카오톡 채널: <a href={COMPANY_INFO.kakaoChannelUrl} target="_blank" rel="noopener noreferrer" className="text-yellow-400 font-bold hover:underline">상담 바로가기</a></span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>이메일: {COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Operating Hours */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">운영 안내</h4>
            <p className="text-slate-400 leading-relaxed mb-2">
              <strong>상담 시간:</strong><br />
              {COMPANY_INFO.workingHours}
            </p>
            <p className="text-slate-500 text-[11px] leading-relaxed">
              * 출발 고객님께는 입국 당일 전담 한국어 매니저가 배정되어 24시간 실시간 핫라인이 가동됩니다.
            </p>
          </div>
        </div>

        {/* Business License Details */}
        <div className="pt-8 border-t border-slate-900 text-[11px] text-slate-500 space-y-2 leading-relaxed">
          <p>
            법인명: {COMPANY_INFO.legalName} | 대표자: {COMPANY_INFO.representative} | 사업자등록번호: {COMPANY_INFO.bizNumber}
          </p>
          <p className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-slate-600 flex-shrink-0" />
            현지 본사 주소: {COMPANY_INFO.address}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 text-slate-600 text-[10px]">
            <p>© 2026 DanangPlay Tour & Travel Co., Ltd. All rights reserved.</p>
            <p className="mt-1 sm:mt-0 flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for Travelers in Danang
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
