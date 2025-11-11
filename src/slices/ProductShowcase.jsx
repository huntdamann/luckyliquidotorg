"use client"

import React, { useState, memo, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from 'motion/react';
import  useMediaQuery  from '../hooks/useMediaQuery'

const ProductShowcase = ({ setter, refNo }) => {
  const [activeProduct, setActiveProduct] = useState("honeygold");
  const moreButtonRef = useRef(null);
  const honeyButtonRef = useRef(null)
  const [dimensions, setDimensions] = useState({ x: 0, width: 0 });
  const [dimensionsHoney, setDimensionsHoney] = useState({ x: 0, width: 0 });

  const phoneQuery = useMediaQuery('(max-width: 440px)');

  const tabletQuery = useMediaQuery('(max-width: 630px)');



  useEffect(() => {
    if (!moreButtonRef.current) return;

    // Get bounding box of the element
    const rect = moreButtonRef.current.getBoundingClientRect();

    // rect.x is the x-position relative to viewport
    // rect.width is the element width
    setDimensions({ x: rect.x, width: rect.width });

    // Optional: Update on window resize
    const handleResize = () => {
      const rect = moreButtonRef.current.getBoundingClientRect();
      setDimensions({ x: rect.x, width: rect.width });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeProduct === "more"]);
  useEffect(() => {
    if (!honeyButtonRef.current) return;

    // Get bounding box of the element
    const rect = honeyButtonRef.current.getBoundingClientRect();

    // rect.x is the x-position relative to viewport
    // rect.width is the element width
    setDimensionsHoney({ x: rect.x, width: rect.width });

    // Optional: Update on window resize
    const handleResize = () => {
      const rect = honeyButtonRef.current.getBoundingClientRect();
      setDimensionsHoney({ x: rect.x, width: rect.width });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeProduct === "honeygold"]);


  const handleMoreSelection = () => setActiveProduct("more");
  const handleHoneyGoldSelection = () => setActiveProduct("honeygold");

  return (
    <section className={`product-showcase-container ${activeProduct === "honeygold" ? 'main' : 'more'}`}>

      {/* --- BUTTONS --- */}
      <div className="product-controls lg:gap-[20rem] gap-4 sm:gap-[3rem]">
        {/* HoneyGold button */}
        <button onClick={handleHoneyGoldSelection} className="honeygold-button">
          <div ref={honeyButtonRef} className="">
            <Image
              src="/assets/honey-Active.png"
              alt="HoneyGold Button"
              width={150}
              height={100}
              priority
              style={{ objectFit: "contain" }}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACmAmYDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAYAQEBAAMAAAAAAAAAAAAAAAAAAQIDBP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOeA5G8AARQEAARQEAARRRAAQVBAAEFQAAAAEFAQUBFBAAAUAAUEUBQFAAABQAAAAUAAAAAAAAAAAEFQAAAABFAQVAAAAAAAaAUAAAAEUBBUARQRBUARQEFARFAQUBBQEFAQUBBQEFAQUBFAAUBFAAFFRQAAQBQAAAAAAAAAAAAAAAABFFEFAQUBAAAAAAAAaAVAAEFAQVAAAAAQUBBQERpAQUBBQEFAQUBBQEFAQUBBQEFARQAFAQUBFBAAAFAQUBFAAAAAAAAAAAAAEFAQUBBQEFAQUBBQEFAAGQAAAAAAAIAACKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoAAAAAAAAAKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIAqAAAAAAAAoKCIKCoKAgoCKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAKAgoCCgMiCooAAAAAAACoAoiigAAAAAAAAKAAAAgAAAAAKIKgAAAAAAAAAAAAAAAAAAAAAgCiKAAAAAAAAAAgAAogCiAKIAyIKiiAKAAACiAKICqIoAAKIIKIAoAAACoAogCiAKIAogAAAAAAAAAIKKgAAAAAAAAAAAAAAAAIAACoAogCiAKIAogCiAKIAyIKKIAoggogCgAKgCiAKIAqoAogCiAKIAoAAAKIAogCoAAAAAAAAICiAKIAqAAAAAAAAIAogCiAKIAoigAAAAAAKgCiAKIAogDAAAAAAKIAoggogCgAogCiAKIAoAKIAogCiAqiAKIAogCiAKICKIAogCiAKgAAAAAAAAgKIAogCiAKIAogCiAKIAogCiAKIAogCiAMgAAAAAAAogCiAKIoACAqAqiAKIoAAAACoAogCiAKIAogCiAKIAogCiAAAAAAAAAAAAAAAAAAgCiAKIAogCiAKIAogCiAKIAyAIAAoAAAAAAAAACgKAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAIACgAAAAAAAAAP//Z"

            />
          </div>
        </button>
        {/* Animated Slider */}
        <motion.div animate={{x: activeProduct === "more"  ? phoneQuery ? 230 : tabletQuery ? 310 : 235 : phoneQuery ? -2 : tabletQuery ? -2 : -195, width: activeProduct === "more" ? dimensions.width : dimensionsHoney.width}} className="slider-selection">

        </motion.div>

        {/* More button */}
        <button onClick={handleMoreSelection} className="more-button">
          <div ref={moreButtonRef} className="image-container">
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
            key="honeygold"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="product-image"
          >
            <Image
              src="/assets/mobile_bottle_resized.png"
              alt="HoneyGold"
              width={250}
              height={800}
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
            key="honeygold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                exit={{opacity: 0, y: 20}}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSce9Aq-Lf26s4FfMOZkhPGPz8kzZ3gkFf8aS5yvZk1jYTdkTA/viewform?usp=header', '_blank')}


                id="button-handle-2"
                className="text-white p-2 border-2 border-gray-400 bg-[#51B150] active:bg-green-500  min-w-24">
                    <span>Get</span>
            </motion.button>
            )}
        {activeProduct === "more" && (
          
          <motion.button
              exit={{opacity: 0, y: 20}}
              onClick={() => setter(!refNo)}

                  id="button-handle-2"
                  className="text-white p-2 border-2 hover:bg-red-500 border-gray-400 bg-[#51B150] active:bg-green-500   min-w-24"
              >
                  <span>Join Newsletter</span>
          </motion.button>
          )}

        
      </AnimatePresence>

      
    </section>
  );
};

export default ProductShowcase;
