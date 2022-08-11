import Image from "next/image";
export default function Industrycard({title, subTitle, src, href, linkname}){
    return(
        <div>
            <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
                <div className="lg:w-3/4 xl:w-full flex flex-col justify-start items-start">
                    <div>
                    <div className="flex flex-row ">
                        <div className="w-24 h-24 md:w-32 md:h-32">
                                    <Image alt="" width="160" height="160"  src="/manufacturing/billofmaterials-640x640.gif"></Image>
                                    </div>           
                                    <h1 className="text-xl md:text-2xl xl:text-3xl font-bold uppercase mt-4 md:mt-14">{title}</h1>
                                    </div>
                    </div>
                    <div className="mt-4 xl:w-3/4">
                        <p className="text-base leading-6 text-gray-600">{subTitle}</p>
                    </div>
                    <div className="mt-16 w-full">
                        <button className="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700">
                            <p className="text-xl font-medium leading-5">{linkname}</p>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66663 16H25.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 21.3333L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 10.6667L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className=" flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0 lg:w-3/4 xl:w-full">
                    <div className="hidden lg:block">
                        <Image width="2800" height="1800"  src={src} alt="" />
                    </div>
                    <div className="w-80 sm:w-auto lg:hidden">
                        <Image width="2800" height="1800"  src={src} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
                        <div className="hidden lg:block">
                        <Image width="2800" height="1800"  src={src} alt="" />
                        </div>
                        <div className="w-80 sm:w-auto lg:hidden">
                        <Image width="2800" height="1800"  src={src} alt="" />
                    </div>
                        <div className="hidden lg:block">
                        <Image width="2800" height="1800"  src={src} alt="" />
                        </div>
                        <div className="w-80 sm:w-auto lg:hidden">
                        <Image width="2800" height="1800"  src={src} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}