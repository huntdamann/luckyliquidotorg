import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import useMediaQuery from '../hooks/useMediaQuery'

export function Clover(props) {
  const { nodes, materials } = useGLTF('/assets/clover.glb')
  const isDesktop = useMediaQuery('(min-width: 460px)');

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.clovermmGroup0_phong1_0.geometry}
        material={materials.phong1}
        position={[0, 0, 0]}
        
      />
    </group>
  )
}

useGLTF.preload('/assets/sham.glb')
