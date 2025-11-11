"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from 'motion/react'
config.autoAddCss = false;



import React, { forwardRef } from "react";




import Image from "next/image";



 


const ProductSelector = ({ options = [] }) => {


    let optionsHolder = [];
    optionsHolder = options
    console.log(optionsHolder)
    console.log("Received options:", options);





    return(

        <>

            {/* Dark Overlay */}
            <motion.section initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.8}} className="our_story">

                <motion.div className="min-w-[400px] min-h-[500px] bg-green-600">
                    <span>{options[0]}</span>
                </motion.div>
            </motion.section>

        
        
        </>



    )






}

export default ProductSelector;