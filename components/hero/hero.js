import Image from "next/image";
import Container from "../container";
export default function hero({hero}) {
  return (
    <Container>
<section className="bg-white text-th-primary-dark lg:-mt-16 lg:mx-4 xl:mx-10 2xl:mx-16">
    <div className="grid max-w-screen-xl py-8 lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12 ">
        <div className="mr-auto place-self-center lg:col-span-6 sr-only lg:not-sr-only">
        <p className="max-w-2xl mb-6 font-semibold lg:mb-8 md:text-md px-12 xl:text-lg">{hero.title}</p>
             <p className="max-w-2xl mb-6 font-bold lg:mb-8 md:text-2xl xl:text-4xl">{hero.SubTitle}</p>
            
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 md:text-md xl:text-lg font-bold text-center shadow-md rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-th-primary-medium bg-blue-50">
             {hero.link}  
            </a> 
        </div>
        <div className=" lg:mt-0 lg:col-span-6 lg:flex w-full -mt-12">
            <Image alt="" width="800" height="800" src={hero.image}></Image>
        </div>                
    </div>
</section>
</Container>
  )
}