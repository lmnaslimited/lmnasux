import Card from "./services/card"
import Image from "next/image"
import Container from "./container"
import Link from "next/link"
export default function Industries({industries}) {
    return (
    <Container>
      <section className="text-gray-800 my-24 border-2 shadow-lg ">
       <h1 className="text-xl text-gray-800 font-bold bg-white text-center not-sr-only md:sr-only">INDUSTRIES</h1>
          <div className="md:-mt-6 text-center items-center sr-only md:not-sr-only "><button className=" p-2  text-3xl justify-center bg-white font-bold text-center">INDUSTRIES</button></div>
        <div className="grid grid-cols-2 gap-4 ">
        
        <div className="col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-8 md:space-y-4 m-2 mt-10 lg:mx-12 lg:my-8 gap-4">
  <div className="col-span-1 md:col-span-2">
  <div className="flex flex-row lg:justify-center">
         <div className="lg:border-2 lg:shadow-lg lg:rounded-lg">
                <Image alt="" width="160" height="160" src="/industries/manufacturing-640x640.gif" />
            </div>
            <div className="flex flex-col p-2 ml-4">
                <div>
                    <h1 className="text-lg font-bold font-sans text-gray-800">
                      MANUFACTURING
                    </h1>
                </div>
                <div>
                    <p className="text-md font-normal font-sans text-gray-800 ">
                    We help ecommerce businesses grow their revenue 
                    </p>
                </div>
                <Link href="/manufacturing/manufacturing"><div>
                    <button className="text-md border-2 text-purple-500  font-semibold lg:translate-y-4 px-4 py-1 mt-2">Explore</button>
                </div></Link>
                </div>
                </div>
  </div>
  <div className="col-span-1">
  <div className="flex flex-row">
         <div className="lg:border-2 lg:shadow-lg lg:rounded-lg">
                <Image alt="" width="160" height="160" src="/industries/retail-640x640.gif" />
            </div>
            <div className="flex flex-col ml-4 p-2">
                <div>
                    <h1 className="text-lg font-bold font-sans text-gray-800 ">
                       RETAIL
                    </h1>
                </div>
                <div>
                    <p className="text-md font-normal font-sans text-gray-800 ">
                    We help ecommerce businesses grow their revenue 
                    </p>
                </div>
                <div>
                    <button className="text-md border-2 text-purple-500  font-semibold  px-4 py-1 mt-2">Explore</button>
                </div>
                </div>
                </div>
  </div>
  <div className="col-span-1">
  <div className="flex flex-row">
         <div className="lg:border-2 lg:shadow-lg lg:rounded-lg">
                <Image alt="" width="160" height="160" src="/industries/distribution-640x640.gif" />
            </div>
            <div className="flex flex-col ml-4 p-2">
                <div>
                    <h1 className="text-lg font-bold font-sans text-gray-800">
                       DISTRIBUTION
                    </h1>
                </div>
                <div>
                    <p className="text-md font-normal font-sans text-gray-800 ">
                    We help ecommerce businesses grow their revenue 
                    </p>
                </div>
                <div>
                    <button className="text-md border-2 text-purple-500  font-semibold  px-4 py-1 mt-2">Explore</button>
                </div>
                </div>
                </div>
  </div>
  <div className="col-span-1">
  <div className="flex flex-row">
         <div className="lg:border-2 lg:shadow-lg lg:rounded-lg">
                <Image alt="" width="160" height="160" src="/industries/education-640x640.gif" />
            </div>
            <div className="flex flex-col p-2 ml-4">
                <div>
                    <h1 className="text-lg font-bold font-sans text-gray-800 ">
                       EDUCATION
                    </h1>
                </div>
                <div>
                    <p className="text-md font-normal font-sans text-gray-800 ">
                    We help ecommerce businesses grow their revenue 
                    </p>
                </div>
                <div>
                    <button className="text-md border-2 text-purple-500  font-semibold  px-4 py-1 mt-2">Explore</button>
                </div>
                </div>
                </div>
  </div>
  <div className="col-span-1">
  <div className="flex flex-row">
         <div className="lg:border-2 lg:shadow-lg lg:rounded-lg">
                <Image alt="" width="160" height="160" src="/industries/healthcare-640x640.gif" />
            </div>
            <div className="flex flex-col ml-4 p-2">
                <div>
                    <h1 className="text-lg font-bold font-sans text-gray-800 ">
                      HEALTHCARE
                    </h1>
                </div>
                <div>
                    <p className="text-md font-normal font-sans text-gray-800 ">
                    We help ecommerce businesses grow their revenue 
                    </p>
                </div>
                <div>
                    <button className="text-md border-2 text-purple-500  font-semibold  px-4 py-1 mt-2">Explore</button>
                </div>
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