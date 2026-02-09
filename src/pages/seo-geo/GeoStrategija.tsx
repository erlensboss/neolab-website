import { Rocket, Brain, Map, Lightbulb, TrendingUp } from "lucide-react";
import { ServiceSubpage } from "@/components/shared/ServiceSubpage";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GeoStrategija() {
  const { language } = useLanguage();
  const lv = language === "lv";

  return (
    <ServiceSubpage
      seo={{
        titleLv: "GEO Stratēģijas Izveide | NEOLab",
        titleEn: "GEO Strategy Creation | NEOLab",
        descriptionLv: "GEO stratēģija redzamības uzlabošanai jaunās paaudzes meklēšanas kanālos un AI rīkos.",
        descriptionEn: "GEO strategy for visibility improvement in next-generation search channels and AI tools.",
      }}
      chip="GEO"
      titleMain="GEO stratēģijas"
      titleGradient="izveide"
      description={lv
        ? "Balstoties audita secinājumos, tiek izstrādāta GEO stratēģija redzamības uzlabošanai jaunās paaudzes meklēšanas kanālos."
        : "Based on audit findings, a GEO strategy is developed for visibility improvement in next-generation search channels."
      }
      price={lv ? "no 350 EUR" : "from 350 EUR"}
      ctaText={lv ? "Pieteikties konsultācijai" : "Book Consultation"}
      featuresSectionTitle={lv ? "Ko ietver GEO" : "What GEO"}
      featuresSectionTitleGradient="stratēģija"
      features={[
        { icon: Map, title: lv ? "Rīcības plāns" : "Action Plan", description: lv ? "Detalizēts solis-pa-solim plāns GEO ieviešanai" : "Detailed step-by-step plan for GEO implementation" },
        { icon: Brain, title: lv ? "AI optimizācija" : "AI Optimization", description: lv ? "Satura pielāgošana AI meklēšanas rīkiem" : "Content adaptation for AI search tools" },
        { icon: Lightbulb, title: lv ? "Satura vadlīnijas" : "Content Guidelines", description: lv ? "Kā rakstīt saturu, ko AI citē un iesaka" : "How to write content that AI cites and recommends" },
        { icon: TrendingUp, title: lv ? "Mērīšana" : "Measurement", description: lv ? "KPI un metriku definēšana GEO sekojamībai" : "KPI and metrics definition for GEO tracking" },
      ]}
      ctaIcon={Rocket}
      ctaTitle={lv ? "Gatavi izstrādāt savu GEO stratēģiju?" : "Ready to develop your GEO strategy?"}
      ctaDescription={lv
        ? "Sāciet ar bezmaksas konsultāciju, lai saprastu, kā vislabāk pozicionēt savu uzņēmumu AI meklēšanas vidēs."
        : "Start with a free consultation to understand how best to position your business in AI search environments."
      }
      ctaButtonText={lv ? "Pieteikties konsultācijai" : "Book Consultation"}
    />
  );
}
