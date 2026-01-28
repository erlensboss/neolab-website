import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoBlack from "@/assets/logo-black.svg";

const navItems = [
  { label: "SEO & GEO", path: "/seo-un-geo" },
  { label: "AI Automatizācijas", path: "/ai-automatizacija" },
  { label: "Digitālā reklāma", path: "/performance-reklama" },
  { label: "AI Lab", path: "/ai-lab" },
  { label: "Par mums", path: "/par-mums" },
  { label: "Blog", path: "/blog" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container-neo">
        <div className="flex items-center justify-between h-18 md:h-22">
          {/* Logo with breathing room */}
          <Link to="/" className="flex items-center py-4">
            <img src={LogoBlack} alt="NEOLab" className="h-7 md:h-8" />
          </Link>

          {/* Desktop Navigation — more spacing */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="nav"
                  size="sm"
                  className={`px-4 ${
                    location.pathname === item.path
                      ? "text-primary"
                      : ""
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* CTA Button — visually dominant */}
          <div className="hidden lg:flex items-center">
            <Link to="/bezmaksas-konsultacija">
              <Button variant="nav-cta" size="default" className="ml-4">
                Bezmaksas konsultācija
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav className="container-neo py-6 flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === "/"
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-accent"
                }`}
              >
                Sākums
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-accent"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border">
                <Link to="/bezmaksas-konsultacija" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" size="lg" className="w-full">
                    Bezmaksas konsultācija
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
