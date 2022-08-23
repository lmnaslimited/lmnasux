import Image from "next/image"
import Container from "../container"
import Partnercard from "./partnercard"
import Link from "next/link"
export default function Partner({ partner }) {
  return (
    <Container>
      <section className="my-48 border-2 bg-th-background-primary">
        <h1 className="text-xl text-th-text-dark font-bold bg-th-background-secondary text-center not-sr-only md:sr-only">{partner.heading}</h1>
        <div className="md:-mt-6 text-center items-center sr-only md:not-sr-only"><button className="text-3xl bg- font-bold text-th-text-dark justify-center text-center bg-th-background-secondary">{partner.heading}</button></div>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="col-span-2 lg:mt-8 py-4">
            <div className="md:w-full container md:h-full">
              <p className="leading-relaxed text-lg text-center text-th-text-medium">
                {partner.title}

              </p>
              <p className="leading-relaxed text-lg text-center text-th-text-medium">
                {partner.subTitle}
              </p>
            </div>
          </div>
          <div className="col-span-2 p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Partnercard key={partner.partner[0].title} src={partner.partner[0].image} title={partner.partner[0].title} subTitle={partner.partner[0].subTitle}></Partnercard>
              <Partnercard key={partner.partner[0].title} src={partner.partner[0].image} title={partner.partner[0].title} subTitle={partner.partner[0].subTitle}></Partnercard>
              <Partnercard key={partner.partner[0].title} src={partner.partner[0].image} title={partner.partner[0].title} subTitle={partner.partner[0].subTitle}></Partnercard>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}