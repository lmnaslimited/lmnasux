import Image from "next/image";
export default function Contactcard({src, title, href, linkName}){
    return(
        <div>
            <div className="flex flex-col">
                                <div className="-mt-20 w-full">
                                    <div className="w-24 h-24 md:w-32 md:h-32 items-center justify-center lg:ml-6">
                                    <Image width="160" height="160" src={src} alt="" /></div>
                                </div>
                                <div className="md:px-6 my-8  w-full ">
                                    <h1 className="font-bold text-xl md:text-3xl text-th-text-dark text-center pb-1 uppercase">{title}</h1>
                                    <a href={href} ><p className="text-center mb-4 text-th-text-medium text-md md:text-lg pt-3 font-normal">{linkName}</p></a>
                                    
                            </div>
                  </div>
        </div>
    )
}
