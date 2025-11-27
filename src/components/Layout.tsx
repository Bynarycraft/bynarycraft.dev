import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { AnimatedBackground } from "./AnimatedBackground";
import MobileMenu from "./MobileMenu";
import { Github, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.svg";

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
    { path: "/contact", label: "Contact", icon: "💬" },
  ];

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-lg bg-background/80">
        <div className="container-custom">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={logo} alt="Logo" className="h-10 w-10" />
              <span className="font-bold text-lg hidden sm:inline">Excel Chiemeke · Bynarycraft</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <Link to="/contact">
                <Button className="btn-primary">
                  Let's Talk <span className="ml-1">→</span>
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
      <main className="pt-12 pb-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="Logo" className="h-8 w-8" />
                <h3 className="font-semibold">Excel Chiemeke</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Full-Stack Developer, Virtual Assistant & Tech Educator
              </p>
              <div className="flex gap-3">
                <a href="https://github.com/excelchiemeke" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/in/excelchiemeke" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/excelchiemeke" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex flex-col gap-2">
                <a href="https://t.me/bynarycraft" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Telegram
                </a>
                <a href="https://wa.me/2349017574838" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  WhatsApp
                </a>
                <a href="mailto:chiemekeexcel@gmail.com" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 Excel Chiemeke (Bynarycraft). All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
