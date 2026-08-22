import React from 'react';
import { Phone, CheckCircle2, AlertCircle, Wrench, ShieldCheck, Clock, Award, Check } from 'lucide-react';
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
  ctaBtnBg: string;
}

const BRAND_THEMES: Record<string, BrandTheme> = {
  'lg-service': {
    primary: '#A50034',
    secondary: '#6D6E71',
    heroOverlay: 'from-slate-950/45 via-[#A50034]/20 to-slate-900/35',
    heroTitleAccent: 'from-red-300 via-rose-200 to-white',
    heroCallText: '#A50034',
    heroBookBg: '#A50034',
    heroBookText: '#FFFFFF',
    headingColor: '#1d63d8',
    bodyColor: '#475569',
    ctaBtnBg: '#A50034',
  },
  'aquaguard-service': {
    primary: '#0072BC',
    secondary: '#005a96',
    heroOverlay: 'from-slate-950/45 via-[#0072BC]/20 to-slate-900/35',
    heroTitleAccent: 'from-sky-200 via-cyan-100 to-white',
    heroCallText: '#0072BC',
    heroBookBg: '#0072BC',
    heroBookText: '#FFFFFF',
    headingColor: '#1d63d8',
    bodyColor: '#475569',
    ctaBtnBg: '#0072BC',
  },
  'pureit-service': {
    primary: '#2B2A6B',
    secondary: '#4CA6DE',
    heroOverlay: 'from-slate-950/45 via-[#2B2A6B]/25 to-slate-900/35',
    heroTitleAccent: 'from-sky-300 via-[#4CA6DE] to-cyan-100',
    heroCallText: '#2B2A6B',
    heroBookBg: '#4CA6DE',
    heroBookText: '#FFFFFF',
    headingColor: '#1d63d8',
    bodyColor: '#475569',
    ctaBtnBg: '#1d63d8',
  },
  'aosmith-service': {
    primary: '#00843D',
    secondary: '#231F20',
    heroOverlay: 'from-slate-950/45 via-[#00843D]/20 to-slate-900/35',
    heroTitleAccent: 'from-emerald-300 via-green-200 to-teal-100',
    heroCallText: '#00843D',
    heroBookBg: '#00843D',
    heroBookText: '#FFFFFF',
    headingColor: '#1d63d8',
    bodyColor: '#475569',
    ctaBtnBg: '#00843D',
  },
  'kent-service': {
    primary: '#1B3F8C',
    secondary: '#0284C7',
    heroOverlay: 'from-slate-950/45 via-[#1B3F8C]/25 to-slate-900/35',
    heroTitleAccent: 'from-sky-300 via-blue-200 to-white',
    heroCallText: '#1B3F8C',
    heroBookBg: '#1B3F8C',
    heroBookText: '#FFFFFF',
    headingColor: '#1d63d8',
    bodyColor: '#475569',
    ctaBtnBg: '#1d63d8',
  },
};

export const BrandPage: React.FC<BrandPageProps> = ({ route }) => {
  const brandKey = route.replace('/', '');
  const brand = BRAND_PAGES_DATA[brandKey] || BRAND_PAGES_DATA['kent-service'];
  const theme = BRAND_THEMES[brandKey] || BRAND_THEMES['kent-service'];

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
      
      {/* BRAND HERO SECTION */}
      <section className="bg-slate-950 text-white pt-14 pb-24 sm:pt-20 sm:pb-32 lg:pt-28 lg:pb-36 min-h-[420px] sm:min-h-[500px] flex flex-col justify-center relative overflow-hidden">
        
        {/* Background Image */}
        <img
          src={brand.heroImage || "https://res.cloudinary.com/dieq3fjuv/image/upload/w_1920,h_1080,c_fill,q_auto,f_auto/v1785990425/IMG_20260806_095543_woel3l.jpg"}
          alt="RO Water Purifier Service Background"
          width="1920"
          height="1080"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0 opacity-95 scale-105"
        />

        {/* Brand specific Gradient Overlay with reduced intensity for vibrant clarity */}
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.heroOverlay} z-[1]`}></div>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-[340px] sm:max-w-lg">
            <h1 className="text-3xl sm:text-[40px] font-bold tracking-tight mb-4 leading-[1.15] text-white drop-shadow-md">
              {brand.name} RO Water Purifier Repair
              <span className={`block mt-1 bg-gradient-to-r ${theme.heroTitleAccent} bg-clip-text text-transparent`}>
                & Service in Bangalore
              </span>
            </h1>

            <p className="text-sm sm:text-[15px] font-medium mb-8 text-white max-w-[320px] leading-relaxed drop-shadow-md">
              Fast 60–90 min doorstep repair, genuine filter replacements & AMC by certified technicians in Bangalore.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[280px] sm:max-w-md">
              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                style={{ color: theme.heroCallText }}
                className="w-full sm:w-auto flex-1 px-6 py-3.5 rounded-xl bg-white font-bold text-sm shadow-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-[#1d63d8]" />
                Call Now
              </a>

              <button
                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ backgroundColor: theme.heroBookBg, color: theme.heroBookText }}
                className="w-full sm:w-auto flex-1 px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:brightness-110 transition-all text-center"
              >
                Book Service Now
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom fade out */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* LEAD FORM SECTION (Positioned overlapping the hero slightly) */}
      <section className="relative z-20 -mt-14 lg:-mt-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto mb-12">
        <LeadForm preselectedBrand={brand.name} sourcePage={`${brand.name} Service Page`} buttonColor={theme.ctaBtnBg} hideBrandSelector={true} />
      </section>

      {/* WATER PURIFIER SHOWCASE SECTION */}
      {brand.showcaseImage && (
        <section className="py-10 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1d63d8] mb-6">
              Water Purifier RO + UV + UF + Alkaline + MC + TF
            </h2>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-3 sm:p-6 shadow-sm border border-slate-200/80 overflow-hidden flex items-center justify-center">
                <img
                  src={brand.showcaseImage}
                  alt={`${brand.name} Water Purifier Models & Service Showcase`}
                  width="800"
                  height="500"
                  className="w-full h-auto aspect-[8/5] object-contain max-h-[500px] mx-auto rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1d63d8] hover:bg-[#154db0] text-base font-bold rounded-xl text-white transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2 fill-white" />
              Book Service Now
            </a>
          </div>
        </section>
      )}

      {/* SECTION 1: OUR BRAND RO SERVICES (Simplified clean layout as in reference image) */}
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

      {/* SECTION 2: COMMON PROBLEMS WE FIX (Simplified clean layout as in reference image) */}
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

      {/* SECTION 3: WHY CHOOSE BRAND SERVICE CENTER (Simplified clean layout as in reference image) */}
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
