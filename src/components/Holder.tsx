"use client";
import React, { lazy, useEffect, useRef, useState } from "react";

import { EmblaOptionsType } from 'embla-carousel'

import Popup from '../slices/Popup'
import Header from '../slices/Header'
import Hero from '../slices/Hero'
import ProductShowcase from '../slices/ProductShowcase'
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

  const openHome = () => {
    setHomeTouch(true);
  }
  const closeHome = () => {
    setHomeTouch(false);
  }
  const openAbout = () => {
    setAboutTouch(true);
  }
  const closeAbout = () => {
    setAboutTouch(false);
  }
  

  const toggleFollow = () => {
    if (followUsTouch === true) {
      setFollowTouch(false)
    }
    else {
      setFollowTouch(true)
    }
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
          <div onClick={open ? closeMenu : openMenu} className="hamburger">
            <span></span>
          </div>
        </div>
        <Hero setter={setOpenPopUp} refNo={openPopUp} /> 
        {/* <Hero setter={setOpenPopUp} refNo={openPopUp} />  */}

        <ProductShowcase setter={setOpenPopUp} refNo={openPopUp} />
        <Popup refPop={popupRef} refNo={openPopUp} setter={setOpenPopUp}  /> 
  
      </div>
      
    </div>
   
   </>
  );
}
