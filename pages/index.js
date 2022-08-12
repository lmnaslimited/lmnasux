import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import Product from "../components/product";
import Industries from "../components/industries";
import Services from "../components/services";
import Container from "../components/container";
import Pricing from '../components/pricing/pricing';
import Partners from '../components/partners';
import Footer from '../components/footer/footer';
import {getHomePageData} from '../lib/api'
import Head from 'next/head';

export default function Home({homeData}) {
  return (
    <>
      <Layout meta={homeData.homeMeta.meta} >
        <Head>
          <title>{homeData.title}</title>
        </Head>
        <Hero hero={homeData.hero}></Hero>
        <Container>
          <Product products={homeData.products}></Product>
          <Industries industries={homeData.industries}></Industries>
          <Services services={homeData.services}></Services>
          <Pricing pricing={homeData.pricing.pricing}></Pricing>
          <Partners partner={homeData.partner}/>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const homeData = await getHomePageData()
  return{ 
    props: { homeData}
  }
}
