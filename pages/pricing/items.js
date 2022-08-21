
import React, { useEffect, useState } from "react";

export default function Home() {
        const [show1, setshow1] = useState(true);
        const [show2, setshow2] = useState(true);
        const [show3, setshow3] = useState(false);
    
    return (
        <>
            <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
                <div className="lg:flex items-center justify-between">
                    <div className=" lg:w-1/2 w-full">
                        <h1 role="heading" className="md:text-5xl text-3xl font-bold text-center leading-10 mt-3 text-gray-800">
                            Our pricing plan
                        </h1>
                        <p role="contentinfo" className="text-base leading-5 mt-5 text-gray-800 text-center xl:px-12">
                            We’re working on a suit of tools to make managing complex systems easier, for everyone for free. we can’t wait to hear what you think
                        </p>
                      
                    </div>
                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                        <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />
                        <div role="listitem" className="bg-white cursor-pointer shadow-lg rounded-lg p-8 relative z-30">
                            <div className="md:flex items-center justify-between">
                                <h2 className="text-2xl font-semibold leading-6 text-gray-800">FREE</h2>
                                <button className="text-xl font-bold bg-pink-50 p-4 md:mt-0 mt-4 leading-6 text-gray-800">Buy Now</button>
                            </div>
                            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Full access to all features and no credit card required</p>
                        </div>
                        <div role="listitem" className="bg-white cursor-pointer shadow-lg rounded-lg mt-3 flex relative z-30">
                            <div className="w-full p-8">
                                <div className="md:flex items-center justify-between">
                                    <h2 className="text-xl font-bold leading-6 text-gray-800">ADVANCED</h2>
                                    <button className="text-xl font-bold bg-pink-50 p-4 md:mt-0 mt-4 leading-6 text-gray-800">Buy Now</button>
                                </div>
                                <div className="flex justify-center items-center">
                                <button aria-label="show menu" onClick={() => setshow1(!show1)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 text-white hover:text-gray-400">
                                    <svg className={`fill-stroke ${show1 ? "block" : "hidden"}`} width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 5L5 1L1 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg className={`fill-stroke ${show1 ? "hidden" : "block"}`} width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div id="menu1" className={` flex-col jusitfy-start items-start mt-12 ${show1 ? "flex" : "hidden"}`}>
                            <div>
                                <p className="tracking-tight text-xs leading-3 text-gray-800">MK617</p>
                            </div>
                            <div className="mt-2">
                                <p className="tracking-tight text-base font-medium leading-4 text-gray-800">Beige brown</p>
                            </div>
</div></div>
                        </div>
                        <div role="listitem" className="bg-white cursor-pointer shadow-lg rounded-lg p-8 relative z-30 mt-7">
                            <div className="md:flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold leading-6 text-gray-800">PREMIUM</h2>
                                <button aria-label="show menu" onClick={() => setshow1(!show1)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 text-white hover:text-gray-400">
                                    <svg className={`fill-stroke ${show1 ? "block" : "hidden"}`} width={6} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 5L5 1L1 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg className={`fill-stroke ${show1 ? "hidden" : "block"}`} width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div id="menu1" className={` flex-col jusitfy-start items-start mt-12 ${show1 ? "flex" : "hidden"}`}>
                            
                            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Unlimited products features and dedicated support channels</p>
                        </div>
                        <button className="text-xl font-bold bg-pink-50 -ml-4 p-4 md:mt-0 mt-4 leading-6 text-gray-800">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}