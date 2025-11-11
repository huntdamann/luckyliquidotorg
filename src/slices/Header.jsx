"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faBluesky, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { motion } from "motion/react";

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

  return (
    <header className="text-sm" id="paper-back">
      <nav className="text-white relative">
        <div className="close" onClick={handleCloseMenu}></div>

        <ul className="flex flex-col gap-4">
          {/* SOCIALS */}
          <motion.li
            id="header-elements"
            initial={{ opacity: 1, y: 0 }}
            animate={{
              opacity: activeItem && activeItem !== "socials" ? 0 : 1,
              y: activeItem === "socials" ? yOffsets.socials : 0,
            }}
            transition={{ duration: 0.3 }}
            className="relative cursor-pointer active:text-[#d1a054] hover:text-green-400"
            onClick={() => handleItemClick("socials", toggleFollow)}
          >
            Socials
            <div
              id="social-folder"
              className={`fixed top-[3rem] flex flex-col gap-6 pt-3 w-[200px] transition-all duration-300
                ${activeItem === "socials"
                  ? "opacity-100 pointer-events-auto z-50"
                  : "opacity-0 pointer-events-none z-[-99]"
                }`}
            >
              {[
                { icon: faInstagram, label: "Instagram", navi: "https://www.instagram.com/waytoolucky_/" },
                { icon: faTiktok, label: "TikTok", navi: "https://www.tiktok.com/@luckyteadtx" },
                { icon: faFacebook, label: "Facebook", navi: "https://www.facebook.com/profile.php?id=61580219229816" },
                { icon: faBluesky, label: "Bluesky", navi: "https://bsky.app/profile/waytoolucky.bsky.social" },
              ].map(({ icon, label, navi }) => (
                <a
                  key={label}
                  href={navi}
                  className="flex items-center gap-2 w-full text-[16px] text-left"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    key={activeItem === "socials"} // re-triggers animation when shown
                    {...rotateAnimation}
                    className="flex items-center active:text-[#d1a054] flex-col justify-center"
                  >
                    <FontAwesomeIcon icon={icon} className="text-[18px]" />
                  </motion.div>
                  <span className="leading-none">{label}</span>
                </a>
              ))}
            </div>
          </motion.li>

          {/* PRODUCTS */}
          <motion.li
            initial={{ opacity: 1, y: 0 }}
            animate={{
              opacity: activeItem && activeItem !== "products" ? 0 : 1,
              y: activeItem === "products" ? yOffsets.products : 0,
            }}
            id="header-elements"
            transition={{ duration: 0.3 }}
            className="relative cursor-pointer text-xl"
            onClick={() => handleItemClick("products", openAbout)}
          >
            Our Products
            <div
              id="product-folder"
              className={`fixed flex top-11 flex-col gap-5 pt-1 w-[20%] transition-all duration-300
                ${activeItem === "products"
                  ? "opacity-100 pointer-events-auto z-50"
                  : "opacity-0 pointer-events-none z-[-1]"
                }`}
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSce9Aq-Lf26s4FfMOZkhPGPz8kzZ3gkFf8aS5yvZk1jYTdkTA/viewform?usp=header"
                className="text-[16px] w-[200px]"
              >
                Honey Gold
              </a>
            </div>
          </motion.li>

          {/* ABOUT */}
          <motion.li
            initial={{ opacity: 1, y: 0 }}
            animate={{
              opacity: activeItem && activeItem !== "about" ? 0 : 1,
              y: activeItem === "about" ? yOffsets.about : 0,
            }}
            id="header-elements"
            transition={{ duration: 0.3 }}
            className="relative cursor-pointer"
            onClick={() => handleItemClick("about", openHome)}
          >
            About Us
            <div
              id="about-folder"
              className={`fixed flex flex-col top-11 gap-5 pt-3 border w-[30%] transition-all duration-300
                ${activeItem === "about"
                  ? "opacity-100 pointer-events-auto z-50"
                  : "opacity-0 pointer-events-none z-[-1]"
                }`}
            >
              <a href="/about" className="border w-[200px]">Our Story</a>
            </div>
          </motion.li>

          {/* HOME */}
          <motion.li
            initial={{ opacity: 1, y: 0 }}
            animate={{
              opacity: activeItem && activeItem !== "home" ? 0 : 1,
              y: activeItem === "home" ? yOffsets.home : 0,
            }}
            id="header-elements"
            transition={{ duration: 0.3 }}
            className="relative cursor-pointer"
            onClick={() => handleItemClick("home")}
          >
            <a href="/">Home</a>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
