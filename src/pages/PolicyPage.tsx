import React from 'react';
import { Phone, MapPin, Mail, ShieldCheck, ArrowLeft } from 'lucide-react';
import { BUSINESS_DETAILS, BRAND_PAGES_DATA } from '../data/content';
import { PageRoute } from '../types';

interface PolicyPageProps {
  route: PageRoute;
  onNavigate: (route: PageRoute) => void;
  lastBrandRoute?: PageRoute | null;
}

interface Section {
  heading: string;
  text?: string;
  bullets?: string[];
  additionalText?: string;
}

interface PolicyContent {
  title: string;
  lastUpdated: string;
  sections: Section[];
}

export const PolicyPage: React.FC<PolicyPageProps> = ({ route, onNavigate, lastBrandRoute }) => {
  const getPolicyContent = (): PolicyContent => {
    switch (route) {
      case '/terms-of-service':
        return {
          title: 'Terms and Conditions',
          lastUpdated: 'August 6, 2026',
          sections: [
            {
              heading: 'Welcome to RO-service 24x7!',
              text: `These terms and conditions outline the rules and regulations for the use of ${BUSINESS_DETAILS.name}'s Website, located at contact@roservice24x7.in and our doorstep service platform in Bangalore.`,
              additionalText: `By accessing this website we assume you accept these terms and conditions. Do not continue to use ${BUSINESS_DETAILS.name} if you do not agree to take all of the terms and conditions stated on this page.`,
            },
            {
              heading: 'Cookies',
              text: `We employ the use of cookies. By accessing ${BUSINESS_DETAILS.name}, you agreed to use cookies in agreement with ${BUSINESS_DETAILS.name}'s Privacy Policy.`,
              additionalText: `Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.`,
            },
            {
              heading: 'License & Intellectual Property',
              text: `Unless otherwise stated, ${BUSINESS_DETAILS.name} and/or its licensors own the intellectual property rights for all material on ${BUSINESS_DETAILS.name}. All intellectual property rights are reserved. You may access this from ${BUSINESS_DETAILS.name} for your own personal use subjected to restrictions set in these terms and conditions.`,
              bullets: [
                `Republish material from ${BUSINESS_DETAILS.name}`,
                `Sell, rent or sub-license material from ${BUSINESS_DETAILS.name}`,
                `Reproduce, duplicate or copy material from ${BUSINESS_DETAILS.name}`,
                `Redistribute content from ${BUSINESS_DETAILS.name}`,
              ],
              additionalText: 'This Agreement shall begin on the date hereof.',
            },
            {
              heading: 'Hyperlinking to our Content',
              text: 'The following organizations may link to our Website without prior written approval:',
              bullets: [
                'Government agencies;',
                'Search engines;',
                'News organizations;',
                'Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and',
                'System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.',
              ],
              additionalText: `We may consider and approve other link requests from consumer sources, community sites, online directory distributors, internet portals, and professional services if we decide that: (a) the link would not make us look unfavorably; (b) the organization has no negative records with us; (c) the benefit from visibility compensates the absence of ${BUSINESS_DETAILS.name}; and (d) the link is in the context of general resource information.`,
            },
            {
              heading: 'iFrames',
              text: 'Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.',
            },
            {
              heading: 'Content Liability',
              text: 'We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.',
            },
            {
              heading: 'Reservation of Rights',
              text: 'We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.',
            },
            {
              heading: 'Removal of links from our website',
              text: 'If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to do so or to respond to you directly.',
              additionalText: 'We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.',
            },
            {
              heading: 'Disclaimer',
              text: 'To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:',
              bullets: [
                'limit or exclude our or your liability for death or personal injury;',
                'limit or exclude our or your liability for fraud or fraudulent misrepresentation;',
                'limit any of our or your liabilities in any way that is not permitted under applicable law; or',
                'exclude any of our or your liabilities that may not be excluded under applicable law.',
              ],
              additionalText: `As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature. ${BUSINESS_DETAILS.name} provides independent doorstep repair services for all major RO water purifiers in Bangalore.`,
            },
          ],
        };

      case '/privacy-policy':
        return {
          title: 'Privacy Policy',
          lastUpdated: 'August 6, 2026',
          sections: [
            {
              heading: '1. Information We Collect',
              text: `When you request an RO repair, installation, or AMC service through ${BUSINESS_DETAILS.name}'s website, we collect personal contact details required to fulfill your doorstep service request:`,
              bullets: [
                'Full Name and Contact Number',
                'Bangalore Delivery Area / Pincode & Street Address',
                'Water Purifier Brand & Problem Description',
                'Preferred Date & Time Slot for Service Visit',
              ],
            },
            {
              heading: '2. How We Use Your Information',
              text: `We use your submitted information strictly to facilitate doorstep water purifier repair and maintenance services:`,
              bullets: [
                'Dispatching our nearest certified technician in Bangalore to your location',
                'Providing transparent service cost estimates and diagnostic quotes',
                'Verifying and tracking 30-day labor and spare part warranty claims',
                'Communicating service status updates and AMC renewal reminders',
              ],
            },
            {
              heading: '3. Data Sharing & Security',
              text: `We do NOT sell, trade, or rent your personal data to third-party marketers. Your contact details are shared exclusively with the assigned field technician for the sole purpose of visiting your home and executing the requested repair.`,
            },
            {
              heading: '4. Cookies & Website Analytics',
              text: `By accessing ${BUSINESS_DETAILS.name}, you agree to the use of cookies in accordance with our Cookie Policy. Cookies help retrieve user preferences to enable website functionality and make navigation smoother.`,
            },
            {
              heading: '5. Data Retention & Your Rights',
              text: 'You may request modification or complete removal of your customer service record from our database at any time by contacting our support line or email.',
            },
          ],
        };

      case '/refund-policy':
        return {
          title: 'Refund & Return Policy',
          lastUpdated: 'August 6, 2026',
          sections: [
            {
              heading: '1. Service & Parts Warranty Coverage',
              text: `${BUSINESS_DETAILS.name} provides doorstep repair services for RO water purifiers in Bangalore. All our service calls include:`,
              bullets: [
                '30-Day Doorstep Labor Warranty on all repairs',
                'Manufacturer-backed warranty on replacement spare parts (Pumps, SMPS Adapters, RO Membranes)',
                'Free re-inspection if the same technical fault recurs within the warranty window',
              ],
            },
            {
              heading: '2. Booking Cancellation & Visiting Fee',
              text: 'If you cancel your booking prior to technician dispatch, 100% of pre-paid amounts (if any) are refunded immediately.',
              additionalText: 'If a technician arrives at your premises and performs a physical diagnostic check, a nominal Visiting & Inspection fee of ₹299 applies if you choose not to proceed with the suggested repair.',
            },
            {
              heading: '3. Unsatisfactory Service Refunds',
              text: 'If a reported fault cannot be resolved during our 30-day warranty re-visit, a full or partial labor refund will be processed back to your original payment method within 5 to 7 business days.',
            },
            {
              heading: '4. AMC Cancellation & Refund Terms',
              text: 'Annual Maintenance Contracts (AMC) canceled within 7 days of purchase without any service utilization are eligible for a 90% refund. Once periodic filter replacements or emergency visits have been utilized, AMC refunds are calculated pro-rata.',
            },
          ],
        };

      case '/disclaimer':
        return {
          title: 'Disclaimer & Brand Affiliation Notice',
          lastUpdated: 'August 6, 2026',
          sections: [
            {
              heading: '1. Independent Service Provider Status',
              text: `${BUSINESS_DETAILS.name} is an independent multi-brand water purifier sales, repair, and doorstep service provider operating in Bangalore, Karnataka.`,
              additionalText: 'We are NOT an official authorized service center, franchise, or direct subsidiary of Kent RO Systems, Eureka Forbes (Aquaguard), HUL Pureit, AO Smith India, LG Electronics, or any other trademark owner unless explicitly stated.',
            },
            {
              heading: '2. Trademarks & Brand Name Usage',
              text: 'All brand names, product titles, logos, and trademarks (including Kent, Aquaguard, Pureit, AO Smith, LG, Havells) displayed on this website belong to their respective registered trademark owners.',
              additionalText: 'Reference to these brand names is strictly for identification, compatibility, and descriptive purposes to inform customers about the types of purifiers we service.',
            },
            {
              heading: '3. Accuracy & Guarantee Disclaimer',
              text: 'While we strive to provide accurate service details and transparent pricing, actual repair costs may depend on individual machine age, TDS levels, electrical conditions, and replacement spare parts required upon physical inspection.',
            },
          ],
        };

      case '/cookie-policy':
      default:
        return {
          title: 'Cookie Policy',
          lastUpdated: 'August 6, 2026',
          sections: [
            {
              heading: '1. What Are Cookies?',
              text: `Cookies are small text files placed on your computer or mobile device when you browse ${BUSINESS_DETAILS.name}. They allow our website to retrieve details for your visit to make browsing easier and preserve form inputs.`,
            },
            {
              heading: '2. How We Use Cookies',
              text: `We use essential functional cookies and session storage on ${BUSINESS_DETAILS.name} to:`,
              bullets: [
                'Remember your selected RO Brand and location pincode in lead forms',
                'Maintain fast loading times and smooth mobile interface transitions',
                'Analyze anonymous site traffic patterns to optimize customer booking steps',
              ],
            },
            {
              heading: '3. Managing Cookie Preferences',
              text: 'You can modify or disable cookie settings in your web browser (Google Chrome, Mozilla Firefox, Apple Safari). Disabling essential cookies may affect form submission convenience.',
            },
          ],
        };
    }
  };

  const content = getPolicyContent();
  const backTarget = lastBrandRoute || '/';
  const brandKey = lastBrandRoute ? lastBrandRoute.replace('/', '') : '';
  const brandData = brandKey ? BRAND_PAGES_DATA[brandKey] : null;
  const backButtonText = brandData ? `Back to ${brandData.name} Page` : 'Back to Homepage';

  return (
    <div className="min-h-screen bg-slate-50 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back link */}
        <button
          onClick={() => onNavigate(backTarget)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 bg-white border border-slate-200 px-3.5 py-2 rounded-xl mb-6 shadow-2xs transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          {backButtonText}
        </button>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
          <div className="border-b border-slate-100 pb-6 mb-8">
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {content.title}
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Effective Date / Last Updated: {content.lastUpdated}
            </p>
          </div>

          <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
            {content.sections.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">{sec.heading}</h3>
                {sec.text && <p className="text-slate-600 text-xs sm:text-sm">{sec.text}</p>}
                
                {sec.bullets && sec.bullets.length > 0 && (
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs sm:text-sm">
                    {sec.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}

                {sec.additionalText && (
                  <p className="text-slate-600 text-xs sm:text-sm pt-1">{sec.additionalText}</p>
                )}
              </div>
            ))}
          </div>

          {/* Contact Us Box at Bottom */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                Contact Us Regarding This Policy
              </h4>
              <p className="text-xs text-slate-600">
                If you have questions, feedback, or data requests regarding our {content.title}, please reach out to our customer care team in Bangalore:
              </p>
              <div className="pt-1 space-y-1.5 text-xs text-slate-800 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Address: {BUSINESS_DETAILS.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <a href={`tel:${BUSINESS_DETAILS.phone}`} className="hover:underline text-sky-700 font-bold">
                    Phone / WhatsApp: {BUSINESS_DETAILS.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <a href={`mailto:${BUSINESS_DETAILS.email}`} className="hover:underline text-sky-700 font-bold">
                    Email: {BUSINESS_DETAILS.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

