import { Button } from "@/components/ui/button";
import { FileText, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Name with Gradient */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="gradient-text">Sai Charan Siddagoni</span>
          </h1>
          
          {/* Role */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xl md:text-2xl text-muted-foreground">
            <span className="font-semibold text-foreground">Data Engineer</span>
            <span className="text-primary">·</span>
            <span className="font-semibold text-foreground">Cloud & Pipeline Architect</span>
          </div>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I build <span className="text-primary font-semibold">reliable, scalable data systems</span> that turn chaos into clarity.
            <br />
            From petabyte pipelines to real-time dashboards — I help companies move faster with data that never breaks.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button variant="hero" size="xl" className="group">
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View Resume
            </Button>
            <Button variant="outline-glow" size="xl" className="group">
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Let's Talk Data
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
