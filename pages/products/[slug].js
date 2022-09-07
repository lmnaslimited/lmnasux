import { getAllProductsPageData, getProductPageData } from "../../lib/api"
import Image from "next/image";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Heroproduct from "./heroproduct";
import Social from "./social";
import Feature from "./feature";
import Subsection from "./subsection";
export default function Products({product, preview})
{
    return(
      
      <Layout  meta={product.productMeta.meta}>
    <Container>
    <Heroproduct key={product.hero_title} title={product.hero_title} subTitle={product.hero_subTitle} src={product.hero_image} ></Heroproduct>
   <section className="mb-32 bg-gray-50 p-4 text-center">
    <h2 className="text-3xl text-th-text-dark font-bold mb-20">{product.title}</h2>
    <div className="grid lg:gap-x-12 lg:grid-cols-3">
    <Social key={product.social.title} title={product.social.title} highlight={product.social.highlight} subTitle={product.social.subTitle} ></Social>
    
    <Social key={product.social.title} title={product.social.title} highlight={product.social.highlight} subTitle={product.social.subTitle} ></Social>
    
    <Social key={product.social.title} title={product.social.title} highlight={product.social.highlight} subTitle={product.social.subTitle} ></Social>   
    </div>
  </section>
  <Subsection key={product.subsection.title} title={product.subsection.title} subTitle={product.subsection.subTitle}></Subsection>
   
  
  <Feature key={product.feature.feature_a} feature_a={product.feature.feature_a} feature_b={product.feature.feature_b} feature_c={product.feature.feature_c} ></Feature>
  <section className="mb-32 bg-gray-50 p-4 text-center">
    <h2 className="text-3xl text-th-text-dark font-bold mb-20">Why is it so great?</h2>
    <div className="grid lg:gap-x-12 lg:grid-cols-3">
    <Social key={product.social.title} title={product.social.title} highlight={product.social.highlight} subTitle={product.social.subTitle} ></Social>
    
    <Social key={product.social.title} title={product.social.title} highlight={product.social.highlight} subTitle={product.social.subTitle} ></Social>
    
    <Social key={product.social.title} title={product.social.title} highlight={product.social.highlight} subTitle={product.social.subTitle} ></Social>   
    </div>
  </section>
    </Container>
      </Layout>

    
    )
}
export async function getStaticProps({ params, preview = null }) {
  const data= await getProductPageData(params.slug)
  return {
    props: {
      preview,
     product: {
        ...data
      },
    },
  }
}
export async function getStaticPaths() {
 const  products = await getAllProductsPageData()
 const paths = products.map((product) => ({
    params: { slug: product.slug },
  }))
  return {
    paths: products?.map((product) => `/products/${product.slug}`) || [],
    paths,
    fallback: false,
  }
    
}