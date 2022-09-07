import { getAllIndustriesPageData, getIndustryPageData } from "../../lib/api"
import Image from "next/image";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Whylmnas from "./whylmnas";
import Subsection_a from "./subsection_a";
import Subsection_b from "./subsection_b";
import Subsection_c from "./subsection_c";
export default function Industries({industry, preview})
{
    return(
      
      <Layout meta={industry.industryMeta.meta}>
      <Whylmnas title={industry.hero_title} src={industry.hero_image} point_a={industry.hero_point_a} point_b={industry.hero_point_b} point_c={industry.hero_point_c}></Whylmnas>
        <Container>
        <Subsection_a title={industry.title} subtitle={industry.subtitle} linkName={industry.linkName} image_a={industry.image_a} image_b={industry.image_b}></Subsection_a>
        <Subsection_b title={industry.title} subtitle={industry.subtitle} linkName={industry.linkName} image_a={industry.image_a} image_b={industry.image_b}></Subsection_b>
        <Subsection_c title={industry.title} subtitle={industry.subtitle} linkName={industry.linkName} image_a={industry.image_a} image_b={industry.image_b}></Subsection_c>
        <Subsection_a title={industry.title} subtitle={industry.subtitle} linkName={industry.linkName} image_a={industry.image_a} image_b={industry.image_b}></Subsection_a>
        <Subsection_b title={industry.title} subtitle={industry.subtitle} linkName={industry.linkName} image_a={industry.image_a} image_b={industry.image_b}></Subsection_b>
        <Subsection_c title={industry.title} subtitle={industry.subtitle} linkName={industry.linkName} image_a={industry.image_a} image_b={industry.image_b}></Subsection_c>
    </Container>
      </Layout>

    
    )
}
export async function getStaticProps({ params, preview = null }) {
  const data= await getIndustryPageData(params.slug)
  return {
    props: {
      preview,
     industry: {
        ...data
      },
    },
  }
}
export async function getStaticPaths() {
 const  industries = await getAllIndustriesPageData()
 const paths = industries.map((industry) => ({
    params: { slug: industry.slug },
  }))
  return {
    paths: industries?.map((industry) => `/industries/${industry.slug}`) || [],
    paths,
    fallback: false,
  }
    
}