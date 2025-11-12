"use client"

import React, { memo } from "react";
import Image from "next/image";
import { motion } from 'motion/react';
import Lucky from '../../public/assets/lucky-logo-demo.png'
import Lucky2 from '../../public/assets/lucky_logo_nobg.png'
import Slogan2 from '../../public/assets/slogan2.png'
import BackgroundClover from "../components/BackgroundClover";

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
    <BackgroundClover>


   
    </BackgroundClover>

  );
});

export default Hero;
