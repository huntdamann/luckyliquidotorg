"use client";
import React, { lazy, useEffect, useRef, useState } from "react";

import { EmblaOptionsType } from 'embla-carousel'

import Popup from '../slices/Popup'
import Header from '../slices/Header'
import Hero from '../slices/Hero'
import ProductShowcase from '../slices/ProductShowcase'
import CTA from '../slices/CTA'
import  MarketMarquee  from '../slices/MarketMarquee'
import SocialCTA from '../slices/SocialCTA'
import Footer from '../slices/Footer'
import Testimonials from '../slices/Testimonials'
import { motion, AnimatePresence } from 'motion/react'



export default function Holder() {

 

  // References to Main component Containers (PaperFront, Window, PaperBack)
  const windowRef = useRef<HTMLDivElement | null>(null);
  const paperFrontRef = useRef<HTMLDivElement | null>(null);
  // Component References
  const popupRef = useRef(null);
  

  const [openPopUp, setOpenPopUp] = useState(false);





  const [open, setOpen] = useState(false);
  

  const offset = 1800
  const [close, setClose] = useState(false);


  // Menu Folder Logic
  const [homeTouch, setHomeTouch] = useState(false)
  const [aboutUsTouch, setAboutTouch] = useState(false)
  const [followUsTouch, setFollowTouch] = useState(false)

  
  const [pageHeight, setPageHeight] = useState(0);


  

  // Update transform origin
  const updateTransformOrigin = () => {
    if (!windowRef.current || !paperFrontRef.current) return;

    const scrollTop = window.scrollY;
    const pageHeight = paperFrontRef.current.offsetHeight;
    const equation = ((scrollTop + offset) / pageHeight) * 100;
    


    paperFrontRef.current.style.transformOrigin = `center ${equation}%`;
  };

  useEffect(() => {
    updateTransformOrigin(); // initial calcualtion
  })
  useEffect(() => {
    const body = document.body;
  
    if (open) {
      body.classList.add("tilt-lock");
    } else {
      body.classList.remove("tilt-lock");
    }
  
    // Cleanup in case component unmounts while open
    return () => body.classList.remove("tilt-lock");
  }, [open]);
  
 
  // useEffect(() => {
  //   requestAnimationFrame(() => {
  //     updateTransformOrigin();
  //   });
  // }, [open, close]);
  
  
  const openMenu = () => {

    if (paperFrontRef.current) {
    const height = paperFrontRef.current.offsetHeight;
    setPageHeight(height);
    }
    setOpen(true);
    setClose(false)

  }
  const closeMenu = () => {
    setOpen(false);
    setClose(true);

  }

  
  

  
 
  

  // const OPTIONS: EmblaOptionsType = { loop: true }
  // const SLIDE_COUNT = 5
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


 


  return (
   <>

    <AnimatePresence mode='wait'>
    {open &&  <Header
    closeMenu={closeMenu} // pass it here
    />}

    </AnimatePresence>
   
  
    {/* Hero Section */}
    <div id="paper-window" ref={windowRef} className={open? 'tilt' : ''}>
      {/* The Front of the Paper */}
      <div ref={paperFrontRef} id="paper-front" >
        <div
          className={`fixed top-6 right-6 z-50 transition-opacity duration-500
          }`}
        >

          {/* Hamburger */}
          <div onClick={open ? closeMenu : openMenu} className="hamburger">
            <span></span>
          </div>

        </div>
        <Hero setter={setOpenPopUp} refNo={openPopUp} /> 
        <ProductShowcase setter={setOpenPopUp} refNo={openPopUp} />
        <SocialCTA />
        <CTA />
        <section className="text-black flex flex-col justify-evenly text-center h-[70dvh] p-2">
        <svg viewBox="0 0 600 24" className="w-full mb-6" height="24">
            <path
              d="M0 12 C50 4,100 20,150 12 S250 4,300 12 S400 20,450 12 S550 4,600 12"
              stroke="#1D9E75" strokeWidth="2.5" strokeLinecap="round" fill="none"
            />
          </svg>
          <div className=" mx-80">
            <h2> Sip the TEA in real life!</h2>
            <span className="font-display  w-[50px] ">Come taste your soon to be favorite tea in person. Find us at a Dallas markets near you! We'll be the ones with the good vibes and better brews.</span>
            
          </div>
          
          <MarketMarquee />
          <p className="text-sm text-green-800 font-semibold">
    <span className="inline-block animate-wiggle">📍</span>{" "}
    Follow us on Instagram for updated dates & spots
  </p>
        </section>
        <Popup refPop={popupRef} refNo={openPopUp} setter={setOpenPopUp}  /> 
  
        {/* <div className="fixed flex gap-4 flex-col border w-[400px] p-3 rounded-md text-black bottom-3 right-6">
              <span className="cookie-heading">Cookie Notice</span>
              <p className="text-black w-[auto]   font-semibold">This website uses cookies to ensure a smooth user experience and to analyze performance and traffic on our website. 
                We also share information about your use of our site with our social media and analytics partners.
                <span className="underline">Privacy Policy</span>
              </p>
              <div className="flex gap-3">
                <button className="bg-green border-green-500 text-center border-2 rounded-md w-24">Accept</button>
                <button className="bg-green border-green-500 text-center border-2 rounded-md w-24">Decline</button>

              </div>
        </div> */}
      </div>
      
    </div>
   
   </>
  );
}
