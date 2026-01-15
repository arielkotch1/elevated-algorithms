import { Send, Code2, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Send,
      number: "01",
      title: "Send your project",
      description:
        "Share your AI-generated site, Figma, or design files. I'll assess what's needed to make it functional.",
    },
    {
      icon: Code2,
      number: "02",
      title: "I build it out",
      description:
        "Real backend integration, working forms, auth, payments, APIs — whatever your project needs to actually work.",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Ship to production",
      description:
        "Deployed, tested, and ready for real users. Your AI prototype is now a production application.",
    },
  ];

  return (
    <section id="process" className="py-24 relative">
      {/* Gradient accent */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-primary text-sm mb-4">
              // HOW IT WORKS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Three steps to <span className="text-gradient">functional</span>
            </h2>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="glass-card p-8 group hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-mono text-3xl font-bold text-muted/50 group-hover:text-primary/30 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
