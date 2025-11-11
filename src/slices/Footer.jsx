"use client"

import React, { useRef, memo } from "react";
import { motion, useInView } from 'motion/react';

const Footer = React.memo(function Footer() {


    const footerRef = useRef(null)
    const isInView = useInView(footerRef, {amount: 0.5})

    // useEffect (() => {
    //     if (isInView) {
    
    //       gsap.to(buttonRef.current, {opacity: 0})
    //     }
    //     else {
    //       gsap.to(buttonRef.current, {opacity: 1})
    //     }
    //   })
    

  return (
        <motion.footer
        ref={footerRef}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-xs min-h-6 text-[#d1a054] bg-orange-500 py-6"
        >
        © 2025 — Crafted by 
        <a href="https://humanndesign.com" target="_blank" className="font-semibold hover:underline ml-1">
        HUMANNDESIGN
        </a>
    </motion.footer>
  );
});

export default Footer;
