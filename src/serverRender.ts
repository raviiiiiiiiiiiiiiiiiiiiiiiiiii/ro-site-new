import { BRAND_PAGES_DATA, BUSINESS_DETAILS, HOMEPAGE_FAQS, SERVICES_LIST, BANGALORE_LOCALITIES } from './data/content';
import { getBrandTheme } from './utils/brandTheme';
import { getRouteFromSubdomain } from './utils/subdomains';
import { PageRoute } from './types';

export interface RenderResult {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  jsonLd: object[];
  bodyHtml: string;
}

export function renderPageContent(urlPath: string, host: string = 'www.roservicehelpline.in'): RenderResult {
  const normalizedHost = host === 'roservicehelpline.in' ? 'www.roservicehelpline.in' : host;
  const baseUrl = `https://${normalizedHost}`;
  const cleanPath = urlPath.split('?')[0].replace(/\/$/, '') || '/';
  const canonicalUrl = `${baseUrl}${cleanPath === '/' ? '' : cleanPath}`;

  // Check if request is on a mapped brand subdomain (e.g. kent.roservicehelpline.in)
  const subdomainRoute = getRouteFromSubdomain(host);
  // If path is root "/" and on a mapped subdomain, treat it as the mapped brand route for SEO & content
  const effectiveRoute: PageRoute = cleanPath === '/' && subdomainRoute ? subdomainRoute : (cleanPath as PageRoute);
  const brandKey = effectiveRoute.replace(/^\//, '');

  // Default homepage render result
  let title = 'RO-service 24x7 | RO Water Purifier Repair & Service Bangalore | Call 8050291180';
  let metaDescription = "Bangalore's trusted independent RO water purifier repair, filter replacement, installation & AMC service center. Servicing Kent, Aquaguard, Pureit, AO Smith, LG. Same-day technician in 60 mins.";
  
  let jsonLd: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#organization`,
      name: BUSINESS_DETAILS.fullName,
      alternateName: BUSINESS_DETAILS.name,
      url: baseUrl,
      telephone: BUSINESS_DETAILS.phone,
      email: BUSINESS_DETAILS.email,
      priceRange: '₹299 - ₹2499',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
        postalCode: '560001',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9716',
        longitude: '77.5946',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '08:00',
          closes: '21:00',
        },
      ],
      areaServed: BANGALORE_LOCALITIES.map((loc) => ({
        '@type': 'Place',
        name: `${loc}, Bangalore`,
      })),
      description: metaDescription,
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

  let bodyHtml = '';

  if (effectiveRoute === '/') {
    // HOMEPAGE SSR CONTENT
    bodyHtml = `
      <header style="padding:16px; background:#0c54a0; color:#ffffff;">
        <div style="max-width:1200px; margin:0 auto; display:flex; justify-content:space-between; align-items:center;">
          <h1 style="font-size:24px; font-weight:bold; margin:0;">${BUSINESS_DETAILS.name} - Bangalore</h1>
          <a href="tel:${BUSINESS_DETAILS.phone}" style="color:#ffffff; font-weight:bold; background:#ffffff; color:#0c54a0; padding:8px 16px; border-radius:8px; text-decoration:none;">Call ${BUSINESS_DETAILS.phone}</a>
        </div>
      </header>

      <main style="max-width:1200px; margin:0 auto; padding:24px 16px; font-family:sans-serif; color:#1e293b;">
        <section style="margin-bottom:32px; text-align:center;">
          <h2 style="font-size:32px; font-weight:800; color:#0c54a0; margin-bottom:12px;">Doorstep RO Water Purifier Repair & Service in Bangalore</h2>
          <p style="font-size:16px; color:#475569; max-width:700px; margin:0 auto 20px;">Fast 60–90 minute technician visit for all major RO brands including Kent, Aquaguard, Pureit, AO Smith, and LG across Bangalore.</p>
          <div style="display:flex; justify-content:center; gap:12px;">
            <a href="tel:${BUSINESS_DETAILS.phone}" style="background:#0c54a0; color:#fff; padding:12px 24px; border-radius:8px; text-decoration:none; font-weight:bold;">Call 8050291180 Now</a>
          </div>
        </section>

        <section style="margin-bottom:40px;">
          <h3 style="font-size:22px; font-weight:700; color:#0f172a; border-bottom:2px solid #0c54a0; padding-bottom:8px; margin-bottom:16px;">Our RO Services in Bangalore</h3>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px;">
            ${SERVICES_LIST.map(
              (s) => `
              <div style="border:1px solid #e2e8f0; border-radius:12px; padding:16px; background:#f8fafc;">
                <h4 style="font-size:18px; font-weight:bold; color:#0c54a0; margin:0 0 8px;">${s.title}</h4>
                <p style="font-size:14px; color:#475569; margin:0 0 12px;">${s.description}</p>
                <span style="font-size:14px; font-weight:bold; color:#059669;">Starting Price: ${s.startingPrice}</span>
              </div>
            `
            ).join('')}
          </div>
        </section>

        <section style="margin-bottom:40px;">
          <h3 style="font-size:22px; font-weight:700; color:#0f172a; border-bottom:2px solid #0c54a0; padding-bottom:8px; margin-bottom:16px;">Supported Water Purifier Brands</h3>
          <ul style="display:flex; flex-wrap:wrap; gap:12px; list-style:none; padding:0;">
            ${Object.values(BRAND_PAGES_DATA)
              .map(
                (b) => `
              <li>
                <a href="${b.slug}" style="display:inline-block; padding:8px 16px; background:#eff6ff; color:#0c54a0; border:1px solid #bfdbfe; border-radius:8px; text-decoration:none; font-weight:bold;">${b.name} Service</a>
              </li>
            `
              )
              .join('')}
          </ul>
        </section>

        <section style="margin-bottom:40px;">
          <h3 style="font-size:22px; font-weight:700; color:#0f172a; border-bottom:2px solid #0c54a0; padding-bottom:8px; margin-bottom:16px;">Frequently Asked Questions (FAQs)</h3>
          <div style="display:flex; flex-col; gap:16px;">
            ${HOMEPAGE_FAQS.map(
              (faq) => `
              <div style="border-bottom:1px solid #e2e8f0; padding-bottom:12px;">
                <h4 style="font-size:16px; font-weight:bold; color:#0f172a; margin:0 0 4px;">${faq.question}</h4>
                <p style="font-size:14px; color:#475569; margin:0;">${faq.answer}</p>
              </div>
            `
            ).join('')}
          </div>
        </section>

        <section style="margin-bottom:40px; background:#f1f5f9; padding:20px; border-radius:12px;">
          <h3 style="font-size:18px; font-weight:bold; color:#0f172a; margin-top:0;">Bangalore Service Areas Covered</h3>
          <p style="font-size:14px; color:#475569;">${BANGALORE_LOCALITIES.join(' • ')}</p>
        </section>
      </main>

      <footer style="background:#0c54a0; color:#ffffff; padding:32px 16px; margin-top:40px; font-family:sans-serif;">
        <div style="max-width:1200px; margin:0 auto;">
          <div style="background:rgba(0,0,0,0.25); border:1px solid rgba(255,255,255,0.2); padding:16px; border-radius:12px; margin-bottom:20px; text-align:center;">
            <p id="ssr-footer-disclaimer" style="margin:0; font-size:13px; line-height:1.6; color:#ffffff;">
              <strong>Disclaimer:</strong> All brand names and trademarks belong to their respective owners. Their use does not imply any affiliation or endorsement.
            </p>
          </div>
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:12px; font-size:13px; color:#e2e8f0; border-top:1px solid rgba(255,255,255,0.15); padding-top:16px;">
            <p style="margin:0;">© ${new Date().getFullYear()} ${BUSINESS_DETAILS.fullName}. All rights reserved.</p>
            <p style="margin:0;">Call: <a href="tel:${BUSINESS_DETAILS.phone}" style="color:#ffffff; font-weight:bold;">${BUSINESS_DETAILS.phone}</a> | Bangalore, Karnataka</p>
          </div>
        </div>
      <div style="position:fixed; bottom:0; left:0; right:0; background:#1d63d8; color:#ffffff; padding:12px 16px; text-align:center; z-index:1000; box-shadow:0 -4px 12px rgba(0,0,0,0.15);">
        <a href="tel:${BUSINESS_DETAILS.phone}" style="color:#ffffff; text-decoration:none; font-weight:bold; font-size:18px;">
          Call Now : ${BUSINESS_DETAILS.phone}
        </a>
      </div>
    `;
  } else if (BRAND_PAGES_DATA[brandKey]) {
    // BRAND PAGE SSR CONTENT
    const brand = BRAND_PAGES_DATA[brandKey];
    title = brand.metaTitle;
    metaDescription = brand.metaDescription;

    jsonLd = [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${brand.name} RO Water Purifier Repair & Service Bangalore`,
        serviceType: 'Water Purifier Repair, Maintenance & Filter Replacement',
        provider: {
          '@type': 'LocalBusiness',
          name: BUSINESS_DETAILS.fullName,
          telephone: BUSINESS_DETAILS.phone,
          email: BUSINESS_DETAILS.email,
        },
        areaServed: {
          '@type': 'City',
          name: 'Bangalore',
        },
        description: brand.description,
        image: brand.showcaseImage || BUSINESS_DETAILS.logoUrl,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl,
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
    ];

    const brandTheme = getBrandTheme(`/${brandKey}` as PageRoute);

    bodyHtml = `
      <header style="padding:16px; background:${brandTheme.primary}; color:#ffffff;">
        <div style="max-width:1200px; margin:0 auto; display:flex; justify-content:space-between; align-items:center;">
          <div style="display:flex; align-items:center; gap:12px;">
            <a href="${baseUrl}" style="color:#ffffff; text-decoration:none; font-weight:bold; font-size:18px;">${BUSINESS_DETAILS.name}</a>
          </div>
          <a href="tel:${BUSINESS_DETAILS.phone}" style="background:#ffffff; color:${brandTheme.primary}; padding:8px 16px; border-radius:8px; text-decoration:none; font-weight:bold;">Call ${BUSINESS_DETAILS.phone}</a>
        </div>
      </header>

      <main style="max-width:1200px; margin:0 auto; padding:24px 16px; font-family:sans-serif; color:#1e293b; line-height:1.6;">
        <nav style="font-size:14px; color:#64748b; margin-bottom:16px;">
          <a href="${baseUrl}" style="color:${brandTheme.primary}; text-decoration:none;">Home</a> &gt; <span>${brand.name} Service Bangalore</span>
        </nav>

        <section style="margin-bottom:32px;">
          <h1 style="font-size:32px; font-weight:800; color:${brandTheme.primary}; margin-bottom:12px; line-height:1.2;">${brand.name} RO Water Purifier Repair &amp; Service in Bangalore</h1>
          <p style="font-size:16px; color:#334155; margin-bottom:20px;">Fast 60–90 min doorstep repair, genuine filter replacements &amp; AMC by certified technicians in Bangalore.</p>
          
          <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:18px; border-radius:12px; margin-bottom:24px;">
            <strong style="color:${brandTheme.primary}; font-size:16px;">⚡ Doorstep Technician Dispatch in 60–90 Minutes:</strong>
            <p style="font-size:14px; color:#1e3a8a; margin:6px 0 0;">Facing water leakage, slow filtration, high TDS taste, or error sound in your ${brand.name} purifier? Our certified local engineers provide same-day inspection and genuine filter replacement across all localities in Bangalore. Call <a href="tel:${BUSINESS_DETAILS.phone}" style="color:#0c54a0; font-weight:bold;">${BUSINESS_DETAILS.phone}</a> for instant booking.</p>
          </div>
        </section>

        
        ${brand.showcaseImage ? `<section style="margin-bottom:36px; padding:24px; background:#ffffff; border-radius:16px; border:1px solid #e2e8f0; text-align:center;">
          <img src="${brand.showcaseImage}" alt="${brand.name} Water Purifier Models & Service Showcase" style="max-width:100%; height:auto; border-radius:12px;" />
        </section>` : ''}

        <section style="margin-bottom:36px;">
          <h2 style="font-size:22px; font-weight:700; color:#0f172a; margin-bottom:16px;">Common ${brand.name} Problems We Fix</h2>
          <p style="font-size:15px; color:#475569; margin-bottom:14px;">Diagnostic & repair coverage for all genuine ${brand.name} filter, electrical & membrane issues.</p>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:16px;">
            ${brand.commonProblems
              .map(
                (prob) => `
              <div style="border:1px solid #e2e8f0; border-radius:12px; padding:16px; background:#ffffff; border-left:4px solid #0c54a0;">
                <p style="font-size:15px; font-weight:600; color:#1e293b; margin:0;">${prob}</p>
              </div>
            `
              )
              .join('')}
          </div>
        </section>

        
        <section style="margin-bottom:36px;">
          <h2 style="font-size:22px; font-weight:700; color:#0f172a; margin-bottom:16px;">${brand.name} Services Offered</h2>
          <p style="font-size:15px; color:#475569; margin-bottom:14px;">Professional doorstep solutions delivered with original parts & transparent pricing.</p>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px;">
            ${SERVICES_LIST.map(
              (srv) => `
              <div style="border:1px solid #e2e8f0; border-radius:12px; padding:16px; background:#f8fafc;">
                <h3 style="font-size:18px; font-weight:bold; color:#0f172a; margin-top:0; margin-bottom:12px;">${brand.name} ${srv.title}</h3>
                <ul style="padding-left:20px; font-size:14px; color:#475569; margin:0; line-height:1.6;">
                  ${srv.features.map((f) => `<li>${f}</li>`).join('')}
                </ul>
              </div>
            `
            ).join('')}
          </div>
        </section>

        <section style="margin-bottom:36px; background:#f8fafc; padding:24px; border-radius:16px; border:1px solid #e2e8f0;">
          <h2 style="font-size:22px; font-weight:700; color:#0f172a; margin-top:0; margin-bottom:14px;">Doorstep ${brand.name} RO Water Purifier Servicing Across Bangalore</h2>
          <p style="font-size:15px; color:#475569; margin-bottom:14px;">
            Bangalore's municipal Cauvery water and groundwater borewells exhibit variable Total Dissolved Solids (TDS) levels ranging from 150 PPM to over 2000 PPM. ${brand.name} water purifiers require routine filter flushing, TDS calibration, and genuine membrane replacement to deliver pure, crystal-clear drinking water. Our certified local technicians provide specialized maintenance for all ${brand.name} models — including Grand Plus, Mineral RO, Active Copper, Germkill, and Stainless Steel tank series.
          </p>
          <h3 style="font-size:18px; font-weight:bold; color:#0c54a0; margin-bottom:8px;">100% Genuine Spare Guarantee</h3>
          <p style="font-size:14px; color:#475569; margin-bottom:14px;">We install original high-density sediment filters, pre-carbon blocks, post-carbon mineralizers, and high-rejection RO membranes built to handle heavy hard water.</p>
          <h3 style="font-size:18px; font-weight:bold; color:#0f5132; margin-bottom:8px;">30-Day Post-Service Warranty</h3>
          <p style="font-size:14px; color:#475569; margin-bottom:20px;">Enjoy complete peace of mind with our 30-day labor service warranty and up to 1-year replacement warranty on major pumps and SMPS power units.</p>
        </section>

        <section style="margin-bottom:36px; background:#ffffff; padding:24px; border-radius:16px; border:1px solid #cbd5e1;">
          <h2 style="font-size:22px; font-weight:700; color:#0f172a; margin-top:0; margin-bottom:14px;">Our 8-Point ${brand.name} Service & Inspection Protocol</h2>
          <ul style="padding-left:20px; font-size:15px; color:#334155; line-height:1.8;">
            <li>Pre-filter outer bowl flushing & cartridge replacement</li>
            <li>Spun sediment & activated carbon deodorization check</li>
            <li>High-TDS RO membrane rejection rate calibration</li>
            <li>UV lamp intensity & quartz sleeve descaling</li>
            <li>Booster pump PSI pressure & vibration test</li>
            <li>Solenoid valve auto-cut & power adapter output test</li>
            <li>Water storage tank food-grade sanitization</li>
            <li>Digital TDS meter verification before & after service</li>
          </ul>
        </section>

        <section style="margin-bottom:36px;">
          <h2 style="font-size:22px; font-weight:700; color:#0f172a; margin-bottom:16px;">${brand.name} Service FAQs</h2>
          <p style="font-size:15px; color:#475569; margin-bottom:14px;">Answers to common questions about servicing your ${brand.name} RO system in Bangalore.</p>
          <div style="display:flex; flex-direction:column; gap:16px;">
            ${brand.brandFaqs
              .map(
                (faq) => `
              <div style="border-bottom:1px solid #e2e8f0; padding-bottom:14px;">
                <h3 style="font-size:16px; font-weight:bold; color:#0f172a; margin:0 0 6px;">${faq.question}</h3>
                <p style="font-size:14px; color:#475569; margin:0;">${faq.answer}</p>
              </div>
            `
              )
              .join('')}
          </div>
        </section>
        
        <section style="margin-bottom:36px; background:#f8fafc; padding:24px; border-radius:16px; border:1px solid #e2e8f0;">
          <h2 style="font-size:22px; font-weight:700; color:#0f172a; margin-top:0; margin-bottom:14px;">MSME Certified Water Purifier Service</h2>
          <p style="font-size:15px; color:#475569; margin-bottom:14px;">Officially recognized government enterprise for trusted doorstep ${brand.name} RO repair, maintenance & filter replacement in Bangalore.</p>
          <p style="font-size:15px; color:#475569; margin-bottom:0;">MSME Registration No: UDYAM-KR-03-0561611</p>
        </section>

      </main>

      <footer style="background:#0c54a0; color:#ffffff; padding:32px 16px; margin-top:40px; font-family:sans-serif;">
        <div style="max-width:1200px; margin:0 auto;">
          <div style="background:rgba(0,0,0,0.25); border:1px solid rgba(255,255,255,0.2); padding:16px; border-radius:12px; margin-bottom:20px; text-align:center;">
            <p id="ssr-brand-footer-disclaimer" style="margin:0; font-size:13px; line-height:1.6; color:#ffffff;">
              <strong>Disclaimer:</strong> All brand names and trademarks belong to their respective owners. Their use does not imply any affiliation or endorsement.
            </p>
          </div>
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:12px; font-size:13px; color:#e2e8f0; border-top:1px solid rgba(255,255,255,0.15); padding-top:16px;">
            <p style="margin:0;">© ${new Date().getFullYear()} ${BUSINESS_DETAILS.fullName}. All rights reserved. Independent ${brand.name} RO Service in Bangalore.</p>
            <p style="margin:0;">Booking Helpline: <a href="tel:${BUSINESS_DETAILS.phone}" style="color:#ffffff; font-weight:bold;">${BUSINESS_DETAILS.phone}</a></p>
          </div>
        </div>
      </footer>
      <div style="position:fixed; bottom:0; left:0; right:0; background:${brandTheme.primary}; color:#ffffff; padding:12px 16px; text-align:center; z-index:1000; box-shadow:0 -4px 12px rgba(0,0,0,0.15);">
        <a href="tel:${BUSINESS_DETAILS.phone}" style="color:#ffffff; text-decoration:none; font-weight:bold; font-size:18px;">
          Call Now : ${BUSINESS_DETAILS.phone}
        </a>
      </div>
    `;
  } else {
    // POLICY PAGES OR OTHER ROUTES
    const policyTitles: Record<string, string> = {
      '/privacy-policy': 'Privacy Policy',
      '/terms-of-service': 'Terms and Conditions',
      '/refund-policy': 'Refund & Return Policy',
      '/disclaimer': 'Disclaimer & Brand Affiliation Notice',
      '/cookie-policy': 'Cookie Policy',
    };

    const policyName = policyTitles[effectiveRoute] || policyTitles[cleanPath] || 'Customer Care Policy';
    title = `${policyName} | ${BUSINESS_DETAILS.name} Bangalore`;
    metaDescription = `${policyName} for ${BUSINESS_DETAILS.name} doorstep water purifier repair services in Bangalore.`;

    bodyHtml = `
      <header style="padding:16px; background:#0c54a0; color:#ffffff;">
        <div style="max-width:1200px; margin:0 auto;">
          <h1 style="font-size:24px; font-weight:bold; margin:0;">${policyName}</h1>
        </div>
      </header>
      <main style="max-width:1200px; margin:0 auto; padding:24px 16px; font-family:sans-serif; color:#1e293b;">
        <h2 style="font-size:26px; font-weight:800; color:#0c54a0;">${policyName} - ${BUSINESS_DETAILS.name}</h2>
        <p style="font-size:14px; color:#475569;">Please read our official ${policyName} for doorstep water purifier service bookings in Bangalore.</p>
      </main>
      <footer style="background:#0c54a0; color:#ffffff; padding:32px 16px; margin-top:40px; font-family:sans-serif;">
        <div style="max-width:1200px; margin:0 auto;">
          <div style="background:rgba(0,0,0,0.25); border:1px solid rgba(255,255,255,0.2); padding:16px; border-radius:12px; margin-bottom:20px; text-align:center;">
            <p id="ssr-policy-footer-disclaimer" style="margin:0; font-size:13px; line-height:1.6; color:#ffffff;">
              <strong>Disclaimer:</strong> All brand names and trademarks belong to their respective owners. Their use does not imply any affiliation or endorsement.
            </p>
          </div>
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:12px; font-size:13px; color:#e2e8f0; border-top:1px solid rgba(255,255,255,0.15); padding-top:16px;">
            <p style="margin:0;">© ${new Date().getFullYear()} ${BUSINESS_DETAILS.fullName}. All rights reserved.</p>
            <p style="margin:0;">Helpline: <a href="tel:${BUSINESS_DETAILS.phone}" style="color:#ffffff; font-weight:bold;">${BUSINESS_DETAILS.phone}</a></p>
          </div>
        </div>
      </footer>
    `;
  }

  return {
    title,
    metaDescription,
    canonicalUrl,
    jsonLd,
    bodyHtml,
  };
}
