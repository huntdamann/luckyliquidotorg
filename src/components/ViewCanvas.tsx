"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { View, useGLTF, Environment, Bvh, Instance, Instances, Html, BakeShadows, AdaptiveDpr } from "@react-three/drei";
import { Suspense, useEffect, useReducer, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import { Bubbles } from './Bubbles'

import { Clover } from "./Clover";

import React from "react";
import Scene from './Scene'
import Model from './Model'
import Env from './Env'
import { OrbitControls, PerformanceMonitor, AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { PerspectiveCamera } from "three";
import { data } from './store'
import Lucky from '../../static/lucky-logo-demo.png'

import { useControls } from 'leva'











type Props = {};

export function ViewCanvas({}: Props) {


  const modelRef = useRef<any>()
  


  /**
 * Graphical Interface
 */

    const cameraRef = useRef<PerspectiveCamera>(null);
    const [perfSucks, degrade] = useState(false)

    // const { model } = useControls({ model: 10})
    // const { scale } = useControls({ scale: 1 })
    // const { position } = useControls({ position: [0, 0, 0]})


  return (
    <>


   
      <Canvas
        style={{
        
          overflow: "hidden",
          zIndex: 0,
        }}
        shadows
        dpr={[1, perfSucks?  1.5 : 2]}
        gl={{ antialias: true }}
        camera={{
          position: [0, 10, 10],
          fov: 40,
          
        }}
      >

       

       
        <color attach="background" args={['#d1a054']} />

          <View.Port />
        
          <group ref={modelRef} scale={0.5} position={[0.3,-3.5,-3]} rotation={[0,-0.7,0]}>
          <Suspense fallback={null}>

          <Bubbles />
             

          </Suspense>

         
          
          </group>

          
         


        <Environment frames={perfSucks ? 1 : Infinity} preset="city" resolution={256} background blur={0.8} />

        {/* <OrbitControls makeDefault /> */}
        {/* <gridHelper args={[20,20]} /> */}


        <AdaptiveDpr />
        <BakeShadows />
      </Canvas>
    </>
  );
}



  