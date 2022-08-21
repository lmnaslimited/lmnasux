import Image from "next/image";
import Container from "../container";
export default function hero({hero}) {
  return (
    <Container>
<section className="bg-th-background-secondary lg:my-32 lg:mx-32 xl:mx-16 2xl:mx-16">
    <div className="grid max-w-screen-xl py-8 lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12 ">
        <div className="mr-auto place-self-center lg:col-span-5 xl:col-span-5 sr-only lg:not-sr-only lg:-ml-36 xl:-ml-6 2xl:-ml-8">
        <div className="flex flex-row -mt-16">
        <div className="flex flex-row text-white h-8 rounded-lg p-2">
        <div className="w-8 h-8 -ml-2 -mt-16 bg-th-background-primary">
        <Image alt="" width="100" height="100" src={hero.logo}></Image>
        </div>
        </div>
        <p className="max-w-2xl mb-6 font-normal text-th-text-medium lg:mb-8 -mt-12 md:text-md xl:text-lg">{hero.title}</p>
        </div>
             <p className="max-w-2xl text-th-text-dark mb-6 font-bold lg:mb-8 md:text-2xl leading-snug lg:text-4xl xl:text-5xl tracking-tight">{hero.SubTitle}</p>
             <p className="max-w-2xl mb-6 font-semibold text-th-text-medium lg:mb-6 md:text-2xl pr-16 lg:text-2xl xl:text-3xl -mt-4 tracking-tight">{hero.SubTitle_a}</p>
            
            <a href={hero.href} className="inline-flex items-center justify-center px-5 py-3 mt-10 md:text-lg font-normal text-center shadow-md rounded-lg text-th-text-light bg-th-background-cta">
             {hero.link}  
            </a> 
        </div>
        <div className=" lg:mb-16 lg:col-span-7 xl:col-span-7 lg:flex w-full h-full lg:-mt-16 lg:-ml-0 xl:-mt-16 xl:ml-52 2xl:ml-24">
            <Image alt="" width="1400" height="800" src={hero.src}></Image>
        </div>                
    </div>
</section>
</Container>
  )
}