import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/next"; // <-- tambahkan import

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Bela Negara | Latihan Kepemimpinan & Disiplin',
  description:
    'Membentuk generasi disiplin, tangguh, dan siap memimpin melalui kegiatan ekstrakurikuler Bela Negara.',
  openGraph: {
    title: 'Bela Negara',
    description: 'Ekstrakurikuler pembentuk karakter pemuda Indonesia.',
    url: 'https://belanegara.com',
    siteName: 'Bela Negara',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bela Negara',
    description: 'Ekstrakurikuler pembentuk karakter pemuda Indonesia.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics /> {/* <-- komponen analytics ditempatkan di sini */}
      </body>
    </html>
  );
}