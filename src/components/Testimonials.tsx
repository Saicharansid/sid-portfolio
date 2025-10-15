import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Sai Charan transformed our pipeline reliability. We now ship data 10× faster with zero downtime.",
      author: "Senior Manager",
      company: "JPMorgan Chase"
    },
    {
      text: "A rare engineer who thinks like a business analyst and executes like a developer.",
      author: "Lead Data Architect",
      company: "Citi"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-8 card-glow relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-lg text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
