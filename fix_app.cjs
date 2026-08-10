const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace standard import with lazy import
content = content.replace("import { HomePage } from './pages/HomePage';", "const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));");

fs.writeFileSync('src/App.tsx', content);
console.log("Updated App.tsx to lazy load HomePage");
