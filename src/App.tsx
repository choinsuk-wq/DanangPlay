import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TourItinerary } from './components/TourItinerary';
import { GolfCourses } from './components/GolfCourses';
import { AddonServices } from './components/AddonServices';
import { BookingForm } from './components/BookingForm';
import { SuccessModal } from './components/SuccessModal';
import { FloatingKakao } from './components/FloatingKakao';
import { Footer } from './components/Footer';
import { BookingFormValues } from './types/tour';

export const App: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('3n4d');
  const [selectedGolfCourse, setSelectedGolfCourse] = useState<string | undefined>(undefined);
  const [needVehiclePrefill, setNeedVehiclePrefill] = useState<boolean>(false);
  const [needVillaPrefill, setNeedVillaPrefill] = useState<boolean>(false);
  const [successBookingData, setSuccessBookingData] = useState<BookingFormValues | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackage(packageId);
    scrollToBooking();
  };

  const handleSelectGolfCourse = (courseName: string) => {
    setSelectedGolfCourse(courseName);
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
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onBookClick={scrollToBooking} />

        {/* 2. Tour Itinerary Section */}
        <TourItinerary onSelectPackage={handleSelectPackage} />

        {/* 3. Golf Courses Grid */}
        <GolfCourses onSelectGolfCourse={handleSelectGolfCourse} />

        {/* 4. Add-on Services (Vehicles & Villas) */}
        <AddonServices onSelectService={handleSelectService} />

        {/* 5. Real-time Booking Form */}
        <BookingForm
          key={`${selectedPackage}-${selectedGolfCourse}-${needVillaPrefill}-${needVehiclePrefill}`}
          selectedPackage={selectedPackage}
          selectedGolfCourse={selectedGolfCourse}
          needVehiclePrefill={needVehiclePrefill}
          needVillaPrefill={needVillaPrefill}
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

      {/* Floating KakaoTalk Quick Button */}
      <FloatingKakao />
    </div>
  );
};

export default App;
