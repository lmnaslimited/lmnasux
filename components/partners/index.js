import Image from "next/image"
import Container from "../container"
import Link from "next/link"
export default function Partner({partner}) {
    return (
    <Container>
      <section className="text-gray-800 my-24 border-2">
       <h1 className="text-xl text-gray-800 font-bold bg-white text-center not-sr-only md:sr-only">TESTIMONIALS</h1>
          <div className="md:-mt-6 text-center items-center sr-only md:not-sr-only "><button className="text-3xl bg-white font-bold justify-center text-center">TESTIMONIALS</button></div>
        <div className="grid grid-cols-2 gap-4 ">
        <div className="col-span-2 lg:mt-8 py-4">
        <div className="md:w-full container md:h-full">
        <p className="leading-relaxed text-lg text-center">
           Team LMNAs have built custom pre-sales enquiry and offer management solution for us,
          </p> 
          <p className="leading-relaxed text-lg text-center">
           now we are 45% more efficient interms of offer closure
          </p> 
          </div>
        </div>
        <div className="col-span-2 p-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-1">
        <div className="flex flex-col md:flex-row">
         <div className="w-32 h-32 rounded-full">
        <Image alt="" width="640" height="540" src="/testimonials/kaykaribasket-548x455.png"/>
        </div>
        <div className=" w-full h-1/2 rounded-lg shadow-lg flex flex-col -mt-8 md:-mt-0 lg:p-6 p-2">
          <h1 className="text-left text-lg font-bold">KAYKARI BASKET</h1>
          <p className="mt-4 text-left">This is exactly what we were looking for. The web design was cutting-edge and freaking cool! Thanks for the services<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
</svg><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
</svg></p>
          </div>
        </div>
        </div>
        <div className="col-span-1">
        <div className="flex flex-col md:flex-row">
         <div className="w-32 h-32 rounded-full">
        <Image alt="" width="640" height="540" src="/testimonials/sgb-548x455.png"/>
        </div>
        <div className="w-full h-1/2 rounded-lg shadow-lg flex flex-col -mt-8 md:-mt-0 lg:p-6 p-2">
          <h1 className="text-left text-lg font-bold">KAYKARI BASKET</h1>
          <p className="mt-4 text-left">This is exactly what we were looking for. The web design was cutting-edge and freaking cool! Thanks for the services<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
</svg><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" cliprule="evenodd" />
</svg></p>
        </div>
        </div>
        </div>
        <div className="col-span-1">
        <div className="flex flex-col md:flex-row">
         <div className="w-32 h-32 rounded-full">
        <Image alt="" width="640" height="540" src="/testimonials/styleadvisor-548x455.png"/>
        </div>
        <div className="w-full h-1/2 rounded-lg shadow-lg flex flex-col -mt-8 md:-mt-0 lg:p-6 p-2">
          <h1 className="text-left text-lg font-bold">KAYKARI BASKET</h1>
          <p className="mt-4 text-left">This is exactly what we were looking for. The web design was cutting-edge and freaking cool! Thanks for the services<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
</svg><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
</svg></p></div>
        </div>
        </div>
 </div>
</div>
        </div>
     </section>   
     </Container>
    )
}