"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
config.autoAddCss = false;
import { useInView } from 'react-intersection-observer'


import React, { forwardRef, useEffect } from "react";



import Clover from '../../public/assets/clover-clip.png'
import Image from "next/image";



 async function saveAction() {

    console.log('hey');
}


const Newsletter = () => {




    const { ref , inView , entry } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    useEffect(() => {
            if (!inView) return;
    
            console.log('Newsletter Section in View')
            
        }, [inView])
    
    return(

        <>
        <div ref={ref} className="newsletter-section">
                <p className="text-honeygold">"Luck is when preparation of tea meets opportunity"</p>
                <Image className="text-[3rem]" src={Clover} alt="clover
                +23" ></Image>
        </div>


        
        
        
        </>



    )






}

export default Newsletter;