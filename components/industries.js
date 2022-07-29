import Card from "./services/card"
import Image from "next/image"
import Container from "./container"
import Link from "next/link"
export default function Industries({industries}) {
    return (
    <Container>
      <section className="text-gray-800 my-24 border-2 ">
       <h1 className="text-xl text-gray-800 font-bold bg-white text-center not-sr-only md:sr-only">INDUSTRIES</h1>
          <div className="md:-mt-6 text-center items-center sr-only md:not-sr-only "><button className="text-3xl justify-center bg-white font-bold text-center">INDUSTRIES</button></div>
        <div className="grid grid-cols-2 gap-4 ">
        <div className="col-span-2 border-b-2 py-8 ">
        <div className="md:w-full md:h-full lg:p-4 xl:p-0">
        <p className="leading-relaxed text-md text-center">
           Team LMNAs have built custom pre-sales enquiry and offer management solution for us, now we are 45% more efficient interms of offer closure
          </p> 
          </div>
        </div>
        <div className="col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-8 md:space-y-4">
  <div className="col-span-1 md:col-span-2">
  <div className="flex flex-row lg:justify-center">
         <div className="">
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
                    <button className="text-md border-2 text-purple-500  font-semibold  px-4 py-1 mt-2">Explore</button>
                </div></Link>
                </div>
                </div>
  </div>
  <div className="col-span-1">
  <div className="flex flex-row">
         <div className="">
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
         <div className="">
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
         <div className="">
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
         <div className="">
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