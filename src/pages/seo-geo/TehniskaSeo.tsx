import { Settings, Gauge, Shield, Code, Zap } from "lucide-react";
import { ServiceSubpage } from "@/components/shared/ServiceSubpage";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TehniskaSeo() {
  const { language } = useLanguage();
  const lv = language === "lv";

  return (
    <ServiceSubpage
      seo={{
        titleLv: "Tehniskā SEO Optimizācija | NEOLab",
        titleEn: "Technical SEO Optimization | NEOLab",
        descriptionLv: "Profesionāla tehniskā SEO optimizācija — lapas ātrums, struktūra, indeksācija un tehniskie pamati.",
        descriptionEn: "Professional technical SEO optimization — page speed, structure, indexing and technical fundamentals.",
      }}
      chip="SEO"
      titleMain="Tehniskā SEO"
      titleGradient="optimizācija"
      description={lv
        ? "Balstoties audita secinājumos, tiek sakārtoti tehniskie aspekti — lapas ātrums, struktūra, indeksācija un citi pamati, kas nodrošina stabilu SEO bāzi."
        : "Based on audit findings, technical aspects are resolved — page speed, structure, indexing and other fundamentals that ensure a stable SEO foundation."
      }
      price={lv ? "no 350 EUR" : "from 350 EUR"}
      ctaText={lv ? "Pieteikties konsultācijai" : "Book Consultation"}
      featuresSectionTitle={lv ? "Ko ietver tehniskā" : "What Technical"}
      featuresSectionTitleGradient="SEO optimizācija"
      features={[
        { icon: Gauge, title: lv ? "Lapas ātrums" : "Page Speed", description: lv ? "Core Web Vitals optimizācija un ielādes laika uzlabošana" : "Core Web Vitals optimization and load time improvement" },
        { icon: Code, title: lv ? "Koda struktūra" : "Code Structure", description: lv ? "Tīrs HTML, strukturēti dati un schema markup" : "Clean HTML, structured data and schema markup" },
        { icon: Shield, title: lv ? "Drošība" : "Security", description: lv ? "HTTPS, drošības galvenes un vispārīgā aizsardzība" : "HTTPS, security headers and general protection" },
        { icon: Zap, title: lv ? "Indeksācija" : "Indexing", description: lv ? "Crawl budget optimizācija un indeksācijas kontrole" : "Crawl budget optimization and indexing control" },
      ]}
      ctaIcon={Settings}
      ctaTitle={lv ? "Gatavi uzlabot jūsu mājaslapas tehnisko bāzi?" : "Ready to improve your website's technical foundation?"}
      ctaDescription={lv
        ? "Sāciet ar bezmaksas konsultāciju, lai saprastu, kādi tehniskie uzlabojumi ir prioritāri jūsu situācijā."
        : "Start with a free consultation to understand which technical improvements are priorities for your situation."
      }
      ctaButtonText={lv ? "Pieteikties konsultācijai" : "Book Consultation"}
    />
  );
}
