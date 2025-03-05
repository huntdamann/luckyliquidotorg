import React, { forwardRef, useRef } from 'react'
import { useThree } from '@react-three/fiber'

import { MeshTransmissionMaterial } from '@react-three/drei';

import { useControls } from 'leva';


const Torus = forwardRef((props, ref) => {



const materialProps = useControls({
    thickness: {value: 0.2, min:0, max:2, step: 0.001},
    roughness: {value: 0, min:0, max:1, step: 0.1},
    transmission: {value: 1, min:0, max:1, step: 0.01},
    ior: {value: 1.2, min:0, max:2, step: 0.001},
    ca: {value: 0.02, min:0, max:2},
    backside: {value: true}
})


const { viewport } = useThree();


return (
    <group scale={viewport.width / 4} {...props} dispose={null}>

        
        <mesh
            ref={props.ref} 
            visible
            userData={{ hello: 'world'}}
            position={[0,0,0]}
            scale={[1,1,1]}
            
        >

            <torusGeometry args={[1,0.4,16,100]} />
            <MeshTransmissionMaterial color='silver' transparent {...materialProps} />

        </mesh>



    </group>
)



})

export default Torus;