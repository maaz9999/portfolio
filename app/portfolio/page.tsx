'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import CustomCursor from '@/components/ui/CustomCursor';
import { projects, projectCategories } from '@/data/projects';
import type { Project } from '@/types';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Star, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
    >
      <div
        className="card"
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transition: 'transform 0.2s, border-color 0.2s',
          background: 'var(--surface)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget).style.transform = 'translateY(-4px)';
          (e.currentTarget).style.borderColor = project.color + '40';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget).style.transform = 'translateY(0)';
          (e.currentTarget).style.borderColor = 'var(--border)';
        }}
      >
        {/* Visual Header */}
        <div
          style={{
            height: '180px',
            background: 'linear-gradient(135deg, #09090c 0%, #161620 100%)',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle at center, ${project.color}15 0%, transparent 70%)`,
            }}
          />
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '2.25rem',
              letterSpacing: '-0.05em',
              color: `${project.color}35`,
              position: 'relative',
              zIndex: 1,
              userSelect: 'none',
            }}
          >
            {project.title.slice(0, 4).toUpperCase()}
          </div>
          {project.featured ? (
            <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', zIndex: 2 }}>
              <span className="badge badge-accent" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Star size={8} fill="currentColor" />
                Featured
              </span>
            </div>
          ) : project.liveUrl ? (
            <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', zIndex: 2 }}>
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
                  background: 'rgba(255,255,255,0.05)',
                  borderColor: project.color + '60',
                  color: project.color,
                }}
              >
                <ExternalLink size={9} />
                Live Demo
              </a>
            </div>
          ) : null}
          {project.slug === 'mark47' ? (
            <Link href="/work/mark47" style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', zIndex: 2 }}>
              <ArrowUpRight size={16} color="var(--text-muted)" />
            </Link>
          ) : project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', zIndex: 2 }}>
              <ArrowUpRight size={16} color="var(--text-muted)" />
            </a>
          ) : null}
        </div>

        {/* Content */}
        <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.625rem' }}>
            <div className="label" style={{ color: 'var(--text-muted)' }}>{project.category}</div>
            <div className="label" style={{ color: 'var(--text-muted)' }}>{project.year}</div>
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.0625rem', marginBottom: '0.375rem', color: 'var(--warm-white)' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '0.8125rem', color: 'var(--accent)', marginBottom: '0.75rem', fontWeight: 600 }}>
            {project.subtitle}
          </p>
          <p className="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1 }}>
            {project.shortDescription}
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3125rem' }}>
              {project.tags.slice(0, 2).map((tag) => (
                <span key={tag} style={{ fontSize: '0.625rem', fontWeight: 500, padding: '0.2rem 0.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text-secondary)' }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              {project.liveUrl ? (
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
              ) : project.slug === 'mark47' ? (
                <Link
                  href="/work/mark47"
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
                  Details <ArrowUpRight size={12} />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" style={{ minHeight: '100vh', paddingTop: '7rem', paddingBottom: '6rem', background: 'var(--black)' }}>
        <div className="container">
          <SectionHeading
            label="Portfolio"
            title="All Projects & Builds"
            subtitle="A collection of software engineering projects, esports technology, and digital products."
          />

          {/* Category filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '2.5rem 0' }} role="group" aria-label="Filter projects">
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

          {/* Projects Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
