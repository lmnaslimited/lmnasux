import Image from "next/image"
export default function  Pricecard({title, src , subTitle, linkName, href}) {
    return(
        <div className="p-4 w-full">
        <div className="h-full p-6 rounded-lg bg-th-background-secondary flex flex-wrap flex-col relative overflow-hidden shadow-xl">
          <h2 className="text-lg font-bold font-sans text-th-text-dark">{title}</h2>
          <h1 className="text-5xl md:text-3xl lg:text-5xl  leading-none flex items-center pb-4 mb-4 text-th-text-medium">
           <Image alt="" width="120" height="120" src={src} className="w-24 h-24"></Image> <span>{subTitle}</span>
          </h1>
        <a href={href}> <button className="flex items-center mt-auto text-th-text-light bg-th-background-cta py-2 px-4 w-full focus:outline-none  rounded">{linkName}
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button></a> 
        </div>
      </div>
    )
    
}