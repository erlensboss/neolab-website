import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowRight, ArrowLeft, CheckCircle2, Target, BarChart3, Video, ShoppingCart, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/shared/SEOHead";

export default function GoogleAds() {
  const { t, getLocalizedPath, language } = useLanguage();

  const campaignTypes = [
    {
      icon: Search,
      title: t("Meklēšanas kampaņas", "Search Campaigns"),
      description: t("Reklāmas Google meklēšanā, kad lietotāji meklē jūsu produktus vai pakalpojumus.", "Ads in Google Search when users search for your products or services.")
    },
    {
      icon: BarChart3,
      title: t("Display kampaņas", "Display Campaigns"),
      description: t("Vizuālās reklāmas miljoniem vietņu un lietotnēs Google tīklā.", "Visual ads across millions of websites and apps in the Google network.")
    },
    {
      icon: Video,
      title: t("YouTube kampaņas", "YouTube Campaigns"),
      description: t("Video reklāmas pasaulē otrajā lielākajā meklētājā.", "Video ads on the world's second largest search engine.")
    },
    {
      icon: ShoppingCart,
      title: t("Shopping kampaņas", "Shopping Campaigns"),
      description: t("Produktu reklāmas ar attēliem un cenām tieši meklēšanas rezultātos.", "Product ads with images and prices directly in search results.")
    },
    {
      icon: RefreshCw,
      title: t("Remarketings", "Remarketing"),
      description: t("Atkārtota saziņa ar lietotājiem, kas jau apmeklējuši jūsu vietni.", "Re-engage users who have already visited your website.")
    },
    {
      icon: Target,
      title: t("Performance Max", "Performance Max"),
      description: t("AI vadītas kampaņas visos Google kanālos vienlaicīgi.", "AI-driven campaigns across all Google channels simultaneously.")
    }
  ];

  const benefits = [
    t("Mērķtiecīga auditorija ar augstu pirkuma nodomu", "Targeted audience with high purchase intent"),
    t("Precīza izmaksu kontrole un optimizācija", "Precise cost control and optimization"),
    t("Detalizēta analītika un atribūcija", "Detailed analytics and attribution"),
    t("Ātra rezultātu iegūšana", "Fast results delivery"),
    t("Mērogojamība atbilstoši biznesam", "Scalability according to business needs")
  ];

  return (
    <>
      <SEOHead 
        titleLv="Google Ads Kampaņas | NEOLab"
        titleEn="Google Ads Campaigns | NEOLab"
        descriptionLv="Profesionāla Google Ads kampaņu pārvaldība. Search, Display, YouTube, Shopping un Performance Max reklāmas jūsu biznesam."
        descriptionEn="Professional Google Ads campaign management. Search, Display, YouTube, Shopping and Performance Max ads for your business."
      />
      
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero bg-atmosphere overflow-hidden min-h-[50vh] flex items-center py-16 md:py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(ellipse 80% 60% at 70% 40%, hsl(142 76% 36%) 0px, transparent 50%)`,
              }}
            />
            <motion.div
              className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-green-500/10 to-green-400/5 blur-3xl"
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
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
                  <Search className="w-4 h-4" />
                  Google
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                  Google Ads{" "}
                  <span className="text-gradient-orange">{t("kampaņas", "Campaigns")}</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  {t(
                    "Sasniedziet klientus tieši tajā brīdī, kad viņi meklē jūsu produktus vai pakalpojumus. Google Ads ļauj precīzi mērķēt un mērīt katru ieguldīto eiro.",
                    "Reach customers exactly when they're searching for your products or services. Google Ads allows precise targeting and measurement of every euro invested."
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  <Button variant="hero" size="lg">
                    {t("Sākt ar Google Ads", "Start with Google Ads")}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Campaign Types Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-white to-slate-50" />
          
          <div className="container-neo relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-foreground mb-4">
                  {t("Kampaņu", "Campaign")}{" "}
                  <span className="text-gradient-orange">{t("veidi", "Types")}</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t(
                    "Izvēlamies un kombinējam kampaņu veidus atbilstoši jūsu mērķiem",
                    "We select and combine campaign types according to your goals"
                  )}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaignTypes.map((type, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-sm h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-5">
                      <type.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{type.title}</h3>
                    <p className="text-muted-foreground text-sm">{type.description}</p>
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
                  <span className="text-gradient-orange">Google Ads?</span>
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200/50">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">4.2x</div>
                    <div className="text-muted-foreground mb-6">{t("Vidējais ROAS", "Average ROAS")}</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="p-3 rounded-lg bg-white/60">
                        <div className="font-semibold text-foreground">-35%</div>
                        <div className="text-muted-foreground text-xs">{t("CPA samazinājums", "CPA Reduction")}</div>
                      </div>
                      <div className="p-3 rounded-lg bg-white/60">
                        <div className="font-semibold text-foreground">+65%</div>
                        <div className="text-muted-foreground text-xs">{t("Konversiju pieaugums", "Conversion Increase")}</div>
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
                  <span className="text-gradient-orange">Google Ads?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t(
                    "Sazinieties ar mums un kopā izveidosim Google Ads stratēģiju, kas nes rezultātus.",
                    "Contact us and together we'll create a Google Ads strategy that delivers results."
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
