import React from 'react';
import { Phone, Star } from 'lucide-react';
import { BUSINESS_DETAILS, HOMEPAGE_FAQS, HOMEPAGE_TESTIMONIALS } from '../data/content';
import { LeadForm } from '../components/LeadForm';
import { FAQAccordion } from '../components/FAQAccordion';
import { PageRoute } from '../types';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate: _onNavigate }) => {
  const homeServices = [
    {
      title: 'RO Water Purifier Repair & Service',
      description: 'Complete troubleshooting and repair for power, leakage, and motor issues.',
    },
    {
      title: 'RO Membrane & Filter Replacement',
      description: 'Fix purification problems, filter issues, low flow, and error indicators.',
    },
    {
      title: 'Installation & Uninstallation Support',
      description: 'Safe and professional installation or removal of all RO water purifier appliances.',
    },
    {
      title: 'Annual Maintenance Contracts (AMC)',
      description: 'Affordable AMC plans for regular servicing and preventive maintenance.',
    },
    {
      title: 'Genuine Spare Parts Replacement',
      description: 'Only high-quality and compatible spare parts used for long-term reliability.',
    },
    {
      title: 'UV / UF & Alkaline System Servicing',
      description: 'Disinfection lamp inspection, quartz cleaning, and mineral cartridge restoration.',
    },
  ];

  const homeProblems = [
    'Water leakage from pipes, filter housing, or purifier body',
    'RO not purifying water effectively or high TDS output',
    'Low water flow or slow dispensing from storage tank',
    'Error lights, warning beeps, or unusual vibrating noise',
    'Foul smell, chemical odor, or bad taste in purified water',
    'RO auto-cut not working or pump continuously running',
  ];

  const whyChoosePoints = [
    {
      title: '60–90 Minutes Fast Doorstep Service',
      description: 'Rapid technician dispatch across all localities in Bangalore with same-day fix.',
    },
    {
      title: '100% Genuine Spare Parts & Authentic Filters',
      description: 'Original high-density sediment, carbon blocks, and certified high-rejection RO membranes.',
    },
    {
      title: 'Transparent & Fixed Pricing',
      description: 'Upfront estimate post inspection with zero hidden charges or extra travel fees.',
    },
    {
      title: 'Certified Senior Technicians',
      description: 'Background-verified technicians with years of hands-on expertise across all major brands.',
    },
    {
      title: '30-Day Labor Service Warranty',
      description: 'Full warranty coverage on labor and up to 1-year replacement warranty on major spare parts.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <section className="relative text-white pt-12 pb-24 sm:pt-16 sm:pb-32 lg:pt-20 lg:pb-36 overflow-hidden bg-slate-950">
        
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
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-2 sm:mb-3 drop-shadow-lg">
            Doorstep RO Water Purifier
            <span className="block mt-1 bg-gradient-to-r from-sky-300 via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              Repair & Service in Bangalore
            </span>
          </h1>

          <p className="text-sm sm:text-base font-semibold mb-5 sm:mb-6 text-blue-100 drop-shadow max-w-lg mx-auto">
            Fast, Reliable, Affordable doorstep service across Bangalore (60–90 mins)
          </p>

          {/* Action Buttons */}
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-sm mx-auto mb-8 sm:mb-12">
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-[#1a1a1a] font-bold text-xs sm:text-sm shadow-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#1d63d8]" />
              <span>Call Now</span>
            </a>
            <button
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex-1 px-4 py-2.5 rounded-xl bg-[#1d63d8] hover:bg-[#154db0] text-white font-bold text-xs sm:text-sm shadow-lg transition-all whitespace-nowrap"
            >
              Book Service
            </button>
          </div>
        </div>
        
        {/* Soft bottom gradient cutout */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      {/* LEAD FORM SECTION */}
      <section className="relative z-20 -mt-12 sm:-mt-16 lg:-mt-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto mb-12">
        <LeadForm sourcePage="Homepage Hero" hideServiceSelector={true} />
      </section>

      {/* SECTION 1: OUR RO SERVICES (Simplified clean layout as in reference image) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1d63d8] mb-8">
            Our RO Water Purifier Services
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

      {/* SECTION 2: COMMON RO PROBLEMS WE FIX (Simplified clean layout as in reference image) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1d63d8] mb-8 leading-snug">
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

      {/* SECTION 3: WHY CHOOSE US (Simplified clean layout as in reference image) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1d63d8] mb-8">
            Why Choose RO-service 24x7<br className="hidden sm:inline" /> Service Center?
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
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1d63d8] mb-8">
            How Our Service Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-50 p-6 rounded-2xl shadow-xs border border-slate-200/80">
              <div className="w-10 h-10 rounded-full bg-[#1d63d8] text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Book Online / Call</h3>
              <p className="text-sm text-slate-500">Call us or submit our quick booking form.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow-xs border border-slate-200/80">
              <div className="w-10 h-10 rounded-full bg-[#1d63d8] text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Doorstep Visit</h3>
              <p className="text-sm text-slate-500">Technician reaches you within 60–90 minutes.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow-xs border border-slate-200/80">
              <div className="w-10 h-10 rounded-full bg-[#1d63d8] text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Diagnosis & Quote</h3>
              <p className="text-sm text-slate-500">Transparent upfront estimate post checkup.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow-xs border border-slate-200/80">
              <div className="w-10 h-10 rounded-full bg-[#1d63d8] text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                4
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Instant Repair</h3>
              <p className="text-sm text-slate-500">Fixed with genuine spares & 30-day warranty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIED REVIEWS */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            Customer Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1d63d8] mb-8">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {HOMEPAGE_TESTIMONIALS.slice(0, 3).map((review) => (
              <div 
                key={review.id} 
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed italic mb-4">
                    "{review.comment}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-sm font-bold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.locality} · {review.brandServiced}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={HOMEPAGE_FAQS} brandColor="#1d63d8" />
        </div>
      </section>

      {/* MSME CERTIFIED BADGE */}
      <section className="py-10 bg-slate-50/80">
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
                Officially recognized enterprise for trusted doorstep RO repair, maintenance & filter replacement in Bangalore.
              </p>

              <div className="inline-flex items-center gap-1.5 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs">
                <span className="text-slate-300 font-medium text-[11px]">MSME Reg:</span>
                <span className="text-amber-300 font-mono font-bold">UDYAM-KR-03-0561611</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

