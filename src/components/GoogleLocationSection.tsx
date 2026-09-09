'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation, ShieldCheck } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/src/data/content';

export const GoogleLocationSection: React.FC = () => {
  return (
    <section id="location-section" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-700" />
            <span>Service Centre Location • Jaipur</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Our Service Centre in <span className="text-[#0c54a0]">Mansarovar, Jaipur</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Visit our local service centre or book instant doorstep technician service across all Jaipur localities within 60–90 minutes.
          </p>
        </div>

        {/* Map & Address Grid */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Map Embed (7 cols on lg) */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] bg-slate-100 flex items-stretch">
            <iframe
              src={BUSINESS_DETAILS.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ro-service centre Google Maps Location in Mansarovar Jaipur"
              className="w-full h-full"
            />
          </div>

          {/* Business Location Details (5 cols on lg) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/70 w-fit px-3 py-1 rounded-full mb-4">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Google Business Profile</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {BUSINESS_DETAILS.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                Water Purifier Repair, Maintenance &amp; Genuine Spares
              </p>

              <div className="mt-6 space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0c54a0] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase text-slate-400 tracking-wider">Address</span>
                    <p className="text-slate-700 font-medium leading-snug mt-0.5">
                      {BUSINESS_DETAILS.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0c54a0] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase text-slate-400 tracking-wider">Helpline &amp; Booking</span>
                    <a
                      href={`tel:${BUSINESS_DETAILS.phone}`}
                      className="text-[#0c54a0] font-bold text-base hover:underline block mt-0.5"
                    >
                      {BUSINESS_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0c54a0] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase text-slate-400 tracking-wider">Email</span>
                    <a
                      href={`mailto:${BUSINESS_DETAILS.email}`}
                      className="text-slate-700 hover:text-[#0c54a0] font-medium break-all block mt-0.5"
                    >
                      {BUSINESS_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0c54a0] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase text-slate-400 tracking-wider">Working Hours</span>
                    <p className="text-slate-700 font-medium mt-0.5">
                      {BUSINESS_DETAILS.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 rounded-xl bg-[#0c54a0] hover:bg-[#09417d] text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                className="flex-1 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call Technician</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
