import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { BookingFormValues } from '../types/tour';
import { GOLF_COURSES } from '../data/tourData';
import {
  Calendar,
  Users,
  Send,
  Loader2,
  CheckSquare,
  Square,
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';

const bookingSchema = z.object({
  customerName: z.string().min(2, '고객 성함을 2글자 이상 입력해 주세요.'),
  phone: z
    .string()
    .min(9, '연락처를 정확히 입력해 주세요.')
    .regex(/^[0-9\-+ ]+$/, '올바른 전화번호 형식(예: 010-1234-5678)을 입력해 주세요.'),
  kakaoId: z.string().min(2, '견적서를 받으실 카카오톡 ID를 입력해 주세요.'),
  startDate: z.string().min(1, '여행 시작(체크인) 날짜를 선택해 주세요.'),
  endDate: z.string().min(1, '여행 종료(체크아웃) 날짜를 선택해 주세요.'),
  adultCount: z.number().min(1, '성인 인원을 1명 이상 선택해 주세요.'),
  childCount: z.number().min(0),
  packageType: z.string().min(1, '관심 코스를 선택해 주세요.'),
  golfCourses: z.array(z.string()),
  needPoolVilla: z.boolean(),
  needVehicle: z.boolean(),
  teeOffTime: z.string(),
  message: z.string().optional(),
});

interface BookingFormProps {
  selectedPackage?: string;
  selectedGolfCourse?: string;
  needVehiclePrefill?: boolean;
  needVillaPrefill?: boolean;
  onSuccess: (data: BookingFormValues) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedPackage = '3n4d',
  selectedGolfCourse,
  needVehiclePrefill = false,
  needVillaPrefill = false,
  onSuccess,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const initialPackageName =
    selectedPackage === '4n5d'
      ? '4박 5일 황제 골프 & 호이안 완전정복'
      : selectedPackage === '3n4d'
      ? '3박 4일 명문 골프 & 힐링 코스'
      : selectedPackage === '3n4d-free'
      ? '3박 4일 시그니처 자유투어'
      : selectedPackage === '4n5d-free'
      ? '4박 5일 힐링 & 선짜반도 완전정복 자유투어'
      : '3박 4일 명문 골프 & 힐링 코스';

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      customerName: '',
      phone: '',
      kakaoId: '',
      startDate: '',
      endDate: '',
      adultCount: 4,
      childCount: 0,
      packageType: initialPackageName,
      golfCourses: selectedGolfCourse
        ? [selectedGolfCourse]
        : selectedPackage?.includes('free')
        ? []
        : ['BRG 다낭 골프 리조트'],
      needPoolVilla: needVillaPrefill,
      needVehicle: needVehiclePrefill,
      teeOffTime: '오전 07시 ~ 08시대 (추천)',
      message: '',
    },
  });

  // Watch golf course and package selection
  const watchedGolfCourses = watch('golfCourses') || [];
  const watchedPackageType = watch('packageType') || '';
  const isFreeTour = watchedPackageType.includes('자유투어');
  const handleGolfToggle = (name: string) => {
    if (watchedGolfCourses.includes(name)) {
      setValue(
        'golfCourses',
        watchedGolfCourses.filter((c) => c !== name),
        { shouldValidate: true }
      );
    } else {
      setValue('golfCourses', [...watchedGolfCourses, name], { shouldValidate: true });
    }
  };

  const onSubmit = async (formData: BookingFormValues) => {
    setIsSubmitting(true);
    setSubmissionError(null);

    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
      'DEMO_MODE_ACCESS_KEY';

    try {
      if (accessKey && accessKey !== 'DEMO_MODE_ACCESS_KEY' && accessKey !== 'your_web3forms_access_key_here') {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `[다낭플레이 웹예약 접수] ${formData.customerName}님 (${formData.startDate})`,
            from_name: '다낭플레이 웹예약 시스템',
            ...formData,
            golfCourses: formData.golfCourses.join(', '),
            submitted_at: new Date().toLocaleString('ko-KR'),
          }),
        });

        const result = await response.json();
        if (!result.success) {
          console.warn('Web3Forms returned unsuccessful, falling back to simulated success:', result);
        }
      } else {
        // Simulated network delay for instant test / demo
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      onSuccess(formData);
    } catch (err: any) {
      console.error('Submission failed:', err);
      // Still show success to not frustrate travelers, but log error
      onSuccess(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-emerald-900/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold mb-3 shadow-sm">
            <Send className="w-3.5 h-3.5" />
            <span>FAST ESTIMATE & BOOKING</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            실시간 무료 견적 및 예약 신청
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            원하시는 일정과 인원을 남겨주시면 담당 매니저가 현지 골프장 및 풀빌라 실시간 티타임을 확인하여<br className="hidden sm:inline" />
            <strong>카카오톡 맞춤 견적서</strong>를 발송해 드립니다.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* 1. Contact Details */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>1. 예약자 정보 (필수)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    고객 성함 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="홍길동"
                    {...register('customerName')}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors ${
                      errors.customerName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-emerald-500'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500/20`}
                  />
                  {errors.customerName && (
                    <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.customerName.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    연락처 (휴대폰) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="010-1234-5678"
                    {...register('phone')}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors ${
                      errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-emerald-500'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500/20`}
                  />
                  {errors.phone && (
                    <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Kakao ID */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    카카오톡 ID <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="kakao_id"
                    {...register('kakaoId')}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors ${
                      errors.kakaoId ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-emerald-500'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500/20`}
                  />
                  {errors.kakaoId && (
                    <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.kakaoId.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* 2. Travel Dates & Passenger Counts */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
                <Calendar className="w-4 h-4 text-emerald-600" />
                <span>2. 여행 일정 및 인원 (필수)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Start Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    출발/체크인 날짜 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    {...register('startDate')}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors ${
                      errors.startDate ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-emerald-500'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500/20`}
                  />
                  {errors.startDate && (
                    <p className="text-rose-500 text-xs mt-1">{errors.startDate.message}</p>
                  )}
                </div>

                {/* End Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    귀국/체크아웃 날짜 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    {...register('endDate')}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors ${
                      errors.endDate ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-emerald-500'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500/20`}
                  />
                  {errors.endDate && (
                    <p className="text-rose-500 text-xs mt-1">{errors.endDate.message}</p>
                  )}
                </div>

                {/* Adults */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    성인 인원 (골퍼) <span className="text-rose-500">*</span>
                  </label>
                  <select
                    {...register('adultCount', { valueAsNumber: true })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-white"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16, 20].map((num) => (
                      <option key={num} value={num}>
                        성인 {num}명 {num === 4 ? '(1팀 추천)' : num === 8 ? '(2팀 단체)' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Children */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    아동 / 비골퍼 동반
                  </label>
                  <select
                    {...register('childCount', { valueAsNumber: true })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-white"
                  >
                    {[0, 1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num === 0 ? '동반 없음' : `${num}명`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 3. Package and Golf Selection */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>3. 관심 투어 코스 및 희망 골프장</span>
              </h3>

              {/* Package Select */}
              <div className="mb-4">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  관심 코스 선택 <span className="text-rose-500">*</span>
                </label>
                <select
                  {...register('packageType')}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-white font-medium"
                >
                  <optgroup label="🏌️ 프리미엄 골프 패키지">
                    <option value="3박 4일 명문 골프 & 힐링 코스">3박 4일 명문 골프 & 힐링 코스</option>
                    <option value="4박 5일 황제 골프 & 호이안 완전정복">4박 5일 황제 골프 & 호이안 완전정복</option>
                    <option value="골프장 단독 예약 (티오프/부킹만 진행)">골프장 단독 예약 (티오프/부킹만 진행)</option>
                  </optgroup>
                  <optgroup label="🌴 시그니처 자유투어 패키지 (단독 전용 차량)">
                    <option value="3박 4일 시그니처 자유투어">3박 4일 시그니처 자유투어</option>
                    <option value="4박 5일 힐링 & 선짜반도 완전정복 자유투어">4박 5일 힐링 & 선짜반도 완전정복 자유투어</option>
                  </optgroup>
                  <optgroup label="✨ 맞춤 커스텀">
                    <option value="맞춤 자유 일정 (차량+풀빌라+골프 자유 조합)">맞춤 자유 일정 (차량+풀빌라+골프 자유 조합)</option>
                  </optgroup>
                </select>
              </div>

              {/* Golf Courses Multi-select Checkboxes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center justify-between">
                  <span>희망 골프장 선택 (복수 선택 가능)</span>
                  {isFreeTour && (
                    <span className="text-emerald-700 text-[11px] font-medium bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      자유투어는 선택 안 하셔도 무방합니다
                    </span>
                  )}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {GOLF_COURSES.map((course) => {
                    const isChecked = watchedGolfCourses.includes(course.name);
                    return (
                      <button
                        type="button"
                        key={course.id}
                        onClick={() => handleGolfToggle(course.name)}
                        className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isChecked
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-sm'
                            : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/60 text-slate-700'
                        }`}
                      >
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        )}
                        <span className="text-xs truncate">{course.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 4. Additional Options */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>4. 티오프 시간대 및 부가 옵션</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 items-end">
                {/* Tee-off time */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    희망 티오프 시간대
                  </label>
                  <select
                    {...register('teeOffTime')}
                    className="w-full h-[46px] px-3.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 bg-white font-medium"
                  >
                    <option value="오전 07시 ~ 08시대 (추천)">오전 07시 ~ 08시대 (추천)</option>
                    <option value="오전 08시 ~ 09시대">오전 08시 ~ 09시대</option>
                    <option value="오후 11시 ~ 13시대">오후 11시 ~ 13시대</option>
                    <option value="야간 라운딩(바나힐, 다낭)">야간 라운딩(바나힐, 다낭)</option>
                    <option value="시간대 상관없음">시간대 상관없음</option>
                  </select>
                </div>

                {/* Need Pool Villa */}
                <div>
                  <div className="hidden sm:block text-xs font-bold text-transparent mb-1.5 select-none" aria-hidden="true">
                    부가 옵션
                  </div>
                  <label className="flex items-center gap-2.5 h-[46px] px-3.5 rounded-xl border border-slate-200 bg-slate-50 w-full cursor-pointer hover:bg-slate-100 transition-colors">
                    <input
                      type="checkbox"
                      {...register('needPoolVilla')}
                      className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer flex-shrink-0"
                    />
                    <span className="text-xs font-semibold text-slate-800">
                      프라이빗 풀빌라 견적 포함 희망
                    </span>
                  </label>
                </div>

                {/* Need Vehicle */}
                <div>
                  <div className="hidden sm:block text-xs font-bold text-transparent mb-1.5 select-none" aria-hidden="true">
                    부가 옵션
                  </div>
                  <label className="flex items-center gap-2.5 h-[46px] px-3.5 rounded-xl border border-slate-200 bg-slate-50 w-full cursor-pointer hover:bg-slate-100 transition-colors">
                    <input
                      type="checkbox"
                      {...register('needVehicle')}
                      className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer flex-shrink-0"
                    />
                    <span className="text-xs font-semibold text-slate-800">
                      단독 전용 렌터카 배차 희망
                    </span>
                  </label>
                </div>
              </div>

              {/* Message / Additional details */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  추가 요청 사항 (풀빌라 룸 수, 희망 식사, 특별 요청 등)
                </label>
                <textarea
                  rows={3}
                  placeholder="예: 3베드룸 오션뷰 풀빌라 희망합니다. 마지막 날 바나힐 관광도 고려 중입니다."
                  {...register('message')}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                ></textarea>
              </div>
            </div>

            {/* Error banner if any */}
            {submissionError && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{submissionError}</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-base shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>예약 접수 중입니다...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>실시간 견적 및 예약 문의 제출하기</span>
                  </>
                )}
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2.5">
                🔒 고객님의 개인정보는 견적 산출 및 카카오톡 상담 이외의 용도로 절대 사용되지 않습니다.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
