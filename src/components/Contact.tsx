import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Your Next <span className="gradient-text">Data Success Story</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground">
            Ready to collaborate? Let's automate your data flow — one pipeline at a time.
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 card-glow">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a 
              href="tel:+19402795685"
              className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-semibold">+1 (940) 279-5685</p>
              </div>
            </a>
            
            <a 
              href="mailto:saicharansid@gmail.com"
              className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-semibold">saicharansid@gmail.com</p>
              </div>
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-muted/30 rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all group"
            >
              <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-medium">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-muted/30 rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all group"
            >
              <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>
          
          {/* CTA Button */}
          <div className="text-center pt-6 border-t border-border">
            <Button variant="hero" size="xl" className="group">
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Book a 15-Minute Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
