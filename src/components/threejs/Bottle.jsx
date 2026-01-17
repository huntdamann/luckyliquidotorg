import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
export function Model({progress}) {
    const { nodes, materials } = useGLTF('/lowpoly1.glb')
    const modelRef = useRef();
    useFrame(() => {
        if (!modelRef.current) return;
    
        modelRef.current.rotation.y = progress * Math.PI * 2;
      });

    return (
      <group  scale={[0.5, 0.5, 0.5]} position={[0.3, -.5, 0]} dispose={null}>
        <group ref={modelRef} position={[-0.632, 2.209, -0.178]} scale={0.473}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh.geometry}
            material={materials['Bottle Base']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_1.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_2.geometry}
            material={materials['Label Wrap']}
          />
        </group>
      </group>
    )
  }
  
  useGLTF.preload('/lowpoly1.glb')

