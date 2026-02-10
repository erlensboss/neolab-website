import { motion } from "framer-motion";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/shared/SEOHead";
import { Link } from "react-router-dom";

export default function SeoGeoPakalpojumi() {
  const { t, getLocalizedPath } = useLanguage();

  return (
    <>
      <SEOHead
        titleLv="SEO un GEO pakalpojumi uzņēmumiem | NEOLab"
        titleEn="SEO & GEO Services for Businesses | NEOLab"
        descriptionLv="Pilns SEO un GEO pakalpojumu cikls uzņēmumiem – audits, tehniskā un on-page optimizācija, atslēgvārdi, GEO audits un stratēģija. Skaidra pieeja, kas strādā."
        descriptionEn="Full SEO & GEO service cycle for businesses – audits, technical and on-page optimization, keywords, GEO audits and strategy. A clear approach that works."
      />

      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
            >
              <Search className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">SEO & GEO</span>
              <MapPin className="w-4 h-4 text-primary" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">SEO</span>{" "}
              {t("un", "&")}{" "}
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">GEO</span>{" "}
              {t("pakalpojumi uzņēmumiem", "Services for Businesses")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6"
            >
              {t(
                "Mājaslapas problēmas reti ir acīmredzamas. Rezultāta nav, bet nav arī skaidrs, kas tieši to kavē.",
                "The website's network problems are obvious. As a result, there is no, but there is also no winter that really hinders it.",
              )}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              {t(
                "Tāpēc SEO nevar sākt ar labojumiem. Vispirms ir jābūt skaidrai situācijas izpratnei. Un tā sākas ar SEO auditu.",
                "That's why SEO can't start with fixes. First, you need to have a clear understanding of the situation. And that starts with an SEO audit.",
              )}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  {t("Pieteikt konsultāciju", "Book a consultation")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
