import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/services/Services";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Socials from "./components/Socials/Socials";

export default function Home() {
  return (
    <div className="  ">
      <Hero />      
      <Services />
      <About />
      <Skills />
      <Contact />
      <Socials/>
      <div className="pb-60">
      </div>
    </div>
  );
}
