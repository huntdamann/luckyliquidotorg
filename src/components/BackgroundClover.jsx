"use client";

import Image from "next/image";
import '../css/BackgroundClover.css'
import { motion } from 'motion/react';
import Lucky from '../../public/assets/lucky-logo-demo.png'
import Lucky2 from '../../public/assets/lucky_logo_nobg.png'
import Slogan2 from '../../public/assets/slogan2.png'


export default function BackgroundClover({open, setOpen}) {

    // Variants for staggered animation
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.7, // Delay between children animations
      }
    }
  };

  const itemVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.17, 0.55, 0.55, 1], // replaces "easeOut"
    },
  },
};


  return (
    <div className="ocean">
        <div id="container">
              <motion.section
                className="flex  flex-col justify-center text-center gap-9 pt-[5rem]  min-h-screen items-center"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {/* Main Logo */}
                <motion.div variants={itemVariants}>
                  <Image priority className="opacity-100" id="leadlogo" alt="Lucky Liquid Logo" width={300} src={Lucky}/>
                </motion.div>
        
                {/* Secondary Logo */}
                <motion.div variants={itemVariants}>
                  <Image priority className="opacity-100" id="secondlogo" alt="Lucky Liquid Leperchaun Logo" width={300} src={Lucky2} />
                </motion.div>
        
                {/* Slogan */}
                <motion.div variants={itemVariants} className="text-3xl text-black font-[900] flex flex-col">
                  <Image priority id='slogan' alt="Lucky Liquid Slogan" width={300} src={Slogan2} />
                </motion.div>
                <button
                  id="button-handle-2"
                  onClick={() => setOpen(!open)}

                  className={`text-white p-2 opacity-100 border-2 border-gray-400 ${open ? "opacity-0" : "opacity-100"} bg-[#51B150] active:bg-green-500 rounded-md min-w-24 animate-bounce z-[999] bottom-[-1rem] ipad: left-[38%] sm:left-[43%] md:left-[43%] lg:left-[46%] transform -translate-x-1/2`}
                >
                  <div
                    className="flex justify-center items-center text-white"
                  >
                    <span>Join</span>
                </div>
              </button>
              </motion.section>
        </div>


    
        <div className="bubble bubble--1">
            <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            />
        </div>
        <div className="bubble bubble--2"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--3"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--4"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--5"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--6"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            />
            </div>
        <div className="bubble bubble--7"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--8"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--9"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--10"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--11"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--12"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
</div>
  );
}
