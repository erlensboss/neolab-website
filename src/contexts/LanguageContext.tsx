import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  getLanguageFromPath, 
  getAlternateRoute, 
  getLocalizedPath as getLocalizedPathUtil,
  getRouteMapping 
} from "@/lib/routeMapping";

type Language = "lv" | "en";

interface LanguageContextType {
  language: Language;
  switchLanguage: (lang: Language) => void;
  t: (lv: string, en: string) => string;
  getLocalizedPath: (baseLvPath: string) => string;
  currentRouteExists: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = "neolab-preferred-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Derive language from URL path
  const [language, setLanguageState] = useState<Language>(() => {
    return getLanguageFromPath(window.location.pathname);
  });

  // Check if current route has a translation
  const currentRouteExists = getRouteMapping(location.pathname) !== undefined;

  // Sync language with URL changes
  useEffect(() => {
    const detectedLang = getLanguageFromPath(location.pathname);
    if (detectedLang !== language) {
      setLanguageState(detectedLang);
    }
    // Persist preference
    localStorage.setItem(LANGUAGE_STORAGE_KEY, detectedLang);
  }, [location.pathname]);

  // Switch language and navigate to the alternate route
  const switchLanguage = useCallback((targetLang: Language) => {
    if (targetLang === language) return;
    
    const alternateRoute = getAlternateRoute(location.pathname, targetLang);
    setLanguageState(targetLang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, targetLang);
    navigate(alternateRoute);
  }, [language, location.pathname, navigate]);

  // Translation helper
  const t = useCallback((lv: string, en: string) => {
    return language === "lv" ? lv : en;
  }, [language]);

  // Get localized path for navigation links
  const getLocalizedPath = useCallback((baseLvPath: string): string => {
    return getLocalizedPathUtil(baseLvPath, language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ 
      language, 
      switchLanguage, 
      t, 
      getLocalizedPath,
      currentRouteExists 
    }}>
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
