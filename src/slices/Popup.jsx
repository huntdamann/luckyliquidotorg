"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
config.autoAddCss = false;

import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "motion/react";

import Image from "next/image";
import Success from "../slices/Success";

import Lucky2 from "../../public/assets/lucky_logo_nobg.png";
import Title from "../../public/assets/new_word.png";
import Lucky from "../../public/assets/lucky-logo-demo.png";
import PhotoNews from "../../public/assets/IMG_0438.jpeg";

const Popup = ({ refPop, refOut, refNo, setter }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [auto, autoOpen] = useState(false);

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/subscriber", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, resubscribe: true }),
    });
    const data = await res.json();
    setStatus(data.message);
  };

  // // Automatically open after 10s
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     autoOpen(true);
  //   }, 10000);
  //   return () => clearTimeout(timer);
  // }, [refNo]);

  // Framer Motion animation variants
  const popupVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      zIndex: -1,
      pointerEvents: "none",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      scale: 1,
      zIndex: 999,
      pointerEvents: "auto",
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
  };
  function handleTap(e) {
    const el = e.currentTarget;
    el.classList.add("tapped-close");
    setTimeout(() => {
      el.classList.remove("tapped-close");
    }, 150);  // just long enough to see the flash
  }

  return (
    <AnimatePresence>

    {refNo && (

<motion.div
ref={refPop}
id="popup-container"
variants={popupVariants}
initial="hidden"
animate={refNo ? "visible" : ""}
exit="hidden"
style={{willChange: "opacity, transform"}}
className="border-2 shadow-md z-50 text-black bg-[#51B150]  gap-[9rem] text-center rounded-xl fixed justify-between items-center border-green-700 left-5 flex flex-row"
>
<div className="h-full w-full flex items-center gap-[8rem] justify-center flex-row">
  {/* Product Photo */}
  <div className="image min-w-[40%] min-h-[60%] rounded-2xl overflow-hidden">
  <Image
  src={PhotoNews}
  alt="Product Photo"
  width={500}
  height={300}
  priority={false}
  quality={70}
  loading="lazy"
/>

  </div>

  {/* Close Button */}
  <div
    onClick={() => setter(!refNo)}
    onTouchStart={handleTap}

    className="close-popup"
  >
    <IoCloseSharp />
  </div>

  {/* Popup Text */}
  <div className="flex flex-col text-center items-center justify-center gap-3">
    <Image alt="Picture" src={Lucky} width={300} height={150} />
    <Image alt="Lucky Logo" width={150} src={Lucky2} />
    <Image alt="Title" width={350} src={Title} />

    <span className="w-[16rem] font-mono">
      Join the Lucky List and unlock exclusive perks
    </span>

    <form
      onSubmit={handleUserSubmit}
      className="rounded-md flex gap-2 justify-center items-center w-[15rem]"
    >
      <input
        className="h-full w-full shadow-md rounded-md p-2"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button
        id="button-submit"
        type="submit"
        className="rounded-md bg-green-400 active:bg-green-600 shadow-md h-[2rem] lg:w-[10rem] w-[7rem]"
      >
        <span>Get Lucky</span>
      </button>

      {status && <Success set={setter} refNo={refNo} />}
    </form>

    <span>Discounts, Special Flavors, Events, and More</span>
  </div>
</div>
</motion.div>


    )}

   
    </AnimatePresence>

  );
};

export default Popup;
