import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import { projects } from '@/data/projects';
import { ArrowLeft, ExternalLink, GitBranch, Zap } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [{ slug: 'mark47' }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== 'mark47') return {};
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  if (slug !== 'mark47') notFound();
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" style={{ minHeight: '100vh', paddingTop: '7rem', paddingBottom: '6rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          {/* Back */}
          <Link
            href="/portfolio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              marginBottom: '2.5rem',
              transition: 'color 0.2s',
            }}
          >
            <ArrowLeft size={14} />
            Back to Portfolio
          </Link>

          {/* Header */}
          <div style={{ marginBottom: '3rem' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>{project.category}</span>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                color: 'var(--warm-white)',
                marginBottom: '0.5rem',
              }}
            >
              {project.title}
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 500,
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
              }}
            >
              {project.subtitle}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
              <span className="badge badge-accent badge-dot">{project.status}</span>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.8125rem' }}
                >
                  <ExternalLink size={13} />
                  Live Site
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.8125rem' }}
                >
                  <GitBranch size={13} />
                  GitHub
                </a>
              )}
            </div>
          </div>

          {/* Visual */}
          <div
            style={{
              height: 'clamp(200px, 40vh, 400px)',
              background: 'var(--graphite)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '3rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(ellipse at center, ${project.color}12 0%, transparent 70%)`,
              }}
            />
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 'clamp(4rem, 12vw, 9rem)',
                letterSpacing: '-0.06em',
                color: `${project.color}20`,
                userSelect: 'none',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {project.title.slice(0, 2).toUpperCase()}
            </div>
          </div>

          {/* Meta grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1.5rem',
              padding: '2rem',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              marginBottom: '3rem',
            }}
          >
            {[
              { label: 'Category', value: project.category },
              { label: 'Year', value: project.year },
              { label: 'Role', value: project.role },
              { label: 'Status', value: project.status },
            ].map((item) => (
              <div key={item.label}>
                <div className="label" style={{ color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{item.label}</div>
                <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', marginBottom: '1rem' }}>Overview</h2>
            <p className="body-lg" style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>{project.description}</p>
          </div>

          {/* Features */}
          {project.features.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', marginBottom: '1.25rem' }}>
                Key Features
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
                {project.features.map((f) => (
                  <span
                    key={f}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      padding: '0.5rem 0.875rem',
                      background: 'var(--graphite)',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <Zap size={11} style={{ color: 'var(--accent)' }} />
                    {f}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Case Study */}
          {project.caseStudy && (
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', marginBottom: '2rem' }}>
                Case Study
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { label: 'The Problem', content: project.caseStudy.problem },
                  { label: 'The Concept', content: project.caseStudy.concept },
                  { label: 'System Approach', content: project.caseStudy.systemApproach },
                  { label: 'Current Status', content: project.caseStudy.currentStatus },
                  { label: 'Future Direction', content: project.caseStudy.futureDirection },
                ].map((item) => (
                  <div key={item.label} style={{ paddingLeft: '1.25rem', borderLeft: '2px solid var(--accent)' }}>
                    <div className="label" style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>{item.label}</div>
                    <p className="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>{item.content}</p>
                  </div>
                ))}

                <div style={{ paddingLeft: '1.25rem', borderLeft: '2px solid var(--accent)' }}>
                  <div className="label" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>Intended Users</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {project.caseStudy.intendedUsers.map((user) => (
                      <li key={user} className="body-sm" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                        {user}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
            {project.tags.map((tag) => (
              <span key={tag} className="badge">{tag}</span>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              padding: '2rem',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1rem', marginBottom: '0.25rem' }}>
                Interested in collaborating?
              </div>
              <div className="body-sm" style={{ color: 'var(--text-secondary)' }}>
                Let's discuss your project.
              </div>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Start a Conversation
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
