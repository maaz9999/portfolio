'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only on desktop
    if (window.innerWidth < 1024) return;

    let ringX = 0;
    let ringY = 0;
    let animId: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, pos.x, 0.12);
      ringY = lerp(ringY, pos.y, 0.12);
      setRing({ x: ringX, y: ringY });
      animId = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && typeof target.closest === 'function') {
        if (target.closest('a, button, [role="button"], input, textarea, select')) {
          setIsHovering(true);
        }
      }
    };

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && typeof target.closest === 'function') {
        if (target.closest('a, button, [role="button"], input, textarea, select')) {
          setIsHovering(false);
        }
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter, true);
    document.addEventListener('mouseout', onLeave, true);

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter, true);
      document.removeEventListener('mouseout', onLeave, true);
      cancelAnimationFrame(animId);
    };
  }, [pos.x, pos.y]);

  if (typeof window !== 'undefined' && window.innerWidth < 1024) return null;

  return (
    <>
      {/* Dot */}
      <div
        className="cursor"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      >
        <div
          className="cursor-dot"
          style={{
            transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`,
            background: isHovering ? 'var(--accent)' : 'var(--warm-white)',
          }}
        />
      </div>

      {/* Ring */}
      <div
        className="cursor"
        style={{
          left: ring.x,
          top: ring.y,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      >
        <div
          className="cursor-ring"
          style={{
            transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
            borderColor: isHovering ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
          }}
        />
      </div>
    </>
  );
}
