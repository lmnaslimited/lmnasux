
import Footer from './footer/footer'
import Meta from './meta'
import Navbar from './navbar/navbar'
import AppContext from '../context/appContext'
export default function Layout({ children, meta }) {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Meta meta={meta} ></Meta>
        <div className="min-h-screen">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}