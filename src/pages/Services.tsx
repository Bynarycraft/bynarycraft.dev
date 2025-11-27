import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Full-Stack Development",
      description: "Custom web applications built with React, Node.js, and modern tech stacks. From MVPs to production-ready platforms.",
      features: [
        "Frontend with React/Next.js",
        "Backend APIs & databases",
        "Responsive design",
        "Performance optimization",
      ],
    },
    {
      icon: "🌐",
      title: "Web3 Development",
      description: "Smart contracts, DeFi applications, and blockchain integrations for the decentralized web.",
      features: [
        "Smart contract development",
        "DApp frontend integration",
        "Token systems & NFTs",
        "Wallet connections",
      ],
    },
    {
      icon: "⚙️",
      title: "Virtual Assistant",
      description: "Streamline your operations with process automation, workflow management, and executive support.",
      features: [
        "Calendar & email management",
        "Process documentation",
        "Task automation",
        "Research & reporting",
      ],
    },
    {
      icon: "🎓",
      title: "Tech Training",
      description: "One-on-one coaching and team training through De Bynary SchoEx for developers and VAs.",
      features: [
        "Coding bootcamps",
        "Web3 fundamentals",
        "VA certification",
        "Custom curriculum",
      ],
    },
    {
      icon: "🛡️",
      title: "Web3 Community Management",
      description: "Moderation, engagement, and growth strategies for crypto communities on Discord, Telegram, and Twitter.",
      features: [
        "Community moderation",
        "Twitter/X space hosting",
        "Content strategy",
        "Compliance & security",
      ],
    },
    {
      icon: "🔧",
      title: "Technical Consulting",
      description: "Strategic advice on tech stack, architecture, hiring, and scaling your development team.",
      features: [
        "Tech stack selection",
        "Code audits",
        "Team augmentation",
        "Strategic planning",
      ],
    },
  ];

  return (
    <div className="container-custom">
      {/* Hero */}
      <section className="card-portfolio mb-12 text-center max-w-3xl mx-auto">
        <span className="pill-badge mb-6">Services & Retainers</span>
        <h1 className="mb-6">Everything you need to build, operate, educate, and communicate.</h1>
        <p className="text-lg text-muted-foreground">
          Whether you need a full-stack partner, a fractional chief-of-staff, a Web3 moderator, or tech consultant, 
          I plug in quickly and make life easy. Choose a single service or blend them into a custom retainer.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="card-portfolio flex flex-col">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="text-accent">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Retainers */}
      <section className="card-portfolio mb-12 max-w-4xl mx-auto">
        <h2 className="mb-6 text-center">Retainer Packages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-muted/30 border border-border">
            <h3 className="text-xl mb-2">Essential</h3>
            <div className="text-3xl font-bold text-accent mb-4">$2,000<span className="text-base font-normal text-muted-foreground">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-2 text-sm">
                <span className="text-accent">✓</span>
                <span>20 hours per month</span>
              </li>
              <li className="flex gap-2 text-sm">
                <span className="text-accent">✓</span>
                <span>One service focus</span>
              </li>
              <li className="flex gap-2 text-sm">
                <span className="text-accent">✓</span>
                <span>Weekly check-ins</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button className="btn-secondary w-full">Get Started</Button>
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-accent/10 border-2 border-accent relative overflow-hidden">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
              Popular
            </div>
            <h3 className="text-xl mb-2">Professional</h3>
            <div className="text-3xl font-bold text-accent mb-4">$4,500<span className="text-base font-normal text-muted-foreground">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-2 text-sm">
                <span className="text-accent">✓</span>
                <span>50 hours per month</span>
              </li>
              <li className="flex gap-2 text-sm">
                <span className="text-accent">✓</span>
                <span>Multiple services</span>
              </li>
              <li className="flex gap-2 text-sm">
                <span className="text-accent">✓</span>
                <span>Priority support</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button className="btn-primary w-full">Get Started</Button>
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-muted/30 border border-border">
            <h3 className="text-xl mb-2">Enterprise</h3>
            <div className="text-3xl font-bold text-accent mb-4">Custom</div>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-2 text-sm">
                <span className="text-accent">✓</span>
                <span>Unlimited hours</span>
              </li>
              <li className="flex gap-2 text-sm">
                <span className="text-accent">✓</span>
                <span>Full-service support</span>
              </li>
              <li className="flex gap-2 text-sm">
                <span className="text-accent">✓</span>
                <span>Dedicated access</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button className="btn-secondary w-full">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="card-portfolio text-center max-w-2xl mx-auto">
        <h2 className="mb-4">Ready to work together?</h2>
        <p className="text-muted-foreground mb-6">
          Let's discuss your project and find the perfect service package for your needs.
        </p>
        <Link to="/contact">
          <Button className="btn-primary text-lg">
            Start a Conversation →
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Services;
