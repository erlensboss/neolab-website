import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteMapping, getLanguageFromPath } from "@/lib/routeMapping";

const BASE_URL = "https://neolab.lv"; // Update with actual domain

interface SEOHeadProps {
  titleLv?: string;
  titleEn?: string;
  descriptionLv?: string;
  descriptionEn?: string;
}

export function SEOHead({ 
  titleLv = "NEOLab | AI & Digitālā Mārketinga Risinājumi",
  titleEn = "NEOLab | AI & Digital Marketing Solutions",
  descriptionLv = "NEOLab piedāvā AI automatizāciju, SEO & GEO optimizāciju un Google Ads pārvaldību.",
  descriptionEn = "NEOLab offers AI automation, SEO & GEO optimization, and Google Ads management."
}: SEOHeadProps) {
  const location = useLocation();
  const lang = getLanguageFromPath(location.pathname);
  const mapping = getRouteMapping(location.pathname);

  useEffect(() => {
    // Set title
    document.title = lang === "lv" ? titleLv : titleEn;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", lang === "lv" ? descriptionLv : descriptionEn);
    }

    // Set html lang attribute
    document.documentElement.lang = lang === "lv" ? "lv" : "en";

    // Remove existing hreflang links
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    document.querySelectorAll('link[rel="canonical"]').forEach(el => el.remove());

    if (mapping) {
      // Add canonical
      const canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = `${BASE_URL}${lang === "lv" ? mapping.lv : mapping.en}`;
      document.head.appendChild(canonical);

      // Add hreflang for LV
      const hreflangLv = document.createElement("link");
      hreflangLv.rel = "alternate";
      hreflangLv.hreflang = "lv";
      hreflangLv.href = `${BASE_URL}${mapping.lv}`;
      document.head.appendChild(hreflangLv);

      // Add hreflang for EN
      const hreflangEn = document.createElement("link");
      hreflangEn.rel = "alternate";
      hreflangEn.hreflang = "en";
      hreflangEn.href = `${BASE_URL}${mapping.en}`;
      document.head.appendChild(hreflangEn);

      // Add x-default (default to LV)
      const hreflangDefault = document.createElement("link");
      hreflangDefault.rel = "alternate";
      hreflangDefault.hreflang = "x-default";
      hreflangDefault.href = `${BASE_URL}${mapping.lv}`;
      document.head.appendChild(hreflangDefault);
    }

    // Cleanup on unmount
    return () => {
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    };
  }, [location.pathname, lang, mapping, titleLv, titleEn, descriptionLv, descriptionEn]);

  return null;
}
