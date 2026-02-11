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
              {t("Kādas ir maksas reklāmas priekšrocības", "What are the benefits of paid advertising")}
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

        {/* Accent orbs - hidden on mobile */}
        <motion.div
          className="hidden md:block absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-primary/8 to-transparent blur-3xl"
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="hidden md:block absolute bottom-20 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-amber-200/10 to-transparent blur-3xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
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

          {/* 3-Block Structure */}
          <div className="space-y-5 md:space-y-10">
            {/* BLOCK 1: Strategy */}
            <ScrollReveal delay={0.05}>
              <Link to={getLocalizedPath("/digitala-reklama/reklamas-strategija")}>
                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  className="relative p-5 md:p-10 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-amber-50/50 border border-primary/20 overflow-hidden group cursor-pointer"
                >
                  {/* Decorative visual - hidden on small mobile */}
                  <div className="hidden sm:block absolute top-4 right-4 md:top-6 md:right-6 w-20 h-20 md:w-36 md:h-36">
                    <div className="relative w-full h-full">
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary/20"
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 30,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <motion.div
                        className="absolute inset-3 rounded-full border border-primary/15"
                        animate={{
                          rotate: -360,
                        }}
                        transition={{
                          duration: 25,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <Compass className="w-5 h-5 md:w-8 md:h-8 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 max-w-xl">
                    <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-3 md:mb-5">
                      <Compass className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      {t("Stratēģija", "Strategy")}
                    </div>
                    <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4 group-hover:text-primary transition-colors">
                      {t("Reklāmas stratēģija un kanālu izvēle", "Ad strategy and channel selection")}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                      {t(
                        "Tiek izvērtēts, kuri kanāli konkrētajā situācijā dos labāko rezultātu – Google, Meta, TikTok, Microsoft vai to kombinācija.",
                        "We evaluate which channels will deliver the best results in your specific situation – Google, Meta, TikTok, Microsoft, or a combination.",
                      )}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-xs md:text-sm group-hover:gap-3 transition-all">
                      {t("Uzzināt vairāk", "Learn more")}
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
                </motion.div>
              </Link>
            </ScrollReveal>

            {/* BLOCK 2: Ad Channels Grid */}
            <ScrollReveal delay={0.1}>
              <div className="p-4 md:p-8 rounded-xl md:rounded-2xl bg-card border border-border shadow-sm">
                <div className="flex items-center gap-2.5 md:gap-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Layers className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold">{t("Reklāmas kanāli", "Ad channels")}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {t("Izvēlies platformu, kas atbilst tavam mērķim", "Choose the platform that matches your goal")}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-4">
                  {/* Google Ads */}
                  <Link to={getLocalizedPath("/digitala-reklama/google-ads")}>
                    <motion.div
                      whileHover={{
                        y: -3,
                      }}
                      className="relative p-3 md:p-5 rounded-lg md:rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200/50 overflow-hidden group cursor-pointer h-full"
                    >
                      <div className="flex items-start justify-between mb-2 md:mb-4">
                        <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg bg-green-100 border border-green-200/50 flex items-center justify-center">
                          <Search className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">Google Ads</h4>
                      <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">
                        Search, Display, YouTube, Performance Max
                      </p>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </motion.div>
                  </Link>

                  {/* Meta Ads */}
                  <Link to={getLocalizedPath("/digitala-reklama/meta-ads")}>
                    <motion.div
                      whileHover={{
                        y: -3,
                      }}
                      className="relative p-3 md:p-5 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-50 to-pink-50/50 border border-purple-200/50 overflow-hidden group cursor-pointer h-full"
                    >
                      <div className="flex items-start justify-between mb-2 md:mb-4">
                        <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg bg-purple-100 border border-purple-200/50 flex items-center justify-center">
                          <Users className="w-4 h-4 md:w-6 md:h-6 text-purple-600" />
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">Meta Ads</h4>
                      <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">
                        Facebook, Instagram, Audience Network
                      </p>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </motion.div>
                  </Link>

                  {/* TikTok Ads */}
                  <Link to={getLocalizedPath("/digitala-reklama/tiktok-ads")}>
                    <motion.div
                      whileHover={{
                        y: -3,
                      }}
                      className="relative p-3 md:p-5 rounded-lg md:rounded-xl bg-gradient-to-br from-cyan-50 to-pink-50/30 border border-cyan-200/50 overflow-hidden group cursor-pointer h-full"
                    >
                      <div className="flex items-start justify-between mb-2 md:mb-4">
                        <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                          <Play className="w-4 h-4 md:w-6 md:h-6 text-foreground" />
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">TikTok Ads</h4>
                      <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">
                        In-Feed, TopView, Spark Ads
                      </p>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-foreground/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </motion.div>
                  </Link>

                  {/* Microsoft Ads */}
                  <Link to={getLocalizedPath("/digitala-reklama/microsoft-ads")}>
                    <motion.div
                      whileHover={{
                        y: -3,
                      }}
                      className="relative p-3 md:p-5 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/50 overflow-hidden group cursor-pointer h-full"
                    >
                      <div className="flex items-start justify-between mb-2 md:mb-4">
                        <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg bg-blue-100 border border-blue-200/50 flex items-center justify-center">
                          <Building2 className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
                        </div>
                        <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Microsoft Ads</h4>
                      <p className="text-xs text-muted-foreground">Bing, LinkedIn Audience, B2B</p>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* BLOCK 3: Conversions */}
            <ScrollReveal delay={0.15}>
              <Link to={getLocalizedPath("/digitala-reklama/konversiju-optimizacija")}>
                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  className="relative p-5 md:p-10 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/10 via-amber-50/60 to-white border border-primary/20 overflow-hidden group cursor-pointer"
                >
                  {/* Conversion visual - Hidden on mobile */}
                  <div className="hidden sm:block absolute top-4 right-4 md:top-6 md:right-6 w-32 h-16 md:w-48 md:h-28">
                    <div className="relative w-full h-full flex items-center justify-center gap-1 md:gap-2">
                      {/* Step 1: Click */}
                      <motion.div
                        className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: 0.3,
                        }}
                      >
                        <MousePointer className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary" />
                      </motion.div>

                      {/* Arrow 1 */}
                      <motion.div
                        className="w-4 md:w-6 h-0.5 bg-gradient-to-r from-primary/40 to-primary/60"
                        initial={{
                          scaleX: 0,
                        }}
                        animate={{
                          scaleX: 1,
                        }}
                        transition={{
                          delay: 0.5,
                          duration: 0.3,
                        }}
                      />

                      {/* Step 2: Target/Conversion */}
                      <motion.div
                        className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/20 to-amber-200/30 border border-primary/30 flex items-center justify-center"
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: 0.6,
                        }}
                      >
                        <Target className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                      </motion.div>

                      {/* Arrow 2 */}
                      <motion.div
                        className="w-4 md:w-6 h-0.5 bg-gradient-to-r from-primary/60 to-primary/40"
                        initial={{
                          scaleX: 0,
                        }}
                        animate={{
                          scaleX: 1,
                        }}
                        transition={{
                          delay: 0.8,
                          duration: 0.3,
                        }}
                      />

                      {/* Step 3: Analytics */}
                      <motion.div
                        className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: 0.9,
                        }}
                      >
                        <BarChart3 className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary" />
                      </motion.div>
                    </div>
                  </div>

                  <div className="relative z-10 max-w-xl">
                    <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-3 md:mb-5">
                      <Settings className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      {t("Tehniski", "Technical")}
                    </div>
                    <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4 group-hover:text-primary transition-colors">
                      {t("Konversiju uzstādīšana un optimizācija", "Conversion setup and optimization")}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                      {t(
                        "Bez korektas datu uzskaites reklāma netiek palaista. Tiek iestatītas konversijas, notikumi un mērījumi.",
                        "Without proper data tracking, advertising is not launched. Conversions, events, and measurements are set up.",
                      )}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-xs md:text-sm group-hover:gap-3 transition-all">
                      {t("Uzzināt vairāk", "Learn more")}
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
                </motion.div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: NEOLab Approach - Process Flow ========== */}
      <section className="relative overflow-hidden py-12 md:py-16">
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/70 via-amber-50/40 to-white" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Decorative side accents - hidden on mobile */}
        <motion.div
          className="hidden md:block absolute top-1/4 -left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-primary/10 to-transparent blur-3xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <div className="container-neo relative z-10">
          {/* Section header - centered */}
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-8 md:mb-20">
            <span className="chip mb-3 md:mb-4 inline-block text-xs md:text-sm">
              {t("Mūsu pieeja", "Our approach")}
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              {t("NEOLab maksas reklāmu", "NEOLab paid advertising")}{" "}
              <span className="text-gradient-orange">{t("pieeja", "approach")}</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {t(
                "NEOLab nestrādā ar reklāmu kā atsevišķu rīku. Mēs to uztveram kā daļu no kopējās digitālās stratēģijas.",
                "NEOLab doesn't work with advertising as a separate tool. We see it as part of the overall digital strategy.",
              )}
            </p>
          </ScrollReveal>

          {/* Horizontal process flow */}
          <div className="max-w-5xl mx-auto">
            {/* Horizontal timeline flow */}
            <div className="relative">
              {/* Connection line - horizontal on desktop */}
              <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

              {/* Animated flow dots */}
              <motion.div
                className="hidden lg:block absolute top-[60px] left-[10%] w-3 h-3 rounded-full bg-primary"
                animate={{
                  x: ["0%", "800%", "0%"],
                  opacity: [0, 1, 1, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Steps grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-4">
                {[
                  {
                    step: "01",
                    title: t("Mērķu izpratne", "Understanding goals"),
                    description: t(
                      "Uzņēmuma biznesa mērķu un prioritāšu izpratne",
                      "Understanding company business goals and priorities",
                    ),
                    icon: Target,
                  },
                  {
                    step: "02",
                    title: t("Piedāvājuma izvērtēšana", "Offer evaluation"),
                    description: t(
                      "Produkta konkurētspējas un pozicionējuma analīze",
                      "Product competitiveness and positioning analysis",
                    ),
                    icon: Eye,
                  },
                  {
                    step: "03",
                    title: t("Auditorijas analīze", "Audience analysis"),
                    description: t("Mērķauditorijas un konkurences izpēte", "Target audience and competition research"),
                    icon: Users,
                  },
                  {
                    step: "04",
                    title: t("KPI noteikšana", "KPI definition"),
                    description: t("Skaidru, izmērāmu mērķu definēšana", "Defining clear, measurable goals"),
                    icon: BarChart3,
                  },
                ].map((item, idx) => (
                  <ScrollReveal key={idx} delay={0.15 + idx * 0.1}>
                    <motion.div
                      whileHover={{
                        y: -6,
                      }}
                      className="relative group"
                    >
                      {/* Step indicator - circle on timeline */}
                      <div className="hidden lg:flex absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-card border-2 border-primary/30 items-center justify-center z-10 group-hover:border-primary/60 transition-colors">
                        <span className="text-xs font-bold text-primary">{idx + 1}</span>
                      </div>

                      {/* Card */}
                      <div className="mt-0 lg:mt-10 p-4 md:p-7 rounded-xl md:rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 h-full">
                        {/* Mobile step number */}
                        <div className="flex lg:hidden items-center gap-2 md:gap-3 mb-3 md:mb-4">
                          <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs md:text-sm font-bold text-primary">
                            {item.step}
                          </span>
                          <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
                        </div>

                        {/* Icon */}
                        <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                          <item.icon className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                        </div>

                        <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2">{item.title}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Result statement */}
            <ScrollReveal delay={0.5}>
              <div className="mt-8 md:mt-20 relative">
                <div className="max-w-2xl mx-auto text-center p-5 md:p-10 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
                  {/* Arrow indicator */}
                  <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-primary rotate-90" />
                  </div>

                  <p className="text-sm md:text-xl font-medium text-foreground leading-relaxed">
                    {t("Tikai pēc tam tiek izvēlēti piemērotākie", "Only then are the most suitable")}{" "}
                    <span className="text-primary font-semibold">{t("reklāmas kanāli", "ad channels")}</span>{" "}
                    {t("un", "and")}{" "}
                    <span className="text-primary font-semibold">{t("kampaņu struktūra", "campaign structure")}</span>{" "}
                    {t("", "selected")}.
                  </p>
                </div>
              </div>
            </ScrollReveal>
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
                  icon: Layers,
                  question: t("Vai jāizmanto visi reklāmas kanāli?", "Do I need to use all ad channels?"),
                  answer: t(
                    "Nē. Kanāli tiek izvēlēti pēc mērķa un auditorijas.",
                    "No. Channels are selected based on goals and audience.",
                  ),
                  gradient: "from-primary to-orange-500",
                },
                {
                  icon: Wallet,
                  question: t("Kas apmaksā reklāmas budžetu?", "Who pays for the ad budget?"),
                  answer: t(
                    "Reklāmas budžetu apmaksā klients tieši platformām.",
                    "The client pays the ad budget directly to the platforms.",
                  ),
                  gradient: "from-orange-500 to-amber-500",
                },
                {
                  icon: ClipboardCheck,
                  question: t("Vai iespējams audits esošām kampaņām?", "Is an audit of existing campaigns possible?"),
                  answer: t(
                    "Jā, iespējams izvērtēt esošo reklāmas kontu un sniegt konkrētus ieteikumus.",
                    "Yes, it's possible to evaluate the existing ad account and provide specific recommendations.",
                  ),
                  gradient: "from-amber-500 to-yellow-500",
                },
                {
                  icon: TrendingUp,
                  question: t(
                    "Vai performance reklāmu var apvienot ar SEO?",
                    "Can performance advertising be combined with SEO?",
                  ),
                  answer: t(
                    "Jā, kombinācija bieži dod labākos ilgtermiņa rezultātus.",
                    "Yes, the combination often delivers the best long-term results.",
                  ),
                  gradient: "from-yellow-500 to-primary",
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
