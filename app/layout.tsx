import type { Metadata } from 'next';
import './globals.css';
import { profile } from '@/data/profile';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import GlobalBackground from '@/components/ui/GlobalBackground';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: profile.seo.title,
    template: `%s | MAAZ`,
  },
  description: profile.seo.description,
  keywords: [
    'MAAZ',
    'Maaz',
    'Full-Stack Developer',
    'Software Engineer',
    'Esports Professional',
    'Product Builder',
    'Next.js',
    'PUBG Mobile',
    'Islamabad',
    'Pakistan',
    'MARK47',
  ],
  authors: [{ name: 'MAAZ', url: profile.seo.canonicalUrl }],
  creator: 'MAAZ',
  metadataBase: new URL(profile.seo.canonicalUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: profile.seo.canonicalUrl,
    title: profile.seo.title,
    description: profile.seo.description,
    siteName: 'MAAZ',
    images: [{ url: profile.seo.ogImage, width: 1200, height: 630, alt: 'MAAZ Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.seo.title,
    description: profile.seo.description,
    creator: profile.seo.twitterHandle,
    images: [profile.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: profile.seo.canonicalUrl },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'MAAZ',
  url: profile.seo.canonicalUrl,
  sameAs: [profile.instagramUrl],
  jobTitle: 'Full-Stack Software Engineer',
  worksFor: { '@type': 'Organization', name: 'Self-Employed' },
  address: { '@type': 'PostalAddress', addressLocality: 'Islamabad', addressCountry: 'PK' },
  email: profile.email,
  description: profile.seo.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <GlobalBackground />
        {children}
      </body>
    </html>
  );
}
