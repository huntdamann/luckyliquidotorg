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


const SocialPanel = ({ realCount }) => {


    const [displayFollowCount, setDisplayCount ] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const { ref , inView , entry } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    useEffect(() => {
        if (!inView || hasAnimated) return;

        const overshoot = Math.floor(realCount * 0.2)
        const peak = realCount + overshoot
        console.log(peak)
        console.log(realCount)

        let current = realCount
        let phase = 'increasing'
        console.log('In View')

        const interval = setInterval(() => {
            if (phase === 'increasing') {
                current += Math.floor(Math.random() * 100 + 50)
                console.log(current)

                if (current >= peak) {
                    current = peak;
                    phase = 'decreasing';
                }
            }
                else if (phase === 'decreasing') {
                    current -= Math.floor(Math.random() * 50 + 10)
                    if (current <= realCount ) {
                        current = realCount
                        clearInterval(interval)
                    } 
            }
            setDisplayCount(current)
            
        }, phase === 'increasing' ? 5 : 10)
        setHasAnimated(true)
        return () => clearInterval(interval)
    }, [inView, hasAnimated, realCount])





    return(

        <>

           <div className="border text-white bg-black flex flex-col justify-center items-center ">

            <span>Follow us on Social Media</span>
            <FontAwesomeIcon className="text-[5rem]" icon={faInstagram} />
            <span>22 Followers</span>
            <span className="text-blue-600" style={{color: 'green', fontWeight: 800}} ref={ref}>{displayFollowCount.toLocaleString()}</span>
            



           </div>

            
           

        
        
        
        </>



    )






}

export default SocialPanel;