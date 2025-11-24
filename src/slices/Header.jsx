"use client";

import React, { useState } from "react";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import { motion } from "motion/react";
import NavItem from "../fragments/NavItem";
import "../css/Header.module.css";
import { FaBluesky } from "react-icons/fa6";

export default function Header({ closeMenu }) {
  const [openItem, setOpenItem] = useState(null);

  const yOffsets = {
    socials: 0,
    products: -80,
    about: -150,
    home: 0,
  };

  const handleToggle = (label) => {
    if (openItem === label) {
      setOpenItem(null);
    } else {
      setOpenItem(label);
    }
  };

  const handleCloseMenu = () => {
    setOpenItem(null);   
    if (closeMenu) closeMenu(); 
  };

  return (

    <>
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="paper-back"
    >
      <nav className="navigation">

        
        <div className="close" onClick={handleCloseMenu}></div>

        <ul className="flex border text-white flex-col  gap-[5rem] justify-evenly">

          {/* SOCIALS */}
          <NavItem
            label="Socials"
            offset={yOffsets.socials}
            isOpen={openItem === "Socials"}
            onToggle={() => handleToggle("Socials")}
            isSomeItemOpen={openItem !== null}

          >
            {(open) => (
              <>
              <li>
                <a target='_blank' rel="noopener noreferrer" className="flex items-center justify-center gap-2" href="https://www.instagram.com/waytoolucky_/">
                  <motion.div
                    animate={{ rotateY: open ? 360 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <FaInstagram className="text-white" />
                  </motion.div>
                  <span>Instagram</span>
                </a>
              </li>
              <li className="">
                <a target='_blank' rel="noopener noreferrer" className="flex items-center justify-center gap-2" href="https://www.tiktok.com/@luckyteadtx">
                  <motion.div
                    animate={{ rotateY: open ? 360 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <FaTiktok className="text-white" />
                  </motion.div>
                  <span>TikTok</span>
                </a>
              </li>
              <li>
                <a target='_blank' rel="noopener noreferrer" className="flex items-center justify-center gap-2" href="https://www.facebook.com/profile.php?id=61580219229816">
                  <motion.div
                    animate={{ rotateY: open ? 360 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <FaFacebook className="text-white" />
                  </motion.div>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a target='_blank' rel="noopener noreferrer" className="flex items-center justify-center gap-2" href="https://bsky.app/profile/waytoolucky.bsky.social">
                  <motion.div
                    animate={{ rotateY: open ? 360 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <FaBluesky />
                  </motion.div>
                  <span>Bluesky</span>
                </a>
              </li>
              
              </>
            
            )}
          </NavItem>

          {/* PRODUCTS */}
          <NavItem
            label="Our Products"
            offset={yOffsets.products}
            isOpen={openItem === "Our Products"}
            onToggle={() => handleToggle("Our Products")}
            isSomeItemOpen={openItem !== null}

          >
            {(open) => (
              <>
                <li><a target='_blank' rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSce9Aq-Lf26s4FfMOZkhPGPz8kzZ3gkFf8aS5yvZk1jYTdkTA/viewform?usp=header">Honey Gold</a></li>
              </>
            )}
          </NavItem>

          {/* About Us */}
          <NavItem
            label="About"
            offset={yOffsets.about}
            isOpen={openItem === "About"}
            onToggle={() => handleToggle("About")}
            isSomeItemOpen={openItem !== null}

          >
            {(open) => (
              <>
                <li><a href="/about">Our Story</a></li>
              </>
            )}
          </NavItem>
          
          <li><a href="/" style={{opacity: openItem !== null ? 0 : 1, fontSize: "1.55rem"}}>Home</a></li>


        </ul>
      </nav>
    </motion.header>
    </>
  );
}
