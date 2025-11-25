"use client";

import Image from "next/image";
import '../../css/BackgroundClover.css'
import { motion } from 'motion/react';



export default function UpdateOurStory() {

    // Variants for staggered animation
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.7, // Delay between children animations
      }
    }
  };

  const itemVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.17, 0.55, 0.55, 1], // replaces "easeOut"
    },
  },
};


  return (
    <div className="ocean">
        
        <main className="flex flex-col items-center  gap-3 p-5">

        <h1>Our Story</h1>
            <span className="font-bold">
              Lucky Tea was meant to shake things up...
            </span>
            <span>
              From bold branding to unique presentation, we're doing things
              differently. Created in Dallas, TX, Lucky Tea was brewed with one
              idea in mind: to create a flavor-focused beverage that challenges
              norms and pushes boundaries. Built for doers, our tea is brewed
              with 100% real leaves, locally sourced honey, all-natural
              sweeteners, and bottled in fully recyclable material.
            </span>
            <span>
              But for us, tea is just the beginning. We're here to push the
              limits of what a beverage brand can do. Our vision goes beyond the
              bottle -- we're building a movement rooted in community. By 2030,
              we aim to launch a nonprofit dedicated to empowering the next
              generation through scholarships and youth activity centers,
              starting right here in our own backyard.{" "}
              <span className="font-bold">
                It's more than just tea: this is a promise in a bottle. This is
                what it means to Get Lucky.
              </span>
            </span>
            <div className="mt-14">
            <Image alt="Lucky Logo" width={150} height={100} src='/assets/lucky_logo_nobg.png' />

            </div>



            


        </main>
         


    
        <div className="bubble bubble--1">
            <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            />
        </div>
        <div className="bubble bubble--2"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--3"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--4"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--5"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--6"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            />
            </div>
        <div className="bubble bubble--7"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--8"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--9"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--10"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--11"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--12"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
</div>
  );
}
