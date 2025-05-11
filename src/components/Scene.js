"use client"
import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  useGLTF,
  Center,
  Caustics,
  Environment,
  Lightformer,
  RandomizedLight,
  PerformanceMonitor,
  AccumulativeShadows,
  MeshTransmissionMaterial
} from '@react-three/drei'



export default function Scene(props) {

  const meshRef = useRef(); // Reference to the mesh object
  const meshRef1 = useRef();
  const meshRef2 = useRef();
  const meshRef3 = useRef();



const { nodes, materials } = useGLTF('/static/lucky2.glb', true)
  return (
    <group  {...props} dispose={null}>
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
          position={[1.357, -0.234, -1.9]}
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
                position={[27.154, 23.317, -51.578]}
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
                position={[-34.871, -21.591, -51.564]}
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
                position={[-34.871, -21.591, -51.564]}
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
                position={[-20.628, 30.498, -7.655]}
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
            ref={meshRef2}
              castShadow
              receiveShadow
              geometry={nodes.Lemon_Lemon_0001.geometry}
              material={materials.Lemon}
              position={[-3.153, -2.268, 0.73]}
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
            ref={meshRef1}
              castShadow
              receiveShadow
              geometry={nodes['92498_lime_wedge_1_1002_92498_lime_wedge_1_1_0'].geometry}
              material={materials['92498_lime_wedge_1_1']}
              position={[0.002, -0.379, -0.017]}
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
        position={[0.014, 0.557, 0.994]}
        scale={190.159}
      />
    </group>
  )
}

useGLTF.preload('/static/lucky2.glb')



//   const { nodes, materials } = useGLTF('/static/lucky2.glb')
//   return (
//     <group {...props} dispose={null}>
//       <group position={[-0.327, 1.535, -0.251]} rotation={[-Math.PI / 2, 0, -1.125]}>
  
//       <Caustics
//             backfaces
//             color={[1, 0.8, 0.8]}
//             focus={[0, -1.2, 0]}
//             lightSource={[-1.2, 3, -2]}
//             frustum={1.75}
//             intensity={0.003}
//             worldRadius={0.26 / 10}
//             ior={0.9}
//             backfaceIor={1.26}
//            >
//         <mesh
//         ref={meshRef}
//           castShadow
//           receiveShadow
//           geometry={nodes.Jar_0.geometry}
//           position={[-0.437, 1.316, -0.097]}
//         >
//           <MeshTransmissionMaterial
//             backside
//             backsideThickness={0.1}
//             thickness={0.05}
//             chromaticAberration={0.05}
//             anisotropicBlur={1}
//             clearcoat={1}
//             clearcoatRoughness={1}
//             envMapIntensity={2}
//           />

//         </mesh>
//         </Caustics>
//       </group>
//       <group position={[-2.343, 2.846, 14.767]} rotation={[-1.601, 0.031, -0.798]} scale={22}>
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <group position={[-0.104, 0.168, 0]} rotation={[0, 0, -3.117]}>
//             <group scale={0.01}>
//               <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Object_5.geometry}
//                 material={materials.Material__4145930}
//                 position={[36.888, -3.813, -33.585]}
//                 rotation={[0.842, -1.548, 0.909]}
//               />
//             </group>
//           </group>
//           <group position={[-0.021, 0.144, 0]}>
//             <group scale={0.01}>
//               <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Object_20.geometry}
//                 material={materials.Material__4145930}
//                 position={[-43.275, -3.651, -47.284]}
//                 rotation={[-0.368, 1.435, 0.043]}
//                 scale={2.036}
//               />
//             </group>
//           </group>
//           <group position={[-0.021, 0.144, 0]}>
//             <group scale={0.01}>
//               <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Object_8.geometry}
//                 material={materials.Material__4145930}
//                 position={[-43.281, -3.656, -46.943]}
//                 rotation={[-0.368, 1.435, 0.043]}
//                 scale={2.036}
//               />
//             </group>
//           </group>
//           <group position={[-0.023, 0.056, -0.003]} rotation={[-Math.PI / 2, 0, 0]} scale={1.68}>
//             <group scale={0.01}>
//               <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Object_17.geometry}
//                 material={materials.Material__4145930}
//                 position={[-26.769, 29.016, -6.57]}
//                 rotation={[0.957, -0.219, -0.148]}
//               />
//             </group>
//           </group>
//         </group>
//       </group>
//       <group position={[1.733, -1.292, -1.062]} rotation={[-Math.PI / 2, 0, 0]}>
//         <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
//           <group position={[-7.014, 256.978, -107.347]} rotation={[-0.207, 0.82, 0]} scale={100}>
//             <mesh
//               castShadow
//               receiveShadow
//               geometry={nodes.Lemon_Lemon_0001.geometry}
//               material={materials.Lemon}
//               position={[0.395, -0.102, 3.377]}
//               rotation={[1.723, -0.107, -0.221]}
//               scale={0.392}
//             />
//           </group>
//         </group>
//       </group>
//       <group rotation={[-Math.PI / 2, 0, 0]} scale={22}>
//         <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
//           <group position={[0, 0, -33.009]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
//             <mesh
//               castShadow
//               receiveShadow
//               geometry={nodes['92498_lime_wedge_1_1002_92498_lime_wedge_1_1_0'].geometry}
//               material={materials['92498_lime_wedge_1_1']}
//               position={[-0.022, -0.56, 0.045]}
//               rotation={[0, 0, 0.215]}
//               scale={0.242}
//             />
//           </group>
//         </group>
//       </group>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube.geometry}
//         material={materials['Material.001']}
//         position={[3.012, 140.514, -38.571]}
//         scale={151.564}
//       />
//     </group>
//   )
// }

// useGLTF.preload('/lucky2.glb')
// export default function Scene(props) {
//     const { nodes, materials, scene } = useGLTF('/static/lucky.glb')

//     scene.traverse((child) => {

//       if (child.name === 'Lid_0') {
//         child.material.color.r = 238
//         child.material.color.g = 169
//         child.material.color.b = 68
//         child.material.needsUpdate = true

//         console.log(child)


//       } 
      
//       if(child.name === 'Plane') {
//         child.material.color.r = 238
//         child.material.color.g = 169
//         child.material.color.b = 68
//         child.material.needsUpdate = true
//       }
//     })
//     return (
//       <group {...props} dispose={null}>
//         <group position={[-0.327, 1.535, -0.251]} rotation={[-Math.PI / 2, 0, -1.125]}>
          
//           <Caustics
//             backfaces
//             color={[1, 0.8, 0.8]}
//             focus={[0, -1.2, 0]}
//             lightSource={[-1.2, 3, -2]}
//             frustum={1.75}
//             intensity={0.003}
//             worldRadius={0.26 / 10}
//             ior={0.9}
//             backfaceIor={1.26}
//           >
          
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Jar_0.geometry}
//           >

//           <MeshTransmissionMaterial
//             backside
//             backsideThickness={0.1}
//             thickness={0.05}
//             chromaticAberration={0.05}
//             anisotropicBlur={1}
//             clearcoat={1}
//             clearcoatRoughness={1}
//             envMapIntensity={2}
//           />
//           </mesh>
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Jar2_0.geometry}
//           >
//             <MeshTransmissionMaterial
//             backside
//             backsideThickness={0.1}
//             thickness={0.05}
//             chromaticAberration={0.05}
//             anisotropicBlur={1}
//             clearcoat={1}
//             clearcoatRoughness={1}
//             envMapIntensity={2}
//           />
//           </mesh>
//           </Caustics>
         
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Lid_0.geometry}
//             material={new THREE.MeshBasicMaterial({color: 'green'})}
//           />
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Lid_1.geometry}
//             material={materials.MasonJarLidInside}
//           />
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Lid2_0.geometry}
//             material={new THREE.MeshBasicMaterial({color: 'green'})}
//           />
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Lid2_1.geometry}
//             material={materials.MasonJarLidInside}
//           />
//         </group>
//         <group position={[-2.343, 2.846, 14.767]} rotation={[-1.601, 0.031, -0.798]} scale={22}>
//           <group rotation={[Math.PI / 2, 0, 0]}>
//             <group position={[-0.104, 0.168, 0]} rotation={[0, 0, -3.117]}>
//               <group scale={0.01}>
//                 <mesh
//                   castShadow
//                   receiveShadow
//                   geometry={nodes.Object_5.geometry}
//                   material={materials.Material__4145930}
//                   position={[36.923, -3.985, -27.271]}
//                   rotation={[0.842, -1.548, 0.909]}
//                 />
//               </group>
//             </group>
//             <group position={[-0.021, 0.144, 0]}>
//               <group scale={0.01}>
//                 <mesh
//                   castShadow
//                   receiveShadow
//                   geometry={nodes.Object_20.geometry}
//                   material={materials.Material__4145930}
//                   position={[-43.314, -3.481, -40.969]}
//                   rotation={[-0.368, 1.435, 0.043]}
//                   scale={2.036}
//                 />
//               </group>
//             </group>
//             <group position={[-0.021, 0.144, 0]}>
//               <group scale={0.01}>
//                 <mesh
//                   castShadow
//                   receiveShadow
//                   geometry={nodes.Object_8.geometry}
//                   material={materials.Material__4145930}
//                   position={[-43.319, -3.485, -40.629]}
//                   rotation={[-0.368, 1.435, 0.043]}
//                   scale={2.036}
//                 />
//               </group>
//             </group>
//             <group position={[-0.104, 0.168, -0.002]} rotation={[0, 0, -3.117]}>
//               <group scale={0.01}>
//                 <mesh
//                   castShadow
//                   receiveShadow
//                   geometry={nodes.Object_11.geometry}
//                   material={materials.Material__4145930}
//                   position={[22.359, 23.046, -53.31]}
//                   rotation={[1.127, -1.17, 1.193]}
//                 />
//               </group>
//             </group>
//             <group position={[-0.023, 0.056, -0.003]} rotation={[-Math.PI / 2, 0, 0]} scale={1.68}>
//               <group scale={0.01}>
//                 <mesh
//                   castShadow
//                   receiveShadow
//                   geometry={nodes.Object_17.geometry}
//                   material={materials.Material__4145930}
//                   position={[-26.792, 25.259, -6.469]}
//                   rotation={[0.957, -0.219, -0.148]}
//                 />
//               </group>
//             </group>
//           </group>
//         </group>
//         <group position={[1.733, -1.292, -1.062]} rotation={[-Math.PI / 2, 0, 0]}>
//           <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
//             <group position={[-7.014, 256.978, -107.347]} rotation={[-0.207, 0.82, 0]} scale={100}>
//               <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Lemon_Lemon_0.geometry}
//                 material={materials.Lemon}
//                 position={[3.06, -0.552, 5.179]}
//                 rotation={[0.004, 0.225, -0.525]}
//                 scale={0.392}
//               />
//               <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Lemon_Lemon_0001.geometry}
//                 material={materials.Lemon}
//                 position={[0.453, 0.145, 5.65]}
//                 rotation={[1.713, 0.534, -0.356]}
//                 scale={0.392}
//               />
//             </group>
//           </group>
//         </group>
//         <group rotation={[-Math.PI / 2, 0, 0]} scale={22}>
//           <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
//             <group position={[0, 0, -33.009]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
//               <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes['92498_lime_wedge_1_1002_92498_lime_wedge_1_1_0'].geometry}
//                 material={materials['92498_lime_wedge_1_1']}
//                 position={[-0.071, -0.607, 0.05]}
//                 scale={0.242}
//               />
//             </group>
//           </group>
//         </group>
//         <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Plane.geometry}
//         material={materials['Material.001']}
//         position={[0, 0.13, 0]}
//         scale={222}
//       />
        
//       </group>
//     )
//   }
  
//   useGLTF.preload('/lucky.glb')