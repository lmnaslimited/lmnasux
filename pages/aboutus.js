import Layout from '../components/layout'
import Container from '../components/container';
import Abouts from '../components/about/about';
import {getAboutPageData} from '../lib/api'
import Ourgoal from '../components/about/ourgoal';
import Corevalues from '../components/about/corevalues';

export default function Aboutus({aboutData}) {
  return (
    <>
      <Layout key={aboutData.aboutmeta}>
        <Container>
          <Abouts abouts={aboutData.abouts.abouts} ></Abouts>
          <Ourgoal ourgoal={aboutData.ourgoal.ourgoal} ></Ourgoal>
          <Corevalues corevalues={aboutData.corevalues} ></Corevalues>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const aboutData = await getAboutPageData()
  return{ 
    props: { aboutData}
  }
}