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
      x: rect.x - ( parentRect.x + 3 ), // relative to parent container
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
        className="product-controls relative  gap-4 sm:gap-[3rem]"
      >
        {/* HoneyGold button */}
        <button
          ref={honeyButtonRef}
          onClick={handleHoneyGoldSelection}
          className="honeygold-button"
        >
          <Image
            src="/assets/honey-Active.png"
            alt="HoneyGold Button"
            width={150}
            height={100}
            priority
            style={{ objectFit: "contain" }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
          />
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
          className="slider-selection absolute bottom-0 h-[3px] bg-[#d1a054] rounded-md"
        />

        {/* More button */}
        <button onClick={handleMoreSelection} className="more-button">
          <div ref={moreButtonRef} className="image-container relative w-[150px] h-[100px]">
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
                style={{ objectFit: "contain" }}
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

      <AnimatePresence mode="wait">
        {activeProduct === "honeygold" && (
          <motion.div
            key="honeygold-img"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="product-image"
          >
            {/* <Image
              src="/assets/mobile_bottle_resized.png"
              alt="HoneyGold"
              width={250}
              height={800}
              priority
            /> */}
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
            id="button-handle-2"
            className="text-white p-2 border-2 border-gray-400 bg-[#51B150] active:bg-green-500 min-w-24"
          >
            <span>Get</span>
          </motion.button>
        )}

        {activeProduct === "more" && (
          <motion.button
            key="more-btn"
            exit={{ opacity: 0, y: 20 }}
            onClick={() => setter(!refNo)}
            id="button-handle-2"
            className="text-white p-2 border-2 hover:bg-red-500 border-gray-400 bg-[#51B150] active:bg-green-500 min-w-24"
          >
            <span>Join Newsletter</span>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductShowcase;
