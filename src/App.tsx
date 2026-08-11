import React, { useState, useEffect, lazy, Suspense } from 'react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BRAND_PAGES_DATA, BUSINESS_DETAILS } from './data/content';
import { X } from 'lucide-react';
import { LeadForm } from './components/LeadForm';
import { SEO, SEOProps } from './components/SEO';

const BrandPage = lazy(() => import('./pages/BrandPage').then(m => ({ default: m.BrandPage })));
const PolicyPage = lazy(() => import('./pages/PolicyPage').then(m => ({ default: m.PolicyPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

const VALID_ROUTES: PageRoute[] = [
  '/',
  '/kent-service',
  '/aquaguard-service',
  '/pureit-service',
  '/aosmith-service',
  '/lg-service',
  '/privacy-policy',
  '/terms-of-service',
  '/refund-policy',
  '/disclaimer',
  '/cookie-policy',
  '/404',
];

function getInitialRoute(): PageRoute {
  const rawPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const path = rawPath as PageRoute;
  if (VALID_ROUTES.includes(path)) {
    return path;
  }
  const hash = typeof window !== 'undefined' ? (window.location.hash.replace('#', '') as PageRoute) : null;
  if (hash && VALID_ROUTES.includes(hash)) {
    return hash;
  }
  if (rawPath !== '/' && rawPath !== '') {
    return '/404';
  }
  return '/';
}

const brandSkeleton = (
  <div className="w-full bg-white min-h-screen">
    <div className="bg-slate-950 w-full pt-16 pb-28 sm:pt-24 sm:pb-36 lg:pt-32 lg:pb-44 min-h-[440px] sm:min-h-[520px] lg:min-h-[580px] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
    </div>
    <div className="max-w-3xl mx-auto -mt-16 relative z-20 h-[500px] bg-white rounded-3xl shadow-xl border border-slate-200/80"></div>
    <div className="h-[800px] bg-slate-50 mt-16"></div>
  </div>
);

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getInitialRoute);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [lastBrandRoute, setLastBrandRoute] = useState<PageRoute | null>(() => {
    const initial = getInitialRoute();
    if (initial.endsWith('-service')) return initial;
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('lastBrandRoute') as PageRoute;
      if (saved && VALID_ROUTES.includes(saved)) return saved;
    }
    return null;
  });

  useEffect(() => {
    if (currentRoute.endsWith('-service')) {
      setLastBrandRoute(currentRoute);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('lastBrandRoute', currentRoute);
      }
    }
  }, [currentRoute]);

  useEffect(() => {
    const handleLocationChange = () => {
      const rawPath = window.location.pathname;
      const path = rawPath as PageRoute;
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (VALID_ROUTES.includes(path)) {
        setCurrentRoute(path);
      } else if (hash && VALID_ROUTES.includes(hash)) {
        setCurrentRoute(hash);
      } else if (rawPath !== '/' && rawPath !== '') {
        setCurrentRoute('/404');
      } else {
        setCurrentRoute('/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = (route: PageRoute) => {
    setCurrentRoute(route);
    if (window.location.pathname !== route) {
      window.history.pushState({}, '', route);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate complete SEO configuration per page
  const getSEOConfig = (): SEOProps => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://roservice24x7.in';
    const canonicalUrl = `${origin}${currentRoute}`;

    if (currentRoute === '/') {
      return {
        title: 'RO-service 24x7 | Best RO Water Purifier Repair & Service Bangalore | Call 8050291180',
        description:
          'Fastest 60-90 min doorstep RO water purifier repair, filter replacement, AMC & installation service in Bangalore. Expert technicians for Kent, Aquaguard, Pureit, AO Smith & LG.',
        keywords:
          'RO water purifier repair Bangalore, RO service Bangalore, Kent RO repair Bangalore, Aquaguard repair Bangalore, Pureit service Bangalore, AO Smith RO service Bangalore, LG water purifier repair Bangalore, RO filter replacement Bangalore',
        canonicalUrl,
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'RO-service 24x7',
            image: 'https://i.ibb.co/k6cRgnyt/IMG-20260805-WA0010.jpg',
            telephone: `+91${BUSINESS_DETAILS.phone}`,
            email: BUSINESS_DETAILS.email,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Bangalore',
              addressRegion: 'Karnataka',
              postalCode: '560001',
              addressCountry: 'IN',
            },
            openingHours: 'Mo-Su 08:00-21:00',
            priceRange: '₹299 - ₹3500',
            description:
              'Doorstep RO water purifier repair, filter replacement, membrane change and AMC service in Bangalore.',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How quickly can an RO service technician arrive at my home in Bangalore?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our technicians typically reach your doorstep within 60 to 90 minutes anywhere in Bangalore.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the inspection or visiting charge for RO repair?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Visiting inspection charge is ₹299, which is waived if you proceed with the repair service.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which brands of RO water purifiers do you service in Bangalore?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We service all major brands including Kent, Aquaguard / Eureka Forbes, HUL Pureit, AO Smith, LG, Livpure, Havells, and Blue Star.',
                },
              },
            ],
          },
        ],
      };
    }

    if (currentRoute.includes('service')) {
      const brandKey = currentRoute.replace('/', '');
      const brand = BRAND_PAGES_DATA[brandKey];
      if (brand) {
        return {
          title: brand.metaTitle,
          description: brand.metaDescription,
          keywords: `${brand.name} RO repair Bangalore, ${brand.name} water purifier service Bangalore, ${brand.name} filter replacement Bangalore, ${brand.name} RO AMC Bangalore`,
          canonicalUrl,
          jsonLd: [
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: `${brand.name} Water Purifier Repair & Service Bangalore`,
              provider: {
                '@type': 'LocalBusiness',
                name: 'RO-service 24x7',
                telephone: `+91${BUSINESS_DETAILS.phone}`,
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Bangalore',
                  addressRegion: 'Karnataka',
                  addressCountry: 'IN',
                },
              },
              areaServed: {
                '@type': 'City',
                name: 'Bangalore',
              },
              description: brand.metaDescription,
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: origin,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: `${brand.name} Service`,
                  item: canonicalUrl,
                },
              ],
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
          ],
        };
      }
    }

    const policyTitles: Record<string, string> = {
      '/privacy-policy': 'Privacy Policy | RO-service 24x7 Bangalore',
      '/terms-of-service': 'Terms of Service | RO-service 24x7 Bangalore',
      '/refund-policy': 'Refund & Return Policy | RO-service 24x7 Bangalore',
      '/disclaimer': 'Disclaimer & Brand Affiliation Notice | RO-service 24x7',
      '/cookie-policy': 'Cookie Policy | RO-service 24x7 Bangalore',
      '/404': 'Page Not Found (404) | RO-service 24x7 Bangalore',
    };

    const policyDescs: Record<string, string> = {
      '/privacy-policy':
        'Read the Privacy Policy of RO-service 24x7. Learn how we protect customer details during water purifier service bookings in Bangalore.',
      '/terms-of-service':
        'Terms of Service for RO-service 24x7 water purifier repair, installation, and AMC services across Bangalore, Karnataka.',
      '/refund-policy':
        'Transparent refund, cancellation, and warranty policy for RO water purifier repair and AMC services in Bangalore.',
      '/disclaimer':
        'Important independent service provider notice and brand trademark disclaimer for RO-service 24x7 Bangalore.',
      '/cookie-policy':
        'Learn how RO-service 24x7 uses essential cookies to ensure smooth service booking and optimized mobile browsing.',
      '/404':
        'The requested page was not found. Contact RO-service 24x7 for fast doorstep water purifier repair service in Bangalore.',
    };

    const title = policyTitles[currentRoute] || 'RO-service 24x7 | Bangalore';
    const description =
      policyDescs[currentRoute] ||
      'RO water purifier repair and doorstep maintenance service in Bangalore.';

    return {
      title,
      description,
      canonicalUrl,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description,
      },
    };
  };

  const seoConfig = getSEOConfig();

  const renderCurrentPage = () => {
    if (currentRoute === '/') {
      return <HomePage onNavigate={navigate} />;
    }

    const loadingFallback = (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#0c54a0] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

    if (
      currentRoute === '/kent-service' ||
      currentRoute === '/aquaguard-service' ||
      currentRoute === '/pureit-service' ||
      currentRoute === '/aosmith-service' ||
      currentRoute === '/lg-service'
    ) {
      return (
        <Suspense fallback={brandSkeleton}>
          <BrandPage route={currentRoute} onNavigate={navigate} />
        </Suspense>
      );
    }

    if (
      currentRoute === '/privacy-policy' ||
      currentRoute === '/terms-of-service' ||
      currentRoute === '/refund-policy' ||
      currentRoute === '/disclaimer' ||
      currentRoute === '/cookie-policy'
    ) {
      return (
        <Suspense fallback={loadingFallback}>
          <PolicyPage route={currentRoute} onNavigate={navigate} lastBrandRoute={lastBrandRoute} />
        </Suspense>
      );
    }

    if (currentRoute === '/404') {
      return (
        <Suspense fallback={loadingFallback}>
          <NotFoundPage onNavigate={navigate} lastBrandRoute={lastBrandRoute} />
        </Suspense>
      );
    }

    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-sky-500 selection:text-white">
      {/* Dynamic SEO Meta & Structured Data */}
      <SEO {...seoConfig} />

      {/* Sticky Top Header */}
      <Header
        currentRoute={currentRoute}
        lastBrandRoute={lastBrandRoute}
        onNavigate={navigate}
        onOpenBookModal={() => setIsBookModalOpen(true)}
      />

      {/* Main Page View */}
      <main className="flex-1">{renderCurrentPage()}</main>

      {/* Footer */}
      <Footer currentRoute={currentRoute} lastBrandRoute={lastBrandRoute} onNavigate={navigate} />

      {/* Pop-up Booking Modal if triggered from sticky mobile or secondary CTA */}
      {isBookModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-2 sm:p-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsBookModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <LeadForm sourcePage="Booking Pop-up Modal" />
          </div>
        </div>
      )}
    </div>
  );
}

