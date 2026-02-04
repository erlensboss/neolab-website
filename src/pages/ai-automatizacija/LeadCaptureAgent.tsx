import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Zap,
  Bot,
  Target,
  Clock,
  Mail,
  Database,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SEOHead } from "@/components/shared/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  {
    icon: MessageCircle,
    titleLv: "Reāllaika saruna",
    titleEn: "Real-time Chat",
    descLv: "AI aģents sazinās ar apmeklētājiem un atbild uz jautājumiem 24/7",
    descEn: "AI agent communicates with visitors and answers questions 24/7",
  },
  {
    icon: Target,
    titleLv: "Lead kvalificēšana",
    titleEn: "Lead Qualification",
    descLv: "Automātiski novērtē potenciālo klientu interesi un gatavību",
    descEn: "Automatically evaluates potential customer interest and readiness",
  },
  {
    icon: Database,
    titleLv: "CRM integrācija",
    titleEn: "CRM Integration",
    descLv: "Kontakti automātiski tiek pievienoti jūsu sistēmai",
    descEn: "Contacts are automatically added to your system",
  },
  {
    icon: Mail,
    titleLv: "Paziņojumi",
    titleEn: "Notifications",
    descLv: "Tūlītēji paziņojumi par jauniem potenciālajiem klientiem",
    descEn: "Instant notifications about new potential customers",
  },
];

const benefits = [
  { lv: "Nepazaudēt nevienu pieprasījumu", en: "Never miss a lead" },
  { lv: "Ietaupīt laiku manuālā darbā", en: "Save time on manual work" },
  { lv: "24/7 pieejamība apmeklētājiem", en: "24/7 availability for visitors" },
  { lv: "Kvalificēti kontakti jūsu komandai", en: "Qualified contacts for your team" },
];

const faqs = [
  {
    qLv: "Vai aģents var atbildēt uz jebkuru jautājumu?",
    qEn: "Can the agent answer any question?",
    aLv: "Aģents ir apmācīts uz jūsu biznesa specifiku un atbild uz jautājumiem saistībā ar jūsu produktiem/pakalpojumiem. Sarežģītus jautājumus tas nodod jūsu komandai.",
    aEn: "The agent is trained on your business specifics and answers questions related to your products/services. Complex questions are handed off to your team.",
  },
  {
    qLv: "Cik ātri aģents atbild?",
    qEn: "How fast does the agent respond?",
    aLv: "Atbilde tiek sniegta dažu sekunžu laikā, nodrošinot tūlītēju iesaisti ar apmeklētāju.",
    aEn: "Response is provided within seconds, ensuring immediate engagement with visitors.",
  },
  {
    qLv: "Vai tas izskatīsies kā robots?",
    qEn: "Will it look like a robot?",
    aLv: "Nē, mēs pielāgojam aģenta komunikācijas stilu jūsu zīmolam, lai sarunas būtu dabiskas un profesionālas.",
    aEn: "No, we customize the agent's communication style to your brand, making conversations natural and professional.",
  },
];

export default function LeadCaptureAgent() {
  const { language: lang, getLocalizedPath } = useLanguage();

  return (
    <>
      <SEOHead
        titleLv="Lead Capture Agent | NEOLab"
        titleEn="Lead Capture Agent | NEOLab"
        descriptionLv="AI aģents mājaslapas apmeklētāju iesaistei un kontaktu vākšanai. Nepazaudējiet nevienu potenciālo klientu."
        descriptionEn="AI agent for website visitor engagement and contact collection. Never miss a potential customer."
      />

      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-amber-50/30 to-background" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <motion.div
            className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-amber-400/15 blur-3xl"
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
                      Lead Capture <span className="text-gradient-orange">Agent</span>
                    </h1>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8">
                      {lang === "lv"
                        ? "AI aģents, kas sazinās ar mājaslapas apmeklētājiem, atbild uz jautājumiem un ievāc potenciālo klientu kontaktus."
                        : "AI agent that communicates with website visitors, answers questions, and collects potential customer contacts."}
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
                    <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/20 to-primary/20 rounded-3xl blur-2xl opacity-60" />
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-xl">
                      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Lead Agent</h3>
                          <p className="text-sm text-muted-foreground">Aktīvs 24/7</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1">
                          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                          <span className="text-xs text-primary font-medium">Online</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                          className="bg-muted/50 rounded-lg p-3 ml-8"
                        >
                          <p className="text-sm text-foreground">Sveiki! Kā varu palīdzēt?</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 }}
                          className="bg-primary/10 rounded-lg p-3 mr-8"
                        >
                          <p className="text-sm text-foreground">Interesē AI automatizācijas...</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.2 }}
                          className="bg-muted/50 rounded-lg p-3 ml-8"
                        >
                          <p className="text-sm text-foreground">Lieliski! Vai varu zināt jūsu e-pastu?</p>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="mt-6 flex items-center justify-center gap-2 text-amber-600"
                      >
                        <Bot className="w-4 h-4" />
                        <span className="text-sm font-medium">AI powered conversation</span>
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
                {lang === "lv" ? "Aģenta iespējas" : "Agent Features"}
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-card rounded-xl p-6 border border-border shadow-neo h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-amber-600" />
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
                    ? "Sazinieties ar mums un uzziniet, kā Lead Capture Agent var palīdzēt jūsu biznesam."
                    : "Contact us and learn how Lead Capture Agent can help your business."}
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
