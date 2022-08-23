import Image from "next/image";

import React, { useEffect, useState } from "react";
export default function Option({price_title, price_subTitle, linkName, href}){
    const [show1, setshow1] = useState(true);
    const [show2, setshow2] = useState(true);
    const [show3, setshow3] = useState(false);
    return(
        <div role="listitem" className="bg-th-background-secondary cursor-pointer shadow-lg rounded-lg p-8 relative z-30 mt-7">
                    <div className="md:flex items-center justify-between mb-4">
                        <h2 className="text-2xl uppercase font-bold leading-6 text-th-text-dark">{price_title}</h2>
                        <button aria-label="show menu" onClick={() => setshow1(!show1)} className="mt-4 md:mt-1 py-2.5 px-2 bg-gray-800 text-white hover:text-gray-400">
                            <svg className={`fill-stroke ${show1 ? "block" : "hidden"}`} width={6} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5L5 1L1 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg className={`fill-stroke ${show1 ? "hidden" : "block"}`} width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu1" className={` flex-col jusitfy-start items-start  ${show1 ? "flex" : "hidden"}`}>
                    
                    <p className="md:w-80 text-base leading-6 py-2 text-th-text-medium">{price_subTitle}</p>
                </div>
               <a href={href}><button className="text-md font-normal bg-th-background-cta p-2 md:mt-0 mt-4 leading-6 text-th-text-light">{linkName}</button></a> 
                </div>
    )
}