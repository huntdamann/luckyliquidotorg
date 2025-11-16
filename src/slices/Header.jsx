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
  function handleTap(e) {
    const el = e.currentTarget;
    el.classList.add("tapped");
    setTimeout(() => {
      el.classList.remove("tapped");
    }, 150);  // just long enough to see the flash
  }
  function handleFolderTap(e) {
    const el = e.currentTarget;
    el.classList.add("tapped-a");
    setTimeout(() => {
      el.classList.remove("tapped-a");
    }, 150);  // just long enough to see the flash
  }

  const socials = [
    { icon: faInstagram, label: "Instagram", navi: "https://www.instagram.com/waytoolucky_/" },
    { icon: faTiktok, label: "TikTok", navi: "https://www.tiktok.com/@luckyteadtx" },
    { icon: faFacebook, label: "Facebook", navi: "https://www.facebook.com/profile.php?id=61580219229816" },
    { icon: faBluesky, label: "Bluesky", navi: "https://bsky.app/profile/waytoolucky.bsky.social" },
  ];

  const folderVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="text-sm" id="paper-back">
      <nav className="relative">
        <div                 onTouchStart={(e) => handleFolderTap(e)}
 className="close" onClick={handleCloseMenu}></div>

        <ul className="flex flex-col gap-[3rem] justify-evenly">
          {/* SOCIALS */}
          <motion.li
            className="menu-options"
            initial={{ y: 0, opacity: 1 }}
            animate={{
              y: activeItem === "socials" ? yOffsets.socials : 0,
              opacity: activeItem && activeItem !== "socials" ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
            onClick={() => handleItemClick("socials", toggleFollow)}
            onTouchStart={(e) => handleTap(e)}
          >
            Socials
            <motion.div
              className="fixed top-[3rem] flex flex-col  pt-3 w-[200px]"
              initial="hidden"
              animate={activeItem === "socials" ? "visible" : "hidden"}
              variants={folderVariants}
              style={{ zIndex: activeItem === "socials" ? 50 : -1 , gap: '2rem', marginTop: '1rem'}}
              transition={{ duration: 0.3 }}
            >
              {socials.map(({ icon, label, navi }) => (
                <a
                  key={label}
                  href={navi}
                  className="flex items-center gap-2 w-full text-[16px] text-left"
                  target="_blank"
                  rel="noopener noreferrer"
                  onTouchStart={handleFolderTap}

                >
                  <motion.div
                  key={activeItem === "socials"}
                    {...rotateAnimation}
                    className="flex items-center flex-col justify-center"
                  >
                    <FontAwesomeIcon icon={icon} className="text-[18px]" />
                  </motion.div>
                  <span className="leading-none">{label}</span>
                </a>
              ))}
            </motion.div>
          </motion.li>

          {/* PRODUCTS */}
          <motion.li
            className="menu-options"
            initial={{ y: 0, opacity: 1 }}
            animate={{
              y: activeItem === "products" ? yOffsets.products : 0,
              opacity: activeItem && activeItem !== "products" ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
            onTouchStart={(e) => handleTap(e)}

            onClick={() => handleItemClick("products", openAbout)}
          >
            Our Products
            <motion.div
              className="fixed flex top-11 flex-col gap-5 pt-1 w-[20%]"
              initial="hidden"
              animate={activeItem === "products" ? "visible" : "hidden"}
              variants={folderVariants}
              style={{ zIndex: activeItem === "products" ? 50 : -1, gap: '2rem', marginTop: '1rem' }}
              transition={{ duration: 0.3 }}
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSce9Aq-Lf26s4FfMOZkhPGPz8kzZ3gkFf8aS5yvZk1jYTdkTA/viewform?usp=header"
                className=""
                onTouchStart={handleFolderTap}

              >
                Honey Gold
              </a>
            </motion.div>
          </motion.li>

          {/* ABOUT */}
          <motion.li
            className="menu-options"
            initial={{ y: 0, opacity: 1 }}
            animate={{
              y: activeItem === "about" ? yOffsets.about : 0,
              opacity: activeItem && activeItem !== "about" ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
            onTouchStart={(e) => handleTap(e)}

            onClick={() => handleItemClick("about", openHome)}
          >
            About Us
            <motion.div
              className="fixed flex flex-col top-11 gap-5 pt-3  w-[30%]"
              initial="hidden"
              animate={activeItem === "about" ? "visible" : "hidden"}
              variants={folderVariants}
              style={{ zIndex: activeItem === "about" ? 50 : -1, gap: '2rem', marginTop: '1rem' }}
              transition={{ duration: 0.3 }}
            >
              <a href="/about"                   
              onTouchStart={handleFolderTap}
              className="">Our Story</a>
            </motion.div>
          </motion.li>

          {/* HOME */}
          <motion.li
            className="menu-options"
            initial={{ y: 0, opacity: 1 }}
            animate={{
              y: activeItem === "home" ? yOffsets.home : 0,
              opacity: activeItem && activeItem !== "home" ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
            onTouchStart={(e) => handleTap(e)}

            onClick={() => handleItemClick("home")}
          >
            <a href="/">Home</a>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
