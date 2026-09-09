'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Mail, Clock, ExternalLink } from 'lucide-react';
import { BUSINESS_DETAILS, JAIPUR_LOCALITIES } from '@/src/data/content';
import { PageRoute } from '@/src/types';

interface FooterProps {
  onNavigate?: (route: PageRoute) => void;
  currentRoute?: PageRoute;
  lastBrandRoute?: PageRoute | null;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#0c54a0] text-blue-100 pt-16 pb-24 md:pb-16 border-t border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-11 bg-white px-2 py-0.5 rounded-xl flex items-center justify-center shadow-md overflow-hidden shrink-0">
                <img 
                  src={BUSINESS_DETAILS.logoUrl} 
                  alt={BUSINESS_DETAILS.name}
                  width="80"
                  height="44"
                  loading="lazy"
                  decoding="async" 
                  className="h-full w-auto max-w-[100px] object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center font-['Sora',sans-serif] font-bold text-xl sm:text-2xl tracking-tight leading-none text-white">
                  <span className="text-white font-bold">{BUSINESS_DETAILS.name}</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-sky-200 tracking-wider uppercase mt-1 block font-['Plus_Jakarta_Sans',sans-serif]">
                  Jaipur Water Purifier Experts
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Jaipur's trusted independent water purifier repair, filter replacement, installation, and AMC service center. Servicing Kent, Aquaguard, Pureit, AO Smith, and all major RO brands with doorstep technicians.
            </p>

            <div className="flex items-center gap-2 text-xs text-white font-semibold pt-1">
              <Clock className="w-4 h-4 text-sky-300" />
              <span>{BUSINESS_DETAILS.workingHours}</span>
            </div>
          </div>

          {/* Column 2: Policy Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/20 pb-2">
              Legal &amp; Policies
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-white/60">›</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-white/60">›</span> Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-white/60">›</span> Cancellation &amp; Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-white/60">›</span> Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-white/60">›</span> Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/20 pb-2">
              Jaipur Support &amp; Location
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                <span className="leading-tight text-white/90">
                  {BUSINESS_DETAILS.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-300 shrink-0" />
                <a 
                  href={`tel:${BUSINESS_DETAILS.phone}`} 
                  className="text-white font-bold hover:underline"
                >
                  {BUSINESS_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-300 shrink-0" />
                <a 
                  href={`mailto:${BUSINESS_DETAILS.email}`} 
                  className="hover:text-white break-all transition-colors"
                >
                  {BUSINESS_DETAILS.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={BUSINESS_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  <span>Open on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Localities Tags */}
        <div className="pt-6 border-t border-white/10 mb-8">
          <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-3">
            Doorstep Service Areas Across Jaipur:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {JAIPUR_LOCALITIES.map((loc, idx) => (
              <span 
                key={idx}
                className="text-[11px] bg-white/10 hover:bg-white/20 text-white px-2 py-0.5 rounded transition-colors"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright (MSME REMOVED) */}
        <div className="pt-6 border-t border-white/10 text-center space-y-3">
          <p className="text-[11px] text-white/70 max-w-4xl mx-auto leading-relaxed">
            {BUSINESS_DETAILS.disclaimer}
          </p>
          <p className="text-[11px] text-white/50">
            © {new Date().getFullYear()} {BUSINESS_DETAILS.name} • ISKCON road, Ganpati Nagar, Mansarovar, Jaipur, Rajasthan 302029
          </p>
        </div>

      </div>
    </footer>
  );
};
