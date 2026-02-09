import { Search, FileSearch, BarChart3, Layers, Target } from "lucide-react";
import { ServiceSubpage } from "@/components/shared/ServiceSubpage";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SeoAudits() {
  const { language } = useLanguage();
  const lv = language === "lv";

  return (
    <ServiceSubpage
      seo={{
        titleLv: "SEO Audits un Situācijas Izvērtējums | NEOLab",
        titleEn: "SEO Audit & Analysis | NEOLab",
        descriptionLv: "Profesionāls SEO audits ar pilnu tehnisko, satura un konkurentu analīzi. Uzziniet savas mājaslapas izaugsmes iespējas.",
        descriptionEn: "Professional SEO audit with full technical, content and competitor analysis. Discover your website's growth opportunities.",
      }}
      chip={lv ? "Galvenais pakalpojums" : "Core Service"}
      titleMain="SEO audits un"
      titleGradient="situācijas izvērtējums"
      description={lv
        ? "Sadarbība vienmēr sākas ar auditu. Tiek analizēta mājaslapas tehniskā puse, saturs, struktūra, konkurenti un esošā redzamība, lai saprastu, kur tieši slēpjas galvenās izaugsmes iespējas."
        : "Collaboration always starts with an audit. We analyze your website's technical side, content, structure, competitors and existing visibility to understand where the main growth opportunities lie."
      }
      price="249 EUR"
      ctaText={lv ? "Pieteikties auditam" : "Request Audit"}
      featuresSectionTitle={lv ? "Ko ietver" : "What's Included in"}
      featuresSectionTitleGradient="SEO audits"
      features={[
        {
          icon: FileSearch,
          title: lv ? "Tehniskā analīze" : "Technical Analysis",
          description: lv
            ? "Pilna mājaslapas tehniskā pārbaude — ātrums, indeksācija, mobilo ierīču atbilstība"
            : "Full technical website check — speed, indexing, mobile compatibility",
        },
        {
          icon: Layers,
          title: lv ? "Satura inventārs" : "Content Inventory",
          description: lv
            ? "Esošā satura izvērtējums — kas strādā, kas nē, kur ir robi"
            : "Existing content evaluation — what works, what doesn't, where are the gaps",
        },
        {
          icon: Target,
          title: lv ? "Konkurentu izpēte" : "Competitor Research",
          description: lv
            ? "Tirgus pozicionēšanas analīze un konkurentu SEO stratēģiju pētījums"
            : "Market positioning analysis and competitor SEO strategy research",
        },
        {
          icon: BarChart3,
          title: lv ? "Ranku analīze" : "Ranking Analysis",
          description: lv
            ? "Esošo pozīciju izvērtējums un potenciāla noteikšana"
            : "Current position evaluation and potential assessment",
        },
      ]}
      benefits={[
        lv ? "Saprotat reālo situāciju pirms investīcijām" : "Understand the real situation before investing",
        lv ? "Identificējat prioritātes ar lielāko ROI" : "Identify priorities with the highest ROI",
        lv ? "Izvairāties no nevajadzīgiem darbiem" : "Avoid unnecessary work",
        lv ? "Saņemat skaidru rīcības plānu" : "Receive a clear action plan",
        lv ? "Saprastat konkurentu stiprās un vājās puses" : "Understand competitor strengths and weaknesses",
      ]}
      benefitsTitle={lv ? "Kāpēc sākt ar" : "Why Start With"}
      benefitsTitleGradient={lv ? "auditu?" : "an audit?"}
      ctaIcon={Search}
      ctaTitle={lv ? "Bezmaksas sākotnējā konsultācija" : "Free Initial Consultation"}
      ctaDescription={lv
        ? "Pirms audita piedāvājam bezmaksas 30 minūšu konsultāciju, lai saprastu jūsu mērķus un pielāgotu pieeju."
        : "Before the audit, we offer a free 30-minute consultation to understand your goals and tailor our approach."
      }
      ctaButtonText={lv ? "Pieteikties konsultācijai" : "Book Consultation"}
    />
  );
}
