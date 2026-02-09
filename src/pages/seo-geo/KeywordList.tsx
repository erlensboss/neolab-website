import { Target, Search, TrendingUp, ListChecks, Filter } from "lucide-react";
import { ServiceSubpage } from "@/components/shared/ServiceSubpage";
import { useLanguage } from "@/contexts/LanguageContext";

export default function KeywordList() {
  const { language } = useLanguage();
  const lv = language === "lv";

  return (
    <ServiceSubpage
      seo={{
        titleLv: "Keyword List Veidošana | NEOLab",
        titleEn: "Keyword List Creation | NEOLab",
        descriptionLv: "Strukturēts atslēgvārdu saraksts, sadalīts pa lapām un meklēšanas nolūkiem, novēršot kanibalizāciju.",
        descriptionEn: "Structured keyword list, divided by pages and search intents, preventing cannibalization.",
      }}
      chip="SEO"
      titleMain="Keyword list"
      titleGradient="veidošana"
      description={lv
        ? "Izstrādāts strukturēts atslēgvārdu saraksts, sadalīts pa lapām un meklēšanas nolūkiem, novēršot kanibalizāciju."
        : "A structured keyword list, divided by pages and search intents, preventing cannibalization."
      }
      price={lv ? "no 99 EUR" : "from 99 EUR"}
      ctaText={lv ? "Pieteikties konsultācijai" : "Book Consultation"}
      featuresSectionTitle={lv ? "Ko ietver keyword" : "What Keyword"}
      featuresSectionTitleGradient="list izstrāde"
      features={[
        { icon: Search, title: lv ? "Atslēgvārdu izpēte" : "Keyword Research", description: lv ? "Padziļināta atslēgvārdu un meklējumu analīze" : "In-depth keyword and search query analysis" },
        { icon: Filter, title: lv ? "Nolūku grupēšana" : "Intent Grouping", description: lv ? "Atslēgvārdu sadalīšana pa meklēšanas nolūkiem" : "Keyword division by search intents" },
        { icon: ListChecks, title: lv ? "Lapu piešķiršana" : "Page Assignment", description: lv ? "Katra atslēgvārda piesaiste konkrētai lapai" : "Each keyword assigned to a specific page" },
        { icon: TrendingUp, title: lv ? "Prioritizācija" : "Prioritization", description: lv ? "Atslēgvārdu ranžēšana pēc potenciāla un grūtības" : "Keyword ranking by potential and difficulty" },
      ]}
      ctaIcon={Target}
      ctaTitle={lv ? "Gatavi izveidot savu atslēgvārdu stratēģiju?" : "Ready to build your keyword strategy?"}
      ctaDescription={lv
        ? "Sāciet ar bezmaksas konsultāciju, lai saprastu, kā strukturēt jūsu atslēgvārdu pieeju."
        : "Start with a free consultation to understand how to structure your keyword approach."
      }
      ctaButtonText={lv ? "Pieteikties konsultācijai" : "Book Consultation"}
    />
  );
}
