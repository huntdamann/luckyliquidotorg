'use client';

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, MeshTransmissionMaterial, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { useRef } from 'react';

function RotatingModel({ progress }) {
  const modelRef = useRef();

  useFrame(() => {
    if (!modelRef.current) return;

    modelRef.current.rotation.y = progress * Math.PI * 2;
  });

  return (
    <mesh ref={modelRef} scale={0.8} position={[0,0.5,0]}>
    <sphereGeometry args={[1, 32, 32]} />
  {/* <meshNormalMaterial /> */}
      <MeshTransmissionMaterial color="#ffffff" roughness={0} metalness={0} thickness={0.5} transmission={1} />
    </mesh>
  );
}

export default function Scene({ progress }) {
  return 
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ background: "blue" }}
      
    >
      <RotatingModel progress={progress} />

      <directionalLight intensity={1} position={[5, 5, 5]} />
      <ambientLight intensity={Math.PI} />
      <AccumulativeShadows temporal frames={100} alphaTest={0.9} color="#3ead5d" colorBlend={1} opacity={0.8} scale={20}>
          <RandomizedLight radius={10} ambient={0.5} intensity={Math.PI} position={[2.5, 8, -2.5]} bias={0.001} />
      </AccumulativeShadows>
      {/* <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr" backgroundBlurriness={1} /> */}



    </Canvas>
  );
}
