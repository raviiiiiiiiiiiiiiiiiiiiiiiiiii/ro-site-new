const fs = require('fs');
let content = fs.readFileSync('src/serverRender.ts', 'utf-8');

const showcaseSSR = `
        \${brand.showcaseImage ? \`<section style="margin-bottom:36px; padding:24px; background:#ffffff; border-radius:16px; border:1px solid #e2e8f0; text-align:center;">
          <img src="\${brand.showcaseImage}" alt="\${brand.name} Water Purifier Models & Service Showcase" style="max-width:100%; height:auto; border-radius:12px;" />
        </section>\` : ''}
`;

content = content.replace(
  '<section style="margin-bottom:36px;">\n          <h2 style="font-size:22px; font-weight:700; color:#0f172a; margin-bottom:16px;">Common ${brand.name} Problems We Fix</h2>',
  showcaseSSR + '\n        <section style="margin-bottom:36px;">\n          <h2 style="font-size:22px; font-weight:700; color:#0f172a; margin-bottom:16px;">Common ${brand.name} Problems We Fix</h2>'
);

fs.writeFileSync('src/serverRender.ts', content);
console.log("Added showcaseImage to SSR.");
