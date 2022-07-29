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
        <div className="col-span-2 border-b-2 py-8 ">
        <div className="md:w-full md:h-full lg:p-4 xl:p-0">
        <p className="leading-relaxed text-md text-center">
           "Team LMNAs have built custom pre-sales enquiry and offer management solution for us, now we are 45% more efficient interms of offer closure"
          </p> 
          </div>
        </div>
        <div className="col-span-2 p-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-1">
        <div className="flex flex-col md:flex-row">
         <div className="w-32 h-32 rounded-full">
        <img src="/kbtestimon1-1-removebg-preview.png"/>
        </div>
        <div className="text-left w-full h-1/2 rounded-lg shadow-lg flex flex-col -mt-12 md:-mt-0 p-2">
          <h1 className="font-bold">KAYKARI BASKET</h1>
          <p className="mt-4 text-left">"This is exactly what we were looking for. The web design was cutting-edge and freaking cool! Thanks for the services"</p>
          </div>
        </div>
        </div>
        <div className="col-span-1">
        <div className="flex flex-col md:flex-row">
         <div className="w-32 h-32 rounded-full">
        <img src="/kbtestimon1-1-removebg-preview.png"/>
        </div>
        <div className="w-full h-1/2 rounded-lg shadow-lg flex flex-col -mt-12 md:-mt-0 p-2">
          <h1 className="text-center font-bold">KAYKARI BASKET</h1>
          <p className="mt-4 text-center">"This is exactly what we were looking for. The web design was cutting-edge and freaking cool! Thanks for the services"</p>
        
        </div>
        </div>
        </div>
        <div className="col-span-1">
        <div className="flex flex-col md:flex-row">
         <div className="w-32 h-32 rounded-full">
        <img src="/kbtestimon1-1-removebg-preview.png"/>
        </div>
        <div className="w-full h-1/2 rounded-lg shadow-lg flex flex-col -mt-12 md:-mt-0 p-2">
          <h1 className="text-center font-bold">KAYKARI BASKET</h1>
          <p className="mt-4 text-center">"This is exactly what we were looking for. The web design was cutting-edge and freaking cool! Thanks for the services"</p>
        </div>
        </div>
        </div>
 </div>
</div>
        </div>
     </section>   
     </Container>
    )
}