import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Compliance from "@/components/Compliance";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import SolarRoiCalculator from "@/components/SolarRoiCalculator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <TrustMarquee />
      <About />
      <Services />
      <Compliance />
      <Projects />
      <Gallery />
      <SolarRoiCalculator />
      <Contact />
      <Footer />
    </>
  );
}
