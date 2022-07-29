import Layout from '../../components/layout'
import Whylmnas from './whylmnas'
import MAIN from './main'
export default function Manufacturing(manufacturing){
    return(
            <Layout>
            <section className="bg-white my-12 mx-6">
            <section className="bg-pink-25 md:px-12">
            <Whylmnas></Whylmnas>
            <MAIN></MAIN>
            </section>
           </section>
       </Layout>
    )
}