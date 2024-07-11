import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/services/Services";
import Skills from "@/components/Skills/Skills";
import Socials from "@/components/Socials/Socials";

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
