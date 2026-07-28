'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { profile } from '@/data/profile';
import SectionHeading from '@/components/ui/SectionHeading';

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      data-section="about"
      className="section-padding"
      ref={ref}
      style={{ background: 'var(--black)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px' }}>
        <SectionHeading
          label="About"
          title="The person behind the work"
          subtitle="Combining full-stack software engineering with years of hands-on competitive gaming and tournament operations."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="card"
          style={{
            marginTop: '3rem',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            background: 'var(--surface)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(249, 115, 22, 0.05)',
          }}
        >
          <p
            className="body-lg"
            style={{
              color: 'var(--text-primary)',
              lineHeight: 1.8,
              marginBottom: '2rem',
              fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
              fontWeight: 500,
            }}
          >
            {profile.longBio}
          </p>

          {/* Animated keywords */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginBottom: '3rem' }}>
            {profile.keywords.map((keyword, i) => (
              <motion.span
                key={keyword}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.06 }}
                className="badge"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderColor: 'var(--border)',
                  padding: '0.5rem 1.1rem',
                  fontSize: '0.75rem',
                }}
              >
                {keyword}
              </motion.span>
            ))}
          </div>

          {/* Stats row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              paddingTop: '2.5rem',
              borderTop: '1px solid var(--border)',
            }}
          >
            {[
              { value: '6+', label: 'Years in PUBG Ecosystem' },
              { value: 'BSc', label: 'IT — Air University' },
              { value: 'EWC', label: 'Esports World Cup 2025' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '2.25rem',
                    letterSpacing: '-0.03em',
                    color: 'var(--warm-white)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {stat.value}
                </div>
                <div className="label" style={{ color: 'var(--accent)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
