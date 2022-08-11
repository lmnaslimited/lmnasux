import Image from "next/image"
import Container from "../container"
import Partnercard from "./partnercard"
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
         {partner.title}
          
          </p> 
          <p className="leading-relaxed text-lg text-center">
          {partner.subTitle} 
          </p> 
          </div>
        </div>
        <div className="col-span-2 p-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
       <Partnercard  key={partner.partner[0].title} src={partner.partner[0].image} title={partner.partner[0].title} subTitle={partner.partner[0].subTitle}></Partnercard>
       <Partnercard  key={partner.partner[0].title} src={partner.partner[0].image} title={partner.partner[0].title} subTitle={partner.partner[0].subTitle}></Partnercard>
       <Partnercard  key={partner.partner[0].title} src={partner.partner[0].image} title={partner.partner[0].title} subTitle={partner.partner[0].subTitle}></Partnercard>
 </div>
</div>
        </div>
     </section>   
     </Container>
    )
}