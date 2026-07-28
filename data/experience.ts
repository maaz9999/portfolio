import type { Experience, Education } from '@/types';

export const experience: Experience[] = [
  {
    id: 'fullstack-developer',
    role: 'Full-Stack Developer & Independent Builder',
    company: 'Self-Employed',
    period: '2019 – Present',
    type: 'current',
    description: [
      'Building modern web applications, internal platforms, websites, and digital products.',
      'Combining product thinking, interface design, frontend development, and backend engineering.',
      'Developing products for business operations, creative workflows, and esports production.',
    ],
    tags: ['Full-Stack', 'Product Development', 'Web Applications'],
  },
  {
    id: 'event-manager-psp',
    role: 'Event Manager',
    company: 'Pro Scrims Pakistan',
    period: '2020 – 2022',
    type: 'past',
    description: [
      'Managed competitive PUBG Mobile and Call of Duty tournament series.',
      'Coordinated players, match schedules, tournament operations, and community communication.',
      'Worked on tournament series associated with CODA Shop.',
      'Helped deliver events involving hundreds of participating players and community members across Pakistan.',
    ],
    tags: ['Tournament Operations', 'Event Management', 'PUBG Mobile', 'Call of Duty'],
  },
  {
    id: 'content-creator-ewc',
    role: 'Content Creator',
    company: 'Esports World Cup 2025',
    period: '2025',
    type: 'past',
    description: [
      'Attended the Esports World Cup 2025 in Riyadh as a content creator.',
      'Produced event-related social media coverage and digital storytelling.',
      'Engaged with international esports environments and global competitive gaming audiences.',
    ],
    tags: ['Content Creation', 'Social Media', 'Esports World Cup', 'Riyadh'],
  },
];

export const education: Education = {
  degree: "Bachelor's in Information Technology",
  institution: 'Air University',
  location: 'Islamabad',
  period: '2019 – 2023',
  description: 'Studied Information Technology with a focus on software engineering and digital systems.',
};
