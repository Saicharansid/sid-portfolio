import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "M.S. in Data Science",
      institution: "University of North Texas",
      location: "Dallas, USA",
      gradient: "from-primary to-secondary"
    },
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "CVR College of Engineering",
      location: "Hyderabad, India",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 card-glow group"
            >
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${edu.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {edu.degree}
              </h3>
              <p className="text-muted-foreground font-medium mb-1">
                {edu.institution}
              </p>
              <p className="text-sm text-muted-foreground">
                📍 {edu.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
