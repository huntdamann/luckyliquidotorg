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
import Lucky2 from '../../public/assets/lucky_logo_nobg.png'
import Popup from '../slices/Popup'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ViewCanvas } from '../components/ViewCanvas'

gsap.registerPlugin(useGSAP);


export default function Home() {

  const paperWindowRef = useRef(null);
  const paperFrontRef = useRef<HTMLDivElement | null>(null);
  const paperBackRef = useRef(null);
  const isDesktop = useMediaQuery('(min-width: 460px)');

  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [pageHeight, setPageHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);



  useEffect(() => {

    if (paperFrontRef.current) {
      const height = paperFrontRef.current.offsetHeight;
      setPageHeight(height);
      console.log(height);
    }


  }, [])

  // Update transform origin

  useEffect(() => {


    const scrollTop = window.scrollY;

    const equation = (scrollTop + 1800) / pageHeight * 100;

    if (paperFrontRef.current) {
      paperFrontRef.current.style.transformOrigin = `center ${equation}%`;
    }
  }, [pageHeight])


  const openMenu = () => {
    setOpen(true);
    setClose(false)
    console.log('opening....');

  }
  const closeMenu = () => {
    setOpen(false);
    setClose(true);
    console.log('closing....');

  }

  // const isDesktop = useMediaQuery('(min-width: 460px)');
  // const [openPopUp, setOpenPopUp] = useState(false);

  // const popupRef = useRef(null);
  // const overlayRef = useRef(null);
  // const buttonRef = useRef(null);
  // const exitRef = useRef(null);
  // const chevronRef = useRef(null);

  // useGSAP(() => {
  //   gsap.from('#leadlogo', {y:-320, opacity: 0, delay: 7 })
    
  //   gsap.to('#leadlogo', {y: 0,  opacity: 1})
   
  // })

  // useEffect(() => {
  //   if(openPopUp) {
  //     gsap.to(popupRef.current, {zIndex:999, opacity: 1, duration: 0.6, ease: "sine.out"})
  //     gsap.to(overlayRef.current, {zIndex: 800, opacity: 0.8, duration: 1, ease:"power3.out"})
  //     gsap.to(buttonRef.current, { opacity: 0, y: -50, duration: 0.3, ease:"sine.out"})

  //   } else {
  //     gsap.to(popupRef.current, {
        
  //       opacity: 0,
  //       duration: 0.5,
  //       ease: "sine.in",
  //       zIndex: -1,
  //     })
  //     gsap.to(overlayRef.current, {
  //       opacity: 0,
  //       duration: 0.5,
  //       ease:'power3.in',
  //       zIndex: -1,

  //     })
  //     gsap.to(buttonRef.current, {
  //       opacity: 1,
  //       duration: 0.3,
  //       ease: "power3.in",
  //       zIndex: 40,

  //     })
  //   }
  // }, [openPopUp])


  return (
   <>

<header id="paper-back">
  <nav className="text-white">
    <div onClick={close? openMenu: closeMenu} className="close"></div>
    <a href="#">Home</a>
    <a href="#">About Us</a>
    <a href="#">Our Work</a>
    <a href="#">Delivery</a>
  </nav>
</header>

    {/* Hero Section */}
    <div id="paper-window" className={open? 'tilt' : ''}>
  <div ref={paperFrontRef} id="paper-front" >
    <div onClick={open ? closeMenu : openMenu} className="hamburger"><span></span></div>
    <div id="container">
    <section className="flex flex-col justify-center text-center gap-6 pt-[9em] items-center">

      <Image id="leadlogo" alt="Lucky Logo" width={300} src={Lucky}/>
      <Image alt="Lucky Leperchaun Logo" width={300} src={Lucky2} />

      <div className="text-3xl font-[900] flex flex-col">
      <span>Brewed Different.</span>
      <span>Tastes Like Winning.</span>

      </div>
      
      <button className="border border-black bg-black font-juju text-white p-[0.5rem] w-[7em]"><span>Shop Now</span></button>

    </section>
      
    </div>


  </div>
  {/* Socials */}

  <section>

  </section>
  <footer className="flex text-white gap-4 p-3 flex-row items-center justify-center border">
    
    
    <div>
      <h3 className="font-main">Lucky</h3>
      <ul className="font-juju">
        <li>About Us</li>
        <li>Leadership</li>

        <li>Accessbility</li>
        <li>Terms of Service
        </li>
        <li>Privacy Policy</li>

      </ul>
      </div>
      <div>
        <h3 className="font-main">Help</h3>
        <ul className="font-juju">
          <li>FAQs</li>
          <li>Contact</li>

          <li>Order Tracking</li>
          <li>Shipping Policy</li>

          <li>Return Policy</li>



        </ul>
      </div>
    
  </footer>

  
</div>

   
 
   </>
  );
}
