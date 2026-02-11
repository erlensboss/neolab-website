import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Settings, ArrowRight, ArrowLeft, CheckCircle2, Target, BarChart3, MousePointer, Activity, Database, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/shared/SEOHead";

export default function KonversijuOptimizacija() {
  const { t, getLocalizedPath, language } = useLanguage();

  const services = [
    {
      icon: Target,
      title: t("Konversiju uzstādīšana", "Conversion Setup"),
      description: t("Pareiza konversiju izsekošanas iestatīšana Google Ads, Meta Ads un citās platformās.", "Proper conversion tracking setup in Google Ads, Meta Ads and other platforms.")
    },
    {
      icon: Database,
      title: t("Tag Manager implementācija", "Tag Manager Implementation"),
      description: t("Google Tag Manager uzstādīšana un konfigurēšana efektīvai datu vākšanai.", "Google Tag Manager setup and configuration for effective data collection.")
    },
    {
      icon: Activity,
      title: t("Notikumu izsekošana", "Event Tracking"),
      description: t("Svarīgo lietotāju darbību (klikšķi, formas, pirkumi) izsekošana.", "Tracking of important user actions (clicks, forms, purchases).")
    },
    {
      icon: BarChart3,
      title: t("Analytics iestatīšana", "Analytics Setup"),
      description: t("Google Analytics 4 konfigurēšana ar pareiziem mērķiem un piltuvēm.", "Google Analytics 4 configuration with proper goals and funnels.")
    },
    {
      icon: Gauge,
      title: t("Datu kvalitātes audits", "Data Quality Audit"),
      description: t("Esošo mērījumu pārbaude un kļūdu novēršana.", "Existing measurement verification and error correction.")
    },
    {
      icon: MousePointer,
      title: t("Enhanced Conversions", "Enhanced Conversions"),
      description: t("Uzlabotās konversijas precīzākai mērīšanai un optimizācijai.", "Enhanced conversions for more precise measurement and optimization.")
    }
  ];

  const benefits = [
    t("Precīza datu vākšana lēmumu pieņemšanai", "Accurate data collection for decision making"),
    t("Labāka reklāmu optimizācija ar kvalitātes datiem", "Better ad optimization with quality data"),
    t("Skaidra atribūcija un ROI izpratne", "Clear attribution and ROI understanding"),
    t("Automatizācijas iespējas ar pareiziem signāliem", "Automation opportunities with proper signals"),
    t("Atbilstība datu aizsardzības prasībām", "Compliance with data protection requirements")
  ];

  const process = [
    {
      step: "01",
      title: t("Audits un plānošana", "Audit & Planning"),
      description: t("Izvērtējam esošo mērījumu stāvokli un definējam, kas jāmēra.", "We evaluate the current measurement state and define what needs to be measured.")
    },
    {
      step: "02",
      title: t("Tehniskā implementācija", "Technical Implementation"),
      description: t("Uzstādām Tag Manager, konversijas un notikumus atbilstoši plānam.", "We set up Tag Manager, conversions and events according to the plan.")
    },
    {
      step: "03",
      title: t("Testēšana un validācija", "Testing & Validation"),
      description: t("Pārbaudām, vai visi mērījumi darbojas pareizi visos scenārijos.", "We verify that all measurements work correctly in all scenarios.")
    },
    {
      step: "04",
      title: t("Dokumentācija un apmācība", "Documentation & Training"),
      description: t("Sagatavojam dokumentāciju un apmācām komandu datu interpretācijā.", "We prepare documentation and train the team in data interpretation.")
    }
  ];

  return (
    <>
      <SEOHead 
        titleLv="Konversiju Uzstādīšana un Optimizācija | NEOLab"
        titleEn="Conversion Setup & Optimization | NEOLab"
        descriptionLv="Profesionāla konversiju izsekošanas uzstādīšana. Tag Manager, Analytics un reklāmu platformu konfigurēšana precīzai datu vākšanai."
        descriptionEn="Professional conversion tracking setup. Tag Manager, Analytics and ad platform configuration for accurate data collection."
      />
      
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero bg-atmosphere overflow-hidden min-h-[50vh] flex items-center py-16 md:py-24">
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
            <ScrollReveal>
              <Link 
                to={getLocalizedPath("/digitala-reklama")} 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t("Atpakaļ uz Digitālo reklāmu", "Back to Digital Advertising")}</span>
              </Link>
            </ScrollReveal>

            <div className="max-w-4xl">
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <Settings className="w-4 h-4" />
                  {t("Tehniski", "Technical")}
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                  {t("Konversiju uzstādīšana un", "Conversion setup and")}{" "}
                  <span className="text-gradient-orange">{t("optimizācija", "optimization")}</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  {t(
                    "Bez korektas datu uzskaites reklāma netiek palaista. Mēs uzstādām konversijas, notikumus un mērījumus, lai katrs lēmums balstītos reālos datos, nevis minējumos.",
                    "Without proper data tracking, ads won't be launched. We set up conversions, events and measurements so every decision is based on real data, not guesses."
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  <Button variant="hero" size="lg">
                    {t("Sākt ar konversiju iestatīšanu", "Start Conversion Setup")}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-slate-50" />
          
          <div className="container-neo relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-foreground mb-4">
                  {t("Ko mēs", "What We")}{" "}
                  <span className="text-gradient-orange">{t("iestatām", "Set Up")}</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t(
                    "Pilns tehnisko mērījumu serviss jūsu reklāmu efektivitātei",
                    "Complete technical measurement service for your advertising effectiveness"
                  )}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-sm h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-muted/30 to-white" />
          
          <div className="container-neo relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-foreground mb-4">
                  {t("Kā notiek", "How the")}{" "}
                  <span className="text-gradient-orange">{t("process", "Process Works")}</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto space-y-6">
              {process.map((step, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="flex gap-6 p-6 rounded-2xl bg-card border border-border">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-amber-50/50 to-white" />
          
          <div className="container-neo relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <h2 className="text-foreground mb-6">
                  {t("Kāpēc ir svarīgi", "Why It's Important to")}{" "}
                  <span className="text-gradient-orange">{t("mērīt pareizi?", "Measure Correctly?")}</span>
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="text-center max-w-md mx-auto">
                  <p className="text-lg text-muted-foreground mb-8">
                    {t(
                      "Sazinieties ar mums un kopā uzstādīsim mērījumu sistēmu, kas ļaus pieņemt pareizos lēmumus.",
                      "Contact us and together we'll set up a measurement system that enables correct decisions."
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
          </div>
        </section>
      </div>
    </>
  );
}
