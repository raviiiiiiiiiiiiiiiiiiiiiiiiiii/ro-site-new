const fs = require('fs');

let content = fs.readFileSync('src/pages/BrandPage.tsx', 'utf-8');

content = content.replace(
  '          decoding="async"',
  '          decoding="async"\n          fetchpriority="high"'
);

fs.writeFileSync('src/pages/BrandPage.tsx', content);
console.log("Updated BrandPage.tsx LCP image");
