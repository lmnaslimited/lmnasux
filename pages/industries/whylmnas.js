import Image from "next/image"
export default function Whylmnas({title, src, point_a, point_b, point_c}){

    return(
      <div>
         <div className="xl:mx-auto xl:container md:my-0">
                <h1 className="xl:text-5xl md:text-4xl text-xl font-bold leading-tight text-center text-gray-800 sm:mb-0 pt-6">
                 {title}   
                </h1>
                <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                  <div className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden">
                    <Image width="1500" height="500" src={src} alt="large-image"/>
                    </div>
                    <div className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0">
                    <Image width="8192" height="3896" src={src} alt="large-image"/>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
                        <p className="text-3xl font-semibold text-gray-800">{point_a}</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                        <p className="text-3xl font-semibold text-gray-800">{point_b}</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                        <p className="text-3xl font-semibold text-gray-800">{point_c}</p>
                    </div>
                </div>
            </div>
      </div>
    )
}