import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative  min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-glow" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mt-20 relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-secondary/50 backdrop-blur-sm animate-fade-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">
              From prototype to production
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Your AI site.
            <br />
            <span className="text-gradient">Actually working.</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            I take AI-generated websites and transform them into fully functional, 
            production-ready applications. No more broken links, fake buttons, or 
            placeholder content.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Let's Ship It
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#process">See How It Works</a>
            </Button>
          </div>

          {/* Terminal preview */}
          <div 
            className="mt-16 glass-card p-1 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="bg-secondary/80 rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs font-mono text-muted-foreground">terminal</span>
              </div>
              <div className="p-4 font-mono text-sm text-left">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span>npx ship-ai-site --make-functional</span>
                  <span className="w-2 h-4 bg-primary animate-blink" />
                </div>
                <div className="mt-2 text-green-400">
                  ✓ Connecting real backend...
                </div>
                <div className="text-green-400">
                  ✓ Implementing auth flows...
                </div>
                <div className="text-green-400">
                  ✓ Deploying to production...
                </div>
                <div className="mt-2 text-primary">
                  → Your site is now live! 🚀
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
