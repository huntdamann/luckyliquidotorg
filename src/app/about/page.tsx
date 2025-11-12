"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { motion } from "motion/react";

import Header from "@/slices/Header";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

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

          {/* Dark Overlay */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="our_story"
          >
            <h1>Our Story</h1>
            <span className="font-bold">
              Lucky Tea was meant to shake things up...
            </span>
            <span>
              From bold branding to unique presentation, we're doing things
              differently. Created in Dallas, TX, Lucky Tea was brewed with one
              idea in mind: to create a flavor-focused beverage that challenges
              norms and pushes boundaries. Built for doers, our tea is brewed
              with 100% real leaves, locally sourced honey, all-natural
              sweeteners, and bottled in fully recyclable material.
            </span>
            <span>
              But for us, tea is just the beginning. We're here to push the
              limits of what a beverage brand can do. Our vision goes beyond the
              bottle -- we're building a movement rooted in community. By 2030,
              we aim to launch a nonprofit dedicated to empowering the next
              generation through scholarships and youth activity centers,
              starting right here in our own backyard.{" "}
              <span className="font-bold">
                It's more than just tea: this is a promise in a bottle. This is
                what it means to Get Lucky.
              </span>
            </span>

            <Image
              className="text-[3rem] lg:mt-12"
              width={150}
              height={100}
              src="/assets/lucky_logo_nobg.png"
              alt="clover"
            />
          </motion.section>
        </div>
      </div>
    </main>
  );
}
