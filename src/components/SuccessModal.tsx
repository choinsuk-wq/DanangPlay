import React, { useState } from 'react';
import {
  CheckCircle2,
  MessageCircle,
  X,
  Calendar,
  Users,
  Flag,
  Copy,
  Check,
  AlertCircle,
  Clock,
  ChevronDown
} from 'lucide-react';
import { BookingFormValues } from '../types/tour';
import { COMPANY_INFO } from '../data/tourData';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: BookingFormValues | null;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  bookingData,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [showCopyBanner, setShowCopyBanner] = useState(false);
  const [showTextPreview, setShowTextPreview] = useState(false);

  if (!isOpen || !bookingData) return null;

  // Format comprehensive booking application text
  const formattedText = [
    `[다낭플레이 골프 & 자유여행 예약 견적 신청서]`,
    `========================================`,
    `• 신청자명: ${bookingData.customerName} 님`,
    `• 연락처: ${bookingData.phone}`,
    bookingData.kakaoId ? `• 카카오톡 ID: ${bookingData.kakaoId}` : null,
    `• 여행 일정: ${bookingData.startDate} ~ ${bookingData.endDate}`,
    `• 예약 인원: 성인 ${bookingData.adultCount}명${bookingData.childCount > 0 ? ` (아동 ${bookingData.childCount}명)` : ''}`,
    `• 투어 코스: ${bookingData.packageType}`,
    bookingData.golfCourses && bookingData.golfCourses.length > 0
      ? `• 선택 골프장: ${bookingData.golfCourses.join(', ')}`
      : null,
    bookingData.teeOffTime ? `• 희망 티오프: ${bookingData.teeOffTime}` : null,
    `• 숙소/풀빌라: ${bookingData.needPoolVilla ? '상담 희망' : '불필요 (직접 예약)'}`,
    `• 전용 차량: ${bookingData.needVehicle ? '전용 단독 차량 희망' : '불필요'}`,
    bookingData.message ? `• 추가 요청사항: ${bookingData.message}` : null,
    `========================================`,
    `위 내용으로 실시간 티타임 확인 및 맞춤 견적서 발송 부탁드립니다! 😊`
  ]
    .filter(Boolean)
    .join('\n');

  // Reliable cross-platform copy function
  const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (err) {
      console.warn('navigator.clipboard failed, fallback to execCommand:', err);
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

  // Click on "카카오톡으로 견적서 신청하기"
  const handleKakaoClick = async () => {
    await copyToClipboard(formattedText);
    setIsCopied(true);
    setShowCopyBanner(true);

    // Open KakaoTalk channel chat in a new tab
    window.open(COMPANY_INFO.kakaoChannelUrl, '_blank', 'noopener,noreferrer');
  };

  // Manual copy button click
  const handleManualCopy = async () => {
    await copyToClipboard(formattedText);
    setIsCopied(true);
    setShowCopyBanner(true);
    setTimeout(() => setIsCopied(false), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-7 shadow-2xl border border-slate-100 relative transform animate-scale-up my-auto max-h-[92vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto pr-1">
          {/* Success Icon */}
          <div className="text-center mb-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-md shadow-emerald-500/10">
              <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2.2]" />
            </div>
            <span className="inline-block px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-1">
              접수 완료
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              예약 문의가 정상 접수되었습니다!
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              담당 매니저가 내용을 검토한 후 <strong>카카오톡</strong>으로 신속히 맞춤 견적서를 발송해 드립니다.
            </p>
          </div>

          {/* Summary Card */}
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 mb-4 text-xs sm:text-sm space-y-2.5">
            <div className="flex justify-between items-center text-slate-600">
              <span className="text-slate-400">신청자명</span>
              <span className="font-bold text-slate-900">{bookingData.customerName} 님</span>
            </div>
            {bookingData.kakaoId && (
              <div className="flex justify-between items-center text-slate-600">
                <span className="text-slate-400">카카오톡 ID</span>
                <span className="font-semibold text-emerald-700">{bookingData.kakaoId}</span>
              </div>
            )}
            <div className="flex justify-between items-center text-slate-600">
              <span className="text-slate-400">연락처</span>
              <span className="font-semibold text-slate-800">{bookingData.phone}</span>
            </div>
            <div className="flex justify-between items-center text-slate-600">
              <span className="text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> 여행 일정
              </span>
              <span className="font-semibold text-slate-800">
                {bookingData.startDate} ~ {bookingData.endDate}
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-600">
              <span className="text-slate-400 flex items-center gap-1">
                <Users className="w-3.5 h-3.5" /> 인원
              </span>
              <span className="font-semibold text-slate-800">
                성인 {bookingData.adultCount}명 {bookingData.childCount > 0 ? `(아동 ${bookingData.childCount}명)` : ''}
              </span>
            </div>

            {bookingData.teeOffTime && (
              <div className="flex justify-between items-center text-slate-600">
                <span className="text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 희망 티오프
                </span>
                <span className="font-semibold text-slate-800 text-[11px] sm:text-xs">
                  {bookingData.teeOffTime}
                </span>
              </div>
            )}

            {bookingData.golfCourses.length > 0 && (
              <div className="pt-2 border-t border-slate-200">
                <span className="text-slate-400 flex items-center gap-1 mb-1">
                  <Flag className="w-3.5 h-3.5" /> 선택 골프장 ({bookingData.golfCourses.length}곳)
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {bookingData.golfCourses.map((c, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-medium">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Copy Button Row */}
            <div className="pt-2.5 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                <MessageCircle className="w-3.5 h-3.5 text-amber-500" />
                카톡 전송용 신청서
              </span>
              <button
                type="button"
                onClick={handleManualCopy}
                className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm ${
                  isCopied
                    ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>복사 완료!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>신청 내용 복사</span>
                  </>
                )}
              </button>
            </div>

            {/* Toggle Full Text Preview */}
            <div className="pt-1 text-[11px]">
              <button
                type="button"
                onClick={() => setShowTextPreview(!showTextPreview)}
                className="text-slate-500 hover:text-emerald-700 font-semibold flex items-center gap-1 transition-colors"
              >
                <span>전송 문구 전문 보기</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showTextPreview ? 'rotate-180' : ''}`} />
              </button>
              {showTextPreview && (
                <div className="mt-2 p-3 bg-white rounded-xl border border-slate-200 text-slate-700 whitespace-pre-wrap font-mono text-[11px] leading-relaxed max-h-36 overflow-y-auto select-all shadow-inner">
                  {formattedText}
                </div>
              )}
            </div>
          </div>

          {/* Copy Success Banner */}
          {showCopyBanner && (
            <div className="bg-emerald-600 text-white rounded-2xl p-3 sm:p-3.5 mb-3.5 text-xs font-semibold shadow-md flex items-start gap-2.5 animate-fade-in">
              <Check className="w-4 h-4 text-emerald-200 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">신청서 내용이 복사되었습니다!</p>
                <p className="text-emerald-100 text-[11px] mt-0.5 leading-relaxed font-normal">
                  열린 카카오톡 대화창에서 <strong>[붙여넣기]</strong> 하시면 담당 매니저에게 즉시 전달됩니다.
                </p>
              </div>
            </div>
          )}

          {/* Kakao Policy Guide Notice */}
          <div className="bg-amber-50/90 border border-amber-200/80 rounded-2xl p-3 sm:p-3.5 mb-4 text-xs text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <span className="font-bold text-amber-950 block">카카오톡 전송 안내</span>
              <span className="text-amber-800 text-[11px] block mt-0.5">
                아래 <strong>카카오톡으로 견적서 신청하기</strong> 버튼을 누르시면 <strong>신청 내용이 자동 복사</strong>되어 카카오톡이 열리니, 대화창에 <strong>[붙여넣기]</strong> 해주세요!
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-3 border-t border-slate-100 mt-auto">
          <button
            type="button"
            onClick={handleKakaoClick}
            className="w-full py-3.5 rounded-xl bg-kakao-bg hover:brightness-95 active:scale-[0.99] text-kakao-text font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-kakao-text" />
            <span>카카오톡으로 견적서 신청하기</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-[0.99] text-slate-800 font-bold text-sm sm:text-base border border-slate-300/70 shadow-sm transition-all flex items-center justify-center"
          >
            확인 및 창 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
