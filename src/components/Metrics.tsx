import { TrendingUp, Zap, Award, Clock } from "lucide-react";

const Metrics = () => {
  const metrics = [
    {
      icon: Award,
      value: "99.9%",
      label: "Uptime on production data marts",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      value: "2×",
      label: "Faster compliance reporting via Lakehouse",
      color: "text-secondary"
    },
    {
      icon: Zap,
      value: "35%",
      label: "Lower batch latency using AWS Glue + Lambda",
      color: "text-accent"
    },
    {
      icon: Clock,
      value: "55%",
      label: "Faster reporting with optimized Azure Synapse",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key <span className="gradient-text">Impact</span> Metrics
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 card-glow text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 mb-4 group-hover:animate-pulse-glow`}>
                  <Icon className={`w-8 h-8 ${metric.color}`} />
                </div>
                <div className={`text-4xl font-bold mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                <p className="text-sm text-muted-foreground leading-snug">
                  {metric.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
