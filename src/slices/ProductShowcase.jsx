"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import Selector from '../components/Selector';
import useMediaQuery from "../hooks/useMediaQuery";

// ✅ Correct CSS module import
import styles from '../css/ProductShowcase.module.css';

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

  const getRelativeRect = (buttonRef) => {
    if (!buttonRef.current || !controlsRef.current) return { x: 0, width: 0 };

    const parentRect = controlsRef.current.getBoundingClientRect();
    const rect = buttonRef.current.getBoundingClientRect();

    return {
      x: rect.x - parentRect.x,
      width: rect.width,
    };
  };

  const handleTap = (e) => {
    const el = e.currentTarget;
    el.classList.add(styles["tapped-cta"]);
    setTimeout(() => {
      el.classList.remove(styles["tapped-cta"]);
    }, 250);
  };

  useEffect(() => {
    const update = () => setDimensions(getRelativeRect(moreButtonRef));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const update = () => setDimensionsHoney(getRelativeRect(honeyButtonRef));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const product = document.querySelector(`.${styles.banner} .${styles.product}`);
    if (!product) return;

    const soda = product.querySelector(`.${styles.soda}`);

    const animate = () => {
      soda.style.setProperty('--left', '-1195px');
      setTimeout(() => {
        soda.style.setProperty('--left', '-195px');
      }, 3000);
    };

    product.addEventListener('click', animate);
    return () => product.removeEventListener('click', animate);
  }, []);

  return (
    <section
      className={`${styles["product-showcase-container"]} ${
        activeProduct === "honeygold" ? styles.main : styles.more
      }`}
    >
      <Selector options={options} activeP={activeProduct} setter={setActiveProduct} />

      <AnimatePresence mode="wait">
        {activeProduct === "honeygold" && (
          <motion.div
            key="honeygold"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className={styles["product-title"]}
          >
            <Image
              src="/assets/honeygold2.png"
              alt="HoneyGold"
              width={500}
              height={100}
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
            className={styles["product-title"]}
          >
            <Image
              src="/assets/comingsoon.png"
              alt="Coming Soon"
              width={500}
              height={100}
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
            transition={{ duration: 0.6, ease: [0.9, 0, 0.2, 1] }}
            className={styles.banner}
          >
            <div className={styles.product}>
              <div className={styles.soda}></div>
            </div>
          </motion.div>
        )}

        {activeProduct === "more" && (
          <motion.div
            key="more-img"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className={styles["product-image"]}
          >
            <Image
              src="/assets/new_flavors.png"
              alt="Coming Soon"
              fill
              style={{ objectFit: "contain" }}
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
            onTouchStart={(e) => handleTap(e)}
            id="button-handle"
            className="text-white p-2 border-2 border-gray-400 bg-[#51B150] active:bg-green-500 active:scale-95 focus:bg-green-900 rounded-md min-w-24"
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
            className={`text-white p-2 border-2 border-gray-400 ${
              refNo ? "opacity-0" : "opacity-100"
            } bg-[#51B150] active:bg-green-500 active:scale-95 rounded-md min-w-24`}
          >
            <span>Get Lucky!</span>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductShowcase;
