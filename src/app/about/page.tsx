"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from 'motion/react'
config.autoAddCss = false;


import Header from "@/slices/Header";
import React, { forwardRef, useEffect, useState, useRef } from "react";




import Image from "next/image";



 async function saveAction() {

    console.log('hey');
}


const About = forwardRef((props, ref) => {

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
  }, [open])

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


    return(

        <>

        <Header
            toggleFollow={toggleFollow}
            openAbout={openAbout}
            closeAbout={closeAbout}
            openHome={openHome}
            closeHome={closeHome}
            closeMenu={closeMenu} // pass it here

            />
        <div id="paper-window" ref={windowRef} className={open? 'tilt' : ''}>

            <div ref={paperFrontRef} id="paper-front" >
                <div
                    className={`fixed top-6 right-6 z-[9999] transition-opacity duration-500
                    }`}
                    >
                    <div onClick={open ? closeMenu : openMenu} className="hamburger">
                        <span></span>
                    </div>
                </div>

        
  
      {/* <Popup refPop={popupRef} refOut={overlayRef} refNo={openPopUp} setter={setOpenPopUp}  /> */}
    

            {/* <button
            id="button-handle"
            ref={buttonRef}
            onClick={() => setOpenPopUp(!openPopUp)}
            className={`text-white p-2 absolute border-2 border-gray-400 bg-[#51B150] active:bg-green-500 rounded-md min-w-24 animate-bounce z-[999] bottom-[1rem] left-[38%] sm:left-[43%] md:left-[48%] transform -translate-x-1/2`}
            >
                <div
                    ref={chevronRef}
                    className="flex justify-center items-center text-white"
                >
                    <span>Join</span>
                </div>
            </button> */}








            {/* Dark Overlay */}
            <motion.section initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.8}} className="our_story">

                <h1>Our Story</h1>
                <span className="font-bold">Lucky Tea was meant to shake things up...</span>
                <span className="">From bold branding to unique presentation, we're doing things differently. Created in Dallas, TX, Lucky Tea was brewed with one idea in mind: to create a flavor-focused beverage that challenges norms and pushes boundaries. Built for doers, our tea is brewed with 100% real leaves, locally sourced honey, all-natural sweeteners, and bottled in fully recyclable material.</span>
                <span className="">But for us, tea is just the beginning. We're here to push the limits of what a beverage brand can do. Our vision goes beyond the bottle -- we're building a movement rooted in community. By 2030, we aim to launch a nonprofit dedicated to empowering the next generation through scholarships and youth activity centers, starting right here in our own backyard. <span className="font-bold"> It's more than just tea: this is a promise in a bottle. This is what it means to Get Lucky.</span></span>
                 
                <Image className="text-[3rem]" width={100} height={100} src="/assets/clover.png" alt="clover
                +23" ></Image>
            </motion.section>

        </div>
        </div>


        
        
        </>



    )






})

export default About;