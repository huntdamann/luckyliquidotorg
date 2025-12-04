'use client'

import { motion } from 'motion/react'


export default function AnimatedCharacters({ text }) {

    const chars = text.split("");
    console.log(chars)

    const container = {
        hidden: { opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        }
    }

    const child = {
        hidden: {
            opacity: 0,
            y: "0.25em"
        },
        visible: {
            opacity: 1,
            y: '0em',
            transition: {
                duration: 0.3,
                ease: "easeOut",
            }
    
        }
    }





    return (
        <>

            <motion.span
            
            className="animated-word"           
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ display: "inline-flex", color: "#6D895B"}}
            >
                {chars.map((char, i) => (
                    <motion.span
                    key={i}
                    variants={child}
                    style={{display: "inline-block",
                    }}
                    >

                        { char === " " ? "\u00A0" : char}
                    </motion.span>



                ))}

            </motion.span>
        </>
    )
}


 

