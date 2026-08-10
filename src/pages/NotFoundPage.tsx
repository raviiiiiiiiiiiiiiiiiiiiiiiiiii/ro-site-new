import React from 'react';
import { Home, Phone, ArrowLeft, MessageSquare, Wrench, ShieldCheck, Search, Compass } from 'lucide-react';
import { PageRoute } from '../types';
import { BUSINESS_DETAILS, BRAND_PAGES_DATA } from '../data/content';
import { LeadForm } from '../components/LeadForm';

interface NotFoundPageProps {
  onNavigate: (route: PageRoute) => void;
  lastBrandRoute?: PageRoute | null;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate, lastBrandRoute }) => {
  const brandList = Object.values(BRAND_PAGES_DATA);

  return (
    <div className="min-h-screen bg-slate-50 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* 404 Badge & Illustration */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0c54a0] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-6 shadow-2xs">
          <Compass className="w-4 h-4 animate-spin-slow" />
          <span>Error 404 - Page Not Found</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-4">
          Looking for Water Purifier Repair?
        </h1>
        
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          The page you are trying to reach couldn't be found or might have been moved. Don't worry, our expert technicians in Bangalore are just a call away!
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center justify-center gap-2 bg-[#0c54a0] hover:bg-blue-800 text-white font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base shadow-lg shadow-blue-900/10 hover:shadow-xl transition-all cursor-pointer"
          >
            <Home className="w-5 h-5" />
            Go to Home Page
          </button>

          <a
            href={`tel:${BUSINESS_DETAILS.phone}`}
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base shadow-lg shadow-emerald-900/10 transition-all"
          >
            <Phone className="w-5 h-5" />
            Call {BUSINESS_DETAILS.formattedPhone}
          </a>

          <a
            href={`https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hi RO-service 24x7, I need water purifier service in Bangalore.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base shadow-lg transition-all"
          >
            <MessageSquare className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>

        {/* Brand Pages Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md text-left mb-12">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-[#0c54a0]" />
                Popular Brand Service Pages
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Select your RO water purifier brand for dedicated service details in Bangalore
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {brandList.map((brand) => (
              <button
                key={brand.id}
                onClick={() => onNavigate(brand.slug)}
                className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-100 hover:border-blue-200 bg-slate-50/60 hover:bg-blue-50/40 text-slate-800 font-semibold text-sm transition-all text-left cursor-pointer group"
              >
                {brand.logoUrl ? (
                  <img
                    src={brand.logoUrl}
                    alt={brand.name}
                    className="w-8 h-8 object-contain rounded-lg bg-white p-1 border border-slate-200 shrink-0"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0c54a0] font-bold flex items-center justify-center shrink-0">
                    {brand.name.charAt(0)}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-slate-900 truncate group-hover:text-[#0c54a0] transition-colors">
                    {brand.name} Repair
                  </div>
                  <div className="text-xs text-slate-500 truncate">Same-day service</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Lead Form Section */}
        <div className="max-w-2xl mx-auto text-left">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg">
            <h3 className="text-xl font-extrabold text-slate-900 mb-2 text-center">
              Book a Technician Right Now
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 text-center mb-6">
              Enter your details below and our technician will arrive at your doorstep in 60-90 minutes.
            </p>
            <LeadForm sourcePage="404 Page Form" />
          </div>
        </div>

      </div>
    </div>
  );
};
