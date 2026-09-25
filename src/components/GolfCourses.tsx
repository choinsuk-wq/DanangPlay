import React, { useState } from 'react';
import { GOLF_COURSES } from '../data/tourData';
import { GolfCourse } from '../types/tour';
import {
  Flag,
  Sparkles,
  ExternalLink,
  X,
  CalendarCheck,
  Check,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface GolfCoursesProps {
  onSelectGolfCourse: (courseName: string) => void;
}

// Prestigious highlight tags tailored for high-end golfers
const GOLF_GOLD_TAGS: Record<string, string[]> = {
  'brg-danang': ['한국 골퍼 선호 1위', '야간 라이트 완비', '36홀 매머드'],
  'montgomerie-links': ['한국 골퍼 선호 1위', '유러피언 클래식 링크스', '공항 20분'],
  'bana-hills': ['아시아 No.1 산악 코스', '전 홀 야간 라이트', '루크 도널드'],
  'hoiana-shores': ['세계 100대 코스', '오션뷰 링크스', 'RTJ Jr. 설계'],
  'vinpearl-nam-hoian': ['5성급 복합 리조트', '광활한 듄스 코스', '남중국해 인접'],
  'laguna-langco': ['닉 팔도 마스터피스', '아시안 투어 개최지', '반얀트리 연계'],
  'golden-sands': ['최신 럭셔리 링크스', '잭 니클라우스 디자인', '최장 7,445Y'],
};

export const GolfCourses: React.FC<GolfCoursesProps> = ({ onSelectGolfCourse }) => {
  const [detailCourse, setDetailCourse] = useState<GolfCourse | null>(null);

  const handleInquireFromModal = (courseName: string) => {
    setDetailCourse(null);
    onSelectGolfCourse(courseName);
  };

  return (
    <section id="golf" className="py-24 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900 text-gold-400 text-xs sm:text-sm font-bold mb-4 shadow-sm border border-gold-400/30">
            <Flag className="w-4 h-4 text-gold-400" />
            <span>DANANG PREMIER CHAMPIONSHIP CLUBS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight mb-4 font-sans">
            다낭 주요 명문 7대 골프장 컬렉션
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed">
            세계 100대 링크스 코스부터 나이트 라이트 라운딩, 잭 니클라우스와 닉 팔도 설계까지<br className="hidden sm:inline" />
            다낭 최고 등급의 7대 챔피언십 골프장 티타임을 <strong>100% 확정 보장</strong>합니다.
          </p>
        </div>

        {/* Golf Courses Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GOLF_COURSES.map((course, idx) => {
            const goldTags = GOLF_GOLD_TAGS[course.id] || ['명문 챔피언십 코스', '최상급 잔디'];
            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl overflow-hidden border-2 border-[#EBE7DF] hover:border-gold-400 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                {/* Course Image & Top Badges */}
                <div
                  className="relative h-60 overflow-hidden bg-forest-950 cursor-pointer"
                  onClick={() => setDetailCourse(course)}
                >
                  <img
                    src={course.imageUrl}
                    alt={course.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />

                  {/* Top Left: Number Badge & Primary Badge */}
                  <div className="absolute top-3.5 left-3.5 flex flex-wrap items-center gap-1.5 z-10">
                    <span className="w-7 h-7 rounded-full bg-forest-900/90 border border-gold-400/80 text-gold-300 text-xs font-black flex items-center justify-center shadow-md">
                      {idx + 1}
                    </span>
                    {course.badge && (
                      <div className="bg-gold-500 text-white text-xs font-black px-2.5 py-1 rounded-md shadow-md flex items-center gap-1 border border-gold-400">
                        <Sparkles className="w-3 h-3 text-white" />
                        {course.badge}
                      </div>
                    )}
                  </div>

                  {/* Top Right: Official Site External Link */}
                  <a
                    href={course.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-3.5 right-3.5 bg-white/95 hover:bg-white text-charcoal-900 text-xs font-bold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1 backdrop-blur-sm transition-all border border-slate-200 z-10"
                    title="골프장 공식 사이트 새창 열기"
                  >
                    <span>공식 사이트</span>
                    <ExternalLink className="w-3.5 h-3.5 text-forest-800" />
                  </a>

                  {/* Image Bottom Text */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs font-semibold text-gold-300 tracking-wider block mb-0.5">
                      {course.englishName}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight font-sans">
                      {course.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Specialized Gold Badges (as requested: [오션뷰 링크스] [야간 라이트 완비] [한국 골퍼 선호 1위]) */}
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {goldTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-gold-50 text-gold-700 border border-gold-300/80"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Summary */}
                    <p className="text-sm sm:text-[15px] text-charcoal-700 line-clamp-2 leading-relaxed mb-4">
                      {course.summary}
                    </p>

                    {/* Inclusions Chip: 명확한 포함 내역 칩 (그린피 + 전동카트 + 캐디피 포함) */}
                    <div className="p-3 rounded-xl bg-forest-50/80 border border-forest-200/80 mb-4 text-xs sm:text-[13px] font-bold text-forest-900 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-forest-800 flex-shrink-0" />
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-gold-700 font-black">부킹 포함:</span>
                        <span>그린피 18홀</span>
                        <span className="text-slate-300">•</span>
                        <span>전동카트 (1/2)</span>
                        <span className="text-slate-300">•</span>
                        <span>1인 1캐디 배정</span>
                      </div>
                    </div>

                    {/* Course Specs (15px font scale for 4060 readability) */}
                    <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-charcoal-700 bg-cream-100/70 p-3.5 rounded-xl border border-[#EBE7DF] mb-5">
                      <div>
                        <span className="text-charcoal-500 font-medium block text-[11px]">규모 / 파:</span>
                        <span className="font-extrabold text-charcoal-900">{course.holes}</span>
                      </div>
                      <div>
                        <span className="text-charcoal-500 font-medium block text-[11px]">거리/접근성:</span>
                        <span className="font-extrabold text-charcoal-900">{course.distanceFromAirport}</span>
                      </div>
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => onSelectGolfCourse(course.name)}
                      className="w-full min-h-[50px] rounded-xl bg-forest-900 hover:bg-forest-800 active:scale-98 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer border border-forest-700"
                    >
                      <CalendarCheck className="w-4 h-4 text-gold-400" />
                      <span>이 골프장으로 견적 문의하기</span>
                    </button>

                    <button
                      onClick={() => setDetailCourse(course)}
                      className="w-full py-2.5 rounded-xl bg-white hover:bg-cream-100 text-charcoal-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-1 border border-slate-200 transition-colors cursor-pointer"
                    >
                      <span>코스 상세 소개 및 시설 보기</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Course Detail Modal */}
      {detailCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-gold-400/40 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-72 bg-forest-950 overflow-hidden">
              <img
                src={detailCourse.imageUrl}
                alt={detailCourse.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-black/30" />

              <button
                onClick={() => setDetailCourse(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-semibold text-gold-300 block mb-1">
                  {detailCourse.englishName}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                  {detailCourse.name}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Inclusion Banner */}
              <div className="p-4 rounded-xl bg-forest-50 border border-forest-200 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-forest-800 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-forest-900">
                  <span className="font-extrabold text-gold-700 mr-2">[공식 부킹 혜택]</span>
                  그린피 18홀 + 2인 1카트 + 1인 1캐디가 모두 포함된 투명한 견적입니다.
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-cream-100/80 border border-[#EBE7DF] text-xs sm:text-sm">
                <div>
                  <span className="text-charcoal-500 block text-xs">코스 규모</span>
                  <span className="font-extrabold text-charcoal-900">{detailCourse.holes}</span>
                </div>
                <div>
                  <span className="text-charcoal-500 block text-xs">기준 타수</span>
                  <span className="font-extrabold text-charcoal-900">Par {detailCourse.par}</span>
                </div>
                <div>
                  <span className="text-charcoal-500 block text-xs">총 전장</span>
                  <span className="font-extrabold text-charcoal-900">{detailCourse.courseLength || '7,100+ Yds'}</span>
                </div>
                <div>
                  <span className="text-charcoal-500 block text-xs">코스 설계</span>
                  <span className="font-extrabold text-charcoal-900 truncate block">{detailCourse.designer}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-base font-bold text-charcoal-900 mb-2">코스 특징 & 가이드</h4>
                <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                  {detailCourse.description}
                </p>
              </div>

              {/* Features List */}
              <div>
                <h4 className="text-base font-bold text-charcoal-900 mb-2.5">주요 시설 & 장점</h4>
                <div className="space-y-2">
                  {detailCourse.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-800">
                      <Check className="w-4 h-4 text-forest-800 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Bottom CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleInquireFromModal(detailCourse.name)}
                  className="flex-1 min-h-[52px] rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-black text-base flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4 text-gold-400" />
                  <span>이 골프장으로 견적 신청하기</span>
                </button>
                <a
                  href={detailCourse.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:w-auto px-5 min-h-[52px] rounded-xl bg-cream-100 hover:bg-cream-200 border border-slate-300 text-charcoal-800 font-bold text-sm flex items-center justify-center gap-1.5"
                >
                  <span>공식 사이트 확인</span>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
