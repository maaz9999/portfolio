'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const Strands = dynamic(() => import('@/components/ui/Strands'), { ssr: false });
const SplashCursor = dynamic(() => import('@/components/ui/SplashCursor'), { ssr: false });

export default function GlobalBackground() {
  const pathname = usePathname();
  const isPortfolioPage = pathname?.startsWith('/portfolio') || pathname?.startsWith('/work');

  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
          overflow: 'hidden',
          background: '#070708',
        }}
        aria-hidden="true"
      >
        {!isPortfolioPage && (
          <Strands
            colors={["#F97316", "#7C3AED", "#06B6D4"]}
            count={3}
            speed={0.5}
            amplitude={1}
            waviness={1}
            thickness={0.7}
            glow={2.6}
            taper={3}
            spread={1}
            intensity={0.6}
            saturation={2}
            opacity={1}
            scale={1.5}
            glass={false}
            refraction={1}
            dispersion={1}
            glassSize={1}
            hueShift={0}
          />
        )}
      </div>

      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING={true}
        RAINBOW_MODE={false}
        COLOR="#FF8533"
      />
    </>
  );
}
