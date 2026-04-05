"use client"

import React, { useRef, memo } from "react";
import { motion, useInView } from 'motion/react';
import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";


const Footer = React.memo(function Footer() {


    const footerRef = useRef(null)

  return (
    <motion.footer
        ref={footerRef}
        style={{ color: "white",  height: "auto", minHeight: "30vh", backgroundColor: "green", padding: "30px", gap: "10px"}}
        className="flex flex-col items-center gap-7 p-12"
        >
          <div style={{display: "flex", justifyContent: "space-around", gap: "20px"}} className="flex justify-around">
            <a href="https://www.instagram.com/waytoolucky_/">
              <FaInstagram style={{fontSize: "24px"}} className="text-[2rem]" />
            </a>
            <a href="https://www.tiktok.com/@luckyteadtx">
              <FaTiktok style={{fontSize: "24px"}} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61580219229816">
              <FaFacebook style={{fontSize: "24px"}} />
            </a>
           
          </div>

          <div style={{display: "flex", gap: "15px", fontFamily: "var(--font-fredoka), sans-serif"}} className="flex gap-12">
            <a className="cursor-pointer" href="/about">About</a>
            <span>Contact</span>
            <span>Privacy Policy</span>


          </div>
        © 2026 —
        {/* <a href="https://humanndesign.com" target="_blank" className="font-semibold hover:underline ml-1">
        HUMANNDESIGN
        </a> */}
        <span>LuckyLiquids. All Rights Reserved</span>
    </motion.footer>
  );
});

export default Footer;
