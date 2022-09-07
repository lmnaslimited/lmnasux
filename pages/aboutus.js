import Layout from '../components/layout'
import Container from '../components/container';
import Abouts from '../components/about/about';
import {getAboutPageData} from '../lib/api'
import Ourgoal from '../components/about/ourgoal';
import Corevalues from '../components/about/corevalues';

export default function Aboutus({aboutData}) {
  return (
    
      <Layout meta={aboutData.abouts.aboutMeta}>
        <Container>
          <Abouts abouts={aboutData.abouts.abouts} ></Abouts>
          <Ourgoal abouts={aboutData.abouts} ></Ourgoal>
          <Corevalues abouts={aboutData.abouts} ></Corevalues>
        </Container>
      </Layout>
    
  )
}

export async function getStaticProps() {
  const aboutData = await getAboutPageData()
  return{ 
    props: { aboutData}
  }
}