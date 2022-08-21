import Image from "next/image"
export default function Subsection_b({title, subtitle, linkName, image_a, image_b}){
 return(
     <div>
       <div className="pb-32 pt-16 my-40">
                    <div className="mx-auto">
                        <div className="flex flex-wrap flex-row-reverse items-center">
                            <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                                <div className="py-2">
                                    <h1 className="text-center text-th-text-dark font-bold text-xl lg:text-3xl">{title}</h1>
                                    <h2 className="text-center text-th-text-medium text-lg lg:text-xl leading-7 py-8  xl:px-24">{subtitle}</h2>
                                    <div className="justify-center flex items-center cursor-pointer pb-4 md:pb-0">
                                        <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline text-th-background-cta">{linkName}</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative mb-32 md:mb-0 md:h-96 flex items-end justify-center">
                            <div className="absolute w-full h-full rounded-md border-4 shadow-lg">
                                <Image width="1500" height="1000" src={image_a} alt="" />
                            </div>   
                                <div className="relative z-10 rounded p-6 w-10/12 -mb-20 -ml-12 ">
                                    <div className="flex items-center w-full sm:w-full mb-8 ">
                                        <div className="flex items-center md:h-40">
                                        <div className="absolute w-full h-full rounded-md border-4 shadow-lg hidden md:block">
                                <Image width="1000" height="600" src={image_b} alt="" />
                            </div>  
                                        </div>
                                        <div>
                                          </div>
                                          </div>
                                          </div>
                                          </div>
                        </div>
                    </div>
                </div>  
     </div>
 )
}