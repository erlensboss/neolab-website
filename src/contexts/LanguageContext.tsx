import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "lv" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (lv: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("neolab-lang");
      return (saved as Language) || "lv";
    }
    return "lv";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("neolab-lang", lang);
  };

  useEffect(() => {
    const saved = localStorage.getItem("neolab-lang");
    if (saved && (saved === "lv" || saved === "en")) {
      setLanguageState(saved);
    }
  }, []);

  const t = (lv: string, en: string) => (language === "lv" ? lv : en);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
