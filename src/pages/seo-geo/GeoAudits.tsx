import { Globe, Bot, MessageSquare, Sparkles, Eye } from "lucide-react";
import { ServiceSubpage } from "@/components/shared/ServiceSubpage";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GeoAudits() {
  const { language } = useLanguage();
  const lv = language === "lv";

  return (
    <ServiceSubpage
      seo={{
        titleLv: "GEO Mājaslapas Audits | NEOLab",
        titleEn: "GEO Website Audit | NEOLab",
        descriptionLv: "Izvērtējums, kā mājaslapa un saturs tiek uztverts AI balstītās meklēšanas vidēs un ģeneratīvajās atbildēs.",
        descriptionEn: "Assessment of how website and content are perceived in AI-based search environments and generative answers.",
      }}
      chip="GEO"
      titleMain="GEO mājaslapas"
      titleGradient="audits"
      description={lv
        ? "Tiek izvērtēts, kā mājaslapa un tās saturs tiek uztverts AI balstītās meklēšanas vidēs un ģeneratīvajās atbildēs."
        : "Assessment of how your website and content are perceived in AI-based search environments and generative answers."
      }
      price="249 EUR"
      ctaText={lv ? "Pieteikties auditam" : "Request Audit"}
      featuresSectionTitle={lv ? "Ko ietver GEO" : "What GEO"}
      featuresSectionTitleGradient="audits"
      features={[
        { icon: Bot, title: lv ? "AI redzamība" : "AI Visibility", description: lv ? "Kā AI rīki interpretē jūsu saturu" : "How AI tools interpret your content" },
        { icon: MessageSquare, title: lv ? "Atbilžu analīze" : "Answer Analysis", description: lv ? "Vai jūsu saturs parādās AI atbildēs" : "Does your content appear in AI answers" },
        { icon: Eye, title: lv ? "Konkurentu salīdzinājums" : "Competitor Comparison", description: lv ? "Kā jūs izskatāties AI acīs pret konkurentiem" : "How you look in AI eyes vs competitors" },
        { icon: Sparkles, title: lv ? "Ieteikumu karte" : "Recommendations Map", description: lv ? "Konkrēti soļi GEO uzlabošanai" : "Specific steps for GEO improvement" },
      ]}
      ctaIcon={Globe}
      ctaTitle={lv ? "Gatavi uzzināt savu GEO stāvokli?" : "Ready to learn your GEO status?"}
      ctaDescription={lv
        ? "Sāciet ar bezmaksas konsultāciju, lai saprastu, kā AI rīki redz jūsu mājaslapu."
        : "Start with a free consultation to understand how AI tools see your website."
      }
      ctaButtonText={lv ? "Pieteikties konsultācijai" : "Book Consultation"}
    />
  );
}
