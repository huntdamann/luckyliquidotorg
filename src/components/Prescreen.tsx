"use client";
import React, { lazy, useEffect, useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

type Props = {};

export function PreScreen({}: Props) {


    const [animationComplete, setAnimationComplete] = useState(false)
    const timelineRef = useRef(gsap.timeline())

    useEffect(() => {
      const tl = gsap.timeline();
      tl.to(".bar2", {
        delay: 1,
        opacity: 1,
        scaleY: 0, // instead of height: 0
        transformOrigin: "top",
        stagger: 0.05,
        ease: "power4.inOut",
        zIndex: -999
      });
      
      tl.to(".overlay2", { zIndex: -1, delay: 1.5, opacity: 1 });
    }, []);
    

    //   const handleUpdate = () => {
        
    //   }

      useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimationComplete(true);
        }, 2500)

        return () => clearTimeout(timeout)
      }, [])
    return(
        <>

        <div className="overlay2">
            <div className="bar2">

            </div>
            <div className="bar2">

            </div>
            <div className="bar2">

            </div>
            <div className="bar2">

            </div>
            <div className="bar2">

            </div>
            <div className="bar2">

            </div>
            <div className="bar2">

            </div>
            <div className="bar2">

            </div>
            <div className="bar2">

            </div>
            <div className="bar2">

            </div>
        </div>
        </>
    )
}

