import { BrandInfo, FAQItem, ServiceItem, Testimonial } from '../types';

export const BUSINESS_DETAILS = {
  name: 'RO-service 24x7',
  fullName: 'RO-service 24x7 - Water Purifier Repair & Service',
  logoUrl: 'https://i.ibb.co/k6cRgnyt/IMG-20260805-WA0010.jpg',
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
  'kent-service': {
    id: 'kent',
    name: 'Kent',
    slug: '/kent-service',
    logoText: 'KENT',
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787415004/IMG-20260822-WA0023_jnpyqh.jpg',
    tagline: 'House of Purity - Your Trusted Kent Service Center Alternative in Bangalore',
    accentColor: 'from-blue-600 to-cyan-500',
    description: 'Looking for fast, reliable Kent RO service in Bangalore? Our certified technicians specialize in Kent Grand Plus, Pearl, Supreme, Prime, Wonder, and all Kent RO+UV+UF water purifiers. We provide professional Kent water purifier service Bangalore relies on, featuring 100% genuine filters and same-day doorstep support.',
    metaTitle: 'Kent Water Purifier Service Bangalore | Kent RO Repair | Call 08050291180',
    metaDescription: 'Need expert Kent RO repair Bangalore? We are your trusted alternative to a Kent service center. Get same-day technician visits, genuine parts, and a 30-day warranty.',
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
        question: 'I am looking for a Kent service near me. How quickly can a technician visit my location?',
        answer: 'We provide same-day service! Once you call 080502 91180, our nearest local technician in your area is dispatched within 60 to 90 minutes to handle your Kent RO repair Bangalore requests.',
      },
      {
        question: 'How much does a Kent RO service or filter replacement cost?',
        answer: 'General service inspection starts at just ₹299. Basic sediment/pre-filter replacement ranges from ₹350–₹600, while complete Kent filter overhaul costs are quoted upfront post-inspection with zero hidden fees.',
      },
      {
        question: 'Is there a Kent RO service center near me in Bangalore?',
        answer: 'Yes! We operate locally across Bangalore. Our roaming technicians mean there is always a Kent service center alternative right in your neighborhood for rapid response.',
      },
      {
        question: 'Are there hidden charges in Kent water purifier service?',
        answer: 'No, we believe in complete transparency. Our visiting charge is fixed, and if any parts are needed, we provide a clear quote before beginning the work.',
      },
      {
        question: 'What is included in the Kent Annual Maintenance Contract (AMC)?',
        answer: 'Our Kent AMC covers regular preventive maintenance, free replacement of sediment and carbon filters, membrane health checks, and unlimited free breakdown visits.',
      },
      {
        question: 'How do I know if my Kent RO membrane needs replacement?',
        answer: 'Signs include a drop in water flow, unusual taste, or if the systems TDS meter indicates high impurity levels. Our technicians can test your Kent RO membrane precisely.',
      },
      {
        question: 'Do you provide a warranty on Kent RO repair in Bangalore?',
        answer: 'Yes, we offer a 30-day warranty on our repair workmanship, plus up to 1-year manufacturer warranty on major replaced parts like pumps and membranes.',
      },
    ],
    popularSearches: [
      'Kent RO service',
      'Kent service center',
      'Kent water purifier service Bangalore',
      'Kent RO repair Bangalore',
      'Kent service near me'
    ],
    showcaseImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787239134/file_00000000cb9082119ada12e5c50c238d_yb23pj.png',
    heroImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786544412/IMG_20260812_194243_himoc3.jpg',
  },

  'aquaguard-service': {
    id: 'aquaguard',
    name: 'Aquaguard',
    slug: '/aquaguard-service',
    logoText: 'Aquaguard',
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787415004/IMG-20260822-WA0025_g9rywx.jpg',
    tagline: 'Paani Ka Doctor - Prompt Aquaguard Service Bangalore Trusts',
    accentColor: 'from-teal-600 to-emerald-500',
    description: 'Get expert doorstep Aquaguard water purifier service in your area. We handle Aquaguard service for models like Geneus, Enhance, Blaze, Ritz, Magna, and all Active Copper systems using authentic spare parts.',
    metaTitle: 'Aquaguard Service Bangalore | RO Repair & Filter Replacement',
    metaDescription: 'Need an Aquaguard RO service center near me? Get expert water purifier repair, copper filter changes, and AMC in Bangalore. Doorstep visit in 60 mins.',
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
        question: 'How can I find a reliable Aquaguard technician near me?',
        answer: 'It is easy! Just call 080502 91180 and we will dispatch a certified Aquaguard technician near you within 60 to 90 minutes. We service all models including Active Copper, Geneus, Enhance, and UTC.',
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
      {
        question: 'Where is the closest Aquaguard RO service center near me?',
        answer: 'We provide a mobile doorstep service throughout Bangalore, making us your fastest alternative to finding a physical Aquaguard RO service center near me.',
      },
      {
        question: 'Do you use authentic parts for Aquaguard service?',
        answer: 'Absolutely. We stock genuine Aquaguard compatible filters, UV lamps, and carbon blocks to ensure your water tastes exactly as it should.',
      },
      {
        question: 'How much time does an Aquaguard water purifier service take?',
        answer: 'A standard service and filter replacement usually takes about 30 to 45 minutes, done entirely at your home.',
      },
      {
        question: 'Why does water taste bitter from my Aquaguard?',
        answer: 'This usually indicates the RO membrane or carbon filter has reached the end of its lifespan. A quick filter change during your Aquaguard service Bangalore visit will restore the natural taste.',
      },
      {
        question: 'Do you provide emergency Aquaguard technician near me services?',
        answer: 'Yes, if your purifier is leaking or completely stopped, we prioritize emergency visits to resolve the issue the very same day.',
      },
    ],
    popularSearches: [
      'Aquaguard service Bangalore',
      'Aquaguard water purifier service',
      'Aquaguard RO service',
      'Aquaguard RO service center near me',
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
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/q_auto,f_auto/v1786031439/pureit_water_logo_zaej67.png',
    tagline: 'Your Dependable Pureit Service Center Alternative in Bangalore',
    accentColor: 'from-sky-600 to-indigo-500',
    description: 'Looking for top-tier Pureit service Bangalore residents trust? Whether you need a GKK (Germkill Kit) replacement or an urgent Pureit water purifier service, we handle Marvella, Ultima, Copper RO+UV, and Mineral RO models with same-day delivery.',
    metaTitle: 'Pureit Service Bangalore | HUL Pureit RO Repair & GKK Replacement',
    metaDescription: 'Fast and reliable Pureit service in Bangalore. Get your GKK filter kit replaced by certified professionals right at your doorstep. Book your repair today!',
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
        question: 'I need a Pureit service center near me for GKK replacement. Can you help?',
        answer: 'Absolutely. If your indicator turns red and water flow stops, there is no need to travel. We act as a faster alternative to a traditional Pureit service center by bringing the original Germkill Kit directly to your doorstep in Bangalore.',
      },
      {
        question: 'Do you carry original HUL Pureit Germkill Kits?',
        answer: 'Yes, our technicians carry sealed, original Pureit GKK kits for 1500L, 2000L, 3000L, and 6000L models to replace them on the spot.',
      },
      {
        question: 'Can you convert my Pureit RO to handle higher Bangalore borewell TDS?',
        answer: 'Yes, if your local raw water TDS has increased, we can tune your Pureit RO system with a high-rejection 3000+ PPM membrane for crisp, pure water.',
      },
      {
        question: 'Is there a Pureit service center near my location?',
        answer: 'With technicians deployed across all major Bangalore zones, we function as a highly responsive Pureit service center alternative right at your doorstep.',
      },
      {
        question: 'Does your Pureit service include tank cleaning?',
        answer: 'Yes, every comprehensive Pureit water purifier service includes deep cleaning and sanitization of your water storage tank.',
      },
      {
        question: 'Why is my Pureit Marvella showing a filter change error?',
        answer: 'Pureit devices have built-in digital alerts. When it is time for a GKK change, the indicator will notify you. We can quickly reset this during our service visit.',
      },
      {
        question: 'How do I book a Pureit service Bangalore appointment?',
        answer: 'You can simply call our helpline or fill out the booking form on our website. We arrange same-day service visits.',
      },
      {
        question: 'Are your technicians certified for Pureit RO repair?',
        answer: 'Our technicians undergo rigorous training specifically on HUL Pureit models, ensuring your device is handled by professionals.',
      },
      {
        question: 'What is the warranty on Pureit GKK replacement?',
        answer: 'We offer a 30-day service warranty on our work, giving you peace of mind that the new Pureit Germkill Kit is installed perfectly.',
      },
    ],
    popularSearches: [
      'Pureit service',
      'Pureit water purifier service',
      'Pureit service center',
      'Pureit service Bangalore'
    ],
    showcaseImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787239134/file_0000000011a48211aeafadfc49fb86c5_ohr8va.png',
    heroImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786544412/IMG_20260812_194420_cdv3yx.jpg',
  },

  'aosmith-service': {
    id: 'ao-smith',
    name: 'AO Smith',
    slug: '/aosmith-service',
    logoText: 'A. O. SMITH',
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787415004/IMG-20260822-WA0024_esaktr.jpg',
    tagline: 'Premium AO Smith Water Purifier Service & Filter Replacement',
    accentColor: 'from-blue-700 to-slate-700',
    description: 'Looking for specialized AO Smith RO repair Bangalore? We provide expert care for AO Smith Z8, Z9, X8, ProPlanet, and Green Series RO systems. Enjoy peace of mind with our doorstep AO Smith RO service featuring genuine SCM and MIN-TECH filters.',
    metaTitle: 'AO Smith Water Purifier Service Bangalore | Fast RO Repair',
    metaDescription: 'Need an AO Smith technician near me? Get professional AO Smith water purifier service, filter replacement, and prompt AMC support across Bangalore today.',
    commonProblems: [
      'AO Smith touch panel or water output button not working',
      'SCM membrane or MIN-TECH cartridge change indicator glowing',
      'Low water flow or temperature indicator error in Z8/Z9',
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
        question: 'How quickly can I get an AO Smith RO service near me?',
        answer: 'We dispatch a certified AO Smith technician near you within 60 to 90 minutes. Whether your Z8 purifier water output is slow or you need a filter change, we handle it quickly and professionally.',
      },
      {
        question: 'Are your service charges reasonable for premium brands like AO Smith?',
        answer: 'Yes, our visiting & inspection fee is just ₹299. All replacement parts are priced transparently before installation so you pay only for what you need.',
      },
      {
        question: 'Can I find an AO Smith RO service near me today?',
        answer: 'Yes! We offer same-day doorstep visits across Bangalore, meaning an expert AO Smith RO service near you is just a phone call away.',
      },
      {
        question: 'Do you resolve AO Smith RO repair Bangalore heating issues?',
        answer: 'Yes, for models like the AO Smith Z8 with hot water dispensers, we repair thermostat and heating tank issues safely and effectively.',
      },
      {
        question: 'Why is my AO Smith water purifier beeping?',
        answer: 'This is usually a filter replacement alert or a UV failure warning. An AO Smith technician near me from our team can quickly diagnose and replace the necessary components.',
      },
      {
        question: 'Does your AO Smith water purifier service include a warranty?',
        answer: 'We provide a comprehensive 30-day service warranty on all repair tasks and standard warranties on authentic AO Smith spare parts.',
      },
      {
        question: 'How often should I schedule an AO Smith RO service?',
        answer: 'We recommend a preventive maintenance check every 6 to 8 months, especially in areas of Bangalore with high borewell water TDS.',
      },
      {
        question: 'Is it safe to drink water immediately after AO Smith filter replacement?',
        answer: 'We flush the new filters during the service, but we recommend draining the first tank of water before consumption just to be absolutely sure.',
      },
    ],
    popularSearches: [
      'AO Smith water purifier service',
      'AO Smith RO service',
      'AO Smith RO service near me',
      'AO Smith RO repair Bangalore',
      'AO Smith technician near me'
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
    tagline: 'Expert LG Water Purifier Service Bangalore Residents Trust',
    accentColor: 'from-rose-600 to-red-600',
    description: 'Looking for prompt LG RO repair Bangalore? We provide top-rated maintenance for LG PuriCare, Stainless Steel Tank RO, and Dual Protection UV models. Our doorstep service includes hygienic digital sterilization and genuine parts.',
    metaTitle: 'LG RO Repair Bangalore | LG Water Purifier Service',
    metaDescription: 'Searching for an LG water purifier service near me? Get fast LG water purifier filter replacement Bangalore counts on, with genuine spares and a 30-day warranty.',
    commonProblems: [
      'LG Stainless Steel tank UV sterilizing light malfunction',
      'Digital filter change indicator icon glowing red on LG panel',
      'Water leaking from bottom body or drain pipe valve',
      'Purified water taste feels unusual or TDS output is high',
      'LG RO pump making loud humming or vibrating noise',
      'No water output from tap or touch button',
    ],
    brandFaqs: [
      {
        question: 'Do you clean and sterilize LG stainless steel water tanks?',
        answer: 'Yes! During servicing, we thoroughly descale and sanitize the LG internal stainless steel tank using safe food-grade sanitizing kits and UV verification.',
      },
      {
        question: 'How do I find a certified LG RO technician near me?',
        answer: 'You can book an expert with us instantly! We send a skilled technician to handle your LG water purifier filter replacement Bangalore requests directly at your doorstep, usually completing the job in 30 to 45 minutes.',
      },
      {
        question: 'Do you provide service warranty on LG repairs?',
        answer: 'Yes, all repair work and replaced spare parts carry our 30-day post-service warranty for complete peace of mind.',
      },
      {
        question: 'Where can I find an LG water purifier service near me?',
        answer: 'Our mobile technicians cover all of Bangalore, providing a fast, reliable LG water purifier service near me without you having to travel.',
      },
      {
        question: 'Are you an authorized LG RO repair Bangalore provider?',
        answer: 'We are an independent, premium repair network specializing in LG water purifiers, using authentic spares for high-quality out-of-warranty service.',
      },
      {
        question: 'How quickly can an LG RO technician near me arrive?',
        answer: 'In most cases, we can dispatch an expert LG RO technician near you within 60 to 90 minutes of your booking confirmation.',
      },
      {
        question: 'What does LG water purifier filter replacement Bangalore cost?',
        answer: 'Costs vary based on whether you need a basic pre-filter or a complete RO membrane change. We always quote you clearly after the initial ₹299 inspection.',
      },
      {
        question: 'Does LG dual protection RO require special service?',
        answer: 'Yes, LGs stainless steel tanks and digital UV sterilization require careful handling, which our trained technicians are fully equipped to perform.',
      },
      {
        question: 'Why is water leaking from my LG purifier?',
        answer: 'Leaks can occur from worn-out O-rings or loose inlet valves. We quickly seal and repair these leaks during our service visit.',
      },
    ],
    popularSearches: [
      'LG water purifier service Bangalore',
      'LG RO repair Bangalore',
      'LG water purifier service near me',
      'LG RO technician near me',
      'LG water purifier filter replacement Bangalore'
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
