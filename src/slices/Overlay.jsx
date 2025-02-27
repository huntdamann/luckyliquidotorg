"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
config.autoAddCss = false;


import React, { forwardRef } from "react";




import Image from "next/image";



 async function saveAction() {

    console.log('hey');
}


const Overlay = forwardRef((props, ref) => {







    return(

        <>

            {/* Dark Overlay */}
            <section>
                <span>Background Overlay</span>
            </section>

        
        
        </>



    )






})

export default Overlay;