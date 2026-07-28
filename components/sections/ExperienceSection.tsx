'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience, education } from '@/data/experience';
import SectionHeading from '@/components/ui/SectionHeading';
import { GraduationCap } from 'lucide-react';

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      data-section="experience"
      className="section-padding"
      ref={ref}
      style={{ background: 'var(--black)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container">
        <SectionHeading
          label="Experience"
          title="Where I've worked and built"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            marginTop: '3.5rem',
          }}
        >
          {/* Timeline */}
          <div>
            <div className="label" style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Professional</div>
            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
              {/* Timeline line */}
              <div
                style={{
                  position: 'absolute',
                  left: '6px',
                  top: '8px',
                  bottom: 0,
                  width: '1px',
                  background: 'linear-gradient(to bottom, var(--accent), var(--border) 50%, transparent)',
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {experience.map((exp, i) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    style={{ position: 'relative' }}
                  >
                    {/* Dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-2rem',
                        top: '6px',
                        width: '13px',
                        height: '13px',
                        borderRadius: '50%',
                        background: exp.type === 'current' ? 'var(--accent)' : 'var(--surface)',
                        border: `2px solid ${exp.type === 'current' ? 'var(--accent)' : 'var(--border)'}`,
                        boxShadow: exp.type === 'current' ? '0 0 10px var(--accent)' : 'none',
                        zIndex: 1,
                      }}
                    />

                    {/* Period */}
                    <div className="label" style={{ color: 'var(--accent)', marginBottom: '0.4rem' }}>
                      {exp.period}
                    </div>

                    {/* Role */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        letterSpacing: '-0.01em',
                        color: 'var(--warm-white)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {exp.role}
                    </h3>

                    {/* Company */}
                    <div
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginBottom: '1rem',
                      }}
                    >
                      {exp.company}
                    </div>

                    {/* Description */}
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {exp.description.map((desc, j) => (
                        <li
                          key={j}
                          className="body-sm"
                          style={{
                            color: 'var(--text-secondary)',
                            display: 'flex',
                            gap: '0.625rem',
                            lineHeight: 1.6,
                          }}
                        >
                          <span style={{ color: 'var(--accent)', marginTop: '0.15rem', flexShrink: 0 }}>—</span>
                          {desc}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginTop: '1rem' }}>
                      {exp.tags.map((tag) => (
                        <span key={tag} className="badge" style={{ fontSize: '0.625rem' }}>{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="label" style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Education</div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.25rem',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--accent-glow)',
                  border: '1px solid rgba(249, 115, 22, 0.3)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <GraduationCap size={22} color="var(--accent)" />
              </div>

              <div className="label" style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                {education.period}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  letterSpacing: '-0.02em',
                  color: 'var(--warm-white)',
                  marginBottom: '0.375rem',
                }}
              >
                {education.degree}
              </h3>

              <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                {education.institution}
              </div>

              <div className="label" style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                {education.location}
              </div>

              <p className="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {education.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
