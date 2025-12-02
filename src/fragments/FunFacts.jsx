import React from "react";



export default function FunFacts() {


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
                <div className="number">
                    {facts[0].number}
                </div>
                <div className="circle"></div>
                <div className="fact-information">
                    {facts[1].info}
                </div>
            </div>
        
        
        </>
    )
    
}