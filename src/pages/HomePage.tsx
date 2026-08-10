import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_DETAILS, HOMEPAGE_FAQS } from '../data/content';
import { LeadForm } from '../components/LeadForm';
import { ServicesGrid } from '../components/ServicesGrid';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { BrandsGrid } from '../components/BrandsGrid';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { Testimonials } from '../components/Testimonials';
import { FAQAccordion } from '../components/FAQAccordion';
import { PageRoute } from '../types';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#f4f7f9] font-sans">
      
      {/* HERO SECTION */}
      <section className="relative text-white pt-12 pb-24 sm:pt-16 sm:pb-32 lg:pt-20 lg:pb-36 overflow-hidden bg-slate-950">
        
        {/* Background Video (16:9 Cloudinary video, auto-compressed with q_auto,f_auto,vc_auto) */}
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

        {/* Lighter Liquid Glass Overlay Gradient for Vapour-Clear Video & High Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-[#0c54a0]/35 to-slate-900/60 backdrop-blur-[0.5px] z-[1]"></div>

        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
          <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-blue-600/15 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-cyan-500/15 blur-3xl" />
        </div>

        <div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h1 
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-2 sm:mb-3 drop-shadow-lg"
          >
            Doorstep RO Water Purifier
            <span className="block mt-1 bg-gradient-to-r from-sky-300 via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              Repair & Service in Bangalore
            </span>
          </h1>

          <p 
            className="text-sm sm:text-base font-semibold mb-5 sm:mb-6 text-blue-100 drop-shadow max-w-lg mx-auto"
          >
            Fast, Reliable, Affordable doorstep service in Bangalore
          </p>

          {/* Action Buttons */}
          <div 
            className="flex flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-sm mx-auto mb-10 sm:mb-14"
          >
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="flex-1 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white text-[#1a1a1a] font-bold text-xs sm:text-sm shadow-lg hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 border border-transparent whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0c54a0]" />
              <span>Call Now</span>
            </a>
            <button
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex-1 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#0c54a0] hover:bg-[#0a4685] text-white font-bold text-xs sm:text-sm shadow-lg hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            >
              Book Service
            </button>
          </div>

        </div>
        
        {/* Soft bottom gradient cutout blending into page */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f4f7f9] via-[#f4f7f9]/60 to-transparent pointer-events-none"></div>
      </section>

      {/* LEAD FORM SECTION */}
      <section 
        className="relative z-20 -mt-12 sm:-mt-16 lg:-mt-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto mb-16"
      >
        <LeadForm sourcePage="Homepage Hero" hideServiceSelector={true} />
      </section>

      {/* OUR SERVICES SECTION */}
      <div>
        <ServicesGrid />
      </div>

      {/* WHY CHOOSE US */}
      <div>
        <WhyChooseUs />
      </div>

      {/* PROCESS / HOW IT WORKS */}
      <div>
        <ProcessTimeline />
      </div>

      {/* TESTIMONIALS */}
      <div>
        <Testimonials />
      </div>

      {/* FAQ SECTION */}
      <section 
        className="py-16 sm:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={HOMEPAGE_FAQS} />
        </div>
      </section>

      {/* MSME CERTIFIED BADGE (Just above footer) */}
      <section 
        className="py-12 bg-slate-50/80 border-t border-slate-200/80"
      >
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
                className="h-20 sm:h-24 w-auto object-contain max-w-full drop-shadow-sm"
              />
            </div>

            <div className="flex-1 flex flex-col items-center sm:items-start">
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1">
                MSME Certified Water Purifier Service
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-500 mb-3 max-w-lg">
                Officially recognized government enterprise for trusted doorstep water purifier repair, maintenance & filter replacement in Bangalore.
              </p>

              <div className="inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 bg-slate-900 text-white text-xs sm:text-sm font-extrabold px-4 py-2 rounded-xl shadow-xs border border-slate-800">
                <span className="text-slate-300 font-medium text-[11px] uppercase tracking-wider">MSME Registration No:</span>
                <span className="text-amber-300 font-mono tracking-wider font-extrabold">UDYAM-KR-03-0561611</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
