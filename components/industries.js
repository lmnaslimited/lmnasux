import Image from "next/image"
import Container from "./container"
import Link from "next/link"
import Cardtype from "./cardtype"
export default function Industries({industries}) {
    return (
    <Container>
      <section className="text-gray-800 my-24 border-2 shadow-lg ">
       <h1 className="text-xl text-gray-800 font-bold bg-white text-center not-sr-only md:sr-only">INDUSTRIES</h1>
          <div className="md:-mt-6 text-center items-center sr-only md:not-sr-only "><button className=" p-2  text-3xl justify-center bg-white font-bold text-center">INDUSTRIES</button></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-8 md:space-y-4 m-2 mt-10 lg:mx-12 lg:my-8 gap-4">
         <div className="md:col-span-2 lg:mx-64 ">
                                <Cardtype key={industries[0].title} src={industries[0].image} title={industries[0].title} subTitle={industries[0].subTitle} />
         </div>
         <div className="md:col-span-1 flex-col md:flex-row flex ">
                                <Cardtype key={industries[1].title} src={industries[1].image} title={industries[1].title} subTitle={industries[1].subTitle} />
         </div>
         <div className="md:col-span-1 flex-col md:flex-row flex ">
                                <Cardtype key={industries[2].title} src={industries[2].image} title={industries[2].title} subTitle={industries[2].subTitle} />
         </div>
         <div className="md:col-span-1 flex-col md:flex-row flex ">
                                <Cardtype key={industries[3].title} src={industries[3].image} title={industries[3].title} subTitle={industries[3].subTitle} />
         </div>
         <div className="md:col-span-1 flex-col md:flex-row flex ">
                                <Cardtype key={industries[4].title} src={industries[4].image} title={industries[4].title} subTitle={industries[4].subTitle} />
         </div>
        </div>
     </section>   
     </Container>
    )
}