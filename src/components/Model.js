import React, { useRef } from 'react'
import { useGLTF, Caustics, MeshTransmissionMaterial } from '@react-three/drei'

export default function Model(props) {

    const meshRef = useRef(); // Reference to the mesh object
    const meshRef1 = useRef();
    const meshRef2 = useRef();
    const meshRef3 = useRef();


  const { nodes, materials } = useGLTF('/lucky_draco.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.359, 2.457, -0.331]} rotation={[-Math.PI / 2, 0, -1.125]}>

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
        ref={meshRef}
          castShadow
          receiveShadow
          geometry={nodes.Jar_0.geometry}
          material={materials['Material.002']}
          position={[-0.508, -0.872, 1.514]}
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
      </group>
      <group position={[-2.376, 2.629, 14.686]} rotation={[-1.601, 0.031, -0.798]} scale={22}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.104, 0.168, 0]} rotation={[0, 0, -3.117]}>
            <group scale={0.01}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5.geometry}
                material={materials.Material__4145930}
                position={[36.794, -2.66, -37.219]}
                rotation={[0.842, -1.548, 0.909]}
              />
            </group>
          </group>
          <group position={[-0.021, 0.144, 0]}>
            <group scale={0.01}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_20.geometry}
                material={materials.Material__4145930}
                position={[-43.746, -3.69, -46.203]}
                rotation={[-0.368, 1.435, 0.043]}
                scale={2.036}
              />
            </group>
          </group>
          <group position={[-0.021, 0.144, 0]}>
            <group scale={0.01}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials.Material__4145930}
                position={[-43.747, -3.578, -45.898]}
                rotation={[-0.368, 1.435, 0.043]}
                scale={2.036}
              />
            </group>
          </group>
          <group position={[-0.023, 0.056, -0.003]} rotation={[-Math.PI / 2, 0, 0]} scale={1.68}>
            <group scale={0.01}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_17.geometry}
                material={materials.Material__4145930}
                position={[-25.082, 29.51, -7.019]}
                rotation={[0.957, -0.219, -0.148]}
              />
            </group>
          </group>
        </group>
      </group>
      <group position={[1.7, -0.37, -1.143]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-7.014, 256.978, -107.347]} rotation={[-0.207, 0.82, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Lemon_Lemon_0001.geometry}
              material={materials.Lemon}
              position={[-0.114, -0.791, 0.153]}
              rotation={[-1.788, -1.464, 2.402]}
              scale={0.392}
            />
          </group>
        </group>
      </group>
      <group position={[-0.033, 0.922, -0.081]} rotation={[-Math.PI / 2, 0, 0]} scale={22}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 0, -33.009]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['92498_lime_wedge_1_1002_92498_lime_wedge_1_1_0'].geometry}
              material={materials['92498_lime_wedge_1_1']}
              position={[-0.166, -0.402, 0.032]}
              rotation={[0.805, -0.5, 1.297]}
              scale={0.242}
            />
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.001']}
        position={[0.372, 18.672, -3.723]}
        scale={22.669}
      />
    </group>
  )
}

useGLTF.preload('/lucky_draco.glb')