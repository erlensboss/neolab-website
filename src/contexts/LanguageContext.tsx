import { createContext, useContext, ReactNode, useCallback, useMemo } from "react";
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
  
  // URL is the source of truth - derive language directly from pathname
  const language = useMemo(() => {
    return getLanguageFromPath(location.pathname);
  }, [location.pathname]);

  // Check if current route has a translation
  const currentRouteExists = useMemo(() => {
    return getRouteMapping(location.pathname) !== undefined;
  }, [location.pathname]);

  // Switch language - IMMEDIATELY navigate to the mapped route
  const switchLanguage = useCallback((targetLang: Language) => {
    // Don't do anything if already on the target language
    if (targetLang === language) return;
    
    // Get the alternate route for the current path
    const alternateRoute = getAlternateRoute(location.pathname, targetLang);
    
    // Persist preference for future visits
    localStorage.setItem(LANGUAGE_STORAGE_KEY, targetLang);
    
    // HARD NAVIGATION - immediately navigate to the new route
    navigate(alternateRoute, { replace: false });
  }, [language, location.pathname, navigate]);

  // Translation helper - uses derived language from URL
  const t = useCallback((lv: string, en: string) => {
    return language === "lv" ? lv : en;
  }, [language]);

  // Get localized path for navigation links
  const getLocalizedPath = useCallback((baseLvPath: string): string => {
    return getLocalizedPathUtil(baseLvPath, language);
  }, [language]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    language,
    switchLanguage,
    t,
    getLocalizedPath,
    currentRouteExists
  }), [language, switchLanguage, t, getLocalizedPath, currentRouteExists]);

  return (
    <LanguageContext.Provider value={contextValue}>
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
