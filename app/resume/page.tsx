import type { Metadata } from 'next';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { profile } from '@/data/profile';
import { experience, education } from '@/data/experience';
import { skills } from '@/data/skills';
import { achievements } from '@/data/achievements';
import { Download, Mail, AtSign, MapPin } from 'lucide-react';
import LinkedInIcon from '@/components/ui/LinkedInIcon';
import { CV_PATH } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Online resume of MAAZ — Full-Stack Software Engineer and Esports Professional.',
};

export default function ResumePage() {
  const year = new Date().getFullYear();

  return (
    <>
      <Navbar />
      <main id="main-content" style={{ minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem', background: 'var(--black)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'start',
              marginBottom: '3rem',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em', marginBottom: '0.375rem' }}>
                {profile.name}
              </h1>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: '1rem', color: 'var(--accent)', marginBottom: '1rem' }}>
                {profile.title}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
                <a href={`mailto:${profile.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem' }}>
                  <Mail size={13} /> {profile.email}
                </a>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  <MapPin size={13} /> {profile.location}
                </div>
                <a href={profile.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem' }}>
                  <AtSign size={13} /> {profile.instagram}
                </a>
                <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem' }}>
                  <LinkedInIcon size={13} /> LinkedIn
                </a>
              </div>
            </div>

            <a href={CV_PATH} download="Muhammad_Maaz_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap' }}>
              <Download size={15} />
              Download PDF
            </a>
          </div>

          {/* Summary */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.875rem' }}>
              Summary
            </h2>
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
              <p className="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>{profile.longBio}</p>
            </div>
          </section>

          {/* Experience */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.875rem' }}>
              Experience
            </h2>
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--warm-white)' }}>{exp.role}</div>
                    <div className="label" style={{ color: 'var(--text-muted)' }}>{exp.period}</div>
                  </div>
                  <div style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--accent)', marginBottom: '0.75rem' }}>{exp.company}</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    {exp.description.map((d, i) => (
                      <li key={i} className="body-sm" style={{ color: 'var(--text-secondary)', paddingLeft: '1rem', borderLeft: '2px solid var(--border)', lineHeight: 1.6 }}>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.875rem' }}>
              Education
            </h2>
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--warm-white)' }}>{education.degree}</div>
                <div className="label" style={{ color: 'var(--text-muted)' }}>{education.period}</div>
              </div>
              <div style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--accent)' }}>
                {education.institution} — {education.location}
              </div>
            </div>
          </section>

          {/* Skills */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.875rem' }}>
              Skills
            </h2>
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {skills.map((group) => (
                <div key={group.id} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '1rem', alignItems: 'start' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{group.label}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {group.skills.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.875rem' }}>
              Highlights
            </h2>
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {achievements.map((ach) => (
                <div key={ach.id} className="body-sm" style={{ color: 'var(--text-secondary)', display: 'flex', gap: '0.625rem', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>—</span>
                  <span><strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{ach.label}:</strong> {ach.description}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
