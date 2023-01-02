import Head from "next/head";
import Footer from "../components/Gen/Footer";
import Navbar from "../components/Gen/Navbar";
import About from "../components/Home/About";
import Team from "../components/Home/Team";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import Work from "../components/Home/Work";
import Upcoming from "../components/Home/Upcoming";

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
      <Team />
      <Upcoming />
      <Footer />
    </>
  );
}
