import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LogoBlack from "@/assets/logo-black.svg";

const navItems = [
  { labelLv: "SEO & GEO", labelEn: "SEO & GEO", path: "/seo-un-geo" },
  { labelLv: "AI Automatizācijas", labelEn: "AI Automation", path: "/ai-automatizacija" },
  { labelLv: "Digitālā reklāma", labelEn: "Digital Advertising", path: "/performance-reklama" },
  { labelLv: "AI Lab", labelEn: "AI Lab", path: "/ai-lab" },
  { labelLv: "Par mums", labelEn: "About Us", path: "/par-mums" },
  { labelLv: "Blog", labelEn: "Blog", path: "/blog" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  // Scroll detection for sticky header styling
  useState(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/90 backdrop-blur-xl shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container-neo">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={LogoBlack} alt="NEOLab" className="h-6 md:h-7" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="nav"
                  size="sm"
                  className={`px-3 text-sm ${
                    location.pathname === item.path
                      ? "text-primary"
                      : ""
                  }`}
                >
                  {language === "lv" ? item.labelLv : item.labelEn}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Right side: Language Toggle + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex items-center gap-1 text-sm font-medium border border-border rounded-lg p-1 bg-background/50">
              <button
                onClick={() => setLanguage("lv")}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  language === "lv"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                LV
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <Link to="/bezmaksas-konsultacija">
              <Button variant="nav-cta" size="default">
                {t("Pieteikt konsultāciju", "Book Consultation")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Language Toggle */}
            <div className="flex items-center gap-0.5 text-xs font-medium border border-border rounded-md p-0.5 bg-background/50">
              <button
                onClick={() => setLanguage("lv")}
                className={`px-2 py-1 rounded transition-all ${
                  language === "lv"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                LV
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded transition-all ${
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <nav className="container-neo py-4 flex flex-col gap-1">
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
                  {language === "lv" ? item.labelLv : item.labelEn}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-border">
                <Link to="/bezmaksas-konsultacija" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" size="lg" className="w-full">
                    {t("Pieteikt konsultāciju", "Book Consultation")}
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
