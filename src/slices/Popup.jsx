"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
config.autoAddCss = false;
import Lucky2 from '../../public/assets/lucky_logo_nobg.png'

import Title from '../../public/assets/new_word.png'
import React, { forwardRef, useState } from "react";

import Success from '../slices/Success'

import Lucky from '../../public/assets/lucky-logo-demo.png'
import PhotoNews from '../../public/assets/IMG_9895.jpeg'
import Image from "next/image";



 async function saveAction() {

    console.log('hey');
}


const Popup = ({ refPop, refOut, refNo, setter}) => {


    const [ email, setEmail] = useState('')
    const [ status, setStatus ] = useState(null)

    const handleUserSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/subscriber', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {'Content-Type': 'application/json'},
        })
        const data = await res.json();
        setStatus(data.message)
    }





    return(

        <>

            {/* Pop up Container */}
            <div id="popup-container" ref={refPop} className="border-2 shadow-md text-black bg-[#51B150] gap-[3rem]  text-center  rounded-xl absolute justify-between  items-center z-[1000]  border-green-700 flex flex-row top-[10%] left-[51%]">

              <div className="h-full w-full flex items-center justify-center flex-row">




                <div className="image">
                    <Image className="w-full rounded-2xl" alt="Product-Photo" src={PhotoNews} width={300} />
                </div>

                <div onClick={() => setter(!refNo) } className={`fixed ${status? 'opacity-0' : 'opacity-1'} top-1 right-5 cursor-pointer`}>
                    No, Thanks
                </div>

                <div className="flex flex-col text-center items-center justify-center gap-3">


                <Image alt='Picture' src={Lucky} width={300} height={150}></Image>
                <Image className="" id="secondlogo" alt="Lucky Leperchaun Logo" width={150} src={Lucky2} />
                <Image className="" id="title-one" alt="We're Brewing Something Special" width={350} src={Title} />


                <span className="w-[16rem] font-mono">
                    Join the Lucky list and be entered for a chance to win <span className="text-honeygold font-bold">$100!</span>  

                </span>

                <form onSubmit={handleUserSubmit} className=" rounded-md flex gap-2 justify-center items-center w-[15rem]" action="">
                    <input className="h-full w-full shadow-md rounded-md p-2" type="email" name="" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required id="" />
                    <button id="button-submit" type="submit" className="rounded-md bg-green-400 shadow-md h-[2rem] w-[7rem]"><span className="">Get Lucky</span></button>

                    {status && <Success set={setter} refNo={refNo} />}
                </form>
                

                <span>Winner will be announced on July 31st, 2025</span>

                
                
                <div className='triangle'></div>



                </div>


                </div>



                 {/* Dark Overlay */}
           
            </div>

            
           

        
        
        
        </>



    )






}

export default Popup;