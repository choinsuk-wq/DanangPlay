import React, { useState } from 'react';
import { VEHICLE_OPTIONS, VILLA_OPTIONS } from '../data/tourData';
import { Car, Home, Check, Users, Briefcase, MapPin, Sparkles } from 'lucide-react';

interface AddonServicesProps {
  onSelectService: (serviceType: 'vehicle' | 'villa') => void;
}

export const AddonServices: React.FC<AddonServicesProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'vehicle' | 'villa'>('vehicle');

  return (
    <section id="services" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VIP ADD-ON SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            프리미엄 부가 서비스: 전용 차량 & 풀빌라
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            대중교통 걱정 없는 단독 전용 차량과 프라이빗 럭셔리 풀빌라로<br className="hidden sm:inline" />
            여행의 품격과 프라이버시를 완벽하게 지켜드립니다.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-800 border border-slate-700 w-full max-w-md">
            <button
              onClick={() => setActiveTab('vehicle')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'vehicle'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>단독 전용 차량 (렌터카)</span>
            </button>
            <button
              onClick={() => setActiveTab('villa')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'villa'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>럭셔리 단독 풀빌라</span>
            </button>
          </div>
        </div>

        {/* Vehicles Content */}
        {activeTab === 'vehicle' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {VEHICLE_OPTIONS.map((veh) => (
              <div
                key={veh.id}
                className="bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700/80 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={veh.imageUrl}
                      alt={veh.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-3 text-emerald-400 text-xs font-semibold">
                      {veh.englishName}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                      {veh.name}
                    </h3>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      {veh.description}
                    </p>

                    {/* Capacity Pills */}
                    <div className="space-y-2 mb-4 p-3 rounded-xl bg-slate-900/60 text-xs border border-slate-700/50">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Users className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span><strong>권장 인원:</strong> {veh.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Briefcase className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span><strong>적재 용량:</strong> {veh.luggage}</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-amber-300 bg-amber-500/10 border border-amber-500/20 p-2.5 rounded-lg mb-4">
                      💡 <strong>추천 대상:</strong> {veh.bestFor}
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {veh.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onSelectService('vehicle')}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600/30 hover:bg-emerald-600 border border-emerald-500/40 text-emerald-200 hover:text-white font-bold text-xs transition-all cursor-pointer"
                  >
                    이 차량 포함하여 견적 신청
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Villas Content */}
        {activeTab === 'villa' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VILLA_OPTIONS.map((vil) => (
              <div
                key={vil.id}
                className="bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700/80 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={vil.imageUrl}
                      alt={vil.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-emerald-300">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{vil.location}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {vil.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                      {vil.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-900/60 text-xs border border-slate-700/50 mb-4">
                      <div>
                        <span className="text-[11px] text-slate-400 block">객실 구조</span>
                        <span className="font-semibold text-slate-200">{vil.bedrooms}</span>
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block">수용 인원</span>
                        <span className="font-semibold text-slate-200">{vil.capacity}</span>
                      </div>
                    </div>

                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      빌라 제공 혜택
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {vil.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectService('villa')}
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                  >
                    이 풀빌라 포함하여 견적 신청
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
