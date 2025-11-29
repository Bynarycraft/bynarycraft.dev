import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";
import TechIconGrid from "@/components/TechIconGrid";

const Home = () => {
  return (
    <div className="container-custom">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left: Profile */}
          <div className="card-portfolio sticky top-32 animate-fade-in-up">
            <span className="pill-badge mb-6">Excel Chiemeke</span>

            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden mb-6 shadow-lg ring-1 ring-border">
              <img
                src={profileImg}
                alt="Excel Chiemeke"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="mb-4">Full-Stack Developer, Virtual Assistant & Tech Tutor</h1>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              I build modern web apps, streamline operations for busy founders, and train people at my growing tech startup <strong className="text-foreground">De Bynary SchoEx</strong>. At SchoEx I teach learners how to use a computer — from typing basics and Microsoft Office to professional workflows that prepare them for advanced tech courses and careers.
            </p>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm an ALX-certified Virtual Assistant, tech educator, community professional (moderator, community manager), full-stack web developer, technical content writer, and tech consultant who helps people discover the right path into tech.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-xl">💻</span>
                <p className="text-sm text-muted-foreground">React · Node.js · Tailwind · Python</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🤖</span>
                <p className="text-sm text-muted-foreground">AI prompt design, typing automation, process building</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🌐</span>
                <p className="text-sm text-muted-foreground">Community moderator, community manager & trusted Twitter/X space host</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <a href="https://t.me/bynarycraft" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary">
                  Telegram
                </Button>
              </a>
              <a href="https://wa.me/2349017574838" target="_blank" rel="noopener noreferrer">
                <Button className="btn-secondary">
                  WhatsApp
                </Button>
              </a>
            </div>
            
            <div className="space-y-3">
              <Link to="/about" className="text-accent hover:underline text-sm font-medium">
                See full journey →
              </Link>
              <Link to="/portfolio" className="text-accent hover:underline text-sm font-medium">
                View recent builds →
              </Link>
            </div>
          </div>
          
          {/* Right: Content Stack */}
          <div className="space-y-6">
            {/* Skill Cards: split frontend / backend / tools */}
            <div className="card-portfolio animate-fade-in-up">
              <h3 className="mb-4 text-xl">Tech Stacks</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-4 rounded-lg bg-card/60 border border-border">
              <div className="text-m font-medium mb-2">Tech Stacks</div>
              <div className="text-m text-muted-foreground">Next.js · React · Tailwind · TypeScript · JavaScript · Bootstrap</div>
                </div>
                <div className="p-4 rounded-lg bg-card/60 border border-border">
              <div className="text-m font-medium mb-2">Backend & Databases</div>
              <div className="text-m text-muted-foreground">Node.js · Python · MongoDB · PostgreSQL · REST APIs</div>
                </div>
                <div className="p-4 rounded-lg bg-card/60 border border-border">
                <div className="text-m font-medium mb-2">Community & Operations</div>
                <div className="text- text-muted-foreground">Community Moderation · Community Management · Discord/Telegram · Engagement Strategy</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-card/60 border border-border">
                  <div className="text-m font-medium mb-1">Security</div>
                  <div className="text-m text-muted-foreground">Strong fundamentals in cybersecurity; ongoing learning toward becoming a cybersecurity expert.</div>
                </div>
                <div className="p-3 rounded-lg bg-card/60 border border-border">
                  <div className="text-m font-medium mb-1">Content & Writing</div>
                  <div className="text-m text-muted-foreground">Technical content writing focused on Web3 projects, tutorials and product copy.</div>
                </div>
              </div>
            </div>

            {/* Tools & VA Tools */}
            <div className="card-portfolio animate-fade-in-up">
              <h4 className="mb-3 text-lg">Tech & Dev Tools</h4>
              <TechIconGrid
                items={[
                  { id: "react", name: "React" },
                  { id: "next", name: "Next.js" },
                  { id: "ts", name: "TypeScript" },
                  { id: "tailwind", name: "Tailwind" },
                  { id: "node", name: "Node.js" },
                  { id: "github", name: "GitHub" },
                ]}
              />

              <h4 className="mb-3 text-lg mt-6">VA & Productivity Tools</h4>
              <TechIconGrid
                items={[
                  { id: "notion", name: "Notion" },
                  { id: "calendly", name: "Calendly" },
                  { id: "vercel", name: "Vercel" },
                  { id: "netlify", name: "Netlify" },
                  { id: "ai", name: "AI/Prompting" },
                  { id: "git", name: "Git" },
                ]}
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="card-portfolio text-center">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="card-portfolio text-center">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
            </div>

            {/* CTA Links */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Link to="/services" className="card-portfolio text-center group hover:scale-105 transition-transform">
                <div className="text-3xl mb-3">🎯</div>
                <div className="text-sm font-medium">Services</div>
                <div className="text-xs text-muted-foreground mt-1">View all offerings</div>
              </Link>
              <Link to="/contact" className="card-portfolio text-center group hover:scale-105 transition-transform">
                <div className="text-3xl mb-3">✉️</div>
                <div className="text-sm font-medium">Get in Touch</div>
                <div className="text-xs text-muted-foreground mt-1">Start a project</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
