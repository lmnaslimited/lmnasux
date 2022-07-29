import Image from "next/image"
import Container from "./container"
export default function products({products}) {
    return (
        <Container>
        <section className="lg:bg-gradient-to-r from-pink-50 via-white to-white bg-gradient-to-b from-pink-50 via-white to-white my-24 ">
        <div className="items-center lg:mt-12 not-sr-only lg:sr-only">
        <h1  className="text-2xl text-center md:text-3xl font-bold md:font-sans md:pt-0 md:mt-12 lg:ml-12 text-center text-white text-gray-800 antialiased uppercase">products</h1>
        </div>
        <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-1 ">
         <div className="lg:row-span-2 lg:col-span-1 lg:row-start-1 lg:col-start-1 lg:bg-pink-50 sr-only lg:not-sr-only">
        <div className="container justify-center px-4">
        <h1  className="text-3xl font-bold md:font-sans text-center text-gray-800 antialiased uppercase mt-32">products</h1>
        <p className="leading-relaxed text-md lg:text-center text-gray-800">
           "Team LMNAs have built custom pre-sales enquiry and offer management solution for us, now we are 45% more efficient interms of offer closure"
          </p> 
          </div>
        </div>   
         <div className="row-span-1 col-span-1 md:col-span-2 row-start-1 md:col-start-1 lg:col-start-2 md:border-b-2 lg:mt-1 md:mt-12 bg-white">
         <div className="flex flex-row md:w-1/2 ">
         <div className=" mt-10 ">
                <Image width="160" height="160" src="/presentation.gif" />
            </div>
            <div className="flex flex-col mt-12 p-2 w-full md:w-auto">
                <div>
                    <h1 className="text-lg font-bold font-sans text-gray-800 ml-4">
                       ERP
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
                <Image width="160" height="160" src="/shopping-cart.gif" />
            </div>
            <div className="flex flex-col mt-12 p-2 w-full md:w-auto">
                <div>
                    <h1 className="text-lg font-bold font-sans text-gray-800 ml-4">
                       E-COMMERCE
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
        <div className="row-span-1 col-span-1 row-start-3 col-start-1 md:row-start-2 md:col-start-2 lg:col-start-3 w-full md:border-l-2">
        <div className="flex flex-row">
         <div className=" mt-10">
                <Image width="160" height="160" src="/tv.gif" />
            </div>
            <div className="flex flex-col mt-12 p-2 w-full md:w-auto">
                <div>
                    <h1 className="text-lg font-bold font-sans text-gray-800 ml-4">
                      DIGITAL MARKETING
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
       {/** <div className="p-10 py-44 md:py-8 -ml-6 lg:ml-12 ml-8">
        <h1 className="text-5xl ml-24 text-indigo-600 my-8 font-bold tracking-tight"></h1>
         <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-1">
    <div className="md:row-span-2 md:col-span-3 md:col-start-1 md:row-start-1">
<div className="flex flex-col md:w-full ">
        <div className="md:bg-gradient-to-br from-gray-100 to-gray-100 text-white md:h-72 md:w-3/4 lg:h-72 lg:w-3/4 xl:h-96 xl:w-3/4 p-6 md:rounded-xl md:shadow-md">
            <div className="h-full flex flex-col justify-between">
                <div className="flex items-start justify-between space-x-4">
                    <div className=" md:text-3xl md:ml-16 md:mt-20 lg:text-4xl xl:text-5xl text-center lg:ml-10 lg:mt-20 xl:ml-24 xl:mt-28 font-sans font-semibold tracking-tigh">
                       </div>
                </div>  
            </div>
        </div>
        </div>
        </div>
        <div className="row-start-1 col-start-1 col-span-1 row-span-1 md:row-span-2 md:col-span-1 md:col-start-3 md:row-start-1 col-span-1 row-span-1 row-start-1 col-start-1">
<div className="flex flex-col  w-full transform transition scale-y-150">
        <div className="w-auto h-auto rounded-lg">
        <img className="bg-gradient-to-tl from-gray-400 to-gray-600 text-white relative -mt-28 h-28 w-full ml-4 md:-mt-0 md:h-28 md:-ml-24 md:w-72 lg:h-32 lg:-ml-40 lg:w-80  xl:h-52 xl:-mt-8 xl:w-full xl:-ml-52  shadow-md" src="" />
                  
        </div>
        </div>
        <div className="relative">
            <div
                className="absolute xl:-ml-96 lg:-ml-72 md:-ml-48 ml-6 flex space-x-2 items-start bg-pink-300 text-gray-900 border-gray-200 shadow-2xl mt-4 h-4 w-36 md:-mt-36 md:h-12 lg:-mt-36 lg:h-16 lg:w-3/4 xl:-mt-56 xl:w-60 px-2 py-6 rounded-lg">
                <div className="flex-initial">
                    <div
                        className="inline-flex items-center justify-center rounded-lg bg-gradient-tl from-green-400 via-green-400 bg-green-300">
                        
                    </div>
                </div>

                <div className="flex-1 inline-flex items-start justify-between">
                    <div>
                        <h2 className=" text-lg -mt-4 lg:-mt-0 lg:text-xl font-bold tracking-tight hover:h-52">E-commerce</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
       
        <div className="row-start-2 col-start-1 row-span-1 col-span-1 md:row-span-1 md:col-span-1 md:col-start-2 md:row-start-2 row-span-1 col-span-1 row-start-2 col-start-1">
<div className="flex flex-col  w-full transform transition scale-y-150">
        <div className="">
            <img className="bg-gradient-to-tl from-gray-500 to-gray-200 opacity-text-white -mt-6 h-28 w-full ml-4 md:h-28 md:mt-8 md:ml-12 md:w-40 lg:h-32 lg:mt-10 lg:ml-8 lg:w-52 xl:h-40 xl:mt-12 xl:ml-20 xl:w-60 rounded-xl shadow-md" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-erp-illustration_23-2149365029.jpg?t=st=1658119156~exp=1658119756~hmac=3ea018b23221c4b63b114484bee341fd4f54c33a7ecd5cf5055d6a6121662b6d&w=740" />
        </div>
        </div>
        <div className="relative">
            <div
                className="absolute xl:-ml-32 lg:-ml-20 md:-ml-24 ml-6 flex space-x-2 items-start bg-pink-300 text-gray-900 border-gray-200 shadow-2xl mt-10 w-36 h-4 md:-mt-10 md:w-3/4 md:h-12 lg:-mt-24 lg:w-3/4 lg:h-16 xl:-mt-44 xl:w-60 px-2 py-6 rounded-lg">
                <div className="flex-initial">
                    <div
                        className="inline-flex items-center justify-center rounded-lg bg-gradient-tl from-green-400 via-green-400 bg-green-300">
                        
                    </div>
                </div>

                <div className="flex-1 inline-flex items-start justify-between">
                    <div>
                        <h2 className=" tex-md md:text-lg -mt-4 md:-mt-4 lg:-mt-0 lg:text-xl font-bold tracking-tight">ERP</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="row-start-3 col-start-1 row-span-1 col-span-1 md:row-span-1 md:col-span-1 md:col-start-3 md:row-start-2 row-span-1 col-span-1 row-start-3 col-start-1">
<div className="flex flex-col flex-wrap  w-full transform transition scale-y-150">
        <div className="bg-gradient-to-tl from-gray-500 to-gray-200 opacity- text-white mt-12 h-24 w-full ml-4 md:h-24 md:w-40 md:mt-8 md:ml-0 lg:h-28 lg:w-44 lg:mt-8 lg:ml-2 xl:h-36 xl:mt-12 xl:ml-0 xl:w-48 p-6 rounded-xl shadow-md">
            <div className="h-full flex flex-col justify-between">
                <div className="flex items-start justify-between space-x-4">
                    <div className=" text-xl font-semibold tracking-tigh">
                       
                    </div>
                </div>  
            </div>
        </div>
        </div>
        <div className="relative">
            <div
                className="absolute lg:ml-32 xl:ml-36 md:ml-12 ml-6 flex space-x-2 items-start bg-pink-300 text-gray-900 border-gray-200 shadow-2xl mt-12 h-4 w-36 md:w-3/4 md:h-14 lg:h-12 md:mt-4  lg:mt-0 lg:w-3/4 lg:h-16 xl:-mt-44 xl:w-60 px-2 py-6 rounded-lg">
                <div className="flex-initial">
                    <div
                        className="inline-flex items-center justify-center rounded-lg bg-gradient-tl from-green-400 via-green-400 bg-green-300">
                        
                    </div>
                </div>

                <div className="flex-1 inline-flex items-start justify-between">
                    <div>
                        <h2 className=" tex-md md:text-lg -mt-4 md:-mt-6 xl:mt-2 lg:text-xl font-bold tracking-tight">DIGITAL MARKETING</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
     
  </div>
     </div>*/} 
      </section>    
      </Container>
    )   
}