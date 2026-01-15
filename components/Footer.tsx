const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">&gt;</span> making AI sites real
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} • Built with intention
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
