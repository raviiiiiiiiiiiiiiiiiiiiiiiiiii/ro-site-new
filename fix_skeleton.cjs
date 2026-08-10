const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const skeletonCode = `const brandSkeleton = (
  <div className="w-full bg-white min-h-screen">
    <div className="bg-slate-950 w-full pt-16 pb-28 sm:pt-24 sm:pb-36 lg:pt-32 lg:pb-44 min-h-[440px] sm:min-h-[520px] lg:min-h-[580px] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
    </div>
    <div className="max-w-3xl mx-auto -mt-16 relative z-20 h-[500px] bg-white rounded-3xl shadow-xl border border-slate-200/80"></div>
    <div className="h-[800px] bg-slate-50 mt-16"></div>
  </div>
);`;

// Insert the skeleton before App component
content = content.replace("export default function App() {", skeletonCode + "\n\nexport default function App() {");

// Use the skeleton in the Suspense for BrandPage
content = content.replace(
  "<Suspense fallback={loadingFallback}>\n          <BrandPage route={currentRoute} onNavigate={navigate} />",
  "<Suspense fallback={brandSkeleton}>\n          <BrandPage route={currentRoute} onNavigate={navigate} />"
);

fs.writeFileSync('src/App.tsx', content);
console.log("Added BrandPageSkeleton.");
