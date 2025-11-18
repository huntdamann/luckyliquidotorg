"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import Selector from '../components/Selector'
import useMediaQuery from "../hooks/useMediaQuery";

const ProductShowcase = ({ setter, refNo }) => {
  const [activeProduct, setActiveProduct] = useState("honeygold");
  const options = ["Honey Gold", "More"]

  const moreButtonRef = useRef(null);
  const honeyButtonRef = useRef(null);
  const controlsRef = useRef(null);

  const [dimensions, setDimensions] = useState({ x: 0, width: 0 });
  const [dimensionsHoney, setDimensionsHoney] = useState({ x: 0, width: 0 });

  const phoneQuery = useMediaQuery("(min-width: 360px)");
  const tabletQuery = useMediaQuery("(max-width: 630px)");

  // ORIGINAL getRelativeRect
  const getRelativeRect = (buttonRef) => {
    if (!buttonRef.current || !controlsRef.current) return { x: 0, width: 0 };

    const parentRect = controlsRef.current.getBoundingClientRect();
    const rect = buttonRef.current.getBoundingClientRect();

    return {
      x: rect.x - parentRect.x,
      width: rect.width,
    };
  };

  function handleTap(e) {
    const el = e.currentTarget;
    el.classList.add("tapped-cta");
    setTimeout(() => {
      el.classList.remove("tapped-cta");
    }, 250);
  }

  // ORIGINAL effect for “More” button
  // Measure More button
useEffect(() => {
  const update = () => setDimensions(getRelativeRect(moreButtonRef));
  update();
  window.addEventListener("resize", update);
  return () => window.removeEventListener("resize", update);
}, []);

// Measure HoneyGold button
useEffect(() => {
  const update = () => setDimensionsHoney(getRelativeRect(honeyButtonRef));
  update();
  window.addEventListener("resize", update);
  return () => window.removeEventListener("resize", update);
}, []);


  const handleMoreSelection = () => setActiveProduct("more");
  const handleHoneyGoldSelection = () => setActiveProduct("honeygold");

  return (
    <section
      className={`product-showcase-container ${
        activeProduct === "honeygold" ? "main" : "more"
      }`}
    >
    <Selector options={options} activeP={activeProduct} setter={setActiveProduct} />

      {/* BUTTONS */}
     

      {/* ANIMATIONS */}
      <AnimatePresence mode="wait">
        {activeProduct === "honeygold" && (
          <motion.div
            key="honeygold"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="product-title"
          >
            <Image
              src="/assets/honeygold2.png"
              alt="HoneyGold"
              width={500}
              height={100}
              priority
            />
          </motion.div>
        )}

        {activeProduct === "more" && (
          <motion.div
            key="more"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="product-title"
          >
            <Image
              src="/assets/comingsoon.png"
              alt="Coming Soon"
              width={500}
              height={100}
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* PRODUCT IMAGES */}
      <AnimatePresence mode="wait">
        {activeProduct === "honeygold" && (
          <motion.div
            key="honeygold-img"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.9, 0, 0.2, 1] }}
            className="product-image"
          >
            <Image
              src="/assets/new_bottle.png"
              alt="HoneyGold"
              width={500}
              height={800}
              priority
            />
          </motion.div>
        )}

        {activeProduct === "more" && (
          <motion.div
            key="more-img"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="product-title"
          >
            <Image
              src="/assets/new_flavors.png"
              alt="Coming Soon"
              width={800}
              height={100}
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CALL TO ACTION BUTTONS */}
      <AnimatePresence>
        {activeProduct === "honeygold" && (
          <motion.button
            key="honeygold-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSce9Aq-Lf26s4FfMOZkhPGPz8kzZ3gkFf8aS5yvZk1jYTdkTA/viewform?usp=header",
                "_blank"
              )
            }
            onTouchStart={(e) => handleTap(e)}
            id="button-handle"
            className="text-white p-2 border-2 border-gray-400 bg-[#51B150] active:bg-green-500 focus:bg-green-900 rounded-md min-w-24"
          >
            <span>Get Lucky!</span>
          </motion.button>
        )}

        {activeProduct === "more" && (
          <motion.button
            key="more-btn"
            exit={{ opacity: 0, y: 20 }}
            onClick={() => setter(!refNo)}
            id="button-handle"
            onTouchStart={(e) => handleTap(e)}
            className={`text-white p-2 opacity-100 border-2 border-gray-400 ${
              refNo ? "opacity-0" : "opacity-100"
            } bg-[#51B150] active:bg-green-500 rounded-md min-w-24`}
          >
            <span>Get Lucky!</span>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductShowcase;
