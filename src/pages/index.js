import Layout from "../components/Layout";
import Hero from "../components/Hero";
import GridSections from "../components/GridSections";
import Gallery from "../components/Gallery";
import StickyMenu from "../components/StickyMenu";



export default function Home() {
  return (
    <Layout>
      <StickyMenu />
       <Hero />
        <GridSections />
        <Gallery />
      
   
    </Layout>
  );
}

