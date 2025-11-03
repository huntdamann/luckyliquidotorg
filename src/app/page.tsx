"use client";
import Head from 'next/head'
import React, { lazy, useEffect, useRef, useState } from "react";
import clsx from 'clsx';

import Image from "next/image";
import { EmblaOptionsType } from 'embla-carousel'
import SlickSLider from '../components/SlickSlider';
import { useGSAP } from "@gsap/react";
import { motion, useInView } from 'motion/react';
import gsap from "gsap";
import {RemoveScroll} from 'react-remove-scroll';
import useMediaQuery from '../hooks/useMediaQuery'
import Lucky from '../../public/assets/lucky-logo-demo.png'
import Lucky2 from '../../public/assets/lucky_logo_nobg.png'
import Mockup from '../../public/assets/bottle-mockup.png'
import Mockup2 from '../../public/assets/test_mockup.png'
import Slogan from '../../public/assets/slogan.png'
import Slogan2 from '../../public/assets/slogan2.png'
import Testimonials from '../../public/assets/Testimonial-removebg-preview.png'
import Testimonials2 from '../../public/assets/Testimonial_2-removebg-preview.png'

import Slogan3 from '../../public/assets/slogan3.png'

import Slogan4 from '../../public/assets/slogan4.png'


import EmblaCarousel from '../components/EmblaCarousel';
import Popup from '../slices/Popup'
import Success from '../slices/Success'
import Newsletter from '../slices/Newsletter'
import OurStory from '../slices/OurStory.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInstagram, faBluesky, faTiktok, faFacebook} from '@fortawesome/free-brands-svg-icons';


import { ViewCanvas } from '../components/ViewCanvas'
import { button } from 'leva';

gsap.registerPlugin(useGSAP);


export default function Home() {

 

  const windowRef = useRef<HTMLDivElement | null>(null);
  const paperFrontRef = useRef<HTMLDivElement | null>(null);
  const paperBackRef = useRef(null);

  const [openPopUp, setOpenPopUp] = useState(false);
  const popupRef = useRef(null);
  const overlayRef = useRef(null);
  const chevronRef = useRef(null);
  const buttonRef = useRef(null);



  // const isDesktop = useMediaQuery('(min-width: 460px)');

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



  // useEffect(() => {

  //   if (paperFrontRef.current) {
  //     const height = paperFrontRef.current.offsetHeight;
  //     setPageHeight(height);
  //     console.log(height);
  //   }


  // }, [])

  const footerRef = useRef(null)
  const isInView = useInView(footerRef, {amount: 0.5})


  // Update transform origin
  const updateTransformOrigin = () => {
    if (!windowRef.current || !paperFrontRef.current) return;

    const scrollTop = windowRef.current.scrollTop;
    console.log('Scroll Progress:', scrollTop)
    const pageHeight = paperFrontRef.current.offsetHeight;
    console.log(pageHeight)
    const equation = ((scrollTop + offset) / pageHeight) * 100;

    paperFrontRef.current.style.transformOrigin = `center ${equation}%`;
  };

  useEffect(() => {
    updateTransformOrigin(); // initial calcualtion
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
  })

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
  })


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
  })

  useEffect (() => {
    if (isInView) {

      gsap.to(buttonRef.current, {opacity: 0})
    }
    else {
      gsap.to(buttonRef.current, {opacity: 1})
    }
  })


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


<header className="text-sm" id="paper-back">
  <nav className="text-white relative">
    <div onClick={close? openMenu: closeMenu} className="close"></div>
    <ul>
    {/* <li className="relative cursor-pointer" onClick={followUsTouch ? closeFollow : openFollow} id="followus">Socials
      
   
      
      <div id="social-selections" className={`opacity-0 border z-10  fixed  top-11 flex flex-col gap-5 pt-1  w-[150px]`}>
      <a className="text-[16px] w-[200px]" href="https://docs.google.com/forms/d/e/1FAIpQLSce9Aq-Lf26s4FfMOZkhPGPz8kzZ3gkFf8aS5yvZk1jYTdkTA/viewform?usp=header">Dallas/Fort-Worth</a>
      </div>
      
    
      
    </li> */}
    
    <li className="relative cursor-pointer" onClick={() => { toggleFollow()}} id="followus">Socials
    
    <div id="social-selections" className= "opacity-0  z-10  fixed  top-[3rem] flex flex-col gap-5 pt-1  w-[150px]">
          <a target='_blank' rel="noopener noreferrer" className='flex items-center gap-1 w-[200px] text-[16px]' href="https://www.instagram.com/waytoolucky_/">
          <FontAwesomeIcon id='instagram-social-icon' icon={faInstagram} />
          Instagram</a>
          <a target='_blank' rel="noopener noreferrer" className='flex items-center gap-1 w-[200px] text-[16px]' href="https://www.tiktok.com/@luckyteadtx">
          <FontAwesomeIcon id='instagram-social-icon' icon={faTiktok} />
          Tiktok
          </a>
          <a target='_blank' rel="noopener noreferrer" className='flex items-center gap-1 w-[200px] text-[16px]' href="https://www.facebook.com/profile.php?id=61580219229816">
          <FontAwesomeIcon id='instagram-social-icon' icon={faFacebook} />
          Facebook
          </a>
          
          <a target='_blank' rel="noopener noreferrer" className='flex items-center gap-1 w-[200px] text-[16px]' href="https://bsky.app/profile/waytoolucky.bsky.social">
          <FontAwesomeIcon id='instagram-social-icon' icon={faBluesky} />
          Blueskies</a>

    </div>
    </li>
    
    
    <li className="relative cursor-pointer"  onClick={aboutUsTouch ? closeAbout : openAbout} id="ourstory">
      
       <span className=""> 
        
           Our Products
       </span>

      <div id="shop-selections" className={`opacity-0   fixed flex top-11 flex-col gap-5 pt-1  w-[20%]`}>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSce9Aq-Lf26s4FfMOZkhPGPz8kzZ3gkFf8aS5yvZk1jYTdkTA/viewform?usp=header" className="text-[16px] w-[200px]">Honey Gold</a>
      </div>
    </li>
    {/* <li className="relative cursor-pointer"  onClick={() => {toggleDeliver()}} id="delivery">Get Lucky!
    <div id="delivery-selections" className={`opacity-0   fixed  top-11 flex flex-col gap-5 pt-1  w-[30%]`}>
        <a className="text-[16px] w-[200px]" href="https://docs.google.com/forms/d/e/1FAIpQLSce9Aq-Lf26s4FfMOZkhPGPz8kzZ3gkFf8aS5yvZk1jYTdkTA/viewform?usp=header">DFW Delivery</a>

      </div>
    </li> */}
   
   
    <li  id="home" className="relative cursor-pointer" onClick={homeTouch ? closeHome : openHome}>About Us
    <div id="about-selections" className={`opacity-0 fixed flex flex-col top-11 gap-5 pt-1  w-[30%]`}>
        <span onClick={openStoryPage} className="text-[16px] w-[200px]">Our Story</span>
        {/* <a className="text-[16px] w-[200px]" href="#">Our Team</a> */}

        
      </div>
    </li>
    <li className="relative cursor-pointer" id="delivery">
    <a href="/">Home</a>
    </li>
    </ul>
    
   
   
  </nav>
</header>

    {/* Hero Section */}

    {/* <RemoveScroll enabled={false}> */}
    <div id="paper-window" ref={windowRef} className={open? 'tilt' : ''}>
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

          <div id="container">
            <section className="flex border flex-col justify-center text-center gap-6 pt-[3rem] pb-[3rem] min-h-screen items-center">

              <Image priority className="opacity-0" id="leadlogo" alt="Lucky Liquid Logo" width={300} src={Lucky}/>
              <Image priority className="opacity-0" id="secondlogo" alt="Lucky Liquid Leperchaun Logo" width={300} src={Lucky2} />

              <div className="text-3xl text-black font-[900] flex flex-col">
              <Image priority id='slogan' alt="Lucky Liquid Leperchaun Logo" width={300} src={Slogan2} />
             


              </div>
        
            </section>
      
          </div>
          <section>
            {openStory && (
               <OurStory />
            )}
           

          </section>
          <section className="min-h-screen bg-[#d1a054] flex flex-col items-center justify-center py-16 px-4">
  {/* Logos Section */}
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

          <Popup refPop={popupRef} refOut={overlayRef} refNo={openPopUp} setter={setOpenPopUp}  />
    

          <button id="button-handle" ref={buttonRef} onClick={() => setOpenPopUp(!openPopUp)} className={`text-white  ${isInView ? 'opacity-0' : ''} p-2 fixed border-2 border-gray-400 bg-[#51B150] rounded-md min-w-24 animate-bounce z-[999] left-[40%] lg:left-[40%] bottom-[1rem]`}>
            <div ref={chevronRef} className={`flex justify-center  items-center text-white`}>

              <span>Join</span>

            </div>
          </button>
          <motion.footer
              ref={footerRef}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-xs min-h-6 text-[#d1a054] py-6"
            >
              © 2025 — Crafted by 
              <a href="https://humanndesign.com" target="_blank" className="font-semibold hover:underline ml-1">
                HUMANNDESIGN
              </a>
         </motion.footer>







      </div>

  

  
 

      {/* <motion.footer
              ref={footerRef}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-xs min-h-6 border text-[#d1a054] py-4"
            >
              © 2025 — Crafted by 
              <a href="https://humanndesign.com" target="_blank" className="font-semibold hover:underline ml-1">
                HUMANNDESIGN
              </a>
      </motion.footer> */}
      
    </div>
   
   </>
  );
}
