'use client';

import Link from 'next/link';
import { Mail, AtSign, ArrowUp, Download } from 'lucide-react';
import { profile } from '@/data/profile';
import { CV_PATH } from '@/lib/constants';
import LinkedInIcon from '@/components/ui/LinkedInIcon';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--black)',
        borderTop: '1px solid var(--border)',
        padding: '3rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1.5rem',
                letterSpacing: '-0.03em',
                marginBottom: '0.5rem',
                color: 'var(--warm-white)',
              }}
            >
              MAAZ
            </div>
            <div className="label" style={{ marginBottom: '1rem' }}>
              Software Engineer · Product Builder · Esports Professional
            </div>
            {profile.available && (
              <div className="badge badge-accent badge-dot">
                Available for Projects
              </div>
            )}
          </div>

          {/* Links */}
          <div>
            <div className="label" style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Quick Links</div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                { label: 'About', href: '/about' },
                { label: 'Work', href: '/work' },
                { label: 'Contact', href: '/contact' },
                { label: 'Resume', href: '/resume' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-secondary)')}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="label" style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Get in Touch</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={`mailto:${profile.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => ((e.currentTarget).style.color = 'var(--accent)')}
                onMouseLeave={(e) => ((e.currentTarget).style.color = 'var(--text-secondary)')}
              >
                <Mail size={14} />
                {profile.email}
              </a>
              <a
                href={profile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => ((e.currentTarget).style.color = 'var(--accent)')}
                onMouseLeave={(e) => ((e.currentTarget).style.color = 'var(--text-secondary)')}
              >
                <AtSign size={14} />
                {profile.instagram}
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => ((e.currentTarget).style.color = 'var(--accent)')}
                onMouseLeave={(e) => ((e.currentTarget).style.color = 'var(--text-secondary)')}
              >
                <LinkedInIcon size={14} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div className="label" style={{ color: 'var(--text-muted)' }}>
            © {year} MAAZ. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={CV_PATH}
              download
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.8125rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget).style.color = 'var(--accent)')}
              onMouseLeave={(e) => ((e.currentTarget).style.color = 'var(--text-secondary)')}
            >
              <Download size={13} />
              Download CV
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                background: 'var(--graphite)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                padding: '0.375rem 0.75rem',
                fontSize: '0.8125rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget).style.color = 'var(--text-primary)';
                (e.currentTarget).style.borderColor = 'var(--silver)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.color = 'var(--text-secondary)';
                (e.currentTarget).style.borderColor = 'var(--border)';
              }}
            >
              <ArrowUp size={13} />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
