'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  accent?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  accent,
}: SectionHeadingProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const alignStyles: React.CSSProperties = {
    textAlign: align,
    alignItems: align === 'center' ? 'center' : 'flex-start',
  };

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', ...alignStyles }}>
      {label && (
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: align === 'center' ? 0 : -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}
        >
          <span className="label">{label}</span>
        </motion.div>
      )}

      <motion.h2
        className="display-md"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: label ? 0.1 : 0 }}
        style={{ marginBottom: subtitle ? '1rem' : 0 }}
      >
        {accent ? (
          <>
            {title.split(accent).map((part, i) => (
              <span key={i}>
                {part}
                {i < title.split(accent).length - 1 && (
                  <span className="gradient-accent">{accent}</span>
                )}
              </span>
            ))}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="body-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
