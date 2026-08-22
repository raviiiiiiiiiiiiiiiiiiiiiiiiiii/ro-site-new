import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown, Calendar, ShieldCheck } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/content';
import { PageRoute } from '../types';
import { getBrandTheme } from '../utils/brandTheme';

interface HeaderProps {
  currentRoute: PageRoute;
  lastBrandRoute?: PageRoute | null;
  onNavigate: (route: PageRoute) => void;
  onOpenBookModal?: () => void;
}

const ANNOUNCEMENTS = [
  "Fast Doorstep RO Service Across Bangalore in 60–90 Mins",
  `Immediate Assistance: Call ${BUSINESS_DETAILS.phone}`,
  "100% Genuine Filter & Spare Parts Replacement",
  "30-Day Labor Warranty & Transparent Fixed Pricing",
];

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  lastBrandRoute,
  onNavigate,
  onOpenBookModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [policiesDropdownOpen, setPoliciesDropdownOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const brandTheme = getBrandTheme(currentRoute, lastBrandRoute);

  // Rotate Announcements
  useEffect(() => {
    const interval = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Hide / show header on scroll & shadow detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Shadow when scrolled past top
      setIsScrolled(currentScrollY > 10);

      // Don't hide if mobile menu or policies dropdown is open
      if (mobileMenuOpen) {
        setShowHeader(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Always show at top of page
      if (currentScrollY <= 60) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
        // Scrolling DOWN -> hide
        setShowHeader(false);
      } else if (lastScrollY - currentScrollY > 6) {
        // Scrolling UP -> reveal
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setPoliciesDropdownOpen(false);
  };

  const handleScrollToForm = () => {
    if (currentRoute === '/') {
      const el = document.getElementById('lead-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (onOpenBookModal) {
        onOpenBookModal();
      }
    } else {
      onNavigate('/');
      setTimeout(() => {
        const el = document.getElementById('lead-form');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ease-in-out ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled ? 'bg-white shadow-md border-b border-slate-200/80' : 'bg-white border-b border-slate-100'
        }`}
      >
        {/* Top Info Banner with dynamic brand background */}
        <div 
          style={{ backgroundColor: brandTheme.bannerBg }}
          className="text-white text-[11px] sm:text-xs py-1.5 px-4 font-medium tracking-wide transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 mx-auto sm:mx-0 overflow-hidden">
              <ShieldCheck className="w-3.5 h-3.5 text-white/80 shrink-0 hidden sm:inline" />
              <span key={announcementIndex} className="animate-fadeIn truncate text-center">
                {ANNOUNCEMENTS[announcementIndex]}
              </span>
            </div>
            
            <div className="hidden sm:flex items-center gap-4 text-white/90 text-xs">
              <span>Bangalore 24x7 Doorstep</span>
              <span>•</span>
              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                className="font-bold text-white hover:underline flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-white/80" />
                {BUSINESS_DETAILS.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Brand Logo & Name */}
            <button
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-3 text-left focus:outline-none group"
            >
              <div className="h-10 sm:h-12 bg-white px-2 py-1 rounded-xl shrink-0 overflow-hidden border border-slate-200 shadow-xs flex items-center justify-center group-hover:border-slate-400 transition-colors">
                <img
                  src={BUSINESS_DETAILS.logoUrl}
                  alt={BUSINESS_DETAILS.name}
                  width="48"
                  height="48"
                  loading="eager"
                  decoding="async"
                  className="h-full w-auto max-w-[90px] sm:max-w-[110px] object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 font-['Outfit'] font-black text-lg sm:text-2xl tracking-tight text-slate-900 leading-none">
                  <span style={{ color: brandTheme.primary }} className="transition-colors duration-300">
                    RO
                  </span>
                  <span>-service</span>
                  <span 
                    style={{ backgroundColor: brandTheme.badgeBg }}
                    className="text-white text-[9px] sm:text-[11px] font-black px-1.5 py-0.5 rounded shadow-xs tracking-wider uppercase ml-0.5 transition-colors duration-300"
                  >
                    24x7
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 tracking-wider uppercase mt-0.5">
                  Bangalore Service Center
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => handleNavClick('/')}
                style={currentRoute === '/' ? { color: brandTheme.primary } : undefined}
                className={`text-sm font-semibold transition-colors ${
                  currentRoute === '/' ? 'font-bold' : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => {
                  if (currentRoute !== '/') {
                    onNavigate('/');
                    setTimeout(() => {
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }, 100);
                  } else {
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }
                }}
                className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors"
              >
                Services
              </button>

              <button
                onClick={() => handleScrollToForm()}
                className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors"
              >
                Book Doorstep Visit
              </button>

              {/* Policies Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setPoliciesDropdownOpen(!policiesDropdownOpen)}
                  onMouseEnter={() => setPoliciesDropdownOpen(true)}
                  style={
                    currentRoute.includes('policy') ||
                    currentRoute.includes('terms') ||
                    currentRoute.includes('disclaimer') ||
                    currentRoute.includes('refund') ||
                    currentRoute.includes('cookie')
                      ? { color: brandTheme.primary }
                      : undefined
                  }
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 ${
                    currentRoute.includes('policy') ||
                    currentRoute.includes('terms') ||
                    currentRoute.includes('disclaimer') ||
                    currentRoute.includes('refund') ||
                    currentRoute.includes('cookie')
                      ? 'font-bold'
                      : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  Policies
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${policiesDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {policiesDropdownOpen && (
                  <div
                    onMouseLeave={() => setPoliciesDropdownOpen(false)}
                    className="absolute top-full right-0 w-56 bg-white rounded-xl shadow-xl border border-slate-200/90 py-2 z-50 animate-fadeIn"
                  >
                    <div className="px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Company Policies
                    </div>
                    <button
                      onClick={() => handleNavClick('/privacy-policy')}
                      className="w-full text-left px-3.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Privacy Policy
                    </button>
                    <button
                      onClick={() => handleNavClick('/terms-of-service')}
                      className="w-full text-left px-3.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Terms of Service
                    </button>
                    <button
                      onClick={() => handleNavClick('/refund-policy')}
                      className="w-full text-left px-3.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Refund Policy
                    </button>
                    <button
                      onClick={() => handleNavClick('/disclaimer')}
                      className="w-full text-left px-3.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Disclaimer Notice
                    </button>
                    <button
                      onClick={() => handleNavClick('/cookie-policy')}
                      className="w-full text-left px-3.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Cookie Policy
                    </button>
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                style={{
                  backgroundColor: brandTheme.lightBg,
                  color: brandTheme.phoneTextColor,
                  borderColor: brandTheme.borderColor,
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-bold transition-all shadow-2xs hover:brightness-95"
              >
                <Phone className="w-4 h-4" />
                <span>{BUSINESS_DETAILS.phone}</span>
              </a>
              <button
                onClick={handleScrollToForm}
                style={{ backgroundColor: brandTheme.buttonBg }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-bold shadow-md hover:brightness-110 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Service</span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                style={{ backgroundColor: brandTheme.buttonBg }}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-white text-xs font-bold shadow-xs hover:brightness-110"
                aria-label="Call Now"
              >
                <Phone className="w-3.5 h-3.5 fill-white text-white" />
                <span>Call</span>
              </a>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-fadeIn">
            <button
              onClick={() => handleNavClick('/')}
              style={currentRoute === '/' ? { backgroundColor: brandTheme.lightBg, color: brandTheme.primary } : undefined}
              className={`w-full text-left py-2 px-3 rounded-lg text-sm font-semibold ${
                currentRoute === '/' ? '' : 'text-slate-800'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => {
                handleNavClick('/');
                setTimeout(() => {
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }, 100);
              }}
              className="w-full text-left py-2 px-3 rounded-lg text-sm font-semibold text-slate-800"
            >
              Our RO Services
            </button>

            <div className="border-t border-slate-100 pt-2">
              <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Company Policies
              </div>
              <button
                onClick={() => handleNavClick('/privacy-policy')}
                className="w-full text-left py-1.5 px-3 text-xs text-slate-600 hover:text-slate-900"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavClick('/terms-of-service')}
                className="w-full text-left py-1.5 px-3 text-xs text-slate-600 hover:text-slate-900"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleNavClick('/refund-policy')}
                className="w-full text-left py-1.5 px-3 text-xs text-slate-600 hover:text-slate-900"
              >
                Refund Policy
              </button>
              <button
                onClick={() => handleNavClick('/disclaimer')}
                className="w-full text-left py-1.5 px-3 text-xs text-slate-600 hover:text-slate-900"
              >
                Disclaimer Notice
              </button>
              <button
                onClick={() => handleNavClick('/cookie-policy')}
                className="w-full text-left py-1.5 px-3 text-xs text-slate-600 hover:text-slate-900"
              >
                Cookie Policy
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={handleScrollToForm}
                style={{ backgroundColor: brandTheme.buttonBg }}
                className="w-full py-2.5 px-4 rounded-xl text-white font-bold text-sm text-center shadow-xs hover:brightness-110"
              >
                Book RO Service
              </button>
              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                style={{
                  backgroundColor: brandTheme.lightBg,
                  borderColor: brandTheme.borderColor,
                  color: brandTheme.phoneTextColor,
                }}
                className="w-full py-2.5 px-4 rounded-xl border font-bold text-sm text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                Call {BUSINESS_DETAILS.phone}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-24 sm:h-28"></div>
    </>
  );
};

