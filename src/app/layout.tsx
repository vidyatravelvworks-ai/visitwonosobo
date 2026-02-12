
import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { Toaster } from '@/components/ui/toaster';

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'visitwonosobo - Eksplorasi Wonosobo dengan Lokal Guide Terbaik',
  description: 'Temukan keindahan alam Wonosobo, dari sunrise Sikunir hingga kuliner Mie Ongklok dengan pemandu lokal profesional.',
  metadataBase: new URL('https://visitwonosobo.tour-travel.id'),
  verification: {
    google: 'googledef7515f3dd1b585',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'visitwonosobo - Eksplorasi Wonosobo dengan Lokal Guide Terbaik',
    description: 'Temukan keindahan alam Wonosobo, dari sunrise Sikunir hingga kuliner Mie Ongklok dengan pemandu lokal profesional.',
    url: 'https://visitwonosobo.tour-travel.id',
    siteName: 'visitwonosobo',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dnq7mpilu/image/upload/f_auto,q_auto/v1770830661/logo_-_visitwonosobo_hnciuo.png',
        width: 800,
        height: 600,
        alt: 'Visit Wonosobo Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'visitwonosobo',
    description: 'Eksplorasi Wonosobo dengan Lokal Guide Terbaik',
    images: ['https://res.cloudinary.com/dnq7mpilu/image/upload/f_auto,q_auto/v1770830661/logo_-_visitwonosobo_hnciuo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen selection:bg-primary selection:text-white">
        <FirebaseClientProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
