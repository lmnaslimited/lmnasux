import Footer from './footer/footer'
import Meta from './meta'
import Navbar from './navbar/navbar'
export default function Layout({ children, meta, footerData}) {
  return (
    
      <div className="bg-th-background-secondary">
        <Navbar />
        <Meta meta={meta} ></Meta>
        <div className="min-h-screen">
          <main>{children}</main>
        </div>
        <Footer></Footer>
      </div>
    
  )
}