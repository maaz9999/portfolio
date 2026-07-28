'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { featuredProject } from '@/data/projects';
import { ChevronDown, ChevronUp, Zap, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

export default function FeaturedProjectSection() {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const project = featuredProject;

  return (
    <section
      id="featured"
      data-section="featured"
      className="section-padding"
      ref={ref}
      style={{ background: 'var(--black)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container">
        <SectionHeading
          label="Featured Flagship"
          title="MARK47"
          subtitle="PUBG Mobile Esports Broadcast & Operations Software"
        />

        <div style={{ marginTop: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{
              background: 'var(--surface)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(249, 115, 22, 0.05)',
            }}
          >
            {/* Project Banner Visual */}
            <div
              style={{
                position: 'relative',
                height: 'clamp(240px, 35vh, 380px)',
                background: 'linear-gradient(135deg, #09090c 0%, #15151e 100%)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {/* Radial Glow */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(249,115,22,0.15) 0%, transparent 70%)',
                }}
              />

              {/* Grid backdrop */}
              <svg
                aria-hidden
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.08 }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="grid-mark47-v2" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f97316" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-mark47-v2)" />
              </svg>

              {/* Central Title */}
              <div style={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 900,
                    fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                    letterSpacing: '-0.05em',
                    color: 'rgba(249, 115, 22, 0.12)',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  MARK47
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                    letterSpacing: '-0.02em',
                    color: 'var(--warm-white)',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <Sparkles size={24} color="var(--accent)" />
                  MARK47
                </div>
              </div>

              {/* Status badge */}
              <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}>
                <span className="badge badge-accent badge-dot">{project.status}</span>
              </div>
            </div>

            {/* Info Container */}
            <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '2rem',
                  marginBottom: '2rem',
                }}
              >
                <div style={{ gridColumn: 'span 2' }}>
                  <p
                    className="body-sm"
                    style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '1rem' }}
                  >
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.375rem',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: '0.3rem 0.75rem',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid var(--border)',
                          borderRadius: '100px',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <Zap size={11} style={{ color: 'var(--accent)' }} />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { label: 'Category', value: project.category },
                    { label: 'Role', value: project.role },
                    { label: 'Year', value: project.year },
                    { label: 'Status', value: project.status },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="label" style={{ color: 'var(--text-muted)', marginBottom: '0.2rem' }}>{item.label}</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Actions */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge">{tag}</span>
                  ))}
                </div>

                <button
                  onClick={() => setCaseStudyOpen(!caseStudyOpen)}
                  className="btn btn-secondary"
                  style={{ fontSize: '0.8125rem', padding: '0.45rem 1.15rem' }}
                  aria-expanded={caseStudyOpen}
                >
                  {caseStudyOpen ? 'Hide Case Study' : 'Explore Case Study'}
                  {caseStudyOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                </button>
              </div>
            </div>

            {/* Case Study Drawer */}
            <AnimatePresence>
              {caseStudyOpen && project.caseStudy && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', background: 'var(--graphite)' }}
                >
                  <div
                    style={{
                      padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                      gap: '2rem',
                    }}
                  >
                    {[
                      { label: 'The Problem', content: project.caseStudy.problem },
                      { label: 'The Concept', content: project.caseStudy.concept },
                      { label: 'System Approach', content: project.caseStudy.systemApproach },
                      { label: 'Current Status', content: project.caseStudy.currentStatus },
                      { label: 'Future Direction', content: project.caseStudy.futureDirection },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="label" style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>{item.label}</div>
                        <p className="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.content}</p>
                      </div>
                    ))}

                    <div>
                      <div className="label" style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Intended Users</div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {project.caseStudy.intendedUsers.map((user) => (
                          <li
                            key={user}
                            className="body-sm"
                            style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                          >
                            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                            {user}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
