import React, { useState, useRef, useEffect } from 'react';
import {
  Calendar,
  Users,
  Flag,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  ChevronDown,
  Check,
  X,
  Copy
} from 'lucide-react';
import { GOLF_COURSES, COMPANY_INFO } from '../data/tourData';

interface HeroProps {
  onBookClick: () => void;
  onQuickSearch?: (courses: string | string[], date: string, guestCount: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onQuickSearch }) => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>(['BRG 다낭 골프 리조트']);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [travelDate, setTravelDate] = useState('');
  const [guestCount, setGuestCount] = useState(4);
  const [showQuickModal, setShowQuickModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [quickInquiryData, setQuickInquiryData] = useState<{
    courses: string;
    date: string;
    guests: string;
    formattedText: string;
  } | null>(null);

  const courseDropdownRef = useRef<HTMLDivElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);

  // Close course dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (courseDropdownRef.current && !courseDropdownRef.current.contains(e.target as Node)) {
        setIsCourseDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Multi-selection handlers
  const toggleCourse = (courseName: string) => {
    setSelectedCourses((prev) =>
      prev.includes(courseName) ? prev.filter((c) => c !== courseName) : [...prev, courseName]
    );
  };

  const selectAllCourses = () => {
    setSelectedCourses(GOLF_COURSES.map((c) => c.name));
  };

  const clearCourses = () => {
    setSelectedCourses([]);
  };

  const getCourseDisplayLabel = () => {
    if (selectedCourses.length === 0) {
      return '전체 명문 코스 (전문가 추천)';
    }
    if (selectedCourses.length === GOLF_COURSES.length) {
      return '전체 7대 코스 선택됨';
    }
    if (selectedCourses.length === 1) {
      return selectedCourses[0];
    }
    return `${selectedCourses[0]} 외 ${selectedCourses.length - 1}곳 (총 ${selectedCourses.length}곳)`;
  };

  // Open date picker when clicking anywhere inside the date box
  const handleOpenDatePicker = (e?: React.MouseEvent) => {
    if (!e || e.target !== dateInputRef.current) {
      try {
        dateInputRef.current?.showPicker();
      } catch {
        dateInputRef.current?.focus();
      }
    }
  };

  // Cross-browser clipboard copy
  const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (err) {
      console.warn('navigator.clipboard failed:', err);
    }
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      textArea.remove();
      return successful;
    } catch (err) {
      console.error('Fallback copy failed:', err);
      return false;
    }
  };

  // One-click inquiry direct to KakaoTalk channel
  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const courseText =
      selectedCourses.length > 0 ? selectedCourses.join(', ') : '전체 명문 코스 (전문가 추천)';

    const dateText = travelDate ? travelDate : '미정 (상담 시 일정 조율)';

    const guestText =
      guestCount >= 20
        ? '20인 이상 (대형 단체)'
        : guestCount === 4
        ? '4인 (정규 1팀 추천)'
        : guestCount === 8
        ? '8인 (정규 2팀 단체)'
        : `${guestCount}인`;

    const formattedMessage = [
      `[다낭플레이 골프 빠른 원클릭 견적 문의]`,
      `========================================`,
      `• 희망 골프장: ${courseText}`,
      `• 출발/희망일: ${dateText}`,
      `• 플레이 인원: ${guestText}`,
      `========================================`,
      `위 조건으로 실시간 골든 티타임 확인 및 맞춤 견적 부탁드립니다! 😊`
    ].join('\n');

    // 1. Copy to clipboard
    await copyToClipboard(formattedMessage);
    setIsCopied(true);

    // 2. Open KakaoTalk channel chat immediately
    window.open(COMPANY_INFO.kakaoChannelUrl, '_blank', 'noopener,noreferrer');

    // 3. Save backup in localStorage
    try {
      const saved = JSON.parse(localStorage.getItem('danangplay_quick_inquiries') || '[]');
      saved.unshift({
        courses: courseText,
        date: dateText,
        guests: guestText,
        message: formattedMessage,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('danangplay_quick_inquiries', JSON.stringify(saved.slice(0, 30)));
    } catch (err) {
      console.warn('LocalStorage quick inquiry save error:', err);
    }

    // 4. Update background state in App if onQuickSearch provided
    if (onQuickSearch) {
      onQuickSearch(selectedCourses, travelDate, guestCount);
    }

    // 5. Open feedback modal
    setQuickInquiryData({
      courses: courseText,
      date: dateText,
      guests: guestText,
      formattedText: formattedMessage
    });
    setShowQuickModal(true);
  };

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-forest-950">
      {/* High-Resolution Wide Panoramic Background with Luxury Contrast Vignette */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=2400&q=88"
          alt="다낭 챔피언십 명문 골프 코스 전경"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform animate-fade-in"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=2000&q=80';
          }}
        />
        {/* Layered deep forest green gradient overlays for timeless prestige */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-transparent to-forest-950/85" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Tag: Luxury Crest / Official Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-forest-900/80 border border-gold-400/50 text-gold-300 text-[11px] sm:text-xs font-bold mb-6 backdrop-blur-md shadow-lg max-w-full break-keep text-center">
          <Sparkles className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
          <span className="tracking-wide">DANANG PREMIER GOLF & PRIVATE TRAVEL CONCIERGE</span>
        </div>

        {/* Main Headline (Clean, modern Pretendard font) */}
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.3] sm:leading-[1.22] mb-6 font-sans break-keep">
          다낭 골프의 <span className="text-gold-400 underline decoration-gold-500/40 underline-offset-8">격(格)</span>을 높이다.
          <br />
          <span className="text-lg sm:text-3xl lg:text-4xl font-normal text-slate-100 block mt-3.5 tracking-normal break-keep">
            현지 상주 전문가가 완성하는 프리미엄 부킹 & 투어
          </span>
        </h1>

        {/* Subtitle with High Readability (3 distinct clean lines) */}
        <div className="max-w-4xl mx-auto text-base sm:text-lg lg:text-xl text-slate-200/90 font-normal leading-relaxed mb-10 space-y-1.5 sm:space-y-1 text-center break-keep">
          <p className="text-gold-300 font-bold text-lg sm:text-xl break-keep">
            항공권만 챙겨오십시오.
          </p>
          <p className="break-keep">
            <strong className="text-gold-300 font-bold">세계 100대 명문 골든 티오프 100% 확정</strong>,{' '}
            <strong className="text-white font-bold">단독 의전 차량</strong>, 그리고{' '}
            <strong className="text-white font-bold">최고급 독채 풀빌라</strong>까지
          </p>
          <p className="text-slate-300 break-keep">
            10년 이상 다낭에 상주한 전담 한국인 총괄 매니저가 처음부터 끝까지 품격 있게 풀케어합니다.
          </p>
        </div>

        {/* 2. Quick Consultation Bar [골프장 선택] [희망 일정] [인원수] [원클릭 견적 문의] */}
        <div className="w-full max-w-4xl bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border-2 border-gold-400/40 mb-12 text-left">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <span className="text-xs sm:text-sm font-black text-forest-900 flex items-center gap-1.5 break-keep">
              <span className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0"></span>
              빠른 실시간 예약 & 견적 상담 바 (Quick Concierge)
            </span>
            <span className="text-[11px] sm:text-xs text-charcoal-600 font-medium hidden sm:inline break-keep">
              * 원하시는 조건을 입력하시면 담당 매니저가 티타임을 바로 조회합니다.
            </span>
          </div>

          <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
            {/* 1. Multi-Select Course Selection */}
            <div ref={courseDropdownRef} className="relative">
              <label className="block text-xs font-extrabold text-charcoal-800 mb-1.5 flex items-center justify-between break-keep">
                <span className="flex items-center gap-1">
                  <Flag className="w-3.5 h-3.5 text-forest-800 flex-shrink-0" />
                  <span>희망 골프장 선택 (복수 가능)</span>
                </span>
                {selectedCourses.length > 0 && (
                  <span className="text-[11px] text-forest-900 font-black bg-gold-100/90 px-1.5 py-0.5 rounded border border-gold-300">
                    {selectedCourses.length}곳 선택
                  </span>
                )}
              </label>

              {/* Dropdown Toggle Button */}
              <button
                type="button"
                onClick={() => setIsCourseDropdownOpen(!isCourseDropdownOpen)}
                className="w-full h-[52px] px-3.5 rounded-xl border border-slate-300 bg-cream-50 text-charcoal-900 font-semibold text-sm focus:outline-none focus:border-forest-800 focus:ring-2 focus:ring-forest-800/10 cursor-pointer flex items-center justify-between text-left transition-colors hover:border-slate-400"
              >
                <span className="truncate pr-2">{getCourseDisplayLabel()}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                    isCourseDropdownOpen ? 'rotate-180 text-forest-800' : ''
                  }`}
                />
              </button>

              {/* Multi-Select Dropdown Menu */}
              {isCourseDropdownOpen && (
                <div className="absolute top-full mt-2 left-0 w-full sm:w-[320px] max-w-[92vw] bg-white rounded-2xl shadow-2xl border-2 border-gold-400/60 p-3 z-50 animate-fade-in">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-xs">
                    <span className="font-extrabold text-forest-900">다낭 7대 명문 코스</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={selectAllCourses}
                        className="text-[11px] font-bold text-forest-800 hover:bg-forest-50 px-2 py-0.5 rounded border border-forest-200 transition-colors"
                      >
                        전체 선택
                      </button>
                      <button
                        type="button"
                        onClick={clearCourses}
                        className="text-[11px] font-bold text-slate-500 hover:bg-slate-100 px-2 py-0.5 rounded border border-slate-200 transition-colors"
                      >
                        초기화
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                    {GOLF_COURSES.map((course) => {
                      const isChecked = selectedCourses.includes(course.name);
                      return (
                        <div
                          key={course.id}
                          onClick={() => toggleCourse(course.name)}
                          className={`flex items-center justify-between p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                            isChecked
                              ? 'bg-forest-50 border-forest-800 text-forest-950 font-bold shadow-xs'
                              : 'bg-white border-slate-200 hover:bg-cream-50 text-charcoal-800 font-medium'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                                isChecked
                                  ? 'bg-forest-800 border-forest-800 text-white'
                                  : 'border-slate-300 bg-white'
                              }`}
                            >
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <span className="truncate">{course.name}</span>
                          </div>
                          {course.badge && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-gold-50 text-gold-700 font-extrabold flex-shrink-0 ml-1 border border-gold-200">
                              {course.badge}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-2.5 mt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setIsCourseDropdownOpen(false)}
                      className="w-full py-2.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-white text-xs font-black shadow-md cursor-pointer transition-colors"
                    >
                      선택 완료 ({selectedCourses.length > 0 ? `${selectedCourses.length}곳 선택됨` : '추천 코스로 진행'})
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Travel Date (Click anywhere in box to open calendar) */}
            <div>
              <label className="block text-xs font-extrabold text-charcoal-800 mb-1.5 flex items-center gap-1 break-keep">
                <Calendar className="w-3.5 h-3.5 text-forest-800 flex-shrink-0" />
                <span>출발 / 희망 일정</span>
              </label>
              <div
                onClick={handleOpenDatePicker}
                className="relative cursor-pointer group"
                title="클릭하여 달력 열기"
              >
                <input
                  ref={dateInputRef}
                  type="date"
                  value={travelDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setTravelDate(e.target.value)}
                  onClick={(e) => {
                    try {
                      (e.currentTarget as HTMLInputElement).showPicker?.();
                    } catch {}
                  }}
                  onFocus={(e) => {
                    try {
                      (e.currentTarget as HTMLInputElement).showPicker?.();
                    } catch {}
                  }}
                  className="w-full h-[52px] px-3.5 rounded-xl border border-slate-300 bg-cream-50 text-charcoal-900 font-semibold text-sm focus:outline-none focus:border-forest-800 focus:ring-2 focus:ring-forest-800/10 cursor-pointer"
                />
              </div>
            </div>

            {/* 3. Guest Count (Rich options from 1 to 20+ persons) */}
            <div>
              <label className="block text-xs font-extrabold text-charcoal-800 mb-1.5 flex items-center gap-1 break-keep">
                <Users className="w-3.5 h-3.5 text-forest-800 flex-shrink-0" />
                <span>플레이 인원</span>
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-[52px] px-3.5 rounded-xl border border-slate-300 bg-cream-50 text-charcoal-900 font-semibold text-sm focus:outline-none focus:border-forest-800 focus:ring-2 focus:ring-forest-800/10 cursor-pointer"
              >
                <optgroup label="⭐ 골프 정규 팀 추천">
                  <option value={4}>4인 (정규 1팀 추천 - 최적)</option>
                  <option value={8}>8인 (정규 2팀 단체 추천)</option>
                  <option value={12}>12인 (정규 3팀 단체)</option>
                  <option value={16}>16인 (정규 4팀 단체)</option>
                </optgroup>
                <optgroup label="🏌️ 소규모 라운딩 (1~3인)">
                  <option value={1}>1인 (싱글 / 조인 희망)</option>
                  <option value={2}>2인 (2인 프라이빗 라운딩)</option>
                  <option value={3}>3인 (3인 1팀 라운딩)</option>
                </optgroup>
                <optgroup label="👥 중규모 팀 (5~11인)">
                  <option value={5}>5인 (2팀 분할 플레이)</option>
                  <option value={6}>6인 (2팀 분할 플레이)</option>
                  <option value={7}>7인 (2팀 분할 플레이)</option>
                  <option value={9}>9인 (3팀 분할 플레이)</option>
                  <option value={10}>10인 (3팀 분할 플레이)</option>
                  <option value={11}>11인 (3팀 분할 플레이)</option>
                </optgroup>
                <optgroup label="🏢 대형 단체 (14인~20인+)">
                  <option value={14}>14인 (대형 모임)</option>
                  <option value={20}>20인 이상 (VIP 기업/동호회 단체)</option>
                </optgroup>
              </select>
            </div>

            {/* 4. Submit CTA Button (Direct to KakaoTalk channel with pre-copied data) */}
            <div>
              <button
                type="submit"
                className="w-full min-h-[52px] px-4 rounded-xl bg-forest-900 hover:bg-forest-800 active:scale-98 text-white font-black text-sm sm:text-base shadow-lg shadow-forest-900/30 flex items-center justify-center gap-2 transition-all cursor-pointer border border-forest-700 break-keep group"
              >
                <MessageCircle className="w-4 h-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                <span>원클릭 견적 문의</span>
                <ArrowRight className="w-4 h-4 text-gold-400 stroke-[2.5] flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </form>
        </div>

        {/* Trust Badges / 4 Key Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto w-full text-left">
          <div className="bg-forest-900/60 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 sm:p-4 text-white hover:bg-forest-900/80 transition-colors shadow-md">
            <div className="w-9 h-9 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-2.5 border border-gold-400/30 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-xs sm:text-base font-bold text-white break-keep">100% 프라이빗 단독</h4>
            <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-snug break-keep">모르는 타인 조인 일체 없음! 우리 일행만의 전용 의전</p>
          </div>

          <div className="bg-forest-900/60 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 sm:p-4 text-white hover:bg-forest-900/80 transition-colors shadow-md">
            <div className="w-9 h-9 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-2.5 border border-gold-400/30 flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-xs sm:text-base font-bold text-white break-keep">골든 티오프 100% 확정</h4>
            <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-snug break-keep">호이아나·바나힐·BRG 직통 라인 프라임 타임 배정</p>
          </div>

          <div className="bg-forest-900/60 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 sm:p-4 text-white hover:bg-forest-900/80 transition-colors shadow-md">
            <div className="w-9 h-9 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-2.5 border border-gold-400/30 flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="text-xs sm:text-base font-bold text-white break-keep">현지 10년 직영 케어</h4>
            <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-snug break-keep">중간 수수료 거품 없는 합리적 정찰 견적 및 실시간 케어</p>
          </div>

          <div className="bg-forest-900/60 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 sm:p-4 text-white hover:bg-forest-900/80 transition-colors shadow-md">
            <div className="w-9 h-9 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-2.5 border border-gold-400/30 flex-shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h4 className="text-xs sm:text-base font-bold text-white break-keep">NO 쇼핑 · NO 옵션강요</h4>
            <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-snug break-keep">의무 쇼핑센터 방문 0건 원칙, 100% 순수 여행 보장</p>
          </div>
        </div>
      </div>

      {/* Quick Inquiry Kakao Transfer Feedback Modal */}
      {showQuickModal && quickInquiryData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gold-400/40 p-6 sm:p-8 text-charcoal-900 overflow-hidden">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowQuickModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-charcoal-800 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header with Kakao / Gold accent */}
            <div className="text-center mb-6">
              <div className="w-14 h-14 mx-auto mb-3.5 rounded-2xl bg-[#FEE500] flex items-center justify-center shadow-lg shadow-yellow-400/30">
                <MessageCircle className="w-8 h-8 text-charcoal-900 fill-charcoal-900" />
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-forest-900/10 text-forest-900 text-xs font-bold mb-2">
                카카오톡 1:1 상담 연결
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-forest-950 break-keep">
                카카오톡 상담창으로 이동 중입니다!
              </h3>
              <p className="text-sm text-charcoal-600 mt-1.5 break-keep">
                아래 견적 문의 내용이 <strong className="text-forest-900 font-bold">클립보드에 자동 복사</strong>되었습니다.<br />
                새 창으로 열린 채팅창에 <span className="bg-yellow-100 text-yellow-900 font-bold px-1.5 py-0.5 rounded border border-yellow-300">[붙여넣기(Ctrl+V)]</span> 하시면 전담 매니저가 즉시 확인합니다.
              </p>
            </div>

            {/* Inquiry Content Box */}
            <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-slate-200 text-left mb-6 text-xs sm:text-sm">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                <span className="font-extrabold text-charcoal-800">복사된 원클릭 견적 내용</span>
                <button
                  type="button"
                  onClick={async () => {
                    await copyToClipboard(quickInquiryData.formattedText);
                    setIsCopied(true);
                    setTimeout(() => setIsCopied(false), 2000);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-forest-900 hover:text-forest-700 bg-white px-2.5 py-1 rounded-lg border border-slate-300 shadow-sm cursor-pointer"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">복사 완료!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>다시 복사하기</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="whitespace-pre-wrap font-sans text-charcoal-700 leading-relaxed text-xs select-all">
                {quickInquiryData.formattedText}
              </pre>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              <a
                href={COMPANY_INFO.kakaoChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#FEE500] hover:bg-[#edd500] active:scale-98 text-charcoal-900 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all text-center"
              >
                <MessageCircle className="w-5 h-5 fill-charcoal-900" />
                <span>카카오톡 채팅창 바로 열기</span>
              </a>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowQuickModal(false);
                    onBookClick();
                  }}
                  className="flex-1 py-3 px-3 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs sm:text-sm transition-colors text-center cursor-pointer"
                >
                  상세 견적서 작성 (풀빌라/의전차량)
                </button>
                <button
                  type="button"
                  onClick={() => setShowQuickModal(false)}
                  className="py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-100 text-charcoal-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
