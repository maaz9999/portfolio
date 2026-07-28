import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import CustomCursor from '@/components/ui/CustomCursor';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Get in touch with MAAZ for software engineering, product development, or esports technology projects.",
};

export default function ContactPage() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" style={{ paddingTop: '5rem' }}>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
