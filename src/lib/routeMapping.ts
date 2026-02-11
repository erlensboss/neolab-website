// One-to-one route mapping between Latvian and English
// LV routes are the base paths, EN routes are under /en with English slugs

export interface RouteMapping {
  lv: string;
  en: string;
  labelLv: string;
  labelEn: string;
}

export const routeMappings: RouteMapping[] = [
  { lv: "/", en: "/en", labelLv: "Sākums", labelEn: "Home" },
  { lv: "/seo-un-geo", en: "/en/seo-and-geo", labelLv: "SEO & GEO", labelEn: "SEO & GEO" },
  { lv: "/seo-un-geo-pakalpojumi", en: "/en/seo-and-geo-services", labelLv: "SEO un GEO pakalpojumi", labelEn: "SEO & GEO Services" },
  { lv: "/ai-automatizacija", en: "/en/ai-automations", labelLv: "AI Automatizācijas", labelEn: "AI Automation" },
  { lv: "/ai-automatizacija/ai-pakalpojumi", en: "/en/ai-automations/ai-services", labelLv: "AI pakalpojumi", labelEn: "AI Services" },
  { lv: "/ai-automatizacija/linkedin-content-system", en: "/en/ai-automations/linkedin-content-system", labelLv: "LinkedIn Content System", labelEn: "LinkedIn Content System" },
  { lv: "/ai-automatizacija/lead-capture-agent", en: "/en/ai-automations/lead-capture-agent", labelLv: "Lead Capture Agent", labelEn: "Lead Capture Agent" },
  { lv: "/ai-automatizacija/speed-to-lead", en: "/en/ai-automations/speed-to-lead", labelLv: "Speed-to-Lead System", labelEn: "Speed-to-Lead System" },
  { lv: "/ai-automatizacija/client-onboarding", en: "/en/ai-automations/client-onboarding", labelLv: "Client Onboarding System", labelEn: "Client Onboarding System" },
  { lv: "/ai-automatizacija/support-chatbot", en: "/en/ai-automations/support-chatbot", labelLv: "Customer Support Chatbot", labelEn: "Customer Support Chatbot" },
  { lv: "/digitala-reklama", en: "/en/digital-advertising", labelLv: "Digitālā reklāma", labelEn: "Digital Advertising" },
  { lv: "/digitala-reklama/reklamas-strategija", en: "/en/digital-advertising/advertising-strategy", labelLv: "Reklāmas stratēģija", labelEn: "Advertising Strategy" },
  { lv: "/digitala-reklama/google-ads", en: "/en/digital-advertising/google-ads", labelLv: "Google Ads", labelEn: "Google Ads" },
  { lv: "/digitala-reklama/meta-ads", en: "/en/digital-advertising/meta-ads", labelLv: "Meta Ads", labelEn: "Meta Ads" },
  { lv: "/digitala-reklama/tiktok-ads", en: "/en/digital-advertising/tiktok-ads", labelLv: "TikTok Ads", labelEn: "TikTok Ads" },
  { lv: "/digitala-reklama/microsoft-ads", en: "/en/digital-advertising/microsoft-ads", labelLv: "Microsoft Ads", labelEn: "Microsoft Ads" },
  { lv: "/digitala-reklama/konversiju-optimizacija", en: "/en/digital-advertising/conversion-optimization", labelLv: "Konversiju optimizācija", labelEn: "Conversion Optimization" },
  { lv: "/ai-lab", en: "/en/ai-lab", labelLv: "AI Lab", labelEn: "AI Lab" },
  { lv: "/par-mums", en: "/en/about", labelLv: "Par mums", labelEn: "About Us" },
  { lv: "/blog", en: "/en/blog", labelLv: "Blog", labelEn: "Blog" },
  { lv: "/b2b-pardosana-2025-ai-vertiba", en: "/en/b2b-sales-2025-ai-value", labelLv: "B2B pārdošana 2025", labelEn: "B2B Sales 2025" },
  { lv: "/maksligais-intelekts-pateretaju-uzvediba-ai-lemumu-pienemsana", en: "/en/artificial-intelligence-consumer-behavior-ai-decision-making", labelLv: "AI un patērētāju uzvedība", labelEn: "AI & Consumer Behavior" },
  { lv: "/generativais-ai-pasreizejais-stavoklis-nakotnes-virzieni", en: "/en/generative-ai-current-state-future-directions", labelLv: "Ģeneratīvais AI", labelEn: "Generative AI" },
  { lv: "/preskriptiva-analitika-ai-pateretaju-lemumi-b2b", en: "/en/prescriptive-analytics-ai-consumer-decisions-b2b", labelLv: "Preskriptīvā analītika", labelEn: "Prescriptive Analytics" },
  { lv: "/ka-maksligais-intelekts-veicina-ai-marketings-uznemumiem", en: "/en/how-ai-drives-marketing-development-businesses", labelLv: "AI mārketings", labelEn: "AI Marketing" },
  { lv: "/maksligais-intelekts-pateretaju-uzvediba-no-predictive-uz-generative-ai", en: "/en/ai-consumer-behavior-predictive-to-generative-ai", labelLv: "No predictive uz generative AI", labelEn: "Predictive to Generative AI" },
  { lv: "/seo-un-geo-optimizacija-kapec-seo-nepazudis", en: "/en/seo-geo-optimization-why-seo-not-disappearing", labelLv: "SEO un GEO optimizācija", labelEn: "SEO & GEO Optimization" },
  { lv: "/jaunais-digitalo-reklamu-laikmets-google-meta-tiktok", en: "/en/new-era-digital-advertising-google-meta-tiktok", labelLv: "Digitālās reklāmas laikmets", labelEn: "New Era of Digital Advertising" },
  { lv: "/bezmaksas-konsultacija", en: "/en/free-consultation", labelLv: "Konsultācija", labelEn: "Consultation" },
  { lv: "/sikdatnes", en: "/en/cookies", labelLv: "Sīkdatnes", labelEn: "Cookies" },
  { lv: "/personas-datu-apstrade", en: "/en/personal-data-processing", labelLv: "Personas datu apstrāde", labelEn: "Personal Data Processing" },
];

// Thank you pages - not included in main navigation, only accessible after form submission
export const thankYouRoutes = {
  lv: "/paldies",
  en: "/en/thank-you"
};

// Get the corresponding route in the other language
export function getAlternateRoute(currentPath: string, targetLang: "lv" | "en"): string {
  // Normalize path (remove trailing slash except for root)
  const normalizedPath = currentPath === "/" ? "/" : currentPath.replace(/\/$/, "");
  
  for (const mapping of routeMappings) {
    if (normalizedPath === mapping.lv || normalizedPath === mapping.en) {
      return targetLang === "lv" ? mapping.lv : mapping.en;
    }
  }
  
  // No mapping found - return home in target language
  return targetLang === "lv" ? "/" : "/en";
}

// Detect current language from path
export function getLanguageFromPath(pathname: string): "lv" | "en" {
  // Check if path starts with /en
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return "en";
  }
  return "lv";
}

// Get route mapping by LV path
export function getRouteMappingByLv(lvPath: string): RouteMapping | undefined {
  return routeMappings.find(m => m.lv === lvPath);
}

// Get route mapping by EN path
export function getRouteMappingByEn(enPath: string): RouteMapping | undefined {
  return routeMappings.find(m => m.en === enPath);
}

// Get route mapping for current path (either language)
export function getRouteMapping(path: string): RouteMapping | undefined {
  const normalizedPath = path === "/" ? "/" : path.replace(/\/$/, "");
  return routeMappings.find(m => m.lv === normalizedPath || m.en === normalizedPath);
}

// Check if a route exists in mappings
export function routeExists(path: string): boolean {
  return getRouteMapping(path) !== undefined;
}

// Get localized path from base LV path
export function getLocalizedPath(baseLvPath: string, lang: "lv" | "en"): string {
  const mapping = getRouteMappingByLv(baseLvPath);
  if (mapping) {
    return lang === "lv" ? mapping.lv : mapping.en;
  }
  // Fallback: return as-is for LV, prefix with /en for EN
  return lang === "lv" ? baseLvPath : `/en${baseLvPath}`;
}

// Navigation items for header (excluding home, consultation, policy pages, and sub-pages)
export const navItems = routeMappings.filter(m => 
  m.lv !== "/" && 
  m.lv !== "/bezmaksas-konsultacija" &&
  m.lv !== "/sikdatnes" &&
  m.lv !== "/personas-datu-apstrade" &&
  m.lv !== "/seo-un-geo-pakalpojumi" &&
  
  !m.lv.includes("/seo-un-geo/") &&
  !m.lv.includes("/ai-automatizacija/") &&
  !m.lv.includes("/digitala-reklama/") &&
  !["/b2b-pardosana-2025-ai-vertiba", "/maksligais-intelekts-pateretaju-uzvediba-ai-lemumu-pienemsana", "/generativais-ai-pasreizejais-stavoklis-nakotnes-virzieni", "/preskriptiva-analitika-ai-pateretaju-lemumi-b2b", "/ka-maksligais-intelekts-veicina-ai-marketings-uznemumiem", "/maksligais-intelekts-pateretaju-uzvediba-no-predictive-uz-generative-ai", "/seo-un-geo-optimizacija-kapec-seo-nepazudis", "/jaunais-digitalo-reklamu-laikmets-google-meta-tiktok"].includes(m.lv)
);

// Footer service links
export const footerServiceLinks = routeMappings.filter(m => 
  ["/seo-un-geo", "/ai-automatizacija", "/digitala-reklama", "/ai-lab"].includes(m.lv)
);

// Footer company links
export const footerCompanyLinks = routeMappings.filter(m => 
  ["/par-mums", "/blog", "/bezmaksas-konsultacija"].includes(m.lv)
);
