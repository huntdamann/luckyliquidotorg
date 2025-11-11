"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from 'motion/react'
config.autoAddCss = false;

import ProductSelector from '../../slices/ProductSelector'

import React, { forwardRef } from "react";




import Image from "next/image";



 async function saveAction() {

    console.log('hey');
}


const Products = forwardRef((props, ref) => {

    const productOptions = ["Tea", "Shirts"];






    return(

        <>

            {/* Dark Overlay */}
            <motion.section initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.8}} className="our_story">

                <ProductSelector options={productOptions} />
            </motion.section>

        
        
        </>



    )






})

export default Products;