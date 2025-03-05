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

export function Preloader({}: Props) {


    const [animationComplete, setAnimationComplete] = useState(false)

   

      const handleUpdate = () => {
        
      }

      useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimationComplete(true);
        }, 5000)

        return () => clearTimeout(timeout)
      }, [])
    return(
        <>

        <div className="overlay">
            <Image className="z-[999] left-[40%] top-[50vw] absolute" width={100} height={100} src={Lucky} alt="Lucky Logo" />
            <div className="bar">

            </div>
            <div className="bar">

            </div>
            <div className="bar">

            </div>
            <div className="bar">

            </div>
            <div className="bar">

            </div>
            <div className="bar">

            </div>
            <div className="bar">

            </div>
            <div className="bar">

            </div>
            <div className="bar">

            </div>
            <div className="bar">

            </div>
        </div>
        </>
    )
}

