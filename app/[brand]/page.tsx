import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BRAND_PAGES_DATA, BUSINESS_DETAILS } from '@/src/data/content';
import { getBrandTheme } from '@/src/utils/brandTheme';
import { LeadForm } from '@/src/components/LeadForm';
import { FAQAccordion } from '@/src/components/FAQAccordion';
import { PageRoute } from '@/src/types';

interface PageProps {
  params: Promise<{ brand: string }>;
}

export async function generateStaticParams() {
  return Object.keys(BRAND_PAGES_DATA).map((brandKey) => ({
    brand: brandKey,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { brand: brandKey } = await params;
  const brand = BRAND_PAGES_DATA[brandKey];
  if (!brand) return {};

  const canonicalUrl = `https://www.roservicecentre24x7.in/${brandKey}`;

  return {
    title: brand.metaTitle,
    description: brand.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: brand.metaTitle,
      description: brand.metaDescription,
      url: canonicalUrl,
      type: 'website',
      images: brand.heroImage ? [{ url: brand.heroImage }] : [],
    },
  };
}

export default async function BrandPage({ params }: PageProps) {
  const { brand: brandKey } = await params;
  const brand = BRAND_PAGES_DATA[brandKey];

  if (!brand) {
    notFound();
  }

  const brandRoute = `/${brandKey}` as PageRoute;
  const brandTheme = getBrandTheme(brandRoute);

  const brandServices = [
    {
      title: `Dedicated ${brand.name} RO Diagnostic & Repair`,
      description: `Comprehensive on-site troubleshooting for electrical faults, pump pressure drop, beeping alarms, and leakage in all ${brand.name} systems.`,
    },
    {
      title: `Original ${brand.name} Filter & Membrane Replacement`,
      description: `Installation of authentic sediment pre-filters, carbon blocks, and certified high-TDS rejection RO membranes to restore crisp, sweet water.`,
    },
    {
      title: 'Precision Wall Mounting & Relocation',
      description: `Safe, leak-free wall bracket installation, inlet pressure regulator setup, and damage-free uninstallation for house shifting.`,
    },
    {
      title: `${brand.name} Annual Maintenance Contract (AMC)`,
      description: `Yearly protection plans including scheduled preventive checkups, routine filter changes, deep sanitization, and unlimited breakdown visits.`,
    },
    {
      title: '100% Genuine Spare Parts & Electronics',
      description: `Installation of authentic booster pumps, SMPS adapters, solenoid valves, and UV lamps with warranty support.`,
    },
  ];

  const brandProblems = brand.commonProblems || [
    'Water leakage from casing, pipe connectors, or solenoid valve',
    `${brand.name} RO not purifying water effectively or high TDS output`,
    'Slow water dispensing flow rate or tank taking hours to fill',
    'Warning buzzer beeping, flashing error lights, or motor vibration',
    'Unpleasant foul smell or bitter taste in purified water',
    'Automatic shut-off sensor failure causing continuous drain water overflow',
  ];

  const whyChoosePoints = [
    {
      title: '60–90 Minutes Doorstep Response',
      description: `Quick technician dispatch across all areas in Bangalore with same-day fix for your ${brand.name} purifier.`,
    },
    {
      title: '100% Genuine Spare Parts & Certified Filters',
      description: `Authentic ${brand.name}-compatible high-density sediment, activated carbon, and high-rejection membranes.`,
    },
    {
      title: 'Upfront & Transparent Quotations',
      description: 'Clear itemized estimate given post inspection with zero hidden charges or surprise travel fees.',
    },
    {
      title: 'Specialized Senior Technicians',
      description: `Seasoned specialists with extensive hands-on expertise across all ${brand.name} models.`,
    },
    {
      title: '30-Day Labor Service Warranty',
      description: 'Complete peace of mind with our 30-day labor guarantee and manufacturer warranties on fitted spares.',
    },
    {
      title: 'Doorstep Service All 7 Days (8 AM – 9 PM)',
      description: 'Available seven days a week, including weekends and public holidays, for easy booking.',
    },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${brand.name} Water Purifier Repair & Service Bangalore`,
      serviceType: 'Water Purifier Repair, Maintenance & Filter Replacement',
      provider: {
        '@type': 'LocalBusiness',
        name: BUSINESS_DETAILS.name,
        telephone: `+91${BUSINESS_DETAILS.phone}`,
      },
      areaServed: {
        '@type': 'City',
        name: 'Bangalore',
      },
      description: brand.metaDescription,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: brand.brandFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white font-sans">
        
        {/* BRAND HERO SECTION */}
        <section className="bg-slate-950 text-white pt-6 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6 relative overflow-hidden">
          {brand.heroImage && (
            <img
              src={brand.heroImage}
              alt={`${brand.name} RO Water Purifier Repair Background`}
              width={1920}
              height={1080}
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-65 sm:opacity-75 scale-100 z-0"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/50 to-slate-950/75 z-0"></div>

          <div className="max-w-md sm:max-w-lg mx-auto space-y-6 relative z-10">
            
            {/* 1. TEXT ON TOP */}
            <div className="text-left">
              <h1 className={`text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight leading-tight drop-shadow-md ${brandKey === 'kent-service' ? 'text-center' : ''}`}>
                {brandKey === 'kent-service' ? 'Kent Service Center' : `${brand.name} Water Purifier Services`}
              </h1>
              <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed font-normal drop-shadow-sm">
                Certified doorstep {brand.name} RO repair, genuine filter replacements &amp; AMC across Bangalore in 60–90 mins. Experienced technicians ensure 100% pure, healthy water with warranty.
              </p>
            </div>

            {/* 2. BRAND LOGO CARD */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-100 shadow-2xl flex items-center justify-center overflow-hidden min-h-[140px] sm:min-h-[170px]">
              {brand.logoUrl ? (
                <img
                  src={brand.logoUrl}
                  alt={`${brand.name} Water Purifiers`}
                  width={520}
                  height={220}
                  className="w-full max-w-[94%] sm:max-w-[88%] max-h-32 sm:max-h-40 md:max-h-44 object-contain mx-auto rounded-xl"
                />
              ) : (
                <span className="text-3xl sm:text-5xl font-black tracking-wider text-slate-900 py-4">
                  {brand.name.toUpperCase()}
                </span>
              )}
            </div>

            {/* 3. BOOKING FORM CARD */}
            <LeadForm preselectedBrand={brand.name} hideBrandSelector={true} sourcePage={`${brand.name} Brand Page`} />

            {/* 4. SHOWCASE IMAGE RIGHT BELOW THE BOOKING FORM */}
            {brand.showcaseImage && (
              <div className="pt-2 sm:pt-4 flex items-center justify-center">
                <img
                  src={brand.showcaseImage}
                  alt={`${brand.name} RO Water Purifier Models`}
                  width={600}
                  height={380}
                  className="w-full max-w-sm sm:max-w-md h-auto object-contain mx-auto drop-shadow-2xl"
                />
              </div>
            )}

          </div>
        </section>

        {/* SECTION 1: OUR BRAND RO SERVICES */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1d63d8] mb-8">
              Our {brand.name} RO Services
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
              Common {brand.name} RO Problems<br className="hidden sm:inline" /> We Fix
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
              Why Choose {brand.name} RO<br className="hidden sm:inline" /> Service Center?
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

        {/* HOW OUR SERVICE WORKS */}
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
                <h3 className="font-bold text-slate-900 text-base mb-1">Diagnosis &amp; Quote</h3>
                <p className="text-sm text-slate-500">Transparent upfront estimate post checkup.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1d63d8] font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  4
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">Instant Repair</h3>
                <p className="text-sm text-slate-500">Fixed with genuine spares &amp; 30-day warranty.</p>
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
              subtitle={`Frequently asked questions about servicing your ${brand.name} RO purifier in Bangalore.`}
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
                  Officially recognized enterprise for trusted doorstep {brand.name} RO repair, maintenance &amp; filter replacement in Bangalore.
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
    </>
  );
}
