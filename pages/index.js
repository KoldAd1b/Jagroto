import Head from "next/head";
import Footer from "../components/Gen/Footer";
import Navbar from "../components/Gen/Navbar";
import About from "../components/Home/About";
import Events from "../components/Home/Events";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import Work from "../components/Home/Work";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jagroto</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Projects />
      <Events />
      <Footer />
    </>
  );
}
