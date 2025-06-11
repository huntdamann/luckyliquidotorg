"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faBluesky, faTiktok} from '@fortawesome/free-brands-svg-icons';

import { useInView } from 'react-intersection-observer'
config.autoAddCss = false;


import React, { forwardRef, useEffect, useState } from "react";



import Lucky from '../../public/assets/lucky-logo-demo.png'
import Image from "next/image";



 async function saveAction() {

    console.log('hey');
}

const FollowerCounter = ({ realcount }) => {


    const [displayFollowCount, setDisplayCount ] = useState(0);

}


const SocialPanel = ({ realCount, duration = 2000, start = 0 }) => {


    const [displayFollowCount, setDisplayCount ] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const { ref , inView , entry } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    useEffect(() => {
        if (!inView || hasAnimated) return;

        const range = realCount - start
        if (range <= 0) return;

        const stepTime = Math.abs(Math.floor(duration / range))
        console.log('How quickly score runs based in milliseconds:', stepTime)

        let current = start;
        console.log('What is currently shown:', current)

        const interval = setInterval(() => {
            console.log('I am running')
          current+=1
          setDisplayCount(current)
          if (current >= realCount) {
            clearInterval(interval)
          }


        }, stepTime)
        return () => clearInterval(interval)

        // const interval = setInterval(() => {
        //     console.log('Interaval is working')
        //     if (phase === 'increasing') {
        //         current += Math.floor(Math.random() * 100 + 50)
        //         console.log(current)

        //         if (current >= peak) {
        //             current = peak;
        //             phase = 'decreasing';
        //         }
        //     }
        //         else if (phase === 'decreasing') {
        //             current -= Math.floor(Math.random() * 50 + 10)
        //             if (current <= realCount ) {
        //                 current = realCount
        //                 clearInterval(interval)
        //             } 
        //     }
        //     setDisplayCount(current)
            
        // }, 10)
        setHasAnimated(true)
    }, [inView, hasAnimated, realCount, duration, start])





    return(

        <>

           <div id="social-section" className=" text-white flex flex-col justify-evenly items-center ">

            <h2 className="font-main text-honeygold text-2xl">Follow Our Socials</h2>

            <div className="flex items-center gap-1 ">
            <FontAwesomeIcon className="text-[5rem]" icon={faInstagram} />
            <a className="" href="https://www.instagram.com/waytoolucky_/">Instagram</a>
            </div>

            <div className="flex gap-2">
            <span className="text-blue-600" style={{color: '#d1a054', fontWeight: 800}} ref={ref}>{displayFollowCount.toLocaleString()}</span>
            <span>Followers</span>
            </div>
          
            



           </div>

            
           

        
        
        
        </>



    )






}

export default SocialPanel;