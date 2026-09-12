import React, { useState } from 'react';
import { GOLF_COURSES } from '../data/tourData';
import { GolfCourse } from '../types/tour';
import {
  Flag,
  Compass,
  Clock,
  CheckCircle,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  X,
  MapPin,
  CalendarCheck,
  Building,
  Ruler
} from 'lucide-react';

interface GolfCoursesProps {
  onSelectGolfCourse: (courseName: string) => void;
}

export const GolfCourses: React.FC<GolfCoursesProps> = ({ onSelectGolfCourse }) => {
  const [detailCourse, setDetailCourse] = useState<GolfCourse | null>(null);

  const handleInquireFromModal = (courseName: string) => {
    setDetailCourse(null);
    onSelectGolfCourse(courseName);
  };

  return (
    <section id="golf" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
            <Flag className="w-3.5 h-3.5" />
            <span>PREMIUM GOLF CLUBS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            다낭 주요 명문 7대 골프장 안내
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            세계 100대 코스부터 환상적인 나이트 라운딩, 잭 니클라우스와 닉 팔도 설계 코스까지 다낭 최고 등급의 7대 챔피언십 골프장을 소개합니다.<br className="hidden sm:inline" />
            각 골프장 카드의 <strong>[상세 메인 안내]</strong> 또는 <strong>[공식 사이트 ↗]</strong>를 통해 골프장 공식 정보를 직접 확인하실 수 있습니다.
          </p>
        </div>

        {/* Golf Courses Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GOLF_COURSES.map((course, idx) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Course Image & Badge */}
              <div
                className="relative h-52 sm:h-56 overflow-hidden bg-slate-900 cursor-pointer"
                onClick={() => setDetailCourse(course)}
              >
                <img
                  src={course.imageUrl}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/30" />

                {/* Index badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="w-6 h-6 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-black flex items-center justify-center">
                    {idx + 1}
                  </span>
                  {course.badge && (
                    <div className="bg-amber-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {course.badge}
                    </div>
                  )}
                </div>

                {/* Direct link badge */}
                <a
                  href={course.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-md shadow flex items-center gap-1 backdrop-blur-sm transition-colors"
                  title="골프장 공식 메인페이지 새창 열기"
                >
                  <span>공식 사이트</span>
                  <ExternalLink className="w-3 h-3 text-emerald-600" />
                </a>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-medium text-emerald-300 block">
                    {course.englishName}
                  </span>
                  <h3 className="text-lg font-bold leading-snug">
                    {course.name}
                  </h3>
                </div>
              </div>

              {/* Course Info Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 font-medium line-clamp-2 mb-4 leading-relaxed">
                    {course.summary}
                  </p>

                  {/* Specs & Distance */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4 text-xs">
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">코스 규모</span>
                      <span className="font-bold text-slate-800">{course.holes}</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">코스 설계자</span>
                      <span className="font-bold text-slate-800 truncate block" title={course.designer}>
                        {course.designer.split('(')[0]}
                      </span>
                    </div>
                    <div className="col-span-2 pt-2 border-t border-slate-200/60 flex items-center justify-between text-slate-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-[11px]">{course.distanceFromAirport}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-[11px]">{course.distanceFromCity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-1.5 mb-5">
                    {course.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2 Action Buttons: Detail Main View & Book */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => setDetailCourse(course)}
                    className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>골프장 상세 메인 안내 보기</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </button>

                  <button
                    onClick={() => onSelectGolfCourse(course.name)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer group/btn"
                  >
                    <span>이 골프장으로 문의하기</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Golf Course Detail Main Modal */}
      {detailCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 relative my-8 transform animate-scale-up">
            {/* Close Button */}
            <button
              onClick={() => setDetailCourse(null)}
              className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Hero Banner */}
            <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950">
              <img
                src={detailCourse.imageUrl}
                alt={detailCourse.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute top-4 left-4 flex items-center gap-2">
                {detailCourse.badge && (
                  <span className="px-3 py-1 rounded-md bg-amber-500 text-white text-xs font-bold shadow flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {detailCourse.badge}
                  </span>
                )}
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs font-semibold text-emerald-400 block mb-1">
                  {detailCourse.englishName}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mb-1">
                  {detailCourse.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                  {detailCourse.summary}
                </p>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
                  <span className="text-[11px] text-emerald-800 font-bold block mb-0.5">코스 규모</span>
                  <span className="font-extrabold text-slate-900 text-sm">{detailCourse.holes}</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
                  <span className="text-[11px] text-emerald-800 font-bold block mb-0.5">기준 타수</span>
                  <span className="font-extrabold text-slate-900 text-sm">Par {detailCourse.par}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-[11px] text-slate-500 font-bold block mb-0.5">설계자</span>
                  <span className="font-extrabold text-slate-900 text-xs truncate block" title={detailCourse.designer}>
                    {detailCourse.designer.split('(')[0]}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-[11px] text-slate-500 font-bold block mb-0.5">코스 전장</span>
                  <span className="font-extrabold text-slate-900 text-xs">
                    {detailCourse.courseLength || '챔피언십 전장'}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-emerald-600" /> 골프장 상세 소개
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
                  {detailCourse.description}
                </p>
              </div>

              {/* Facilities & Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> 코스 주요 특징
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {detailCourse.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-emerald-600" /> 부대시설 안내
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {(detailCourse.facilities || [
                      '클럽하우스 레스토랑 & 프로샵',
                      '천연잔디 드라이빙 레인지',
                      '락커룸 및 스파 사우나',
                      '전동카트 및 전문 캐디'
                    ]).map((fac, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                        <span>{fac}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Distances */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-emerald-950">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>공항 이동:</strong> {detailCourse.distanceFromAirport}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>시내 이동:</strong> {detailCourse.distanceFromCity}</span>
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={detailCourse.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3.5 px-4 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>골프장 공식 사이트 방문</span>
                <ExternalLink className="w-4 h-4 text-emerald-600" />
              </a>

              <button
                onClick={() => handleInquireFromModal(detailCourse.name)}
                className="w-full sm:w-1/2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>이 골프장으로 견적 문의</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
