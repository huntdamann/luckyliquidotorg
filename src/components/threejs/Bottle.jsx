import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei'

export function Model({progress}) {
    const { nodes, materials } = useGLTF('/lowpoly1.glb')
    const modelRef = useRef();
    useFrame(() => {
        if (!modelRef.current) return;
    
        modelRef.current.rotation.y = progress * Math.PI * 2;
      });

    return (
      <Float>
            <group  scale={[0.5, 0.5, 0.5]} position={[0.3, -0.9, 0]} dispose={null}>
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
      </Float>
    
    )
  }
  
  useGLTF.preload('/lowpoly1.glb')

