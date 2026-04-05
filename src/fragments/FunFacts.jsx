import React from "react";
import Image from 'next/image'


export default function FunFacts( {number, info} ) {


    const facts = [
        {
            number: "1.",
            info: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi."
        },
        {
            number: 2,
            info: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi."
        },
        {
            number: 3,
            info: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi."
        },
    ]


    return (

        <>
            <div className="info-container">
               <Image src='/assets/clover.png' width={30} height={20} alt="Lucky Liquid Alternative Logo" />

                <div className="fact-information">
                    {info}
                </div>
            </div>
        
        
        </>
    )
    
}