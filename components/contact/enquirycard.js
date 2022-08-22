import Image from "next/image"
export default function Enquirycard({title, subTitle, src, linkName, href}){
    return(
        <div>
            <div className="flex flex-col left-0 justify-left my-12">
                                    <div className="-mt-20 w-full flex justify-center">
                                        <div className="w-24 h-24 md:h-32 md:w-32 flex">
                                        <Image width="160" height="160" src={src} alt="" /></div>
                                    </div>
                                    <div className="px-6 my-8 ">
                                        <h1 className="font-bold text-th-text-dark text-xl md:text-3xl text-center pb-1 uppercase">{title}</h1>
                                        <p className="text-center mb-4 text-th-text-medium text-md md:text-lg pt-3 font-normal">{subTitle}</p>
                                        <div className="flex items-center justify-center">
                                          <a href={href}> <button className=" text-center justify-center p-1 bg-th-background-cta  md:px-4 md:py-2 text-md lg:text-xl font-normal text-th-text-light">{linkName}</button></a>
                                            <div className="pl-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                                </svg>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
        </div>
    )
}