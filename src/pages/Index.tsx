import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Metrics from "@/components/Metrics";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        
        <div id="about">
          <About />
        </div>
        
        <Metrics />
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="skills">
          <Skills />
        </div>
        
        <div id="experience">
          <Experience />
        </div>
        
        <Education />
        
        <Testimonials />
        
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
