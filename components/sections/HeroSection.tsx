'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download, MapPin, Sparkles } from 'lucide-react';
import { profile } from '@/data/profile';
import { CV_PATH } from '@/lib/constants';
import ProfileCard from '@/components/ui/ProfileCard';

export default function HeroSection() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeIdentity, setActiveIdentity] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Role cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.roles.length);
      setActiveIdentity((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = -(e.clientY / window.innerHeight - 0.5) * 2;
      setMouseX(x);
      setMouseY(y);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      data-section="hero"
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--black)',
        paddingTop: '5rem',
      }}
    >
      {/* Glow Backdrops */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, rgba(239,68,68,0.03) 50%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'center',
            minHeight: 'calc(100vh - 5rem)',
            paddingTop: '3rem',
            paddingBottom: '3rem',
          }}
        >
          {/* Left Column — Text */}
          <div>
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: '1.5rem', display: 'inline-flex' }}
            >
              <div className="badge badge-accent badge-dot">
                {profile.availabilityText}
              </div>
            </motion.div>

            {/* Display Name */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(3.75rem, 9.5vw, 7rem)',
                  letterSpacing: '-0.04em',
                  lineHeight: 0.92,
                  marginBottom: '1.25rem',
                  color: 'var(--warm-white)',
                }}
              >
                MAAZ
              </h1>
            </motion.div>

            {/* Dynamic Role Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                position: 'relative',
                height: '2.25rem',
                marginBottom: '1.5rem',
                overflow: 'hidden',
              }}
            >
              {profile.roles.map((role, i) => (
                <motion.div
                  key={role}
                  initial={{ y: 32, opacity: 0 }}
                  animate={i === roleIndex ? { y: 0, opacity: 1 } : { y: -32, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    letterSpacing: '0.12em',
                    color: 'var(--accent)',
                    background: 'var(--accent-glow)',
                    border: '1px solid rgba(249, 115, 22, 0.3)',
                    padding: '0.25rem 0.875rem',
                    borderRadius: '100px',
                  }}
                >
                  <Sparkles size={12} />
                  {role}
                </motion.div>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                lineHeight: 1.3,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
                maxWidth: '560px',
              }}
            >
              {profile.tagline}
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="body-sm"
              style={{
                color: 'var(--text-secondary)',
                marginBottom: '2.25rem',
                maxWidth: '500px',
                lineHeight: 1.7,
              }}
            >
              {profile.shortBio}
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.25rem' }}
            >
              <Link
                href="/portfolio"
                className="btn btn-primary"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                Explore Portfolio
                <ArrowRight size={16} />
              </Link>
              <a
                href={CV_PATH}
                download="Muhammad_Maaz_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>

            {/* Meta footer info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                }}
              >
                <MapPin size={13} style={{ color: 'var(--accent)' }} />
                {profile.location}
              </div>
            </motion.div>
          </div>

          {/* Right Column — 3D Holographic ProfileCard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <ProfileCard
              name="MAAZ"
              title="Full-Stack Engineer & Esports"
              handle="maazzz2026"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/IMG.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
              onContactClick={() => {
                const contactEl = document.getElementById('contact');
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/contact';
                }
              }}
              behindGlowColor="rgba(249, 115, 22, 0.65)"
              behindGlowEnabled={true}
              innerGradient="linear-gradient(145deg, rgba(249, 115, 22, 0.22) 0%, rgba(124, 58, 237, 0.22) 100%)"
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          #hero .container > div {
            grid-template-columns: 1fr !important;
          }
          #hero .container > div > div:last-child {
            height: 320px !important;
          }
        }
      `}</style>
    </section>
  );
}
