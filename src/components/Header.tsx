import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown, Wrench } from 'lucide-react';
import { BUSINESS_DETAILS, BRAND_PAGES_DATA } from '../data/content';
import { PageRoute } from '../types';

interface HeaderProps {
  currentRoute: PageRoute;
  lastBrandRoute?: PageRoute | null;
  onNavigate: (route: PageRoute) => void;
  onOpenBookModal?: () => void;
}

const ANNOUNCEMENTS = [
  "Expert RO Repair & Installation | Doorstep Service Across Bangalore",
  `Call ${BUSINESS_DETAILS.phone} for immediate assistance`,
  "100% Genuine Spare Parts | 30-Day Service Warranty",
  "Fastest RO Service in Bangalore | Book Now"
];

interface BrandHeaderStyle {
  primary: string;
  announcementBg: string;
  phoneBorderColor: string;
  phoneTextColor: string;
}

const BRAND_HEADER_CONFIGS: Record<string, BrandHeaderStyle> = {
  '/lg-service': {
    primary: '#A50034',
    announcementBg: '#A50034',
    phoneBorderColor: '#A50034',
    phoneTextColor: '#A50034',
  },
  '/aquaguard-service': {
    primary: '#0072BC',
    announcementBg: '#0072BC',
    phoneBorderColor: '#0072BC',
    phoneTextColor: '#0072BC',
  },
  '/pureit-service': {
    primary: '#2B2A6B',
    announcementBg: '#2B2A6B',
    phoneBorderColor: '#2B2A6B',
    phoneTextColor: '#2B2A6B',
  },
  '/aosmith-service': {
    primary: '#00843D',
    announcementBg: '#00843D',
    phoneBorderColor: '#00843D',
    phoneTextColor: '#00843D',
  },
  '/kent-service': {
    primary: '#1B3F8C',
    announcementBg: '#1B3F8C',
    phoneBorderColor: '#1B3F8C',
    phoneTextColor: '#1B3F8C',
  },
};

export const Header: React.FC<HeaderProps> = ({ currentRoute, lastBrandRoute, onNavigate, onOpenBookModal }) => {
  const activeRouteForBrand = currentRoute.endsWith('-service')
    ? currentRoute
    : (currentRoute !== '/' && lastBrandRoute ? lastBrandRoute : null);

  const brandConfig = activeRouteForBrand ? BRAND_HEADER_CONFIGS[activeRouteForBrand] : undefined;
  const activeBrandColor = brandConfig?.primary;
  const currentBrandKey = activeRouteForBrand ? activeRouteForBrand.replace(/^\//, '') : '';
  const currentBrandData = currentBrandKey ? BRAND_PAGES_DATA[currentBrandKey] : undefined;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [policiesDropdownOpen, setPoliciesDropdownOpen] = useState(false);
  
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [showHead, setShowHead] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const brandKeys = Object.keys(BRAND_PAGES_DATA);

  // Rotate Announcements
  useEffect(() => {
    const interval = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Hide on scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 1. Hide announcement bar after scrolling past 150px
      if (currentScrollY > 150) {
        setShowAnnouncement(false);
      } else {
        setShowAnnouncement(true);
      }

      // 2. Hide entire header on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setShowHead(false);
      } else {
        setShowHead(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  const handleScrollToForm = () => {
    if (currentRoute === '/') {
      const el = document.getElementById('lead-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (onOpenBookModal) {
        onOpenBookModal();
      }
    } else if (activeRouteForBrand && currentRoute !== activeRouteForBrand) {
      onNavigate(activeRouteForBrand);
      setTimeout(() => {
        const el = document.getElementById('lead-form');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } else {
      const el = document.getElementById('lead-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        onNavigate('/');
        setTimeout(() => {
          const el = document.getElementById('lead-form');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div 
        className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          showHead ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Announcement Bar - Fixed at top, hides when scrolling past hero */}
        <div 
          style={brandConfig ? { backgroundColor: brandConfig.announcementBg } : undefined}
          className={`bg-[#0c54a0]/90 backdrop-blur-md text-white text-[11px] sm:text-xs font-medium px-4 flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out ${
            showAnnouncement ? 'h-[32px] sm:h-[34px] py-1.5 opacity-100' : 'h-0 py-0 opacity-0'
          }`}
        >
          <div key={announcementIndex} className="animate-fadeIn text-center tracking-wide whitespace-nowrap">
            {ANNOUNCEMENTS[announcementIndex]}
          </div>
        </div>

        {/* Main Header - Always fixed with liquid glass frosted effect */}
        <header className="bg-white/80 backdrop-blur-md border-b border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.04)] relative z-40 w-full transition-all duration-300 ease-in-out">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between min-h-[72px] sm:min-h-[88px] py-2">
              
              {/* Logo */}
              <button
                onClick={() => {
                  if (currentRoute === activeRouteForBrand) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else if (activeRouteForBrand) {
                    handleNavClick(activeRouteForBrand);
                  } else {
                    handleNavClick('/');
                  }
                }}
                className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none py-1"
              >
                {currentBrandData?.logoUrl ? (
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <div className="h-10 sm:h-13 bg-white px-2.5 sm:px-3.5 py-1 rounded-xl sm:rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shrink-0">
                      <img
                        src={currentBrandData.logoUrl}
                        alt={`${currentBrandData.name} Logo`}
                        width="140"
                        height="36"
                        loading="eager"
                        decoding="async"
                        className="h-7 sm:h-9 w-auto object-contain max-w-[100px] sm:max-w-[140px] max-h-full"
                      />
                    </div>
                    <div className="flex flex-col shrink-0">
                      <div className="flex items-center gap-0.5 sm:gap-1 font-['Outfit'] font-black text-base sm:text-xl tracking-tight leading-none">
                        <span
                          style={activeBrandColor ? { color: activeBrandColor } : undefined}
                          className={activeBrandColor ? '' : 'bg-gradient-to-r from-[#0c54a0] via-blue-700 to-sky-600 bg-clip-text text-transparent'}
                        >
                          RO
                        </span>
                        <span className="text-slate-800 font-extrabold">-service</span>
                        <span
                          style={activeBrandColor ? { backgroundColor: activeBrandColor } : undefined}
                          className={`text-white text-[9px] sm:text-[10px] font-black px-1.5 py-0.5 rounded-md shadow-xs tracking-wider inline-block transform -translate-y-0.5 uppercase ${
                            activeBrandColor ? '' : 'bg-gradient-to-r from-[#0c54a0] to-teal-600'
                          }`}
                        >
                          24x7
                        </span>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-0.5 block font-['Plus_Jakarta_Sans']">
                        Doorstep Service
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="h-10 sm:h-12 bg-white px-1.5 sm:px-2 py-1 rounded-xl shrink-0 overflow-hidden shadow-xs border border-slate-200/80 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                      <img
                        src={BUSINESS_DETAILS.logoUrl}
                        alt={BUSINESS_DETAILS.name}
                        width="60"
                        height="60"
                        loading="eager"
                        decoding="async"
                        className="h-full w-auto max-w-[120px] object-contain rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1 font-['Outfit'] font-black text-xl sm:text-2xl tracking-tight leading-none">
                        <span
                          style={activeBrandColor ? { color: activeBrandColor } : undefined}
                          className={activeBrandColor ? '' : 'bg-gradient-to-r from-[#0c54a0] via-blue-700 to-sky-600 bg-clip-text text-transparent'}
                        >
                          RO
                        </span>
                        <span className="text-slate-800 font-extrabold">-service</span>
                        <span
                          style={activeBrandColor ? { backgroundColor: activeBrandColor } : undefined}
                          className={`text-white text-[10px] sm:text-[11px] font-black px-1.5 py-0.5 rounded-md shadow-xs tracking-wider inline-block transform -translate-y-0.5 uppercase ${
                            activeBrandColor ? '' : 'bg-gradient-to-r from-[#0c54a0] to-teal-600'
                          }`}
                        >
                          24x7
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 tracking-wider uppercase mt-0.5 block font-['Plus_Jakarta_Sans']">
                        Doorstep RO Service
                      </span>
                    </div>
                  </>
                )}
              </button>

              {/* Desktop Nav Items */}
              <nav className="hidden lg:flex items-center gap-7">
                <button
                  onClick={() => handleNavClick('/')}
                  className={`text-sm font-semibold transition-colors ${
                    currentRoute === '/' ? 'text-[#0c54a0]' : 'text-slate-700 hover:text-[#0c54a0]'
                  }`}
                >
                  Home
                </button>

                <button
                  onClick={() => {
                    handleNavClick('/');
                    setTimeout(() => {
                      document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-sm font-semibold text-slate-700 hover:text-[#0c54a0] transition-colors"
                >
                  Our Services
                </button>

                <button
                  onClick={() => {
                    handleNavClick('/');
                    setTimeout(() => {
                      document.getElementById('process-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-sm font-semibold text-slate-700 hover:text-[#0c54a0] transition-colors"
                >
                  How It Works
                </button>

                {/* Policies Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setPoliciesDropdownOpen(!policiesDropdownOpen)}
                    onMouseEnter={() => setPoliciesDropdownOpen(true)}
                    className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 ${
                      currentRoute.includes('policy') || currentRoute.includes('terms') || currentRoute.includes('disclaimer') || currentRoute.includes('refund') || currentRoute.includes('cookie') ? 'text-[#0c54a0]' : 'text-slate-700 hover:text-[#0c54a0]'
                    }`}
                  >
                    Policies
                    <ChevronDown className={`w-4 h-4 transition-transform ${policiesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {policiesDropdownOpen && (
                    <div
                      onMouseLeave={() => setPoliciesDropdownOpen(false)}
                      className="absolute top-full right-0 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2.5 z-50 animate-fadeIn"
                    >
                      <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Legal & Policies
                      </div>
                      <button onClick={() => handleNavClick('/privacy-policy')} className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors text-slate-700 hover:text-[#0c54a0]">Privacy Policy</button>
                      <button onClick={() => handleNavClick('/terms-of-service')} className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors text-slate-700 hover:text-[#0c54a0]">Terms of Service</button>
                      <button onClick={() => handleNavClick('/refund-policy')} className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors text-slate-700 hover:text-[#0c54a0]">Refund & Return Policy</button>
                      <button onClick={() => handleNavClick('/disclaimer')} className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors text-slate-700 hover:text-[#0c54a0]">Disclaimer Notice</button>
                      <button onClick={() => handleNavClick('/cookie-policy')} className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors text-slate-700 hover:text-[#0c54a0]">Cookie Policy</button>
                    </div>
                  )}
                </div>
              </nav>

              {/* Desktop Right CTAs */}
              <div className="hidden sm:flex items-center gap-3">
                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  style={activeBrandColor ? { borderColor: activeBrandColor, color: activeBrandColor } : undefined}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-[#0c54a0] text-[#0c54a0] hover:bg-blue-50 text-sm font-bold transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>{BUSINESS_DETAILS.phone}</span>
                </a>
                <button
                  onClick={handleScrollToForm}
                  style={activeBrandColor ? { backgroundColor: activeBrandColor } : undefined}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#1a1a1a] hover:brightness-110 text-white text-sm font-bold shadow-md transition-all"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Book Service</span>
                </button>
              </div>

              {/* Mobile Hamburger Button */}
              <div className="flex sm:hidden items-center gap-3">
                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  style={activeBrandColor ? { color: activeBrandColor } : undefined}
                  className="p-2 rounded-lg text-[#0c54a0] hover:bg-blue-50 transition-colors"
                  aria-label="Call Business"
                >
                  <Phone className="w-6 h-6" />
                </a>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
              </div>

            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="sm:hidden bg-white/90 backdrop-blur-xl border-b border-white/50 px-4 pt-3 pb-6 space-y-3 animate-fadeIn shadow-2xl">
              <button
                onClick={() => handleNavClick('/')}
                className={`w-full text-left py-2.5 px-3 rounded-xl text-base font-medium ${
                  currentRoute === '/' ? 'bg-blue-50 text-[#0c54a0] font-bold' : 'text-slate-800'
                }`}
              >
                Home
              </button>

              <div className="border-t border-slate-100 pt-2 pb-1">
                <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Legal Policies
                </div>
                <button onClick={() => handleNavClick('/privacy-policy')} className="w-full text-left py-2 px-3 text-sm text-slate-700 hover:bg-slate-50 rounded-lg">Privacy Policy</button>
                <button onClick={() => handleNavClick('/terms-of-service')} className="w-full text-left py-2 px-3 text-sm text-slate-700 hover:bg-slate-50 rounded-lg">Terms of Service</button>
                <button onClick={() => handleNavClick('/refund-policy')} className="w-full text-left py-2 px-3 text-sm text-slate-700 hover:bg-slate-50 rounded-lg">Refund & Return Policy</button>
                <button onClick={() => handleNavClick('/disclaimer')} className="w-full text-left py-2 px-3 text-sm text-slate-700 hover:bg-slate-50 rounded-lg">Disclaimer Notice</button>
                <button onClick={() => handleNavClick('/cookie-policy')} className="w-full text-left py-2 px-3 text-sm text-slate-700 hover:bg-slate-50 rounded-lg">Cookie Policy</button>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <button
                  onClick={handleScrollToForm}
                  style={activeBrandColor ? { backgroundColor: activeBrandColor } : undefined}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#1a1a1a] text-white font-bold text-center flex items-center justify-center gap-2 shadow-md hover:brightness-110 transition-all"
                >
                  <Wrench className="w-5 h-5" />
                  Book RO Service
                </button>
                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  style={activeBrandColor ? { borderColor: activeBrandColor, color: activeBrandColor } : undefined}
                  className="w-full py-3.5 px-4 rounded-xl bg-white border-2 border-[#0c54a0] text-[#0c54a0] font-bold text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call {BUSINESS_DETAILS.phone}
                </a>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Spacer to prevent content from going under the fixed header */}
      {/* We need enough space for both the announcement bar and the header */}
      <div className="h-[96px] sm:h-[114px]"></div>
    </>
  );
};
