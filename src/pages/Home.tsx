import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="container-custom">
      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Profile */}
          <div className="card-portfolio sticky top-32">
            <span className="pill-badge mb-6">Excel Chiemeke</span>
            
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-gradient-to-br from-accent/20 to-accent-orange/20">
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
            
            <h1 className="mb-4">Full-Stack Developer, Virtual Assistant & Tech Educator</h1>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I build modern web applications, streamline operations for busy founders, and train teams through{" "}
              <strong className="text-foreground">De Bynary SchoEx</strong>. With 10 years in tech and 3+ years in Web3 communities, I deliver fast, reliable solutions.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-xl">💻</span>
                <p className="text-sm text-muted-foreground">React · Node.js · Tailwind · Foundry · Solidity</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🤖</span>
                <p className="text-sm text-muted-foreground">AI prompt design, typing automation, process building</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🌐</span>
                <p className="text-sm text-muted-foreground">Web3 mod, community manager & trusted Twitter/X space host</p>
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
            
            <div className="flex flex-wrap gap-2 mb-6">
              {["HTML", "CSS", "JavaScript", "React", "Node.js", "AI"].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-accent hover:underline text-sm font-medium">
                See full journey →
              </Link>
              <Link to="/portfolio" className="text-accent hover:underline text-sm font-medium">
                View recent builds →
              </Link>
            </div>
          </div>
          
          {/* Right: SchoEx */}
          <div className="space-y-6">
            <div className="card-portfolio bg-card-dark">
              <span className="pill-badge mb-4">De Bynary SchoEx</span>
              
              <h2 className="mb-4">School of Excellence</h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A tech education platform training developers, virtual assistants, and Web3 community managers.
                We provide structured programs with hands-on projects and real-world experience.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-xl">👥</span>
                  <p className="text-sm text-muted-foreground">500+ students trained in coding and productivity</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">⚡</span>
                  <p className="text-sm text-muted-foreground">AI-powered curriculum and practical exercises</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">🔐</span>
                  <p className="text-sm text-muted-foreground">Web3 security, compliance, and moderation training</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <a href="mailto:debynaryschoex@gmail.com">
                  <Button className="btn-secondary">
                    Contact SchoEx
                  </Button>
                </a>
                <Link to="/about#schoex">
                  <Button variant="ghost" className="btn-ghost">
                    See programs
                  </Button>
                </Link>
              </div>
              
              <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-accent-green/20 to-accent/20 flex items-center justify-center text-4xl">
                📚
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card-portfolio text-center">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="card-portfolio text-center">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
