import Image from "next/image"
import Container from "./container"
export default function Services({services}) {
    return (
        <Container>
        <section className="lg:bg-gradient-to-r from-pink-50 via-white to-white bg-gradient-to-b from-pink-50 via-white to-white my-24 ">
        <div className="items-center lg:mt-12 not-sr-only lg:sr-only">
        <h1  className="text-2xl text-center md:text-3xl font-bold md:font-sans md:pt-0 md:mt-12 lg:ml-12 text-center text-gray-800 antialiased uppercase">SERVICES</h1>
        </div>
        <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-1 ">
        <div className="lg:row-span-2 lg:col-span-1 lg:row-start-1 lg:col-start-1 lg:bg-pink-50 sr-only lg:not-sr-only">
        <div className="container justify-center px-4">
        <h1  className="text-3xl font-bold md:font-sans text-center text-gray-800 antialiased uppercase mt-32">SERVICES</h1>
        <p className="leading-relaxed text-md lg:text-center text-gray-800">
           Team LMNAs have built custom pre-sales enquiry and offer management solution for us, now we are 45% more efficient interms of offer closure
          </p> 
        </div>
        </div>    
         <div className="row-span-1 col-span-1 md:col-span-2 row-start-1 md:col-start-1 lg:col-start-2 md:border-b-2 lg:mt-1 md:mt-12">
         <div className="flex flex-row md:w-1/2">
         <div className=" mt-10">
                <Image alt="" width="160" height="160" src="/services/finance-640x640.gif" />
            </div>
            <div className="flex flex-col mt-12 p-2 w-full md:w-auto">
                <div>
                    <h1 className="text-lg font-bold font-sans text-gray-800 ml-4">
                       FINANCE
                    </h1>
                </div>
                <div>
                    <p className="text-md font-normal font-sans text-gray-800 ml-4">
                    We help ecommerce businesses grow their revenue 
                    </p>
                </div>
                <div>
                    <button className="text-md border-2 text-purple-500 px-4 py-1 mt-2 ml-4">Explore</button>
                </div>
                </div>
                </div>
        </div>
        <div className="row-span-1 col-span-1 row-start-2 col-start-1 lg:col-start-2  w-full items-center justify-center">
         <div className="flex flex-row">
         <div className=" mt-10">
                <Image alt="" width="160" height="160" src="/services/hr-640x640.gif" />
            </div>
            <div className="flex flex-col mt-12 p-2 w-full md:w-auto">
                <div>
                    <h1 className="text-lg font-bold font-sans text-gray-800 ml-4">
                       HR
                    </h1>
                </div>
                <div>
                    <p className="text-md font-normal font-sans text-gray-800 ml-4 ">
                    We help ecommerce businesses grow their revenue 
                    </p>
                </div>
                <div>
                    <button className="text-md border-2 text-purple-500 px-4 py-1 mt-2 ml-4">Explore</button>
                </div>
                </div>
                </div>
        </div>
        <div className="row-span-1 col-span-1 row-start-3 col-start-1 md:row-start-2 md:col-start-2 lg:col-start-3 w-full md:border-l-2">
        <div className="flex flex-row">
         <div className=" mt-10">
                <Image alt="" width="160" height="160" src="/services/payroll-640x640.gif" />
            </div>
            <div className="flex flex-col mt-12 p-2 w-full md:w-auto">
                <div>
                    <h1 className="text-lg font-bold font-sans text-gray-800 ml-4">
                      PAYROLL
                    </h1>
                </div>
                <div>
                    <p className="text-md font-normal font-sans text-gray-800 ml-4">
                    We help ecommerce businesses grow their revenue 
                    </p>
                </div>
                <div>
                    <button className="text-md border-2 text-purple-500 px-4 py-1 mt-2 ml-4">Explore</button>
                </div>
                </div>
                </div>
        </div>
    </div>
      </section>    
      </Container>
    )   
}