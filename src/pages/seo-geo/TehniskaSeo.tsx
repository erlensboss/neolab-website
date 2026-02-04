import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Settings, ArrowRight, ArrowLeft, CheckCircle2, Zap, Shield, Code, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/shared/SEOHead";

export default function TehniskaSeo() {
  const { getLocalizedPath, language } = useLanguage();

  return (
    <>
      <SEOHead 
        titleLv="Tehniskā SEO Optimizācija | NEOLab"
        titleEn="Technical SEO Optimization | NEOLab"
        descriptionLv="Profesionāla tehniskā SEO optimizācija — lapas ātrums, struktūra, indeksācija un tehniskie pamati."
        descriptionEn="Professional technical SEO optimization — page speed, structure, indexing and technical fundamentals."
      />
      
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero bg-atmosphere overflow-hidden min-h-[50vh] flex items-center py-16 md:py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: `radial-gradient(ellipse 80% 60% at 70% 40%, hsl(21 90% 48%) 0px, transparent 50%)`
            }} />
            <motion.div
              className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-orange-500/10 to-amber-400/5 blur-3xl"
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          <div className="container-neo section-padding relative z-10">
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
                <span className="chip mb-6 inline-block text-sm">SEO</span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                  Tehniskā SEO{" "}
                  <span className="text-gradient-orange">optimizācija</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  Balstoties audita secinājumos, tiek sakārtoti tehniskie aspekti — lapas ātrums, struktūra, 
                  indeksācija un citi pamati, kas nodrošina stabilu SEO bāzi.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  <Button variant="hero" size="lg">
                    {language === "lv" ? "Pieteikties konsultācijai" : "Book Consultation"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-slate-50" />
          
          <div className="container-neo relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-foreground mb-4">
                  {language === "lv" ? "Ko ietver tehniskā" : "What Technical"}
                  <span className="text-gradient-orange"> SEO optimizācija</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Gauge, title: language === "lv" ? "Lapas ātrums" : "Page Speed", description: language === "lv" ? "Core Web Vitals optimizācija un ielādes laika uzlabošana" : "Core Web Vitals optimization and load time improvement" },
                { icon: Code, title: language === "lv" ? "Koda struktūra" : "Code Structure", description: language === "lv" ? "Tīrs HTML, strukturēti dati un schema markup" : "Clean HTML, structured data and schema markup" },
                { icon: Shield, title: language === "lv" ? "Drošība" : "Security", description: language === "lv" ? "HTTPS, drošības galvenes un vispārīgā aizsardzība" : "HTTPS, security headers and general protection" },
                { icon: Zap, title: language === "lv" ? "Indeksācija" : "Indexing", description: language === "lv" ? "Crawl budget optimizācija un indeksācijas kontrole" : "Crawl budget optimization and indexing control" },
              ].map((item, index) => (
                <ScrollReveal key={item.title} delay={0.1 + index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all h-full"
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4 shadow-md"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
          <div className="container-neo relative z-10">
            <ScrollReveal>
              <div className="relative bg-gradient-to-br from-white via-white to-orange-50/50 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-primary/10 shadow-xl text-center">
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-6 shadow-lg"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Settings className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {language === "lv" ? "Gatavi uzlabot jūsu mājaslapas tehnisko bāzi?" : "Ready to improve your website's technical foundation?"}
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {language === "lv" 
                    ? "Sāciet ar bezmaksas konsultāciju, lai saprastu, kādi tehniskie uzlabojumi ir prioritāri jūsu situācijā."
                    : "Start with a free consultation to understand which technical improvements are priorities for your situation."
                  }
                </p>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  <Button variant="hero" size="lg">
                    {language === "lv" ? "Pieteikties konsultācijai" : "Book Consultation"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
