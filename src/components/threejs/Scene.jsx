'use client';

import { Canvas, useFrame, p } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

import { Environment, MeshTransmissionMaterial, AccumulativeShadows, RandomizedLight, Caustics } from '@react-three/drei'
import { useRef } from 'react';
import { useControls } from 'leva';
import { PlaneGeometry } from 'three';
import { Model } from './Bottle'


function RotatingModel({ progress }) {
  const modelRef = useRef();
  const materialProps = useControls({

    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },

    roughness: { value: 0, min: 0, max: 1, step: 0.1 },

    transmission: {value: 1, min: 0, max: 1, step: 0.1},

    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },

    chromaticAberration: { value: 0.02, min: 0, max: 1},

    backside: { value: true},

})

  useFrame(() => {
    if (!modelRef.current) return;

    modelRef.current.rotation.y = progress * Math.PI * 2;
  });

  return (
  
    <mesh ref={modelRef} castShadow receiveShadow scale={0.8} position={[0,0.5,0]}>
    <boxGeometry />
    <MeshTransmissionMaterial {...materialProps}/>


          
        </mesh>
  );
}

export default function Scene({ progress }) {
  
  return (
    <Canvas
    camera={{ position: [0, 0, 5], fov: 45 }}
    style={{ }}
    
  >
   <Perf position="top-right" />

    {/* <mesh position={[0, 0, -2]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="gold" />

    </mesh> */}
    <Model progress={progress} />

    <ambientLight intensity={0.823} />
    
    <AccumulativeShadows temporal frames={100} alphaTest={0.9} color="#3ead5d" colorBlend={1} opacity={0.8} scale={20}>
        <RandomizedLight radius={10} ambient={0.5} intensity={Math.PI} position={[2.5, 8, -2.5]} bias={0.001} />
    </AccumulativeShadows>
    <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr" backgroundBlurriness={1} />



  </Canvas>
  )
}
