import { FileText, BookOpen, Layers, PenTool, LayoutGrid } from "lucide-react";
import { ServiceSubpage } from "@/components/shared/ServiceSubpage";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SaturaStruktura() {
  const { language } = useLanguage();
  const lv = language === "lv";

  return (
    <ServiceSubpage
      seo={{
        titleLv: "On-Page Optimizācija | NEOLab",
        titleEn: "On-Page Optimization | NEOLab",
        descriptionLv: "Loģiska satura struktūra, kas balstīta reālos lietotāju meklējumos un uzņēmuma mērķos.",
        descriptionEn: "Logical content structure based on real user searches and business goals.",
      }}
      chip="SEO"
      titleMain="On-Page"
      titleGradient="optimizācija"
      description={lv
        ? "Tiek veidota loģiska satura struktūra, kas balstīta reālos lietotāju meklējumos un uzņēmuma mērķos."
        : "A logical content structure is built based on real user searches and business goals."
      }
      price={lv ? "no 300 EUR" : "from 300 EUR"}
      ctaText={lv ? "Pieteikties konsultācijai" : "Book Consultation"}
      featuresSectionTitle={lv ? "Ko ietver" : "What's Included in"}
      featuresSectionTitleGradient={lv ? "On-Page optimizācija" : "On-Page optimization"}
      features={[
        { icon: BookOpen, title: lv ? "Tēmu klasterēšana" : "Topic Clustering", description: lv ? "Loģiska satura organizācija pa tēmu grupām" : "Logical content organization by topic groups" },
        { icon: Layers, title: lv ? "Lapu hierarhija" : "Page Hierarchy", description: lv ? "Skaidra lapu struktūra un savstarpējās saites" : "Clear page structure and interlinking" },
        { icon: PenTool, title: lv ? "Satura vadlīnijas" : "Content Guidelines", description: lv ? "SEO optimizētas satura rakstīšanas vadlīnijas" : "SEO optimized content writing guidelines" },
        { icon: LayoutGrid, title: lv ? "Satura plāns" : "Content Plan", description: lv ? "Detalizēts satura izveides un publicēšanas plāns" : "Detailed content creation and publishing plan" },
      ]}
      ctaIcon={FileText}
      ctaTitle={lv ? "Gatavi strukturēt savu saturu?" : "Ready to structure your content?"}
      ctaDescription={lv
        ? "Sāciet ar bezmaksas konsultāciju, lai saprastu, kā vislabāk organizēt jūsu mājaslapas saturu."
        : "Start with a free consultation to understand how best to organize your website content."
      }
      ctaButtonText={lv ? "Pieteikties konsultācijai" : "Book Consultation"}
    />
  );
}
