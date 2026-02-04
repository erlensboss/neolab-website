import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowRight, ArrowLeft, CheckCircle2, FileSearch, BarChart3, Layers, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/shared/SEOHead";

export default function SeoAudits() {
  const { t, getLocalizedPath, language } = useLanguage();

  return (
    <>
      <SEOHead 
        titleLv="SEO Audits un Situācijas Izvērtējums | NEOLab"
        titleEn="SEO Audit & Analysis | NEOLab"
        descriptionLv="Profesionāls SEO audits ar pilnu tehnisko, satura un konkurentu analīzi. Uzziniet savas mājaslapas izaugsmes iespējas."
        descriptionEn="Professional SEO audit with full technical, content and competitor analysis. Discover your website's growth opportunities."
      />
      
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero bg-atmosphere overflow-hidden min-h-[50vh] flex items-center py-16 md:py-24">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(ellipse 80% 60% at 70% 40%, hsl(21 90% 48%) 0px, transparent 50%)`,
              }}
            />
            <motion.div
              className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-amber-400/5 blur-3xl"
              animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="container-neo section-padding relative z-10">
            {/* Back link */}
            <ScrollReveal>
              <Link 
                to={getLocalizedPath("/seo-un-geo")} 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{language === "lv" ? "Atpakaļ uz SEO & GEO" : "Back to SEO & GEO"}</span>
              </Link>
            </ScrollReveal>

            <div className="max-w-4xl">
              <ScrollReveal>
                <span className="chip mb-6 inline-block text-sm">
                  {language === "lv" ? "Galvenais pakalpojums" : "Core Service"}
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                  SEO audits un{" "}
                  <span className="text-gradient-orange">situācijas izvērtējums</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  Sadarbība vienmēr sākas ar auditu. Tiek analizēta mājaslapas tehniskā puse, saturs, struktūra, 
                  konkurenti un esošā redzamība, lai saprastu, kur tieši slēpjas galvenās izaugsmes iespējas.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  <Button variant="hero" size="lg">
                    {language === "lv" ? "Pieteikties auditam" : "Request Audit"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-slate-50" />
          
          <div className="container-neo relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-foreground mb-4">
                  {language === "lv" ? "Ko ietver" : "What's Included"}
                  <span className="text-gradient-orange"> SEO audits</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {language === "lv" 
                    ? "Visaptveroša mājaslapas analīze, kas atklāj izaugsmes iespējas"
                    : "Comprehensive website analysis that uncovers growth opportunities"
                  }
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: FileSearch,
                  title: language === "lv" ? "Tehniskā analīze" : "Technical Analysis",
                  description: language === "lv" 
                    ? "Pilna mājaslapas tehniskā pārbaude — ātrums, indeksācija, mobilo ierīču atbilstība"
                    : "Full technical website check — speed, indexing, mobile compatibility"
                },
                {
                  icon: Layers,
                  title: language === "lv" ? "Satura inventārs" : "Content Inventory",
                  description: language === "lv"
                    ? "Esošā satura izvērtējums — kas strādā, kas nē, kur ir robi"
                    : "Existing content evaluation — what works, what doesn't, where are the gaps"
                },
                {
                  icon: Target,
                  title: language === "lv" ? "Konkurentu izpēte" : "Competitor Research",
                  description: language === "lv"
                    ? "Tirgus pozicionēšanas analīze un konkurentu SEO stratēģiju pētījums"
                    : "Market positioning analysis and competitor SEO strategy research"
                },
                {
                  icon: BarChart3,
                  title: language === "lv" ? "Ranku analīze" : "Ranking Analysis",
                  description: language === "lv"
                    ? "Esošo pozīciju izvērtējums un potenciāla noteikšana"
                    : "Current position evaluation and potential assessment"
                },
              ].map((item, index) => (
                <ScrollReveal key={item.title} delay={0.1 + index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 h-full"
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-orange flex items-center justify-center mb-4 shadow-md"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
          
          <div className="container-neo relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-foreground mb-6">
                    {language === "lv" ? "Kāpēc sākt ar" : "Why Start With"}
                    <span className="text-gradient-orange"> auditu?</span>
                  </h2>
                  <div className="space-y-4">
                    {[
                      language === "lv" ? "Saprotat reālo situāciju pirms investīcijām" : "Understand the real situation before investing",
                      language === "lv" ? "Identificējat prioritātes ar lielāko ROI" : "Identify priorities with the highest ROI",
                      language === "lv" ? "Izvairāties no nevajadzīgiem darbiem" : "Avoid unnecessary work",
                      language === "lv" ? "Saņemat skaidru rīcības plānu" : "Receive a clear action plan",
                      language === "lv" ? "Saprastat konkurentu stiprās un vājās puses" : "Understand competitor strengths and weaknesses",
                    ].map((benefit, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-foreground">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="relative bg-white rounded-2xl p-8 border border-primary/10 shadow-xl">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-orange-500/5 rounded-3xl blur-xl" />
                  <div className="relative">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-orange flex items-center justify-center mb-6 shadow-lg"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Search className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {language === "lv" ? "Bezmaksas sākotnējā konsultācija" : "Free Initial Consultation"}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {language === "lv" 
                        ? "Pirms audita piedāvājam bezmaksas 30 minūšu konsultāciju, lai saprastu jūsu mērķus un pielāgotu pieeju."
                        : "Before the audit, we offer a free 30-minute consultation to understand your goals and tailor our approach."
                      }
                    </p>
                    <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                      <Button variant="hero" size="lg" className="w-full">
                        {language === "lv" ? "Pieteikties konsultācijai" : "Book Consultation"}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
