"use client";

import React, { useState, useRef, useEffect } from "react";
import Testimonials from "./Testimonials";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import useMediaQuery from "../hooks/useMediaQuery";


const CTA = () => {
    return (
        <>
            <section style={{height: "auto", minHeight: "70vh", padding: "30px" , background:"#826437", background: "linear-gradient(180deg, rgb(64, 130, 55) 0%, rgba(209, 160, 84, 1) 98%);" }}>
                <h2 className="font-[var(--font-fredoka)]">Apparel</h2>
                <Testimonials />
            </section>
        
        </>

    )
};

export default CTA;
