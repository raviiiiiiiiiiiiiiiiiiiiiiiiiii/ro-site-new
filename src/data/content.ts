import { BrandInfo, FAQItem, ServiceItem, Testimonial } from '../types';

export const BUSINESS_DETAILS = {
  name: 'RO-service 24x7',
  fullName: 'RO-service 24x7 - Water Purifier Repair & Service',
  phone: '08050291180',
  formattedPhone: '080502 91180',
  whatsappNumber: '918050291180',
  address: 'Bangalore, Karnataka, India',
  city: 'Bangalore',
  state: 'Karnataka',
  pincodePlaceholder: '560001',
  workingHours: '8:00 AM - 9:00 PM (All 7 Days)',
  email: 'contact@roservice24x7.in',
  formSubmitEmail: 'syedsmaula786@gmail.com',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'ro-repair',
    title: 'RO Repair & Troubleshooting',
    description: 'Expert repair for water leakage, low flow, unusual noise, power issues, or error codes on any RO model.',
    iconName: 'Wrench',
    features: ['Instant diagnosis', 'Original spare parts', 'Same-day completion', '30-day service warranty'],
    popularTag: 'Most Requested',
    startingPrice: '₹299',
  },
  {
    id: 'ro-installation',
    title: 'RO Installation & Uninstallation',
    description: 'Professional wall mounting, inlet valve fitting, leak testing, and pressure adjustment for new or relocated purifiers.',
    iconName: 'Download',
    features: ['Neat plumbing connection', 'Free water pressure test', 'Pre-filter setup', 'Demonstration included'],
    startingPrice: '₹499',
  },
  {
    id: 'filter-replacement',
    title: 'Filter & Membrane Replacement',
    description: 'High-density Sediment filter, Pre-Carbon, Post-Carbon, and authentic High-TDS RO Membrane replacement.',
    iconName: 'Filter',
    features: ['100% Genuine Membranes', 'Eliminates bad taste & odor', 'Restores pure water output', 'Free TDS testing'],
    popularTag: 'Recommended Yearly',
    startingPrice: '₹350',
  },
  {
    id: 'ro-amc',
    title: 'Annual Maintenance Contract (AMC)',
    description: 'Hassle-free year-round care with free periodic filter changes, unlimited breakdown calls, and priority visits.',
    iconName: 'ShieldCheck',
    features: ['3 Free scheduled services', 'All filters & membrane covered', 'Zero repair labor charges', 'Priority technician dispatch'],
    popularTag: 'Best Value Plan',
    startingPrice: '₹2,499 / Year',
  },
  {
    id: 'uv-uf-servicing',
    title: 'UV / UF Lamp & System Servicing',
    description: 'UV disinfection tube replacement, quartz glass cleaning, and UF membrane flushing for micro-filtration safety.',
    iconName: 'Zap',
    features: ['Destroys bacteria & viruses', 'Quartz sleeve descaling', 'Choke ballast inspection', 'Pure mineral retention'],
    startingPrice: '₹399',
  },
  {
    id: 'tds-quality-check',
    title: 'Water Quality & TDS Level Check',
    description: 'Digital TDS measurement, pH testing, and water hardness assessment to check if your drinking water is 100% safe.',
    iconName: 'Activity',
    features: ['Digital TDS meter reading', 'Raw vs Filtered analysis', 'Filter health report', 'Free with any service'],
    startingPrice: 'FREE with Service',
  },
];

export const BRAND_PAGES_DATA: Record<string, BrandInfo> = {
  'kt-service': {
    id: 'kent',
    name: 'Kent',
    slug: '/kt-service',
    logoText: 'KENT',
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786032964/KENT-RO-Logo-new_dkjihe.png',
    tagline: 'House of Purity - Expert Service & Genuine Spares in Bangalore',
    accentColor: 'from-blue-600 to-cyan-500',
    description: 'Looking for fast, reliable Kent RO service in Bangalore? Our certified technicians specialize in Kent Grand Plus, Pearl, Supreme, Prime, Wonder, and all Kent RO+UV+UF water purifiers with 100% genuine filters and same-day doorstep service.',
    metaTitle: 'Kent RO Water Purifier Repair & Service Bangalore | Call 080502 91180',
    metaDescription: 'Trusted Kent RO repair, filter change, membrane replacement & AMC in Bangalore. Same-day technician visit, genuine Kent parts, 30-day warranty. Book now!',
    commonProblems: [
      'Kent RO water leaking from bottom or inlet pipes',
      'Low water flow speed from tank or slow filtration rate',
      'Kent purifier continuously beeping or UV fail error alarm sound',
      'Unusual bitter, metallic, or bad taste/odor in filtered water',
      'Kent RO auto-flush solenoid valve malfunction or power trip',
      'SMPS power adapter failure — Kent RO not switching on',
    ],
    brandFaqs: [
      {
        question: 'Are your technicians experienced with Kent RO purifiers?',
        answer: 'Yes, our certified technicians have over 8+ years of hands-on experience servicing Kent RO systems including Kent Grand, Prime, Mineral RO, and Under-Counter models across Bangalore.',
      },
      {
        question: 'Do you use genuine Kent spare parts and membranes?',
        answer: 'Absolutely. We source original high-grade Kent compatible sediment filters, activated carbon blocks, UV lamps, and authentic RO membranes to ensure high TDS rejection and long life.',
      },
      {
        question: 'How quickly can a technician visit my location in Bangalore for Kent repair?',
        answer: 'We provide same-day service! Once you submit the form or call 080502 91180, our nearest local technician in your area (Whitefield, Koramangala, Indiranagar, HSR, etc.) is dispatched within 60 to 90 minutes.',
      },
      {
        question: 'How much does a Kent RO service or filter replacement cost?',
        answer: 'General service inspection starts at just ₹299. Basic sediment/pre-filter replacement ranges from ₹350–₹600, while complete Kent filter overhaul costs are quoted upfront post-inspection with zero hidden fees.',
      },
    ],
    showcaseImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1785992454/file_0000000055688208b6f807e9b088e60e_akivhm.png',
  },

  'aq-service': {
    id: 'aquaguard',
    name: 'Aquaguard / Eureka',
    slug: '/aq-service',
    logoText: 'Aquaguard',
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786032688/Screenshot_20260806_102503_Google_nsdk6g.jpg',
    tagline: 'Paani Ka Doctor - Prompt Service & Genuine Filter Replacement',
    accentColor: 'from-teal-600 to-emerald-500',
    description: 'Get expert doorstep service for your Aquaguard water purifier in Bangalore. We service Aquaguard Geneus, Enhance, Blaze, Ritz, Magna, Cristal, and all Active Copper models using authentic spare parts.',
    metaTitle: 'Aquaguard RO Repair & Service in Bangalore | Call 080502 91180',
    metaDescription: 'Expert Aquaguard water purifier repair, copper filter change, UV lamp replacement & AMC in Bangalore. Doorstep technician in 60 mins. Call 080502 91180.',
    commonProblems: [
      'Aquaguard red/orange error light blinking or buzzer sound',
      'Water flow suddenly stopped or extremely slow stream',
      'Active Copper cartridge replacement required due to blockage',
      'Aquaguard UV lamp indicator fail or electronic board issue',
      'Water leaking from internal tubing or storage tank valve',
      'Smell or metallic taste in purified drinking water',
    ],
    brandFaqs: [
      {
        question: 'Do you service all Aquaguard models in Bangalore?',
        answer: 'Yes! We service all Aquaguard models including Active Copper, Geneus, Enhance, Smart Plus, Ritz, UTC (Under the Counter), and commercial Aquaguard purifiers.',
      },
      {
        question: 'What is included in an Aquaguard full service check?',
        answer: 'Our comprehensive check includes raw water TDS measurement, pre-filter bowl cleaning, internal filter health test, UV lamp voltage test, leak test, and sanitized tank cleaning.',
      },
      {
        question: 'Do you offer Annual Maintenance Contracts (AMC) for Aquaguard?',
        answer: 'Yes, we provide budget-friendly Aquaguard AMC plans in Bangalore that cover 2–3 free preventive maintenance visits, free filter replacements, and unlimited free breakdown calls.',
      },
      {
        question: 'Why is my Aquaguard water purifier beeping continuously or showing red light?',
        answer: 'A continuous beep or red indicator light usually signifies a UV lamp failure, filter blockage, or mandatory service alert. Our technicians diagnose the exact sensor error and replace faulty parts on the spot.',
      },
    ],
    showcaseImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1785992456/file_00000000143c8211adfde447de9f4d32_mvhaoz.png',
  },

  'pt-service': {
    id: 'pureit',
    name: 'Pureit (HUL)',
    slug: '/pt-service',
    logoText: 'Pureit',
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786031439/pureit_water_logo_zaej67.png',
    tagline: 'HUL Pureit Advanced Repair & GKK Replacement in Bangalore',
    accentColor: 'from-sky-600 to-indigo-500',
    description: 'Need a GKK (Germkill Kit) replacement or urgent repair for your HUL Pureit water purifier in Bangalore? We handle Pureit Marvella, Ultima, Copper RO+UV, Mineral RO, and Classic models with genuine kits and same-day delivery.',
    metaTitle: 'Pureit RO Repair & GKK Replacement Bangalore | Call 080502 91180',
    metaDescription: 'Fast HUL Pureit RO service & GKK filter kit replacement in Bangalore. Certified technicians, genuine parts, low prices. Call 080502 91180 now!',
    commonProblems: [
      'Pureit GKK indicator light turned red or auto-shutoff activated',
      'No water flow from Pureit purifier despite water pressure',
      'Continuous beep sound or red light blinking continuously',
      'Pureit Ultima / Marvella digital display error codes',
      'Water tank overflow or internal pipe connector leakage',
      'High TDS or altered taste after prolonged filter usage',
    ],
    brandFaqs: [
      {
        question: 'How do I know when my Pureit Germkill Kit (GKK) needs replacement?',
        answer: 'Pureit devices have an advance alert system. When the indicator turns half-red or full-red, water flow automatically stops to protect you from unpurified water. Call us at 080502 91180 for immediate doorstep replacement.',
      },
      {
        question: 'Do you carry original HUL Pureit Germkill Kits?',
        answer: 'Yes, our technicians carry sealed, original Pureit GKK kits for 1500L, 2000L, 3000L, and 6000L models to replace them on the spot.',
      },
      {
        question: 'Can you convert my Pureit RO to handle higher Bangalore borewell TDS?',
        answer: 'Yes, if your local raw water TDS has increased, we can tune your Pureit RO system with a high-rejection 3000+ PPM membrane for crisp, pure water.',
      },
    ],
    showcaseImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1785992453/file_00000000005c820894f1f0d1dc9be3b8_ybyzwe.png',
  },

  'ao-service': {
    id: 'ao-smith',
    name: 'AO Smith',
    slug: '/ao-service',
    logoText: 'A. O. SMITH',
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786031439/logo_nk88jp.png',
    tagline: 'Premium Mineralized RO Repair & Filter Replacement',
    accentColor: 'from-blue-700 to-slate-700',
    description: 'Specialized AO Smith water purifier repair and servicing in Bangalore. Certified care for AO Smith Z8, Z9, X8, ProPlanet, Green Series, and Under-Counter RO systems with genuine SCM (Silver Charged Membrane) and MIN-TECH filters.',
    metaTitle: 'AO Smith RO Repair & Service Bangalore | Call 080502 91180',
    metaDescription: 'Professional AO Smith water purifier repair, filter replacement & AMC service in Bangalore. Expert technicians, genuine spare parts. Call 080502 91180.',
    commonProblems: [
      'AO Smith hot & normal water dispense touch button not working',
      'SCM membrane or MIN-TECH cartridge change indicator glowing',
      'Low hot water temperature or heating element issue in Z8/Z9',
      'Purifier continuously draining wastewater without stopping',
      'Water leakage from internal solenoid valves or fitting elbows',
      'Power light flickering or no display response on front panel',
    ],
    brandFaqs: [
      {
        question: 'Do you stock original AO Smith MIN-TECH & SCM filters?',
        answer: 'Yes! We carry authentic AO Smith replacement filters including pre-filter cartridges, sediment filters, carbon blocks, SCM membranes, and MIN-TECH mineralizers.',
      },
      {
        question: 'My AO Smith Z8 hot water dispenser is not heating — can you fix it?',
        answer: 'Yes, our experienced technicians specialize in troubleshooting AO Smith heating thermostats, electronic controllers, and heating elements.',
      },
      {
        question: 'Are your service charges reasonable for premium brands like AO Smith?',
        answer: 'Yes, our visiting & inspection fee is just ₹299. All replacement parts are priced transparently before installation so you pay only for what you need.',
      },
    ],
    showcaseImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786029346/file_00000000a4488208bd1b9ce6f84561a5_uzgyoz.png',
  },

  'lg-service': {
    id: 'lg',
    name: 'LG Water Purifier',
    slug: '/lg-service',
    logoText: 'LG',
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786032689/images_5_t36ctz.png',
    tagline: 'Dual Protection Stainless Steel Tank RO Service',
    accentColor: 'from-rose-600 to-red-600',
    description: 'Top-rated LG water purifier repair & maintenance service in Bangalore. We service LG PuriCare, Stainless Steel Tank RO, Dual Protection UV models, and EverFresh UV purifiers with genuine parts and hygienic digital sterilization.',
    metaTitle: 'LG Water Purifier Repair & Service Bangalore | Call 080502 91180',
    metaDescription: 'Reliable LG RO water purifier repair, filter replacement & AMC service in Bangalore. Fast doorstep visit, genuine LG spares, 30-day warranty.',
    commonProblems: [
      'LG Stainless Steel tank UV sterilizing light malfunction',
      'Digital filter change indicator icon glowing red on LG panel',
      'Water leaking from bottom body or drain pipe valve',
      'Purified water taste feels unusual or TDS output is high',
      'LG RO pump making loud humming or vibrating noise',
      'No water dispensing from tap or soft touch dispenser',
    ],
    brandFaqs: [
      {
        question: 'Do you clean and sterilize LG stainless steel water tanks?',
        answer: 'Yes! During servicing, we thoroughly descale and sanitize the LG internal stainless steel tank using safe food-grade sanitizing kits and UV verification.',
      },
      {
        question: 'How long does an LG RO filter replacement take?',
        answer: 'A complete LG filter replacement and system health check usually takes 30 to 45 minutes right at your doorstep in Bangalore.',
      },
      {
        question: 'Do you provide service warranty on LG repairs?',
        answer: 'Yes, all repair work and replaced spare parts carry our 30-day post-service warranty for complete peace of mind.',
      },
    ],
    showcaseImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1785992452/file_000000000fa08208a9c1ed18a6c93a0e_uxr8cn.png',
  },
};

export const BANGALORE_LOCALITIES = [
  'Whitefield',
  'Koramangala',
  'HSR Layout',
  'Indiranagar',
  'Electronic City',
  'Marathahalli',
  'Bellandur',
  'Jayanagar',
  'JP Nagar',
  'Hebbal',
  'Yelahanka',
  'Rajajinagar',
  'Banashankari',
  'Malleshwaram',
  'Sarjapur Road',
  'BTM Layout',
  'Kammanahalli',
  'KR Puram',
  'Varthur',
  'Mahadevapura',
  'Bannerghatta Road',
  'HBR Layout',
  'RT Nagar',
  'Basavanagudi',
  'Kalyan Nagar',
  'Brookefield',
  'Thanisandra',
  'Domlur',
  'New BEL Road',
  'CV Raman Nagar',
];

export const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: 'How quickly can an RO service technician visit my home in Bangalore?',
    answer: 'We guarantee fast 60 to 90 minute doorstep response across all areas in Bangalore including Whitefield, Koramangala, HSR Layout, Indiranagar, Electronic City, Marathahalli, Bellandur, Hebbal, and Jayanagar. You can book online or call 080502 91180 for immediate technician dispatch.',
  },
  {
    question: 'Do you service all RO water purifier brands in Bangalore?',
    answer: 'Yes! We repair, service, and install all major water purifier brands including Kent, Aquaguard, Pureit (HUL), AO Smith, LG, Livpure, Blue Star, Havells, Whirlpool, Zero B, and custom multi-stage domestic and commercial RO systems.',
  },
  {
    question: 'What is the visiting and inspection fee for an RO technician in Bangalore?',
    answer: 'Our initial technician visiting and diagnostic inspection fee is just ₹299. If you proceed with the recommended repair or filter replacement through us, this inspection fee is completely adjusted or waived off in your final invoice.',
  },
  {
    question: 'How often should RO water purifier filters be replaced?',
    answer: 'Sediment and Pre-Carbon filters should ideally be replaced every 6 to 12 months depending on your input water TDS and usage. High-TDS RO Membranes usually last 18 to 24 months. We provide digital TDS testing before and after filter changes to measure exact water purity.',
  },
  {
    question: 'What is included in an RO Annual Maintenance Contract (AMC)?',
    answer: 'Our comprehensive RO AMC plan includes 3 scheduled preventive maintenance visits per year, 100% free filter replacements (Sediment, Carbon, RO Membrane), zero labor charges for breakdown calls, and priority doorstep service across Bangalore.',
  },
  {
    question: 'Do you use 100% genuine spare parts and original membranes?',
    answer: 'Yes! We strictly use high-grade 100% original filters, high-TDS rejection membranes, heavy-duty booster pumps, SMPS power supplies, and food-grade silicone tubing to ensure maximum water purity and long purifier lifespan.',
  },
  {
    question: 'Do you offer any service warranty on RO repairs?',
    answer: 'Yes, we provide a 30-day post-service warranty on all repair labor and up to 12 months manufacturer warranty on replaced major components like pumps, SMPS adapters, and RO membranes.',
  },
  {
    question: 'What are the signs that my RO water purifier needs urgent repair?',
    answer: 'Common warning signs include continuous water leakage from bottom, slow or stopped water flow, unusual bitter or metallic taste, foul odor, loud pump buzzing noise, or continuous beeping / error indicator lights.',
  },
];

export const HOMEPAGE_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Suresh Kumar',
    locality: 'Whitefield, Bangalore',
    rating: 5,
    brandServiced: 'Kent Grand Plus',
    comment: 'My Kent RO was leaking water continuously. Technician Rajesh came within 45 mins of calling 080502 91180. Fixed the leak and changed sediment filter at very reasonable cost. Highly recommended!',
    date: '2 days ago',
  },
  {
    id: 't2',
    name: 'Ananya Sharma',
    locality: 'Koramangala 4th Block',
    rating: 5,
    brandServiced: 'Aquaguard Active Copper',
    comment: 'Very polite and knowledgeable technician. Tested TDS before and after service (dropped from 650 to 45 PPM). Transparent pricing and no pushy sales. Great RO service in Bangalore.',
    date: '1 week ago',
  },
  {
    id: 't3',
    name: 'Praveen Reddy',
    locality: 'HSR Layout Sector 1',
    rating: 5,
    brandServiced: 'Pureit Ultima RO',
    comment: 'Got my Pureit GKK kit replaced on a Sunday morning. The team responded on WhatsApp immediately. Quick service, genuine parts, and gave proper invoice.',
    date: '2 weeks ago',
  },
  {
    id: 't4',
    name: 'Meenakshi Sundaram',
    locality: 'Indiranagar 100ft Road',
    rating: 5,
    brandServiced: 'AO Smith Z8',
    comment: 'Took their Annual Maintenance Contract (AMC) for my AO Smith RO. Very smooth booking and professional maintenance visit. Drinking water tastes fresh again.',
    date: '3 weeks ago',
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Certified Technicians',
    description: 'Background-verified, expert technicians trained across all RO, UV, UF, and Alkaline water purifier technologies.',
    iconName: 'UserCheck',
  },
  {
    title: '60-Min Quick Response',
    description: 'Local doorstep dispatch across all Bangalore zones ensures fast same-day resolution for urgent water leaks or breakdowns.',
    iconName: 'Zap',
  },
  {
    title: '100% Genuine Spare Parts',
    description: 'We install authentic filters, high-rejection RO membranes, and heavy-duty booster pumps for long-lasting performance.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Upfront & Transparent Pricing',
    description: 'No hidden costs. Technician provides a clear quote post-inspection before starting any repair work.',
    iconName: 'Tag',
  },
  {
    title: 'Doorstep Service All 7 Days',
    description: 'We operate 8 AM to 9 PM every day including weekends and public holidays for maximum convenience.',
    iconName: 'Clock',
  },
  {
    title: '30-Day Service Warranty',
    description: 'Peace of mind with our 30-day post-service warranty on repair work and up to 1 year warranty on major parts.',
    iconName: 'Award',
  },
];
