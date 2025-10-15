import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "JPMorgan Chase & Co.",
      role: "Data Engineer",
      period: "Sep 2021 – Jul 2023",
      achievements: [
        "Designed AWS-based ETL pipelines cutting latency by 35%",
        "Automated infrastructure deployments with Terraform, reducing manual work by 75%",
        "Partnered with BI teams to enable 99.9% uptime real-time dashboards"
      ]
    },
    {
      company: "Citigroup Inc.",
      role: "Data Engineer",
      period: "May 2020 – Aug 2021",
      achievements: [
        "Built multi-terabyte data pipelines on Azure Data Factory and PySpark",
        "Re-architected Synapse schemas to cut report times by 55%",
        "Centralized 10+ data sources using Kafka for real-time streaming"
      ]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 card-glow relative"
            >
              {/* Timeline Connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-full h-8 w-0.5 bg-gradient-to-b from-primary to-transparent hidden md:block" />
              )}
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.company}</h3>
                    <p className="text-lg text-primary font-semibold">{exp.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground md:text-right">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                    <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
