import { motion } from "framer-motion";
import neolabIcon from "@/assets/neolab-icon-black.svg";
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
      "Lead Capture Agent uzsāk sarunu ar mājaslapas apmeklētājiem un savāc strukturētu informāciju par viņu interesi. Tas atbild uz jautājumiem, kvalificē pieprasījumus un nodod tos tālāk pārdošanai. Rezultātā netiek zaudēti potenciālie klienti tikai tāpēc, ka neviens nepaspēja atbildēt.",
    descriptionEn:
      "Lead Capture Agent starts a conversation with website visitors and collects structured information about their interests. It answers questions, qualifies leads, and passes them on for sale. As a result, you don't lose potential customers just because no one responded.",
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
      "Speed-to-Lead System nodrošina tūlītēju reakciju uz jauniem pieteikumiem brīdī, kad interese ir visaugstākā. Sistēma automātiski uzsāk saziņu un informē atbildīgās personas. Tas samazina situācijas, kur darījumi pazūd kavētas atbildes dēļ.",
    descriptionEn:
      "The Speed-to-Lead System ensures immediate response to new leads at the time when interest is highest. The system automatically initiates communication and notifies the responsible persons. This reduces situations where deals are lost due to delayed responses.",
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
      "Customer Support AI Chatbot atbild uz biežākajiem klientu jautājumiem par pakalpojumiem, cenām un procesiem. Tas strādā nepārtraukti un nodod sarunu cilvēkam, ja nepieciešama padziļināta iesaiste. Klientu atbalsts kļūst ātrāks, bet komandas slodze ir mazāka.",
    descriptionEn:
      "Customer Support AI Chatbot answers the most common customer questions about services, pricing, and processes. It works continuously and transfers the conversation to a human when in-depth engagement is needed. Customer support becomes faster, and the team’s workload is reduced.",
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
      "LinkedIn Content Automation System nodrošina regulāru un konsekventu klātbūtni LinkedIn bez ikdienas manuāla darba. Saturs tiek veidots atbilstoši izvēlētajam pozicionējumam un auditorijai. Tas palīdz uzturēt profesionālu tēlu un ilgtermiņā stiprina autoritāti.",
    descriptionEn:
      "LinkedIn Content Automation System ensures a regular and consistent presence on LinkedIn without daily manual work. Content is created according to the chosen positioning and audience. This helps maintain a professional image and strengthens authority in the long term.",
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
      "Client Onboarding Automation sakārto klienta uzņemšanas procesu pēc darījuma noslēgšanas. Dokumenti, informācija un nākamie soļi tiek nodoti strukturēti un saprotami. Tas samazina haosu un uzlabo pirmo iespaidu par sadarbību.",
    descriptionEn:
      "Client Onboarding Automation streamlines the client onboarding process after a deal is closed. Documents, information, and next steps are communicated in a structured and understandable manner. This reduces chaos and improves the first impression of the collaboration.",
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
      "Client Reactivation Campaigns atjauno saziņu ar esošajiem klientiem un kontaktiem, kas laika gaitā palikuši neaktīvi. Automatizētas ziņas palīdz atgriezt uzmanību īstajā brīdī. Tas palielina atkārtotu darījumu iespējas bez aktīvas pārdošanas.",
    descriptionEn:
      "Client Reactivation Campaigns re-engage with existing customers and contacts who have become inactive over time. Automated messages help bring attention back at the right time. This increases the chances of repeat business without active sales.",
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
      "Social Media Product Marketing System automatizē produktu publicēšanu sociālajos tīklos, balstoties uz e-veikala vai produktu kataloga datiem. Saturs tiek publicēts konsekventi un bez manuālas apstrādes. Tas ļauj uzturēt aktīvu klātbūtni pat ar lielu produktu apjomu.",
    descriptionEn:
      "Social Media Product Marketing System automates product publishing on social networks based on data from an e-store or product catalog. Content is published consistently and without manual processing. This allows you to maintain an active presence even with a large volume of products.",
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
      <section className="relative bg-gradient-hero bg-atmosphere overflow-hidden min-h-[70vh] md:min-h-[85vh] flex items-center mt-[30px]">
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
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 md:mb-8 mt-[20px] md:mt-[80px]"
            >
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t("AI pakalpojumi", "AI Services")}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 md:mb-6"
            >
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">NEOLab</span>{" "}
              {t("AI automatizācijas pakalpojumi", "AI automation services")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 px-2 md:px-0"
            >
              {t(
                "Pārbaudīti AI risinājumi, kas automatizē ikdienas procesus un palīdz uzņēmumam strādāt efektīvāk – ar skaidrām cenām un ātru ieviešanu.",
                "Proven AI solutions that automate daily processes and help your business work more efficiently – with clear pricing and fast implementation.",
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

      {/* ========== INTRO BLOCK ========== */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="relative bg-card/60 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-border/50 p-6 md:p-12 lg:p-16 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-amber-500/5 to-transparent rounded-full blur-3xl" />
                <img
                  src={neolabIcon}
                  alt=""
                  className="absolute top-8 right-8 md:top-12 md:right-12 w-36 h-36 md:w-56 md:h-56 opacity-[0.06]"
                />

                <div className="relative z-10 max-w-3xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-orange-500 rounded-full" />
                    <span className="text-sm font-medium text-primary tracking-wide uppercase">
                      {t("Mūsu pieeja", "Our approach")}
                    </span>
                  </div>

                  <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-balance">
                    <span
                      style={{
                        background: "linear-gradient(to right, hsl(var(--primary)), #f97316)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {t("AI Automatizācija", "AI Automation")}
                    </span>{" "}
                    <span className="text-foreground">
                      {t("pati par sevi neko neatrisina", "alone doesn't solve anything")}
                    </span>
                  </h2>

                  <div className="space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-lg leading-relaxed">
                    <p>
                      {t(
                        "Lielākā kļūda ar AI automatizācijām nav tehnoloģija. Tā ir nepareiza izvēle. Uzņēmumi ievieš rīkus, cerot uz rezultātu, bet beigās iegūst vēl vienu sistēmu, kas jāuztur un jāapkalpo.",
                        "The biggest mistake with AI automation isn't the technology. It's the wrong choice. Companies implement tools hoping for results, but end up with yet another system to maintain and service.",
                      )}
                    </p>
                    <p>
                      {t(
                        "AI sāk strādāt tikai tad, kad tas ir pieslēgts reāliem procesiem, skaidram mērķim un pareizajai vietai uzņēmumā. Pretējā gadījumā automatizācija kļūst par dārgu eksperimentu, nevis risinājumu.",
                        "AI only starts working when it's connected to real processes, a clear goal, and the right place in your business. Otherwise, automation becomes an expensive experiment, not a solution.",
                      )}
                    </p>
                    <p className="text-foreground font-medium">
                      {t(
                        "Šī iemesla dēļ mēs nekad nesākam ar rīku. Mēs sākam ar sapratni.",
                        "That's why we never start with a tool. We start with understanding.",
                      )}
                    </p>
                  </div>

                  {/* Visual accent dots */}
                  <div className="flex items-center gap-2 mt-8">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-orange-500 rounded-full" />
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== HOW TO CHOOSE ========== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10 md:mb-14">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
                  {t("Kā izvēlēties pareizo", "How to choose the right")}{" "}
                  <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                    {t("AI automatizāciju?", "AI automation?")}
                  </span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                  {t(
                    "Ne visas automatizācijas dod vienādu atdevi. Dažkārt viena precīzi ieviesta sistēma dod vairāk nekā pieci sadrumstaloti risinājumi.",
                    "Not all automations provide the same return. Sometimes one precisely implemented system delivers more than five fragmented solutions.",
                  )}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-14">
              {[
                {
                  num: "01",
                  icon: Clock,
                  titleLv: "Kur tiek zaudēts laiks?",
                  titleEn: "Where is time lost?",
                  descLv: "Identificējiet procesus, kuros komanda pavada visvairāk laika atkārtojamiem, manuāliem uzdevumiem.",
                  descEn: "Identify processes where your team spends the most time on repetitive, manual tasks.",
                },
                {
                  num: "02",
                  icon: Zap,
                  titleLv: "Kur rodas kavēšanās?",
                  titleEn: "Where do delays occur?",
                  descLv: "Atrodiet vietas, kur rodas kļūdas, aizkavēšanās vai zūd informācija starp posmiem.",
                  descEn: "Find where errors, delays, or information loss happen between stages.",
                },
                {
                  num: "03",
                  icon: Brain,
                  titleLv: "Kur cilvēks nav kritisks?",
                  titleEn: "Where is human input not critical?",
                  descLv: "Noskaidrojiet, kur darbs ir atkārtojams un automatizējams, bet cilvēka klātbūtne nav nepieciešama.",
                  descEn: "Determine where work is repetitive and automatable, but human presence isn't required.",
                },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={0.05 + i * 0.08}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative group h-full"
                  >
                    <div className="h-full bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-5 md:p-8 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-5">
                        <span className="text-3xl md:text-5xl font-bold text-primary/10 leading-none">{item.num}</span>
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">{t(item.titleLv, item.titleEn)}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{t(item.descLv, item.descEn)}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.2}>
              <div className="relative bg-muted/40 backdrop-blur-sm rounded-2xl border border-border/40 p-6 md:p-8 lg:p-10">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-orange-500 to-amber-400 rounded-full" />
                <div className="pl-4 md:pl-6">
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-3">
                    {t(
                      "Ja uz šiem jautājumiem nav skaidras atbildes, automatizācija kļūst par minēšanu.",
                      "If there are no clear answers to these questions, automation becomes guesswork.",
                    )}
                  </p>
                  <p className="text-foreground font-semibold text-base md:text-lg">
                    {t(
                      "Tāpēc pareizā izvēle nav par to, ko var automatizēt, bet gan par to, ko ir jēga automatizēt tieši šobrīd.",
                      "That's why the right choice isn't about what can be automated, but what makes sense to automate right now.",
                    )}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="relative py-14 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <div className="absolute inset-0 grid-overlay-subtle" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-6 md:mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 text-sm">
                <Workflow className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{t("Pakalpojumi", "Services")}</span>
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
                  "Each solution is ready for implementation and adaptable to your business. Choose what's most relevant for you right now.",
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

                      <div className="p-5 md:p-8 lg:p-10">
                        <div
                          className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 lg:gap-10`}
                        >
                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                              <div
                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.accentFrom} ${service.accentTo} flex items-center justify-center shadow-md`}
                              >
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

                          {/* Visual sidebar - horizontal on mobile */}
                          <div className="lg:w-64 flex-shrink-0 w-full">
                            <div className="bg-muted/50 rounded-xl p-3 md:p-4 border border-border/50 grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-3">
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
        </div>
      </section>

      {/* Personalized Solutions Block */}
      <section className="py-14 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-amber-500/[0.06]" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/8 to-transparent rounded-full blur-3xl" />
              <div className="absolute inset-0 rounded-3xl border border-primary/15" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-orange-500 to-amber-500" />

              <div className="relative z-10 p-6 md:p-12 lg:p-16">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-primary tracking-wide uppercase">
                    {t("Personalizēti AI risinājumi", "Personalized AI solutions")}
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance leading-tight">
                  <span
                    style={{
                      background: "linear-gradient(to right, hsl(var(--primary)), #f97316)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {t("Risinājumi veidoti tieši", "Solutions built specifically")}
                  </span>{" "}
                  <span className="text-foreground">{t("Jūsu uzņēmumam", "for Your business")}</span>
                </h2>

                <p className="text-muted-foreground text-sm md:text-lg leading-relaxed max-w-3xl mb-8 md:mb-10">
                  {t(
                    "Katrs uzņēmums strādā citādi. Procesi, mērķi un sistēmas atšķiras, un AI automatizācijām tas ir kritiski svarīgi. Tāpēc mēs neveidojam universālus risinājumus - mēs būvējam tieši jums.",
                    "Every business operates differently. Processes, goals, and systems vary, and for AI automation, this is critically important. That's why we don't build universal solutions - we build specifically for you.",
                  )}
                </p>

                {/* Process cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-10">
                  {[
                    {
                      icon: BarChart3,
                      titleLv: "Mērķu definēšana",
                      titleEn: "Goal definition",
                      descLv: "Sākam ar jūsu biznesa mērķiem un esošo procesu analīzi, nevis gatavu risinājumu.",
                      descEn:
                        "We start with your business goals and existing process analysis, not a ready-made solution.",
                      step: "01",
                    },
                    {
                      icon: Workflow,
                      titleLv: "Integrācija sistēmās",
                      titleEn: "System integration",
                      descLv: "Risinājums iekļaujas rīkos, kurus jūs jau izmantojat — CRM, e-pasts, čats, datu bāzes.",
                      descEn: "The solution fits into tools you already use — CRM, email, chat, databases.",
                      step: "02",
                    },
                    {
                      icon: RefreshCcw,
                      titleLv: "Ilgtermiņa stabilitāte",
                      titleEn: "Long-term stability",
                      descLv: "Skaidra loģika, uzturēšana un atbalsts — nevis vienreizēja uzstādīšana un cerība.",
                      descEn: "Clear logic, maintenance, and support — not a one-time setup and hope.",
                      step: "03",
                    },
                  ].map((card, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.1 }}
                      className="group relative bg-card/70 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-orange-500/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <card.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-3xl font-black text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                          {card.step}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{t(card.titleLv, card.titleEn)}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t(card.descLv, card.descEn)}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Pillars row */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10">
                  {[
                    { lv: "Būvēts jums", en: "Built for you.", icon: CheckCircle2 },
                    { lv: "Integrēts ar esošo", en: "Integrated with existing.", icon: Layers },
                    { lv: "Paredzēts stabilai lietošanai", en: "Built for stable use.", icon: RefreshCcw },
                  ].map((pillar, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className="flex items-center gap-2 bg-primary/[0.07] rounded-full px-4 py-2 border border-primary/10"
                    >
                      <pillar.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-semibold text-foreground">{t(pillar.lv, pillar.en)}</span>
                    </motion.div>
                  ))}
                </div>

                <Button size="lg" variant="hero" asChild className="w-auto max-w-full">
                  <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                    {t("Saņemt pielāgotu risinājumu", "Get a personalized solution")}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== CTA BLOCK ========== */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Strong orange gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/8 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

        {/* Radial glow at center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/8 rounded-full blur-3xl" />

        {/* Subtle animated gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 30% 50%, hsla(21, 90%, 48%, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 50%, hsla(21, 90%, 48%, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 50%, hsla(21, 90%, 48%, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t("Tas, kas attīstās, tas uzvar.", "Those who evolve, win.")}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                {t(
                  "Optimizē un paātrini sava uzņēmuma procesus ar AI automatizācijām. Sāc ar bezmaksas konsultāciju, kuras laikā gūsi skaidrību un sapratni par to, kas ir svarīgākais tavam uzņēmumam.",
                  "Optimize and accelerate your business processes with AI automation. Start with a free consultation to gain clarity on what matters most for your business.",
                )}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                <Button
                  variant="hero"
                  size="xl"
                  className="shadow-orange-strong hover:shadow-orange-hover text-lg px-12 py-8"
                >
                  {t("Pieteikties konsultācijai", "Book a consultation")}
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
