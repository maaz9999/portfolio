import type { Achievement, CareerMilestone, GamingProfile, Identity } from '@/types';

export const achievements: Achievement[] = [
  {
    id: 'pubg-ecosystem',
    label: 'PUBG Mobile Ecosystem',
    value: '6+',
    unit: 'Years',
    description: 'Active involvement in the PUBG Mobile competitive ecosystem since 2019.',
  },
  {
    id: 'tournament-operations',
    label: 'Tournaments Organized',
    value: 'Multiple',
    unit: 'Events',
    description: 'Organized PUBG Mobile and Call of Duty competitive tournament activities.',
  },
  {
    id: 'participants',
    label: 'Event Participants',
    value: '100s',
    unit: 'Players',
    description: 'Contributed to competitive events involving hundreds of participating players.',
  },
  {
    id: 'ewc-2025',
    label: 'Esports World Cup',
    value: 'EWC',
    unit: '2025 · Riyadh',
    description: 'Attended the Esports World Cup 2025 in Riyadh as a content creator.',
  },
  {
    id: 'mark47',
    label: 'MARK47 Development',
    value: 'Active',
    unit: 'Dev',
    description: 'Building dedicated esports production software for the PUBG Mobile ecosystem.',
  },
  {
    id: 'multidisciplinary',
    label: 'Domains of Expertise',
    value: '4',
    unit: 'Domains',
    description: 'Combines software engineering with player, organizer, content, and operational experience.',
  },
];

export const careerJourney: CareerMilestone[] = [
  {
    year: '2019',
    label: 'The Beginning',
    description: 'Started software engineering education and became active in the PUBG Mobile competitive ecosystem.',
  },
  {
    year: '2020',
    label: 'Into Operations',
    description: 'Started managing competitive PUBG Mobile and Call of Duty tournament activities.',
  },
  {
    year: '2022',
    label: 'Expanding Depth',
    description: 'Expanded understanding of esports operations, community management, and competitive ecosystems.',
  },
  {
    year: '2023',
    label: 'Academic Completion',
    description: "Completed Bachelor's in Information Technology at Air University, Islamabad.",
  },
  {
    year: '2025',
    label: 'Global Stage',
    description: 'Attended the Esports World Cup in Riyadh as a content creator. Connected with global esports communities.',
  },
  {
    year: 'Now',
    label: 'Building Forward',
    description: 'Building digital platforms, developing MARK47, and taking on selected engineering and esports collaborations.',
  },
];

export const gamingProfile: GamingProfile = {
  game: 'PUBG Mobile',
  uid: '5139024644',
  activeSince: '2019',
  description:
    'Active competitive PUBG Mobile player since 2019 with first-hand understanding of competitive gameplay, player needs, tournament workflows, and community behavior.',
  highlights: [
    'Active player since 2019',
    'Competitive ecosystem experience',
    'Deep understanding of tournament workflows',
    'Community behavior and player needs insight',
  ],
};

export const identities: Identity[] = [
  {
    id: 'engineer',
    label: 'Engineer',
    tagline: 'FULL-STACK SOFTWARE ENGINEER',
    description:
      'Builds modern, scalable, and carefully designed web-based products using full-stack technologies.',
    color: '#f97316',
  },
  {
    id: 'builder',
    label: 'Builder',
    tagline: 'DIGITAL PRODUCT BUILDER',
    description:
      'Transforms ideas and industry problems into usable digital platforms, internal tools, systems, and products.',
    color: '#a0a0a0',
  },
  {
    id: 'esports',
    label: 'Esports',
    tagline: 'ESPORTS PROFESSIONAL',
    description:
      'Brings first-hand experience as a competitive player, tournament organizer, event manager, community contributor, and gaming-industry professional.',
    color: '#ef4444',
  },
];
