"use client";


import React, { useRef, useEffect, useState } from 'react'
import * as THREE from "three"
import { useFrame } from '@react-three/fiber'
import { Instance, useGLTF, Instances } from '@react-three/drei'
import useMediaQuery from '../hooks/useMediaQuery'

import gsap from "gsap";

// Using Object3D as a container to efficiently set and update positions for each bubble instance
const o = new THREE.Object3D();

export function Clover(props) {
  const { nodes, materials } = useGLTF('/assets/clover.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.clovermmGroup0_phong1_0.geometry}
        material={materials.phong1}
        position={[0, 0.1, 0]}
        scale={[  0.387,0.079,0.020]}
      />
    </group>
  )
}

useGLTF.preload('/assets/clover.glb')



