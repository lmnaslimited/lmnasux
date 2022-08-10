import React, { useState } from "react";
import Layout from "./../components/layout"
import Container from "../components/container"
import Image from "next/image";
function MyApp() {
    return (
      <div>
         <Layout>
  <Container>
    

  <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 xl:mx-auto flex flex-col md:flex-row">
  <div className="grid grid-cols-1 gap-24 shadow-md  mx-4 xl:mx-8 px-40 space-y-20 md:space-y-0 p-12">
                  <div className="col-span-1">
                  <div className="flex flex-row md:flex-col">
                                <div className="-mt-20 w-full">
                                    <div className="h-12 w-12 md:h-32 md:w-32 flex">
                                    <Image width="160" height="160" src="/contactus/contact-640x640.gif" alt="" /></div>
                                </div>
                                <div className="px-6 my-8  w-full inline-block">
                                    <h1 className="font-bold text-3xl text-center pb-1 uppercase">call us</h1>
                                    <a href="" ><p className="text-center mb-4 text-gray-800 text-lg pt-3 font-normal">(91) 98840-44470</p></a>
                                    
                            </div>
                  </div>
                  </div>
                  <div className="col-span-1">
                  <div className="flex flex-col">
                                <div className="-mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32 flex">
                                    <Image width="160" height="160" src="/contactus/mail-640x640.gif" alt="" /></div>
                                </div>
                                <div className="px-6 my-8 ">
                                    <h1 className="font-bold text-3xl text-center pb-1 uppercase">mail</h1>
                                    <p className="text-center mb-4 text-gray-800 text-lg pt-3 font-normal">hello@lmnas.com</p>
                                    
                                </div>
                  </div>
                  </div>
                  </div>
    <div className="lg:w-1/2 justify-center items-center md:w-1/2 bg-gray-100 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-3xl mb-1 font-bold uppercase title-font">Get in Touch with us</h2>
      <div className="flex flex-row w-3/4">
        <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">FirstName</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4 ml-6">
        <label for="name" className="leading-7 text-sm text-gray-600">LastName</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      </div>
      <div className="relative mb-4 w-3/4">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option></option>
          <option>ERP</option>
          <option>ECOMMERCE</option>
          <option>DIGITAL MARKETING</option>
          <option>FINANCE</option>
          <option>HR</option>
          <option>PAYROLL</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 flex items-center px-2 text-gray-700">Type your query
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
<div className="relative mb-4 w-3/4">
        <label for="name" className="leading-7 text-sm text-gray-600">Phone Number</label>
        <input type="number" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4 w-3/4">
        <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-purple-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-3/4">SUBMIT</button>
        </div>
  </div>
  <div className="grid grid-cols-3 my-24">
                  <div className="col-span-1">
  <div className="flex flex-col left-0 justify-left my-12">
                                <div className="-mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32 flex">
                                    <Image width="160" height="160" src="/contactus/support-640x640.gif" alt="" /></div>
                                </div>
                                <div className="px-6 my-8 ">
                                    <h1 className="font-bold text-3xl text-center pb-1 uppercase">SUPPORT ENQUIRES</h1>
                                    <p className="text-center mb-4 text-gray-800 text-lg pt-3 font-normal">Using any of our products and need help?
Get in touch with customer support</p>
                                    <div className="flex items-center">
                                        <h3 className=" ml-32 text-center text-lg lg:text-xl font-semibold text-indigo-700">Get Support</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                  </div>
                  <div className="col-span-1 border-l-2 border-r-2">
  <div className="flex flex-col left-0 justify-left my-12">
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
                  <div className="col-span-1">
  <div className="flex flex-col left-0 justify-left my-12">
                                <div className="-mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32 flex">
                                    <Image width="160" height="160" src="/contactus/parner-640x640.gif" alt="" /></div>
                                </div>
                                <div className="px-6 my-8 ">
                                    <h1 className="font-bold text-3xl text-center pb-1 uppercase">PARTNER ENQUIRIES</h1>
                                    <p className="text-center mb-4 text-gray-800 text-lg pt-3 font-normal">Looking for our partners?
Browse our partner directory</p>
<div className="flex items-center">
                                        <h3 className=" ml-32 text-center text-lg lg:text-xl font-semibold text-indigo-700">Find a partner</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                  </div>
                  </div>
</section>
        </Container>
         </Layout>
        </div>
    );
}

export default MyApp;
