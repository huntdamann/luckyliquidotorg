"use client";
import Head from 'next/head'
import React, { lazy, useEffect, useRef, useState } from "react";
import clsx from 'clsx';

import Image from "next/image";
import { EmblaOptionsType } from 'embla-carousel'
import { useGSAP } from "@gsap/react";
import { motion, useInView } from 'motion/react';
import gsap from "gsap";







import Popup from '../slices/Popup'
import Header from '../slices/Header'
import Footer from '../slices/Footer'
import Hero from '../slices/Hero'
import Testimonials from '../slices/Testimonials'
import Success from '../slices/Success'
import Newsletter from '../slices/Newsletter'
import OurStory from '../slices/OurStory.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInstagram, faBluesky, faTiktok, faFacebook} from '@fortawesome/free-brands-svg-icons';

import AnimatedBottle from '@/components/AnimatedBottle'

gsap.registerPlugin(useGSAP);


export default function Home() {

 

  // References to Main component Containers (PaperFront, Window, PaperBack)
  const windowRef = useRef<HTMLDivElement | null>(null);
  const paperFrontRef = useRef<HTMLDivElement | null>(null);
  const paperBackRef = useRef(null);
  // Component References
  const popupRef = useRef(null);
  const overlayRef = useRef(null);
  const chevronRef = useRef(null);
  const buttonRef = useRef(null);

  const [openPopUp, setOpenPopUp] = useState(false);





  const [open, setOpen] = useState(false);
  

  const offset = 1800
  const [close, setClose] = useState(false);


  // Menu Folder Logic
  const [homeTouch, setHomeTouch] = useState(false)
  const [aboutUsTouch, setAboutTouch] = useState(false)
  const [followUsTouch, setFollowTouch] = useState(false)
  const [orderTouch, setOrderTouch] = useState(false)

  //Open Our Story 
  const [openStory, setOpenStory] = useState(false)

  const [pageHeight, setPageHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);


  

  // Update transform origin
  const updateTransformOrigin = () => {
    if (!windowRef.current || !paperFrontRef.current) return;

    const scrollTop = windowRef.current.scrollTop;
    const pageHeight = paperFrontRef.current.offsetHeight;
    const equation = ((scrollTop + offset) / pageHeight) * 100;

    paperFrontRef.current.style.transformOrigin = `center ${equation}%`;
  };

  useEffect(() => {
    updateTransformOrigin(); // initial calcualtion
  }, [])
 

  // const openStoryPage = () => {

  //   setOpenStory(prev => !prev);
  //   gsap.to(chevronRef.current, {
  //     opacity: 0
  //   })
  //   gsap.to(popupRef.current, {
  //     opacity: 0
  //   })
  //   console.log('Opening Our Story Page')
  //   setClose(true);
  //   setOpen(false)
  // }
  const openMenu = () => {

    if (paperFrontRef.current) {
    const height = paperFrontRef.current.offsetHeight;
    setPageHeight(height);
    }
    setOpen(true);
    setClose(false)
    console.log('opening....');

  }
  const closeMenu = () => {
    setOpen(false);
    setClose(true);
    console.log('closing....');

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
  const toggleDeliver = () => {
    if (orderTouch === true) {
      setOrderTouch(false)
    }
    else {
      setOrderTouch(true)
    }
  }
  

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


  return (
   <>


{/* Google Fonts */}
   <Head>

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap" rel="stylesheet"/>

   </Head>


   <Header
    followUsTouch={followUsTouch}
    toggleFollow={toggleFollow}
    aboutUsTouch={aboutUsTouch}
    openAbout={openAbout}
    closeAbout={closeAbout}
    homeTouch={homeTouch}
    openHome={openHome}
    closeHome={closeHome}
    closeMenu={closeMenu} // pass it here
    />


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
        <Hero />

        {/* Our Story and About us */}
        <section>
          {openStory && (
             <OurStory />
          )}
           

        </section>
        {/* <Testimonials /> */}
        <section className="relative bg-[#d1a054] min-h-screen">
   {/* Centered Image */}
   <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-auto h-auto">
    <Image
      src="/assets/getlucky.png" // path to your image in /public folder
      alt="Get Lucky"
      width={300} // set your desired width
      height={100} // set your desired height
      priority // optional, ensures image loads quickly
    />
  </div>
  <div className="absolute top-[10rem] left-1/2 transform -translate-x-1/2 w-auto h-auto">
    <Image
      src="/assets/honeygold.png" // path to your image in /public folder
      alt="Get Lucky"
      width={250} // set your desired width
      height={100} // set your desired height
      priority // optional, ensures image loads quickly
    />
  </div>

  <div className="absolute top-1/2 left-[52.5%] transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center">
    <AnimatedBottle />
  </div>
  <button id='button-handle-2' className={`text-white p-2 border-2 border-gray-400 bg-[#51B150] active:bg-green-500 rounded-md min-w-24 absolute z-[999] left-[40%] lg:left-[50%] bottom-[6rem]`}>
    <span >Get A Bottle!</span>
  </button>
</section>


        
  {/* Product Showcase */}
        {/* <section className='bg-[#d1a054] text-white relative border'>

            <Image className='absolute left-[35%] top-[10%]' src="/assets/getlucky.png" alt='Get Luckuy' width={100} height={200} />


            <Image className='absolute left-[20%] top-[20%]' src="/assets/honeygold.png" alt='Honey Gold' width={200} height={200} />
            <AnimatedBottle />

         </section> */}
      {/* <Popup refPop={popupRef} refOut={overlayRef} refNo={openPopUp} setter={setOpenPopUp}  /> */}
    

      <button id="button-handle" ref={buttonRef} onClick={() => setOpenPopUp(!openPopUp)} className={`text-white p-2 fixed border-2 border-gray-400 bg-[#51B150] active:bg-green-500 rounded-md min-w-24 animate-bounce z-[999] left-[40%] lg:left-[40%] bottom-[1rem]`}>
        <div ref={chevronRef} className={`flex justify-center  items-center text-white`}>

            <span>Join</span>

        </div>
      </button>






      </div>
      
    </div>
   
   </>
  );
}
