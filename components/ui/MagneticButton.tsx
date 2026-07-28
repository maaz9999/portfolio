'use client';

import { useRef, useCallback } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  as?: 'button' | 'a' | 'div';
  strength?: number;
  [key: string]: unknown;
}

export default function MagneticButton({
  children,
  className = '',
  style = {},
  onClick,
  href,
  download,
  as: Tag = 'div',
  strength = 0.4,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * strength);
      y.set((e.clientY - centerY) * strength);
    },
    [strength, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const props = {
    ref,
    className: `magnetic-btn ${className}`,
    style,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
    ...rest,
    ...(href ? { href, download } : {}),
  };

  return (
    <motion.div
      style={{ x, y, display: 'inline-block' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {Tag === 'a' && href ? (
        <a {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>} ref={ref as React.Ref<HTMLAnchorElement>}>
          {children}
        </a>
      ) : (
        <button {...props as React.ButtonHTMLAttributes<HTMLButtonElement>} ref={ref as React.Ref<HTMLButtonElement>}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
