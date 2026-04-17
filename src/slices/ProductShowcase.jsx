"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import Selector from '../components/Selector';
import useMediaQuery from "../hooks/useMediaQuery";
import AnimatedWord from '../fragments/AnimatedWord';
import Viewer from "@/providers/Viewer";
import '../css/ProductShowcase.css';
import { FaPlus, FaMinus } from "react-icons/fa6";

const ProductShowcase = ({ setter, refNo }) => {
  const [activeProduct, setActiveProduct] = useState("honeygold");
  const options = ["Honey Gold", "More"];
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
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
    const product = document.querySelector(".banner .product");
    if (!product) return;

    const soda = product.querySelector(".soda");

    const animate = () => {
      soda.style.setProperty('--left', '-1195px');
      setTimeout(() => {
        soda.style.setProperty('--left', '-190px');
      }, 3000);
    };

    product.addEventListener("touchstart", animate);
    return () => product.removeEventListener('touchstart', animate);
  }, []);

  return (
    <section
      className={`product-showcase-container ${
        activeProduct === "honeygold" ? "main" : "more"
      }`}
    >
      <Selector options={options} activeP={activeProduct} setter={setActiveProduct} />
      <div className="middle-section">
      <AnimatePresence mode="wait">
      {activeProduct === "honeygold" && (
        <div className="product-selections">
          <motion.button initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="product">
             <span className="product-g">Honey Gold</span>

          </motion.button>
         
         
        </div>
      )}
       {activeProduct === "more" && (
           <div className="product-selections">
           <motion.button initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="product">
              <span className="product-t">Tee 1</span>
            </motion.button>
            <motion.button initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="product">
              <span className="product-t">Tee 2</span>
            </motion.button>
            <motion.button initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="product">
              <span className="product-t">Tee 3</span>
            </motion.button>
          
          
         </div>
        )}
      </AnimatePresence>
        <div className="three-model">
          <div className="model">
            <Viewer modelSelect={activeProduct === "honeygold" ? "bottle" : "shirtone"}/>

          </div>
         
          
        </div>
        <div className="fact-container">
      <div className="fun-fact" onClick={toggleDropdown} style={{ cursor: "pointer" }}>
        <FaPlus />
      </div>
        <div className={`fact ${isDropdownVisible ? "visible" : "hidden"}`}>
        <h3>Fun Fact</h3>
        <p>Dylan T. is one of the coldest P's out in the game in 2026</p>
      </div>
      
    </div>
      </div>
      <div className="bottom-section">

        <button className="cta-buy">
          BUY
        </button>
        <button className="cta-info">
          INFO
        </button>
      </div>
      {/* <AnimatePresence mode="wait">
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
            <AnimatedWord text="Coming Soon" />
          </motion.div>
        )}
      </AnimatePresence> */}
    </section>
  );
};

export default ProductShowcase;