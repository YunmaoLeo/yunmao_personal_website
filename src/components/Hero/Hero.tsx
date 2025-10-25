import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Hero3DBackground from './Hero3DBackground';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-surface/30">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <Hero3DBackground />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white z-[1]" />

      {/* Content */}
      <HeroContent />
    </section>
  );
}

