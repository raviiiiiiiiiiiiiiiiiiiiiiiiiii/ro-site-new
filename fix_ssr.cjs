const fs = require('fs');

let content = fs.readFileSync('src/serverRender.ts', 'utf-8');

// Replace the SSR bodyHtml generation for brand pages
const brandSSR = `    bodyHtml = \`
      <header style="padding:16px; background:#0c54a0; color:#ffffff;">
        <div style="max-width:1200px; margin:0 auto; display:flex; justify-content:space-between; align-items:center;">
          <div style="display:flex; align-items:center; gap:12px;">
            <a href="\${baseUrl}" style="color:#ffffff; text-decoration:none; font-weight:bold; font-size:18px;">\${BUSINESS_DETAILS.name}</a>
          </div>
          <a href="tel:\${BUSINESS_DETAILS.phone}" style="background:#ffffff; color:#0c54a0; padding:8px 16px; border-radius:8px; text-decoration:none; font-weight:bold;">Call \${BUSINESS_DETAILS.phone}</a>
        </div>
      </header>

      <main style="max-width:1200px; margin:0 auto; padding:24px 16px; font-family:sans-serif; color:#1e293b; line-height:1.6;">
        <nav style="font-size:14px; color:#64748b; margin-bottom:16px;">
          <a href="\${baseUrl}" style="color:#0c54a0; text-decoration:none;">Home</a> &gt; <span>\${brand.name} Service Bangalore</span>
        </nav>

        <section style="margin-bottom:32px;">
          \${brand.logoUrl ? \`<div style="margin-bottom:16px;"><img src="\${brand.logoUrl}" alt="\${brand.name} Logo" style="height:48px; width:auto; max-width:180px; object-fit:contain; background:#ffffff; padding:6px 12px; border-radius:12px; border:1px solid #cbd5e1;" /></div>\` : ''}
          <h1 style="font-size:32px; font-weight:800; color:#0c54a0; margin-bottom:12px; line-height:1.2;">\${brand.name} RO Water Purifier Repair &amp; Service in Bangalore</h1>
          <p style="font-size:16px; color:#334155; margin-bottom:20px;">Fast 60–90 min doorstep repair, genuine filter replacements &amp; AMC by certified technicians in Bangalore.</p>
          
          <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:18px; border-radius:12px; margin-bottom:24px;">
            <strong style="color:#0c54a0; font-size:16px;">⚡ Doorstep Technician Dispatch in 60–90 Minutes:</strong>
            <p style="font-size:14px; color:#1e3a8a; margin:6px 0 0;">Facing water leakage, slow filtration, high TDS taste, or error sound in your \${brand.name} purifier? Our certified local engineers provide same-day inspection and genuine filter replacement across all localities in Bangalore. Call <a href="tel:\${BUSINESS_DETAILS.phone}" style="color:#0c54a0; font-weight:bold;">\${BUSINESS_DETAILS.phone}</a> for instant booking.</p>
          </div>
        </section>

        <section style="margin-bottom:36px;">
          <h2 style="font-size:22px; font-weight:700; color:#0f172a; margin-bottom:16px;">Common \${brand.name} Problems We Fix</h2>
          <p style="font-size:15px; color:#475569; margin-bottom:14px;">Diagnostic & repair coverage for all genuine \${brand.name} filter, electrical & membrane issues.</p>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:16px;">
            \${brand.commonProblems
              .map(
                (prob) => \`
              <div style="border:1px solid #e2e8f0; border-radius:12px; padding:16px; background:#ffffff; border-left:4px solid #0c54a0;">
                <p style="font-size:15px; font-weight:600; color:#1e293b; margin:0;">\${prob}</p>
              </div>
            \`
              )
              .join('')}
          </div>
        </section>

        <section style="margin-bottom:36px; background:#f8fafc; padding:24px; border-radius:16px; border:1px solid #e2e8f0;">
          <h2 style="font-size:22px; font-weight:700; color:#0f172a; margin-top:0; margin-bottom:14px;">Doorstep \${brand.name} RO Water Purifier Servicing Across Bangalore</h2>
          <p style="font-size:15px; color:#475569; margin-bottom:14px;">
            Bangalore's municipal Cauvery water and groundwater borewells exhibit variable Total Dissolved Solids (TDS) levels ranging from 150 PPM to over 2000 PPM. \${brand.name} water purifiers require routine filter flushing, TDS calibration, and genuine membrane replacement to deliver pure, crystal-clear drinking water. Our certified local technicians provide specialized maintenance for all \${brand.name} models — including Grand Plus, Mineral RO, Active Copper, Germkill, and Stainless Steel tank series.
          </p>
          <h3 style="font-size:18px; font-weight:bold; color:#0c54a0; margin-bottom:8px;">100% Genuine Spare Guarantee</h3>
          <p style="font-size:14px; color:#475569; margin-bottom:14px;">We install original high-density sediment filters, pre-carbon blocks, post-carbon mineralizers, and high-rejection RO membranes built to handle heavy hard water.</p>
          <h3 style="font-size:18px; font-weight:bold; color:#0f5132; margin-bottom:8px;">30-Day Post-Service Warranty</h3>
          <p style="font-size:14px; color:#475569; margin-bottom:20px;">Enjoy complete peace of mind with our 30-day labor service warranty and up to 1-year replacement warranty on major pumps and SMPS power units.</p>
        </section>

        <section style="margin-bottom:36px; background:#ffffff; padding:24px; border-radius:16px; border:1px solid #cbd5e1;">
          <h2 style="font-size:22px; font-weight:700; color:#0f172a; margin-top:0; margin-bottom:14px;">Our 8-Point \${brand.name} Service & Inspection Protocol</h2>
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
          <h2 style="font-size:22px; font-weight:700; color:#0f172a; margin-bottom:16px;">\${brand.name} Service FAQs</h2>
          <p style="font-size:15px; color:#475569; margin-bottom:14px;">Answers to common questions about servicing your \${brand.name} RO system in Bangalore.</p>
          <div style="display:flex; flex-direction:column; gap:16px;">
            \${brand.brandFaqs
              .map(
                (faq) => \`
              <div style="border-bottom:1px solid #e2e8f0; padding-bottom:14px;">
                <h3 style="font-size:16px; font-weight:bold; color:#0f172a; margin:0 0 6px;">\${faq.question}</h3>
                <p style="font-size:14px; color:#475569; margin:0;">\${faq.answer}</p>
              </div>
            \`
              )
              .join('')}
          </div>
        </section>
        
        <section style="margin-bottom:36px; background:#f8fafc; padding:24px; border-radius:16px; border:1px solid #e2e8f0;">
          <h2 style="font-size:22px; font-weight:700; color:#0f172a; margin-top:0; margin-bottom:14px;">MSME Certified Water Purifier Service</h2>
          <p style="font-size:15px; color:#475569; margin-bottom:14px;">Officially recognized government enterprise for trusted doorstep \${brand.name} RO repair, maintenance & filter replacement in Bangalore.</p>
          <p style="font-size:15px; color:#475569; margin-bottom:0;">MSME Registration No: UDYAM-KR-03-0561611</p>
        </section>

      </main>
    \`;`

const startTag = "bodyHtml = `\n      <header style=\"padding:16px; background:#0c54a0; color:#ffffff;\">";
const endTag = "</main>\n    `;";

const startIdx = content.indexOf(startTag, content.indexOf("} else if (BRAND_PAGES_DATA[brandKey]) {"));
const endIdx = content.indexOf(endTag, startIdx) + endTag.length;

if (startIdx !== -1 && endIdx !== -1) {
    const newContent = content.substring(0, startIdx) + brandSSR.trim() + content.substring(endIdx);
    fs.writeFileSync('src/serverRender.ts', newContent);
    console.log("Replaced SSR HTML.");
} else {
    console.log("Could not find start/end tags");
}
