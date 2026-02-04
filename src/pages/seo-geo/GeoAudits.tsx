import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, ArrowRight, ArrowLeft, Bot, MessageSquare, Sparkles, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/shared/SEOHead";

export default function GeoAudits() {
  const { getLocalizedPath, language } = useLanguage();

  return (
    <>
      <SEOHead 
        titleLv="GEO Mājaslapas Audits | NEOLab"
        titleEn="GEO Website Audit | NEOLab"
        descriptionLv="Izvērtējums, kā mājaslapa un saturs tiek uztverts AI balstītās meklēšanas vidēs un ģeneratīvajās atbildēs."
        descriptionEn="Assessment of how website and content are perceived in AI-based search environments and generative answers."
      />
      
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero bg-atmosphere overflow-hidden min-h-[50vh] flex items-center py-16 md:py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: `radial-gradient(ellipse 80% 60% at 70% 40%, hsl(32 90% 55%) 0px, transparent 50%)`
            }} />
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
                <span className="chip mb-6 inline-block text-sm">GEO</span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                  GEO mājaslapas{" "}
                  <span className="text-gradient-orange">audits</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  Tiek izvērtēts, kā mājaslapa un tās saturs tiek uztverts AI balstītās meklēšanas vidēs un ģeneratīvajās atbildēs.
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

        {/* Features Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-slate-50" />
          
          <div className="container-neo relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-foreground mb-4">
                  {language === "lv" ? "Ko ietver GEO" : "What GEO"}
                  <span className="text-gradient-orange"> audits</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Bot, title: language === "lv" ? "AI redzamība" : "AI Visibility", description: language === "lv" ? "Kā AI rīki interpretē jūsu saturu" : "How AI tools interpret your content" },
                { icon: MessageSquare, title: language === "lv" ? "Atbilžu analīze" : "Answer Analysis", description: language === "lv" ? "Vai jūsu saturs parādās AI atbildēs" : "Does your content appear in AI answers" },
                { icon: Eye, title: language === "lv" ? "Konkurentu salīdzinājums" : "Competitor Comparison", description: language === "lv" ? "Kā jūs izskatāties AI acīs pret konkurentiem" : "How you look in AI eyes vs competitors" },
                { icon: Sparkles, title: language === "lv" ? "Ieteikumu karte" : "Recommendations Map", description: language === "lv" ? "Konkrēti soļi GEO uzlabošanai" : "Specific steps for GEO improvement" },
              ].map((item, index) => (
                <ScrollReveal key={item.title} delay={0.1 + index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all h-full"
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4 shadow-md"
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
              <div className="relative bg-gradient-to-br from-white via-white to-amber-50/50 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-amber-200/30 shadow-xl text-center">
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Globe className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {language === "lv" ? "Gatavi uzzināt savu GEO stāvokli?" : "Ready to learn your GEO status?"}
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {language === "lv" 
                    ? "Sāciet ar bezmaksas konsultāciju, lai saprastu, kā AI rīki redz jūsu mājaslapu."
                    : "Start with a free consultation to understand how AI tools see your website."
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
