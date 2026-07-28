'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { identities } from '@/data/achievements';
import SectionHeading from '@/components/ui/SectionHeading';

export default function IdentitySection() {
  const [activeId, setActiveId] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="identity"
      data-section="identity"
      className="section-padding"
      ref={ref}
      style={{
        background: 'var(--black)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <SectionHeading
          label="What I Do"
          title="Three worlds. One professional."
          subtitle="Combining engineering precision with product vision and competitive esports operations."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginTop: '3.5rem',
          }}
        >
          {identities.map((identity, i) => {
            const isHovered = activeId === i;
            return (
              <motion.div
                key={identity.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                onMouseEnter={() => setActiveId(i)}
                style={{
                  background: isHovered ? 'var(--surface-hover)' : 'var(--surface)',
                  border: `1px solid ${isHovered ? identity.color + '60' : 'var(--border)'}`,
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  cursor: 'default',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: isHovered
                    ? `0 16px 35px rgba(0,0,0,0.6), 0 0 30px ${identity.color}15`
                    : 'none',
                }}
              >
                {/* Active Glowing Top Accent */}
                <motion.div
                  animate={{ opacity: isHovered ? 1 : 0.4, scaleX: isHovered ? 1 : 0.6 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: identity.color,
                    boxShadow: `0 0 10px ${identity.color}`,
                    transformOrigin: 'left',
                  }}
                />

                {/* Number Badge */}
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '3rem',
                    color: isHovered ? identity.color : 'var(--text-muted)',
                    opacity: isHovered ? 0.9 : 0.25,
                    lineHeight: 1,
                    marginBottom: '1.5rem',
                    transition: 'all 0.3s',
                  }}
                >
                  0{i + 1}
                </div>

                {/* Tagline Label */}
                <div
                  className="label"
                  style={{
                    color: identity.color,
                    marginBottom: '0.75rem',
                    opacity: isHovered ? 1 : 0.7,
                    transition: 'opacity 0.3s',
                  }}
                >
                  {identity.tagline}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    letterSpacing: '-0.02em',
                    marginBottom: '1rem',
                    color: 'var(--warm-white)',
                  }}
                >
                  {identity.label}
                </h3>

                {/* Description */}
                <p
                  className="body-sm"
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    maxWidth: '340px',
                  }}
                >
                  {identity.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
