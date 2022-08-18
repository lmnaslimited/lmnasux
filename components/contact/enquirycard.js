import Image from "next/image"
export default function Enquirycard({title, subTitle, src, linkName, href}){
    return(
        <div>
            <div className="flex flex-col left-0 justify-left my-12">
                                    <div className="-mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32 flex">
                                        <Image width="160" height="160" src={src} alt="" /></div>
                                    </div>
                                    <div className="px-6 my-8 ">
                                        <h1 className="font-bold text-th-text-dark text-3xl text-center pb-1 uppercase">{title}</h1>
                                        <p className="text-center mb-4 text-th-text-medium text-lg pt-3 font-normal">{subTitle}</p>
                                        <div className="flex items-center">
                                            <button className=" ml-32 text-center bg-th-background-cta px-4 py-2 text-lg lg:text-xl font-semibold text-th-text-light">{linkName}</button>
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