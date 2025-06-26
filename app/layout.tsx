import Header from '@/components/sections/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Toaster } from 'sonner';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Data‑Driven Digital Marketing – VK Innovations',
  description: 'Grow smart with SEO, PPC, social & email campaigns tailored to your business. Boost traffic, engagement & ROI. Book your free audit!',
  keywords: 'digital marketing, SEO, PPC, social media marketing, web design, branding',
  authors: [{ name: 'VK Innovations' }],
  openGraph: {
    title: 'VK Innovations',
    description: 'We craft SEO, content, and social media strategies that convert.',
    url: 'https://vkinnovations.in',
    siteName: 'VK Innovations',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Growth Agency - Results-Driven Marketing Solutions',
    description: 'We craft SEO, content, and social media strategies that convert.',
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop'],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}