import { useState } from "react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "E-Learning Platform",
      category: "Web",
      description: "Custom LMS for De Bynary SchoEx with video courses, assignments, progress tracking, and student management.",
      tech: ["Next.js", "Tailwind", "Supabase"],
      icon: "📚",
    },
    {
      title: "Executive Dashboard",
      category: "VA",
      description: "Consolidated dashboard for email, calendar, tasks, and analytics integration for busy executives.",
      tech: ["React", "Google APIs", "Zapier"],
      icon: "⚡",
    },
    {
      title: "Tech Content Hub",
      category: "Content",
      description: "Technical content platform with tutorials, guides, and professional articles on development and tech career growth.",
      tech: ["Next.js", "Markdown", "SEO"],
      icon: "✍️",
    },
    {
      title: "Community Moderation Suite",
      category: "Community",
      description: "Discord and Telegram moderation tools with engagement tracking, member management, and community health analytics.",
      tech: ["TypeScript", "Discord.js", "MongoDB"],
      icon: "🤖",
    },
    {
      title: "Virtual Assistance Platform",
      category: "VA",
      description: "Automation toolkit for VAs including task scheduling, email templates, and productivity workflow optimization.",
      tech: ["React", "Node.js", "PostgreSQL"],
      icon: "📋",
    },
    {
      title: "Digital Literacy Learning System",
      category: "Web",
      description: "Interactive platform teaching computer basics, Microsoft Office, and digital skills to beginners and teens.",
      tech: ["Next.js", "Tailwind", "Supabase"],
      icon: "💻",
    },
    {
      title: "Beginner Tech Advisory Website",
      category: "Consulting",
      description: "Career guidance portal helping aspiring tech talents discover learning paths, career roadmaps, and mentorship.",
      tech: ["React", "TypeScript", "Tailwind"],
      icon: "🎯",
    },
    {
      title: "Community Growth Strategy",
      category: "Community",
      description: "Community engagement and growth strategy execution that helped tech initiatives scale and build engaged audiences.",
      tech: ["Discord", "Analytics", "Strategy"],
      icon: "📈",
    },
  ];

  const filters = ["All", "Web", "VA", "Community", "Content", "Consulting"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="container-custom">
      {/* Hero */}
      <section className="card-portfolio mb-12 text-center max-w-3xl mx-auto animate-fade-in-up" aria-labelledby="portfolio-title">
        <span className="pill-badge mb-6">Portfolio</span>
        <h1 className="mb-6" id="portfolio-title">Projects, Platforms & Communities Built with Purpose</h1>
        <p className="text-lg text-muted-foreground">
          A selection of recent projects spanning web development, tech education, community management, content creation, and consulting. Each represents a commitment to quality and real-world impact.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12" aria-labelledby="stats-title">
        <h2 id="stats-title" className="sr-only">Portfolio Statistics</h2>
        <div className="card-portfolio text-center animate-fade-in-up">
          <div className="text-4xl font-bold text-accent mb-2" aria-label="50 projects completed">50+</div>
          <div className="text-sm text-muted-foreground">Projects Completed</div>
        </div>
        <div className="card-portfolio text-center animate-fade-in-up">
          <div className="text-4xl font-bold text-accent mb-2" aria-label="30 happy clients">30+</div>
          <div className="text-sm text-muted-foreground">Happy Clients</div>
        </div>
        <div className="card-portfolio text-center animate-fade-in-up">
          <div className="text-4xl font-bold text-accent mb-2" aria-label="10 years of experience">10+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </div>
        <div className="card-portfolio text-center animate-fade-in-up">
          <div className="text-4xl font-bold text-accent mb-2" aria-label="100 percent client satisfaction">100%</div>
          <div className="text-sm text-muted-foreground">Client Satisfaction</div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="flex flex-wrap justify-center gap-3 mb-12" aria-labelledby="filter-title">
        <h2 id="filter-title" className="sr-only">Filter Projects by Category</h2>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === filter
                ? "bg-accent text-accent-foreground scale-105"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
            aria-pressed={activeFilter === filter}
            aria-label={`Filter projects by ${filter} category`}
          >
            {filter}
          </button>
        ))}
      </section>

      {/* Projects Grid */}
      <section className="mb-12" aria-labelledby="projects-title">
        <h2 id="projects-title" className="sr-only">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <article
              key={project.title} 
              className="card-portfolio group hover:scale-105 transition-transform animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform" aria-hidden="true">{project.icon}</div>
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-3">
                <span className="sr-only">Category: </span>{project.category}
              </div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-accent/5 border border-accent/20 text-accent text-xs font-medium hover:bg-accent/10 transition-colors"
                    role="listitem"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="card-portfolio max-w-4xl mx-auto mb-12 animate-fade-in-up" aria-labelledby="process-title">
        <h2 className="mb-8 text-center" id="process-title">My Development Process</h2>
        <div className="grid md:grid-cols-4 gap-6" role="list">
          <div className="text-center" role="listitem">
            <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold" aria-hidden="true">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">Discovery</h3>
            <p className="text-sm text-muted-foreground">
              Deep dive into your goals, audience, and requirements
            </p>
          </div>
          <div className="text-center" role="listitem">
            <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold" aria-hidden="true">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2">Planning</h3>
            <p className="text-sm text-muted-foreground">
              Detailed specifications, architecture, and timeline
            </p>
          </div>
          <div className="text-center" role="listitem">
            <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold" aria-hidden="true">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2">Building</h3>
            <p className="text-sm text-muted-foreground">
              Iterative development with regular updates and testing
            </p>
          </div>
          <div className="text-center" role="listitem">
            <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold" aria-hidden="true">
              4
            </div>
            <h3 className="text-lg font-semibold mb-2">Delivery</h3>
            <p className="text-sm text-muted-foreground">
              Launch, training, and ongoing support
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="card-portfolio text-center max-w-2xl mx-auto animate-fade-in-up" aria-labelledby="cta-title">
        <h2 className="mb-4" id="cta-title">Have a project in mind?</h2>
        <p className="text-muted-foreground mb-6">
          Let's discuss your vision and create something amazing together.
        </p>
        <a href="mailto:chiemekeexcel@gmail.com" aria-label="Start your project - send email">
          <button className="btn-primary inline-flex items-center gap-2">
            Start Your Project <span aria-hidden="true">→</span>
          </button>
        </a>
      </section>
    </div>
  );
};

export default Portfolio;
