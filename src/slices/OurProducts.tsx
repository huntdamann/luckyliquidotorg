"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import './OurProducts.css'

import Header from "@/slices/Header";
import { motion, AnimatePresence } from 'motion/react'
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Testimonials from "./Testimonials";
import { EmblaOptionsType } from 'embla-carousel'


export default function OurProducts() {
  const windowRef = useRef<HTMLDivElement | null>(null);
  const paperFrontRef = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [userClick, setUserClick] = useState(1)
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
    console.log('User Clicked ')
    setUserClick(2);
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

  const toggleFollow = () => setFollowTouch((prev) => !prev);




  return (
    <main>
      <Header
        closeMenu={closeMenu}
      />

      <div id="paper-window" ref={windowRef} className={open ? "tilt" : ""}>
        <div ref={paperFrontRef} id="paper-front">
          <div className="fixed top-6 right-6 z-[9999] transition-opacity duration-500">
            <div onClick={open ? closeMenu : openMenu} className="hamburger">
              <span></span>
            </div>
          </div>

          <section
          style={{border: "1px red solid"}}
            className="our-products"
          >
            <motion.div variants={rightAnimationState} initial="visible" animate={userClick === 2 ? 'hidden' : 'visible'} onClick={handleUser} className="drinks">
              <div className="picture-container">
                <Image alt="fjf" src='/assets/blank_bottle.png' width={100} height={100} />
                <div className="drink-title">Drinks</div>

                {/* <Image alt="Drinks" src='/assets/blank_bottle.png' fill/> */}
              </div>
            </motion.div>
            <div className="other">
              Other
            </div>

            
          </section>
        </div>
      </div>
    </main>
  );
}
