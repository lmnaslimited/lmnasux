import React from "react";
import Image from "next/image";
import Container from "./container";
export default function Pricing(pricing) {
    return (
      <Container>
            <div className="bg-gradient-to-b from-blue-50 via-white to-white my-24">
                <section className="text-gray-600 body-font overflow-hidden justify-center items-center ">
  <div className=" ">
    <div className="flex flex-col md:flex-row justify-center">
     
      <div className="p-4 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-gray-500 flex flex-wrap flex-col relative overflow-hidden">
          <h2 className="text-md tracking-widest title-font mb-1 font-medium">E-COMMERCE</h2>
          <h1 className="text-5xl text-gray-800 leading-none flex items-center pb-4 mb-4 border-b border-gray-500">
           <Image alt="" width="150" height="150" src="/pricing/coin-640x640.gif" className="w-24 h-24"></Image> <span>72</span>
            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
          </h1>
          <button className="flex items-center mt-auto text-white bg-blue-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p className="text-xs text-gray-500"></p>
        </div>
      </div>
      <div className="p-4 w-full ">
        <div className="h-full p-6 rounded-lg border-2 border-gray-500 flex flex-col relative overflow-hidden">
          <h2 className="text-md tracking-widest title-font mb-1 font-medium">ERP</h2>
          <h1 className="text-5xl text-gray-800 leading-none flex items-center pb-4 mb-4 border-b border-gray-500">
          <Image alt="" width="150" height="150" src="/pricing/coin-640x640.gif" className="w-24 h-24"></Image> <span>72</span>
            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
          </h1>
          <button className="flex items-center mt-auto text-white bg-blue-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p className="text-xs text-gray-500"></p>
        </div>
      </div>
      <div className="p-4 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-gray-500 flex flex-col relative overflow-hidden">
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">DIGITAL MARKETING</h2>
          <h1 className="text-5xl text-gray-800 leading-none flex items-center pb-4 mb-4 border-b border-gray-500">
          <Image alt="" width="150" height="150" src="/pricing/coin-640x640.gif" className="w-24 h-24"></Image> <span>72</span>
            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
          </h1>
          <button className="flex items-center mt-auto text-white bg-blue-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p className="text-xs text-gray-500"></p>
        </div>
      </div>
    </div>
  </div>
</section>
               
                </div>
                </Container>
      
    );
}
