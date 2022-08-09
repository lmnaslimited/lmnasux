import Image from "next/image"
import Container from "./container"
import Cardtype from "./cardtype"
export default function Services({ services }) {
    return (
        <Container>
            <section className="lg:bg-gradient-to-r from-pink-50 via-white to-white bg-gradient-to-b from-pink-50 via-white to-white my-24 ">
                <div className="items-center lg:mt-12 not-sr-only lg:sr-only">
                    <h1 className="text-2xl text-center md:text-3xl font-bold md:font-sans md:pt-0 md:mt-12 lg:ml-12 text-center text-gray-800 antialiased uppercase">SERVICES</h1>
                </div>
                <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-1 ">
                    <div className="lg:row-span-2 lg:col-span-1 lg:row-start-1 lg:col-start-1 lg:bg-pink-50 sr-only lg:not-sr-only">
                        <div className="container justify-center px-4">
                            <h1 className="text-3xl font-bold md:font-sans text-center text-gray-800 antialiased uppercase mt-28">SERVICES</h1>
                            <p className="leading-relaxed text-md lg:text-center text-gray-800 mt-4">
                                Team LMNAs have built custom pre-sales enquiry and offer management solution for us, now we are 45% more efficient interms of offer closure
                            </p>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 md:border-b-2 ">
                        <div className="md:w-1/2 ">
                            {services.services.slice(0, 1).map((service) => (
                                <Cardtype key={service.title} src={service.image} title={service.title} subTitle={service.subTitle} />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-start-2 md:border-r-2">
                        {services.services.slice(1, 2).map((service) => (
                            <Cardtype key={service.title} src={service.image} title={service.title} subTitle={service.subTitle} />
                        ))}
                    </div>
                    <div className=" col-span-1 lg:col-start-3">
                        {services.services.slice(2, 3).map((service) => (
                            <Cardtype key={service.title} src={service.image} title={service.title} subTitle={service.subTitle} />
                        ))}
                    </div>
                </div>
            </section>
        </Container>
    )
}