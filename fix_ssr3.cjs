const fs = require('fs');
let content = fs.readFileSync('src/serverRender.ts', 'utf-8');

const servicesListSSR = `
        <section style="margin-bottom:36px;">
          <h2 style="font-size:22px; font-weight:700; color:#0f172a; margin-bottom:16px;">\${brand.name} Services Offered</h2>
          <p style="font-size:15px; color:#475569; margin-bottom:14px;">Professional doorstep solutions delivered with original parts & transparent pricing.</p>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px;">
            \${SERVICES_LIST.map(
              (srv) => \`
              <div style="border:1px solid #e2e8f0; border-radius:12px; padding:16px; background:#f8fafc;">
                <h3 style="font-size:18px; font-weight:bold; color:#0f172a; margin-top:0; margin-bottom:12px;">\${brand.name} \${srv.title}</h3>
                <ul style="padding-left:20px; font-size:14px; color:#475569; margin:0; line-height:1.6;">
                  \${srv.features.map((f) => \`<li>\${f}</li>\`).join('')}
                </ul>
              </div>
            \`
            ).join('')}
          </div>
        </section>
`;

content = content.replace(
  '<section style="margin-bottom:36px; background:#f8fafc; padding:24px; border-radius:16px; border:1px solid #e2e8f0;">',
  servicesListSSR + '\n        <section style="margin-bottom:36px; background:#f8fafc; padding:24px; border-radius:16px; border:1px solid #e2e8f0;">'
);

fs.writeFileSync('src/serverRender.ts', content);
console.log("Added SERVICES_LIST to SSR for Brand pages.");
