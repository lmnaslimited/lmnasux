import Image from "next/image"
import Container from "./container"
import Link from "next/link"
import Infocard from "./infocard"
export default function Industries({industries}) {
    return (
    <Container>
      <section className="text-gray-800 my-24 border-2 shadow-lg ">
       <h1 className="text-xl text-gray-800 font-bold bg-white text-center not-sr-only md:sr-only">{industries.title}</h1>
          <div className="md:-mt-6 text-center items-center sr-only md:not-sr-only "><button className=" p-2  text-3xl justify-center bg-white font-bold text-center">{industries.title}</button></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-8 md:space-y-4 m-2 mt-10 lg:mx-12 lg:my-8 gap-4">
         <div className="md:col-span-2 lg:mx-64 ">
                                <Infocard key={industries.industries[0].title} src={industries.industries[0].image} title={industries.industries[0].title} subTitle={industries.industries[0].subTitle} href={industries.industries[0].href} linkName={industries.industries[0].linkName} />
         </div>
         <div className="md:col-span-1 flex-col md:flex-row flex ">
                                <Infocard key={industries.industries[1].title} src={industries.industries[1].image} title={industries.industries[1].title} subTitle={industries.industries[1].subTitle} href={industries.industries[1].href} linkName={industries.industries[1].linkName} />
         </div>
         <div className="md:col-span-1 flex-col md:flex-row flex ">
                                <Infocard key={industries.industries[2].title} src={industries.industries[2].image} title={industries.industries[2].title} subTitle={industries.industries[2].subTitle} href={industries.industries[2].href} linkName={industries.industries[2].linkName} />
         </div>
         <div className="md:col-span-1 flex-col md:flex-row flex ">
                                <Infocard key={industries.industries[3].title} src={industries.industries[3].image} title={industries.industries[3].title} subTitle={industries.industries[3].subTitle} href={industries.industries[3].href} linkName={industries.industries[3].linkName} />
         </div>
         <div className="md:col-span-1 flex-col md:flex-row flex ">
                                <Infocard key={industries.industries[4].title} src={industries.industries[4].image} title={industries.industries[4].title} subTitle={industries.industries[4].subTitle} href={industries.industries[4].href} linkName={industries.industries[4].linkName}/>
         </div>
        </div>
     </section>   
     </Container>
    )
}