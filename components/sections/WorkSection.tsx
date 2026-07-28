'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Star, ExternalLink } from 'lucide-react';
import { projects, projectCategories } from '@/data/projects';
import type { Project } from '@/types';
import SectionHeading from '@/components/ui/SectionHeading';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <div
        className="card"
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          background: 'var(--surface)',
        }}
      >
        {/* Card Header Visual */}
        <div
          style={{
            height: '180px',
            background: 'linear-gradient(135deg, #09090c 0%, #161620 100%)',
            borderBottom: '1px solid var(--border)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle at center, ${project.color}20 0%, transparent 70%)`,
            }}
          />

          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '2rem',
              letterSpacing: '-0.04em',
              color: `${project.color}40`,
              userSelect: 'none',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {project.title.slice(0, 5).toUpperCase()}
          </div>

          {project.featured ? (
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 2 }}>
              <span className="badge badge-accent" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Star size={9} fill="currentColor" />
                Featured
              </span>
            </div>
          ) : project.liveUrl ? (
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 2 }}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="badge"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  textDecoration: 'none',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderColor: project.color + '60',
                  color: project.color,
                }}
              >
                <ExternalLink size={9} />
                Live Demo
              </a>
            </div>
          ) : null}

          <Link
            href={`/work/${project.slug}`}
            aria-label={`View details for ${project.title}`}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '32px',
              height: '32px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid var(--border)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              backdropFilter: 'blur(8px)',
              transition: 'all 0.2s',
            }}
          >
            <ArrowUpRight size={14} color="var(--text-secondary)" />
          </Link>
        </div>

        {/* Content Body */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <div className="label" style={{ color: 'var(--text-muted)' }}>{project.category}</div>
            <div className="label" style={{ color: 'var(--text-muted)' }}>{project.year}</div>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1.15rem',
              letterSpacing: '-0.02em',
              marginBottom: '0.375rem',
              color: 'var(--warm-white)',
            }}
          >
            {project.title}
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--accent)', marginBottom: '0.875rem', fontWeight: 600 }}>
            {project.subtitle}
          </p>
          <p className="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1 }}>
            {project.shortDescription}
          </p>

          {/* Action Footer */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {project.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="badge" style={{ fontSize: '0.625rem', padding: '0.2rem 0.5rem' }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}
                >
                  Visit <ExternalLink size={12} />
                </a>
              )}
              <Link
                href={`/work/${project.slug}`}
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                }}
              >
                Details <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="work"
      data-section="work"
      className="section-padding"
      style={{ background: 'var(--black)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <SectionHeading
            label="Selected Portfolio"
            title="All 9 Live Projects & Builds"
            subtitle="Web applications, AI platforms, digital agency systems, and esports platforms."
          />
          <Link
            href="/work"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              color: 'var(--accent)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 600,
              transition: 'color 0.2s',
            }}
          >
            View Full Index
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Category Filters */}
        <div
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}
          role="group"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '0.8125rem',
                padding: '0.45rem 1.15rem',
                borderRadius: '100px',
                border: `1px solid ${activeCategory === cat ? 'var(--accent)' : 'var(--border)'}`,
                background: activeCategory === cat ? 'var(--accent-glow)' : 'rgba(255,255,255,0.02)',
                color: activeCategory === cat ? 'var(--accent)' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
