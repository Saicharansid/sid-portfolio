const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Databases",
      skills: ["Python", "SQL", "Java", "Scala", "C++", "Shell Scripting"]
    },
    {
      title: "Big Data & Cloud Platforms",
      skills: ["Spark", "Databricks", "Hadoop", "AWS", "Azure", "GCP", "Glue", "S3", "Redshift", "Lambda", "Data Factory", "Synapse", "BigQuery", "Dataflow"]
    },
    {
      title: "Data Engineering Toolkit",
      skills: ["Airflow", "DBT", "Kafka", "NiFi", "Terraform", "Snowflake", "Redshift", "Power BI", "Tableau"]
    },
    {
      title: "Infrastructure & Automation",
      skills: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Azure DevOps"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills <span className="gradient-text">Snapshot</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 card-glow"
            >
              <h3 className="text-xl font-bold text-foreground mb-4 pb-3 border-b border-border">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-muted/50 text-foreground rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
