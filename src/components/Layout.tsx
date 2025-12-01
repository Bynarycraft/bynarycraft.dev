import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { AnimatedBackground } from "./AnimatedBackground";
import MobileMenu from "./MobileMenu";
import { FacebookIcon, Github, Instagram, Twitter } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/about", label: "About", icon: "👤" },
    { path: "/services", label: "Services", icon: "⚡" },
    { path: "/portfolio", label: "Portfolio", icon: "💼" },
    { path: "/virtual-assistant", label: "VA Services", icon: "📋" },
    { path: "/schoex", label: "SchoEx", icon: "📚" },
    { path: "/contact", label: "Contact", icon: "💬" },
  ];

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-lg bg-background/80" role="banner">
        <div className="container-custom">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity" aria-label="Bynarycraft - Go to home page">
              <img src="/logo.svg" alt="Bynarycraft Logo" className="h-8 sm:h-10 w-8 sm:w-10" />
              <span className="font-bold text-sm sm:text-lg hidden sm:inline">Excel Chiemeke · Bynarycraft</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-2" role="navigation" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  aria-current={isActive(link.path) ? "page" : undefined}
                >
                  <span className="mr-2" aria-hidden="true">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <Link to="/contact">
                <Button className="btn-primary" aria-label="Contact - Let's talk about your project">
                  Let's Talk <span className="ml-1" aria-hidden="true">→</span>
                </Button>
              </Link>
            </div>
            
            {/* Mobile Menu */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <MobileMenu navLinks={navLinks} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-12 pb-20" role="main">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card" role="contentinfo">
        <div className="container-custom py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
            <section aria-labelledby="footer-about">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.svg" alt="Bynarycraft Logo" className="h-8 w-8" />
                <h3 className="font-semibold" id="footer-about">Excel Chiemeke</h3>
              </div>
              <p className="text-m text-muted-foreground mb-4">
                Full-Stack Developer, Virtual Assistant & Tech Tutor
              </p>
              <div className="flex gap-3" role="list" aria-label="Social media links">
                <a 
                  href="https://github.com/bynarycraft" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Visit GitHub profile (opens in new window)"
                  role="listitem"
                >
                  <Github className="h-5 w-5" aria-hidden="true" />
                </a>
                <a 
                  href="https://www.facebook.com/gloryrealmer/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Visit Facebook profile (opens in new window)"
                  role="listitem"
                >
                  <FacebookIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                <a 
                  href="https://twitter.com/bynarycraft/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Visit Twitter profile (opens in new window)"
                  role="listitem"
                >
                  <Twitter className="h-5 w-5" aria-hidden="true" />
                </a>
                <a 
                  href="https://www.instagram.com/debynary_schoex/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Visit Instagram profile (opens in new window)"
                  role="listitem"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </section>
            
            <nav aria-labelledby="footer-links">
              <h4 className="font-semibold mb-5" id="footer-links">Quick Links</h4>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <nav aria-labelledby="footer-connect">
              <h4 className="font-semibold mb-4" id="footer-connect">Connect</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a 
                    href="https://t.me/bynarycraft" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Chat on Telegram (opens in new window)"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/2349017574838" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Chat on WhatsApp (opens in new window)"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:chiemekeexcel@gmail.com" 
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Send email to chiemekeexcel@gmail.com"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-m text-muted-foreground">
            © 2025 Excel Chiemeke (Bynarycraft). All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
