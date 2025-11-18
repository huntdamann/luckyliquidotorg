"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { motion } from "motion/react";

import Header from "@/slices/Header";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

import UpdateOurStory from '../../components/UpdateOurStory'
export default function Home() {
  const windowRef = useRef<HTMLDivElement | null>(null);
  const paperFrontRef = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [followUsTouch, setFollowTouch] = useState(false);
  const offset = 1800;

  const updateTransformOrigin = () => {
    if (!windowRef.current || !paperFrontRef.current) return;

    const scrollTop = windowRef.current.scrollTop;
    const pageHeight = paperFrontRef.current.offsetHeight;
    const equation = ((scrollTop + offset) / pageHeight) * 100;
    paperFrontRef.current.style.transformOrigin = `center ${equation}%`;
  };

  useEffect(() => {
    updateTransformOrigin();
  }, [open]);

  const openMenu = () => {
    if (paperFrontRef.current) {
      paperFrontRef.current.offsetHeight; // read height if needed
    }
    setOpen(true);
    setClose(false);
    console.log("opening....");
  };

  const closeMenu = () => {
    setOpen(false);
    setClose(true);
    console.log("closing....");
  };

  const toggleFollow = () => setFollowTouch((prev) => !prev);

  return (
    <main>
      <Header
        toggleFollow={toggleFollow}
        openAbout={() => {}}
        closeAbout={() => {}}
        openHome={() => {}}
        closeHome={() => {}}
        closeMenu={closeMenu}
      />

      <div id="paper-window" ref={windowRef} className={open ? "tilt" : ""}>
        <div ref={paperFrontRef} id="paper-front">
          <div className="fixed top-6 right-6 z-[9999] transition-opacity duration-500">
            <div onClick={open ? closeMenu : openMenu} className="hamburger">
              <span></span>
            </div>
          </div>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="our_story"
          >
            <UpdateOurStory />
            {/* Space Divider */}
            <div className="h-[20%] opacity-0">sjsjfsjefjsf</div>


            
          </motion.section>
        </div>
      </div>
    </main>
  );
}
