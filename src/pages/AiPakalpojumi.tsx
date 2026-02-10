import { motion } from "framer-motion";
import {
  Brain,
  ArrowRight,
  MessageSquare,
  Users,
  Zap,
  Layers,
  RefreshCcw,
  ShoppingBag,
  CheckCircle2,
  Clock,
  Bot,
  Send,
  FileText,
  BarChart3,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/shared/SEOHead";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const services = [
  {
    icon: Users,
    titleLv: "Lead Capture Agent",
    titleEn: "Lead Capture Agent",
    priceLv: "No 1 200 €",
    priceEn: "From €1,200",
    descriptionLv:
      "AI aģents, kas 24/7 sazinās ar mājaslapas apmeklētājiem, atbild uz jautājumiem un pārvērš interesi reālos kontaktos. Kamēr citi neatbild, tu jau vāksi leadus.",
    descriptionEn:
      "AI agent that communicates with website visitors 24/7, answers questions, and converts interest into real contacts. While others don't respond, you're already collecting leads.",
    tags: [
      { lv: "24/7", en: "24/7" },
      { lv: "Kvalificēšana", en: "Qualification" },
      { lv: "CRM integrācija", en: "CRM integration" },
    ],
    visualItems: [
      { icon: Bot, labelLv: "AI aģents", labelEn: "AI agent" },
      { icon: MessageSquare, labelLv: "Čats", labelEn: "Chat" },
      { icon: Users, labelLv: "Leadi", labelEn: "Leads" },
      { icon: Send, labelLv: "CRM", labelEn: "CRM" },
    ],
    accentFrom: "from-primary",
    accentTo: "to-orange-500",
    accentBg: "bg-primary",
  },
  {
    icon: Zap,
    titleLv: "Speed-to-Lead System",
    titleEn: "Speed-to-Lead System",
    priceLv: "No 600 €",
    priceEn: "From €600",
    descriptionLv:
      "Sistēma, kas reaģē uz jauniem pieteikumiem pirmajās 60 sekundēs – brīdī, kad interese ir visaugstākā. Lēna atbilde šeit vairs nav risks.",
    descriptionEn:
      "System that responds to new inquiries within the first 60 seconds – when interest is highest. A slow response is no longer a risk.",
    tags: [
      { lv: "<60 sek", en: "<60 sec" },
      { lv: "Automātiska saziņa", en: "Auto outreach" },
      { lv: "CRM sync", en: "CRM sync" },
    ],
    visualItems: [
      { icon: Clock, labelLv: "Trigeris", labelEn: "Trigger" },
      { icon: Zap, labelLv: "60 sek", labelEn: "60 sec" },
      { icon: Send, labelLv: "Saziņa", labelEn: "Outreach" },
      { icon: CheckCircle2, labelLv: "Sync", labelEn: "Sync" },
    ],
    accentFrom: "from-orange-500",
    accentTo: "to-amber-500",
    accentBg: "bg-orange-500",
  },
  {
    icon: MessageSquare,
    titleLv: "Customer Support AI Chatbot",
    titleEn: "Customer Support AI Chatbot",
    priceLv: "No 500 €",
    priceEn: "From €500",
    descriptionLv:
      "AI čatbots, kas pārzina tavus pakalpojumus, cenas un procesus, atbild uz biežākajiem jautājumiem un atslogo komandu no rutīnas.",
    descriptionEn:
      "AI chatbot that knows your services, prices, and processes, answers FAQs, and relieves your team from routine tasks.",
    tags: [
      { lv: "Tūlītējas atbildes", en: "Instant answers" },
      { lv: "Eskalācija cilvēkam", en: "Human escalation" },
    ],
    visualItems: [
      { icon: MessageSquare, labelLv: "Jautājums", labelEn: "Question" },
      { icon: Brain, labelLv: "AI", labelEn: "AI" },
      { icon: CheckCircle2, labelLv: "Atbilde", labelEn: "Answer" },
      { icon: Users, labelLv: "Eskalācija", labelEn: "Escalation" },
    ],
    accentFrom: "from-amber-500",
    accentTo: "to-primary",
    accentBg: "bg-amber-500",
  },
  {
    icon: FileText,
    titleLv: "LinkedIn Content Automation System",
    titleEn: "LinkedIn Content Automation System",
    priceLv: "No 1 000 €",
    priceEn: "From €1,000",
    descriptionLv:
      "Pilnībā automatizēta LinkedIn satura sistēma, kas uztur regulāru klātbūtni, balstoties uz aktuāliem datiem un tavu profesionālo pozīciju.",
    descriptionEn:
      "Fully automated LinkedIn content system that maintains regular presence based on current data and your professional position.",
    tags: [
      { lv: "Autoritāte", en: "Authority" },
      { lv: "Konsekvence", en: "Consistency" },
      { lv: "Bez laika patēriņa", en: "No time investment" },
    ],
    visualItems: [
      { icon: BarChart3, labelLv: "Dati", labelEn: "Data" },
      { icon: Brain, labelLv: "AI", labelEn: "AI" },
      { icon: FileText, labelLv: "Saturs", labelEn: "Content" },
      { icon: Send, labelLv: "Publicēšana", labelEn: "Publishing" },
    ],
    accentFrom: "from-primary",
    accentTo: "to-amber-400",
    accentBg: "bg-primary",
  },
  {
    icon: Layers,
    titleLv: "Client Onboarding Automation",
    titleEn: "Client Onboarding Automation",
    priceLv: "No 500 €",
    priceEn: "From €500",
    descriptionLv:
      "Automatizēta pāreja no \"darījums noslēgts\" uz sakārtotu klienta uzņemšanu – dokumenti, rēķini un informācija bez manuālas skraidīšanas.",
    descriptionEn:
      "Automated transition from 'deal closed' to organized client onboarding – documents, invoices, and information without manual running around.",
    tags: [
      { lv: "Mazāk haosa", en: "Less chaos" },
      { lv: "Labāks pirmais iespaids", en: "Better first impression" },
    ],
    visualItems: [
      { icon: CheckCircle2, labelLv: "Darījums", labelEn: "Deal" },
      { icon: Workflow, labelLv: "Automatizācija", labelEn: "Automation" },
      { icon: FileText, labelLv: "Dokumenti", labelEn: "Documents" },
      { icon: Users, labelLv: "Klients", labelEn: "Client" },
    ],
    accentFrom: "from-orange-500",
    accentTo: "to-primary",
    accentBg: "bg-orange-500",
  },
  {
    icon: RefreshCcw,
    titleLv: "Client Reactivation Campaigns",
    titleEn: "Client Reactivation Campaigns",
    priceLv: "No 300 €",
    priceEn: "From €300",
    descriptionLv:
      "Sistēma, kas atdzīvina esošo klientu datubāzi ar mērķētām ziņām un atgriež ieņēmumus, kurus parasti vienkārši atstāj novārtā.",
    descriptionEn:
      "System that revives your existing client database with targeted messages and recovers revenue that is usually simply neglected.",
    tags: [
      { lv: "LTV pieaugums", en: "LTV growth" },
      { lv: "Automatizēti pieskārieni", en: "Automated touchpoints" },
    ],
    visualItems: [
      { icon: Users, labelLv: "Datubāze", labelEn: "Database" },
      { icon: Brain, labelLv: "Segmentācija", labelEn: "Segmentation" },
      { icon: Send, labelLv: "Kampanja", labelEn: "Campaign" },
      { icon: BarChart3, labelLv: "Ieņēmumi", labelEn: "Revenue" },
    ],
    accentFrom: "from-amber-500",
    accentTo: "to-orange-500",
    accentBg: "bg-amber-500",
  },
  {
    icon: ShoppingBag,
    titleLv: "Social Media Product Marketing System",
    titleEn: "Social Media Product Marketing System",
    priceLv: "No 600 €",
    priceEn: "From €600",
    descriptionLv:
      "Automātiska produktu publicēšana sociālajos tīklos – no e-veikala līdz gatavam postam bez manuāla darba.",
    descriptionEn:
      "Automatic product publishing on social media – from e-store to finished post without manual work.",
    tags: [
      { lv: "E-commerce", en: "E-commerce" },
      { lv: "Facebook & Instagram", en: "Facebook & Instagram" },
      { lv: "Autopublicēšana", en: "Auto-publishing" },
    ],
    visualItems: [
      { icon: ShoppingBag, labelLv: "Produkts", labelEn: "Product" },
      { icon: Brain, labelLv: "AI", labelEn: "AI" },
      { icon: FileText, labelLv: "Posts", labelEn: "Post" },
      { icon: Send, labelLv: "Publicēšana", labelEn: "Publishing" },
    ],
    accentFrom: "from-primary",
    accentTo: "to-orange-400",
    accentBg: "bg-primary",
  },
];

export default function AiPakalpojumi() {
  const { t, getLocalizedPath } = useLanguage();

  return (
    <>
      <SEOHead
        titleLv="AI automatizācijas pakalpojumi | NEOLab"
        titleEn="AI Automation Services | NEOLab"
        descriptionLv="Pilns AI automatizācijas pakalpojumu klāsts uzņēmumiem – no lead capture līdz klientu reaktivācijai. Gatavi risinājumi ar skaidru cenu."
        descriptionEn="Full range of AI automation services for businesses – from lead capture to client reactivation. Ready solutions with clear pricing."
      />

      {/* ========== HERO ========== */}
      <section className="relative bg-gradient-hero bg-atmosphere overflow-hidden min-h-[85vh] flex items-center mt-[30px]">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                radial-gradient(ellipse 80% 60% at 70% 40%, hsl(21 90% 48%) 0px, transparent 50%),
                radial-gradient(ellipse 50% 40% at 20% 60%, hsl(32 90% 55%) 0px, transparent 50%)
              `,
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(hsl(21 90% 48%) 1px, transparent 1px),
                linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
          <motion.div
            className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-amber-400/5 blur-3xl"
            animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 mt-[40px] md:mt-[80px]"
            >
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {t("AI pakalpojumi", "AI Services")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                NEOLab
              </span>{" "}
              {t("AI automatizācijas pakalpojumi", "AI automation services")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              {t(
                "Pārbaudīti AI risinājumi, kas automatizē ikdienas procesus un palīdz uzņēmumam strādāt efektīvāk – ar skaidrām cenām un ātru ieviešanu.",
                "Proven AI solutions that automate daily processes and help your business work more efficiently – with clear pricing and fast implementation."
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button size="lg" asChild>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  {t("Pieteikt konsultāciju", "Book a consultation")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <div className="absolute inset-0 grid-overlay-subtle" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-6 md:mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 text-sm">
                <Workflow className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {t("Pakalpojumi", "Services")}
                </span>
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl mx-auto mb-4">
                {t("AI automatizācijas", "AI automation")}{" "}
                <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                  {t("risinājumi", "solutions")}
                </span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                {t(
                  "Katrs risinājums ir gatavs ieviešanai un pielāgojams tavam uzņēmumam. Izvēlies to, kas tev šobrīd ir aktuālākais.",
                  "Each solution is ready for implementation and adaptable to your business. Choose what's most relevant for you right now."
                )}
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8 md:space-y-10 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const isReversed = index % 2 === 1;
              return (
                <ScrollReveal key={index} delay={0.05 + index * 0.03}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative group"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${
                        isReversed ? "from-transparent to-primary/10" : "from-primary/10 to-transparent"
                      } rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500`}
                    />
                    <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      {/* Top accent bar */}
                      <div className={`h-1 bg-gradient-to-r ${service.accentFrom} ${service.accentTo}`} />

                      <div className="p-6 md:p-8 lg:p-10">
                        <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 lg:gap-10`}>
                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.accentFrom} ${service.accentTo} flex items-center justify-center shadow-md`}>
                                <service.icon className="w-6 h-6 text-primary-foreground" />
                              </div>
                              <div>
                                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                  {t(service.titleLv, service.titleEn)}
                                </h3>
                              </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {t(service.descriptionLv, service.descriptionEn)}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-5">
                              {service.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="text-xs px-3 py-1.5 bg-muted/70 rounded-full text-muted-foreground font-medium"
                                >
                                  {t(tag.lv, tag.en)}
                                </span>
                              ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                              <span className="text-sm font-semibold text-foreground">
                                {t(`Cena: ${service.priceLv}`, `Price: ${service.priceEn}`)}
                              </span>
                              <Button size="sm" className="md:size-default" asChild>
                                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                                  <span className="hidden sm:inline">
                                    {t("Pieteikt konsultāciju", "Book consultation")}
                                  </span>
                                  <span className="sm:hidden">{t("Pieteikt", "Request")}</span>
                                  <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                              </Button>
                            </div>
                          </div>

                          {/* Visual sidebar */}
                          <div className="lg:w-64 flex-shrink-0">
                            <div className="bg-muted/50 rounded-xl p-4 border border-border/50 space-y-3">
                              {service.visualItems.map((item, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.3 + i * 0.1 }}
                                  className="flex items-center gap-3 bg-card rounded-lg p-2.5 border border-border/40"
                                >
                                  <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                                  <span className="text-sm font-medium text-foreground">
                                    {t(item.labelLv, item.labelEn)}
                                  </span>
                                  <CheckCircle2 className="w-3.5 h-3.5 text-primary/40 ml-auto" />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <ScrollReveal delay={0.2}>
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6 text-lg">
                {t(
                  "Nezini, kurš risinājums der tev? Sāc ar bezmaksas konsultāciju.",
                  "Not sure which solution fits you? Start with a free consultation."
                )}
              </p>
              <Button size="lg" variant="hero" asChild>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  {t("Bezmaksas konsultācija", "Free consultation")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
