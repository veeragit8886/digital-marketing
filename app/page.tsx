'use client';

import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import CookieConsent from '@/components/CookieConsent';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import CTABanner from '@/components/sections/CTABanner';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
      
      <BackToTop />
      <WhatsAppFloat />
      <CookieConsent />
    </main>
  );
}