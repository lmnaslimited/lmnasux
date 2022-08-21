import { getAllServicesPageData, getServicePageData } from "../../lib/api"
import Image from "next/image";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Items from "./items"
export default function Services({service, preview})
{
    return(
      <>
      <Layout meta={service.serviceMeta.meta}>
    <Container>
        <Items key={service.title} title={service.title} src={service.image} subTitle={service.subTitle} card_title={service.card_title} ></Items>
    </Container>
      </Layout>

    </>
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