

import React, { useRef } from 'react'
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei'
import { MeshPhysicalMaterial, Group } from 'three'
import * as THREE from "three"

import useMediaQuery from '@/hooks/useMediaQuery';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);


export default function Model(props) {
  const bottleRef = useRef<Group>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  useGSAP(
    () => {
      if (!bottleRef.current) return;


      console.log("This runs")
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scroll-container",
          endTrigger: ".scroll-container",
          pin: true,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });


    },
    { dependencies: [isDesktop] },
  );
//   model.rotation.z = isMobile ? 0 : THREE.MathUtils.degToRad(-25);

  const { nodes, materials } = useGLTF('/assets/bottle.glb')
  return (
    <group  {...props} position={[7,-5,7]}  dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottle.geometry}
        material={materials['Material.003']}
        position={[-7.356, 4.043, -18.815]}
        rotation={[0, -0.824, 0]}
        scale={0.417}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cap001.geometry}
          material={materials['Material.001']}
          position={[-0.06, 5.049, 0.003]}
          scale={0.631}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lucky_Bottle_Top.geometry}
          material={materials['Material.004']}
          position={[-0.032, 5.299, 0.596]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.58, 0.554, 0.554]}
        />
        {/* <MeshTransmissionMaterial thickness={0.5} roughness={0} ior={1.2} transmission={0.6} /> */}
      </mesh>
    </group>
  )
}

useGLTF.preload('/assets/bottle.glb')




