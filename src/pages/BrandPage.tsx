import React from 'react';
import { Phone, Check, AlertTriangle, ChevronRight } from 'lucide-react';
import { BRAND_PAGES_DATA, BUSINESS_DETAILS, SERVICES_LIST } from '../data/content';
import { LeadForm } from '../components/LeadForm';
import { FAQAccordion } from '../components/FAQAccordion';
import { PageRoute } from '../types';

interface BrandPageProps {
  route: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

interface BrandTheme {
  primary: string;
  secondary: string;
  heroOverlay: string;
  heroTitleAccent: string;
  heroCallText: string;
  heroBookBg: string;
  heroBookText: string;
  headingColor: string;
  bodyColor: string;
  problemCardBg: string;
  problemCardBorder: string;
  problemIconBg: string;
  problemIconColor: string;
  problemTextColor: string;
  serviceTitleColor: string;
  serviceCheckColor: string;
  serviceCtaColor: string;
  ctaBtnBg: string;
}

const BRAND_THEMES: Record<string, BrandTheme> = {
  'lg-service': {
    primary: '#A50034',
    secondary: '#6D6E71',
    heroOverlay: 'from-slate-950/80 via-[#A50034]/40 to-slate-900/80',
    heroTitleAccent: 'from-red-300 via-rose-200 to-white',
    heroCallText: '#A50034',
    heroBookBg: '#A50034',
    heroBookText: '#FFFFFF',
    headingColor: '#A50034',
    bodyColor: '#6D6E71',
    problemCardBg: '#FFFFFF',
    problemCardBorder: '#f1f5f9',
    problemIconBg: 'rgba(165, 0, 52, 0.1)',
    problemIconColor: '#A50034',
    problemTextColor: '#6D6E71',
    serviceTitleColor: '#A50034',
    serviceCheckColor: '#A50034',
    serviceCtaColor: '#A50034',
    ctaBtnBg: '#A50034',
  },
  'aquaguard-service': {
    primary: '#0072BC',
    secondary: '#005a96',
    heroOverlay: 'from-slate-950/80 via-[#0072BC]/45 to-slate-900/80',
    heroTitleAccent: 'from-sky-200 via-cyan-100 to-white',
    heroCallText: '#0072BC',
    heroBookBg: '#0072BC',
    heroBookText: '#FFFFFF',
    headingColor: '#0072BC',
    bodyColor: '#475569',
    problemCardBg: '#FFFFFF',
    problemCardBorder: '#f1f5f9',
    problemIconBg: 'rgba(0, 114, 188, 0.1)',
    problemIconColor: '#0072BC',
    problemTextColor: '#1e293b',
    serviceTitleColor: '#0072BC',
    serviceCheckColor: '#0072BC',
    serviceCtaColor: '#0072BC',
    ctaBtnBg: '#0072BC',
  },
  'pureit-service': {
    primary: '#2B2A6B',
    secondary: '#4CA6DE',
    heroOverlay: 'from-slate-950/80 via-[#2B2A6B]/55 to-slate-900/80',
    heroTitleAccent: 'from-sky-300 via-[#4CA6DE] to-cyan-100',
    heroCallText: '#2B2A6B',
    heroBookBg: '#4CA6DE',
    heroBookText: '#FFFFFF',
    headingColor: '#2B2A6B',
    bodyColor: '#475569',
    problemCardBg: '#FFFFFF',
    problemCardBorder: '#f1f5f9',
    problemIconBg: 'rgba(76, 166, 222, 0.12)',
    problemIconColor: '#4CA6DE',
    problemTextColor: '#2B2A6B',
    serviceTitleColor: '#2B2A6B',
    serviceCheckColor: '#4CA6DE',
    serviceCtaColor: '#4CA6DE',
    ctaBtnBg: '#4CA6DE',
  },
  'aosmith-service': {
    primary: '#00843D',
    secondary: '#231F20',
    heroOverlay: 'from-slate-950/80 via-[#00843D]/45 to-slate-900/80',
    heroTitleAccent: 'from-emerald-300 via-green-200 to-teal-100',
    heroCallText: '#00843D',
    heroBookBg: '#00843D',
    heroBookText: '#FFFFFF',
    headingColor: '#231F20',
    bodyColor: '#4b5563',
    problemCardBg: '#FFFFFF',
    problemCardBorder: '#f1f5f9',
    problemIconBg: 'rgba(0, 132, 61, 0.1)',
    problemIconColor: '#00843D',
    problemTextColor: '#231F20',
    serviceTitleColor: '#231F20',
    serviceCheckColor: '#00843D',
    serviceCtaColor: '#00843D',
    ctaBtnBg: '#00843D',
  },
  'kent-service': {
    primary: '#1B3F8C',
    secondary: '#0284C7',
    heroOverlay: 'from-slate-950/80 via-[#1B3F8C]/50 to-slate-900/80',
    heroTitleAccent: 'from-sky-300 via-blue-200 to-white',
    heroCallText: '#1B3F8C',
    heroBookBg: '#1B3F8C',
    heroBookText: '#FFFFFF',
    headingColor: '#1B3F8C',
    bodyColor: '#475569',
    problemCardBg: '#FFFFFF',
    problemCardBorder: '#f1f5f9',
    problemIconBg: 'rgba(27, 63, 140, 0.1)',
    problemIconColor: '#1B3F8C',
    problemTextColor: '#1B3F8C',
    serviceTitleColor: '#1B3F8C',
    serviceCheckColor: '#1B3F8C',
    serviceCtaColor: '#1B3F8C',
    ctaBtnBg: '#1B3F8C',
  },
};

export const BrandPage: React.FC<BrandPageProps> = ({ route }) => {
  const brandKey = route.replace('/', '');
  const brand = BRAND_PAGES_DATA[brandKey] || BRAND_PAGES_DATA['kent-service'];
  const theme = BRAND_THEMES[brandKey] || BRAND_THEMES['kent-service'];

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* BRAND HERO SECTION */}
      <section className="bg-slate-950 text-white pt-16 pb-28 sm:pt-24 sm:pb-36 lg:pt-32 lg:pb-44 min-h-[440px] sm:min-h-[520px] lg:min-h-[580px] flex flex-col justify-center relative overflow-hidden">
        
        {/* Background Image */}
        <img
          src="https://res.cloudinary.com/dieq3fjuv/image/upload/w_1920,h_1080,c_fill,q_auto,f_auto/v1785990425/IMG_20260806_095543_woel3l.jpg"
          alt="RO Water Purifier Service Background"
          width="1920"
          height="1080"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0 opacity-85 scale-105"
        />

        {/* Brand specific Gradient Overlay for image visibility & contrast */}
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.heroOverlay} backdrop-blur-[0.5px] z-[1]`}></div>

        {/* Decorative background glow elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-3 leading-tight">
            {brand.name} RO Water Purifier Repair
            <span className={`block mt-1 bg-gradient-to-r ${theme.heroTitleAccent} bg-clip-text text-transparent`}>
              & Service in Bangalore
            </span>
          </h1>

          <p className="text-sm sm:text-base font-semibold mb-6 text-slate-100 max-w-xl mx-auto leading-relaxed">
            Fast 60–90 min doorstep repair, genuine filter replacements & AMC by certified technicians in Bangalore.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              style={{ color: theme.heroCallText }}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white font-extrabold text-sm shadow-md hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>

            <button
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ backgroundColor: theme.heroBookBg, color: theme.heroBookText }}
              className="w-full sm:w-auto px-7 py-3 rounded-xl font-extrabold text-sm shadow-md hover:brightness-110 transition-all"
            >
              Book Service Now
            </button>
          </div>
        </div>
        
        {/* Decorative bottom fade out */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* LEAD FORM SECTION (Positioned overlapping the hero slightly) */}
      <section className="relative z-20 -mt-16 lg:-mt-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto mb-16">
        <LeadForm preselectedBrand={brand.name} sourcePage={`${brand.name} Service Page`} buttonColor={theme.ctaBtnBg} hideBrandSelector={true} />
      </section>

      {/* NEW SECTION: Water Purifier Tech, Image & CTA */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ color: theme.headingColor }} className="text-2xl md:text-3xl font-black tracking-tight mb-8">
            Water Purifier RO + UV + UF + Alkaline + MC + TF
          </h2>
          
          {brand.showcaseImage && (
            <div className="mb-10 max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-3 sm:p-6 lg:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.04)] border border-slate-200/80 overflow-hidden flex items-center justify-center">
                <img
                  src={brand.showcaseImage}
                  alt={`${brand.name} Water Purifier Models & Service Showcase`}
                  width="800"
                  height="500"
                  className="w-full h-auto aspect-[8/5] object-contain max-h-[550px] mx-auto rounded-2xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          )}

          <a
            href={`tel:${BUSINESS_DETAILS.phone}`}
            style={{ backgroundColor: theme.ctaBtnBg }}
            className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-xl text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5 mr-2" />
            Book Service
          </a>
        </div>
      </section>

      {/* COMMON PROBLEMS WE FIX */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 style={{ color: theme.headingColor }} className="text-3xl sm:text-4xl font-black tracking-tight">
              Common {brand.name} Problems We Fix
            </h2>
            <p style={{ color: theme.bodyColor }} className="text-sm sm:text-base mt-2 font-medium">
              Diagnostic & repair coverage for all genuine {brand.name} filter, electrical & membrane issues.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {brand.commonProblems.map((prob, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[20px] bg-white flex items-start gap-4 border border-slate-200/80 hover:border-slate-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all"
              >
                <div
                  style={{ backgroundColor: theme.problemIconBg, color: theme.problemIconColor }}
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm"
                >
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <span style={{ color: theme.problemTextColor }} className="text-[15px] font-semibold leading-snug">
                  {prob}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES FOR THIS BRAND */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 style={{ color: theme.headingColor }} className="text-3xl sm:text-4xl font-black tracking-tight">
              {brand.name} Services Offered
            </h2>
            <p style={{ color: theme.bodyColor }} className="text-sm sm:text-base mt-2 font-medium">
              Professional doorstep solutions delivered with original parts & transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-200/80 flex flex-col group relative"
              >
                <div>
                  <h3 style={{ color: theme.serviceTitleColor }} className="text-xl font-bold mb-4">
                    {brand.name} {srv.title}
                  </h3>
                  <ul className="space-y-4 mb-8 pt-4 border-t border-slate-100">
                    {srv.features.map((f, i) => (
                      <li key={i} className="flex items-start justify-between gap-4 text-[15px] text-slate-700">
                        <span className="leading-snug">{f}</span>
                        <div
                          style={{ backgroundColor: theme.serviceCheckColor }}
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white mt-0.5 shadow-xs"
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <button
                    onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                    style={{ color: theme.serviceCtaColor }}
                    className="inline-flex items-center gap-1.5 font-extrabold text-[15px] hover:opacity-80 transition-opacity group/btn"
                  >
                    <span>Find plans for my device</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* RICH CRAWLABLE OVERVIEW & SERVICE PROTOCOL */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Doorstep {brand.name} RO Water Purifier Servicing Across Bangalore
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Bangalore's municipal Cauvery water and groundwater borewells exhibit variable Total Dissolved Solids (TDS) levels ranging from 150 PPM to over 2000 PPM. {brand.name} water purifiers require routine filter flushing, TDS calibration, and genuine membrane replacement to deliver pure, crystal-clear drinking water. Our certified local technicians provide specialized maintenance for all {brand.name} models — including Grand Plus, Mineral RO, Active Copper, Germkill, and Stainless Steel tank series.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-100">
                <h3 className="text-lg font-bold text-[#0c54a0] mb-2">100% Genuine Spare Guarantee</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We install original high-density sediment filters, pre-carbon blocks, post-carbon mineralizers, and high-rejection RO membranes built to handle heavy hard water.
                </p>
              </div>

              <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100">
                <h3 className="text-lg font-bold text-emerald-800 mb-2">30-Day Post-Service Warranty</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Enjoy complete peace of mind with our 30-day labor service warranty and up to 1-year replacement warranty on major pumps and SMPS power units.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our 8-Point {brand.name} Service & Inspection Protocol</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0c54a0] shrink-0" />
                  <span>Pre-filter outer bowl flushing & cartridge replacement</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0c54a0] shrink-0" />
                  <span>Spun sediment & activated carbon deodorization check</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0c54a0] shrink-0" />
                  <span>High-TDS RO membrane rejection rate calibration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0c54a0] shrink-0" />
                  <span>UV lamp intensity & quartz sleeve descaling</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0c54a0] shrink-0" />
                  <span>Booster pump PSI pressure & vibration test</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0c54a0] shrink-0" />
                  <span>Solenoid valve auto-cut & power adapter output test</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0c54a0] shrink-0" />
                  <span>Water storage tank food-grade sanitization</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0c54a0] shrink-0" />
                  <span>Digital TDS meter verification before & after service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND FAQS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion
            faqs={brand.brandFaqs}
            title={`${brand.name} Service FAQs`}
            subtitle={`Answers to common questions about servicing your ${brand.name} RO system in Bangalore.`}
            brandColor={theme.primary}
          />
        </div>
      </section>

      {/* MSME CERTIFIED BADGE (Just above footer) */}
      <section className="py-12 bg-slate-50/80 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-md border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 text-center sm:text-left">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-inner flex items-center justify-center shrink-0">
              <img
                src="https://res.cloudinary.com/dieq3fjuv/image/upload/w_210,h_140,c_fill,q_auto,f_auto/v1786037616/file_000000005ba8821198056a961ff1f0c2_fahl4d.png"
                alt="Government of India MSME Certified"
                width="210"
                height="140"
                loading="lazy"
                decoding="async"
                className="h-20 sm:h-24 w-auto aspect-[3/2] object-contain max-w-full drop-shadow-sm"
              />
            </div>

            <div className="flex-1 flex flex-col items-center sm:items-start">
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1">
                MSME Certified Water Purifier Service
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-500 mb-3 max-w-lg">
                Officially recognized government enterprise for trusted doorstep {brand.name} RO repair, maintenance & filter replacement in Bangalore.
              </p>

              <div className="inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 bg-slate-900 text-white text-xs sm:text-sm font-extrabold px-4 py-2 rounded-xl shadow-xs border border-slate-800">
                <span className="text-slate-300 font-medium text-[11px] uppercase tracking-wider">MSME Registration No:</span>
                <span className="text-amber-300 font-mono tracking-wider font-extrabold">UDYAM-KR-03-0561611</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR SEARCHES */}
      {brand.popularSearches && brand.popularSearches.length > 0 && (
        <section className="py-8 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-4">
              Related Services
            </p>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-3">
              {brand.popularSearches.map((search, idx) => (
                <span key={idx} className="inline-flex items-center">
                  <span className="text-[13px] text-slate-500">{search}</span>
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

