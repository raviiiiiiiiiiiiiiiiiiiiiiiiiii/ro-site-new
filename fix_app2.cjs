const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf-8');

content = content.replace("return <HomePage onNavigate={navigate} />;", "return <Suspense fallback={loadingFallback}><HomePage onNavigate={navigate} /></Suspense>;");
content = content.replace("return <HomePage onNavigate={navigate} />;", "return <Suspense fallback={loadingFallback}><HomePage onNavigate={navigate} /></Suspense>;");

fs.writeFileSync('src/App.tsx', content);
console.log("Wrapped HomePage in Suspense");
