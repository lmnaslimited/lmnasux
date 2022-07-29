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
           "Team LMNAs have built custom pre-sales enquiry and offer management solution for us, now we are 45% more efficient interms of offer closure"
          </p> 
          </div>
        </div>
        <div className="col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-8 md:space-y-4">
  <div className="col-span-1 md:col-span-2">
  <div className="flex flex-row lg:justify-center">
         <div className="">
                <Image width="160" height="160" src="/industries/manufacturing-640x640.gif" />
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
                <Image width="160" height="160" src="/industries/retail-640x640.gif" />
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
                <Image width="160" height="160" src="/industries/distribution-640x640.gif" />
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
                <Image width="160" height="160" src="/industries/education-640x640.gif" />
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
                <Image width="160" height="160" src="/industries/healthcare-640x640.gif" />
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
       {/** <div className="items-center lg:mt-12 not-sr-only lg:sr-only">
        <h1  className="text-2xl text-center md:text-3xl font-bold md:font-sans pt-12 md:pt-0 md:mt-12 md:ml-12 lg:ml-12 text-white text-gray-800 antialiased">INDUSTRIES</h1>
        </div>
 <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-12 lg:grid-rows-3 lg:grid-cols-11 gap-2  pt-12 md:p-4 lg:p-4 lg:py-8 ml-8 lg:ml-0">
        <div className="md:row-start-1 md:col-start-1 md:row-span-1 col-span-12 lg:row-start-1 lg:col-start-1 lg:col-span-4 lg:row-span-3 xl:row-span-3 lg:mt-12 sr-only lg:not-sr-only">
        <div className="xl:w-full xl:h-full md:w-full lg:w-3/4 md:h-3/4 ">
        <div className="md:flex md:flex-col md:w-full md:h-full space-y-2">
        <div className="xl:ml-32 xl:mt-20 lg:p-4 xl:p-0">
        <h1  className="text-lg md:text-3xl text-left md:font-bold md:font-sans md:mt-10  text-white md:text-gray-800 antialiased">INDUSTRIES</h1>
        </div>
        <div className="md:w-full md:h-full lg:p-4 xl:p-0">
        <p className="leading-relaxed text-md lg:text-center">
           "Team LMNAs have built custom pre-sales enquiry and offer management solution for us, now we are 45% more efficient interms of offer closure"
          </p> 
          </div>
        </div> 
        </div> 
        </div>
        <div className="row-start-1 col-start-1 col-span-1 row-span-1 md:row-start-2 md:col-start-1 md:row-span-1 md:col-span-4 lg:row-start-1 lg:col-start-5 lg:col-span-3 lg:row-span-3">
        <div className="relative z-10  w-full h-3/4 md:h-full xl:w-3/4 xl:ml-14 transform xl:scale-110 xl:mt-6 lg:-ml-14 lg:mt-8 lg:w-52 transform lg:scale-125 xl:mt-6 block object-cover object-center w-full h-full md:border-l-2">
        <Image width="300" height="440" alt="gallery" src="/crane.gif" />
        <h1 className="text-lg font-bold text-center">MANUFACTURING</h1>
        </div>
        <div className="w-28 flex items-center lg:h-24 md:h-14 xl:h-16 "> 
        <button className="text-xl font-bold text-gray-800  pt-8"></button>
        </div>
        </div>
        <div className="-mt-12 md:-mt-0 row-start-2 col-start-1 col-span-1 row-span-1 md:row-start-2 md:col-start-5 md:row-span-1 md:col-span-4 lg:col-start-8 lg:col-span-2 lg:row-span-3 2xl:-ml-4">
        <div className="flex flex-col w-full h-full xl:w-48 transform xl:scale-110 xl:mt-6 lg:w-40 lg:-ml-8 xl:ml-1 lg:mt-8 transform lg:scale-125 space-y-2 ">
        <div className="w-full h-full md:h-56 lg:h-44 block object-cover object-center md:border-l-2">
          <Image alt="gallery" width="200" height="165" src="/shopping-bag.gif" /> 
          <div className="md:border-b-2"><h1 className="text-lg -mt-2 font-bold text-center">RETAIL</h1></div>
        </div>
        <div className="w-full h-full md:h-full block object-cover object-center md:border-l-2">
        <a href="/manufacturing"> <Image alt="gallery"  width="400" height="400" src="/truck.gif" /> </a>
        <div className=""><h1 className="text-lg h-1/2 font-bold text-center">DISTRIBUTION</h1></div>
        </div> 
        </div>
        </div>
        <div className="row-start-3 col-start-1 col-span-1 row-span-1 md:row-start-2 md:col-start-9 md:col-span-4 lg:col-start-10 lg:col-span-2 md:row-span-1 lg:row-span-3 2xl:-ml-14 ">
        <div className="flex flex-col w-full h-full xl:w-48 transform xl:scale-110 xl:mt-6  xl:ml-4 lg:w-40 lg:ml-4 lg:mt-8 transform lg:scale-125 space-y-2 ">
        <div className="block object-cover object-center w-full h-full md:border-b-2 md:border-l-2">
          <Image alt="gallery" width="400" height="400" src="/mortarboard.gif" /> 
          <div className=""><h1 className="text-lg  font-bold text-center">EDUCATION</h1></div>
        </div>
        <div className="w-full h-48 block object-cover object-center md:border-l-2">
          <Image alt="gallery" width="280" height="220" src="/stethoscope.gif" /> 
          <div className=""><h1 className="text-lg  font-bold text-center">HEALTHCARE</h1></div>
      
        </div> 
        </div>
        </div>
        </div>   

  {/**<div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-24">
    <div className="flex flex-wrap -m-1 md:-m-2">
    <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2">
        <div className="row-start-1 col-start-1 col-span-1 row-span-1">
      <div className="flex flex-wrap w-full">
        <div className="w-1/2 h-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg shadow-xl"
            src="https://lmnas.com/wp-content/uploads/2021/04/lmnasretail.jpg" /> 
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg shadow-xl"
            src="https://lmnas.com/wp-content/uploads/2021/04/lmnasdistribution.jpg" /> 
        </div>
        <div className="w-full md:h-96 p-1 md:p-2 ">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg shadow-xl"
            src="https://lmnas.com/wp-content/uploads/2021/04/lmnasmanufacturing.jpg" /> 
        </div>
      </div>
      </div>
      <div className="row-start-2 md:row-start-1 col-start-1 md:col-start-2 col-span-1 row-span-1">
      <div className="flex flex-wrap w-full">
        <div className="w-full md:h-96 p-1 md:p-2 ">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg shadow-xl"
            src="https://lmnas.com/wp-content/uploads/2021/04/lmnaseducation.jpg" /> 
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg shadow-xl"
            src="https://lmnas.com/wp-content/uploads/2021/04/lmnasmedical.jpg" /> 
        </div>
        <div className="w-1/2 p-1 md:p-2">
        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg shadow-xl"
            src="https://img.freepik.com/free-photo/search-bar-icon-with-smartphone-blue-background-web-search-engine-seo-search-engine-optimization-concept-by-3d-rendering_616485-80.jpg?t=st=1658157664~exp=1658158264~hmac=841d6cabf26cdc110523debceda691178d0f9661f47c97b51b5f4cd66599c5d8&w=996" /> 
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>

      {/**<section className="text-gray-800 bg-gradient-to-br from-blue-300 via-pink-100 to-white my-24">
      <h1 className="text-5xl font-bold font-sans tracking-normal text-center mt-12">INDUSTRIES</h1>
      <div className="container px-5 py-12 mx-auto lg:pt-24 lg:px-16">
         <div className="flex flex-wrap -m-1 md:-m-2">
         <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2">
        <div className="row-start-1 col-start-1 col-span-1 row-span-1">
          <div className="flex flex-wrap w-full">
            <div className="w-1/2 md:h-52 p-1 bg-gray-800 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg shadow-xl"
                src="https://lmnas.com/wp-content/uploads/2021/04/lmnasdistribution.jpg" />
                 <div className="relative ">
            <div
                className="transform transition hover:scale-105 md:right-20 lg:right-28 xl:right-24 flex space-x-2 items-start bg-gradient-to-br from-blue-300 via-emerald-100 to-white text-gray-900 md:border-gray-200 shadow-2xl  -mt-8 md:-mt-10 w-42 h-8 md:h-10 md:w-42 rounded-lg shadow-xl">
                <div className="flex-initial">
                    <div
                        className="inline-flex items-center justify-center rounded-sm md:rounded-lg shadow-xl bg-gradient-tl from-green-400 via-green-400 bg-green-300">
                        
                    </div>
                </div>

                <div className="flex-1 inline-flex items-start justify-between">
                    <div>
                        <h2 className="text-sm md:text-lg mt-2 font-bold tracking-tight">DISTRIBUTION</h2>
                    </div>
                </div>
            </div>
        </div>
                 </div>
            <div className="w-1/2 md:h-52 p-1 bg-gray-800 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg shadow-xl"
                src="https://lmnas.com/wp-content/uploads/2021/04/lmnaseducation.jpg" />
                 <div className="relative ">
            <div
                className="transform transition hover:scale-105 md:right-20 lg:right-28 xl:right-24 flex space-x-2 items-start bg-gradient-to-br from-blue-300 via-emerald-100 to-white text-gray-900 md:border-gray-200 shadow-2xl  -mt-8 md:-mt-10 w-42 h-8 md:h-10 md:w-42 rounded-lg shadow-xl">
                <div className="flex-initial">
                    <div
                        className="inline-flex items-center justify-center rounded-lg shadow-xl bg-gradient-tl from-green-400 via-green-400 bg-green-300">
                        
                    </div>
                </div>

                <div className="flex-1 inline-flex items-start justify-between">
                    <div>
                        <h2 className="text-sm md:text-lg mt-2 font-bold tracking-tight">EDUCATION</h2>
                    </div>
                </div>
            </div>
        </div>
            </div>
            <div className="w-full md:h-96 p-1 bg-gray-800 md:p-2 md:mt-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg shadow-xl md:-ml-10 transform transistion lg:hover:scale-105 "
                src="https://lmnas.com/wp-content/uploads/2021/04/lmnasretail.jpg" />
            </div>
           
            <div className="flex bg-gradient-to-br from-blue-300 via-emerald-100 to-white text-gray-900 md:border-gray-200 shadow-2xl transform transition hover:scale-105  -mt-14 md:-mt-14 mx-2 w-full h-12 md:w-44 rounded-lg shadow-xl">
             <div className="flex-1 inline-flex items-center justify-center">
                    <div>
                        <h2 className="text-lg  md:text-xl font-bold tracking-tight">RETAIL</h2>
                    </div>
                </div>
                </div>
          </div>
          </div>
          <div className="row-start-2 col-start-1 md:row-start-1 md:col-start-2 col-span-1 row-span-1">
          <div className="flex flex-wrap w-full">
            <div className="w-full md:h-96 p-1 bg-gray-800 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg shadow-xl md:ml-10 transform transistion lg:hover:scale-105"
                src="https://lmnas.com/wp-content/uploads/2021/04/lmnasmanufacturing.jpg" />
                 <div className="relative ">
            <div
                className="transform transition hover:scale-105 md:right-20 lg:right-28 xl:right-32 lg:-ml-4 flex space-x-2 items-start bg-gradient-to-br from-blue-300 via-emerald-100 to-white text-gray-900 md:border-gray-200 shadow-2xl  -mt-12 w-42 h-12 md:w-44 rounded-lg shadow-xl">
                <div className="flex-initial">
                    <div
                        className="inline-flex items-center justify-center rounded-lg shadow-xl bg-gradient-tl from-green-400 via-green-400 bg-green-300">
                        
                    </div>
                </div>

                <div className="flex-1 inline-flex items-center justify-center">
                    <div>
                        <h2 className="text-md md:text-lg mt-2 font-bold tracking-tight">MANUFACTURING</h2>
                    </div>
                </div>
            </div>
        </div>
            </div>
            <div className="w-1/2 md:h-52 p-1 bg-gray-800 md:p-2 md:mt-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg shadow-xl"
                src="https://lmnas.com/wp-content/uploads/2021/04/lmnasmedical.jpg" />
               <div className="relative ">
            <div
                className="transform transition hover:scale-105 md:right-20 lg:right-28 xl:right-24 flex space-x-2 items-start bg-gradient-to-br from-blue-300 via-emerald-100 to-white text-gray-900 md:border-gray-200 shadow-2xl  -mt-8 md:-mt-10 w-42 h-8 md:h-10 md:w-42 rounded-lg shadow-xl">
                <div className="flex-initial">
                    <div
                        className="inline-flex items-center justify-center rounded-lg shadow-xl bg-gradient-tl from-green-400 via-green-400 bg-green-300">
                        
                    </div>
                </div>

                <div className="flex-1 inline-flex items-start justify-between">
                    <div>
                        <h2 className="text-sm md:text-lg mt-2  font-bold tracking-tight">HEALTH CARE</h2>
                    </div>
                </div>
            </div>
        </div>  
            </div>
            <div className="w-1/2 md:h-52 p-1 bg-gray-800 md:p-2 md:mt-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg shadow-xl"
                src="https://lmnas.com/wp-content/uploads/2021/04/lmnasagri.jpg" />
                 <div className="relative ">
            <div
                className="transform transition hover:scale-105 md:right-20 lg:right-28 xl:right-24 flex space-x-2 items-start bg-gradient-to-br from-blue-300 via-emerald-100 to-white text-gray-900 md:border-gray-200 shadow-2xl  -mt-8 md:-mt-10 w-42 h-8 md:h-10 md:w-42 rounded-lg shadow-xl">
                <div className="flex-initial">
                    <div
                        className="inline-flex items-center justify-center rounded-lg shadow-xl bg-gradient-tl from-green-400 via-green-400 bg-green-300">
                        
                    </div>
                </div>

                <div className="flex-1 inline-flex items-start justify-between">
                    <div>
                        <h2 className="text-sm md:text-lg mt-2 font-bold tracking-tight">AGRICULTURE</h2>
                    </div>
                </div>
            </div>
        </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
     {/** <section className="bg-gradient-to-br from-pink-200 to-gray-200 mt-24">
        <div className="p-10 ml-6">
        <h1 className="text-5xl ml-24 text-indigo-600 my-8 font-bold tracking-tight"></h1>
         <div className="grid grid-rows-3 grid-cols-2 md:grid-rows-2 md:grid-cols-3 gap-1">
    <div className="row-span-1 col-span-2 col-start-1 row-start-1">
<div className="flex flex-col  w-full hover:translate-x-12">
        <div className="bg-gradient-to-tl from-gray-900 to-gray-800 text-white h-56 w-full p-6 rounded-xl shadow-md">
            <div className="h-full flex flex-col justify-between">
                <div className="flex items-start justify-between space-x-4">
                    <div className=" text-xl font-semibold tracking-tigh">
                       
                    </div>
                </div>  
            </div>
        </div>
        </div>
        </div>
        <div className="row-span-1 col-span-1 ">
    
    <div className="flex flex-col  w-full">
        <div className="bg-gradient-to-tl from-gray-900 to-gray-800 text-white h-56 w-full p-6 rounded-xl shadow-md">
            <div className="h-full flex flex-col justify-between">
                <div className="flex items-start justify-between space-x-4">
                    <div className=" text-xl font-semibold tracking-tigh">
                       
                    </div>
                </div>  
            </div>
        </div>
        </div>
        </div>
        <div className="row-span-2 col-span-1 row-start-3 col-start-1 md:row-start-1 md:col-start-3 ">
    
    <div className="flex flex-row md:flex-col lg:w-72 md:w-52 w-56 -ml-4 md:-ml-12 ">
        <div className="bg-gradient-to-tl from-gray-900 to-gray-800 text-white md:h-96 h-52 mt-8 transform transition md:scale-y-150 hover:scale-y-160 md:w-full w-72 p-1 rounded-xl shadow-md">
       
        <div  className="md:w-full md:h-1/2 w-1/2 h-1/2 p-2 md:md:border-l-4 md:md:border-t-4  md:md:border-r-4 md:md:border-gray-300 rounded-t-xl shadow-xl transform transition hover:scale-105 duration-300 ease-in-out ">
         <img src="" />
        </div>
        <div className="md:w-full md:h-1/2 w-1/2 h-1/2 p-2 md:md:border-l-4 md:md:border-t-4  md:md:border-r-4  md:md:border-b-4 md:md:border-gray-300  rounded-b-xl shadow-xl transform transition hover:scale-105 duration-300 ease-in-out ">
         <img src="" />
        </div>
        </div>
        </div>
        </div>
        
        <div className="row-span-1 col-span-1">
    
    <div className="flex flex-col  w-full">
        <div className="bg-gradient-to-tl from-gray-900 to-gray-800 text-white h-56 w-full rounded-xl shadow-md">
            <div className="h-full flex flex-col justify-between">
                <div className="flex items-start justify-between space-x-4">
                    <div className=" text-xl font-semibold tracking-tigh">
                       
                    </div>
                </div>  
            </div>
        </div>
        </div>
        </div>
 
  </div>
    </div>
      </section> 
    **/}
     </section>   
     </Container>
    )
}