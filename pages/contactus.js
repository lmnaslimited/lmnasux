import React, { useState } from "react";
import Layout from "./../components/layout"
import Container from "../components/container"
import Image from "next/image";
function MyApp() {
    return (
      <div>
         <Layout>
  <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-24 md:mt-36 gap-8 mx-4 xl:mx-8 space-y-20 md:space-y-0">
                  <div className="col-span-1 bg-pink-50 ">
                  <div className="flex flex-col">
                                <div className="-mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32 flex">
                                    <Image width="160" height="160" src="/contactus/contact-640x640.gif" alt="" /></div>
                                </div>
                                <div className="px-6 my-8 ">
                                    <h1 className="font-bold text-3xl text-center pb-1 uppercase">call us</h1>
                                    <a href="" ><p className="text-center mb-4 text-gray-800 text-lg pt-3 font-normal">(91) 98840-44470</p></a>
                                    
                            </div>
                  </div>
                  </div>
                  <div className="col-span-1 bg-pink-50">
                  <div className="flex flex-col">
                                <div className="-mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32 flex">
                                    <Image width="160" height="160" src="/contactus/address-640x640.gif" alt="" /></div>
                                </div>
                                <div className="px-6 my-8 ">
                                    <h1 className="font-bold text-3xl text-center pb-1 uppercase">address</h1>
                                    <p className="text-center mb-4 text-gray-800 text-lg pt-3 font-normal">#B206, Radiance Royal, Poonthamalle, Chennai - 56</p>
                                    
                                </div>
                  </div>
                  </div>
                  <div className="col-span-1 bg-pink-50 hover:transform hover:scale-105">
                  <div className="flex flex-col">
                                <div className="-mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32 flex ">
                                    <Image width="160" height="160" src="/contactus/mail-640x640.gif" alt="" /></div>
                                </div>
                                <div className="px-6 my-8 ">
                                    <h1 className="font-bold text-3xl text-center pb-1 uppercase">mail</h1>
                                    <p className="text-center mb-4 text-gray-800 text-lg pt-3 font-normal">hello@lmnas.com</p>
                            </div>
                       </div>
                       </div>
                       </div>
                       <section className="text-gray-600 body-font relative bg-white">
  <div className="container py-12 lg:-ml-32 flex flex-col lg:flex-row bg-white">
    <div className="lg:w-full md:w-full bg-white rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
     <Image src="/contactus/working-women6123x4082.png" width="6000" height="4000" alt="" />
    </div>
    <div className="lg:w-1/2 md:w-full bg-blue-50 flex flex-col md:ml-auto w-full md:py-8 md:px-12 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
        </Container>
         </Layout>
        </div>
    );
}

export default MyApp;
