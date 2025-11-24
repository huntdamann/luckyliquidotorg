"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faBluesky, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from "motion/react";
import "../css/Header.module.css"

export default function Header({
  toggleFollow,
  openAbout,
  closeAbout,
  openHome,
  closeHome,
  closeMenu,
}) {
  const [activeItem, setActiveItem] = useState(null);


  const yOffsets = {
    socials: 0,
    products: -70,
    about: -140,
    home: 0,
  };

  const rotateAnimation = {
    initial: { rotateY: 0 },
    animate: { rotateY: 360 },
    transition: { duration: 0.8, ease: "easeInOut" },
  };

  const handleItemClick = (itemName, callback) => {
    if (activeItem === itemName) {
      setActiveItem(null);
      if (callback) callback(false);
    } else {
      setActiveItem(itemName);
      if (callback) callback(true);
    }
  };

  const handleCloseMenu = () => {
    setActiveItem(null);
    if (closeMenu) closeMenu();
  };
 
  

  const socials = [
    { icon: faInstagram, label: "Instagram", navi: "https://www.instagram.com/waytoolucky_/" },
    { icon: faTiktok, label: "TikTok", navi: "https://www.tiktok.com/@luckyteadtx" },
    { icon: faFacebook, label: "Facebook", navi: "https://www.facebook.com/profile.php?id=61580219229816" },
    { icon: faBluesky, label: "Bluesky", navi: "https://bsky.app/profile/waytoolucky.bsky.social" },
  ];

  const folderVariants = {
    hidden: { opacity: 0, y: -10, zIndex: -99 },
    visible: { opacity: 1, y: 0 },
  };

  return (
  
    <motion.header initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="text-sm" id="paper-back">
      <nav className="navigation">
        <div className="close" onClick={handleCloseMenu}></div>

        <ul className="flex border border-red-500 flex-col gap-[3rem] justify-evenly">
         <li><span>Home</span></li>
        
        </ul>
      </nav>
    </motion.header>
    
  );
}
