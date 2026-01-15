import { X, Check } from "lucide-react";

const Problem = () => {
  const problems = [
    "Buttons that go nowhere",
    "Forms that don't submit",
    "Authentication that's just UI",
    "Databases that don't exist",
    "APIs that return nothing",
  ];

  const solutions = [
    "Fully wired interactions",
    "Real data submission & validation",
    "Working auth with sessions",
    "Connected database & storage",
    "Live API integrations",
  ];

  return (
    <section className="py-24 relative">
      <div className="px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The AI built it. <span className="text-gradient">I make it real.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              AI tools create beautiful interfaces, but the functionality? 
              That's where things break down.
            </p>
          </div>

          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problems */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold">What AI gives you</h3>
              </div>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <X className="w-4 h-4 text-destructive/60 shrink-0" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="glass-card p-8 border-gradient">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">What I deliver</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-3 text-foreground"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
