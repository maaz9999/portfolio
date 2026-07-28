import type { NavItem, SocialLink } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'Email',
    url: 'mailto:businessmaz17@gmail.com',
    handle: 'businessmaz17@gmail.com',
    icon: 'mail',
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/maazzz2026',
    handle: '@maazzz2026',
    icon: 'instagram',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/muhammad-maaz-96b8983a7/',
    handle: 'muhammad-maaz',
    icon: 'linkedin',
  },
];

export const projectTypes = [
  'Website',
  'Web Application',
  'Product Development',
  'Esports Technology',
  'Tournament Platform',
  'Collaboration',
  'Other',
];

export const budgetRanges = [
  'Under $500',
  '$500 – $1,000',
  '$1,000 – $2,500',
  '$2,500 – $5,000',
  '$5,000+',
  'Let\'s discuss',
];
