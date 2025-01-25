import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero";
import Hero1 from "@/components/Hero1";
import Services from "@/components/services/Services";
import Skills from "@/components/Skills/Skills";
import Socials from "@/components/Socials/Socials";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="  ">
      {/* <Hero1 /> */}
      <Hero />      
      <About />
      <WorkExperience />
      <Skills />
      <Services />
      <Contact />
      <Socials/>
      <div className="pb-60">
      </div>
    </div>
  );
}
