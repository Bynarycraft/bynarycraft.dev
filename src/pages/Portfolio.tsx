const Portfolio = () => {
  const projects = [
    {
      title: "DeFi Dashboard",
      category: "Web3 · Full-Stack",
      description: "Real-time portfolio tracking for DeFi investors with wallet integration and transaction history.",
      tech: ["React", "Ethers.js", "Node.js", "PostgreSQL"],
      icon: "📊",
    },
    {
      title: "Community Platform",
      category: "Web3 · Community",
      description: "Discord and Telegram bot for automated moderation and engagement tracking.",
      tech: ["TypeScript", "Discord.js", "MongoDB"],
      icon: "🤖",
    },
    {
      title: "E-Learning Platform",
      category: "Education · Full-Stack",
      description: "Custom LMS for De Bynary SchoEx with video courses, assignments, and progress tracking.",
      tech: ["Next.js", "Tailwind", "Supabase"],
      icon: "📚",
    },
    {
      title: "Smart Contract Suite",
      category: "Web3 · Blockchain",
      description: "ERC-20 token with vesting, staking, and governance features for a DeFi protocol.",
      tech: ["Solidity", "Foundry", "Hardhat"],
      icon: "⛓️",
    },
    {
      title: "Productivity Dashboard",
      category: "VA · Automation",
      description: "Executive dashboard consolidating emails, calendar, tasks, and analytics in one place.",
      tech: ["React", "Google APIs", "Zapier"],
      icon: "⚡",
    },
    {
      title: "NFT Marketplace",
      category: "Web3 · Full-Stack",
      description: "Peer-to-peer NFT marketplace with IPFS storage and Ethereum smart contracts.",
      tech: ["React", "Solidity", "IPFS", "Ethers.js"],
      icon: "🎨",
    },
  ];

  return (
    <div className="container-custom">
      {/* Hero */}
      <section className="card-portfolio mb-12 text-center max-w-3xl mx-auto">
        <span className="pill-badge mb-6">Case Studies</span>
        <h1 className="mb-6">Products, operations, and communities built with intent.</h1>
        <p className="text-lg text-muted-foreground">
          Here are a few snapshots from recent engagements. Most include live dashboards, automation flows,
          and internal documentation delivered alongside the code.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="card-portfolio text-center">
          <div className="text-4xl font-bold text-accent mb-2">50+</div>
          <div className="text-sm text-muted-foreground">Projects Completed</div>
        </div>
        <div className="card-portfolio text-center">
          <div className="text-4xl font-bold text-accent mb-2">30+</div>
          <div className="text-sm text-muted-foreground">Happy Clients</div>
        </div>
        <div className="card-portfolio text-center">
          <div className="text-4xl font-bold text-accent mb-2">10+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </div>
        <div className="card-portfolio text-center">
          <div className="text-4xl font-bold text-accent mb-2">100%</div>
          <div className="text-sm text-muted-foreground">Client Satisfaction</div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="card-portfolio group">
              <div className="text-5xl mb-4">{project.icon}</div>
              <div className="text-xs font-bold text-accent mb-2 uppercase tracking-wide">
                {project.category}
              </div>
              <h3 className="text-xl mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="card-portfolio max-w-4xl mx-auto mb-12">
        <h2 className="mb-8 text-center">How I Work</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="text-lg mb-2">Discovery</h3>
            <p className="text-sm text-muted-foreground">
              Understanding your goals and requirements
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="text-lg mb-2">Planning</h3>
            <p className="text-sm text-muted-foreground">
              Creating detailed specs and timelines
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="text-lg mb-2">Building</h3>
            <p className="text-sm text-muted-foreground">
              Development with regular updates
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 className="text-lg mb-2">Delivery</h3>
            <p className="text-sm text-muted-foreground">
              Launch and ongoing support
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="card-portfolio text-center max-w-2xl mx-auto">
        <h2 className="mb-4">Have a project in mind?</h2>
        <p className="text-muted-foreground mb-6">
          Let's build something amazing together. Reach out to discuss your next project.
        </p>
        <a href="mailto:chiemekeexcel@gmail.com">
          <button className="btn-primary inline-flex items-center gap-2">
            Start Your Project →
          </button>
        </a>
      </section>
    </div>
  );
};

export default Portfolio;
