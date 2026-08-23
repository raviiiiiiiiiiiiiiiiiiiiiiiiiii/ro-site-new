import { BrandInfo, FAQItem, ServiceItem, Testimonial } from '../types';

export const BUSINESS_DETAILS = {
  name: 'Ro-service',
  fullName: 'Ro-service - Water Purifier Repair & Maintenance',
  logoUrl: 'https://i.ibb.co/k6cRgnyt/IMG-20260805-WA0010.jpg',
  phone: '08050291180',
  formattedPhone: '080502 91180',
  whatsappNumber: '918050291180',
  address: 'Bangalore, Karnataka, India',
  city: 'Bangalore',
  state: 'Karnataka',
  pincodePlaceholder: '560001',
  workingHours: '8:00 AM - 9:00 PM (All 7 Days)',
  email: 'contact@roservice.in',
  formSubmitEmail: 'syedsmaula786@gmail.com',
  disclaimer: 'Disclaimer: Ro-service is an independent multi-brand water purifier service center in Bangalore. We provide repair, maintenance, and genuine filter replacement services. Brand names and logos are used strictly for identification and compatibility purposes.',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'ro-repair',
    title: 'Diagnostic Inspection & RO Repair',
    description: 'Comprehensive troubleshooting for water leakage, low output flow, pump vibration, power failure, or beeping error alerts on any RO system.',
    iconName: 'Wrench',
    features: ['Precise on-site diagnosis', '100% genuine components', 'Same-day fault resolution', '30-day labor warranty'],
    popularTag: 'Most Requested',
    startingPrice: '₹299',
  },
  {
    id: 'filter-replacement',
    title: 'Multi-Stage Filter & Membrane Overhaul',
    description: 'Complete replacement of spun sediment filters, activated pre/post carbon blocks, and high-rejection RO membranes for pure, sweet water.',
    iconName: 'Filter',
    features: ['High-TDS rejection membranes', 'Eliminates odors & contaminants', 'TDS & pH balance restored', 'Complimentary TDS test'],
    popularTag: 'Recommended Yearly',
    startingPrice: '₹350',
  },
  {
    id: 'ro-installation',
    title: 'Precision Mounting & Relocation',
    description: 'Secure wall installation, leak-proof plumbing integration, inlet pressure regulation, and clean uninstallation during home relocation.',
    iconName: 'Download',
    features: ['Heavy-duty wall mounting', 'Water pressure balancing', 'Pre-filter bowl assembly', 'Operational demonstration'],
    startingPrice: '₹499',
  },
  {
    id: 'ro-amc',
    title: 'Annual Maintenance Contract (AMC)',
    description: 'Complete year-round protection including scheduled preventive maintenance, free replacement filters & membranes, and unlimited breakdown visits.',
    iconName: 'ShieldCheck',
    features: ['3 Scheduled preventive visits', 'All routine filters covered', 'Zero labor charges all year', 'Priority technician response'],
    popularTag: 'Best Value Plan',
    startingPrice: '₹2,499 / Year',
  },
  {
    id: 'uv-uf-servicing',
    title: 'UV Disinfection & UF Cartridge Servicing',
    description: 'Ultraviolet disinfection tube testing, quartz sleeve cleaning, and ultra-filtration membrane flushing to guarantee pathogen-free water.',
    iconName: 'Zap',
    features: ['99.9% microbe elimination', 'Quartz sleeve descaling', 'Electronic ballast inspection', 'Essential mineral retention'],
    startingPrice: '₹399',
  },
  {
    id: 'tds-quality-check',
    title: 'Water Purity & Digital TDS Calibration',
    description: 'Accurate electronic TDS measurement, mineral balance assessment, and raw vs purified water testing to guarantee pure, safe drinking water.',
    iconName: 'Activity',
    features: ['Digital TDS meter reading', 'Raw vs filtered analysis', 'Filter health evaluation', 'Free with every service'],
    startingPrice: 'FREE with Service',
  },
];

export const BRAND_PAGES_DATA: Record<string, BrandInfo> = {
  'kent-service': {
    id: 'kent',
    name: 'Kent',
    slug: '/kent-service',
    logoText: 'KENT',
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787456695/IMG-20260822-WA0038_eea1tq.jpg',
    tagline: 'Pure & Mineral-Rich Water — Specialized Kent RO Repair & Maintenance',
    accentColor: 'from-blue-600 to-cyan-500',
    description: 'Keep your Kent water purifier operating at peak efficiency. Our seasoned technicians specialize in Kent Grand Plus, Pearl, Supreme, Prime, Wonder, and Under-Counter RO systems across Bangalore. We deliver prompt doorstep servicing, authentic filter replacements, and meticulous mineral calibration with same-day technician visits.',
    metaTitle: 'Kent RO Repair & Service Bangalore | Doorstep Filter Replacement',
    metaDescription: 'Expert doorstep Kent RO service across Bangalore. Same-day technician visits, genuine high-TDS rejection membranes, mineral filters & 30-day warranty.',
    commonProblems: [
      'Continuous beeping alert or UV failure indicator sound in Kent purifier',
      'Water leaking from bottom casing, inlet connectors, or auto-flush valve',
      'Low water flow speed or extremely slow storage tank filling',
      'Bitter, brackish, or uncharacteristic taste in purified drinking water',
      'SMPS power adapter burnt or machine failing to power on',
      'High TDS output due to exhausted RO membrane or clogged pre-carbon filter',
    ],
    brandFaqs: [
      {
        question: 'Are your technicians trained specifically on Kent RO systems?',
        answer: 'Yes, our senior technicians have extensive hands-on expertise with all Kent models including Kent Grand, Prime, Supreme, Pearl, Mineral RO, and Under-Sink commercial purifiers throughout Bangalore.',
      },
      {
        question: 'Do you provide authentic Kent replacement filters and RO membranes?',
        answer: 'We exclusively fit certified high-grade sediment filters, coconut shell carbon blocks, Philips UV lamps, and authentic high-rejection RO membranes built to handle Bangalore borewell water.',
      },
      {
        question: 'How fast can a technician arrive at my home in Bangalore?',
        answer: 'Our local technicians are positioned across Bangalore, reaching your doorstep within 60 to 90 minutes of booking confirmation.',
      },
      {
        question: 'What is the starting cost for Kent RO servicing?',
        answer: 'Our doorstep inspection and complete diagnostic check starts at just ₹299. If you proceed with recommended filter changes or repairs, this fee is adjusted against the final invoice.',
      },
      {
        question: 'Why is my Kent RO purifier making a continuous beeping sound?',
        answer: 'A constant beeping alert typically indicates a UV lamp failure or an electronic sensor alert. Our technician will inspect the UV ballast and lamp assembly to resolve the issue on the spot.',
      },
      {
        question: 'What does a Kent Annual Maintenance Contract (AMC) include?',
        answer: 'Our Kent AMC plan includes 3 scheduled preventive maintenance visits, complete replacement of sediment and carbon filters, membrane health testing, and unlimited free breakdown calls throughout the year.',
      },
      {
        question: 'How do I know when to replace my Kent RO membrane?',
        answer: 'Key indicators include a noticeable drop in flow rate, a rise in water TDS level, or a flat/unusual taste. We conduct electronic TDS tests before and after any filter replacement to verify membrane performance.',
      },
      {
        question: 'Do you offer a post-service warranty on Kent repairs?',
        answer: 'Yes, we provide an ironclad 30-day labor warranty on all repair work, along with manufacturer warranties on newly fitted booster pumps, SMPS units, and RO membranes.',
      },
      {
        question: 'Can you adjust the mineral and TDS level on my Kent RO?',
        answer: 'Yes, our technicians calibrate the built-in Kent TDS controller and mineralizer valve to achieve the ideal 50–120 PPM drinking water range recommended for health.',
      },
    ],
    popularSearches: [
      'Kent RO service Bangalore',
      'Kent water purifier repair',
      'Kent filter replacement cost',
      'Kent RO AMC plan Bangalore',
      'Kent RO technician near me'
    ],
    showcaseImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787239134/file_00000000cb9082119ada12e5c50c238d_yb23pj.png',
    heroImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786544412/IMG_20260812_194243_himoc3.jpg',
  },

  'aquaguard-service': {
    id: 'aquaguard',
    name: 'Aquaguard',
    slug: '/aquaguard-service',
    logoText: 'Aquaguard',
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787456695/IMG-20260822-WA0036_aymptj.jpg',
    tagline: 'Pure & Safe Hydration — Professional Aquaguard RO Repair & Care',
    accentColor: 'from-teal-600 to-emerald-500',
    description: 'Experience dedicated doorstep care for your Eureka Forbes Aquaguard purifier. We service Geneus, Enhance, Blaze, Ritz, Magna, Active Copper, and Biotron models across Bangalore. Enjoy rapid diagnostic turnaround, original replacement cartridges, and sanitized tank maintenance.',
    metaTitle: 'Aquaguard Service Bangalore | RO Repair & Copper Filter Change',
    metaDescription: 'Certified Aquaguard RO repair & service across Bangalore. Doorstep copper cartridge replacement, UV sterilizer repair, and affordable AMC plans.',
    commonProblems: [
      'Active Copper cartridge blocked or requiring scheduled renewal',
      'Blinking red or orange warning indicator with continuous buzzer chime',
      'Sudden drop in purified water output flow or tank not filling',
      'Water dripping from internal push-fit connectors or valve joints',
      'UV disinfection tube error or electronic sensor malfunction',
      'Metallic or bitter aftertaste in purified drinking water',
    ],
    brandFaqs: [
      {
        question: 'How quickly can I get an Aquaguard technician at my residence?',
        answer: 'Our mobile service network covers every major neighborhood in Bangalore. Once booked, a certified technician arrives at your doorstep within 60 to 90 minutes.',
      },
      {
        question: 'Do you replace authentic Aquaguard Active Copper and Biotron cartridges?',
        answer: 'Yes, we carry original Active Copper, Mineral Guard, Chemi-Block, and HD RO cartridges designed specifically for Eureka Forbes Aquaguard purifiers.',
      },
      {
        question: 'What is included during an Aquaguard full service visit?',
        answer: 'A comprehensive check includes input/output TDS measurement, pre-filter candle cleaning, high-pressure pump testing, UV tube inspection, electronic leak test, and sanitized storage tank cleaning.',
      },
      {
        question: 'Why is my Aquaguard blinking a red light and beeping?',
        answer: 'A flashing red light with an audible beep typically signals that the internal filter lifecycle has elapsed or that the UV sterilizer requires attention. Our technician can replace the needed cartridge and reset the sensor counter on-site.',
      },
      {
        question: 'Do you provide AMC plans for Aquaguard water purifiers in Bangalore?',
        answer: 'Yes, our Aquaguard Annual Maintenance Contracts provide comprehensive coverage with scheduled filter replacements, regular sanitization visits, and free emergency breakdown calls.',
      },
      {
        question: 'How often should Aquaguard Active Copper cartridges be replaced?',
        answer: 'We recommend replacing the Active Copper cartridge every 12 months or 6,000 liters to ensure consistent copper infusion and optimum water purity.',
      },
      {
        question: 'Are your service charges fixed and transparent?',
        answer: 'Yes. Our technician provides a clear, itemized quote after the physical inspection, with zero surprise fees or hidden add-ons.',
      },
      {
        question: 'Do you offer a warranty on Aquaguard replacement parts?',
        answer: 'All repair work includes our 30-day labor guarantee, plus full warranty coverage on replaced membranes, pumps, and electronics.',
      },
      {
        question: 'Can you handle Aquaguard models with hot & cold water dispensers?',
        answer: 'Yes, our technicians are trained to service Aquaguard Blaze and other dual-temperature systems, safely testing heating coils and cooling thermostats.',
      },
    ],
    popularSearches: [
      'Aquaguard service Bangalore',
      'Aquaguard Active Copper filter replacement',
      'Aquaguard RO repair cost',
      'Aquaguard AMC plan Bangalore',
      'Aquaguard technician near me'
    ],
    showcaseImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787239134/file_000000009e748211af646f5d6dda5fcb_wzukgr.png',
    heroImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786544412/IMG_20260812_194328_pcq7uw.png',
  },

  'pureit-service': {
    id: 'pureit',
    name: 'HUL Pureit',
    slug: '/pureit-service',
    logoText: 'Pureit',
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787456695/IMG-20260822-WA0034_vmyqqk.jpg',
    tagline: 'Reliable Water Purity — Fast HUL Pureit GKK Kit & RO Servicing',
    accentColor: 'from-sky-600 to-indigo-500',
    description: 'Keep your HUL Pureit water purifier in perfect working order. We provide swift doorstep maintenance for Pureit Marvella, Ultima, Copper RO+UV, Mineral RO, and Classic models across Bangalore. From original Germkill Kit (GKK) renewals to motor repairs, our certified experts deliver same-day peace of mind.',
    metaTitle: 'Pureit Service Bangalore | HUL Pureit GKK Replacement & Repair',
    metaDescription: 'Same-day doorstep HUL Pureit water purifier repair & GKK filter replacement in Bangalore. Genuine parts, electronic reset, and 30-day labor warranty.',
    commonProblems: [
      'Pureit Germkill Kit (GKK) indicator turned red with automatic water lock activated',
      'No water output despite sufficient inlet water supply and power',
      'Continuous beep warning alert or error code on Ultima digital display',
      'Water leaking from internal connectors, solenoid valve, or GKK chamber',
      'Booster pump humming without delivering water pressure to membrane',
      'High TDS readings or unpleasant taste after prolonged filter operation',
    ],
    brandFaqs: [
      {
        question: 'Do you carry original HUL Pureit Germkill Kits (GKK)?',
        answer: 'Yes, our technicians carry factory-sealed, genuine Pureit GKK kits for 1500L, 2000L, 3000L, and 6000L purifiers, ensuring authentic replacement on the spot.',
      },
      {
        question: 'My Pureit stopped dispensing water because the light is red. Can you fix it today?',
        answer: 'Yes! The red indicator is Pureits auto-shutoff safety mechanism. Our technician will visit within 60 to 90 minutes, replace the GKK kit, reset the digital indicator, and restore immediate water flow.',
      },
      {
        question: 'Can you upgrade my Pureit purifier to handle high Bangalore borewell TDS?',
        answer: 'Absolutely. We can install high-rejection 3000+ PPM RO membranes and auxiliary pre-filter housings to safeguard your Pureit system against heavy borewell sediment.',
      },
      {
        question: 'Does Pureit servicing include storage tank sanitization?',
        answer: 'Yes, every comprehensive service includes thorough sanitization and descaling of the internal storage reservoir to maintain optimal hygiene.',
      },
      {
        question: 'How long does a Pureit GKK replacement visit take?',
        answer: 'A standard GKK kit replacement and complete diagnostic inspection typically takes between 30 to 45 minutes right in your home.',
      },
      {
        question: 'What is the cost of Pureit RO servicing in Bangalore?',
        answer: 'Our doorstep inspection fee is ₹299 (adjusted upon service completion). Replacement GKK kits and parts are priced transparently at fair rates.',
      },
      {
        question: 'Do you provide AMC coverage for HUL Pureit models?',
        answer: 'Yes, our Pureit AMC contracts cover all regular GKK kit replacements, preventive checkups, and unlimited breakdown repairs with zero labor charges.',
      },
      {
        question: 'Are your technicians certified for Pureit digital models?',
        answer: 'Our technicians possess specialized diagnostic tools to decode error alerts on digital displays for Pureit Ultima, Copper RO, and Marvella purifiers.',
      },
      {
        question: 'What warranty is provided on Pureit repair work?',
        answer: 'We provide a 30-day labor warranty on all repairs, ensuring you have total confidence in our workmanship.',
      },
    ],
    popularSearches: [
      'Pureit service Bangalore',
      'Pureit GKK replacement Bangalore',
      'Pureit RO repair near me',
      'Pureit Marvella filter change',
      'Pureit AMC plan Bangalore'
    ],
    showcaseImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787239134/file_0000000011a48211aeafadfc49fb86c5_ohr8va.png',
    heroImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786544412/IMG_20260812_194420_cdv3yx.jpg',
  },

  'aosmith-service': {
    id: 'ao-smith',
    name: 'AO Smith',
    slug: '/aosmith-service',
    logoText: 'A. O. SMITH',
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787456694/IMG-20260822-WA0039_l3llhm.jpg',
    tagline: 'Engineered Excellence — Premium AO Smith RO Repair & Filter Replacement',
    accentColor: 'from-blue-700 to-slate-700',
    description: 'Protect your investment with dedicated AO Smith water purifier servicing. We support AO Smith Z8, Z9, X8, ProPlanet, and Green Series RO purifiers across Bangalore. Benefit from authentic SCM membranes, MIN-TECH mineralizers, and expert maintenance for hot water dispensing systems.',
    metaTitle: 'AO Smith Water Purifier Service Bangalore | Fast RO Repair & SCM Filter',
    metaDescription: 'Specialized AO Smith RO repair & filter replacement across Bangalore. Doorstep service for Z8, Z9, X8 with genuine SCM membranes & MIN-TECH cartridges.',
    commonProblems: [
      'Touch panel unresponsive or water dispense button not triggering',
      'SCM membrane or MIN-TECH mineralizer cartridge change indicator glowing',
      'Hot water heating failure or thermostat indicator error in Z8/Z9 models',
      'Purifier continuously draining wastewater without shutting off automatically',
      'Internal water leakage around high-pressure fittings and solenoid valves',
      'Power light blinking intermittently or display unit failure',
    ],
    brandFaqs: [
      {
        question: 'Do you carry original AO Smith MIN-TECH and SCM replacement filters?',
        answer: 'Yes, we stock genuine AO Smith pre-filter cartridges, sediment filters, activated carbon blocks, patented SCM membranes, and MIN-TECH mineral cartridges.',
      },
      {
        question: 'Can you repair heating and hot water dispensing faults on AO Smith Z8/Z9 purifiers?',
        answer: 'Yes, our senior technicians are certified in repairing heating elements, thermal safety sensors, and PCB controllers on AO Smith hot water RO units.',
      },
      {
        question: 'How fast can an AO Smith technician visit my home in Bangalore?',
        answer: 'We dispatch a technician within 60 to 90 minutes of your booking confirmation across all Bangalore localities.',
      },
      {
        question: 'Why is my AO Smith purifier continuously beeping?',
        answer: 'Continuous beeping or illuminated icons indicate filter life expiration or internal pressure imbalance. Our technician will test each stage and reset the digital alert.',
      },
      {
        question: 'What is the visiting and diagnostic fee for AO Smith systems?',
        answer: 'Our diagnostic inspection is ₹299. All necessary replacement components are quoted clearly before installation.',
      },
      {
        question: 'How often should AO Smith MIN-TECH mineralizer cartridges be replaced?',
        answer: 'We recommend replacing the MIN-TECH cartridge every 12 months to ensure essential calcium and magnesium minerals are added back to your drinking water.',
      },
      {
        question: 'Do you offer an Annual Maintenance Contract (AMC) for AO Smith purifiers?',
        answer: 'Yes, our comprehensive AO Smith AMC includes regular preventive servicing, filter changes, membrane checks, and zero-cost breakdown support.',
      },
      {
        question: 'What warranty is offered on AO Smith repair and spare parts?',
        answer: 'Every service includes a 30-day labor warranty, alongside standard manufacturer warranties on replacement pumps and electronic boards.',
      },
      {
        question: 'Why is my AO Smith RO running wastewater non-stop?',
        answer: 'This is commonly caused by a faulty auto-shutoff valve or high-pressure switch. Our technician can replace the defective switch on the spot.',
      },
    ],
    popularSearches: [
      'AO Smith water purifier service Bangalore',
      'AO Smith RO repair near me',
      'AO Smith MIN-TECH filter replacement',
      'AO Smith Z8 hot water repair',
      'AO Smith AMC cost Bangalore'
    ],
    showcaseImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787239134/file_00000000fd3c8211b4b336a783a3474e_wzjdjr.png',
    heroImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786544412/IMG_20260812_194311_vmj5ot.jpg',
  },

  'lg-service': {
    id: 'lg',
    name: 'LG',
    slug: '/lg-service',
    logoText: 'LG',
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/q_auto,f_auto/v1786032689/images_5_t36ctz.png',
    tagline: 'Hygienic Sterilization & Pure Care — Specialized LG Water Purifier Maintenance',
    accentColor: 'from-rose-600 to-red-600',
    description: 'Maintain peak hygienic safety with expert servicing for LG PuriCare, Stainless Steel Tank RO, and Dual Protection UV systems. Our certified technicians across Bangalore deliver thorough digital sterilization, genuine filter renewals, and precision leak resolution.',
    metaTitle: 'LG RO Repair Bangalore | LG PuriCare Water Purifier Service & Filter Change',
    metaDescription: 'Professional LG water purifier repair in Bangalore. Expert stainless steel tank descaling, genuine filter replacement, and prompt doorstep technician service.',
    commonProblems: [
      'LG Stainless Steel tank digital UV sterilizing indicator warning alert',
      'Filter change alert icon glowing red on the LG PuriCare front panel',
      'Slow water filtration speed into the dual protection storage tank',
      'Water leaking from bottom drainage port or internal pressure valve',
      'Booster pump making loud humming or excessive vibrating noise',
      'No water dispensing from tap or capacitive touch sensor',
    ],
    brandFaqs: [
      {
        question: 'Do you provide specialized cleaning for LG stainless steel water tanks?',
        answer: 'Yes! During servicing, we thoroughly descale, sanitize, and verify the internal dual protection stainless steel reservoir using food-grade sanitization procedures.',
      },
      {
        question: 'How fast can an LG RO technician reach my location?',
        answer: 'Our mobile technicians are stationed across Bangalore, reaching your address within 60 to 90 minutes of booking.',
      },
      {
        question: 'Do you carry genuine LG PuriCare replacement filters and membranes?',
        answer: 'Yes, we supply authentic LG-compatible sediment filters, activated pre-carbon blocks, post-carbon mineral cartridges, and certified high-rejection RO membranes.',
      },
      {
        question: 'What is the diagnostic inspection fee for LG water purifiers?',
        answer: 'Our doorstep inspection fee is ₹299. If you proceed with our recommended service or part replacement, this fee is adjusted on your invoice.',
      },
      {
        question: 'Why is the red filter indicator glowing on my LG PuriCare?',
        answer: 'The red indicator indicates that the internal filter capacity has reached its threshold. Our technician will perform the replacement and reset the internal diagnostic counter.',
      },
      {
        question: 'Do you provide AMC plans for LG water purifiers in Bangalore?',
        answer: 'Yes, our LG AMC plan provides complete yearly coverage with scheduled maintenance visits, filter replacements, and unlimited free breakdown repairs.',
      },
      {
        question: 'What is the post-service warranty on LG repair jobs?',
        answer: 'We provide a 30-day labor warranty on all repairs and standard replacement warranties on all newly installed spare parts.',
      },
      {
        question: 'Why is my LG RO purifier making loud pump noise?',
        answer: 'Unusual pump noise usually results from air entrapment, low inlet water pressure, or worn pump bearings. We diagnose and rectify pump issues quickly on-site.',
      },
      {
        question: 'Can you calibrate the TDS level on an LG RO system?',
        answer: 'Yes, our technicians adjust and balance the mineral output to ensure your drinking water is pure, crisp, and in the healthy TDS range.',
      },
    ],
    popularSearches: [
      'LG water purifier service Bangalore',
      'LG PuriCare filter replacement',
      'LG RO repair near me',
      'LG stainless steel tank cleaning',
      'LG RO AMC cost Bangalore'
    ],
    showcaseImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787239134/file_0000000041048211bfb990996067ea39_yiuihn.png',
    heroImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786544412/IMG_20260812_194339_j4gjia.jpg',
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
    question: 'How quickly can a service technician visit my home in Bangalore?',
    answer: 'We provide prompt 60 to 90 minute doorstep service across all Bangalore areas including Whitefield, Koramangala, HSR Layout, Indiranagar, Electronic City, Marathahalli, Bellandur, Hebbal, and Jayanagar. You can book online or call 080502 91180 for immediate dispatch.',
  },
  {
    question: 'Which water purifier brands do you repair and service in Bangalore?',
    answer: 'We service all leading domestic and commercial water purifier brands including Kent, Aquaguard (Eureka Forbes), HUL Pureit, AO Smith, LG, Livpure, Blue Star, Havells, V-Guard, Zero B, and custom multi-stage RO+UV+UF systems.',
  },
  {
    question: 'What is the visiting and diagnostic inspection fee?',
    answer: 'Our initial doorstep inspection and diagnostic check fee is just ₹299. If you proceed with the recommended repair or filter replacement through us, this fee is adjusted against your final invoice.',
  },
  {
    question: 'How often should RO water purifier filters and membranes be replaced?',
    answer: 'Sediment and Activated Carbon pre-filters should generally be replaced every 6 to 12 months depending on raw water turbidity and daily usage. High-TDS RO Membranes typically last 18 to 24 months. We conduct digital TDS testing before and after service to verify performance.',
  },
  {
    question: 'What is included in an Annual Maintenance Contract (AMC)?',
    answer: 'Our comprehensive AMC plan includes 3 scheduled preventive maintenance visits per year, complete replacement of sediment and carbon filters, RO membrane health testing, zero labor charges on breakdown visits, and priority technician dispatch across Bangalore.',
  },
  {
    question: 'Do you use 100% genuine spare parts and high-rejection membranes?',
    answer: 'Yes! We strictly install certified high-density sediment cartridges, coconut-shell activated carbon blocks, high-TDS rejection RO membranes, heavy-duty booster pumps, and food-grade silicone tubing for long-lasting reliability.',
  },
  {
    question: 'Do you offer a warranty on repairs and replaced parts?',
    answer: 'Yes, we provide a 30-day labor warranty on our workmanship and up to 1-year manufacturer warranty on major replaced components including booster pumps, SMPS power adapters, and RO membranes.',
  },
  {
    question: 'What are the main warning signs that my RO purifier needs immediate repair?',
    answer: 'Key warning signs include continuous water leakage from the bottom or pipes, low or stopped water output, foul smell or bitter/metallic taste, loud pump buzzing/vibrations, and persistent beeping or red indicator error lights.',
  },
];

export const HOMEPAGE_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Suresh Kumar',
    locality: 'Whitefield, Bangalore',
    rating: 5,
    brandServiced: 'Kent Grand Plus',
    comment: 'My Kent RO started leaking from the bottom connectors. The technician arrived within 40 minutes of calling 080502 91180, fixed the leak, and replaced the sediment filter cleanly. Very transparent pricing!',
    date: '2 days ago',
  },
  {
    id: 't2',
    name: 'Ananya Sharma',
    locality: 'Koramangala 4th Block',
    rating: 5,
    brandServiced: 'Aquaguard Active Copper',
    comment: 'Courteous and skilled technician. Tested our water TDS before and after service (dropped from 580 to 42 PPM). Great communication, no hidden fees, and excellent water taste.',
    date: '1 week ago',
  },
  {
    id: 't3',
    name: 'Praveen Reddy',
    locality: 'HSR Layout Sector 1',
    rating: 5,
    brandServiced: 'Pureit Ultima RO',
    comment: 'Got my Pureit GKK kit replaced on a Sunday morning. The team arranged a technician in under an hour. Quick job, genuine sealed parts, and digital receipt provided.',
    date: '2 weeks ago',
  },
  {
    id: 't4',
    name: 'Meenakshi Sundaram',
    locality: 'Indiranagar 100ft Road',
    rating: 5,
    brandServiced: 'AO Smith Z8',
    comment: 'Opted for their Annual Maintenance Contract for our AO Smith purifier. Smooth booking process, thorough preventive inspection, and water tastes completely fresh again.',
    date: '3 weeks ago',
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Certified Senior Technicians',
    description: 'Background-verified, experienced specialists trained across all RO, UV, UF, and Alkaline water purifier technologies.',
    iconName: 'UserCheck',
  },
  {
    title: '60–90 Min Doorstep Arrival',
    description: 'Strategically located technicians across all Bangalore zones ensure rapid same-day response for urgent leaks and breakdowns.',
    iconName: 'Zap',
  },
  {
    title: '100% Genuine Spare Parts',
    description: 'We install authentic filters, high-rejection RO membranes, and heavy-duty booster pumps for long-lasting water purity.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Upfront & Transparent Quotations',
    description: 'No hidden charges. Our technician gives an itemized quote after the physical diagnosis before starting any repair work.',
    iconName: 'Tag',
  },
  {
    title: 'Doorstep Service All 7 Days',
    description: 'We operate from 8:00 AM to 9:00 PM every day including weekends and public holidays for your convenience.',
    iconName: 'Clock',
  },
  {
    title: '30-Day Service Warranty',
    description: 'Enjoy total peace of mind with our 30-day labor guarantee on repairs and up to 1-year warranty on major components.',
    iconName: 'Award',
  },
];
