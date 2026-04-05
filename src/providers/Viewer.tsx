'use client'
import React from 'react'

import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, Environment } from '@react-three/drei'
import { Model } from '@/components/threejs/Bottle'


const sceneMap = {
    bottle: <Model progress={300} />,
    
}

const Scene3D = ({ modelSelect }: { modelSelect: string }) => {
    return (
        <>
            {sceneMap[modelSelect] ?? (
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            )}
        </>
    )
}

export default function Viewer({ modelSelect }: { modelSelect: string }) {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 20 }}>
                <ambientLight intensity={1.8} />
                <pointLight intensity={5} position={[0, 6, 0]} />
                <Float>
                    <Scene3D modelSelect={modelSelect} />
                </Float>
                {/* <Environment preset="city" /> */}
            </Canvas>
        </div>
    )
}