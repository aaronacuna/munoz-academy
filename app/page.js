import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Programs from "../components/Programs";
import About from "../components/About";
import Coaches from "../components/Coaches";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Programs />
      <About />
      <Coaches />
      <CTA />
      <Footer />
    </main>
  );
}
