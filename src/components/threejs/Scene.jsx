'use client';

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { useRef } from 'react';

function RotatingModel({ progress }) {
  const modelRef = useRef();

  useFrame(() => {
    if (!modelRef.current) return;

    modelRef.current.rotation.y = progress * Math.PI * 2;
  });

  return (
    <mesh ref={modelRef} scale={0.8} position={[0,0.5,0]}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function Scene({ progress }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ background: "transparent" }}
    >
      <RotatingModel progress={progress} />

      <directionalLight intensity={5} position={[0, 2, 3]} />
      <Environment preset="city" />
    </Canvas>
  );
}
