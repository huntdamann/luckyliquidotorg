"use client"

import React, { memo } from "react";
import Image from "next/image";
import { motion } from 'motion/react';
import Lucky from '../../public/assets/lucky-logo-demo.png'
import Lucky2 from '../../public/assets/lucky_logo_nobg.png'
import Slogan2 from '../../public/assets/slogan2.png'

const Hero = memo(function Hero() {

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
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <div id="container">
      <motion.section
        className="flex border flex-col justify-center text-center gap-6 pt-[1rem] pb-[3rem] min-h-screen items-center"
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
      </motion.section>
    </div>
  );
});

export default Hero;
