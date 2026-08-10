const fs = require('fs');

let content = fs.readFileSync('src/data/content.ts', 'utf-8');

content = content.replace(/image\/upload\/q_auto,f_auto\/v1785992454/g, "image/upload/w_800,h_500,c_fill,q_auto,f_auto/v1785992454");
content = content.replace(/image\/upload\/q_auto,f_auto\/v1785992456/g, "image/upload/w_800,h_500,c_fill,q_auto,f_auto/v1785992456");
content = content.replace(/image\/upload\/q_auto,f_auto\/v1785992453/g, "image/upload/w_800,h_500,c_fill,q_auto,f_auto/v1785992453");
content = content.replace(/image\/upload\/q_auto,f_auto\/v1786029346/g, "image/upload/w_800,h_500,c_fill,q_auto,f_auto/v1786029346");
content = content.replace(/image\/upload\/q_auto,f_auto\/v1785992452/g, "image/upload/w_800,h_500,c_fill,q_auto,f_auto/v1785992452");

fs.writeFileSync('src/data/content.ts', content);
console.log("Updated showcase images.");
