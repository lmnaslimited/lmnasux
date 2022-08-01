import Layout from "./../components/layout"
import Container from "../components/container"
import Image from "next/image"
export default function Aboutus({aboutus}){
    return(
        <Layout>
            <Container>
        <div className="bg-white text-gray-800">
         <div className="w-full h-full grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-1">
            <div className="col-span-2 col-start-1 md:col-start-2 row-start-1 w-full h-full mx-12">
            <Image alt="" src="/aboutus/about-hero-7000x3938.jpg" width="7000" height="4000" className="" />
            </div>
            <div className="row-start-2 col-start-1 col-span-1 md:row-start-1 bg-pink-50 w-full h-3/4 my-12 ">
             <div className="container">
                <div className="flex flex-col justify-center">
               <h1 className="text-3xl font-bold text-center my-10 mx-10">
                    Who We Are
                    </h1>
                     <p className="text-lg text-center mx-10">
                The about us page is often a reflection of the purpose and personality of the business and its owners or top employees.
                Finally, the page can also incorporate contact or locational information.
                    </p>
                    <button className="text-lg font-bold px-8 py-4 bg-purple-400 mt-10 mx-10">lets Talk</button>
                </div>
             </div>
            </div>
        </div>
       </div>
        </Container>
        </Layout>
    )
}