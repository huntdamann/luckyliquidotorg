"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { View, useGLTF, Environment, Bvh, Instance, Instances } from "@react-three/drei";
import { Suspense, useEffect, useReducer, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Bubbles } from './Bubbles'
import { Jar } from './Jar'
import { Clover } from "./Clover";
import Torus from './Torus'
import React from "react";
import Scene from './Scene'
import Env from './Env'
import { OrbitControls, PerformanceMonitor, AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { PerspectiveCamera } from "three";
import { data } from './store'

import { GUI } from 'lil-gui'







const Loader = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Loader),
  { ssr: false },
);

type Props = {};

export function ViewCanvas({}: Props) {


  /**
 * Graphical Interface
 */

    const cameraRef = useRef<PerspectiveCamera>(null);
    const [perfSucks, degrade] = useState(false)



// useEffect(() => {

//   const gui = new GUI()

//   gui.add(jarGUIRef.current.rotation, 'x', 0, Math.PI * 2)

// })
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          // pointerEvents: "none",
          zIndex: 0,
        }}
        shadows
        dpr={[1, perfSucks?  1.5 : 2]}
        gl={{ antialias: true }}
        camera={{
          position: [50, 3, 20],
          fov: 26,
        }}
      >
        {/* Detect Performance issues */}
        <PerformanceMonitor onDecline={() => degrade(true)} />
        <color attach="background" args={['#d1a054']} />

        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
        <Bvh>
          <group scale={0.12} position={[0,0,3.2]} rotation={[0,-0.7,0]}>


          <Scene />
          <Bubbles />
          {/* <AccumulativeShadows frames={100} alphaTest={0.45} opacity={0.8} color="red" scale={25} position={[0, -0.0005, 0]}>
          <RandomizedLight amount={3} radius={6} ambient={0.5} intensity={1} position={[0, 0, 0]} bias={0.001} />
        </AccumulativeShadows> */}
          </group>

          
         
        </Bvh>


        <Env perfSucks={perfSucks} />
        <OrbitControls makeDefault />
        {/* <gridHelper args={[20,20]} /> */}




       
      </Canvas>
      <Loader />
    </>
  );
}
