# Muhammad Maaz — Portfolio

A premium 3D personal portfolio website built with **Next.js 16**, **React Three Fiber**, **Framer Motion**, and **Tailwind CSS v4**.

## ✦ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + Custom CSS |
| 3D | React Three Fiber + Drei + Three.js |
| Animation | Framer Motion + GSAP |
| Scroll | Lenis |
| Icons | Lucide React |

## ✦ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000)

## ✦ Project Structure

```
portfolio-app/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── work/               # All projects
│   ├── work/[slug]/        # Project case study
│   ├── contact/            # Contact page
│   └── resume/             # Web résumé
├── components/
│   ├── layout/             # Navbar, Footer, Loader
│   ├── sections/           # Page sections (Hero, About, Work…)
│   ├── three/              # React Three Fiber scenes
│   └── ui/                 # Reusable UI components
├── data/                   # ← Edit portfolio content here
│   ├── profile.ts          # Name, bio, contact, SEO
│   ├── projects.ts         # Projects & case studies
│   ├── experience.ts       # Work experience & education
│   ├── skills.ts           # Skills grouped by category
│   ├── achievements.ts     # Achievements, journey, gaming
│   └── navigation.ts      # Nav items, social links
├── lib/                    # Utilities and constants
├── public/
│   ├── IMG.png             # Profile photo
│   └── cv/                 # Place CV PDF here as muhammad-maaz-cv.pdf
└── types/index.ts          # TypeScript interfaces
```

## ✦ Updating Content

All portfolio content lives in `data/`. You never need to touch layout or animation files to update:

- **Profile info** → `data/profile.ts`
- **Add a project** → `data/projects.ts` (copy an existing entry)
- **Work experience** → `data/experience.ts`
- **Skills** → `data/skills.ts`
- **Achievements / Journey** → `data/achievements.ts`

## ✦ Adding Your CV

Place your CV PDF at:
```
public/cv/muhammad-maaz-cv.pdf
```

## ✦ Contact Form Setup

The contact form UI is complete. To make it functional, open `components/sections/ContactSection.tsx` and find the **INTEGRATION POINT** comment block. Uncomment and configure one of:

- **Resend** (recommended) — Create `app/api/contact/route.ts`
- **Formspree** — Replace the fetch URL
- **EmailJS** — Add your keys to `.env.local`

Copy `.env.example` → `.env.local` and fill in your keys.

## ✦ Features

- ✅ Cinematic dark design with orange accents
- ✅ 3D animated hero (Three.js rings — Engineer / Builder / Esports)
- ✅ Custom cursor (desktop only)
- ✅ Scroll progress indicator
- ✅ Smooth section animations (Framer Motion)
- ✅ Interactive skill matrix with category panels
- ✅ MARK47 featured project with case study drawer
- ✅ Horizontal career timeline
- ✅ Contact form with validation, loading, success & error states
- ✅ SEO metadata + Open Graph + JSON-LD structured data
- ✅ Dynamic sitemap + robots.txt
- ✅ Web-based résumé page
- ✅ Responsive across all screen sizes
- ✅ WebGL fallback for unsupported browsers
- ✅ prefers-reduced-motion support

## ✦ Deployment

Deploy to Vercel with zero config:

```bash
npx vercel
```
