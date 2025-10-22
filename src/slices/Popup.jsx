"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
config.autoAddCss = false;
import Lucky2 from '../../public/assets/lucky_logo_nobg.png'

import Title from '../../public/assets/new_word.png'
import React, { forwardRef, useEffect, useState } from "react";

import Success from '../slices/Success'
import gsap from "gsap";

import Lucky from '../../public/assets/lucky-logo-demo.png'
import PhotoNews from '../../public/assets/IMG_9895.jpeg'
import Image from "next/image";



 async function saveAction() {

    console.log('hey');
}


const Popup = ({ refPop, refOut, refNo, setter}) => {


    const [ email, setEmail] = useState('')
    const [ status, setStatus ] = useState(null)
    const [ auto, autoOpen ] = useState(false)




    const handleUserSubmit = async (e) => {
        e.preventDefault();
        console.log('code gets here')
        const res = await fetch('/api/subscriber', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify({
              email,
              resubscribe: true,
          })
        })
        const data = await res.json();
        console.log(data.message)
        setStatus(data.message)
    }
    useEffect(() => {
        if(auto) {
          gsap.to(refPop.current, {zIndex:999, opacity: 1, duration: 0.6, ease: "sine.out"})
          
        } else {
          gsap.to(refPop.current, {
            
            opacity: 0,
            duration: 0.5,
            ease: "sine.in",
            zIndex: -1,
          })
          
         
         
        }
      }, [auto])



      useEffect(() => {
        
        // set a timeout to change the state after 10 seconds
        const timer = setTimeout(() => {
          autoOpen(true);
        }, 10000); // 10 seconds in milliseconds
    
      
        // cleanup in case component unmounts before timeout finishes
        return () => clearTimeout(timer);
      }, [refNo]);

    return(

        <>


          
                       
            <div id="popup-container" ref={refPop} className="border-2  shadow-md text-black bg-[#51B150] gap-[9rem]  text-center  rounded-xl absolute justify-between  items-center z-[1000]  border-green-700 flex flex-row top-[10%] left-[51%]">

              <div className="h-full w-full flex items-center gap-8 justify-center flex-row">




                <div className="image">
                    <Image className="w-full rounded-2xl" alt="Product-Photo" src={PhotoNews} width={300} />
                </div>

                <div onClick={() => setter(!refNo) } className={`fixed ${status? 'opacity-0' : 'opacity-1'}  top-1 right-5 cursor-pointer`}>
                    No, Thanks
                </div>

                <div className="flex flex-col text-center items-center justify-center gap-3">


                <Image alt='Picture' src={Lucky} width={300} height={150}></Image>
                <Image className="" id="secondlogo" alt="Lucky Leperchaun Logo" width={150} src={Lucky2} />
                <Image className="" id="title-one" alt="We're Brewing Something Special" width={350} src={Title} />


                <span className="w-[16rem] font-mono">
                    Join the Lucky List and unlock exclusive perks 

                </span>

                <form onSubmit={handleUserSubmit} className=" rounded-md flex gap-2 justify-center items-center w-[15rem]" action="">
                    <input className="h-full w-full shadow-md rounded-md p-2" type="email" name="" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required id="" />
                    <button id="button-submit" type="submit" className="rounded-md bg-green-400 shadow-md h-[2rem] lg:w-[10rem] w-[7rem]"><span className="">Get Lucky</span></button>

                    {status && <Success set={setter} refNo={refNo} />}
                </form>
                

                <span>Discounts, Special Flavors, Events, and More</span>

                
                
                <div className='triangle'></div>



                </div>


                </div>



           
            </div>

    

        
        
        
        </>



    )






}

export default Popup;