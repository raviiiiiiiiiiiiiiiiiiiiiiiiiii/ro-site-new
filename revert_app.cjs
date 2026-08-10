const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');
content = content.replace("const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));", "import { HomePage } from './pages/HomePage';");
content = content.replace("return <Suspense fallback={loadingFallback}><HomePage onNavigate={navigate} /></Suspense>;", "return <HomePage onNavigate={navigate} />;");
content = content.replace("return <Suspense fallback={loadingFallback}><HomePage onNavigate={navigate} /></Suspense>;", "return <HomePage onNavigate={navigate} />;");
fs.writeFileSync('src/App.tsx', content);
