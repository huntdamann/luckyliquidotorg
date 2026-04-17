"use client"
import React, {useRef} from 'react'
import { containerVariants, itemVariants, buttonVariants } from './hero_Content'
import { motion, AnimatePresence }  from 'motion/react'
import Image from 'next/image'
import '../../css/Hero.module.css'
import InteractiveGradient from '../threejs/webgl/InteractiveGradient'
import GradientWithGUI from '../threejs/webgl/InteractiveGradient'


export default function HeroPage ({contentRef ,gradient ,open, setOpen}) {
  
  

return (


    <div 
    id="container"  >
    <motion.section
      className=""
      variants={containerVariants}
      initial="hidden"
      animate="show"
      style={{ position: "relative"}}
    >
      <div ref={gradient} className='relative'>
{/* 
      <GradientWithGUI
            /> */}

      </div>
     
      {/* Main Logo */}
      <div ref={contentRef} style={{position: "absolute", zIndex: "999", top: "10%", transform: "translateX(-50%)"}} className='absolute z-50 left-1/2 flex flex-col items-center gap-10'>

        <Image priority  className="opacity-100 " id="leadlogo" alt="Lucky Liquid Logo" width={300} height={100} src="/assets/lucky-logo-demo.webp" quality={50}/>
        <Image priority className="opacity-100" id="secondlogo" alt="Lucky Liquid Leperchaun Logo" width={300}  height={100} src='/assets/lucky_logo_nobg.webp' quality={50} />
          <button
            key="join-button"
            id="button-handle-2"
            onClick={() => setOpen(!open)}

            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`text-white p-2 border-2 border-gray-400 bg-[#51B150] active:bg-green-500 active:scale-95 rounded-md w-24 animate-bounce z-[500] transform -translate-x-1/2`}
          >
            <div className="flex justify-center items-center text-white">
              <span>Join</span>
            </div>
          </button>
        
        {/* <motion.div variants={itemVariants} initial="hidden" animate="show" className="text-3xl text-black font-[900] flex flex-col">
        <Image priority id='slogan' alt="Lucky Liquid Slogan" width={300} height={50} src='/assets/slogan2.png' />
      </motion.div> */}

      </div>

      {/* Secondary Logo */}

      {/* Slogan */}
      {/* <motion.div variants={itemVariants} initial="hidden" animate="show" className="text-3xl text-black font-[900] flex flex-col">
        <Image priority id='slogan' alt="Lucky Liquid Slogan" width={300} height={50} src='/assets/slogan2.png' />
      </motion.div> */}

       {/* Join Button */}
      {/* <AnimatePresence>
          <motion.button
            key="join-button"
            id="button-handle-2"
            onClick={() => setOpen(!open)}

            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`text-white p-2 border-2 border-gray-400 bg-[#51B150] active:bg-green-500 active:scale-95 rounded-md min-w-24 animate-bounce z-[500] transform -translate-x-1/2`}
          >
            <div className="flex justify-center items-center text-white">
              <span>Join</span>
            </div>
          </motion.button>
        
    </AnimatePresence> */}
    </motion.section>
</div>
)

}