import React from "react";
import Image from "next/image";
import Container from "../../components/container";

export default function Manufacturing(){
    return (
        <section>
            <Container>
        <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
                <div className="lg:w-3/4 xl:w-full flex flex-col justify-start items-start">
                    <div>
                    <div className="flex flex-row ">
                        <div className="w-24 h-24 md:w-32 md:h-32">
                                    <Image alt="" width="160" height="160"  src="/manufacturing/billofmaterials-640x640.gif"></Image>
                                    </div>           
                                    <h1 className="text-xl md:text-2xl xl:text-3xl font-bold uppercase mt-4 md:mt-14">Bill of material (BOM)</h1>
                                    </div>
                    </div>
                    <div className="mt-4 xl:w-3/4">
                        <p className="text-base leading-6 text-gray-600">A bill of material is at the heart of any cloud manufacturing software, and a well-defined BOM ensures robustness and accuracy. ERPNexts BOM is hierarchical, with the finished product at the top. It also includes product codes, part descriptions, quantities, costs and additional specifications.</p>
                    </div>
                    <div className="mt-16 w-full">
                        <button className="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700">
                            <p className="text-xl font-medium leading-5">See More</p>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66663 16H25.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 21.3333L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 10.6667L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className=" flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0 lg:w-3/4 xl:w-full">
                    <div>
                        <img className="hidden lg:block" src="https://i.ibb.co/61TfVVW/olena-sergienko-gx-KL334b-UK4-unsplash-1.png" alt="sofa" />
                        <img className="w-80 sm:w-auto lg:hidden" src="https://i.ibb.co/QvxmJjB/olena-sergienko-gx-KL334b-UK4-unsplash-1-1.png" alt="sofa" />
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
                        <div>
                            <img className="hidden lg:block" src="https://i.ibb.co/1MY5P3y/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-1.png" alt="chairs" />
                            <img className="w-80 sm:w-auto lg:hidden" src="https://i.ibb.co/r0rvcCh/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png" alt="chairs" />
                        </div>
                        <div>
                            <img className="hidden lg:block" src="https://i.ibb.co/9N7ZX2C/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="chairs" />
                            <img className="w-80 sm:w-auto lg:hidden" src="https://i.ibb.co/0BFt400/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-2.png" alt="chairs" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8 my-40">
            <div className="lg:flex items-center justify-between">
            <div className="lg:w-full lg:mt-0 mt-8 hidden md:block">
                    <div className="w-full h-full bg-red-200">
                        <img src="https://i.ibb.co/cbyDY74/pexels-max-vakhtbovych-6782351-1-1.png" alt="apartment design" className="w-full sm:block hidden" />
                        <img src="https://i.ibb.co/ZVPGjGJ/pexels-max-vakhtbovych-6782351-1.png" alt="apartment design" className="sm:hidden block w-full" />
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                        <img src="https://i.ibb.co/4Jrp5TB/pexels-max-vakhtbovych-6782370-1.png" className="w-full" alt="kitchen" />
                        <img src="https://i.ibb.co/0Jv3FSy/pexels-max-vakhtbovych-6436799-1-1.png" className="w-full" alt="sitting room" />
                    </div>
                </div>
            <div className="lg:w-full xl:w-full lg:ml-12 flex flex-col justify-start items-start">
                    <div>
                    <div className="flex flex-row ">
                        <div className="w-24 h-24 md:w-32 md:h-32">
                                    <Image alt="" width="160" height="160"  src="/manufacturing/billofmaterials-640x640.gif"></Image>
                                    </div>            
                                    <h1 className="text-xl md:text-2xl xl:text-3xl font-bold uppercase mt-4 md:mt-14">Bill of material (BOM)</h1>
                                    </div>
                    </div>
                    <div className="mt-4 xl:w-3/4">
                        <p className="text-base leading-6 text-gray-600">A bill of material is at the heart of any cloud manufacturing software, and a well-defined BOM ensures robustness and accuracy. ERPNexts BOM is hierarchical, with the finished product at the top. It also includes product codes, part descriptions, quantities, costs and additional specifications.</p>
                    </div>
                    <div className="mt-16 w-full">
                        <button className="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700">
                            <p className="text-xl font-medium leading-5">See More</p>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66663 16H25.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 21.3333L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 10.6667L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    </div>
                    <div className="lg:w-full lg:mt-0 mt-8 md:hidden block">
                    <div className="w-full h-full bg-red-200">
                        <img src="https://i.ibb.co/cbyDY74/pexels-max-vakhtbovych-6782351-1-1.png" alt="apartment design" className="w-full sm:block hidden" />
                        <img src="https://i.ibb.co/ZVPGjGJ/pexels-max-vakhtbovych-6782351-1.png" alt="apartment design" className="sm:hidden block w-full" />
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                        <img src="https://i.ibb.co/4Jrp5TB/pexels-max-vakhtbovych-6782370-1.png" className="w-full" alt="kitchen" />
                        <img src="https://i.ibb.co/0Jv3FSy/pexels-max-vakhtbovych-6436799-1-1.png" className="w-full" alt="sitting room" />
                    </div>
                </div>
                
            </div>
        </div>
        </Container>
        </section>
    )
}
{/**import Image from "next/image"
export default function Bom(bom){
    return(
       <section className="mx-4 my-24 md:mx-12">
         <div className="">
                <div className="pt-10 md:pt-40">
                    <div className="container mx-auto">
                        <div className="flex flex-row items-center pb-12">
                            <div className="md:w-full w-full xl:pr-20 md:pr-6">
                                <div className=" text-color">
                                    <div className="flex flex-row">
                                    <Image alt="" width="200" height="200"  src="/manufacturing/bill-of-materials-640x640.gif" className="w-20 h-20"></Image>
                                    <h1 className="text-2xl lg:text-3xl font-bold uppercase mt-20">Bill of material (BOM)</h1>
                                    </div>
                                    <h2 className="text-md lg:text-lg py-4 md:py-8 md:w-full lg:w-3/4 text-center leading-relaxed tracking-wide">A bill of material is at the heart of any cloud manufacturing software, and a well-defined BOM ensures robustness and accuracy. ERPNexts BOM is hierarchical, with the finished product at the top. It also includes product codes, part descriptions, quantities, costs and additional specifications.</h2>
                                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                                        <h3 className="text-lg lg:text-2xl font-semibold underline text-purple-700 ml-40 text-center">Lets Get Started</h3>
                                        <div className="pl-2">
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-2/4 md:w-1/2 w-full relative h-96 flex items-end justify-center border-4">
                                <Image alt="" width="6000" height="4000"  className="absolute w-full h-full inset-0  rounded-md" src="/contactus/working-women6123x4082.png"></Image>
                                <div className="bg-white rounded ">
                                    <div className="flex items-center justify-between w-full sm:w-full mb-8">
                                        <div className="flex items-center">
                                        <Image alt="" width="200" height="200"  className="absolute w-full h-full inset-0 rounded-md" src="/bill-of-materials (4).jpg"></Image>
                                 </div>
                                  </div>
                                        <div>
                                    </div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto my-6 md:my-12 px-4 md:px-6">
            <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="flex flex-col md:flex-row justify-between bg-gray-50 py-6 px-6 md:py-12 md:w-8/12 lg:w-full xl:w-full 2xl:w-full">
                    <div className="flex flex-row justify-center md:w-full ml-60">
                                   <Image alt="" width="200" height="200"  src="/manufacturing/shopfloor-640x640.gif" className="w-20 h-20"></Image>
                                    <h1 className="text-2xl lg:text-3xl font-bold uppercase mt-20"> shop floor management</h1>
                                   </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                           </div>
                </div>
            </div>
        </div>
                <div className="pb-32 pt-16">
                    <div className="mx-auto">
                        <div className="flex flex-wrap flex-row-reverse items-center">
                            <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                                <div className="py-2 text-color">
                                    <h2 className="text-md lg:text-lg py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                                        <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700">Lets Get Started</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center border-4">
                                <div className="relative z-10 p-4 bg-white  rounded mx-auto h-52 border-4 w-9/12 -mb-20">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="pt-10 md:pt-40">
                    <div className="container mx-auto">
                    <div className="flex flex-row items-center pb-12">
                            <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                                <div className=" text-color">
                                    <div className="flex flex-row">
                                    <Image alt="" width="200" height="200"  src="/receipt.gif" className="w-20 h-20"></Image>
                                    <h1 className="text-2xl lg:text-3xl font-bold uppercase mt-20">Bill of material (BOM)</h1>
                                    </div>
                                    <h2 className="text-md lg:text-lg py-4 md:py-8 w-3/4 text-center leading-relaxed tracking-wide">A bill of material is at the heart of any cloud manufacturing software, and a well-defined BOM ensures robustness and accuracy. ERPNexts BOM is hierarchical, with the finished product at the top. It also includes product codes, part descriptions, quantities, costs and additional specifications.</h2>
                                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                                        <h3 className="text-lg lg:text-2xl font-semibold underline text-purple-700 ml-40 text-center">Lets Get Started</h3>
                                        <div className="pl-2">
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center border-4">
                                <div className="relative z-10 bg-white rounded h-40 p-6 w-52 border-4 -mb-20">
                                    <div className="flex items-center justify-between w-full sm:w-full mb-8">
                                        <div className="flex items-center">
                                         </div>
                                  </div>
                                        <div>
                                    </div></div>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
       </section>
    )
} */}