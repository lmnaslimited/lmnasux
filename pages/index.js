import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import Homeproducts from '../components/homeproduct';
import Industries from "../components/industries";
import Homeservices from '../components/homeservices';
import Container from "../components/container";
import Homepricing from '../components/pricing/homepricing';
import Partners from '../components/partners';
import Footer from '../components/footer/footer';
import {getHomePageData} from '../lib/api'
import Head from 'next/head';

export default function Home({homeData}) {
  return (
    
      <Layout meta={homeData.homeMeta.meta} >
        <Head>
          <title>{homeData.title}</title>
        </Head>
        <Hero hero={homeData.hero}></Hero>
        <Container>
          <Homeproducts products={homeData.products}></Homeproducts>
          <Industries industries={homeData.industries}></Industries>
          <Homeservices services={homeData.services}></Homeservices>
          <Homepricing pricing={homeData.pricing.pricing}></Homepricing>
          <Partners partner={homeData.partner}/>
        </Container>
      </Layout>
    
  )
}

export async function getStaticProps() {
  const homeData = await getHomePageData()
  return{ 
    props: { homeData}
  }
}
