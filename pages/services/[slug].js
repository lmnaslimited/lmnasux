import { getAllServicesPageData, getServicePageData } from "../../lib/api"
import Image from "next/image";
import Container from "../../components/container";
import Hero from "./hero";
import Layout from "../../components/layout";
import Feature from "./feature";
import Social from "./social";
import Subsection from "./subsection";
export default function Services({service, preview})
{
    return(
      <Layout  meta={service.serviceMeta.meta}>
      <Container>
      <Hero key={service.hero_title} title={service.hero_title} subTitle={service.hero_subTitle} src={service.hero_image} ></Hero>
     <section className="mb-32 bg-gray-50 p-4 text-center">
      <h2 className="text-3xl text-th-text-dark font-bold mb-20">{service.title}</h2>
      <div className="grid lg:gap-x-12 lg:grid-cols-3">
      <Social key={service.social.title} title={service.social.title} highlight={service.social.highlight} subTitle={service.social.subTitle} ></Social>
      
      <Social key={service.social.title} title={service.social.title} highlight={service.social.highlight} subTitle={service.social.subTitle} ></Social>
      
      <Social key={service.social.title} title={service.social.title} highlight={service.social.highlight} subTitle={service.social.subTitle} ></Social>   
      </div>
    </section>
    <Subsection key={service.subsection.title} title={service.subsection.title} subTitle={service.subsection.subTitle}></Subsection>
     
    
    <Feature key={service.feature.feature_a} feature_a={service.feature.feature_a} feature_b={service.feature.feature_b} feature_c={service.feature.feature_c} ></Feature>
    <section className="mb-32 bg-gray-50 p-4 text-center">
      <h2 className="text-3xl text-th-text-dark font-bold mb-20">Why is it so great?</h2>
      <div className="grid lg:gap-x-12 lg:grid-cols-3">
      <Social key={service.social.title} title={service.social.title} highlight={service.social.highlight} subTitle={service.social.subTitle} ></Social>
      
      <Social key={service.social.title} title={service.social.title} highlight={service.social.highlight} subTitle={service.social.subTitle} ></Social>
      
      <Social key={service.social.title} title={service.social.title} highlight={service.social.highlight} subTitle={service.social.subTitle} ></Social>   
      </div>
    </section>
      </Container>
        </Layout>
    )
}
export async function getStaticProps({ params, preview = null }) {
  const data= await getServicePageData(params.slug)
  return {
    props: {
      preview,
     service: {
        ...data
      },
    },
  }
}
export async function getStaticPaths() {
 const  services = await getAllServicesPageData()
 const paths = services.map((service) => ({
    params: { slug: service.slug },
  }))
  return {
    paths: services?.map((service) => `/services/${service.slug}`) || [],
    paths,
    fallback: false,
  }
    
}