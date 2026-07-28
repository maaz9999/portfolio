'use client';

import { useState, useEffect } from 'react';
import Loader from '@/components/layout/Loader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import CustomCursor from '@/components/ui/CustomCursor';
import HeroSection from '@/components/sections/HeroSection';
import IdentitySection from '@/components/sections/IdentitySection';
import AboutSection from '@/components/sections/AboutSection';
import FeaturedProjectSection from '@/components/sections/FeaturedProjectSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  const [loaderDone, setLoaderDone] = useState(false);

  // Skip loader on revisit (sessionStorage)
  useEffect(() => {
    if (sessionStorage.getItem('loader-seen')) {
      setLoaderDone(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('loader-seen', '1');
    setLoaderDone(true);
  };

  return (
    <>
      {!loaderDone && <Loader onComplete={handleLoaderComplete} />}

      {loaderDone && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />

          <main id="main-content">
            <HeroSection />
            <IdentitySection />
            <AboutSection />
            <FeaturedProjectSection />
            <ExperienceSection />
            <SkillsSection />
            <AchievementsSection />
            <ContactSection />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}
