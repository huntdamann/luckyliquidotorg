"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faBluesky, faTiktok } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;


import React, { forwardRef } from "react";



import Lucky from '../../public/assets/lucky-logo-demo.png'
import Image from "next/image";



 async function saveAction() {

    console.log('hey');
}


const SocialPanel = () => {







    return(

        <>

           <div className="border text-white bg-black ">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faBluesky} />
            <FontAwesomeIcon icon={faTiktok} />



           </div>

            
           

        
        
        
        </>



    )






}

export default SocialPanel;