
"use client"
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { easing } from 'maath'

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


export default function Env({ perfSucks }) {


    const ref = useRef()
    useFrame((state, delta) => {
        //Animate Environment and Camera
        if (!perfSucks) {
            easing.damp3(ref.current.rotation, [Math.PI / 2, 0, state.clock.elapsedTime / 5 + state.pointer.x], 0.2, delta)
            easing.damp3(state.camera.position, [Math.sin(state.pointer.x / 4) * 9, 1.25 + state.pointer.y, Math.cos(state.pointer.x / 4) * 9], 0.5, delta)
            state.camera.lookAt(0, 0, 0)
        }
    })


    return (

    <Environment frames={perfSucks ? 1 : Infinity} preset="city" resolution={256} background blur={0.8}>
      <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
      <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
      <group rotation={[Math.PI / 2, 1, 0]}>
        {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
          <Lightformer key={i} intensity={1} rotation={[Math.PI / 4, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
        ))}
        <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
        <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[50, 2, 1]} />
        <Lightformer intensity={0.5} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
      </group>
      <group ref={ref}>
        <Lightformer intensity={3} form="ring" color="gold" rotation-y={Math.PI / 2} position={[-5, 2, -1]} scale={[10, 10, 1]} />
      </group>
    </Environment>

    )
}





