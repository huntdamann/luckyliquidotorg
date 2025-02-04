"use client";
import Image from "next/image";
import { AuroraBackground } from "@/components/aurorabackground";
import localFont from "next/font/local";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {RemoveScroll} from 'react-remove-scroll';

gsap.registerPlugin(useGSAP);



export default function Home() {

  useGSAP(() => {
    gsap.from('#header', {y:-320, delay: 2 })
    gsap.from('#title', {opacity: 0})
    gsap.from('#construction', {y:300, opacity: 0, delay: 4})
    gsap.to('#title', {opacity: 1, delay: 3})
    gsap.to('#header', {y: 0, delay: 2, opacity: 1})
    gsap.to('#construction', {y: 0, opacity: 1, delay: 4})
  })
  return (
   <>
   <RemoveScroll>
   <AuroraBackground>
   <div id="header" className="fixed opacity-0 top-10 uppercase text-3xl text-honeygold"><h1>Lucky</h1></div>
   <div className="p-3 text-center text-honeygold w-[17rem] text-2xl flex flex-col justify-center items-center">
    
    <span id="title" className='opacity-0 font-main text-5xl w-[20rem]'>"It's actually good!"</span>
    <span id="construction" className="mt-[14rem] font-mono">Our site is currently under construction. </span>
   </div>
   {/* Call to action button */}

   </AuroraBackground>
   </RemoveScroll>
 
   </>
  );
}
