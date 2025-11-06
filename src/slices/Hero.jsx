"use client"

import React, { useRef, memo } from "react";
import Image from "next/image";
import { motion, useInView } from 'motion/react';
import Lucky from '../../public/assets/lucky-logo-demo.png'
import Lucky2 from '../../public/assets/lucky_logo_nobg.png'
import Slogan2 from '../../public/assets/slogan2.png'

const Hero = React.memo(function Hero() {

    

  return (

    <div id="container">
        <section className="flex border flex-col justify-center text-center gap-6 pt-[3rem] pb-[3rem] min-h-screen items-center">


            <motion.div>
                <Image priority className="opacity-100" id="leadlogo" alt="Lucky Liquid Logo" width={300} src={Lucky}/>
            </motion.div>
            <Image priority className="opacity-100" id="secondlogo" alt="Lucky Liquid Leperchaun Logo" width={300} src={Lucky2} />

            <div className="text-3xl text-black font-[900] flex flex-col">
            <Image priority id='slogan' alt="Lucky Liquid Leperchaun Logo" width={300} src={Slogan2} />
            


            </div>

        </section>

    </div>
  );
});

export default Hero;
