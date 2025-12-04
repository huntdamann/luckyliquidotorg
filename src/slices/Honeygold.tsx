"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import './Honeygold.css'

import Header from "@/slices/Header";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import View from '../hooks/View'
import Testimonials from "./Testimonials";
import FunFacts from "../fragments/FunFacts"
import { EmblaOptionsType } from 'embla-carousel'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import  Lenis  from "lenis";

gsap.registerPlugin(ScrollTrigger);




export default function Honeygold() {


  const facts = [
    {
        number: "1.",
        info: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi."
    },
    {
        number: "2.",
        info: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi."
    },
    {
        number: "3.",
        info: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi."
    },
]



  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // smoothness
    });
  
    // Sync ScrollTrigger on scroll
    lenis.on("scroll", ScrollTrigger.update);
  
    // RAF loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  
    return () => {
      lenis.destroy();
    };
  }, []);


  const triggerRef = useRef<HTMLElement | null>(null)

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
  const [progress, setProgress] = useState(0);

 
  useGSAP(() => {

    const fruits = gsap.utils.toArray<HTMLSpanElement>(".fruits");
    
    // Timeline that reveals fruits in order
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=2000",      // scroll distance
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          setProgress(self.progress); // progress = 0 → 1
        }
      }
    });


    fruits.forEach((fruit, index) => {
      tl.from(fruit, {
        opacity: 0,
        y: 100,
        duration: 0.5,
        ease: "power3.out"
      }, index * 0.3); // each appears later in the timeline
    });

   
  }, { scope: triggerRef });

  
  
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
          style={{}}
            className="text-center text-black"
          >
            <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}>
              <Image alt="Honey Gold" width={300} height={300} src='/assets/honeygold2.png'/>

            </div>
            {/* <h1>Honey Gold</h1> */}
            {/* <Testimonials /> */}

            <section className="ingredients-section">
              <h2>Ingredients</h2>
              <div className="nutrition">
                <Image src='/assets/nutrition.png' alt="Nutrition Label for HoneyGold" fill style={{objectFit: 'contain'}}/>
              </div>
              
              <span className="nutrition-text">
                
                Filtered water, brewed tea, cane sugar, natural flavors, lemon juice, lime juice, natural sweeteners 

              </span>
              <span className="nutrition-text">
                
              Contains: Caffeine, honey (not suitable for infants under 1 year)
              </span>

            </section>
            <section className="fun-facts">
              <h2>Fun Facts</h2>
              <FunFacts number={facts[0].number} info={facts[0].info} />
              <FunFacts number={facts[1].number} info={facts[1].info} />
              <FunFacts number={facts[2].number} info={facts[2].info} />

              
            </section>
           
            <section ref={triggerRef} className="scroll-container">

              <div className="fruit">
              <span className="fruits peach">Peach</span>
                <span className="fruits ">Mango</span>
                <span className="fruits">Lemon</span>
                <span className="fruits">Lime</span>
              </div>

              <View scrollprogress={progress} />

               

            </section>
            

            
          </section>
        </div>
      </div>
    </main>
  );
}
