import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Zap, Users, TrendingUp, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/shared/SEOHead";

export default function TikTokAds() {
  const { t, getLocalizedPath, language } = useLanguage();

  const adFormats = [
    {
      icon: Play,
      title: t("In-Feed Ads", "In-Feed Ads"),
      description: t("Dabiskas reklāmas, kas parādās lietotāju feedā starp organisko saturu.", "Native ads that appear in users' feed between organic content.")
    },
    {
      icon: Sparkles,
      title: t("TopView Ads", "TopView Ads"),
      description: t("Premium reklāmas, kas parādās kā pirmais saturs, atverot lietotni.", "Premium ads that appear as the first content when opening the app.")
    },
    {
      icon: Zap,
      title: t("Spark Ads", "Spark Ads"),
      description: t("Pastipriniet organisko saturu, kas jau gūst atsaucību.", "Boost organic content that's already gaining traction.")
    },
    {
      icon: Users,
      title: t("Branded Effects", "Branded Effects"),
      description: t("Interaktīvi filtri un efekti, kas veicina lietotāju iesaisti.", "Interactive filters and effects that drive user engagement.")
    }
  ];

  const benefits = [
    t("Jauna, aktīva auditorija ar augstu iesaisti", "Young, active audience with high engagement"),
    t("Zemākas reklāmu izmaksas salīdzinot ar citiem kanāliem", "Lower ad costs compared to other channels"),
    t("Virāla potenciāla izmantošana", "Viral potential utilization"),
    t("Autentisks, radošs saturs", "Authentic, creative content"),
    t("Ātra testu izpilde un optimizācija", "Fast test execution and optimization")
  ];

  return (
    <>
      <SEOHead 
        titleLv="TikTok Ads | NEOLab"
        titleEn="TikTok Ads | NEOLab"
        descriptionLv="Profesionāla TikTok Ads kampaņu pārvaldība. Sasniedziet jaunu auditoriju ar dinamisku video saturu."
        descriptionEn="Professional TikTok Ads campaign management. Reach new audiences with dynamic video content."
      />
      
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero bg-atmosphere overflow-hidden min-h-[50vh] flex items-center py-16 md:py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(ellipse 80% 60% at 70% 40%, hsl(180 80% 40%) 0px, transparent 50%)`,
              }}
            />
            <motion.div
              className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500/10 to-pink-400/5 blur-3xl"
              animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="container-neo section-padding relative z-10">
            <ScrollReveal>
              <Link 
                to={getLocalizedPath("/digitala-reklama")} 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t("Atpakaļ uz Performance reklāmu", "Back to Performance Ads")}</span>
              </Link>
            </ScrollReveal>

            <div className="max-w-4xl">
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/10 text-foreground text-sm font-medium mb-6">
                  <Play className="w-4 h-4" />
                  TikTok
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                  TikTok{" "}
                  <span className="text-gradient-orange">Ads</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  {t(
                    "TikTok ir vieta, kur zīmoli var sasniegt jaunu auditoriju ar autentisku, radošu saturu. Ātra testu izpilde un virāls potenciāls padara to par ideālu kanālu jauniem produktiem.",
                    "TikTok is where brands can reach new audiences with authentic, creative content. Fast test execution and viral potential make it ideal for new products."
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  <Button variant="hero" size="lg">
                    {t("Sākt ar TikTok Ads", "Start with TikTok Ads")}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Ad Formats Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white to-pink-50/30" />
          
          <div className="container-neo relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-foreground mb-4">
                  {t("Reklāmu", "Ad")}{" "}
                  <span className="text-gradient-orange">{t("formāti", "Formats")}</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t(
                    "TikTok piedāvā dažādus formātus, lai sasniegtu jūsu mērķi",
                    "TikTok offers various formats to achieve your goals"
                  )}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {adFormats.map((format, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-sm h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 to-pink-50 flex items-center justify-center mb-5">
                      <format.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{format.title}</h3>
                    <p className="text-muted-foreground">{format.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-muted/30 to-white" />
          
          <div className="container-neo relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <h2 className="text-foreground mb-6">
                  {t("Kāpēc izvēlēties", "Why Choose")}{" "}
                  <span className="text-gradient-orange">TikTok Ads?</span>
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-pink-50/50 border border-cyan-200/50">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground mb-2">1B+</div>
                    <div className="text-muted-foreground mb-6">{t("Aktīvie lietotāji", "Active Users")}</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="p-3 rounded-lg bg-white/60">
                        <div className="font-semibold text-foreground">-40%</div>
                        <div className="text-muted-foreground text-xs">{t("Zemākas CPM izmaksas", "Lower CPM Costs")}</div>
                      </div>
                      <div className="p-3 rounded-lg bg-white/60">
                        <div className="font-semibold text-foreground">6x</div>
                        <div className="text-muted-foreground text-xs">{t("Augstāks engagement", "Higher Engagement")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-amber-50/50 to-white" />
          
          <div className="container-neo relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-foreground mb-6">
                  {t("Gatavs sākt ar", "Ready to Start with")}{" "}
                  <span className="text-gradient-orange">TikTok Ads?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t(
                    "Sazinieties ar mums un kopā izveidosim TikTok stratēģiju jūsu zīmolam.",
                    "Contact us and together we'll create a TikTok strategy for your brand."
                  )}
                </p>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  <Button variant="hero" size="lg">
                    {t("Pieteikties konsultācijai", "Request Consultation")}
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
