import Layout from "./../components/layout"
import Container from "../components/container"
import Image from "next/image"
export default function Aboutus({aboutus}){
    return(
        <Layout>
            <Container>
        <div className="bg-white text-gray-800 ">
         <div className="grid grid-cols-1 gap-8 my-16">

<a href="#" className="flex flex-col items-center bg-white rounded-lg shadow-md md:flex-row justify-center lg:ml-32 xl:ml-36 2xl:ml-44 lg:w-3/4">
    <div className="md:object-cover w-3/4 h-3/4 rounded-t-lg md:h-auto md:w-full md:rounded-none md:rounded-l-lg">
    <Image width="160" height="160" src="/aboutus/about-640x640.gif" alt="" />
        </div>
    <div className="flex flex-col justify-between p-4 leading-normal bg-pink-50 md:mx-4 my-4">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-800">About Us</h1>
        <p className="mb-3 text-lg font-normal text-gray-800">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        here are 12 months in a year, namely: January, February, March, April, May, June, July, August, September, October, November, and December.
         Remember that the first month of the year is called January, while December is the last month of the year.</p>
    </div>
</a>

</div>
<div className="w-full mt-44 ">
                <div className="container md:px-10 xl:px-28 ">
                    <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                        <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 border-2">
                            <div className="rounded overflow-hidden shadow-md bg-white">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                    <Image width="160" height="160" src="/aboutus/mission-640x640.gif" alt="" /></div>
                                </div>
                                <div className="px-6 mt-16 ">
                                    <h1 className="font-bold text-3xl text-center pb-1">MISSION</h1>
                                    <p className="text-center text-gray-800 text-base pt-3 font-normal">The CEO role in raising a company corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p>
                                    <div className="w-full flex justify-center pt-5 pb-5">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 border-2">
                            <div className="rounded overflow-hidden shadow-md bg-white">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                    <Image width="160" height="160" src="/aboutus/vision-640x640.gif" alt="" /></div>
                                </div>
                                <div className="px-6 mt-16 ">
                                    <h1 className="font-bold text-3xl text-center pb-1">VISION</h1>
                                    <p className="text-center text-gray-800 text-base pt-3 font-normal">The CEO role in raising a company corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p>
                                    <div className="w-full flex justify-center pt-5 pb-5">
                                    </div>
                                </div>
                            </div>
                        </div>
                       </div>
                       </div>
            </div>
            <div className="flex flex-col border-2 py-8 my-24">
            <h1 className="font-bold text-3xl text-center pb-1">CORE VALUES</h1>
        <p className="text-center text-gray-800 text-base pt-3 font-normal px-12 mx-36">
        Core values are the fundamental beliefs of a person or organization. These guiding principles dictate behavior and can help people 
        understand the difference between right and wrong.
        </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4 mx-12 xl:mx-0 mb-24 md:mb-36">
                <div className="col-span-1 w-full h-full border-2 px-8 shadow-xl rounded-lg bg-pink-50 py-16">
                <h1 className="font-bold text-lg pb-1"></h1>
                <p className="text-gray-800 pt-3 font-normal text-center">  </p>
            </div>
            <div className="col-span-1 w-full h-full border-2 px-8 shadow-xl rounded-lg md:mt-12 xl:mt-12 bg-blue-50 py-16">
                <h1 className="font-bold text-lg lg:text-xl text-center pb-1"></h1>
                <p className="text-center text-gray-800 text-base pt-3 font-normal"> </p>
            </div>
            <div className="col-span-1 w-full h-full border-2 px-8 shadow-xl rounded-lg xl:-mt-12 bg-pink-50 py-16">
                <h1 className="font-bold text-lg lg:text-xl text-center pb-1"></h1>
                <p className="text-center text-gray-800 text-base pt-3 font-normal"> </p>
            </div>
            <div className="col-span-1 w-full h-full border-2 px-8 shadow-xl rounded-lg xl:mt-12 bg-blue-50 py-16">
                <h1 className="font-bold text-lg lg:text-xl text-center pb-1"></h1>
                <p className="text-center text-gray-800 text-base pt-3 font-normal"></p>
            </div>
            <div className="col-span-1 w-full h-full border-2 px-8 shadow-xl rounded-lg md:mt-12 xl:-mt-12 bg-pink-50 py-16">
                <h1 className="font-bold text-lg lg:text-xl text-center pb-1"></h1>
                <p className="text-center text-gray-800 text-base pt-3 font-normal"> </p>
            </div>
            <div className="col-span-1 w-full h-full border-2 px-8 shadow-xl rounded-lg bg-blue-50 py-16 py-16">
                <h1 className="font-bold text-lg lg:text-xl text-center pb-1"></h1>
                <p className="text-center text-gray-800 text-base pt-3 font-normal"></p>
            </div>
            </div>
            
</div>
        </Container>
        </Layout>
    )
}