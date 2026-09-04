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

  const subdomain = brand.id;
  const canonicalUrl = subdomain
    ? `https://${subdomain}.roservice24x7.in`
    : `https://www.roservice24x7.in/${brandKey}`;

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
      title: `${brand.name} RO Water Purifier Repair & Service`,
      description: `Complete troubleshooting and repair for power, leakage, and thermostat issues.`,
    },
    {
      title: `${brand.name} RO Water Purifier Repair`,
      description: `Fix purification problems, filter issues, low flow, and error indicators.`,
    },
    {
      title: 'Installation & Uninstallation Support',
      description: `Safe and professional installation or removal of ${brand.name} RO appliances.`,
    },
    {
      title: 'Annual Maintenance Contracts (AMC)',
      description: `Affordable AMC plans for regular servicing and preventive maintenance.`,
    },
    {
      title: 'Genuine Spare Parts Replacement',
      description: `Only high-quality and compatible spare parts used for long-term reliability.`,
    },
  ];

  const brandProblems = [
    'Water purifier not purifying water properly',
    'RO machine leakage, power failure, or tripping issues',
    `${brand.name} RO not purifying water effectively`,
    'Low water flow or slow dispensing from RO purifier',
    'Error lights, warning indicators, or unusual noise',
  ];

  const whyChoosePoints = [
    {
      title: 'Experienced & Verified Technicians',
      description: `Skilled professionals trained to handle all ${brand.name} RO models.`,
    },
    {
      title: 'Same-Day Doorstep Service',
      description: `Fast response and quick service at your location.`,
    },
    {
      title: 'Affordable & Transparent Pricing',
      description: 'No hidden charges, clear cost estimates.',
    },
    {
      title: `Support for All ${brand.name} RO Models`,
      description: `Old and new water purifiers and RO systems covered.`,
    },
    {
      title: 'Customer Satisfaction Guaranteed',
      description: 'Quality service you can trust.',
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
            <div className="animate-slideInLeft">
              {/* 1. TEXT ON TOP */}
              <div className="text-left">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight leading-tight drop-shadow-md">
                  RO {brand.name} Water Purifier Service
                </h1>
                <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed font-normal drop-shadow-sm">
                  Expert {brand.name} RO water purifier repair, filter replacement, and maintenance services across Bangalore. Our certified technicians provide fast 60-90 minute doorstep service using 100% genuine spare parts, ensuring safe, pure, and healthy drinking water for your family.
                </p>
              </div>

              {/* 2. BRAND LOGO CARD */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-100 shadow-2xl flex items-center justify-center overflow-hidden min-h-[140px] sm:min-h-[170px] mt-6">
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
              <div className="mt-6">
                <LeadForm preselectedBrand={brand.name} hideBrandSelector={true} sourcePage={`${brand.name} Brand Page`} />
              </div>

              {/* 4. SHOWCASE IMAGE RIGHT BELOW THE BOOKING FORM */}
              {brand.showcaseImage && (
                <div className="pt-8 sm:pt-10 flex items-center justify-center">
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

        {/* BOOK SERVICE TODAY CTA */}
        <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1d63d8] mb-4">
              Book {brand.name} RO Service Today
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get fast, dependable, and professional {brand.name} RO repair service at your doorstep. Our support team is ready to assist you with quick booking and immediate service scheduling.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl px-6 py-4 flex items-center gap-3 w-full sm:w-auto justify-center">
                <span className="text-2xl">📞</span>
                <span className="text-slate-800 font-semibold">Call Now for {brand.name} RO Service Support</span>
              </div>
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl px-6 py-4 flex items-center gap-3 w-full sm:w-auto justify-center">
                <span className="text-2xl">⏱</span>
                <span className="text-slate-800 font-semibold">Same-Day Service Available</span>
              </div>
            </div>

            <div className="bg-white border border-[#1d63d8]/20 shadow-md rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Need More Help?</h3>
              <p className="text-slate-600 text-sm sm:text-base">
                Connect instantly with our dedicated support team for service requests, pricing details, or technical assistance
              </p>
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
