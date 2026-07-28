'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navItems } from '@/data/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll('[data-section]');
      let current = '';
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.scrollY >= el.offsetTop - 150) {
          current = el.getAttribute('data-section') || '';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' && !activeSection;
    if (href.startsWith('/#')) return activeSection === href.slice(2);
    return pathname === href;
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: '1.25rem',
          left: 0,
          right: 0,
          zIndex: 900,
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
          padding: '0 1rem',
        }}
      >
        <div
          style={{
            pointerEvents: 'auto',
            width: '100%',
            maxWidth: '1100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.625rem 1.25rem',
            borderRadius: '100px',
            background: scrolled
              ? 'rgba(14, 14, 17, 0.85)'
              : 'rgba(18, 18, 23, 0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: scrolled ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(255, 255, 255, 0.07)',
            boxShadow: scrolled
              ? '0 16px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(249, 115, 22, 0.05)'
              : '0 8px 30px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.125rem',
              letterSpacing: '-0.03em',
              color: 'var(--warm-white)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span
              style={{
                display: 'flex',
                width: '32px',
                height: '28px',
                background: 'linear-gradient(135deg, var(--accent) 0%, #ff8533 100%)',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: 800,
                color: '#000000',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '0',
                flexShrink: 0,
                boxShadow: '0 2px 10px rgba(249, 115, 22, 0.3)',
              }}
            >
              MZ
            </span>
            <span style={{ fontWeight: 800, letterSpacing: '-0.02em', fontSize: '1.05rem' }}>MAAZ</span>
          </Link>

          {/* Desktop Nav Items */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '0.8125rem',
                    letterSpacing: '0.01em',
                    padding: '0.4375rem 1rem',
                    borderRadius: '100px',
                    color: active ? 'var(--accent)' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    background: active ? 'var(--accent-glow)' : 'transparent',
                    border: `1px solid ${active ? 'rgba(249, 115, 22, 0.3)' : 'transparent'}`,
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.currentTarget).style.color = 'var(--text-primary)';
                      (e.currentTarget).style.background = 'rgba(255, 255, 255, 0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.currentTarget).style.color = 'var(--text-secondary)';
                      (e.currentTarget).style.background = 'transparent';
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{ fontSize: '0.75rem', padding: '0.5rem 1.15rem' }}
            >
              Start a Project
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="flex lg:hidden items-center justify-center p-2 rounded-full border border-white/10 bg-white/5 text-white cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(7, 7, 8, 0.96)',
              backdropFilter: 'blur(25px)',
              WebkitBackdropFilter: 'blur(25px)',
              zIndex: 890,
              padding: '6rem 2rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            className="lg:hidden"
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '1.75rem',
                      letterSpacing: '-0.02em',
                      color: isActive(item.href) ? 'var(--accent)' : 'var(--text-primary)',
                      textDecoration: 'none',
                      padding: '0.75rem 0',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div>
              <Link
                href="/contact"
                className="btn btn-primary"
                onClick={() => setMobileOpen(false)}
                style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem' }}
              >
                Start a Project
              </Link>
              <div className="label" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                MAAZ · Software & Esports
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
