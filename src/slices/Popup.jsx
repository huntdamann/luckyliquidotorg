"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
config.autoAddCss = false;


import React, { forwardRef } from "react";



import Lucky from '../../public/assets/lucky-logo-demo.png'
import Image from "next/image";



 async function saveAction() {

    console.log('hey');
}


const Popup = ({ refPop, refOut, refNo, setter}) => {







    return(

        <>

            {/* Pop up Container */}
            <div id="popup-container" ref={refPop} className="border gap-[3rem] text-center opacity-0 rounded-xl bg-white absolute p-[3rem] justify-between  items-center   border-green-700 flex flex-col min-h-[20rem]">

                <Image alt='Picture' src={Lucky} width={150} height={150}></Image>
                    
                <span className="text-xl font-mono">Thank you for your interest in our brand!</span>

                <span className="w-[16rem] font-mono">We're working on creating a unique experience that brings a touch of <span className="font-bold text-green-600">luck</span> into your life. Sign up for our email list below to be among the first to know when it's ready for you.  

                </span>

                

                <button className=" shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-1  ">Sign up</button>
                <div className='triangle'></div>

            </div>

            
            {/* Dark Overlay */}
            <section ref={refOut} className=" text-white bg-black absolute top-0 w-full h-screen opacity-0">
                <button id="cancel" onClick={() => setter(!refNo) } className=" fixed bottom-[15%] left-[40%]">No, thanks</button>
            </section>

        
        
        
        </>



    )






}

export default Popup;