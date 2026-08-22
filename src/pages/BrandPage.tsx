import React, { useState } from 'react';
import { Phone, CheckCircle2, AlertCircle, Loader2, ChevronDown } from 'lucide-react';
import { BRAND_PAGES_DATA, BUSINESS_DETAILS } from '../data/content';
import { FAQAccordion } from '../components/FAQAccordion';
import { PageRoute } from '../types';

interface BrandPageProps {
  route: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

const BRAND_PRODUCT_OPTIONS: Record<string, string[]> = {
  'kent-service': [
    'Kent Grand Plus RO+UV+UF',
    'Kent Grand Star RO',
    'Kent Prime Plus Mineral RO',
    'Kent Supreme Copper RO',
    'Kent Pearl Under-the-Counter',
    'Kent Maxx / Elite RO',
    'Other Kent Purifier Model',
  ],
  'aquaguard-service': [
    'Aquaguard Active Copper RO',
    'Aquaguard Geneus RO+UV+UF',
    'Aquaguard Enhance RO+UV',
    'Aquaguard Blaze Hot & Ambient',
    'Aquaguard Ritz / Magna RO',
    'Aquaguard UTC Under Sink RO',
    'Other Aquaguard Purifier Model',
  ],
  'pureit-service': [
    'Pureit Marvella Mineral RO',
    'Pureit Ultima RO+UV+MF',
    'Pureit Copper+ RO',
    'Pureit Advanced Plus RO',
    'Pureit Germkill Kit (GKK) Replacement',
    'Other Pureit Purifier Model',
  ],
  'aosmith-service': [
    'AO Smith Z8 Hot & Normal RO',
    'AO Smith Z9 Green Series RO',
    'AO Smith X8 Dual Filter RO',
    'AO Smith ProPlanet RO',
    'AO Smith Elegance / Pro RO',
    'Other AO Smith Purifier Model',
  ],
  'lg-service': [
    'LG PuriCare Stainless Steel Tank RO',
    'LG WW180EP / WW182EP RO',
    'LG Dual Protection RO+UV',
    'LG Water Purifier Filter Change',
    'Other LG Purifier Model',
  ],
};

export const BrandPage: React.FC<BrandPageProps> = ({ route }) => {
  const brandKey = route.replace('/', '');
  const brand = BRAND_PAGES_DATA[brandKey] || BRAND_PAGES_DATA['kent-service'];

  const productOptions = BRAND_PRODUCT_OPTIONS[brandKey] || [
    `${brand.name} RO Water Purifier`,
    `${brand.name} RO+UV+UF System`,
    `${brand.name} Filter Kit Replacement`,
    `${brand.name} General Service & AMC`,
    `Other ${brand.name} Model`,
  ];

  // Lead Form State
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    pinCode: '',
    selectedProduct: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    const cleanMobile = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanMobile) {
      newErrors.mobileNumber = 'Please enter mobile number';
    } else if (cleanMobile.length !== 10) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    } else if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      newErrors.mobileNumber = 'Mobile number should start with 6, 7, 8, or 9';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const endpoint = `https://formsubmit.co/ajax/${BUSINESS_DETAILS.formSubmitEmail}`;
      const payload = new FormData();
      payload.append('fullName', formData.fullName);
      payload.append('mobileNumber', formData.mobileNumber);
      payload.append('pinCode', formData.pinCode || 'Bangalore');
      payload.append('selectedBrand', brand.name);
      payload.append('selectedProduct', formData.selectedProduct || `${brand.name} RO Service`);
      payload.append('sourcePage', `${brand.name} Service Page`);
      payload.append('_subject', `New ${brand.name} Appointment: ${formData.fullName} - ${formData.mobileNumber}`);
      payload.append('_captcha', 'false');
      payload.append('_template', 'table');

      await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      });

      setIsSuccess(true);
      setFormData({
        fullName: '',
        mobileNumber: '',
        pinCode: '',
        selectedProduct: '',
      });
    } catch (err) {
      console.warn('Form submission fallback:', err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Ro Water Purifier Services
            </h1>
            <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed font-normal drop-shadow-sm">
              Ro Service Center online is your trusted partner for comprehensive {brand.name} water purifier services. From installation to maintenance and repairs, we ensure your {brand.name} purifier delivers pure, healthy water.
            </p>
          </div>

          {/* 2. BRAND LOGO CARD (Even Bigger) */}
          <div className="bg-black rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-700/80 shadow-2xl flex items-center justify-center">
            {brand.logoUrl ? (
              <img
                src={brand.logoUrl}
                alt={`${brand.name} Mineral RO Water Purifiers`}
                width="480"
                height="220"
                className="max-h-40 sm:max-h-52 md:max-h-60 w-auto max-w-[95%] sm:max-w-[90%] object-contain mx-auto rounded-lg shadow-sm"
                loading="eager"
                decoding="async"
              />
            ) : (
              <span className="text-4xl sm:text-5xl font-black tracking-wider text-white py-8">
                {brand.name.toUpperCase()}
              </span>
            )}
          </div>

          {/* 3. BOOKING FORM CARD */}
          <div id="lead-form" className="bg-[#c2cbde] text-slate-900 rounded-3xl p-5 sm:p-7 shadow-2xl border border-white/50">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f2444] text-center mb-5">
              Book Appointment Today
            </h2>

            {isSuccess ? (
              <div className="py-6 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-xs">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Appointment Booked!</h3>
                  <p className="text-sm text-slate-600 mt-1 max-w-xs mx-auto">
                    Thank you! Our {brand.name} service technician will contact you shortly for dispatch.
                  </p>
                </div>
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={`tel:${BUSINESS_DETAILS.phone}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0c54a0] hover:bg-blue-800 text-white font-bold text-sm shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    Call {BUSINESS_DETAILS.phone}
                  </a>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-xs text-slate-600 hover:text-slate-900 py-1 underline font-medium"
                  >
                    Book another appointment
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
                {/* Your Full Name */}
                <div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, fullName: e.target.value }));
                      if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
                    }}
                    placeholder="Your Full Name"
                    className={`w-full px-4 py-3 sm:py-3.5 text-sm bg-white border rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all shadow-2xs ${
                      errors.fullName ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-200 focus:border-blue-400'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-red-600 mt-1 font-medium ml-1">{errors.fullName}</p>}
                </div>

                {/* Mobile Number */}
                <div>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    maxLength={10}
                    value={formData.mobileNumber}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      setFormData((prev) => ({ ...prev, mobileNumber: val }));
                      if (errors.mobileNumber) setErrors((prev) => ({ ...prev, mobileNumber: '' }));
                    }}
                    placeholder="Mobile Number"
                    className={`w-full px-4 py-3 sm:py-3.5 text-sm bg-white border rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all shadow-2xs ${
                      errors.mobileNumber ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-200 focus:border-blue-400'
                    }`}
                  />
                  {errors.mobileNumber && <p className="text-xs text-red-600 mt-1 font-medium ml-1">{errors.mobileNumber}</p>}
                </div>

                {/* PinCode */}
                <div>
                  <input
                    type="text"
                    id="pinCode"
                    name="pinCode"
                    maxLength={6}
                    value={formData.pinCode}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      setFormData((prev) => ({ ...prev, pinCode: val }));
                    }}
                    placeholder="PinCode"
                    className="w-full px-4 py-3 sm:py-3.5 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all shadow-2xs"
                  />
                </div>

                {/* Select Product */}
                <div className="relative">
                  <select
                    id="selectedProduct"
                    name="selectedProduct"
                    value={formData.selectedProduct}
                    onChange={(e) => setFormData((prev) => ({ ...prev, selectedProduct: e.target.value }))}
                    className="w-full px-4 py-3 sm:py-3.5 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all appearance-none cursor-pointer shadow-2xs font-medium"
                  >
                    <option value="" className="text-slate-400">Select Product</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt} className="text-slate-900">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-slate-500">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Book Service Now Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 py-3.5 px-6 rounded-xl bg-[#8ec5fc] hover:bg-[#74b4f5] text-[#0f2444] font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#0f2444]" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Book Service Now</span>
                  )}
                </button>
              </form>
            )}
          </div>

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
