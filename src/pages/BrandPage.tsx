import React from 'react';
import { BRAND_PAGES_DATA } from '../data/content';
import { LeadForm } from '../components/LeadForm';
import { FAQAccordion } from '../components/FAQAccordion';
import { PageRoute } from '../types';

interface BrandPageProps {
  route: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const BrandPage: React.FC<BrandPageProps> = ({ route }) => {
  const brandKey = route.replace('/', '');
  const brand = BRAND_PAGES_DATA[brandKey] || BRAND_PAGES_DATA['kent-service'];

  const brandServices = [
    {
      title: `${brand.name} RO Water Purifier Repair & Service`,
      description: 'Complete troubleshooting and repair for power, leakage, and motor issues.',
    },
    {
      title: `${brand.name} RO Water Purifier Repair`,
      description: 'Fix purification problems, filter issues, low flow, and error indicators.',
    },
    {
      title: 'Installation & Uninstallation Support',
      description: `Safe and professional installation or removal of ${brand.name} RO appliances.`,
    },
    {
      title: 'Annual Maintenance Contracts (AMC)',
      description: 'Affordable AMC plans for regular servicing and preventive maintenance.',
    },
    {
      title: 'Genuine Spare Parts Replacement',
      description: 'Only high-quality and compatible spare parts used for long-term reliability.',
    },
  ];

  const brandProblems = brand.commonProblems || [
    'Water leakage, power failure, or tripping issues',
    `${brand.name} RO not purifying water effectively`,
    'Low water flow or slow dispensing from RO purifier',
    'Error lights, warning indicators, or unusual noise',
    'Foul smell or bad taste in purified water',
    'Auto-cut or motor pump vibration issues',
  ];

  const whyChoosePoints = [
    {
      title: '60–90 Minutes Fast Doorstep Service',
      description: 'Quick technician dispatch across all areas in Bangalore with same-day resolution.',
    },
    {
      title: '100% Genuine Spare Parts & Filters',
      description: `Original certified ${brand.name} compatible sediment filters, carbon blocks, and membranes.`,
    },
    {
      title: 'Transparent & Fixed Pricing',
      description: 'Upfront quotation post diagnosis with zero hidden charges or extra travel fees.',
    },
    {
      title: 'Certified Senior Technicians',
      description: 'Verified technicians with extensive training in all water purifier models.',
    },
    {
      title: '30-Day Labor Service Warranty',
      description: 'Complete peace of mind with our 30-day labor warranty and authentic part warranty.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* BRAND HERO SECTION - MATCHING REFERENCE DESIGN WITH BRAND BACKGROUND IMAGE */}
      <section className="bg-slate-950 text-white pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Image from previous design */}
        <img
          src={brand.heroImage || "https://res.cloudinary.com/dieq3fjuv/image/upload/w_1920,h_1080,c_fill,q_auto,f_auto/v1785990425/IMG_20260806_095543_woel3l.jpg"}
          alt={`${brand.name} RO Water Purifier Background`}
          width="1920"
          height="1080"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0 opacity-90 scale-105"
        />

        {/* Light subtle overlay for vivid image visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-[#0b1c3a]/30 to-slate-950/55 z-[1]"></div>

        <div className="max-w-md sm:max-w-lg mx-auto space-y-6 relative z-10">
          
          {/* 1. TEXT ON TOP */}
          <div className="text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight leading-tight drop-shadow-md">
              {brandKey === 'kent-service' ? 'Kent Service Center' : `${brand.name} Water Purifier Services`}
            </h1>
            <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed font-normal drop-shadow-sm">
              Certified doorstep {brand.name} RO repair, genuine filter replacements &amp; AMC across Bangalore in 60–90 mins. Experienced technicians ensure 100% pure, healthy water with warranty.
            </p>
          </div>

          {/* 2. BRAND LOGO CARD - MATCHING REFERENCE PROPORTIONS */}
          <div className="bg-black rounded-3xl p-6 sm:p-8 border-2 border-slate-700/70 shadow-2xl flex items-center justify-center overflow-hidden min-h-[140px] sm:min-h-[170px]">
            {brand.logoUrl ? (
              <img
                src={brand.logoUrl}
                alt={`${brand.name} Mineral RO Water Purifiers`}
                width="520"
                height="220"
                className="w-full max-w-[94%] sm:max-w-[88%] max-h-32 sm:max-h-40 md:max-h-44 object-contain mx-auto rounded-xl"
                loading="eager"
                decoding="async"
              />
            ) : (
              <span className="text-3xl sm:text-5xl font-black tracking-wider text-white py-4">
                {brand.name.toUpperCase()}
              </span>
            )}
          </div>

          {/* 3. BOOKING FORM CARD */}
          <LeadForm preselectedBrand={brand.name} sourcePage={`${brand.name} Brand Page`} />

          {/* 4. SHOWCASE IMAGE RIGHT BELOW THE BOOKING FORM */}
          {brand.showcaseImage && (
            <div className="pt-2 sm:pt-4 flex items-center justify-center">
              <img
                src={brand.showcaseImage}
                alt={`${brand.name} RO Water Purifier Models`}
                width="600"
                height="380"
                className="w-full max-w-sm sm:max-w-md h-auto object-contain mx-auto drop-shadow-2xl"
                loading="eager"
                decoding="async"
              />
            </div>
          )}

        </div>
      </section>

      {/* SECTION 1: OUR BRAND RO SERVICES (Simplified clean layout) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1d63d8] mb-8">
            Our {brand.name} Ro Services
          </h2>

          <div className="space-y-6 text-slate-700">
            {brandServices.map((service, idx) => (
              <div key={idx} className="leading-relaxed">
                <p className="text-base sm:text-lg">
                  <strong className="text-slate-900 font-bold">{service.title} – </strong>
                  <span className="text-slate-600 font-normal">{service.description}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: COMMON PROBLEMS WE FIX */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1d63d8] mb-8 leading-snug">
            Common {brand.name} Ro Problems<br className="hidden sm:inline" /> We Fix
          </h2>

          <div className="space-y-4 text-slate-700">
            {brandProblems.map((problem, idx) => (
              <p key={idx} className="text-base sm:text-lg text-slate-600 font-medium">
                {problem}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE BRAND SERVICE CENTER */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1d63d8] mb-8">
            Why Choose {brand.name} Ro<br className="hidden sm:inline" /> Service Center?
          </h2>

          <div className="space-y-5 text-slate-700">
            {whyChoosePoints.map((point, idx) => (
              <div key={idx} className="leading-relaxed">
                <p className="text-base sm:text-lg">
                  <strong className="text-slate-900 font-bold">{point.title} – </strong>
                  <span className="text-slate-600 font-normal">{point.description}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW OUR SERVICE WORKS (Simple 4 Steps) */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1d63d8] mb-8">
            How It Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1d63d8] font-bold text-lg flex items-center justify-center mx-auto mb-3">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Book Online / Call</h3>
              <p className="text-sm text-slate-500">Call us or submit our quick booking form.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1d63d8] font-bold text-lg flex items-center justify-center mx-auto mb-3">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Doorstep Visit</h3>
              <p className="text-sm text-slate-500">Technician reaches you within 60–90 minutes.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1d63d8] font-bold text-lg flex items-center justify-center mx-auto mb-3">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Diagnosis & Quote</h3>
              <p className="text-sm text-slate-500">Transparent upfront estimate post checkup.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1d63d8] font-bold text-lg flex items-center justify-center mx-auto mb-3">
                4
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Instant Repair</h3>
              <p className="text-sm text-slate-500">Fixed with genuine spares & 30-day warranty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND FAQS */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion
            faqs={brand.brandFaqs}
            title={`${brand.name} Service FAQs`}
            subtitle={`Common answers for servicing your ${brand.name} RO system in Bangalore.`}
            brandColor="#1d63d8"
          />
        </div>
      </section>

      {/* MSME CERTIFIED BADGE */}
      <section className="py-10 bg-slate-50/80 border-b border-slate-200/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xs border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-center shrink-0">
              <img
                src="https://res.cloudinary.com/dieq3fjuv/image/upload/w_210,h_140,c_fill,q_auto,f_auto/v1786037616/file_000000005ba8821198056a961ff1f0c2_fahl4d.png"
                alt="Government of India MSME Certified"
                width="160"
                height="100"
                loading="lazy"
                decoding="async"
                className="h-16 sm:h-20 w-auto aspect-[3/2] object-contain max-w-full"
              />
            </div>

            <div className="flex-1 flex flex-col items-center sm:items-start">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                MSME Certified Water Purifier Service
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-500 mb-2.5 max-w-md">
                Officially recognized enterprise for trusted doorstep {brand.name} RO repair, maintenance & filter replacement in Bangalore.
              </p>

              <div className="inline-flex items-center gap-1.5 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs">
                <span className="text-slate-300 font-medium text-[11px]">MSME Reg:</span>
                <span className="text-amber-300 font-mono font-bold">UDYAM-KR-03-0561611</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR SEARCHES */}
      {brand.popularSearches && brand.popularSearches.length > 0 && (
        <section className="py-6 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Popular Searches
            </p>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-2">
              {brand.popularSearches.map((search, idx) => (
                <span key={idx} className="inline-flex items-center">
                  <span className="text-xs text-slate-500">{search}</span>
                  {idx < brand.popularSearches!.length - 1 && (
                    <span className="mx-2 text-slate-300 font-bold">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
};
