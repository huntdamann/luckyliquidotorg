"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { View, useGLTF, Environment, Bvh, Instance, Instances, Html, useProgress } from "@react-three/drei";
import { Suspense, useEffect, useReducer, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

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
import Lucky from '../../static/lucky-logo-demo.png'

import { GUI } from 'lil-gui'







function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html center>
          <Image width={150} height={100} alt="LuckyLiquid Beverage" src={Lucky} />

    {progress} % loaded</Html>;
}

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

          <View.Port />
        
        <Bvh>
          <group scale={0.12} position={[0.1,-0.2,3.9]} rotation={[0,-0.7,0]}>


          <Scene />
          <Bubbles />
          {/* <AccumulativeShadows frames={100} alphaTest={0.45} opacity={0.8} color="red" scale={25} position={[0, -0.0005, 0]}>
          <RandomizedLight amount={3} radius={6} ambient={0.5} intensity={1} position={[0, 0, 0]} bias={0.001} />
        </AccumulativeShadows> */}
          </group>

          
         
        </Bvh>


        <Env perfSucks={perfSucks} />
        {/* <OrbitControls makeDefault /> */}
        {/* <gridHelper args={[20,20]} /> */}




       
      </Canvas>
    </>
  );
}


function Loading() {


  const { progress, active } = useProgress();

  return (
    <>
     {/* Loading overlay */}
     {active && (
      <Html center>
        <div style={{fontSize: '100px', color: '#fff'}}>
          Hi... {Math.round(progress)}%
        </div>
      </Html>
    )}
    </>
  )
}