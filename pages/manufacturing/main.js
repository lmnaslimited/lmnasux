import React from "react";
import Image from "next/image";
import Whylmnas from "./whylmnas"
import Container from "../../components/container";
import Layout from "../../components/layout/index"
import { getIndustryPageData } from "../../lib/api";
import Industry from "./industry";
export default function Manufacturing({industryData}){
    return (
        <section>
        <Layout>
        <Container>
        <Whylmnas whylmnas={industryData.whylmnas} ></Whylmnas>
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