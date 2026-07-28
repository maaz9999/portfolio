'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type ValidTag = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  once?: boolean;
  as?: ValidTag;
  splitBy?: 'word' | 'char';
}

export default function AnimatedText({
  text,
  className = '',
  style = {},
  delay = 0,
  once = true,
  as: Tag = 'p',
  splitBy = 'word',
}: AnimatedTextProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-80px' });

  const words = text.split(' ');

  if (splitBy === 'char') {
    return (
      <Tag ref={ref} className={className} style={{ ...style, display: 'inline-block' }} aria-label={text}>
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : undefined }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: delay + i * 0.02, ease: 'easeOut' }}
          >
            {char}
          </motion.span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.3em' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%', opacity: 0 }}
            animate={inView ? { y: '0%', opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.05,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
