import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Bot,
  Brain,
  Users,
  Clock,
  Headphones,
  BarChart3,
  RefreshCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SEOHead } from "@/components/shared/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  {
    icon: Brain,
    titleLv: "AI atbildes",
    titleEn: "AI Responses",
    descLv: "Inteliģentas atbildes uz biežāk uzdotajiem jautājumiem",
    descEn: "Intelligent responses to frequently asked questions",
  },
  {
    icon: Users,
    titleLv: "Nodošana cilvēkam",
    titleEn: "Human Handoff",
    descLv: "Sarežģīti jautājumi automātiski tiek nodoti jūsu komandai",
    descEn: "Complex questions are automatically handed off to your team",
  },
  {
    icon: Clock,
    titleLv: "24/7 pieejamība",
    titleEn: "24/7 Availability",
    descLv: "Klientu apkalpošana jebkurā diennakts laikā",
    descEn: "Customer support at any time of day",
  },
  {
    icon: BarChart3,
    titleLv: "Analītika",
    titleEn: "Analytics",
    descLv: "Detalizēti pārskati par klientu jautājumiem un apmierinātību",
    descEn: "Detailed reports on customer questions and satisfaction",
  },
];

const benefits = [
  { lv: "Ātrākas atbildes klientiem", en: "Faster customer responses" },
  { lv: "Samazināta slodze uz komandu", en: "Reduced workload on team" },
  { lv: "Konsekventas atbildes", en: "Consistent answers" },
  { lv: "24/7 atbalsts bez papildu izmaksām", en: "24/7 support without extra costs" },
];

const faqs = [
  {
    qLv: "Cik gudrs ir čatbots?",
    qEn: "How smart is the chatbot?",
    aLv: "Čatbots ir apmācīts uz jūsu biznesa specifiku un FAQ. Tas saprot kontekstu un var sniegt personalizētas atbildes, bet sarežģītus gadījumus nodod cilvēkiem.",
    aEn: "The chatbot is trained on your business specifics and FAQ. It understands context and can provide personalized answers, but hands off complex cases to humans.",
  },
  {
    qLv: "Vai tas var strādāt vairākās valodās?",
    qEn: "Can it work in multiple languages?",
    aLv: "Jā, čatbots var sazināties latviešu, angļu, krievu un citās valodās atkarībā no jūsu vajadzībām.",
    aEn: "Yes, the chatbot can communicate in Latvian, English, Russian, and other languages depending on your needs.",
  },
  {
    qLv: "Kā notiek čatbota apmācība?",
    qEn: "How is the chatbot trained?",
    aLv: "Mēs analizējam jūsu esošos FAQ, iepriekšējās sarunas ar klientiem un dokumentāciju. Čatbots tiek nepārtraukti uzlabots, balstoties uz reālām sarunām.",
    aEn: "We analyze your existing FAQ, previous customer conversations, and documentation. The chatbot is continuously improved based on real conversations.",
  },
];

export default function SupportChatbot() {
  const { language: lang, getLocalizedPath } = useLanguage();

  return (
    <>
      <SEOHead
        titleLv="Customer Support Chatbot | NEOLab"
        titleEn="Customer Support Chatbot | NEOLab"
        descriptionLv="AI čatbots klientu apkalpošanai. Ātras atbildes uz biežākajiem jautājumiem 24/7."
        descriptionEn="AI chatbot for customer support. Fast answers to frequently asked questions 24/7."
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
            className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-amber-500/15 blur-3xl"
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
                      Customer Support <span className="text-gradient-orange">Chatbot</span>
                    </h1>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8">
                      {lang === "lv"
                        ? "AI čatbots klientu jautājumu apstrādei, kas spēj sniegt atbildes uz biežākajiem jautājumiem un nodot sarežģītākus gadījumus komandai."
                        : "AI chatbot for customer question handling that can answer frequently asked questions and hand off complex cases to the team."}
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
                    <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-primary/20 rounded-3xl blur-2xl opacity-60" />
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-xl">
                      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-primary flex items-center justify-center">
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Support Chat</h3>
                          <p className="text-sm text-muted-foreground">24/7 pieejams</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1">
                          <Bot className="w-4 h-4 text-primary" />
                          <span className="text-xs text-primary font-medium">AI</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                          className="bg-muted/50 rounded-lg p-3 mr-8"
                        >
                          <p className="text-sm text-foreground">Kā var atjaunot paroli?</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 }}
                          className="bg-primary/10 rounded-lg p-3 ml-8"
                        >
                          <p className="text-sm text-foreground">
                            Lai atjaunotu paroli, dodieties uz profila sadaļu un noklikšķiniet "Mainīt paroli"...
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 }}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <RefreshCcw className="w-3 h-3 animate-spin" />
                          <span className="text-xs">Čatbots raksta...</span>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="mt-6 flex items-center justify-center gap-4"
                      >
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Headphones className="w-4 h-4" />
                          <span className="text-xs">Vidējais atbildes laiks: 3 sek</span>
                        </div>
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
                {lang === "lv" ? "Čatbota iespējas" : "Chatbot Features"}
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
                    ? "Sazinieties ar mums un uzziniet, kā Customer Support Chatbot var palīdzēt jūsu biznesam."
                    : "Contact us and learn how Customer Support Chatbot can help your business."}
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
