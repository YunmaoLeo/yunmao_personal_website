import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Hero3DBackground() {
  const pointsRef = useRef<THREE.Points>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  // Create particle positions
  const particlesCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  // Create particle colors (gradient between primary colors)
  const colors = useMemo(() => {
    const cols = new Float32Array(particlesCount * 3);
    const color1 = new THREE.Color('#2EC4B6'); // primary
    const color2 = new THREE.Color('#FF9F1C'); // secondary
    const color3 = new THREE.Color('#FFBF69'); // accent

    for (let i = 0; i < particlesCount; i++) {
      const mixRatio = Math.random();
      let color: THREE.Color;
      
      if (mixRatio < 0.33) {
        color = color1.clone().lerp(color2, Math.random());
      } else if (mixRatio < 0.66) {
        color = color2.clone().lerp(color3, Math.random());
      } else {
        color = color3.clone().lerp(color1, Math.random());
      }

      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return cols;
  }, []);

  // Handle mouse movement
  useMemo(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop
  useFrame(({ clock }) => {
    if (!pointsRef.current) return;

    const time = clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.05;
    
    // Mouse interaction effect
    pointsRef.current.rotation.x = mousePosition.current.y * 0.1;
    pointsRef.current.rotation.z = mousePosition.current.x * 0.05;

    // Update particle positions for wave effect
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      const x = positions[i3];
      const z = positions[i3 + 2];
      positions[i3 + 1] = Math.sin(x * 0.3 + time) * 0.5 + Math.cos(z * 0.3 + time) * 0.5;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

