"use client";
import React, { lazy } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import localFont from "next/font/local";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {RemoveScroll} from 'react-remove-scroll';
import useMediaQuery from '../hooks/useMediaQuery'
import Lucky from '../../public/assets/lucky-logo-demo.png'


gsap.registerPlugin(useGSAP);


export default function Home() {

  const isDesktop = useMediaQuery('(min-width: 460px)');

  useGSAP(() => {
    gsap.from('#header', {y:-320, delay: 2 })
    gsap.from('#title', {opacity: 0})
    gsap.from('#construction', {y:300, opacity: 0, delay: 4})
    gsap.to('#title', {opacity: 1, delay: 3})
    gsap.to('#header', {y: 0, delay: 2, opacity: 1})
    gsap.to('#construction', {y: isDesktop? -200 : 0, opacity: 1, delay: 4})
  })


  return (
   <>
   <RemoveScroll>
    <section className="flex flex-col bg-gradient-to-b from-honeygold from-80% to-[#01a237]  h-[100vh] items-center justify-center gap-2">




   
   <div id="header" className="fixed font-juju opacity-0 top-10 uppercase text-4xl text-honeygold">
    <Image width={150} height={100} alt="LuckyLiquid Beverage" src={Lucky} />
   </div>
   <div className="p-3 text-center text-[#01a237] w-[17rem] text-2xl flex flex-col justify-center items-center">
    
    <span id="title" className='opacity-0 font-main text-5xl w-[20rem] lg:mt-[-7rem]'>"It's actually good!"</span>
    <span id="construction" className='lg:mt-[18rem] mt-[14rem] font-mono opacity-0'>Our site is currently under construction. </span>
   </div>
   {/* Call to action button */}

  
   </section>

   </RemoveScroll>
 
   </>
  );
}
