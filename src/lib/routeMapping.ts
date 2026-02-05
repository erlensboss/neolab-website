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
  { lv: "/seo-un-geo/seo-audits", en: "/en/seo-and-geo/seo-audits", labelLv: "SEO Audits", labelEn: "SEO Audits" },
  { lv: "/seo-un-geo/tehniska-seo", en: "/en/seo-and-geo/technical-seo", labelLv: "Tehniskā SEO", labelEn: "Technical SEO" },
  { lv: "/seo-un-geo/satura-struktura", en: "/en/seo-and-geo/content-structure", labelLv: "Satura struktūra", labelEn: "Content Structure" },
  { lv: "/seo-un-geo/keyword-list", en: "/en/seo-and-geo/keyword-list", labelLv: "Keyword List", labelEn: "Keyword List" },
  { lv: "/seo-un-geo/geo-audits", en: "/en/seo-and-geo/geo-audits", labelLv: "GEO Audits", labelEn: "GEO Audits" },
  { lv: "/seo-un-geo/geo-strategija", en: "/en/seo-and-geo/geo-strategy", labelLv: "GEO Stratēģija", labelEn: "GEO Strategy" },
  { lv: "/ai-automatizacija", en: "/en/ai-automations", labelLv: "AI Automatizācijas", labelEn: "AI Automation" },
  { lv: "/ai-automatizacija/linkedin-content-system", en: "/en/ai-automations/linkedin-content-system", labelLv: "LinkedIn Content System", labelEn: "LinkedIn Content System" },
  { lv: "/ai-automatizacija/lead-capture-agent", en: "/en/ai-automations/lead-capture-agent", labelLv: "Lead Capture Agent", labelEn: "Lead Capture Agent" },
  { lv: "/ai-automatizacija/speed-to-lead", en: "/en/ai-automations/speed-to-lead", labelLv: "Speed-to-Lead System", labelEn: "Speed-to-Lead System" },
  { lv: "/ai-automatizacija/client-onboarding", en: "/en/ai-automations/client-onboarding", labelLv: "Client Onboarding System", labelEn: "Client Onboarding System" },
  { lv: "/ai-automatizacija/support-chatbot", en: "/en/ai-automations/support-chatbot", labelLv: "Customer Support Chatbot", labelEn: "Customer Support Chatbot" },
  { lv: "/performance-reklama", en: "/en/performance-ads", labelLv: "Digitālā reklāma", labelEn: "Digital Advertising" },
  { lv: "/performance-reklama/reklamas-strategija", en: "/en/performance-ads/advertising-strategy", labelLv: "Reklāmas stratēģija", labelEn: "Advertising Strategy" },
  { lv: "/performance-reklama/google-ads", en: "/en/performance-ads/google-ads", labelLv: "Google Ads", labelEn: "Google Ads" },
  { lv: "/performance-reklama/meta-ads", en: "/en/performance-ads/meta-ads", labelLv: "Meta Ads", labelEn: "Meta Ads" },
  { lv: "/performance-reklama/tiktok-ads", en: "/en/performance-ads/tiktok-ads", labelLv: "TikTok Ads", labelEn: "TikTok Ads" },
  { lv: "/performance-reklama/microsoft-ads", en: "/en/performance-ads/microsoft-ads", labelLv: "Microsoft Ads", labelEn: "Microsoft Ads" },
  { lv: "/performance-reklama/konversiju-optimizacija", en: "/en/performance-ads/conversion-optimization", labelLv: "Konversiju optimizācija", labelEn: "Conversion Optimization" },
  { lv: "/ai-lab", en: "/en/ai-lab", labelLv: "AI Lab", labelEn: "AI Lab" },
  { lv: "/par-mums", en: "/en/about", labelLv: "Par mums", labelEn: "About Us" },
  { lv: "/blog", en: "/en/blog", labelLv: "Blog", labelEn: "Blog" },
  { lv: "/bezmaksas-konsultacija", en: "/en/free-consultation", labelLv: "Konsultācija", labelEn: "Consultation" },
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

// Navigation items for header (excluding home, consultation, and sub-pages)
export const navItems = routeMappings.filter(m => 
  m.lv !== "/" && 
  m.lv !== "/bezmaksas-konsultacija" &&
  !m.lv.includes("/seo-un-geo/") && // Exclude SEO sub-pages from nav
  !m.lv.includes("/ai-automatizacija/") && // Exclude AI automation sub-pages from nav
  !m.lv.includes("/performance-reklama/") // Exclude Performance Reklama sub-pages from nav
);

// Footer service links
export const footerServiceLinks = routeMappings.filter(m => 
  ["/seo-un-geo", "/ai-automatizacija", "/performance-reklama", "/ai-lab"].includes(m.lv)
);

// Footer company links
export const footerCompanyLinks = routeMappings.filter(m => 
  ["/par-mums", "/blog", "/bezmaksas-konsultacija"].includes(m.lv)
);
