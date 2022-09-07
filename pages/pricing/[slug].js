import { getAllPricingPageData, getPricePageData } from "../../lib/api"
import Image from "next/image";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Option from "./option";
export default function pricing({price, preview})
{
    return(
      
      <Layout meta={price.priceMeta.meta}>
    <Container>
    <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
                <div className="lg:flex items-center justify-between">
                    <div className=" lg:w-1/2 w-full">
                        <h1 role="heading" className="md:text-5xl text-3xl font-bold text-center leading-10 mt-3 text-gray-800">
                            {price.title}
                        </h1>
                        <p role="contentinfo" className="text-base leading-5 mt-5 text-gray-800 text-center xl:px-12">
                       {price.subTitle}</p>
                      
                    </div>
                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                      <div className="absolute w-full -ml-12 mt-24">
                        <Image width="700" height="400" src="/pricing/price-background-701x431.png" alt="background circle images" />
                        </div>
                        <Option key={price.option_a.price_title} price_title={price.option_a.price_title} price_subTitle={price.option_a.price_subTitle} linkName={price.option_a.linkName} href={price.option_a.href}></Option>
                        <Option key={price.option_b.price_title} price_title={price.option_b.price_title} price_subTitle={price.option_b.price_subTitle} linkName={price.option_b.linkName} href={price.option_b.href}></Option>
                        <Option key={price.option_c.price_title} price_title={price.option_c.price_title} price_subTitle={price.option_c.price_subTitle} linkName={price.option_c.linkName} href={price.option_c.href}></Option>
                         
                    </div>
                </div>
            </div>
    </Container>
      </Layout>

    
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