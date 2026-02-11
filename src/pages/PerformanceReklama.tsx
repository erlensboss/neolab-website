import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  BarChart3,
  ArrowRight,
  AlertTriangle,
  Eye,
  DollarSign,
  PieChart,
  Activity,
  Gauge,
  MousePointer,
  ShoppingCart,
  Compass,
  Search,
  Video,
  Users,
  Zap,
  Settings,
  Play,
  Building2,
  Globe,
  Layers,
  Wallet,
  ClipboardCheck,
  Code,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEOHead } from "@/components/shared/SEOHead";
// Data moved inside component to use t() function
export default function PerformanceReklama() {
  const { t, getLocalizedPath, language } = useLanguage();
  const controlProblems = [
    t("Nezināt, kura kampaņa tiešām nes peļņu", "Not knowing which campaign actually brings profit"),
    t("Aģentūras atskaites, ko neviens nesaprot", "Agency reports that no one understands"),
    t("Budžets, kas iztukšojas bez skaidra ROI", "Budget that drains without clear ROI"),
    t("A/B testi bez reāla mācīšanās", "A/B tests without real learning"),
  ];
  const platforms = [
    {
      name: "Meta Ads",
      icon: Eye,
    },
    {
      name: "Google Ads",
      icon: Target,
    },
    {
      name: "LinkedIn Ads",
      icon: MousePointer,
    },
    {
      name: "TikTok Ads",
      icon: Activity,
    },
  ];
  const signals = [
    {
      label: "CTR",
      value: "2.4%",
      trend: "up",
      color: "text-green-600",
    },
    {
      label: "CPA",
      value: "€12.50",
      trend: "down",
      color: "text-green-600",
    },
    {
      label: "ROAS",
      value: "4.2x",
      trend: "up",
      color: "text-green-600",
    },
    {
      label: "Conv. Rate",
      value: "3.8%",
      trend: "up",
      color: "text-green-600",
    },
  ];
  const approach = [
    {
      icon: PieChart,
      title: t("Atribūcijas modelēšana", "Attribution modeling"),
      description: t(
        "Ziniet precīzi, kura saskarsme noveda pie pirkuma",
        "Know precisely which touchpoint led to purchase",
      ),
    },
    {
      icon: Gauge,
      title: t("Real-time monitorings", "Real-time monitoring"),
      description: t("Signāli, kas brīdina pirms budžets ir iztērēts", "Signals that warn before budget is spent"),
    },
    {
      icon: DollarSign,
      title: t("Budžeta optimizācija", "Budget optimization"),
      description: t(
        "Dinamiska pārdale uz labāk strādājošiem kanāliem",
        "Dynamic reallocation to better-performing channels",
      ),
    },
    {
      icon: ShoppingCart,
      title: t("Pilna piltuve", "Full funnel"),
      description: t("No apzināšanās līdz pirkumam — viss redzams", "From awareness to purchase — everything visible"),
    },
  ];
  return (
    <>
      <SEOHead
        titleLv="Digitālā reklāma Google, Meta un TikTok | NEOLab"
        titleEn="Digital Advertising on Google, Meta & TikTok | NEOLab"
        descriptionLv="Digitālā reklāma uzņēmumiem – Google Ads, Meta un TikTok kampaņas ar skaidru mērķi un izmērāmu atdevi."
        descriptionEn="Digital advertising for businesses – Google Ads, Meta, and TikTok campaigns with clear goals and measurable ROI."
      />
    <div className="overflow-hidden">
      {/* ========== SECTION 1: Hero - Maksas reklāmu pārvalde ========== */}
      <section className="relative overflow-hidden">
        {/* Enhanced background with layered gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-amber-50/60 to-white" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Floating gradient orbs */}
        <motion.div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/15 to-amber-300/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-amber-200/20 to-orange-300/10 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="container-neo py-12 md:py-28 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-xs md:text-sm mb-4 md:mb-6 px-3 md:px-4">
                  <BarChart3 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Performance Marketing
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.15] lg:text-7xl">
                  {t("Maksas reklāmu", "Paid advertising")}{" "}
                  <span className="relative inline-block">
                    <span className="text-gradient-orange">{t("pārvalde", "management")}</span>
                    <motion.span
                      className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-primary via-amber-400 to-primary rounded-full"
                      initial={{
                        scaleX: 0,
                      }}
                      animate={{
                        scaleX: 1,
                      }}
                      transition={{
                        delay: 0.8,
                        duration: 0.6,
                      }}
                    />
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-10 max-w-xl leading-relaxed">
                  {t(
                    "Maksas reklāmas risinājumi, kas fokusējas uz pieprasījuma piesaisti, konversijām un izmērāmu rezultātu vairākos kanālos.",
                    "Paid advertising solutions that focus on demand generation, conversions, and measurable results across multiple channels.",
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                    <Button variant="hero" size="lg" className="group text-sm md:text-base">
                      {t("Sākt sadarbību", "Start collaboration")}
                      <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>

              {/* Trust indicators */}
              <ScrollReveal delay={0.4}>
                <div className="grid grid-cols-3 gap-3 md:flex md:flex-wrap md:items-center md:gap-6 mt-6 md:mt-10 pt-6 md:pt-8 border-t border-border/50">
                  {[
                    {
                      value: "4.2x",
                      label: t("Vidējais ROAS", "Average ROAS"),
                    },
                    {
                      value: "65%+",
                      label: t("Reklāmas efektivitātes pieaugums", "Ad efficiency increase"),
                    },
                    {
                      value: "92%",
                      label: t("Klientu saglabāšana", "Client retention"),
                    },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-2 text-center md:text-left"
                    >
                      <span className="text-xl md:text-2xl font-bold text-primary">{stat.value}</span>
                      <span className="text-xs md:text-sm text-muted-foreground leading-tight">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Dashboard preview - UNCHANGED */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="glass-warm rounded-xl md:rounded-2xl p-5 md:p-10 shadow-card">
                <div className="flex items-center justify-between mb-4 md:mb-8">
                  <span className="font-semibold text-sm md:text-lg">Performance Dashboard</span>
                  <span className="text-xs md:text-sm text-muted-foreground">Live</span>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-8">
                  {signals.map((signal, index) => (
                    <motion.div
                      key={signal.label}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.5 + index * 0.1,
                      }}
                      className="bg-card rounded-lg md:rounded-xl p-3 md:p-5 border border-border"
                    >
                      <div className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-2">{signal.label}</div>
                      <div className={`text-lg md:text-2xl font-bold ${signal.color}`}>
                        {signal.value}
                        <TrendingUp className="w-3.5 h-3.5 md:w-5 md:h-5 inline ml-1 md:ml-2" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Mini chart placeholder */}
                <div className="h-20 md:h-32 bg-muted rounded-lg md:rounded-xl flex items-end justify-around p-2 md:p-3">
                  {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        height: 0,
                      }}
                      animate={{
                        height: `${h}%`,
                      }}
                      transition={{
                        delay: 0.8 + i * 0.05,
                        duration: 0.5,
                      }}
                      className="w-5 md:w-8 bg-gradient-to-t from-primary to-primary/60 rounded-t"
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: Benefits of Paid Advertising ========== */}
      <section className="relative overflow-hidden py-12 md:py-16">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-muted/30 to-white" />

        <div className="container-neo relative z-10">
          {/* Section header */}
          <ScrollReveal className="max-w-3xl mb-8 md:mb-20">
            <span className="chip mb-3 md:mb-4 inline-block text-xs md:text-sm">{t("Priekšrocības", "Benefits")}</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              {t("Kādas ir maksas reklāmas ", "What are the benefits of paid ")}
              <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">{t("priekšrocības", "advertising")}</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {t(
                "Maksas reklāma ļauj uzņēmumam piesaistīt klientus brīdī, kad viņiem jau ir interese vai vajadzība. Tā balstās datos, nevis minējumos, un ļauj skaidri redzēt, kas strādā un kas nē.",
                "Paid advertising allows businesses to attract customers when they already have interest or need. It's based on data, not guesses, and allows you to clearly see what works and what doesn't.",
              )}
            </p>
          </ScrollReveal>

          {/* Benefits grid - asymmetric professional layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Benefit 1 - Featured large card */}
            <ScrollReveal delay={0.05} className="lg:col-span-2">
              <motion.div
                whileHover={{
                  y: -3,
                }}
                className="relative h-full p-5 md:p-10 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/8 via-primary/4 to-transparent border border-primary/15 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-20 md:w-32 h-20 md:h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-105 transition-transform">
                    <Target className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">
                    {t("Pieprasījuma piesaiste ar augstu pirkuma nodomu", "Demand capture with high purchase intent")}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {t(
                      "Sasniedziet klientus tieši tajā brīdī, kad viņi meklē jūsu produktu vai pakalpojumu.",
                      "Reach customers exactly when they're searching for your product or service.",
                    )}
                  </p>
                </div>
                {/* Accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
              </motion.div>
            </ScrollReveal>

            {/* Benefit 2 */}
            <ScrollReveal delay={0.1}>
              <motion.div
                whileHover={{
                  y: -3,
                }}
                className="relative h-full p-5 md:p-8 rounded-xl md:rounded-2xl bg-card border border-border shadow-sm overflow-hidden group"
              >
                <div className="absolute -top-6 -right-6 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-bl from-amber-100 to-transparent rounded-full opacity-60" />
                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center mb-3 md:mb-5 group-hover:scale-105 transition-transform border border-amber-200/50">
                    <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-1.5 md:mb-2">
                    {t("Pilnīga budžeta un izmaksu kontrole", "Complete budget and cost control")}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {t(
                      "Jūs izlemjat, cik tērēt, un redzat katru centu.",
                      "You decide how much to spend and see every cent.",
                    )}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Benefit 3 */}
            <ScrollReveal delay={0.15}>
              <motion.div
                whileHover={{
                  y: -3,
                }}
                className="relative h-full p-5 md:p-8 rounded-xl md:rounded-2xl bg-card border border-border shadow-sm overflow-hidden group"
              >
                <div className="absolute -top-6 -right-6 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-bl from-green-100 to-transparent rounded-full opacity-60" />
                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mb-3 md:mb-5 group-hover:scale-105 transition-transform border border-green-200/50">
                    <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-1.5 md:mb-2">
                    {t("Izmērāmi rezultāti un skaidri KPI", "Measurable results and clear KPIs")}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {t(
                      "Katrs klikšķis, konversija un pārdošana ir izsekojama.",
                      "Every click, conversion, and sale is trackable.",
                    )}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Visual Metrics Panel - fills empty space */}
            <ScrollReveal delay={0.18} className="lg:row-span-2">
              <div className="relative h-full p-6 md:p-7 rounded-2xl bg-gradient-to-b from-foreground/[0.03] to-muted/50 border border-border overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.015]"
                  style={{
                    backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {t("Rezultātu pārskats", "Results overview")}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </div>

                  {/* Mini funnel visualization */}
                  <div className="space-y-3 mb-6">
                    {[
                      {
                        label: "Impressions",
                        value: "124K",
                        width: "100%",
                        color: "from-primary/20 to-primary/10",
                      },
                      {
                        label: "Clicks",
                        value: "8.2K",
                        width: "65%",
                        color: "from-primary/30 to-primary/15",
                      },
                      {
                        label: "Leads",
                        value: "1.4K",
                        width: "40%",
                        color: "from-primary/50 to-primary/25",
                      },
                      {
                        label: "Sales",
                        value: "312",
                        width: "25%",
                        color: "from-primary/70 to-primary/40",
                      },
                    ].map((item, idx) => (
                      <motion.div
                        key={item.label}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.5 + idx * 0.1,
                        }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-16 text-xs text-muted-foreground">{item.label}</div>
                        <div className="flex-1 h-6 bg-muted/50 rounded overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${item.color} rounded flex items-center justify-end pr-2`}
                            initial={{
                              width: 0,
                            }}
                            animate={{
                              width: item.width,
                            }}
                            transition={{
                              delay: 0.7 + idx * 0.15,
                              duration: 0.5,
                            }}
                          >
                            <span className="text-xs font-semibold text-foreground/80">{item.value}</span>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Key metric */}
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">
                          {t("Konversijas likme", "Conversion rate")}
                        </div>
                        <div className="text-2xl font-bold text-primary">3.8%</div>
                      </div>
                      <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                        <TrendingUp className="w-4 h-4" />
                        +24%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Benefit 4 */}
            <ScrollReveal delay={0.2}>
              <motion.div
                whileHover={{
                  y: -3,
                }}
                className="relative h-full p-5 md:p-8 rounded-xl md:rounded-2xl bg-card border border-border shadow-sm overflow-hidden group"
              >
                <div className="absolute -top-6 -right-6 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-bl from-blue-100 to-transparent rounded-full opacity-60" />
                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-3 md:mb-5 group-hover:scale-105 transition-transform border border-blue-200/50">
                    <Activity className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-1.5 md:mb-2">
                    {t("Iespēja ātri testēt piedāvājumus", "Ability to quickly test offers")}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {t(
                      "A/B testēšana, lai atrastu labāko ziņojumu un piedāvājumu.",
                      "A/B testing to find the best message and offer.",
                    )}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Benefit 5 - Featured bottom card */}
            <ScrollReveal delay={0.25} className="md:col-span-2 lg:col-span-2">
              <motion.div
                whileHover={{
                  y: -3,
                }}
                className="relative h-full p-5 md:p-10 rounded-xl md:rounded-2xl bg-gradient-to-br from-muted/80 to-muted/40 border border-border overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-24 md:w-40 h-24 md:h-40 bg-gradient-to-br from-primary/5 to-transparent rounded-br-full" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-primary/10">
                    <TrendingUp className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-semibold mb-1.5 md:mb-2">
                      {t("Elastība starp dažādiem reklāmas kanāliem", "Flexibility across different ad channels")}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {t(
                        "Pārslēdzieties starp Meta, Google, LinkedIn un citiem kanāliem atkarībā no rezultātiem.",
                        "Switch between Meta, Google, LinkedIn, and other channels depending on results.",
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Bottom statement */}
          <ScrollReveal delay={0.3}>
            <div className="mt-12 md:mt-16 pt-10 border-t border-border/60"></div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 3: Advertising as a System ========== */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50/50 to-white" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(21 90% 48%) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container-neo relative z-10">
          <ScrollReveal className="max-w-3xl mb-8 md:mb-14">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              {t("Reklāma kā ", "Advertising as a ")}
              <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">{t("sistēma", "system")}</span>
              {t(", nevis atsevišķs rīks", ", not a standalone tool")}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {t(
                "NEOLab nestrādā ar reklāmu kā izolētu aktivitāti. Reklāma tiek integrēta kopējā digitālajā struktūrā ar korektu datu uzskaiti, piedāvājuma validāciju un ilgtermiņa optimizāciju.",
                "NEOLab doesn't treat advertising as an isolated activity. Advertising is integrated into the overall digital structure with proper data tracking, offer validation, and long-term optimization.",
              )}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {[
              {
                lv: "Reklāma balstās uz datiem, nevis pieņēmumiem",
                en: "Advertising is based on data, not assumptions",
                icon: BarChart3,
              },
              {
                lv: "Pirms kampaņas tiek izvērtēts piedāvājums",
                en: "The offer is evaluated before the campaign",
                icon: Search,
              },
              {
                lv: "Bez konversiju uzstādīšanas reklāma netiek palaista",
                en: "No ads run without conversion tracking setup",
                icon: Target,
              },
              {
                lv: "Lēmumi balstīti KPI, nevis sajūtās",
                en: "Decisions are based on KPIs, not feelings",
                icon: Gauge,
              },
              {
                lv: "Fokusējamies uz rentabilitāti, nevis klikšķiem",
                en: "We focus on profitability, not clicks",
                icon: TrendingUp,
              },
            ].map((point, idx) => {
              const Icon = point.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 0.06}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative h-full p-5 md:p-6 rounded-xl bg-gradient-to-br from-primary/10 via-orange-100/60 to-amber-50/40 border border-primary/15 shadow-md hover:shadow-xl hover:shadow-primary/15 overflow-hidden group cursor-default"
                  >
                    {/* Decorative glow */}
                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-bl from-primary/15 to-orange-300/10 rounded-full group-hover:scale-[2] transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-amber-200/20 to-transparent rounded-full" />
                    <div className="relative z-10">
                      <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-primary/20">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <p className="text-sm md:text-base font-semibold text-foreground/90 leading-snug">
                        {t(point.lv, point.en)}
                      </p>
                    </div>
                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-orange-400 to-amber-300 opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: NEOLab Offerings - Restructured ========== */}
      <section className="relative overflow-hidden py-12 md:py-16">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-muted/40 to-white" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container-neo relative z-10">
          {/* Section header */}
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-8 md:mb-20">
            <span className="chip mb-3 md:mb-4 inline-block text-xs md:text-sm">{t("Piedāvājumi", "Offerings")}</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              {t("NEOLab maksas reklāmu", "NEOLab paid advertising")}{" "}
              <span className="text-gradient-orange">{t("piedāvājumi", "offerings")}</span>
            </h2>
          </ScrollReveal>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {/* 1. Reklāmas stratēģija */}
            <ScrollReveal delay={0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full p-5 md:p-7 rounded-xl md:rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl overflow-hidden group"
              >
                {/* Decorative visuals */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full group-hover:scale-[2] transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary/5 to-transparent rounded-full" />
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 rounded-full border border-primary/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-primary/20">
                    <Compass className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
                    {t("Reklāmas stratēģija", "Advertising Strategy")}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(
                      "Digitālās reklāmas stratēģija tiek izstrādāta pirms budžeta tērēšanas, lai nodrošinātu skaidru virzienu, pareizu kanālu izvēli un izmērāmu atdevi.",
                      "Digital advertising strategy is developed before spending budget, ensuring clear direction, proper channel selection, and measurable returns.",
                    )}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {[
                      t("Kanālu izvēle", "Channel selection"),
                      t("Budžeta modelēšana", "Budget modeling"),
                      t("KPI definēšana", "KPI definition"),
                      t("Mērķauditorija", "Target audience"),
                      t("Piltuves plānošana", "Funnel planning"),
                      t("Konkurences analīze", "Competitive analysis"),
                    ].map((tag) => (
                      <span key={tag} className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-primary/8 text-primary/80 border border-primary/10">{tag}</span>
                    ))}
                  </div>
                  <Link to={getLocalizedPath("/bezmaksas-konsultacija")} className="inline-flex items-center gap-2 text-primary font-medium text-xs md:text-sm group-hover:gap-3 transition-all">
                    {t("Pieteikties konsultācijai", "Book a consultation")}
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-orange-400 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
              </motion.div>
            </ScrollReveal>

            {/* 2. Google Ads */}
            <ScrollReveal delay={0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full p-5 md:p-7 rounded-xl md:rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-green-100/80 to-transparent rounded-full group-hover:scale-[2] transition-transform duration-700" />
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-tl from-green-100/40 to-transparent rounded-full" />
                {/* Mini bar chart visual */}
                <div className="absolute top-5 right-5 flex items-end gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                  {[40, 65, 50, 80, 60].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 bg-green-500 rounded-t"
                      initial={{ height: 0 }}
                      whileInView={{ height: h * 0.4 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    />
                  ))}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-green-500/20">
                    <Search className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
                    {t("Google Ads pārvaldība", "Google Ads Management")}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(
                      "Google Ads pārvaldība fokusējas uz augsta pirkuma nodoma pieprasījuma piesaisti un strukturētu kampaņu optimizāciju, kas balstīta datos un skaidros mērķos.",
                      "Google Ads management focuses on capturing high purchase intent demand and structured campaign optimization based on data and clear objectives.",
                    )}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {[
                      "Search",
                      "Performance Max",
                      "Shopping",
                      "Display & remarketing",
                      "YouTube",
                      t("Bid stratēģijas", "Bid strategies"),
                      t("Atslēgvārdi", "Keywords"),
                    ].map((tag) => (
                      <span key={tag} className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200/50">{tag}</span>
                    ))}
                  </div>
                  <Link to={getLocalizedPath("/bezmaksas-konsultacija")} className="inline-flex items-center gap-2 text-green-600 font-medium text-xs md:text-sm group-hover:gap-3 transition-all">
                    {t("Pieteikties konsultācijai", "Book a consultation")}
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-green-300 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
              </motion.div>
            </ScrollReveal>

            {/* 3. Meta Ads */}
            <ScrollReveal delay={0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full p-5 md:p-7 rounded-xl md:rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-purple-100/80 to-transparent rounded-full group-hover:scale-[2] transition-transform duration-700" />
                {/* Layered circles visual */}
                <div className="absolute top-6 right-6 opacity-15 group-hover:opacity-30 transition-opacity">
                  <div className="relative w-14 h-14">
                    <div className="absolute inset-0 rounded-full border-2 border-purple-400" />
                    <div className="absolute inset-2 rounded-full border border-pink-300" />
                    <div className="absolute inset-4 rounded-full bg-purple-200/50" />
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-purple-500/20">
                    <Users className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
                    Meta Ads (Facebook & Instagram)
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(
                      "Meta reklāmu pārvaldība ļauj precīzi segmentēt auditoriju, testēt kreatīvos risinājumus un veidot daudzslāņu kampaņu struktūru.",
                      "Meta ads management enables precise audience segmentation, creative testing, and multi-layered campaign structures.",
                    )}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {[
                      t("Cold auditorijas", "Cold audiences"),
                      "Retargeting",
                      t("Kreatīvo testēšana", "Creative testing"),
                      "Video & static",
                      "Lead forms",
                      "Conversion API",
                    ].map((tag) => (
                      <span key={tag} className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200/50">{tag}</span>
                    ))}
                  </div>
                  <Link to={getLocalizedPath("/bezmaksas-konsultacija")} className="inline-flex items-center gap-2 text-purple-600 font-medium text-xs md:text-sm group-hover:gap-3 transition-all">
                    {t("Pieteikties konsultācijai", "Book a consultation")}
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-300 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
              </motion.div>
            </ScrollReveal>

            {/* 4. TikTok Ads */}
            <ScrollReveal delay={0.2}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full p-5 md:p-7 rounded-xl md:rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-cyan-100/60 to-transparent rounded-full group-hover:scale-[2] transition-transform duration-700" />
                {/* Play button visual */}
                <motion.div
                  className="absolute top-6 right-6 w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center opacity-15 group-hover:opacity-30 transition-opacity"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-0 h-0 border-l-[8px] border-l-foreground/40 border-y-[5px] border-y-transparent ml-0.5" />
                </motion.div>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-foreground to-foreground/80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-foreground/20">
                    <Play className="w-6 h-6 md:w-7 md:h-7 text-background" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
                    TikTok Ads
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(
                      "TikTok reklāmas stratēģija balstās uz video-first pieeju un ātru uzmanības piesaisti, ļaujot testēt jaunus tirgus segmentus.",
                      "TikTok advertising strategy is based on a video-first approach and rapid attention capture, enabling testing of new market segments.",
                    )}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {[
                      "Video-first",
                      "Spark Ads",
                      t("Jaunu auditoriju testi", "New audience tests"),
                      t("Kreatīvo optimizācija", "Creative optimization"),
                      "E-commerce",
                    ].map((tag) => (
                      <span key={tag} className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/70 border border-foreground/10">{tag}</span>
                    ))}
                  </div>
                  <Link to={getLocalizedPath("/bezmaksas-konsultacija")} className="inline-flex items-center gap-2 text-foreground font-medium text-xs md:text-sm group-hover:gap-3 transition-all">
                    {t("Pieteikties konsultācijai", "Book a consultation")}
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-foreground/40 via-foreground/15 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
              </motion.div>
            </ScrollReveal>

            {/* 5. Konversiju uzstādīšana */}
            <ScrollReveal delay={0.25}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full p-5 md:p-7 rounded-xl md:rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-amber-100/80 to-transparent rounded-full group-hover:scale-[2] transition-transform duration-700" />
                {/* Code brackets visual */}
                <div className="absolute top-5 right-5 opacity-15 group-hover:opacity-30 transition-opacity font-mono text-amber-500 text-lg font-bold">
                  {"{ }"}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-amber-500/20">
                    <Code className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
                    {t("Konversiju uzstādīšana un datu integrācija", "Conversion Setup & Data Integration")}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(
                      "Precīza datu uzskaite ir reklāmas sistēmas pamats, jo bez korekti iestatītiem mērījumiem nav iespējams objektīvi analizēt rezultātus.",
                      "Precise data tracking is the foundation of the advertising system, as without correctly set measurements, objective result analysis is impossible.",
                    )}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {[
                      "GA4",
                      "Google Tag Manager",
                      "Meta Pixel",
                      "Conversion API",
                      "Server-side tracking",
                      "CRM",
                      "Enhanced conversions",
                    ].map((tag) => (
                      <span key={tag} className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/50">{tag}</span>
                    ))}
                  </div>
                  <Link to={getLocalizedPath("/bezmaksas-konsultacija")} className="inline-flex items-center gap-2 text-amber-600 font-medium text-xs md:text-sm group-hover:gap-3 transition-all">
                    {t("Pieteikties konsultācijai", "Book a consultation")}
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-300 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
              </motion.div>
            </ScrollReveal>

            {/* 6. Optimizācija un skalēšana */}
            <ScrollReveal delay={0.3}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full p-5 md:p-7 rounded-xl md:rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-blue-100/80 to-transparent rounded-full group-hover:scale-[2] transition-transform duration-700" />
                {/* Upward trend visual */}
                <svg className="absolute top-4 right-4 w-16 h-12 opacity-15 group-hover:opacity-30 transition-opacity" viewBox="0 0 60 40">
                  <motion.path
                    d="M5 35 L15 28 L25 30 L35 18 L45 12 L55 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-blue-500"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                </svg>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/20">
                    <RefreshCw className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
                    {t("Optimizācija un skalēšana", "Optimization & Scaling")}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(
                      "Reklāmu pārvaldība nebeidzas ar kampaņu palaišanu – regulāra optimizācija un skalēšana ļauj uzlabot efektivitāti un palielināt rentabilitāti ilgtermiņā.",
                      "Ad management doesn't end with campaign launch – regular optimization and scaling improves efficiency and increases long-term profitability.",
                    )}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {[
                      "A/B testing",
                      t("Kreatīvo cikli", "Creative cycles"),
                      t("Budžeta pārstrukturēšana", "Budget restructuring"),
                      t("CPA samazināšana", "CPA reduction"),
                      t("ROAS uzlabošana", "ROAS improvement"),
                      t("Auditoriju paplašināšana", "Audience expansion"),
                    ].map((tag) => (
                      <span key={tag} className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/50">{tag}</span>
                    ))}
                  </div>
                  <Link to={getLocalizedPath("/bezmaksas-konsultacija")} className="inline-flex items-center gap-2 text-blue-600 font-medium text-xs md:text-sm group-hover:gap-3 transition-all">
                    {t("Pieteikties konsultācijai", "Book a consultation")}
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: Roadmap / Approach ========== */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/70 via-amber-50/40 to-white" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container-neo relative z-10">
          {/* Section header */}
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
            <span className="chip mb-3 md:mb-4 inline-block text-xs md:text-sm">
              {t("Mūsu pieeja", "Our approach")}
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              {t("Strukturēta pieeja reklāmas ", "Structured approach to advertising ")}{" "}
              <span className="text-gradient-orange">{t("optimizācijā", "optimization")}</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {t(
                "Reklāma tiek veidota soli pa solim ar skaidru mērķi, korektu datu uzskaiti un fokusētu optimizāciju. Katrs risinājums ir personalizēts konkrētajam gadījumam.",
                "Advertising is built step by step with a clear goal, proper data tracking, and focused optimization. Each solution is personalized for the specific case.",
              )}
            </p>
          </ScrollReveal>

          {/* Roadmap */}
          <div className="max-w-5xl mx-auto relative">
            {/* Vertical connection line - desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
              <motion.div
                className="w-full h-full bg-gradient-to-b from-primary/40 via-primary/20 to-primary/40"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              />
            </div>

            {/* Animated pulse traveling down the line */}
            <motion.div
              className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/40 z-20"
              animate={{ y: ["0%", "2000%", "0%"], opacity: [0, 1, 1, 1, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Mobile vertical line */}
            <div className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-primary/30" />

            <div className="space-y-4 md:space-y-6">
              {[
                {
                  step: "01",
                  title: t("Biznesa mērķu izpratne", "Understanding business goals"),
                  description: t(
                    "Uzņēmuma biznesa mērķu, prioritāšu un izaugsmes virziena skaidra izpratne, lai reklāma kalpotu konkrētam rezultātam, nevis aktivitātei bez virziena.",
                    "Clear understanding of company business goals, priorities, and growth direction, so advertising serves a concrete result, not directionless activity.",
                  ),
                  icon: Target,
                  color: "from-primary to-orange-500",
                  bgColor: "from-primary/8 to-orange-50/60",
                  dotColor: "bg-primary",
                },
                {
                  step: "02",
                  title: t("Piedāvājuma un konkurences izvērtēšana", "Offer and competitive evaluation"),
                  description: t(
                    "Produkta vai pakalpojuma konkurētspējas, cenu pozicionējuma un tirgus situācijas analīze pirms reklāmas budžeta investēšanas.",
                    "Product or service competitiveness, pricing positioning, and market situation analysis before investing the advertising budget.",
                  ),
                  icon: Eye,
                  color: "from-orange-500 to-amber-500",
                  bgColor: "from-orange-50/80 to-amber-50/50",
                  dotColor: "bg-orange-500",
                },
                {
                  step: "03",
                  title: t("Auditorijas analīze", "Audience analysis"),
                  description: t(
                    "Mērķauditorijas segmentācija, uzvedības izpēte un pieprasījuma struktūras identificēšana, lai reklāma sasniegtu atbilstošos klientus.",
                    "Target audience segmentation, behavior research, and demand structure identification, so advertising reaches the right customers.",
                  ),
                  icon: Users,
                  color: "from-amber-500 to-orange-400",
                  bgColor: "from-amber-50/70 to-orange-50/40",
                  dotColor: "bg-amber-500",
                },
                {
                  step: "04",
                  title: t("KPI un budžeta struktūra", "KPI and budget structure"),
                  description: t(
                    "Skaidru, izmērāmu KPI definēšana un budžeta sadalījuma modelēšana atbilstoši potenciālajai atdevei un biznesa mērķiem.",
                    "Defining clear, measurable KPIs and budget allocation modeling according to potential return and business goals.",
                  ),
                  icon: BarChart3,
                  color: "from-orange-400 to-primary",
                  bgColor: "from-orange-50/60 to-primary/6",
                  dotColor: "bg-orange-400",
                },
                {
                  step: "05",
                  title: t("Kampaņu izveide", "Campaign creation"),
                  description: t(
                    "Strukturētu kampaņu, auditoriju un ziņojumu izveide ar precīzi definētu konversiju mērķi un datu uzskaiti.",
                    "Creating structured campaigns, audiences, and messages with precisely defined conversion goals and data tracking.",
                  ),
                  icon: Settings,
                  color: "from-primary to-amber-500",
                  bgColor: "from-primary/8 to-amber-50/50",
                  dotColor: "bg-primary",
                },
                {
                  step: "06",
                  title: t("Testēšana un optimizācija", "Testing and optimization"),
                  description: t(
                    "Pastāvīga reklāmas struktūras, kreatīvo un auditoriju testēšana, balstoties uz reāliem datiem un veiktspējas analīzi.",
                    "Continuous testing of advertising structure, creatives, and audiences based on real data and performance analysis.",
                  ),
                  icon: RefreshCw,
                  color: "from-amber-500 to-primary",
                  bgColor: "from-amber-50/60 to-primary/6",
                  dotColor: "bg-amber-500",
                },
                {
                  step: "07",
                  title: t("Skalēšana", "Scaling"),
                  description: t(
                    "Budžeta palielināšana un auditoriju paplašināšana tikai pēc validētas rentabilitātes un stabilas konversiju struktūras.",
                    "Budget increase and audience expansion only after validated profitability and stable conversion structure.",
                  ),
                  icon: TrendingUp,
                  color: "from-orange-500 to-primary",
                  bgColor: "from-orange-50/70 to-primary/8",
                  dotColor: "bg-orange-500",
                },
              ].map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <ScrollReveal key={idx} delay={0.1 + idx * 0.08}>
                    <div className="relative flex items-start md:items-center gap-4 md:gap-0">
                      {/* Mobile: dot on vertical line */}
                      <div className="md:hidden relative z-10 flex-shrink-0">
                        <div className={`w-10 h-10 rounded-full ${item.dotColor} flex items-center justify-center shadow-lg`}>
                          <span className="text-xs font-bold text-white">{item.step}</span>
                        </div>
                      </div>

                      {/* Desktop: alternating left/right layout */}
                      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-6 w-full items-center">
                        {/* Left content */}
                        <div className="col-start-1">
                          {isEven ? (
                            <motion.div
                              whileHover={{ y: -4, scale: 1.02 }}
                              transition={{ type: "spring", stiffness: 300, damping: 25 }}
                              className={`relative p-6 rounded-2xl bg-gradient-to-br ${item.bgColor} border border-border/60 shadow-sm hover:shadow-lg overflow-hidden group cursor-default`}
                            >
                              <div className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${item.color} opacity-10 rounded-full group-hover:scale-[2.5] transition-transform duration-700`} />
                              <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                    <item.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <h3 className="text-lg font-semibold">{item.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                              </div>
                              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} opacity-30 group-hover:opacity-70 transition-opacity duration-300`} />
                            </motion.div>
                          ) : null}
                        </div>

                        {/* Center: timeline node */}
                        <div className="col-start-2 relative flex flex-col items-center z-10">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg cursor-default`}
                          >
                            <span className="text-sm font-bold text-white">{item.step}</span>
                          </motion.div>
                        </div>

                        {/* Right content */}
                        <div className="col-start-3">
                          {!isEven ? (
                            <motion.div
                              whileHover={{ y: -4, scale: 1.02 }}
                              transition={{ type: "spring", stiffness: 300, damping: 25 }}
                              className={`relative p-6 rounded-2xl bg-gradient-to-br ${item.bgColor} border border-border/60 shadow-sm hover:shadow-lg overflow-hidden group cursor-default`}
                            >
                              <div className={`absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br ${item.color} opacity-10 rounded-full group-hover:scale-[2.5] transition-transform duration-700`} />
                              <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                    <item.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <h3 className="text-lg font-semibold">{item.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                              </div>
                              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} opacity-30 group-hover:opacity-70 transition-opacity duration-300`} />
                            </motion.div>
                          ) : null}
                        </div>
                      </div>

                      {/* Mobile: card content */}
                      <div className="md:hidden flex-1">
                        <motion.div
                          whileHover={{ y: -2 }}
                          className={`relative p-4 rounded-xl bg-gradient-to-br ${item.bgColor} border border-border/60 shadow-sm overflow-hidden group`}
                        >
                          <div className={`absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br ${item.color} opacity-10 rounded-full`} />
                          <div className="relative z-10">
                            <div className="flex items-center gap-2.5 mb-2">
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-sm`}>
                                <item.icon className="w-4 h-4 text-white" />
                              </div>
                              <h3 className="text-sm font-semibold">{item.title}</h3>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                          </div>
                          <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} opacity-30`} />
                        </motion.div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: FAQ ========== */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Simple clean background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />

        <div className="container-neo relative z-10">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-6 md:mb-12">
              <span className="chip mb-3 md:mb-4 inline-block text-xs md:text-sm">FAQ</span>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                {t("Biežāk uzdotie", "Frequently asked")}{" "}
                <span className="text-gradient-orange">{t("jautājumi", "questions")}</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
              {[
                {
                  icon: Gauge,
                  question: t("Cik ātri iespējams redzēt rezultātus?", "How quickly can I see results?"),
                  answer: t(
                    "Pirmie dati ir redzami dažu dienu laikā, bet stabilai optimizācijai parasti nepieciešamas 3–6 nedēļas atkarībā no budžeta un tirgus konkurences.",
                    "Initial data is visible within a few days, but stable optimization usually requires 3–6 weeks depending on budget and market competition.",
                  ),
                  gradient: "from-primary to-orange-500",
                },
                {
                  icon: Wallet,
                  question: t("Kāds ir minimālais reklāmas budžets?", "What is the minimum advertising budget?"),
                  answer: t(
                    "Budžets ir atkarīgs no nozares un mērķiem, taču, lai reklāma būtu jēgpilna un dotu datus optimizācijai, parasti ieteicams sākums no 800–1500 € mēnesī.",
                    "The budget depends on the industry and goals, but for advertising to be meaningful and provide optimization data, a starting point of €800–1500 per month is usually recommended.",
                  ),
                  gradient: "from-orange-500 to-amber-500",
                },
                {
                  icon: DollarSign,
                  question: t("Vai reklāmas budžetu maksā aģentūra?", "Does the agency pay the ad budget?"),
                  answer: t(
                    "Nē. Reklāmas budžets tiek maksāts tieši platformām (Google, Meta u.c.). NEOLab pārvalda un optimizē kampaņas.",
                    "No. The ad budget is paid directly to platforms (Google, Meta, etc.). NEOLab manages and optimizes campaigns.",
                  ),
                  gradient: "from-amber-500 to-orange-400",
                },
                {
                  icon: ClipboardCheck,
                  question: t("Vai iespējams audits esošām kampaņām?", "Is an audit of existing campaigns possible?"),
                  answer: t(
                    "Jā. Veicam esošo Google, Meta vai citu kanālu auditu, izvērtējam struktūru, izmaksas un potenciālās optimizācijas iespējas.",
                    "Yes. We audit existing Google, Meta, or other channel accounts, evaluating structure, costs, and potential optimization opportunities.",
                  ),
                  gradient: "from-orange-400 to-primary",
                },
                {
                  icon: TrendingUp,
                  question: t("Vai reklāmu var apvienot ar SEO?", "Can advertising be combined with SEO?"),
                  answer: t(
                    "Jā. Reklāma var dot ātru rezultātu, kamēr SEO veido ilgtermiņa redzamību. Apvienojot abus, iespējams samazināt kopējās piesaistes izmaksas.",
                    "Yes. Advertising can deliver quick results while SEO builds long-term visibility. Combining both can reduce overall acquisition costs.",
                  ),
                  gradient: "from-primary to-amber-500",
                },
                {
                  icon: Activity,
                  question: t("Vai ir minimālais sadarbības termiņš?", "Is there a minimum collaboration period?"),
                  answer: t(
                    "Reklāmai nepieciešams laiks testēšanai un optimizācijai, tāpēc parasti ieteicams vismaz 3 mēnešu sadarbības periods.",
                    "Advertising needs time for testing and optimization, so a minimum collaboration period of at least 3 months is usually recommended.",
                  ),
                  gradient: "from-amber-500 to-primary",
                },
              ].map((faq, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white rounded-lg md:rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 overflow-hidden data-[state=open]:shadow-lg data-[state=open]:border-primary/30"
                  >
                    <AccordionTrigger className="px-3 md:px-5 py-2.5 md:py-4 hover:no-underline group">
                      <div className="flex items-center gap-2.5 md:gap-4 text-left">
                        <div
                          className={`w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br ${faq.gradient} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300`}
                        >
                          <faq.icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
                        </div>
                        <span className="font-medium text-xs md:text-base text-foreground/90 group-hover:text-primary transition-colors duration-300">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-3 md:px-5 pb-3 md:pb-5">
                      <div className="pl-9 md:pl-14">
                        <p className="text-muted-foreground text-xs md:text-base leading-relaxed">{faq.answer}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: CTA ========== */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50/50 to-white" />

        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(21 90% 48%) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating accents - hidden on mobile */}
        <motion.div
          className="hidden md:block absolute top-20 left-[10%] w-48 h-48 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="hidden md:block absolute bottom-20 right-[15%] w-56 h-56 rounded-full bg-gradient-to-tl from-amber-400/10 to-transparent blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />

        <div className="container-neo relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                {t("Sāc ar skaidru", "Start with a clear")}{" "}
                <span className="text-gradient-orange">{t("reklāmas stratēģiju", "advertising strategy")}</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-10 leading-relaxed">
                {t(
                  "Maksas reklāma strādā tikai tad, ja ir skaidrs mērķis, struktūra un mērījumi.",
                  "Paid advertising only works when there's a clear goal, structure, and measurements.",
                )}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="inline-block"
                >
                  <Button
                    variant="hero"
                    size="lg"
                    className="shadow-xl hover:shadow-2xl transition-all duration-300 text-sm md:text-base"
                  >
                    {t("Uzzini kā attīstīties", "Learn how to evolve")}
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </motion.div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
