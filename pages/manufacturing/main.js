import React from "react";
import Image from "next/image";
import Whylmnas from "./whylmnas"
import Container from "../../components/container";
import Layout from "../../components/layout"
import { getIndustryPageData } from "../../lib/api";
import Industry from "./industry";
export default function Manufacturing({industryData}){
    return (
        <section>
        <Layout meta={industryData.industryMeta.meta}>
        <Container>
        <Industry industry={industryData.industry} ></Industry>
        </Container>
        </Layout>
        </section>
    )
}
export async function getStaticProps() {
    const industryData = await getIndustryPageData()
    return{ 
      props: { industryData}
    }
  }