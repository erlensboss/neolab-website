import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Calendar,
  TrendingUp,
  FileText,
  Target,
  Clock,
  Users,
  BarChart3,
  Sparkles,
  RefreshCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SEOHead } from "@/components/shared/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  {
    icon: Calendar,
    titleLv: "Satura kalendārs",
    titleEn: "Content Calendar",
    descLv: "Automātiski ģenerēts publicēšanas plāns, kas ņem vērā jūsu nozari un auditoriju",
    descEn: "Auto-generated publishing schedule tailored to your industry and audience",
  },
  {
    icon: FileText,
    titleLv: "Tēmu izpēte",
    titleEn: "Topic Research",
    descLv: "AI analizē populārākās tēmas jūsu nozarē un piedāvā aktuālus satura virzienus",
    descEn: "AI analyzes trending topics in your industry and suggests relevant content directions",
  },
  {
    icon: Target,
    titleLv: "Mērķauditorijas fokuss",
    titleEn: "Audience Focus",
    descLv: "Saturs pielāgots jūsu ideālajam klientam un viņu interesēm",
    descEn: "Content tailored to your ideal customer and their interests",
  },
  {
    icon: TrendingUp,
    titleLv: "Veiktspējas analīze",
    titleEn: "Performance Analysis",
    descLv: "Sekojiet līdzi publicēto ierakstu efektivitātei un optimizējiet stratēģiju",
    descEn: "Track post performance and optimize your content strategy",
  },
];

const benefits = [
  { lv: "Konsekventu LinkedIn klātbūtni", en: "Consistent LinkedIn presence" },
  { lv: "Laika ietaupījums satura plānošanā", en: "Time saved on content planning" },
  { lv: "Profesionālu zīmola balsi", en: "Professional brand voice" },
  { lv: "Palielinātu engagement līmeni", en: "Increased engagement levels" },
];

const faqs = [
  {
    qLv: "Vai sistēma rakstīs saturu manā vietā?",
    qEn: "Will the system write content for me?",
    aLv: "Sistēma ģenerē satura idejas, ieteikumus un sagataves, bet finālais saturs vienmēr ir jūsu kontrolē. Mēs ticam, ka autentisks saturs ir efektīvāks.",
    aEn: "The system generates content ideas, suggestions, and drafts, but final content is always under your control. We believe authentic content is more effective.",
  },
  {
    qLv: "Cik bieži vajadzētu publicēt LinkedIn?",
    qEn: "How often should I post on LinkedIn?",
    aLv: "Optimālā frekvence ir 3-5 reizes nedēļā. Sistēma palīdzēs uzturēt šo ritmu bez stresa.",
    aEn: "Optimal frequency is 3-5 times per week. The system helps maintain this rhythm without stress.",
  },
  {
    qLv: "Vai tas integrējas ar citiem rīkiem?",
    qEn: "Does it integrate with other tools?",
    aLv: "Jā, sistēma var savienoties ar jūsu CRM, e-pasta platformu un citiem biznesa rīkiem.",
    aEn: "Yes, the system can connect with your CRM, email platform, and other business tools.",
  },
];

export default function LinkedInContentSystem() {
  const { t, language: lang, getLocalizedPath } = useLanguage();

  return (
    <>
      <SEOHead
        titleLv="LinkedIn Content System | NEOLab"
        titleEn="LinkedIn Content System | NEOLab"
        descriptionLv="Automatizēta sistēma regulārai LinkedIn satura veidošanai un publicēšanai. Ietaupiet laiku un uzturiet konsekventu klātbūtni."
        descriptionEn="Automated system for regular LinkedIn content creation and publishing. Save time and maintain consistent presence."
      />

      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-50/30 to-background" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <motion.div
            className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-blue-400/15 blur-3xl"
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
                      LinkedIn <span className="text-gradient-orange">Content System</span>
                    </h1>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8">
                      {lang === "lv"
                        ? "Automatizēta sistēma, kas palīdz regulāri veidot un publicēt saturu LinkedIn, analizējot tēmas, esošo saturu un nozares kontekstu."
                        : "Automated system that helps regularly create and publish content on LinkedIn, analyzing topics, existing content, and industry context."}
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
                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 to-primary/20 rounded-3xl blur-2xl opacity-60" />
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-xl">
                      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Content Planner</h3>
                          <p className="text-sm text-muted-foreground">Šīs nedēļas saturs</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {["Pirmdiena", "Trešdiena", "Piektdiena"].map((day, i) => (
                          <motion.div
                            key={day}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.15 }}
                            className="flex items-center justify-between bg-muted/50 rounded-lg p-3"
                          >
                            <div className="flex items-center gap-3">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-foreground">{day}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                              <span className="text-xs text-primary font-medium">Gatavs</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="mt-6 flex items-center justify-center gap-2 text-blue-600"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-medium">AI optimizēts grafiks</span>
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
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
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
                    ? "Sazinieties ar mums un uzziniet, kā LinkedIn Content System var palīdzēt jūsu biznesam."
                    : "Contact us and learn how LinkedIn Content System can help your business."}
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
