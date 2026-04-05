"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import './OurProducts.css'

import Header from "@/slices/Header";
import { motion, AnimatePresence } from 'motion/react'
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Viewer from "@/providers/Viewer";

export default function OurProducts() {
  const windowRef = useRef<HTMLDivElement | null>(null);
  const paperFrontRef = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [userClick, setUserClick] = useState(false)
  const [teeClick, setTeeClick] = useState(false)

  const [followUsTouch, setFollowTouch] = useState(false);
  const offset = 1800;

  const updateTransformOrigin = () => {
    if (!windowRef.current || !paperFrontRef.current) return;

    const scrollTop = windowRef.current.scrollTop;
    const pageHeight = paperFrontRef.current.offsetHeight;
    const equation = ((scrollTop + offset) / pageHeight) * 100;
    paperFrontRef.current.style.transformOrigin = `center ${equation}%`;
  };

  function handleUser() {
    setUserClick(true)
    
  }

  useEffect(() => {
    updateTransformOrigin();
  }, [open]);

  const openMenu = () => {
    if (paperFrontRef.current) {
      paperFrontRef.current.offsetHeight; // read height if needed
    }
    setOpen(true);
    setClose(false);
    console.log("opening....");
  };

  const closeMenu = () => {
    setOpen(false);
    setClose(true);
    console.log("closing....");


  };

  const rightAnimationState = {
    
    hidden: {
      opacity: 0,
      ease: "power3.out",
      pointerEvents: "none",
      x: -300,
      duration: 1,

    },
    visible: {
      opacity: 1,
      ease: "power3.out"
    }
  }
  const leftAnimationState = {
    
    hidden: {
      opacity: 0,
      ease: "power3.out",
      pointerEvents: "none",
      x: 300,
      duration: 1,

    },
    visible: {
      opacity: 1,
      ease: "power3.out"
    }
  }

  const toggleFollow = () => setFollowTouch((prev) => !prev);




  return (
    <main>
     

      <div id="paper-window" ref={windowRef} className={open ? "tilt" : ""}>
        <div ref={paperFrontRef} id="paper-front">
          <div className="fixed top-6 right-6 z-[9999] transition-opacity duration-500">
            <div onClick={open ? closeMenu : openMenu} className="hamburger">
              <span></span>
            </div>
          </div>

          <section
            className="our-products"
          >

            <div>
            <h1 className="product-heading">
              Our Products
            </h1>
            <span></span>
            </div>
            
            <div className="flex gap-10">

              <div className="relative">


                  <motion.div  variants={rightAnimationState} initial="visible" animate={userClick === true ? 'hidden' : 'visible'} onClick={handleUser} className="drinks">
                    <div className="picture-container">
                      <Viewer modelSelect="bottle" />
                      {/* <Image alt="fjf" src='/assets/blank_bottle.png' width={100} height={100} /> */}
                      <div className="drink-title">Drinks</div>

                      {/* <Image alt="Drinks" src='/assets/blank_bottle.png' fill/> */}
                    </div>
                  </motion.div>
                  <AnimatePresence>

                    {
                      userClick && (
                        <motion.ul initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.4}} className="drink-dropdown">
                          <motion.li initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.6}} className="product-container">
                            Honey Gold
                          </motion.li>
                          {/* <motion.li initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.7}} className="product-container">
                            More Soon
                          </motion.li> */}
                          <motion.li onClick={() => setUserClick(!userClick)} className="text-black">
                            Back
                          </motion.li>
                        
                        </motion.ul>
                      )
                    }
                  </AnimatePresence>
                  

              </div>
              <div className="relative">
                  <motion.div variants={leftAnimationState} initial="visible" onClick={() => setTeeClick(!teeClick)} animate={teeClick === true ? 'hidden' : 'visible'} className="tees">
                  <div className="picture-container">
                      <Viewer modelSelect="" />
                      {/* <Image alt="fjf" src='/assets/blank_bottle.png' width={100} height={100} /> */}
                      <div className="drink-title">Tees</div>

                      {/* <Image alt="Drinks" src='/assets/blank_bottle.png' fill/> */}
                    </div>
                  </motion.div>
                  <AnimatePresence>

{
                    teeClick && (
                      <motion.ul initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.4}} className="tee-dropdown">
                        <motion.li initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.4}} className="product-container">
                          Tee 1
                        </motion.li>
                        <motion.li initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.6}} className="product-container">
                          Tee 2
                        </motion.li>
                        <motion.li initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.8}} className="product-container">
                          Tea 3
                        </motion.li>
                        {/* <motion.li initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.7}} className="product-container">
                          More Soon
                        </motion.li> */}
                        <motion.li onClick={() => setTeeClick(!teeClick)} className="text-black">
                          Back
                        </motion.li>
                      
                      </motion.ul>
                    )
                  }
                  </AnimatePresence>
              </div>
              
             
            </div>
           

            
          </section>
        </div>
      </div>
    </main>
  );
}
