"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Header from "@/slices/Header";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Testimonials from "./Testimonials";
import { EmblaOptionsType } from 'embla-carousel'


export default function Honeygold() {
  const windowRef = useRef<HTMLDivElement | null>(null);
  const paperFrontRef = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [followUsTouch, setFollowTouch] = useState(false);
  const offset = 1800;

  const updateTransformOrigin = () => {
    if (!windowRef.current || !paperFrontRef.current) return;

    const scrollTop = windowRef.current.scrollTop;
    const pageHeight = paperFrontRef.current.offsetHeight;
    const equation = ((scrollTop + offset) / pageHeight) * 100;
    paperFrontRef.current.style.transformOrigin = `center ${equation}%`;
  };

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

  const toggleFollow = () => setFollowTouch((prev) => !prev);



  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

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
            className="border flex flex-col  justify-center items-center"
          >
            <Image alt="Honey Gold" width={250} height={300} src='/assets/honeygold2.png'/>
            <Testimonials />
            {/* Space Divider */}
            <div className="h-[30lvh] opacity-0">sjsjfsjefjsf</div>


            
          </section>
        </div>
      </div>
    </main>
  );
}
