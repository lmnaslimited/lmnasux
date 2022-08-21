import Image from "next/image"
import Container from "./container"
import Infocard from "./infocard"
export default function Homeservices({ services }) {
    return (
        <Container>
            <section className="my-24 md:my-48 bg-th-background-primary ">
                <div className="items-center lg:mt-12 not-sr-only lg:sr-only">
                    <h1 className="text-2xl text-center md:text-3xl shadow-xl p-4 font-bold md:font-sans md:pt-0 md:mt-12 lg:ml-12 text-center  antialiased uppercase">{services.title}</h1>
                </div>
                <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-1 ">
                    <div className="lg:row-span-2 lg:col-span-1 bg-th-background lg:row-start-1 lg:col-start-1 sr-only lg:not-sr-only">
                        <div className="container justify-center px-4 mt-32">
                            <h1 className="text-3xl font-bold md:font-sans text-center  antialiased uppercase mt-28">{services.title}</h1>
                            <p className="leading-relaxed text-md lg:text-center  mt-4">{services.subTitle}</p>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 m-2">
                        <div className="md:w-1/2 md:ml-44 lg:ml-0 ">
                                <Infocard key={services.services[0].title} src={services.services[0].image} title={services.services[0].title} subTitle={services.services[0].subTitle} href={services.services[0].href} linkName={services.services[0].linkName} />
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-start-2">
                            <Infocard key={services.services[1].title} src={services.services[1].image} title={services.services[1].title} subTitle={services.services[1].subTitle} href={services.services[1].href} linkName={services.services[1].linkName}/>
                    </div>
                    <div className=" col-span-1 lg:col-start-3">
                            <Infocard key={services.services[2].title} src={services.services[2].image} title={services.services[2].title} subTitle={services.services[2].subTitle} href={services.services[2].href} linkName={services.services[2].linkName}/>
                    </div>
                </div>
            </section>
        </Container>
    )
}