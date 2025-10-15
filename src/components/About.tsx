import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "Cloud-native pipelines that scale effortlessly",
    "End-to-end automation using Terraform, Airflow, and DBT",
    "Collaboration with BI & Data Science teams for actionable insights"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 card-glow">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a Data Engineer with <span className="text-primary font-semibold">3+ years of experience</span> designing 
            and deploying modern data ecosystems across <span className="text-secondary font-semibold">AWS, Azure, and GCP</span>.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            At <span className="text-foreground font-semibold">JPMorgan Chase</span> and <span className="text-foreground font-semibold">Citigroup</span>, 
            I delivered near real-time reporting systems with <span className="text-accent font-semibold">99.9% uptime</span>, 
            automated data governance with <span className="text-accent font-semibold">100% lineage coverage</span>, 
            and cut ETL latency by <span className="text-accent font-semibold">35%</span>.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I love the intersection of <span className="gradient-text font-semibold">engineering + analytics</span> — 
            where clean data meets business impact.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-4">What I Bring:</h3>
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <p className="text-foreground">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
