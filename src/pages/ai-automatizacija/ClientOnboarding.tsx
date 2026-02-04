import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  Users,
  FileCheck,
  Calendar,
  Mail,
  ListTodo,
  Workflow,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SEOHead } from "@/components/shared/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  {
    icon: UserPlus,
    titleLv: "Klienta reģistrācija",
    titleEn: "Client Registration",
    descLv: "Automātiska jauna klienta profila izveide un datu apkopošana",
    descEn: "Automatic new client profile creation and data collection",
  },
  {
    icon: ListTodo,
    titleLv: "Uzdevumu sadale",
    titleEn: "Task Assignment",
    descLv: "Automātiska uzdevumu izveide un sadale komandas biedriem",
    descEn: "Automatic task creation and assignment to team members",
  },
  {
    icon: Mail,
    titleLv: "E-pasta secības",
    titleEn: "Email Sequences",
    descLv: "Personalizētas sveiciena un onboarding e-pasta kampaņas",
    descEn: "Personalized welcome and onboarding email campaigns",
  },
  {
    icon: Calendar,
    titleLv: "Kalendāra integrācija",
    titleEn: "Calendar Integration",
    descLv: "Automātiska tikšanos plānošana un atgādinājumi",
    descEn: "Automatic meeting scheduling and reminders",
  },
];

const benefits = [
  { lv: "Skaidrs onboarding process", en: "Clear onboarding process" },
  { lv: "Mazāk haosa sadarbības sākumā", en: "Less chaos at project start" },
  { lv: "Laba pirmā iespaida radīšana", en: "Great first impression" },
  { lv: "Automātiska uzdevumu izveide", en: "Automatic task creation" },
];

const faqs = [
  {
    qLv: "Cik ilgs ir tipiskais onboarding process?",
    qEn: "How long is a typical onboarding process?",
    aLv: "Tas atkarīgs no jūsu pakalpojuma sarežģītības. Mēs pielāgojam procesu, lai tas būtu optimāls - parasti 1-4 nedēļas.",
    aEn: "It depends on your service complexity. We customize the process to be optimal - usually 1-4 weeks.",
  },
  {
    qLv: "Vai klients redz, ka process ir automatizēts?",
    qEn: "Does the client see that the process is automated?",
    aLv: "Nē, visas komunikācijas ir personalizētas un izskatās kā individuāla uzmanība klientam. Automatizācija nodrošina konsekvenci, nevis aizvieto cilvēcisku pieeju.",
    aEn: "No, all communications are personalized and look like individual attention to the client. Automation ensures consistency, not replaces human touch.",
  },
  {
    qLv: "Ar kādām sistēmām tas strādā?",
    qEn: "What systems does it work with?",
    aLv: "Sistēma integrējas ar populārākajām CRM, projektu vadības (Asana, Monday, Notion) un e-pasta platformām.",
    aEn: "The system integrates with popular CRM, project management (Asana, Monday, Notion), and email platforms.",
  },
];

export default function ClientOnboarding() {
  const { language: lang, getLocalizedPath } = useLanguage();

  return (
    <>
      <SEOHead
        titleLv="Client Onboarding System | NEOLab"
        titleEn="Client Onboarding System | NEOLab"
        descriptionLv="Automatizēts klienta uzsākšanas process. No pirmās ziņas līdz veiksmīgai sadarbības uzsākšanai."
        descriptionEn="Automated client onboarding process. From first contact to successful collaboration start."
      />

      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <motion.div
            className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-primary/15 blur-3xl"
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
                      Client Onboarding <span className="text-gradient-orange">System</span>
                    </h1>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8">
                      {lang === "lv"
                        ? "Automatizē klienta uzsākšanas procesu – no pirmajām ziņām līdz iekšējo uzdevumu sadalei komandā."
                        : "Automates the client onboarding process – from first messages to internal task distribution in the team."}
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
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-amber-500/20 rounded-3xl blur-2xl opacity-60" />
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-xl">
                      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center">
                          <Layers className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Onboarding Flow</h3>
                          <p className="text-sm text-muted-foreground">Aktīvs process</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {[
                          { step: "1", label: "Klienta dati ievākti", status: "done" },
                          { step: "2", label: "Komanda informēta", status: "done" },
                          { step: "3", label: "Uzdevumi izveidoti", status: "active" },
                          { step: "4", label: "Tikšanās ieplānota", status: "pending" },
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.15 }}
                            className={`flex items-center gap-3 rounded-lg p-3 ${
                              item.status === "active"
                                ? "bg-primary/10 border border-primary/20"
                                : "bg-muted/50"
                            }`}
                          >
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                                item.status === "done"
                                  ? "bg-primary text-white"
                                  : item.status === "active"
                                  ? "bg-primary/20 text-primary"
                                  : "bg-muted-foreground/20 text-muted-foreground"
                              }`}
                            >
                              {item.status === "done" ? (
                                <CheckCircle2 className="w-4 h-4" />
                              ) : (
                                item.step
                              )}
                            </div>
                            <span
                              className={`text-sm ${
                                item.status === "pending" ? "text-muted-foreground" : "text-foreground"
                              }`}
                            >
                              {item.label}
                            </span>
                            {item.status === "active" && (
                              <span className="ml-auto w-2 h-2 rounded-full bg-primary animate-pulse" />
                            )}
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="mt-6 flex items-center justify-center gap-2 text-primary"
                      >
                        <Workflow className="w-4 h-4" />
                        <span className="text-sm font-medium">Pilnībā automatizēts</span>
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
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
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
                    ? "Sazinieties ar mums un uzziniet, kā Client Onboarding System var palīdzēt jūsu biznesam."
                    : "Contact us and learn how Client Onboarding System can help your business."}
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
