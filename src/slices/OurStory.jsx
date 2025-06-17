"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
config.autoAddCss = false;


import React, { forwardRef } from "react";




import Image from "next/image";

import Clover from '../../public/assets/clover-clip.png'


 async function saveAction() {

    console.log('hey');
}


const OurStory = forwardRef((props, ref) => {







    return(

        <>

            {/* Dark Overlay */}
            <section className="our_story">

                <h1>Our Story</h1>
                <span className="font-bold">Lucky Tea was meant to shake things up...</span>
                <span>From bold branding to unique presentation, we're doing things differently. Created in Dallas, TX, Lucky Tea was brewed with one idea in mind: to create a flavor-focused beverage that challenges norms and pushes boundaries. Built for doers, our tea is brewed with 100% real leaves, locally sourced honey, all-natural sweetners, and bottled in fully recyclable material.</span>
                <span>But for us, tea is just the beginning. We're here to push the limits of what a beverage brand can do. Our vision goes beyond the bottle -- we're building a movement rooted in community. By 2030, we aim to launch a nonprofit dedicated to empowering the next generation through scholarships and youth activity centers, starting right here in our own backyard. <span className="font-bold"> It's more than just tea: this is a promise in a bottle. This is what it means to Get Lucky.</span></span>
                <Image className="text-[3rem]" src={Clover} alt="clover
                +23" ></Image>
                
            </section>

        
        
        </>



    )






})

export default OurStory;