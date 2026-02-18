import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";


const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact Us", path: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { toast } = useToast();
  const handleComingSoon = () => toast({ title: "Coming Soon!", description: "This feature will be available shortly." });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-narrow mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.webp" alt="Lendigo Microcare" className="h-10 md:h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://lendigomicrocare.com/repay" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                Repay Loan
              </Button>
            </a>
            <a href="https://loan.lendigomicrocare.com/login" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="hero-gradient border-0">
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <nav className="container-narrow mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors ${location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <a href="https://lendigomicrocare.com/repay" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    Repay Loan
                  </Button>
                </a>
                <a href="https://loan.lendigomicrocare.com/login" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full hero-gradient border-0" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
