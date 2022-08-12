import Image from "next/image"
export default function  Pricecard({title, src , subTitle, linkName}) {
    return(
        <div className="p-4 w-full text-th-primary-dark bg-th-background-secondary">
        <div className="h-full p-6 rounded-lg border-2 border-gray-500 flex flex-wrap flex-col relative overflow-hidden">
          <h2 className="text-lg font-bold font-sans ">{title}</h2>
          <h1 className="text-5xl  leading-none flex items-center pb-4 mb-4 border-b border-gray-500">
           <Image alt="" width="120" height="120" src={src} className="w-24 h-24"></Image> <span>{subTitle}</span>
          </h1>
          <button className="flex items-center mt-auto text-th-primary-medium border-2 py-2 px-4 w-full focus:outline-none  rounded">{linkName}
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    )
    
}