import React, { useRef } from 'react'
import { useGLTF, Caustics, MeshTransmissionMaterial } from '@react-three/drei'

export default function Model(props) {

    const meshRef = useRef(); // Reference to the mesh object
    const meshRef1 = useRef();
    const meshRef2 = useRef();
    const meshRef3 = useRef();


  const { nodes, materials } = useGLTF('/lucky_draco-opt.glb')
  return (
    <group {...props} dispose={null}>

      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.001']}
        position={[0.372, 18.672, -3.723]}
        scale={22.669}
      />
        <Caustics
            backfaces
            color={[1, 0.8, 0.8]}
            focus={[0, -1.2, 0]}
            lightSource={[-1.2, 3, -2]}
            frustum={1.75}
            intensity={0.003}
            worldRadius={0.26 / 10}
            ior={0.9}
            backfaceIor={1.26}
           >

            
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Jar_0.geometry}
        material={materials['Material.002']}
        position={[-1.365, 3.971, -0.414]}
        rotation={[-Math.PI / 2, 0, -1.125]}
      >

        <MeshTransmissionMaterial
            backside
            backsideThickness={0.1}
            thickness={0.05}
            chromaticAberration={0.05}
            anisotropicBlur={1}
            clearcoat={1}
            clearcoatRoughness={1}
            envMapIntensity={2}
          />

      </mesh>
      </Caustics>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.Material__4145930}
        position={[-3.652, 6.347, 1.407]}
        rotation={[-0.059, 0.758, -3.076]}
        scale={0.22}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lemon_Lemon_0001.geometry}
        material={materials.Lemon}
        position={[1.665, 1.464, -1.87]}
        rotation={[-0.353, -0.768, -2.193]}
        scale={0.392}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['92498_lime_wedge_1_1002_92498_lime_wedge_1_1_0'].geometry}
        material={materials['92498_lime_wedge_1_1']}
        position={[-3.695, 1.625, 1.492]}
        rotation={[-0.765, -0.5, 1.297]}
        scale={5.323}
      />
    </group>
  )
}

useGLTF.preload('/lucky_draco-opt.glb')