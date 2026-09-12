export interface TimelineEvent {
  time?: string;
  activity: string;
  description?: string;
}

export interface DaySchedule {
  day: number;
  title: string;
  subtitle: string;
  timeline: TimelineEvent[];
  meal?: {
    breakfast?: string;
    lunch?: string;
    dinner?: string;
  };
  stay?: string;
  vehicle?: string;
}

export interface TourPackage {
  id: string;
  category?: 'golf' | 'free';
  name: string;
  durationTag: string;
  badge?: string;
  notice?: string;
  target: string;
  summary: string;
  keyPoints: string[];
  days: DaySchedule[];
  included: string[];
  excluded: string[];
}

export interface GolfCourse {
  id: string;
  name: string;
  englishName: string;
  summary: string;
  holes: string;
  par: number;
  designer: string;
  distanceFromAirport: string;
  distanceFromCity: string;
  description: string;
  tags: string[];
  features: string[];
  badge?: string;
  imageUrl: string;
  officialUrl: string;
  courseLength?: string;
  facilities?: string[];
}

export interface VehicleOption {
  id: string;
  name: string;
  englishName: string;
  capacity: string;
  luggage: string;
  bestFor: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface VillaOption {
  id: string;
  name: string;
  bedrooms: string;
  capacity: string;
  location: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface BookingFormValues {
  customerName: string;
  phone: string;
  kakaoId: string;
  startDate: string;
  endDate: string;
  adultCount: number;
  childCount: number;
  packageType: string;
  golfCourses: string[];
  needPoolVilla: boolean;
  needVehicle: boolean;
  teeOffTime: string;
  message?: string;
}
