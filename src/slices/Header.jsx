"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faBluesky, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Header({
  followUsTouch,
  toggleFollow,
  aboutUsTouch,
  openAbout,
  closeAbout,
  homeTouch,
  openHome,
  closeHome,
  closeMenu, // added prop
}) {

  const [showHamburger, setShowHamburger] = useState(true);

  // Fade logic for Hamburger Menu
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY + 10) {
        setShowHamburger(false);
      } else if (currentScrollY < lastScrollY - 10) {
        setShowHamburger(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="text-sm" id="paper-back">
      <nav className="text-white relative">
        {/* Close Menu Button */}
        <div className="close" onClick={closeMenu}></div>

        <ul>
          <li
            className="relative active:text-green-300 cursor-pointer"
            onClick={toggleFollow}
            id="followus"
          >
            Socials
            <div
              id="social-selections"
              className="opacity-0 z-10 fixed top-[3rem] flex flex-col gap-5 pt-1 w-[150px]"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex active:text-green-300 items-center gap-1 w-[200px] text-[16px]"
                href="https://www.instagram.com/waytoolucky_/"
              >
                <FontAwesomeIcon id="instagram-social-icon" icon={faInstagram} />
                Instagram
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex active:text-green-300 items-center gap-1 w-[200px] text-[16px]"
                href="https://www.tiktok.com/@luckyteadtx"
              >
                <FontAwesomeIcon id="instagram-social-icon" icon={faTiktok} />
                Tiktok
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex active:text-green-300 items-center gap-1 w-[200px] text-[16px]"
                href="https://www.facebook.com/profile.php?id=61580219229816"
              >
                <FontAwesomeIcon id="instagram-social-icon" icon={faFacebook} />
                Facebook
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex active:text-green-300 items-center gap-1 w-[200px] text-[16px]"
                href="https://bsky.app/profile/waytoolucky.bsky.social"
              >
                <FontAwesomeIcon id="instagram-social-icon" icon={faBluesky} />
                Blueskies
              </a>
            </div>
          </li>

          <li
            className="relative active:text-green-300 cursor-pointer"
            onClick={aboutUsTouch ? closeAbout : openAbout}
            id="ourstory"
          >
            Our Products
            <div
              id="shop-selections"
              className="opacity-0 fixed flex top-11 flex-col gap-5 pt-1 w-[20%]"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSce9Aq-Lf26s4FfMOZkhPGPz8kzZ3gkFf8aS5yvZk1jYTdkTA/viewform?usp=header"
                className="text-[16px] w-[200px]"
              >
                Honey Gold
              </a>
            </div>
          </li>

          <li
            id="home"
            className="relative active:text-green-300 cursor-pointer"
            onClick={homeTouch ? closeHome : openHome}
          >
            About Us
            <div
              id="about-selections"
              className="opacity-0 fixed flex flex-col top-11 gap-5 pt-1 w-[30%]"
            >
              <span className="text-[16px] w-[200px]">Our Story</span>
            </div>
          </li>

          <li className="relative active:text-green-300 cursor-pointer" id="delivery">
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
