"use client";
import Head from 'next/head'
import React, { lazy, useEffect, useRef, useState } from "react";
import clsx from 'clsx';

import Image from "next/image";
import { EmblaOptionsType } from 'embla-carousel'
import { useGSAP } from "@gsap/react";
import { motion, useInView } from 'motion/react';
import gsap from "gsap";
import Lucky from '../../public/assets/lucky-logo-demo.png'
import Lucky2 from '../../public/assets/lucky_logo_nobg.png'

import Slogan from '../../public/assets/slogan.png'
import Slogan2 from '../../public/assets/slogan2.png'
import Testimonials from '../../public/assets/Testimonial-removebg-preview.png'
import Testimonials2 from '../../public/assets/Testimonial_2-removebg-preview.png'



import EmblaCarousel from '../components/EmblaCarousel';
import Popup from '../slices/Popup'
import Header from '../slices/Header'
import Footer from '../slices/Footer'
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

  // Fade logic for Hamburger Menu
  const [showHamburger, setShowHamburger] = useState(true);
  useEffect(() => {
    let lastScrollY = window.scrollY;
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY + 10) {
        // add a small threshold to avoid jitter
        setShowHamburger(false);
      } else if (currentScrollY < lastScrollY - 10) {
        setShowHamburger(true);
      }
      lastScrollY = currentScrollY;
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

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

  const openStoryPage = () => {

    setOpenStory(prev => !prev);
    gsap.to(chevronRef.current, {
      opacity: 0
    })
    gsap.to(popupRef.current, {
      opacity: 0
    })
    console.log('Opening Our Story Page')
    setClose(true);
    setOpen(false)
  }
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
  
 



  // Menu Selection Logic **Each time selected animation runs on shown list items** 

  useEffect(() => {
    if (homeTouch && !aboutUsTouch && !followUsTouch && !orderTouch) {
      gsap.to('#ourstory', {opacity: 0, zIndex: -1});
      gsap.to('#followus', {opacity: 0, zIndex: -1})
      gsap.to('#delivery', {opacity: 0, zIndex: -1})
      gsap.to('#home', {y: -110})

      gsap.to('#about-selections', {autoAlpha: 1, delay: 0.4})

    }
    else if (!homeTouch && !aboutUsTouch && !followUsTouch && !orderTouch) {

      gsap.to('#ourstory', {opacity: 1, zIndex: 10});
      gsap.to('#followus', {opacity: 1, zIndex: 10})
      gsap.to('#delivery', {opacity: 1, zIndex: 10})
      gsap.to('#home', {y: 0})

      gsap.to('#about-selections', {autoAlpha: 0})

    }
  }, [homeTouch])

  useEffect (() => {
    if (aboutUsTouch && !homeTouch && !followUsTouch && !orderTouch) {
      gsap.to('#ourstory', {y: -55})
      gsap.to('#followus', {opacity: 0, zIndex: -1})
      gsap.to('#delivery', {opacity: 0, zIndex: -1})
      gsap.to('#home', {opacity: 0, zIndex: -1})
      gsap.to('#shop-selections', {autoAlpha: 1, delay: 0.4})




    }

    else if (!aboutUsTouch && !homeTouch && !followUsTouch && !orderTouch) {
      gsap.to('#ourstory', {y: 0})
      gsap.to('#followus', {opacity: 1, zIndex: 10})
      gsap.to('#delivery', {opacity: 1, zIndex: 10})
      gsap.to('#home', {opacity: 1, zIndex: 10})
      gsap.to('#shop-selections', {autoAlpha: 0})


    }
  }, [aboutUsTouch])


  // Socials button 
  useEffect (() => {
    if (followUsTouch && !aboutUsTouch && !homeTouch && !orderTouch) {
      gsap.to('#followus', {y: 0})
      gsap.to('#ourstory', {opacity: 0, zIndex: -1})
      gsap.to('#delivery', {opacity: 0 , zIndex: -1})
      gsap.to('#home', {opacity: 0, zIndex: -1})
      gsap.to('#social-selections', {autoAlpha: 1, delay: 0.4})

      gsap.to('#instagram-social-icon', {rotate: 360, duration: 1, delay: 0.5})



    }

    else if (!followUsTouch && !homeTouch && !aboutUsTouch && !orderTouch) {
      gsap.to('#followus', {y: 0})
      gsap.to('#ourstory', {opacity: 1})
      gsap.to('#delivery', {opacity: 1})
      gsap.to('#home', {opacity: 1})
      gsap.to('#social-selections', {autoAlpha: 0})
      gsap.to('#instagram-social-icon', {rotate: 0, duration: 1, delay: 0.5})




    }
  }, [followUsTouch, homeTouch, aboutUsTouch, orderTouch])

  // Delivery Selction 
  useEffect (() => {
    if (orderTouch && !aboutUsTouch && !homeTouch && !followUsTouch) {
      gsap.to('#delivery', {y: -115})
      gsap.to('#ourstory', {opacity: 0, zIndex: -1})
      gsap.to('#followus', {opacity: 0, zIndex: -1})
      gsap.to('#home', {opacity: 0, zIndex: -1})
      gsap.to('#delivery-selections', {autoAlpha: 1, delay: 0.4})
      console.log('Delivery Tab opened')




    }

    else if (!followUsTouch && !homeTouch && !aboutUsTouch && !orderTouch) {
      gsap.to('#delivery', {y: 0})
      gsap.to('#ourstory', {opacity: 1, zIndex: 10})
      gsap.to('#followus', {opacity: 1, zIndex: 10})
      gsap.to('#home', {opacity: 1, zIndex: 10})
      gsap.to('#delivery-selections', {autoAlpha: 0})
      console.log('Delivery Tab closed')



    }
  }, [orderTouch])

 


  useEffect (() => {


    if (open) {

          gsap.to(buttonRef.current, {opacity: 0})

    }
   


   }, [open])
  useGSAP (() => {



    gsap.to('#leadlogo', {opacity: 1, delay: 2.5, y: 10})
    gsap.to('#secondlogo', {opacity: 1, delay: 3})
    gsap.from('#slogan', { opacity: 0, delay: 3.5, x: 100})
    gsap.from(buttonRef.current, {opacity: 0, delay: 4})
    gsap.to(buttonRef.current, {opacity: 1 ,delay: 4, ease: "circ.out"})


    
  }, [])
  // const isDesktop = useMediaQuery('(min-width: 460px)');
  // const [openPopUp, setOpenPopUp] = useState(false);

  // const popupRef = useRef(null);
  // const overlayRef = useRef(null);
  // const buttonRef = useRef(null);
  // const exitRef = useRef(null);
  // const chevronRef = useRef(null);

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
        className={`fixed top-6 right-6 z-50 transition-opacity duration-500 ${
          showHamburger ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div onClick={open ? closeMenu : openMenu} className="hamburger">
          <span></span>
        </div>
      </div>

          {/* Hero Section */}
          <div id="container">
            <section className="flex border flex-col justify-center text-center gap-6 pt-[3rem] pb-[3rem] min-h-screen items-center">

              <Image priority className="opacity-0" id="leadlogo" alt="Lucky Liquid Logo" width={300} src={Lucky}/>
              <Image priority className="opacity-0" id="secondlogo" alt="Lucky Liquid Leperchaun Logo" width={300} src={Lucky2} />

              <div className="text-3xl text-black font-[900] flex flex-col">
              <Image priority id='slogan' alt="Lucky Liquid Leperchaun Logo" width={300} src={Slogan2} />
             


              </div>
        
            </section>
      
          </div>
          {/* Our Story and About us */}
          <section>
            {openStory && (
               <OurStory />
            )}
           

          </section>

          {/* Testimonials */}
          <section className="min-h-screen bg-[#d1a054] flex flex-col items-center justify-center py-16 px-4">
              <div className="flex flex-col items-center gap-6 mb-8">
                <Image
                  priority
                  alt="Testimonial Section"
                  width={250}
                  src={Testimonials}
                  className="rounded-lg object-contain"
                />
                <Image
                  priority
                  alt="Lucky Liquid Leprechaun Logo"
                  width={250}
                  src={Testimonials2}
                  className="rounded-lg object-contain"
                />
              </div>

      {/* Carousel Section */}
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        {/* Left Blur Overlay */}
        <div className="hidden md:block absolute left-0 top-0 h-full w-20 pointer-events-none z-10 bg-white/10 backdrop-blur-sm" />

        {/* Right Blur Overlay */}
        <div className="hidden md:block absolute right-0 top-0 h-full w-20 pointer-events-none z-10 bg-white/10 backdrop-blur-sm" />

        <EmblaCarousel />
      </div>


  </section>
  {/* Product Showcase */}
  <section className='bg-[#d1a054] text-white relative border'>

            <Image className='absolute left-[35%] top-[10%]' src="/assets/getlucky.png" alt='Get Luckuy' width={100} height={200} />


            <Image className='absolute left-[20%] top-[20%]' src="/assets/honeygold.png" alt='Honey Gold' width={200} height={200} />
            <AnimatedBottle />

      </section>
      <Popup refPop={popupRef} refOut={overlayRef} refNo={openPopUp} setter={setOpenPopUp}  />
    

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
