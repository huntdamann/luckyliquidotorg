import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ShirtOne(props) {
  const { nodes, materials } = useGLTF('/assets/3dmodel.gltf')
  return (
    <group  position={[0, 0, -20]} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['3Dmodelexport'].geometry}
        material={materials.susannas_help_PBR}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={.010}
      />
    </group>
  )
}

useGLTF.preload('/assets/3dmodel.gltf')
