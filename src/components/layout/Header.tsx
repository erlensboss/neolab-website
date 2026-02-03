import { useState, useEffect, useCallback, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { navItems, getRouteMapping } from "@/lib/routeMapping";
import LogoBlack from "@/assets/logo-black.svg";

// Memoized Header component for performance
export const Header = memo(function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, switchLanguage, t, getLocalizedPath } = useLanguage();

  // Scroll detection with throttling for performance
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle language switch - memoized
  const handleLanguageSwitch = useCallback((newLang: "lv" | "en") => {
    switchLanguage(newLang);
  }, [switchLanguage]);

  // Check if current path matches nav item - memoized
  const isActivePath = useCallback((lvPath: string) => {
    const mapping = getRouteMapping(location.pathname);
    if (!mapping) return false;
    return mapping.lv === lvPath;
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50" 
          : "bg-background/70 backdrop-blur-xl border-b border-border/30"
      }`}
    >
      <div className="container-neo">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo — Enlarged */}
          <Link to={getLocalizedPath("/")} className="flex items-center">
            <img src={LogoBlack} alt="NEOLab" className="h-8 md:h-10" />
          </Link>

          {/* Desktop Navigation — Better spacing */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.lv} to={getLocalizedPath(item.lv)}>
                <Button
                  variant="nav"
                  size="sm"
                  className={`px-4 text-sm font-medium ${
                    isActivePath(item.lv)
                      ? "text-primary bg-primary/5"
                      : ""
                  }`}
                >
                  {language === "lv" ? item.labelLv : item.labelEn}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Right side: Language Toggle + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Language Toggle — Enhanced */}
            <div className="flex items-center gap-1 text-sm font-medium border border-border rounded-lg p-1 bg-background/80 shadow-sm">
              <button
                onClick={() => handleLanguageSwitch("lv")}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  language === "lv"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                LV
              </button>
              <button
                onClick={() => handleLanguageSwitch("en")}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  language === "en"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA Button — Enhanced with glow */}
            <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
              <Button 
                variant="nav-cta" 
                size="default" 
                className="shadow-md hover:shadow-orange transition-shadow px-6"
              >
                {t("Pieteikt konsultāciju", "Book Consultation")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Language Toggle */}
            <div className="flex items-center gap-0.5 text-xs font-medium border border-border rounded-md p-0.5 bg-background/80">
              <button
                onClick={() => handleLanguageSwitch("lv")}
                className={`px-2 py-1 rounded transition-all ${
                  language === "lv"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                LV
              </button>
              <button
                onClick={() => handleLanguageSwitch("en")}
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
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border"
          >
            <nav className="container-neo py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.lv}
                  to={getLocalizedPath(item.lv)}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                    isActivePath(item.lv)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-accent"
                  }`}
                >
                  {language === "lv" ? item.labelLv : item.labelEn}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-border">
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")} onClick={() => setIsOpen(false)}>
                  <Button variant="hero" size="lg" className="w-full shadow-orange">
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
});
