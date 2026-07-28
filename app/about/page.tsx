import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import CustomCursor from '@/components/ui/CustomCursor';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about MAAZ — Full-Stack Software Engineer, Product Builder, and Esports Professional based in Islamabad, Pakistan.',
};

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" style={{ paddingTop: '5rem' }}>
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
      </main>
      <Footer />
    </>
  );
}
