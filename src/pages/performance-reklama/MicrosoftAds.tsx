import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, ArrowRight, ArrowLeft, CheckCircle2, Search, Users, Briefcase, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/shared/SEOHead";

export default function MicrosoftAds() {
  const { t, getLocalizedPath, language } = useLanguage();

  const features = [
    {
      icon: Search,
      title: t("Bing meklēšana", "Bing Search"),
      description: t("Sasniedziet lietotājus, kas meklē Bing un Microsoft Edge pārlūkā.", "Reach users searching on Bing and Microsoft Edge browser.")
    },
    {
      icon: Users,
      title: t("LinkedIn Audience", "LinkedIn Audience"),
      description: t("Mērķējiet profesionāļus, izmantojot LinkedIn datus.", "Target professionals using LinkedIn data.")
    },
    {
      icon: Briefcase,
      title: t("B2B fokuss", "B2B Focus"),
      description: t("Ideāls kanāls biznesa klientu piesaistei.", "Ideal channel for business client acquisition.")
    },
    {
      icon: Globe,
      title: t("Starptautiski tirgi", "International Markets"),
      description: t("Spēcīga klātbūtne ASV, UK un citās anglofonajās valstīs.", "Strong presence in US, UK and other English-speaking countries.")
    }
  ];

  const benefits = [
    t("Mazāka konkurence un zemākas CPC izmaksas", "Less competition and lower CPC costs"),
    t("Augstāks konversijas potenciāls B2B segmentā", "Higher conversion potential in B2B segment"),
    t("LinkedIn auditorijas integrācija", "LinkedIn audience integration"),
    t("Profesionālu un maksātspējīgu auditoriju", "Professional and high-income audience"),
    t("Viegla Google Ads kampaņu importēšana", "Easy Google Ads campaign import")
  ];

  return (
    <>
      <SEOHead 
        titleLv="Microsoft Ads (Bing) | NEOLab"
        titleEn="Microsoft Ads (Bing) | NEOLab"
        descriptionLv="Profesionāla Microsoft Ads kampaņu pārvaldība. Sasniedziet B2B auditoriju un starptautiskos tirgus."
        descriptionEn="Professional Microsoft Ads campaign management. Reach B2B audience and international markets."
      />
      
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero bg-atmosphere overflow-hidden min-h-[50vh] flex items-center py-16 md:py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(ellipse 80% 60% at 70% 40%, hsl(210 90% 50%) 0px, transparent 50%)`,
              }}
            />
            <motion.div
              className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/10 to-blue-400/5 blur-3xl"
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
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                  <Building2 className="w-4 h-4" />
                  Microsoft
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                  Microsoft{" "}
                  <span className="text-gradient-orange">Ads</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  {t(
                    "Microsoft Ads ir ideāls papildkanāls B2B uzņēmumiem un tiem, kas vēlas sasniegt starptautiskās auditorijas. Zemākas izmaksas un LinkedIn integrācija padara to par vērtīgu rīku.",
                    "Microsoft Ads is an ideal supplementary channel for B2B companies and those wanting to reach international audiences. Lower costs and LinkedIn integration make it a valuable tool."
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  <Button variant="hero" size="lg">
                    {t("Sākt ar Microsoft Ads", "Start with Microsoft Ads")}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-slate-50" />
          
          <div className="container-neo relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-foreground mb-4">
                  {t("Platformas", "Platform")}{" "}
                  <span className="text-gradient-orange">{t("iespējas", "Features")}</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t(
                    "Microsoft Ads piedāvā unikālas iespējas B2B segmentam",
                    "Microsoft Ads offers unique opportunities for the B2B segment"
                  )}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-sm h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
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
                  <span className="text-gradient-orange">Microsoft Ads?</span>
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/50">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">-30%</div>
                    <div className="text-muted-foreground mb-6">{t("Zemākas CPC izmaksas", "Lower CPC Costs")}</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="p-3 rounded-lg bg-white/60">
                        <div className="font-semibold text-foreground">1B+</div>
                        <div className="text-muted-foreground text-xs">{t("Meklēšanas pieprasījumi", "Search Queries")}</div>
                      </div>
                      <div className="p-3 rounded-lg bg-white/60">
                        <div className="font-semibold text-foreground">+25%</div>
                        <div className="text-muted-foreground text-xs">{t("Augstāks ROI", "Higher ROI")}</div>
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
                  <span className="text-gradient-orange">Microsoft Ads?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t(
                    "Sazinieties ar mums un kopā izveidosim Microsoft Ads stratēģiju jūsu B2B vajadzībām.",
                    "Contact us and together we'll create a Microsoft Ads strategy for your B2B needs."
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
