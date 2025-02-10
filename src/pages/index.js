import { Parallax } from "react-scroll-parallax";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import GridSections from "../components/GridSections";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <Layout>
       <Hero />
        <Hero />
        <GridSections />
        <Gallery />
      
   
    </Layout>
  );
}

