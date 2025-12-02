import React, { useRef } from 'react'
import { useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'

export default function Bottle() {
    const { nodes } = useGLTF("/assets/bottle.glb");
    const { viewport } = useThree()
    const bottle = useRef()
    
    return (
        <group scale={viewport.width / 3.75} >
            <mesh ref={bottle} {...nodes.Bottle.geometry}>
                <meshBasicMaterial/>
            </mesh>
        </group>
    )
}