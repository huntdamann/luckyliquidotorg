"use client"
import { containerVariants, itemVariants, buttonVariants } from './hero_Content'
import { motion, AnimatePresence }  from 'motion/react'
import Image from 'next/image'
import '../../css/Hero.module.css'

export default function HeroPage ({open, setOpen}) {


return (


    <div id="container">
    <motion.section
      className="flex  flex-col justify-center text-center gap-9 pt-[5rem]  min-h-screen items-center"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Main Logo */}
        <Image priority  className="opacity-100" id="leadlogo" alt="Lucky Liquid Logo" width={300} height={100} src="/assets/lucky-logo-demo.webp" quality={50}/>

      {/* Secondary Logo */}
        <Image priority className="opacity-100" id="secondlogo" alt="Lucky Liquid Leperchaun Logo" width={300}  height={100} src='/assets/lucky_logo_nobg.webp' quality={50} />

      {/* Slogan */}
      <motion.div variants={itemVariants} initial="hidden" animate="show" className="text-3xl text-black font-[900] flex flex-col">
        <Image priority id='slogan' alt="Lucky Liquid Slogan" width={300} height={50} src='/assets/slogan2.png' />
      </motion.div>

       {/* Join Button */}
      <AnimatePresence>
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
        
    </AnimatePresence>
    </motion.section>
</div>
)

}