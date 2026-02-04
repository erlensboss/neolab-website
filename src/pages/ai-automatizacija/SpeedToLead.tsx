import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  Clock,
  Bell,
  Database,
  Smartphone,
  Mail,
  TrendingUp,
  Timer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SEOHead } from "@/components/shared/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  {
    icon: Timer,
    titleLv: "Tūlītēja reakcija",
    titleEn: "Instant Response",
    descLv: "Sistēma reaģē uz jauniem pieprasījumiem sekunžu laikā",
    descEn: "System responds to new leads within seconds",
  },
  {
    icon: Database,
    titleLv: "CRM sinhronizācija",
    titleEn: "CRM Sync",
    descLv: "Automātiska datu nodošana jūsu CRM sistēmai",
    descEn: "Automatic data transfer to your CRM system",
  },
  {
    icon: Bell,
    titleLv: "Paziņojumi komandai",
    titleEn: "Team Notifications",
    descLv: "Tūlītēji paziņojumi atbildīgajiem darbiniekiem",
    descEn: "Instant notifications to responsible team members",
  },
  {
    icon: TrendingUp,
    titleLv: "Konversiju analīze",
    titleEn: "Conversion Analytics",
    descLv: "Detalizēta statistika par atbildes ātruma ietekmi",
    descEn: "Detailed statistics on response time impact",
  },
];

const benefits = [
  { lv: "Būt pirmajiem, kas atbild", en: "Be the first to respond" },
  { lv: "Palielināt konversiju līmeni", en: "Increase conversion rates" },
  { lv: "Automātiska CRM atjaunināšana", en: "Automatic CRM updates" },
  { lv: "Komandas koordinācija reāllaikā", en: "Real-time team coordination" },
];

const faqs = [
  {
    qLv: "Kāpēc ātra atbilde ir tik svarīga?",
    qEn: "Why is fast response so important?",
    aLv: "Pētījumi rāda, ka uzņēmumi, kas atbild pirmie, iegūst līdz pat 50% vairāk klientu. Pirmās 5 minūtes ir kritiskas.",
    aEn: "Studies show that companies that respond first win up to 50% more customers. The first 5 minutes are critical.",
  },
  {
    qLv: "Ar kādām platformām tas integrējas?",
    qEn: "What platforms does it integrate with?",
    aLv: "Sistēma integrējas ar populārākajām CRM platformām (HubSpot, Pipedrive, Salesforce), e-pasta servisiem un Slack/Teams.",
    aEn: "The system integrates with popular CRM platforms (HubSpot, Pipedrive, Salesforce), email services, and Slack/Teams.",
  },
  {
    qLv: "Vai var pielāgot paziņojumu loģiku?",
    qEn: "Can notification logic be customized?",
    aLv: "Jā, mēs pielāgojam eskalācijas un paziņojumu loģiku jūsu komandas struktūrai un darba stundām.",
    aEn: "Yes, we customize escalation and notification logic to your team structure and working hours.",
  },
];

export default function SpeedToLead() {
  const { language: lang, getLocalizedPath } = useLanguage();

  return (
    <>
      <SEOHead
        titleLv="Speed-to-Lead System | NEOLab"
        titleEn="Speed-to-Lead System | NEOLab"
        descriptionLv="Sistēma, kas nodrošina tūlītēju reakciju uz jauniem pieprasījumiem. Būt pirmajiem, kas atbild."
        descriptionEn="System that ensures instant response to new leads. Be the first to respond."
      />

      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-orange-50/30 to-background" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <motion.div
            className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-orange-500/15 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="container-neo relative z-10 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <ScrollReveal>
                    <Link
                      to={getLocalizedPath("/ai-automatizacija")}
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
                    >
                      <ArrowRight className="w-4 h-4 rotate-180" />
                      {lang === "lv" ? "AI Automatizācijas" : "AI Automations"}
                    </Link>
                  </ScrollReveal>

                  <ScrollReveal delay={0.1}>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                      Speed-to-Lead <span className="text-gradient-orange">System</span>
                    </h1>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8">
                      {lang === "lv"
                        ? "Sistēma, kas reaģē uz jauniem pieprasījumiem gandrīz uzreiz, nodod informāciju CRM un informē atbildīgos cilvēkus."
                        : "System that responds to new leads almost instantly, transfers data to CRM, and notifies responsible people."}
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.3}>
                    <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                      <Button variant="hero" size="lg">
                        {lang === "lv" ? "Sākt konsultāciju" : "Start Consultation"}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </ScrollReveal>
                </div>

                {/* Visual */}
                <ScrollReveal delay={0.4}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 to-red-400/20 rounded-3xl blur-2xl opacity-60" />
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-xl">
                      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Speed Monitor</h3>
                          <p className="text-sm text-muted-foreground">Reāllaika pārskats</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: 0.6, duration: 0.8 }}
                          className="relative"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Jauns pieprasījums</span>
                            <span className="text-sm font-medium text-foreground">0:00</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ delay: 0.8, duration: 0.3 }}
                              className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.1 }}
                          className="flex items-center gap-3 bg-primary/10 rounded-lg p-3"
                        >
                          <Bell className="w-5 h-5 text-primary" />
                          <span className="text-sm text-foreground">Komanda informēta</span>
                          <span className="ml-auto text-xs text-primary font-medium">0:03</span>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.4 }}
                          className="flex items-center gap-3 bg-muted/50 rounded-lg p-3"
                        >
                          <Database className="w-5 h-5 text-muted-foreground" />
                          <span className="text-sm text-foreground">Pievienots CRM</span>
                          <span className="ml-auto text-xs text-muted-foreground font-medium">0:05</span>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7 }}
                        className="mt-6 flex items-center justify-center gap-2 text-orange-600"
                      >
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">Vidējais atbildes laiks: 5 sek</span>
                      </motion.div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container-neo px-4 sm:px-6">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
                {lang === "lv" ? "Sistēmas iespējas" : "System Features"}
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-card rounded-xl p-6 border border-border shadow-neo h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {lang === "lv" ? feature.titleLv : feature.titleEn}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {lang === "lv" ? feature.descLv : feature.descEn}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container-neo px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  {lang === "lv" ? "Ko jūs iegūsiet" : "What You'll Get"}
                </h2>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                    <div className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{lang === "lv" ? benefit.lv : benefit.en}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container-neo px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <ScrollReveal>
                <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
                  {lang === "lv" ? "Biežāk uzdotie jautājumi" : "Frequently Asked Questions"}
                </h2>
              </ScrollReveal>

              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                    <AccordionItem value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
                      <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                        {lang === "lv" ? faq.qLv : faq.qEn}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {lang === "lv" ? faq.aLv : faq.aEn}
                      </AccordionContent>
                    </AccordionItem>
                  </ScrollReveal>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container-neo px-4 sm:px-6">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {lang === "lv" ? "Gatavs sākt?" : "Ready to Start?"}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {lang === "lv"
                    ? "Sazinieties ar mums un uzziniet, kā Speed-to-Lead System var palīdzēt jūsu biznesam."
                    : "Contact us and learn how Speed-to-Lead System can help your business."}
                </p>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  <Button variant="hero" size="lg">
                    {lang === "lv" ? "Bezmaksas konsultācija" : "Free Consultation"}
                    <ArrowRight className="ml-2 w-5 h-5" />
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
