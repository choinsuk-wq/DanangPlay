import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GolfCourses } from './components/GolfCourses';
import { TourItinerary } from './components/TourItinerary';
import { AddonServices } from './components/AddonServices';
import { BookingForm } from './components/BookingForm';
import { SuccessModal } from './components/SuccessModal';
import { FloatingKakao } from './components/FloatingKakao';
import { Footer } from './components/Footer';
import { BookingFormValues } from './types/tour';
import { TOUR_PACKAGES } from './data/tourData';

export const App: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('3n4d');
  const [selectedPackageName, setSelectedPackageName] = useState<string>('3박 4일 명문 골프 & 힐링 코스');
  const [packageSelectTrigger, setPackageSelectTrigger] = useState<number>(0);
  const [selectedGolfCourse, setSelectedGolfCourse] = useState<string | undefined>(undefined);
  const [selectedGolfCourses, setSelectedGolfCourses] = useState<string[]>([]);
  const [needVehiclePrefill, setNeedVehiclePrefill] = useState<boolean>(false);
  const [needVillaPrefill, setNeedVillaPrefill] = useState<boolean>(false);
  const [prefilledStartDate, setPrefilledStartDate] = useState<string>('');
  const [prefilledAdultCount, setPrefilledAdultCount] = useState<number>(4);
  const [successBookingData, setSuccessBookingData] = useState<BookingFormValues | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (packageId: string, packageName?: string) => {
    setSelectedPackage(packageId);

    const pkg = TOUR_PACKAGES.find((p) => p.id === packageId);
    const resolvedName = packageName || (pkg ? pkg.name : undefined);
    if (resolvedName) {
      setSelectedPackageName(resolvedName);
    }

    if (packageId.includes('free') || (pkg && pkg.category === 'free')) {
      setSelectedGolfCourses([]);
      setSelectedGolfCourse(undefined);
    } else if (packageId === '3n4d') {
      setSelectedGolfCourses(['BRG 다낭 골프 리조트', '바나힐스 골프클럽']);
      setSelectedGolfCourse('BRG 다낭 골프 리조트');
    } else if (packageId === '4n5d') {
      setSelectedGolfCourses(['바나힐스 골프클럽', 'BRG 다낭 골프 리조트', '호이아나 쇼어스 골프클럽']);
      setSelectedGolfCourse('바나힐스 골프클럽');
    }

    setPackageSelectTrigger((prev) => prev + 1);
    scrollToBooking();
  };

  const handleSelectGolfCourse = (courseName: string) => {
    setSelectedGolfCourse(courseName);
    setSelectedGolfCourses([courseName]);
    scrollToBooking();
  };

  const handleQuickSearch = (courses: string | string[], date: string, guestCount: number) => {
    if (Array.isArray(courses)) {
      setSelectedGolfCourses(courses);
      if (courses.length > 0) {
        setSelectedGolfCourse(courses[0]);
      }
    } else if (courses && courses !== '전체 / 추천 희망') {
      setSelectedGolfCourse(courses);
      setSelectedGolfCourses([courses]);
    }
    if (date) {
      setPrefilledStartDate(date);
    }
    if (guestCount) {
      setPrefilledAdultCount(guestCount);
    }
    scrollToBooking();
  };

  const handleSelectService = (serviceType: 'vehicle' | 'villa') => {
    if (serviceType === 'vehicle') {
      setNeedVehiclePrefill(true);
    } else {
      setNeedVillaPrefill(true);
    }
    scrollToBooking();
  };

  const handleBookingSuccess = (data: BookingFormValues) => {
    setSuccessBookingData(data);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-charcoal-900 selection:bg-forest-900 selection:text-gold-300">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Area in exact requested architecture */}
      <main className="flex-grow">
        {/* 1. Hero Section with Quick Concierge Bar */}
        <Hero onBookClick={scrollToBooking} onQuickSearch={handleQuickSearch} />

        {/* 2. Section 1 - 명문 골프장 컬렉션 (Main Focus) */}
        <GolfCourses onSelectGolfCourse={handleSelectGolfCourse} />

        {/* 3. Section 2 - 다낭 프라이빗 투어 & 힐링 (Tour Itinerary) */}
        <TourItinerary onSelectPackage={handleSelectPackage} />

        {/* 4. Section 3 (호텔 & 풀빌라) & Section 4 (전용 의전 차량 & 현지 신뢰 지표) */}
        <AddonServices onSelectService={handleSelectService} />

        {/* 5. Section 5 - 실시간 무료 견적 및 예약 신청 */}
        <BookingForm
          selectedPackage={selectedPackage}
          selectedPackageName={selectedPackageName}
          packageSelectTrigger={packageSelectTrigger}
          selectedGolfCourse={selectedGolfCourse}
          selectedGolfCourses={selectedGolfCourses}
          needVehiclePrefill={needVehiclePrefill}
          needVillaPrefill={needVillaPrefill}
          initialStartDate={prefilledStartDate}
          initialAdultCount={prefilledAdultCount}
          onSuccess={handleBookingSuccess}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Success Modal */}
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bookingData={successBookingData}
      />

      {/* Floating Kakao Action Button */}
      <FloatingKakao />
    </div>
  );
};

export default App;
