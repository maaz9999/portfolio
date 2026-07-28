// types/index.ts - Centralized TypeScript interfaces for all portfolio content

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  icon: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  status: string;
  featured: boolean;
  category: string;
  year: string;
  role: string;
  description: string;
  shortDescription: string;
  features: string[];
  caseStudy: CaseStudy | null;
  tags: string[];
  thumbnail: string;
  liveUrl: string | null;
  githubUrl: string | null;
  color: string;
}

export interface CaseStudy {
  problem: string;
  concept: string;
  intendedUsers: string[];
  systemApproach: string;
  currentStatus: string;
  futureDirection: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'current' | 'past';
  description: string[];
  tags: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  label: string;
  value: string;
  unit: string;
  description: string;
}

export interface CareerMilestone {
  year: string;
  label: string;
  description: string;
}

export interface GamingProfile {
  game: string;
  uid: string;
  activeSince: string;
  description: string;
  highlights: string[];
}

export interface Identity {
  id: string;
  label: string;
  tagline: string;
  description: string;
  color: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}
