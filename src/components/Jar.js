"use client"

import React, { useRef } from 'react'
import { useGLTF, MeshTransmissionMaterial, Float } from '@react-three/drei'
import { useThree, meshPhysicalMaterial } from '@react-three/fiber'
import { useControls } from 'leva'
import useMediaQuery from '../hooks/useMediaQuery'
import { MeshPhysicalMaterial } from 'three'


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
        <meshPhysicalMaterial color="green" metalness={0.8} roughness={0.1} envMapIntensity={0.9} clearcoat={1} 
        
        transparent={true}
        opacity={0.5}
        reflectivity={0.2}
        ior={0.5}
        
        />
      </mesh>
      </Float>

    </group>
  )
}

useGLTF.preload('/jar.glb')
