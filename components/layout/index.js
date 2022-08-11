
import Footer from '../footer/footer'
import Homemeta from '../homemeta'
import Navbar from '../navbar/navbar'
export default function Index({ children }) {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Homemeta></Homemeta>
        <div className="min-h-screen">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}