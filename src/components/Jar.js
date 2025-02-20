"use client"

import React, { useRef } from 'react'
import { useGLTF, MeshTransmissionMaterial, Float } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import useMediaQuery from '../hooks/useMediaQuery'


export function Jar(props) {
  const { nodes, materials } = useGLTF('/assets/jar.glb')
  const { viewport } = useThree();
  const isDesktop = useMediaQuery('(min-width: 460px)');


  
  return (
    <group scale={viewport.width / 4} {...props} dispose={null}>
      <Float
      
        speed={2}
        rotationIntensity={1}
        floatIntensity={1}
        floatingRange={[ isDesktop ? 0.4 : 0.5 , isDesktop? 0.3 : 0.1]}
      >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Jar.geometry}
        material={materials['Smooh Glass']}
        position={[0, -0.1, 0]}
        rotation={[1.579, 0.152, -0.28]}
        // scale={[0.387, 0.079, 0.020]}
        scale={[ isDesktop? 0.133 : 0.387,0.079, isDesktop? 0.007 : 0.020]}
      >
        <MeshTransmissionMaterial
          thickness={0.2}
          roughness={0.1}
          transmission={0.8}
                    
          ior={0.1}
          chromaticAberration={0.02}
          backside={true}
       />
      </mesh>
      </Float>

    </group>
  )
}

useGLTF.preload('/jar.glb')
