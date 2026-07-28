'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2200;
    const interval = 30;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const eased = Math.min(100, Math.round((current / steps) * 100));
      setProgress(eased);
      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 600);
        }, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          {/* Initials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <div
              className="mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                color: 'var(--warm-white)',
              }}
            >
              MAAZ
            </div>
            <div className="label" style={{ color: 'var(--text-muted)', letterSpacing: '0.2em' }}>
              PORTFOLIO
            </div>
          </motion.div>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full"
            style={{ maxWidth: '280px' }}
          >
            {/* Progress line */}
            <div
              style={{
                width: '100%',
                height: '1px',
                background: 'var(--graphite)',
                borderRadius: '1px',
                overflow: 'hidden',
                marginBottom: '1rem',
              }}
            >
              <motion.div
                style={{
                  height: '100%',
                  background: 'var(--accent)',
                  borderRadius: '1px',
                  width: `${progress}%`,
                  transition: 'width 0.03s linear',
                }}
              />
            </div>

            {/* Percentage */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span className="label" style={{ color: 'var(--text-muted)' }}>Loading</span>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {progress}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
