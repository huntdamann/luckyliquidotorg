"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from 'motion/react'
import { styles } from '../css/ProductShowcase.module.css'
// Imported Images


export default function Selector({ options, activeP, setter }) {

    const [positions, setPositions] = useState({
        honey: {
            x: 0,
            width: 0,
        },
        more: {
            x: 0,
            width: 0,
        },
        slider: {
            x: 0,
            width: 0,
        }

       
      });

  useEffect(() => {
    const el = containerRef.current;
    const one = textRef.current;
    const two = text2Ref.current;
    const slide = sliderRef.current;
    if (!el || !one || !two || !slide) return;
    
    const rect = el.getBoundingClientRect();
    const rect2 = one.offsetLeft;
    const rect3 = two.offsetLeft;
    const rect4 = slide.offsetLeft;

    console.log("Container distance from viewport: ", rect.x);
    console.log("Text1 distance from viewport: ", rect2);
    console.log("Text2 distance from viewport: ", rect3);
    console.log("Slider distance from viewport: ", rect4);

    setPositions({
        honey: {
          x: rect2,            // Honey button offset
          width: textRef.current.offsetWidth
        },
        more: {
          x: rect3,            // More button offset
          width: text2Ref.current.offsetWidth
        },
        slider: {
          x: rect4,            // Slider offset
          width: sliderRef.current.offsetWidth
        }
      });
      

  }, []);
  

  const containerRef = useRef(null)
  const textRef = useRef(null)
  const text2Ref = useRef(null)
  const sliderRef = useRef(null)

  const handleMoreSelection = () => setter("more");
  const handleHoneyGoldSelection = () => setter("honeygold");
  return (
    <>

          <div ref={containerRef} className="flex  text-center relative gap-[3rem] justify-center items-center w-120">
            <button onClick={handleHoneyGoldSelection} ref={textRef} className="p-2">
                    <div
                    
                    className="relative w-[150px] h-[30px] flex items-center justify-center"
                     >
                    <Image
                    src={
                        activeP === "honeygold"
                        ? "/assets/honey_on.png"
                        : "/assets/honey_off.png"
                    }
                    alt="HoneyGold Button"
                    fill
                    priority
                    style={{ objectFit: "contain", zIndex: 599 }}
                    />
                </div>
                
                </button>
            <motion.div ref={sliderRef} animate={{x: activeP === "honeygold" ? positions.honey.x - positions.slider.x + 85 : positions.more.x - positions.slider.x + 43, width: activeP === "honeygold" ? positions.honey.width : positions.more.width}} className="h-[50px] bg-[#A1E6B3] rounded-2xl absolute"/>
                <button onClick={handleMoreSelection} ref={text2Ref} className="bg-transparent p-2">
                    <div
                    className="relative w-[70px] h-[30px] flex items-center justify-center"
                    >
                    <Image
                    src={
                        activeP === "more"
                        ? "/assets/more_off.png"
                        : "/assets/more_on.png"
                    }
                    alt="More Button"
                    fill
                    priority
                    style={{ objectFit: "contain", zIndex: 599 }}
                    className=""
                    />
                </div>
                </button>
    
          </div>
      
    </>
  );
}
