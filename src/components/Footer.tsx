import React from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/content';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  currentRoute?: PageRoute;
  lastBrandRoute?: PageRoute | null;
}

interface BrandFooterStyle {
  bg: string;
  badgeAccent: string;
}

const BRAND_FOOTER_CONFIGS: Record<string, BrandFooterStyle> = {
  '/lg-service': {
    bg: '#A50034',
    badgeAccent: '#FCA5A5',
  },
  '/aq-service': {
    bg: '#0072BC',
    badgeAccent: '#7DD3FC',
  },
  '/pt-service': {
    bg: '#2B2A6B',
    badgeAccent: '#4CA6DE',
  },
  '/ao-service': {
    bg: '#00843D',
    badgeAccent: '#6EE7B7',
  },
  '/kt-service': {
    bg: '#1B3F8C',
    badgeAccent: '#F472B6',
  },
};

export const Footer: React.FC<FooterProps> = ({ onNavigate, currentRoute = '/', lastBrandRoute }) => {
  const activeRouteForBrand = (currentRoute && currentRoute.endsWith('-service'))
    ? currentRoute
    : (currentRoute !== '/' && lastBrandRoute ? lastBrandRoute : null);

  const brandConfig = activeRouteForBrand ? BRAND_FOOTER_CONFIGS[activeRouteForBrand] : undefined;
  const bgStyle = brandConfig?.bg || '#0c54a0';
  const badgeAccent = brandConfig?.badgeAccent || '#7dd3fc';

  return (
    <footer style={{ backgroundColor: bgStyle }} className="text-blue-100 pt-16 pb-24 md:pb-16 border-t border-white/10 transition-colors duration-300">
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
                <div className="flex items-center gap-1 font-['Outfit'] font-black text-xl sm:text-2xl tracking-tight leading-none text-white">
                  <span style={{ color: badgeAccent }}>RO</span>
                  <span className="text-white font-extrabold">-service</span>
                  <span className="ml-0.5 bg-white/20 border border-white/30 text-white text-[10px] sm:text-[11px] font-black px-1.5 py-0.5 rounded-md shadow-xs tracking-wider inline-block transform -translate-y-0.5 uppercase">
                    24x7
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-white/80 tracking-wider uppercase mt-0.5 block font-['Plus_Jakarta_Sans']">
                  Water Purifier Experts
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Bangalore's trusted independent water purifier repair, filter replacement, installation, and AMC service center. Servicing all major RO brands with doorstep technicians.
            </p>

            <div className="flex items-center gap-2 text-xs text-white font-semibold pt-1">
              <Clock className="w-4 h-4" />
              <span>{BUSINESS_DETAILS.workingHours}</span>
            </div>
          </div>

          {/* Column 2: Policy Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/20 pb-2">
              Legal & Policies
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/privacy-policy')}
                  className="text-white/85 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/terms-of-service')}
                  className="text-white/85 hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/refund-policy')}
                  className="text-white/85 hover:text-white transition-colors"
                >
                  Refund & Return Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/disclaimer')}
                  className="text-white/85 hover:text-white transition-colors"
                >
                  Disclaimer & Affiliation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/cookie-policy')}
                  className="text-white/85 hover:text-white transition-colors"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/20 pb-2">
              Contact & Location
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5 text-white/90">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>{BUSINESS_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/90">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a href={`tel:${BUSINESS_DETAILS.phone}`} className="hover:text-white transition-colors font-bold">
                  {BUSINESS_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/90">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a href={`mailto:${BUSINESS_DETAILS.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_DETAILS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {BUSINESS_DETAILS.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('/')} className="hover:text-white">
              Home
            </button>
            <button onClick={() => onNavigate('/privacy-policy')} className="hover:text-white">
              Privacy
            </button>
            <button onClick={() => onNavigate('/terms-of-service')} className="hover:text-white">
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
