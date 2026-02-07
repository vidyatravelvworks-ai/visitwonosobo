
import type {Metadata} from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'visitwonosobo - Eksplorasi Wonosobo dengan Lokal Guide Terbaik',
  description: 'Temukan keindahan alam Wonosobo, dari sunrise Sikunir hingga kuliner Mie Ongklok dengan pemandu lokal profesional.',
  metadataBase: new URL('https://visitwonosobo.com'),
  verification: {
    google: 'googledef7515f3dd1b585',
  },
  openGraph: {
    title: 'visitwonosobo - Eksplorasi Wonosobo dengan Lokal Guide Terbaik',
    description: 'Temukan keindahan alam Wonosobo, dari sunrise Sikunir hingga kuliner Mie Ongklok dengan pemandu lokal profesional.',
    url: 'https://visitwonosobo.com',
    siteName: 'visitwonosobo',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'visitwonosobo',
    description: 'Eksplorasi Wonosobo dengan Lokal Guide Terbaik',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
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
