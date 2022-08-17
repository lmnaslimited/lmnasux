import { getAllPricingPageData, getPricePageData } from "../../lib/api"
import Image from "next/image";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Items from "./items"
export default function pricing({price, preview})
{
    return(
      <>
      <Layout>
    <Container>
        <Items></Items>
    </Container>
      </Layout>

    </>
    )
}
export async function getStaticProps({ params, preview = null }) {
  const data= await getPricePageData(params.slug)
  return {
    props: {
      preview,
     price: {
        ...data
      },
    },
  }
}
export async function getStaticPaths() {
 const  pricing = await getAllPricingPageData()
 const paths = pricing.map((price) => ({
    params: { slug: price.slug },
  }))
  return {
    paths: pricing?.map((price) => `/pricing/${price.slug}`) || [],
    paths,
    fallback: false,
  }
    
}