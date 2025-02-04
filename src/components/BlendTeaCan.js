import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BlendTeaCan(props) {
  const { nodes, materials } = useGLTF('/assets/sham.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shamrock.geometry}
        material={nodes.Shamrock.material}
        position={[-1.151, 0.807, -2.538]}
        rotation={[0, 2, 0]}
        scale={[0.127, 0.468, 0.468]}
      />
    </group>
  )
}

useGLTF.preload('/assets/sham.glb')
