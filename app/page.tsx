import type { Metadata } from 'next';
import { Phone, Star, ShieldCheck, Clock, Award, Wrench, CheckCircle2, Droplets, Zap } from 'lucide-react';
import { BUSINESS_DETAILS, HOMEPAGE_FAQS, JAIPUR_LOCALITIES, SERVICES_LIST } from '@/src/data/content';
import { LeadForm } from '@/src/components/LeadForm';
import { FAQAccordion } from '@/src/components/FAQAccordion';
import { GoogleReviewsSection } from '@/src/components/GoogleReviewsSection';
import { GoogleLocationSection } from '@/src/components/GoogleLocationSection';

export const metadata: Metadata = {
  title: 'ro-service centre | Best RO Water Purifier Repair & Service Jaipur | Call 08440970923',
  description:
    'Fastest 60–90 min doorstep RO water purifier repair, filter replacement, AMC & installation service in Jaipur. Expert technicians in Mansarovar, Ganpati Nagar & across Jaipur. Call 08440970923.',
  alternates: {
    canonical: 'https://www.ro-servicecentre.in',
  },
  openGraph: {
    title: 'ro-service centre | Best RO Water Purifier Repair & Maintenance Jaipur',
    description: 'Fastest 60–90 min doorstep RO water purifier repair, filter replacement & AMC in Mansarovar, Jaipur.',
    url: 'https://www.ro-servicecentre.in',
    type: 'website',
  },
};

export default function HomePage() {
  const homeServices = [
    {
      title: 'RO Water Purifier Repair & Service',
      description: 'Complete troubleshooting and repair for power issues, water leakage, low flow, and pump failure in Jaipur.',
    },
    {
      title: 'Water Purifier Filter Replacement',
      description: 'Genuine sediment cartridge, activated carbon, and high-TDS rejection RO membrane replacement.',
    },
    {
      title: 'Installation & Uninstallation Support',
      description: 'Safe and professional wall-mount installation, dismantling, or relocation of all RO brands.',
    },
    {
      title: 'Annual Maintenance Contracts (AMC)',
      description: 'Affordable AMC plans for scheduled preventive servicing, free filter checkups, and zero breakdown labor.',
    },
    {
      title: 'Genuine Spare Parts Replacement',
      description: 'High-quality booster pumps, tested SMPS adapters, solenoid valves, and food-grade silicone tubing.',
    },
  ];

  const homeProblems = [
    'Water purifier not purifying or dispensing water properly',
    'RO machine water leakage from bottom, pipes, or connectors',
    'Low water flow or very slow storage tank refilling in high-TDS Jaipur water',
    'Foul smell, bitter taste, or high TDS reading in purified water',
    'Continuous beeping alert, red error lights, or loud booster pump buzzing',
  ];

  const whyChoosePoints = [
    {
      title: 'Experienced & Verified Technicians',
      description: 'Skilled professionals trained to service Kent, Aquaguard, Pureit, AO Smith, and all RO models.',
    },
    {
      title: 'Same-Day Doorstep Service in Jaipur',
      description: 'Fast 60-90 minute doorstep arrival across Mansarovar, Ganpati Nagar, and all Jaipur localities.',
    },
    {
      title: 'Support for All RO Models & Brands',
      description: 'Complete repair and maintenance for old, new, and commercial water purification systems.',
    },
    {
      title: 'Customer Satisfaction Guaranteed',
      description: '5.0 Star rated service on Google Maps with 30-day labor warranty on all repairs.',
    },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: BUSINESS_DETAILS.name,
      image: BUSINESS_DETAILS.logoUrl,
      telephone: `+91${BUSINESS_DETAILS.phone}`,
      email: BUSINESS_DETAILS.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_DETAILS.streetAddress,
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        postalCode: '302029',
        addressCountry: 'IN',
      },
      hasMap: BUSINESS_DETAILS.googleMapsUrl,
      areaServed: JAIPUR_LOCALITIES.map((loc) => ({
        '@type': 'Place',
        name: `${loc}, Jaipur`,
      })),
      priceRange: '₹299 - ₹3500',
      description: 'Doorstep RO water purifier repair, filter replacement, membrane overhaul and AMC service across Mansarovar and Jaipur.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: HOMEPAGE_FAQS.map((faq) => ({
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
        {/* HERO SECTION */}
        <section className="relative text-white pt-8 pb-20 sm:pt-12 sm:pb-28 lg:pt-16 lg:pb-32 overflow-hidden bg-slate-950">
          
          {/* Background Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="metadata"
            width="1920"
            height="1080"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0 opacity-90 scale-[1.2] sm:scale-[1.02] transition-transform duration-700"
          >
            <source 
              src="https://res.cloudinary.com/dieq3fjuv/video/upload/q_auto,f_auto,vc_auto/v1785923677/gemini_generated_video_7cd6567a_rscxlq.mp4" 
              type="video/mp4" 
            />
          </video>

          {/* Video Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-[#0c54a0]/35 to-slate-900/60 backdrop-blur-[0.5px] z-[1]"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="animate-slideInLeft">
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-2 sm:mb-3 drop-shadow-lg">
                Doorstep RO Water Purifier
                <span className="block mt-1 bg-gradient-to-r from-sky-300 via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  Repair &amp; Service in Jaipur
                </span>
              </h1>

              <p className="text-sm sm:text-base font-semibold mb-5 sm:mb-6 text-blue-100 drop-shadow max-w-lg mx-auto">
                Fast, Reliable, Affordable doorstep service across Jaipur (60–90 mins)
              </p>

              {/* Action Buttons */}
              <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-sm mx-auto mb-8 sm:mb-12">
                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white text-[#1a1a1a] font-bold text-xs sm:text-sm shadow-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-[#0c54a0]" />
                  <span>Call Now</span>
                </a>
                <a
                  href="#lead-form"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#0c54a0] hover:bg-[#09417d] text-white font-bold text-xs sm:text-sm shadow-lg transition-all text-center whitespace-nowrap flex items-center justify-center"
                >
                  Book Service
                </a>
              </div>
            </div>
          </div>
          
          {/* Soft bottom gradient cutout */}
          <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </section>

        {/* LEAD FORM SECTION */}
        <section id="lead-form" className="relative z-20 -mt-12 sm:-mt-16 lg:-mt-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto mb-12 animate-slideInLeft" style={{ animationDelay: '0.1s' }}>
          <LeadForm sourcePage="Homepage Hero" />
        </section>

        {/* SECTION 1: OUR RO SERVICES */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c54a0] mb-8">
              Our RO Water Purifier Services in Jaipur
            </h2>

            <div className="space-y-6 text-slate-700">
              {homeServices.map((service, idx) => (
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

        {/* SECTION 2: COMMON RO PROBLEMS WE FIX */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c54a0] mb-8 leading-snug">
              Common RO Problems We Fix
            </h2>

            <div className="space-y-4 text-slate-700">
              {homeProblems.map((problem, idx) => (
                <p key={idx} className="text-base sm:text-lg text-slate-600 font-medium">
                  {problem}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY CHOOSE US */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c54a0] mb-8">
              Why Choose ro-service centre<br className="hidden sm:inline" /> in Jaipur?
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
        <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c54a0] mb-4">
              Book RO Service in Jaipur Today
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get fast, dependable, and professional RO repair service at your doorstep in Mansarovar, Ganpati Nagar, and all Jaipur areas. Our support team is ready to assist you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a 
                href={`tel:${BUSINESS_DETAILS.phone}`}
                className="bg-slate-50 hover:bg-slate-100 border border-slate-200 shadow-sm rounded-xl px-6 py-4 flex items-center gap-3 w-full sm:w-auto justify-center transition-colors"
              >
                <span className="text-2xl">📞</span>
                <span className="text-slate-800 font-semibold">Call {BUSINESS_DETAILS.phone} for RO Support</span>
              </a>
              <div className="bg-slate-50 border border-slate-200 shadow-sm rounded-xl px-6 py-4 flex items-center gap-3 w-full sm:w-auto justify-center">
                <span className="text-2xl">⏱</span>
                <span className="text-slate-800 font-semibold">60–90 Min Same-Day Dispatch</span>
              </div>
            </div>

            <div className="bg-slate-50 border border-[#0c54a0]/20 shadow-md rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Need Immediate RO Repair?</h3>
              <p className="text-slate-600 text-sm sm:text-base">
                Call our direct helpline at <strong className="text-slate-900 font-bold">{BUSINESS_DETAILS.phone}</strong> for quick technician dispatch to your home or office in Jaipur.
              </p>
            </div>
          </div>
        </section>

        {/* GOOGLE REVIEWS SECTION */}
        <GoogleReviewsSection />

        {/* GOOGLE MAPS LOCATION & SERVICE CENTRE EMBED */}
        <GoogleLocationSection />

        {/* FAQ SECTION */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQAccordion faqs={HOMEPAGE_FAQS} brandColor="#0c54a0" />
          </div>
        </section>

      </div>
    </>
  );
}
