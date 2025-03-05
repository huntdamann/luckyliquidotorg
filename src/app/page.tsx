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
import Popup from '../slices/Popup'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

gsap.registerPlugin(useGSAP);


export default function Home() {

  const isDesktop = useMediaQuery('(min-width: 460px)');
  const [openPopUp, setOpenPopUp] = useState(false);

  const popupRef = useRef(null);
  const overlayRef = useRef(null);
  const buttonRef = useRef(null);
  const exitRef = useRef(null);
  const chevronRef = useRef(null);

  useGSAP(() => {
    gsap.from('#header', {y:-320, delay: 2 })
    gsap.from('#title', {opacity: 0})
    gsap.from('#construction', {y:300, opacity: 0, delay: 4})
    gsap.from(chevronRef.current, {opacity: 0, delay: 4.5})
    gsap.to('#title', {opacity: 1, delay: 3})
    gsap.to('#header', {y: 0, delay: 2, opacity: 1})
    gsap.to('#construction', {y: isDesktop? -200 : 0, opacity: 1, delay: 4})
    gsap.to(chevronRef.current, {opacity: 1,delay: 4.5})
  })

  useEffect(() => {
    if(openPopUp) {
      gsap.to(popupRef.current, {zIndex:999, opacity: 1, duration: 0.6, ease: "sine.out"})
      gsap.to(overlayRef.current, {zIndex: 800, opacity: 0.8, duration: 1, ease:"power3.out"})
      gsap.to(buttonRef.current, { opacity: 0, y: -50, duration: 0.3, ease:"sine.out"})

    } else {
      gsap.to(popupRef.current, {
        
        opacity: 0,
        duration: 0.5,
        ease: "sine.in",
        zIndex: -1,
      })
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        ease:'power3.in',
        zIndex: -1,

      })
      gsap.to(buttonRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power3.in",
        zIndex: 40,

      })
    }
  }, [openPopUp])


  return (
   <>

    <RemoveScroll>
    <section className=" absolute left-[15%] md:left-[35%] lg:left-[40%] z-20 flex flex-col bg-transparent  h-[100vh] items-center justify-center gap-2">




   
   <div id="header" className="fixed font-juju opacity-0 top-10 left-[30%] lg:left-[43%] uppercase text-4xl text-honeygold">
    <Image width={150} height={100} alt="LuckyLiquid Beverage" src={Lucky} />
   </div>
   <div className="p-3 text-center text-[#01a237] w-[17rem] text-2xl flex flex-col justify-center items-center">
    
    <span id="title" className='opacity-0 font-main drop-shadow-[0_3.3px_1.2px_rgba(0,0,0,0.8)] text-5xl w-[20rem] lg:mt-[-7rem]'>"It's actually good!"</span>
    <span id="construction" className='lg:mt-[18rem] mt-[14rem] drop-shadow-[0_1.3px_1.2px_rgba(0,0,0,0.8)] font-mono stroke-black opacity-0'>Our site is currently under construction. </span>
   </div>
   {/* Call to action button */}

  
    <Popup refPop={popupRef} refOut={overlayRef} refNo={openPopUp} setter={setOpenPopUp}  />


    <button id="button-handle" ref={buttonRef} onClick={() => setOpenPopUp(!openPopUp)} className="text-white p-2 absolute animate-bounce z-40 bottom-3">
      <div  ref={chevronRef} className="flex flex-col text-green-600 opacity-0">
        <span>Click Here</span>
       
            <FontAwesomeIcon className=" text-green-600 " icon={faChevronUp} />

      </div>
    </button>
    {/* <button id="thanks-button" className="text-white p-2 absolute animate-bounce z-50 bottom-3 right-0">

    <span>hey</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M314.9 194.4v101.4h-28.3v120.5h-77.1V295.9h-28.3V194.4c0-4.4 1.6-8.2 4.6-11.3 3.1-3.1 6.9-4.7 11.3-4.7H299c4.1 0 7.8 1.6 11.1 4.7 3.1 3.2 4.8 6.9 4.8 11.3zm-101.5-63.7c0-23.3 11.5-35 34.5-35s34.5 11.7 34.5 35c0 23-11.5 34.5-34.5 34.5s-34.5-11.5-34.5-34.5zM247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256 0 123.1 104.7 8 247.6 8zm.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8 .1-113.8-90.2-203.3-202.8-203.3z"/></svg>
    </button> */}
   </section>

   </RemoveScroll>
 
   </>
  );
}
