import { getAllProductsPageData, getProductPageData } from "../../lib/api"
import Image from "next/image";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Items from "./items"
export default function Products({product, preview})
{
    return(
      <>
      <Layout>
    <Container>
        <Items key={product.title} title={product.title} src={product.image} card_title={product.card_title} subTitle={product.subTitle} ></Items>
    </Container>
      </Layout>

    </>
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