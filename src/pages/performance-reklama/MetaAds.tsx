import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, ArrowRight, ArrowLeft, CheckCircle2, Target, Image, MessageCircle, ShoppingBag, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/shared/SEOHead";

export default function MetaAds() {
  const { t, getLocalizedPath, language } = useLanguage();

  const adFormats = [
    {
      icon: Image,
      title: t("Attēlu reklāmas", "Image Ads"),
      description: t("Vizuāli pievilcīgas reklāmas, kas piesaista uzmanību feedā.", "Visually attractive ads that capture attention in the feed.")
    },
    {
      icon: MessageCircle,
      title: t("Video reklāmas", "Video Ads"),
      description: t("Dinamisks saturs, kas stāsta jūsu zīmola stāstu.", "Dynamic content that tells your brand story.")
    },
    {
      icon: ShoppingBag,
      title: t("Carousel reklāmas", "Carousel Ads"),
      description: t("Vairāki produkti vai vēstījumi vienā reklāmā.", "Multiple products or messages in a single ad.")
    },
    {
      icon: Users,
      title: t("Lead Gen reklāmas", "Lead Gen Ads"),
      description: t("Viegla kontaktu vākšana bez atstāšanas platformu.", "Easy contact collection without leaving the platform.")
    },
    {
      icon: RefreshCw,
      title: t("Remarketings", "Remarketing"),
      description: t("Atgādiniet par sevi lietotājiem, kas jau interesējās.", "Remind users who have already shown interest.")
    },
    {
      icon: Target,
      title: t("Lookalike auditorijas", "Lookalike Audiences"),
      description: t("Sasniedziet jaunus lietotājus, kas līdzīgi jūsu labākajiem klientiem.", "Reach new users similar to your best customers.")
    }
  ];

  const benefits = [
    t("Precīza auditorijas mērķēšana pēc interesēm un uzvedības", "Precise audience targeting by interests and behavior"),
    t("Plašs sasniedzamības potenciāls (3+ miljardi lietotāju)", "Wide reach potential (3+ billion users)"),
    t("Vizuāli pievilcīgi reklāmu formāti", "Visually attractive ad formats"),
    t("Efektīva zīmola atpazīstamības veidošana", "Effective brand awareness building"),
    t("Integrācija ar Instagram un Messenger", "Integration with Instagram and Messenger")
  ];

  return (
    <>
      <SEOHead 
        titleLv="Meta Ads (Facebook & Instagram) | NEOLab"
        titleEn="Meta Ads (Facebook & Instagram) | NEOLab"
        descriptionLv="Profesionāla Meta Ads kampaņu pārvaldība. Facebook un Instagram reklāmas auditoriju sasniegšanai un zīmola veidošanai."
        descriptionEn="Professional Meta Ads campaign management. Facebook and Instagram ads for audience reach and brand building."
      />
      
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero bg-atmosphere overflow-hidden min-h-[50vh] flex items-center py-16 md:py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(ellipse 80% 60% at 70% 40%, hsl(280 80% 50%) 0px, transparent 50%)`,
              }}
            />
            <motion.div
              className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-400/5 blur-3xl"
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
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                  <Users className="w-4 h-4" />
                  Meta
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                  Meta Ads{" "}
                  <span className="text-gradient-orange">(Facebook & Instagram)</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  {t(
                    "Sasniedziet miljoniem potenciālo klientu, kur viņi pavada laiku. Meta Ads ļauj precīzi mērķēt auditorijas un veidot zīmola atpazīstamību.",
                    "Reach millions of potential customers where they spend their time. Meta Ads allows precise audience targeting and brand awareness building."
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  <Button variant="hero" size="lg">
                    {t("Sākt ar Meta Ads", "Start with Meta Ads")}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Ad Formats Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/30" />
          
          <div className="container-neo relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-foreground mb-4">
                  {t("Reklāmu", "Ad")}{" "}
                  <span className="text-gradient-orange">{t("formāti", "Formats")}</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t(
                    "Izvēlamies formātus, kas vislabāk pārnes jūsu vēstījumu",
                    "We select formats that best convey your message"
                  )}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adFormats.map((format, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-sm h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-5">
                      <format.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{format.title}</h3>
                    <p className="text-muted-foreground text-sm">{format.description}</p>
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
                  <span className="text-gradient-orange">Meta Ads?</span>
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50/50 border border-purple-200/50">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">3.2B+</div>
                    <div className="text-muted-foreground mb-6">{t("Aktīvie lietotāji", "Active Users")}</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="p-3 rounded-lg bg-white/60">
                        <div className="font-semibold text-foreground">2.1x</div>
                        <div className="text-muted-foreground text-xs">{t("Engagement pieaugums", "Engagement Increase")}</div>
                      </div>
                      <div className="p-3 rounded-lg bg-white/60">
                        <div className="font-semibold text-foreground">+45%</div>
                        <div className="text-muted-foreground text-xs">{t("Zīmola atpazīstamība", "Brand Awareness")}</div>
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
                  <span className="text-gradient-orange">Meta Ads?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t(
                    "Sazinieties ar mums un kopā izveidosim Meta Ads stratēģiju jūsu zīmolam.",
                    "Contact us and together we'll create a Meta Ads strategy for your brand."
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
