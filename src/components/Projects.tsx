import { ExternalLink } from "lucide-react";
import lakehouseImg from "@/assets/project-lakehouse.jpg";
import retailImg from "@/assets/project-retail.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Regulatory Compliance Data Lakehouse",
      tech: "AWS S3 · Delta Lake · Redshift Spectrum",
      description: "Unified trade & audit data into a single source of truth.",
      impact: "Enabled regulatory teams to run queries on petabyte-scale datasets in seconds and deliver reports twice as fast.",
      image: lakehouseImg,
      gradient: "from-primary to-secondary"
    },
    {
      title: "Omnichannel Retail Analytics Platform",
      tech: "AWS Glue · Kafka · Athena",
      description: "Integrated in-store & online sales streams to give marketing teams real-time visibility.",
      impact: "Improved attribution accuracy by 35% and reduced manual data reconciliation by 70%.",
      image: retailImg,
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects That Made <span className="gradient-text">Impact</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden card-glow group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(' · ').map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="pt-2 border-t border-border">
                  <p className="text-sm text-foreground font-medium">
                    📊 Impact: <span className="text-accent">{project.impact}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
