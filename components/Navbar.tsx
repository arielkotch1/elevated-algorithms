import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container px-6">
        <div className="flex items-center justify-between glass-card px-6 py-3">
          {/* Logo */}
          <a href="#" className="font-mono font-bold text-lg">
            <span className="text-primary">&gt;</span> elevated algorithms
          </a>

          {/* Nav links */}
          <div className="hidden md:flex pr-10 ml-auto items-center gap-8">
            <a
              href="#process"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA */}
          <Button variant="hero" size="sm">
            <a href="#contact">Let's Talk</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
