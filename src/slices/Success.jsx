"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
config.autoAddCss = false;
import Lucky2 from '../../public/assets/lucky_logo_nobg.png'

import Title from '../../public/assets/new_word2.png'
import React, { forwardRef, useState } from "react";



import Lucky from '../../public/assets/lucky-logo-demo.png'
import PhotoNews from '../../public/assets/IMG_9895.jpeg'
import Image from "next/image";


const Success = ({ set, refNo }) => {




    return(

        <>

            {/* Success Container */}
            <div id="success-container"  className="border-2 shadow-md text-black bg-[#51B150] gap-[3rem]  text-center  rounded-xl absolute  p-[4rem] justify-between  items-center z-[1000]   border-green-700 flex flex-row min-h-[20rem] top-[10%] left-[50%]">

               

                <div onClick={() => set(!refNo) } className="fixed top-1 right-5 cursor-pointer">
                    Close
                </div>

                <div className="flex flex-col text-center items-center justify-center gap-3">


                <Image alt='Picture' src={Lucky} width={300} height={150}></Image>
                <Image className="" id="secondlogo" alt="Lucky Leperchaun Logo" width={150} src={Lucky2} />
                <Image className="" id="title-one" alt="We're Brewing Something Special" width={350} src={Title} />



               
                


                
                



                </div>

           
            </div>

            
           

        
        
        
        </>



    )






}

export default Success;