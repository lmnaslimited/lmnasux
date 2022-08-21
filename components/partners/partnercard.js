import Image from "next/image";
import Partner from ".";
export default function Partnercard({src, title, subTitle}){
return(
    <div className="col-span-1">
    <div className="flex flex-col md:flex-row">
     <div className="w-32 h-32 rounded-full">
    <Image alt="" width="640" height="540" src={src}/>
    </div>
    <div className=" w-full h-1/2 rounded-lg shadow-lg bg-th-background-secondary flex flex-col -mt-8 md:-mt-0 lg:p-6 p-2">
      <h1 className="text-left text-lg font-bold text-th-text-dark">{title}</h1>
      <p className="mt-4 text-left text-th-text-medium">{subTitle}<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
</svg><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
</svg></p>
      </div>
    </div>
    </div>
)
}