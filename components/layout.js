import Footer from './footer/footer'
import Meta from './meta'
import Navbar from './navbar/navbar'
import { getFooterPageData } from '../lib/api'
export default function Layout({ children, meta, footerData}) {
  return (
    <>
      <div className="bg-th-background-secondary">
        <Navbar />
        <Meta meta={meta} ></Meta>
        <div className="min-h-screen">
          <main>{children}</main>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}
export async function getStaticProps() {
  const footerData = await getFooterPageData()
  return{ 
    props: { footerData}
  }
}

  
