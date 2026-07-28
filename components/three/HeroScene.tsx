'use client';

import { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, MeshDistortMaterial, Float, Torus } from '@react-three/drei';
import * as THREE from 'three';

// ── Three Identity Core ─────────────────────────────────────
function IdentityCore({ activeIndex }: { activeIndex: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  const colors = ['#f97316', '#a0a0a0', '#ef4444'];
  const targetColor = new THREE.Color(colors[activeIndex]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.06;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.3;
      ring1Ref.current.rotation.z = t * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * 0.4;
      ring2Ref.current.rotation.x = t * 0.15;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = t * 0.25;
      ring3Ref.current.rotation.y = -t * 0.3;
    }

    // Animate core material color
    if (coreRef.current) {
      const mat = coreRef.current.material as THREE.MeshStandardMaterial;
      mat.color.lerp(targetColor, delta * 2);
      mat.emissive.lerp(targetColor, delta * 1.5);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core sphere */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial
          color={colors[0]}
          metalness={0.9}
          roughness={0.1}
          emissive={colors[0]}
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Ring 1 — Engineer — orange */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.85, 0.025, 16, 80]} />
        <meshStandardMaterial
          color="#f97316"
          metalness={0.95}
          roughness={0.05}
          emissive="#f97316"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Ring 2 — Builder — silver */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[1.1, 0.02, 16, 80]} />
        <meshStandardMaterial
          color="#c0c0c0"
          metalness={1}
          roughness={0.05}
        />
      </mesh>

      {/* Ring 3 — Esports — red */}
      <mesh ref={ring3Ref} rotation={[-Math.PI / 4, 0, Math.PI / 3]}>
        <torusGeometry args={[1.35, 0.016, 16, 80]} />
        <meshStandardMaterial
          color="#ef4444"
          metalness={0.9}
          roughness={0.1}
          emissive="#ef4444"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Outer glow sphere */}
      <mesh>
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshStandardMaterial
          color={colors[activeIndex]}
          transparent
          opacity={0.05}
          roughness={1}
        />
      </mesh>
    </group>
  );
}

// ── Mouse Camera Controller ─────────────────────────────────
function CameraController({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ── WebGL Fallback ──────────────────────────────────────────
function WebGLFallback() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(249,115,22,0.06) 0%, transparent 70%)',
      }}
    >
      <div
        style={{
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          border: '1px solid rgba(249,115,22,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '1px solid rgba(160,160,160,0.2)',
            position: 'absolute',
          }}
        />
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '4rem',
            color: 'rgba(249,115,22,0.6)',
          }}
        >
          MM
        </div>
      </div>
    </div>
  );
}

// ── Main Export ─────────────────────────────────────────────
interface HeroSceneProps {
  activeIndex?: number;
  mouseX?: number;
  mouseY?: number;
}

export default function HeroScene({ activeIndex = 0, mouseX = 0, mouseY = 0 }: HeroSceneProps) {
  const [webglAvailable, setWebglAvailable] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebglAvailable(false);
    } catch {
      setWebglAvailable(false);
    }
  }, []);

  if (!webglAvailable) return <WebGLFallback />;

  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={[1, 1.5]}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-3, 3, 3]} intensity={0.8} color="#f97316" />
      <pointLight position={[3, -3, -3]} intensity={0.4} color="#6666ff" />

      <Suspense fallback={null}>
        <Environment preset="city" />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <IdentityCore activeIndex={activeIndex} />
        </Float>
        <CameraController mouseX={mouseX} mouseY={mouseY} />
      </Suspense>
    </Canvas>
  );
}
