import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Language = "lv" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (lv: string, en: string) => string;
  getLocalizedPath: (basePath: string) => string;
  getBasePath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  
  // Detect language from URL
  const getLanguageFromPath = (pathname: string): Language => {
    return pathname.endsWith("/en") ? "en" : "lv";
  };

  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      return getLanguageFromPath(window.location.pathname);
    }
    return "lv";
  });

  // Update language when URL changes
  useEffect(() => {
    const detectedLang = getLanguageFromPath(location.pathname);
    if (detectedLang !== language) {
      setLanguageState(detectedLang);
    }
  }, [location.pathname]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (lv: string, en: string) => (language === "lv" ? lv : en);

  // Get localized path (add /en suffix if English)
  const getLocalizedPath = (basePath: string): string => {
    // Remove any existing /en suffix first
    const cleanPath = basePath.endsWith("/en") 
      ? basePath.slice(0, -3) 
      : basePath;
    
    if (language === "en") {
      return cleanPath === "/" ? "/en" : `${cleanPath}/en`;
    }
    return cleanPath;
  };

  // Get base path without language suffix
  const getBasePath = (path: string): string => {
    if (path === "/en") return "/";
    if (path.endsWith("/en")) {
      return path.slice(0, -3);
    }
    return path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLocalizedPath, getBasePath }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
