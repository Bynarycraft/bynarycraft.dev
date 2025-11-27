import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface NavLink {
  path: string;
  label: string;
  icon: string;
}

const MobileMenu = ({ navLinks }: { navLinks: NavLink[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg">
          <nav className="flex flex-col items-center justify-center h-full gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="mr-3">{link.icon}</span>
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="btn-primary mt-4">
                Let's Talk <span className="ml-1">→</span>
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
