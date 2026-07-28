'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements, careerJourney, gamingProfile } from '@/data/achievements';
import SectionHeading from '@/components/ui/SectionHeading';
import { Gamepad2, Shield } from 'lucide-react';

export default function AchievementsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      {/* Achievements Grid */}
      <section
        id="achievements"
        data-section="achievements"
        className="section-padding"
        style={{ background: 'var(--black)', borderTop: '1px solid var(--border)' }}
      >
        <div className="container">
          <SectionHeading
            label="Key Metrics"
            title="Milestones & Recognition"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '1.25rem',
              marginTop: '3rem',
            }}
          >
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                ref={i === 0 ? ref : undefined}
                className="card"
                style={{
                  padding: '2rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    letterSpacing: '-0.04em',
                    color: 'var(--warm-white)',
                    marginBottom: '0.25rem',
                    lineHeight: 1,
                  }}
                >
                  {ach.value}
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      color: 'var(--accent)',
                      marginLeft: '0.5rem',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {ach.unit}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {ach.label}
                </div>
                <p className="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {ach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Esports / PUBG Mobile Profile */}
      <section
        id="gaming"
        data-section="gaming"
        className="section-padding"
        style={{ background: 'var(--black)', borderTop: '1px solid var(--border)' }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <SectionHeading
                label="Esports Profile"
                title="PUBG Mobile Ecosystem Experience"
                subtitle="First-hand competitive play and tournament operations driving software product design."
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="card"
              style={{
                padding: '2.25rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Corner Glow */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '140px',
                  height: '140px',
                  background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)',
                  borderRadius: '0 var(--radius-xl) 0 100%',
                }}
              />

              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--accent-glow)',
                  border: '1px solid rgba(249,115,22,0.3)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <Gamepad2 size={22} color="var(--accent)" />
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.6rem',
                  letterSpacing: '-0.03em',
                  color: 'var(--warm-white)',
                  marginBottom: '0.25rem',
                }}
              >
                {gamingProfile.game}
              </div>

              <div className="label" style={{ color: 'var(--accent)', marginBottom: '1.25rem' }}>
                Active Ecosystem Since {gamingProfile.activeSince}
              </div>

              <p className="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {gamingProfile.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.5rem' }}>
                {gamingProfile.highlights.map((h) => (
                  <div
                    key={h}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.625rem',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <Shield size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    {h}
                  </div>
                ))}
              </div>

              <div
                style={{
                  padding: '0.85rem 1.15rem',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span className="label" style={{ color: 'var(--text-muted)' }}>Player UID</span>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.9375rem',
                    color: 'var(--text-primary)',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {gamingProfile.uid}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Horizontal Timeline */}
      <section
        id="journey"
        data-section="journey"
        className="section-padding"
        style={{ background: 'var(--black)', borderTop: '1px solid var(--border)', overflow: 'hidden' }}
      >
        <div className="container">
          <SectionHeading
            label="Career Journey"
            title="A timeline of continuous growth"
          />

          <div style={{ marginTop: '3rem', overflowX: 'auto', paddingBottom: '1rem' }}>
            <div style={{ display: 'flex', gap: 0, minWidth: 'max-content' }}>
              {careerJourney.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    padding: '2rem 2.5rem',
                    borderRight: i < careerJourney.length - 1 ? '1px solid var(--border)' : 'none',
                    position: 'relative',
                    minWidth: '220px',
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '2.5rem' } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                    style={{
                      height: '2px',
                      background: milestone.year === 'Now' ? 'var(--accent)' : 'var(--border)',
                      marginBottom: '1.25rem',
                      boxShadow: milestone.year === 'Now' ? '0 0 10px var(--accent)' : 'none',
                    }}
                  />

                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: '1.75rem',
                      letterSpacing: '-0.04em',
                      color: milestone.year === 'Now' ? 'var(--accent)' : 'var(--text-primary)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {milestone.year}
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {milestone.label}
                  </div>

                  <p
                    className="body-sm"
                    style={{ color: 'var(--text-muted)', lineHeight: 1.65, maxWidth: '180px', whiteSpace: 'normal' }}
                  >
                    {milestone.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
