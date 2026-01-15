"use client";
import { ArrowUpRight } from "lucide-react";

const Work = () => {
  const projects = [
    {
      title: "ChainPort",
      description:
        "Cross-chain asset bridging platform enabling secure token transfers across multiple blockchains with institutional-grade security and monitoring.",
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "Web3",
        "Solidity",
      ],
      link: "https://arielkotch.carbonmade.com/projects/7279703",
    },
    {
      title: "Voltage Finance",
      description:
        "DeFi platform for trading, staking, bridging, and launching tokens, reaching $2M in liquidity and $60K in fundraising.",
      stack: ["React", "Redux", "Next.js", "The Graph", "Solidity", "Web3"],
      link: "https://arielkotch.carbonmade.com/projects/7267104",
    },
    {
      title: "CryptoProof",
      description:
        "Crypto asset verification platform bridging financial institutions and public blockchains, enabling secure AML and ownership validation.",
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "Solidity",
        "Web3",
      ],
      link: "https://arielkotch.carbonmade.com/projects/7249235",
    },

    {
      title: "Asset Validation Platform",
      description:
        "On-chain asset validation system allowing institutions to verify crypto ownership and balances across multiple blockchains.",
      stack: ["React", "Next.js", "Redux RTK Query", "Solidity", "Web3"],
      link: "https://arielkotch.carbonmade.com/projects/7251225",
    },
    {
      title: "Maalka Energy Analytics",
      description:
        "Building energy analytics platform providing granular energy-use breakdowns to inform efficiency investments across portfolios.",
      stack: ["React", "AngularJS", "Apollo GraphQL", "Python", "Docker"],
      link: "https://arielkotch.carbonmade.com/projects/7233716",
    },
    {
      title: "Portfolio Codes Assessment Tool",
      description:
        "Municipal assessment tool enabling quick analysis of building energy end-use breakdowns for strategic planning.",
      stack: ["React", "Apollo GraphQL", "REST APIs", "Data Visualization"],
      link: "https://arielkotch.carbonmade.com/projects/7225001",
    },
  ];

  return (
    <section id="work" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-primary text-sm mb-4">
              // PAST WORK
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Recent builds that <span className="text-gradient">shipped</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Production launches across SaaS, support, and web3—built
              end-to-end with the same stack I’ll use for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                onClick={() => {
                  window.open(project?.link, "_blank");
                }}
                key={project.title}
                className="glass-card p-8 group  hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary/70" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground/80">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-full bg-secondary/50 border border-border/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
