"use client";
import React, { lazy, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import localFont from "next/font/local";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {RemoveScroll} from 'react-remove-scroll';
import useMediaQuery from '../hooks/useMediaQuery'
import Lucky from '../../public/assets/lucky-logo-demo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { Preload } from "@react-three/drei";
gsap.registerPlugin(useGSAP);

type Props = {};

export function PreScreen({}: Props) {


    const overRef = useRef(null)
    const barRef = useRef(null)
    const [animationComplete, setAnimationComplete] = useState(false)

    useGSAP(() => {
       
        gsap.to(barRef.current, 1, {opacity: 1, height: 0, stagger: {amount: 0.5}, ease: "power4.inOut", zIndex: -999})
        gsap.to(overRef.current, 1, {zIndex: -1})
       
      })

    //   const handleUpdate = () => {
        
    //   }

      useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimationComplete(true);
        }, 5000)

        return () => clearTimeout(timeout)
      }, [])
    return(
        <>

        <div ref={overRef} className="overlay2">
            <div ref={barRef} className="bar2">

            </div>
            <div ref={barRef} className="bar2">

            </div>
            <div ref={barRef} className="bar2">

            </div>
            <div ref={barRef} className="bar2">

            </div>
            <div ref={barRef} className="bar2">

            </div>
            <div ref={barRef} className="bar2">

            </div>
            <div ref={barRef} className="bar2">

            </div>
            <div ref={barRef} className="bar2">

            </div>
            <div ref={barRef} className="bar2">

            </div>
            <div ref={barRef} className="bar2">

            </div>
        </div>
        </>
    )
}

