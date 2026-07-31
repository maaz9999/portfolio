'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, AtSign, MapPin, Check, AlertCircle, Loader2 } from 'lucide-react';
import LinkedInIcon from '@/components/ui/LinkedInIcon';
import { profile } from '@/data/profile';
import { projectTypes, budgetRanges } from '@/data/navigation';
import type { ContactFormData } from '@/types';
import SectionHeading from '@/components/ui/SectionHeading';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  message: '',
};

function validate(data: ContactFormData): Partial<ContactFormData> {
  const errors: Partial<ContactFormData> = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email address';
  if (!data.message.trim()) errors.message = 'Message is required';
  if (data.message.trim().length < 20) errors.message = 'Message must be at least 20 characters';
  return errors;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('sending');

    try {
      // ── INTEGRATION POINT ─────────────────────────────────────────────────────
      // Replace this with your email service integration:
      //
      // Option A — Resend:
      //   await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      //
      // Option B — Formspree:
      //   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(formData),
      //   });
      //
      // Option C — EmailJS or any other service
      // ──────────────────────────────────────────────────────────────────────────

      // Simulating network delay for demo
      await new Promise((res) => setTimeout(res, 1800));
      setStatus('success');
      setFormData(initialFormData);
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid var(--border)',
    borderRadius: '10px',
    padding: '0.85rem 1.15rem',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    outline: 'none',
    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-heading)',
    fontWeight: 600,
    fontSize: '0.8125rem',
    letterSpacing: '0.02em',
    color: 'var(--text-secondary)',
    marginBottom: '0.5rem',
  };

  const fieldWrap = { marginBottom: '1.25rem' };

  return (
    <section
      id="contact"
      data-section="contact"
      className="section-padding"
      ref={ref}
      style={{ background: 'var(--black)', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="noise-overlay" />

      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(249,115,22,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionHeading
            label="Contact"
            title="Let's build something worth remembering."
            subtitle="Available for software engineering opportunities, product collaborations, esports technology projects, and selected partnerships."
            align="center"
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'start',
          }}
        >
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                marginBottom: '1.5rem',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  marginBottom: '1.5rem',
                  color: 'var(--warm-white)',
                }}
              >
                Get in touch
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a
                  href={`mailto:${profile.email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.875rem',
                    padding: '1rem',
                    background: 'var(--graphite)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      background: 'rgba(249,115,22,0.1)',
                      border: '1px solid rgba(249,115,22,0.2)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={16} color="var(--accent)" />
                  </div>
                  <div>
                    <div className="label" style={{ color: 'var(--text-muted)', marginBottom: '0.125rem' }}>Email</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>{profile.email}</div>
                  </div>
                </a>

                <a
                  href={profile.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.875rem',
                    padding: '1rem',
                    background: 'var(--graphite)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      background: 'rgba(249,115,22,0.1)',
                      border: '1px solid rgba(249,115,22,0.2)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <AtSign size={16} color="var(--accent)" />
                  </div>
                  <div>
                    <div className="label" style={{ color: 'var(--text-muted)', marginBottom: '0.125rem' }}>Instagram</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>{profile.instagram}</div>
                  </div>
                </a>

                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.875rem',
                    padding: '1rem',
                    background: 'var(--graphite)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      background: 'rgba(249,115,22,0.1)',
                      border: '1px solid rgba(249,115,22,0.2)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <LinkedInIcon size={16} color="var(--accent)" />
                  </div>
                  <div>
                    <div className="label" style={{ color: 'var(--text-muted)', marginBottom: '0.125rem' }}>LinkedIn</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>{profile.linkedin}</div>
                  </div>
                </a>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.875rem',
                    padding: '1rem',
                    background: 'var(--graphite)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      background: 'rgba(249,115,22,0.1)',
                      border: '1px solid rgba(249,115,22,0.2)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={16} color="var(--accent)" />
                  </div>
                  <div>
                    <div className="label" style={{ color: 'var(--text-muted)', marginBottom: '0.125rem' }}>Location</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>{profile.location}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="badge badge-accent badge-dot">
              {profile.availabilityText}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {status === 'success' ? (
              <div
                style={{
                  background: 'var(--surface)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                  }}
                >
                  <Check size={24} color="#22c55e" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                  Message Sent
                </h3>
                <p className="body-sm" style={{ color: 'var(--text-secondary)' }}>
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn btn-secondary"
                  style={{ marginTop: '1.5rem' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'clamp(1.5rem, 4vw, 2rem)',
                }}
              >
                {status === 'error' && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.875rem 1rem',
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: 'var(--radius)',
                      marginBottom: '1.5rem',
                      color: '#ef4444',
                      fontSize: '0.875rem',
                    }}
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please try emailing directly.
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={fieldWrap}>
                    <label htmlFor="name" style={labelStyle}>Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      style={{ ...inputStyle, borderColor: errors.name ? '#ef4444' : undefined }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = errors.name ? '#ef4444' : 'var(--border)')}
                      autoComplete="name"
                    />
                    {errors.name && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.name}</p>}
                  </div>

                  <div style={fieldWrap}>
                    <label htmlFor="email" style={labelStyle}>Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={{ ...inputStyle, borderColor: errors.email ? '#ef4444' : undefined }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = errors.email ? '#ef4444' : 'var(--border)')}
                      autoComplete="email"
                    />
                    {errors.email && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.email}</p>}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={fieldWrap}>
                    <label htmlFor="company" style={labelStyle}>Company / Organization</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Optional"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                      autoComplete="organization"
                    />
                  </div>

                  <div style={fieldWrap}>
                    <label htmlFor="projectType" style={labelStyle}>Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    >
                      <option value="" style={{ backgroundColor: '#121217', color: '#a0a0a0' }}>Select type…</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} style={{ backgroundColor: '#121217', color: '#ffffff' }}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={fieldWrap}>
                  <label htmlFor="budget" style={labelStyle}>Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  >
                    <option value="" style={{ backgroundColor: '#121217', color: '#a0a0a0' }}>Select range…</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} style={{ backgroundColor: '#121217', color: '#ffffff' }}>{range}</option>
                    ))}
                  </select>
                </div>

                <div style={fieldWrap}>
                  <label htmlFor="message" style={labelStyle}>Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or what you're looking for…"
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px', borderColor: errors.message ? '#ef4444' : undefined }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = errors.message ? '#ef4444' : 'var(--border)')}
                  />
                  {errors.message && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 640px) {
          form div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
