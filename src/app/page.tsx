"use client";
import React, { lazy, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import localFont from "next/font/local";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {RemoveScroll} from 'react-remove-scroll';
import useMediaQuery from '../hooks/useMediaQuery'
import Lucky from '../../public/assets/lucky-logo-demo.png'
import Lucky2 from '../../public/assets/lucky_logo_nobg.png'
import Mockup from '../../public/assets/bottle-mockup.png'
import Mockup2 from '../../public/assets/test_mockup.png'
import Popup from '../slices/Popup'
import SocialPanel from '../slices/SocialPanel'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClover } from "@fortawesome/free-solid-svg-icons";

import { ViewCanvas } from '../components/ViewCanvas'

gsap.registerPlugin(useGSAP);


export default function Home() {

  const windowRef = useRef<HTMLDivElement | null>(null);
  const paperFrontRef = useRef<HTMLDivElement | null>(null);
  const paperBackRef = useRef(null);
  // const isDesktop = useMediaQuery('(min-width: 460px)');

  const [open, setOpen] = useState(false);
  const offset = 1800
  const [close, setClose] = useState(false);


  // Menu Folder Logic
  const [homeTouch, setHomeTouch] = useState(false)
  const [aboutUsTouch, setAboutTouch] = useState(false)
  const [followUsTouch, setFollowTouch] = useState(false)
  const [orderTouch, setOrderTouch] = useState(false)

  const [pageHeight, setPageHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);



  // useEffect(() => {

  //   if (paperFrontRef.current) {
  //     const height = paperFrontRef.current.offsetHeight;
  //     setPageHeight(height);
  //     console.log(height);
  //   }


  // }, [])

  // Update transform origin
  const updateTransformOrigin = () => {
    if (!windowRef.current || !paperFrontRef.current) return;

    const scrollTop = windowRef.current.scrollTop;
    const pageHeight = paperFrontRef.current.offsetHeight;
    console.log(pageHeight)
    const equation = ((scrollTop + offset) / pageHeight) * 100;

    paperFrontRef.current.style.transformOrigin = `center ${equation}%`;
  };

  useEffect(() => {
    updateTransformOrigin(); // initial calcualtion
  })

  const openMenu = () => {

    if (paperFrontRef.current) {
    const height = paperFrontRef.current.offsetHeight;
    setPageHeight(height);
    console.log(height);
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
  const openFollow = () => {
    setFollowTouch(true);
  }
  const closeFollow = () => {
    setFollowTouch(false);
  }
  const openDelivery = () => {
    setOrderTouch(true);
  }
  const closeDelivery = () => {
    setOrderTouch(false);
  }



  // Menu Selection Logic **Each time selected animation runs on shown list items** 

  useEffect(() => {
    if (homeTouch && !aboutUsTouch && !followUsTouch && !orderTouch) {
      gsap.to('#ourstory', {opacity: 0});
      gsap.to('#followus', {opacity: 0})
      gsap.to('#delivery', {opacity: 0})
      gsap.to('#about-selections', {autoAlpha: 1, delay: 0.4})

    }
    else if (!homeTouch && !aboutUsTouch && !followUsTouch && !orderTouch) {

      gsap.to('#ourstory', {opacity: 1});
      gsap.to('#followus', {opacity: 1})
      gsap.to('#delivery', {opacity: 1})
      gsap.to('#about-selections', {autoAlpha: 0})

    }
  })

  useEffect (() => {
    if (aboutUsTouch && !homeTouch && !followUsTouch && !orderTouch) {
      gsap.to('#ourstory', {y: -75})
      gsap.to('#followus', {opacity: 0})
      gsap.to('#delivery', {opacity: 0})
      gsap.to('#home', {opacity: 0})
      gsap.to('#shop-selections', {autoAlpha: 1, delay: 0.4})




    }

    else if (!aboutUsTouch && !homeTouch && !followUsTouch && !orderTouch) {
      gsap.to('#ourstory', {y: 0})
      gsap.to('#followus', {opacity: 1})
      gsap.to('#delivery', {opacity: 1})
      gsap.to('#home', {opacity: 1})
      gsap.to('#shop-selections', {autoAlpha: 0})


    }
  })
  useEffect (() => {
    if (followUsTouch && !aboutUsTouch && !homeTouch && !orderTouch) {
      gsap.to('#followus', {y: -153})
      gsap.to('#ourstory', {opacity: 0})
      gsap.to('#delivery', {opacity: 0})
      gsap.to('#home', {opacity: 0})



    }

    else if (!followUsTouch && !homeTouch && !aboutUsTouch && !orderTouch) {
      gsap.to('#followus', {y: 0})
      gsap.to('#ourstory', {opacity: 1})
      gsap.to('#delivery', {opacity: 1})
      gsap.to('#home', {opacity: 1})

    }
  })
  useEffect (() => {
    if (orderTouch && !aboutUsTouch && !homeTouch && !followUsTouch) {
      gsap.to('#delivery', {y: -223})
      gsap.to('#ourstory', {opacity: 0})
      gsap.to('#followus', {opacity: 0})
      gsap.to('#home', {opacity: 0})
      gsap.to('#delivery-selections', {autoAlpha: 1, delay: 0.4})




    }

    else if (!followUsTouch && !homeTouch && !aboutUsTouch && !orderTouch) {
      gsap.to('#delivery', {y: 0})
      gsap.to('#ourstory', {opacity: 1})
      gsap.to('#followus', {opacity: 1})
      gsap.to('#home', {opacity: 1})
      gsap.to('#delivery-selections', {autoAlpha: 0})


    }
  })


  useGSAP (() => {



    gsap.to('#leadlogo', {opacity: 1, delay: 2.5, y: 10})
    gsap.to('#secondlogo', {opacity: 1, delay: 3})
    gsap.from('#slogan', { opacity: 0, delay: 3.5, x: 100})
    gsap.from('#slogan2', { opacity: 0, delay: 3.5, x: -100})
    gsap.to('#bottle', {x:-200, delay: 8} )
    
  }, [])
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


<header className="font-juju" id="paper-back">
  <nav className="text-white">
    <div onClick={close? openMenu: closeMenu} className="close"></div>
    <ul>
    <li id="home" className="relative" onClick={homeTouch ? closeHome : openHome}>About Us
      <div id="about-selections" className={`opacity-0   fixed flex flex-col gap-5 pt-1  w-[30%]`}>
        <a className="text-[16px]" href="#">Our Story</a>
        <a className="text-[16px] w-[200px]" href="#">Our Team</a>

        
      </div>
    </li>
    <li className="relative"  onClick={aboutUsTouch ? closeAbout : openAbout} id="ourstory">Shop

      <div id="shop-selections" className={`opacity-0   fixed flex flex-col gap-5 pt-1  w-[30%]`}>
        <a className="text-[16px] w-[200px]" href="#">Honey Gold</a>
      </div>
    </li>
    <li onClick={followUsTouch ? closeFollow : openFollow} id="followus" >Socials</li>

    <li className="relative"  onClick={orderTouch ? closeDelivery : openDelivery} id="delivery">Delivery
    <div id="delivery-selections" className={`opacity-0   fixed flex flex-col gap-5 pt-1  w-[30%]`}>
        <a className="text-[16px]" href="#">Dallas/Fort-Worth</a>

      </div>
    </li>
    </ul>
    
   
   
  </nav>
</header>

    {/* Hero Section */}
    <div id="paper-window" ref={windowRef} className={open? 'tilt' : ''}>
  <div ref={paperFrontRef} id="paper-front" >
    <div onClick={open ? closeMenu : openMenu} className="hamburger"><span></span></div>
    <div id="container">
    <section className="flex flex-col justify-center text-center gap-6 pt-[9em] items-center">

      <Image className="opacity-0" id="leadlogo" alt="Lucky Logo" width={300} src={Lucky}/>
      <Image className="opacity-0" id="secondlogo" alt="Lucky Leperchaun Logo" width={300} src={Lucky2} />

      <div className="text-3xl text-black font-[900] flex flex-col">
      <span id="slogan">Brewed Different.</span>
      <span id="slogan2">Tastes Like Winning.</span>

      </div>
      
      <button className="border border-black bg-black font-juju text-white p-[0.5rem] w-[7em]"><span>Shop Now</span></button>

    </section>
      
    </div>

    {/* Product Showcase */}
    <section id="product-showcase">
        <h2 className="font-main text-green-700">Honey Gold</h2>
        <div>
          <Image id="bottle" alt="Lucky Bottle" width={200} src={Mockup2}/>

        </div>
        <span>Try it!</span>
      </section>

      {/* <ViewCanvas /> */}
      <section className="banner-container">
        <div className="banner">
          <div className="banner-content">
            <div className="flex gap-3 items-center">
            <span>Get Lucky!</span>
            <FontAwesomeIcon className="text-green-600" icon={faClover} />


            </div>
            <div>
              <span>Try our Honey Gold Flavor</span>
            </div>
          </div>

                                                      
        </div>
      </section>

      {/* Call to action Shop  */}

      <section className="flex flex-col p-[2rem] justify-evenly   bg-honeygold">
        <div className="h-full border border-red-700 flex flex-col gap-2">
        <div className=" relative rounded-md h-[30%]">
          <Image className="h-full rounded-md" src={Mockup} alt="Lucky Product Mockup">

          </Image>
          <div className="absolute z-50 bottom-0 text-white">
          <span >Shop Now</span>


            <FontAwesomeIcon className="text-green-600" icon={faClover} />
          </div>

        </div>
        <div className=" relative rounded-md h-[80%]">
          <Image className="h-full w-full rounded-md" src={Mockup} alt="Lucky Product Mockup">

          </Image>
          <div className="absolute z-50 bottom-0 text-white">
          <span >Shop Now</span>


            <FontAwesomeIcon className="text-green-600" icon={faClover} />
          </div>
          

        </div>
        
        </div>
        
      </section>


      {/* <footer className="flex text-white gap-4 p-3 flex-row items-center justify-center border">
    
    
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
    
  </footer> */}


  </div>

  
  {/* Socials */}
  {/* <SocialPanel /> */}

  <section>

  </section>

 
  
  
</div>

   
 
   </>
  );
}
