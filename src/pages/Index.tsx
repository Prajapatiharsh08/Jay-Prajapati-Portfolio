
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechnicalSkills } from "@/components/TechnicalSkills";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <TechnicalSkills />
        <Experience />
        {/* <Certifications /> */}
        <Contact />
      </main>
    </div>
  );
};

export default Index;
