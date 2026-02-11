import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, ArrowRight, ArrowLeft, CheckCircle2, Target, BarChart3, Layers, TrendingUp, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/shared/SEOHead";

export default function ReklamasStrategija() {
  const { t, getLocalizedPath, language } = useLanguage();

  const benefits = [
    {
      icon: Target,
      title: t("Mērķa auditorijas analīze", "Target Audience Analysis"),
      description: t("Dziļa izpratne par jūsu ideālo klientu un viņu uzvedību tiešsaistē.", "Deep understanding of your ideal customer and their online behavior.")
    },
    {
      icon: PieChart,
      title: t("Budžeta sadalījums", "Budget Allocation"),
      description: t("Optimāla budžeta sadale starp kanāliem maksimālai atdevei.", "Optimal budget distribution across channels for maximum return.")
    },
    {
      icon: BarChart3,
      title: t("Konkurentu izpēte", "Competitor Research"),
      description: t("Analīze, ko dara konkurenti un kā jūs varat izcelties.", "Analysis of what competitors do and how you can stand out.")
    },
    {
      icon: Layers,
      title: t("Kanālu izvēle", "Channel Selection"),
      description: t("Izvēlamies kanālus, kas reāli strādā jūsu nozarē.", "We select channels that actually work in your industry.")
    }
  ];

  const process = [
    {
      step: "01",
      title: t("Biznesa mērķu izpratne", "Business Goal Understanding"),
      description: t("Sapratīsim, ko vēlaties sasniegt – pārdošanas, zīmola atpazīstamību vai leadus.", "We'll understand what you want to achieve – sales, brand awareness or leads.")
    },
    {
      step: "02",
      title: t("Tirgus un auditorijas analīze", "Market & Audience Analysis"),
      description: t("Izpētīsim jūsu tirgu, konkurentus un mērķa auditorijas paradumus.", "We'll research your market, competitors and target audience habits.")
    },
    {
      step: "03",
      title: t("Kanālu rekomendācijas", "Channel Recommendations"),
      description: t("Saņemsiet skaidru stratēģiju ar kanālu izvēli un budžeta sadalījumu.", "You'll receive a clear strategy with channel selection and budget allocation.")
    }
  ];

  return (
    <>
      <SEOHead 
        titleLv="Reklāmas Stratēģija un Kanālu Izvēle | NEOLab"
        titleEn="Advertising Strategy & Channel Selection | NEOLab"
        descriptionLv="Profesionāla reklāmas stratēģijas izstrāde. Izvēlamies pareizos kanālus un optimizējam budžetu maksimālai atdevei."
        descriptionEn="Professional advertising strategy development. We select the right channels and optimize budget for maximum return."
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
                <span className="chip mb-6 inline-block text-sm">
                  {t("Stratēģija", "Strategy")}
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                  {t("Reklāmas stratēģija un", "Advertising strategy and")}{" "}
                  <span className="text-gradient-orange">{t("kanālu izvēle", "channel selection")}</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  {t(
                    "Pirms palaist reklāmu, jāsaprot, kur ir jūsu klienti un kā tos sasniegt. Mēs izvērtējam kanālus, budžetu un pieeju, lai katrs ieguldītais eiro strādātu.",
                    "Before launching ads, you need to understand where your customers are and how to reach them. We evaluate channels, budget and approach so every euro invested works."
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  <Button variant="hero" size="lg">
                    {t("Sākt stratēģijas izstrādi", "Start Strategy Development")}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-slate-50" />
          
          <div className="container-neo relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-foreground mb-4">
                  {t("Ko ietver", "What's Included in")}{" "}
                  <span className="text-gradient-orange">{t("stratēģijas izstrāde", "Strategy Development")}</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t(
                    "Visaptverošs skatījums uz jūsu reklāmas vajadzībām un iespējām",
                    "A comprehensive view of your advertising needs and opportunities"
                  )}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-sm h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
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
                  <span className="text-gradient-orange">{t("stratēģijas izstrāde", "Strategy Development Works")}</span>
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

        {/* CTA Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-amber-50/50 to-white" />
          
          <div className="container-neo relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-foreground mb-6">
                  {t("Gatavs sākt ar", "Ready to Start with")}{" "}
                  <span className="text-gradient-orange">{t("stratēģiju?", "Strategy?")}</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t(
                    "Sazinieties ar mums un kopā izstrādāsim reklāmas stratēģiju, kas strādās jūsu biznesam.",
                    "Contact us and together we'll develop an advertising strategy that works for your business."
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
