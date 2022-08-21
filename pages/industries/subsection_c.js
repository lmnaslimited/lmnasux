import Image from "next/image"
export default function Subsection_c({title, subtitle, linkName, image_a, image_b}){
 return(
    <div>
         <div className=" md:py-12 py-8 my-12">
            <div className="lg:flex items-center ">
                <div className="lg:w-3/4 ">
                    <h1 className="text-center md:px-6 text-xl uppercase lg:text-3xl font-bold leading-9 text-th-text-dark">{title}</h1>
                    <p className="text-lg md:px-6 lg:text-xl text-center lg:leading-7  py-4 md:py-8 text-th-text-medium">{subtitle}</p>
                    <div className="flex items-center justify-center cursor-pointer pb-4 md:pb-0">
                                        <h3 className="text-center text-lg lg:text-xl font-semibold underline text-th-background-cta">{linkName}</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                </div>
                <div className="lg:w-3/4 lg:mt-0 mt-8">
                    <div className="w-full h-full">
                      <div  className="w-full sm:block hidden border-4 shadow-lg">
                      <Image width="1500" height="1000" src={image_a} alt="" />
                      </div>
                      <div  className="sm:hidden block w-full border-4 shadow-lg">
                      <Image width="1500" height="1000" src={image_a} alt="" />
                      </div>
                      </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                     <div className="border-4 shadow-lg md:block hidden">
                     <Image width="1500" height="1000" src={image_b} alt="" />
                     </div>
                     <div className="border-4 shadow-lg md:block hidden">
                      <Image width="1500" height="1000" src={image_b} alt="" />
                      </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
 )
}