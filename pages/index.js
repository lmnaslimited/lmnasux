import Layout from '../components/layout'
import Hero from "../components/hero/hero";
import Product from "../components/product";
import Industries from "../components/industries";
import Services from "../components/services";
import Container from "../components/container";
import Pricing from "../components/pricing";
import Partners from '../components/partners';
import {getHomePageData} from '../lib/api'

export default function Home({homeData}) {
  return (
    <>
      <Layout>
        <Hero />
        <Container>
          <Product></Product>
          <Industries></Industries>
          <Services></Services>
          <Pricing></Pricing>
          <Partners partners={homeData.partners}/>
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