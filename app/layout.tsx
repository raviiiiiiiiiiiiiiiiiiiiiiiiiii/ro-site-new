import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { CallWidgets } from '@/src/components/CallWidgets';
import { BUSINESS_DETAILS } from '@/src/data/content';

export const viewport: Viewport = {
  themeColor: '#0c54a0',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ro-servicecentre.in'),
  title: {
    default: `${BUSINESS_DETAILS.name} | Doorstep RO Water Purifier Repair & Service Jaipur`,
    template: `%s | ${BUSINESS_DETAILS.name}`,
  },
  description:
    'Fastest 60–90 min doorstep RO water purifier repair, filter replacement, AMC & installation service in Jaipur. Expert technicians for Kent, Aquaguard, Pureit, AO Smith & LG.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-sky-500 selection:text-white pb-14 sm:pb-16">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CallWidgets />
      </body>
    </html>
  );
}
