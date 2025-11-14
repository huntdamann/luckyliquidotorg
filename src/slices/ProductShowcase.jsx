"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import useMediaQuery from "../hooks/useMediaQuery";

const ProductShowcase = ({ setter, refNo }) => {
  const [activeProduct, setActiveProduct] = useState("honeygold");

  const moreButtonRef = useRef(null);
  const honeyButtonRef = useRef(null);
  const controlsRef = useRef(null); // ✅ NEW parent ref

  const [dimensions, setDimensions] = useState({ x: 0, width: 0 });
  const [dimensionsHoney, setDimensionsHoney] = useState({ x: 0, width: 0 });

  const phoneQuery = useMediaQuery("(min-width: 360px)");
  const tabletQuery = useMediaQuery("(max-width: 630px)");

  // ✅ Reusable function to measure a button relative to parent
  const getRelativeRect = (buttonRef) => {
    if (!buttonRef.current || !controlsRef.current) return { x: 0, width: 0 };
    const parentRect = controlsRef.current.getBoundingClientRect();
    const rect = buttonRef.current.getBoundingClientRect();
    console.log(rect.x)
    return {
      x: rect.x - ( parentRect.x  ), // relative to parent container
      width: rect.width,
    };
  };
  

  // Measure “More” button
  useEffect(() => {
    const update = () => setDimensions(getRelativeRect(moreButtonRef));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeProduct]);

  // Measure “HoneyGold” button
  useEffect(() => {
    const update = () => setDimensionsHoney(getRelativeRect(honeyButtonRef));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeProduct]);

  const handleMoreSelection = () => setActiveProduct("more");
  const handleHoneyGoldSelection = () => setActiveProduct("honeygold");

  return (
    <section
      className={`product-showcase-container ${
        activeProduct === "honeygold" ? "main" : "more"
      }`}
    >
      {/* --- BUTTONS --- */}
      <div
        ref={controlsRef} // ✅ parent ref added
        className="product-controls"
      >
        {/* HoneyGold button */}
        <button onClick={handleHoneyGoldSelection} className="honeygold-button">
          <div ref={honeyButtonRef} className="image-container relative w-[100px] h-[100px]">
            {activeProduct === "honeygold" && (
              <Image
                src="/assets/honeygold2.png"
                alt="HoneyGold Button"
                fill
                priority
                style={{ objectFit: "contain", zIndex: 999 }}
              />
            )}
            {activeProduct === "more" && (
              <Image
                src="/assets/honeygold-black.png"
                alt="HoneyGold Button"
                fill
                priority
                style={{ objectFit: "contain", zIndex: 999 }}
              />
            )}
          </div>
        </button>

        {/* Animated Slider */}
        <motion.div
          animate={{
            x:
              activeProduct === "more"
                ? dimensions.x
                : dimensionsHoney.x,
            width:
              activeProduct === "more"
                ? dimensions.width
                : dimensionsHoney.width,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{zIndex: 1, position: "absolute"}}
          className="slider-selection"
        />

        {/* More button */}
        <button onClick={handleMoreSelection} className="more-button">
          <div ref={moreButtonRef} className="image-container relative w-[100px] h-[100px]">
            {activeProduct === "honeygold" && (
              <Image
                src="/assets/more-nonActive.png"
                alt="More Button"
                fill
                priority
                style={{ objectFit: "contain" }}
              />
            )}
            {activeProduct === "more" && (
              <Image
                src="/assets/more-Active.png"
                alt="More Button"
                fill
                priority
                style={{ objectFit: "contain", zIndex: 999 }}
              />
            )}
          </div>
        </button>
      </div>

      {/* --- ANIMATIONS --- */}
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

        {/* Products */}
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
              src="/assets/filled_bottle.png"
              alt="HoneyGold"
              width={200}
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
              src="/assets/getlucky.png"
              alt="Coming Soon"
              width={500}
              height={100}
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>

        {/* Call to Action Buttons */}
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
            id="button-handle"
            className="text-white p-2 border-2 border-gray-400 bg-[#51B150] active:bg-green-500 rounded-md min-w-24"
          >
            <span>Get</span>
          </motion.button>
        )}

        {activeProduct === "more" && (
          <motion.button
            key="more-btn"
            exit={{ opacity: 0, y: 20 }}
            onClick={() => setter(!refNo)}
            id="button-handle"
            className={`text-white p-2 opacity-100 border-2 border-gray-400 ${refNo ? "opacity-0" : "opacity-100"} bg-[#51B150] active:bg-green-500 rounded-md min-w-24`}
            >
            <span>Join Newsletter</span>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductShowcase;
