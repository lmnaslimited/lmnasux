import Layout from '../../components/layout'
import Industrycard from './industrycard'
export default function Industry({industry}){
    return(
            <section className="bg-white my-12 mx-6">
            <section className="bg-pink-25 md:px-12">
            <Industrycard key={industry.industry[0].title} src={industry.industry[1].image} title={industry.industry[0].title} subTitle={industry.industry[0].subTitle} href={industry.industry[0].href} linkname={industry.industry[0].linkname} ></Industrycard>
            <Industrycard key={industry.industry[0].title} src={industry.industry[0].image} title={industry.industry[0].title} subTitle={industry.industry[0].subTitle} href={industry.industry[0].href} linkname={industry.industry[0].linkname} ></Industrycard>
            
            </section>
           </section>
    )
}