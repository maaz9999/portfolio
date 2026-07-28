// lib/constants.ts
export const SITE_URL = 'https://muhammadmaaz.dev';
export const CONTACT_EMAIL = 'businessmaz17@gmail.com';
export const INSTAGRAM_URL = 'https://instagram.com/maazzz2026';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/muhammad-maaz-96b8983a7/';
export const CV_PATH = '/cv/muhammad-maaz-cv.pdf';

export const SECTION_IDS = {
  hero: 'hero',
  about: 'about',
  identity: 'identity',
  work: 'work',
  experience: 'experience',
  skills: 'skills',
  gaming: 'gaming',
  achievements: 'achievements',
  journey: 'journey',
  contact: 'contact',
} as const;

export const ANIMATION_DURATION = {
  fast: 0.3,
  medium: 0.6,
  slow: 1.0,
  verySlow: 1.5,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const COLORS = {
  black: '#080808',
  charcoal: '#111111',
  graphite: '#1a1a1a',
  warmWhite: '#f5f5f0',
  silver: '#a0a0a0',
  accent: '#f97316',
  accentRed: '#ef4444',
  muted: '#888888',
} as const;
