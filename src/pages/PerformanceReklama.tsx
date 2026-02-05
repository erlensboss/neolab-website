import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, Target, BarChart3, ArrowRight, AlertTriangle, Eye, DollarSign, PieChart, Activity, Gauge, MousePointer, ShoppingCart, Compass, Search, Video, Users, Zap, Settings, Play, Building2, Globe, Layers, Wallet, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// Data moved inside component to use t() function
export default function PerformanceReklama() {
  const {
    t,
    getLocalizedPath,
    language
  } = useLanguage();
  const controlProblems = [t("Nezināt, kura kampaņa tiešām nes peļņu", "Not knowing which campaign actually brings profit"), t("Aģentūras atskaites, ko neviens nesaprot", "Agency reports that no one understands"), t("Budžets, kas iztukšojas bez skaidra ROI", "Budget that drains without clear ROI"), t("A/B testi bez reāla mācīšanās", "A/B tests without real learning")];
  const platforms = [{
    name: "Meta Ads",
    icon: Eye
  }, {
    name: "Google Ads",
    icon: Target
  }, {
    name: "LinkedIn Ads",
    icon: MousePointer
  }, {
    name: "TikTok Ads",
    icon: Activity
  }];
  const signals = [{
    label: "CTR",
    value: "2.4%",
    trend: "up",
    color: "text-green-600"
  }, {
    label: "CPA",
    value: "€12.50",
    trend: "down",
    color: "text-green-600"
  }, {
    label: "ROAS",
    value: "4.2x",
    trend: "up",
    color: "text-green-600"
  }, {
    label: "Conv. Rate",
    value: "3.8%",
    trend: "up",
    color: "text-green-600"
  }];
  const approach = [{
    icon: PieChart,
    title: t("Atribūcijas modelēšana", "Attribution modeling"),
    description: t("Ziniet precīzi, kura saskarsme noveda pie pirkuma", "Know precisely which touchpoint led to purchase")
  }, {
    icon: Gauge,
    title: t("Real-time monitorings", "Real-time monitoring"),
    description: t("Signāli, kas brīdina pirms budžets ir iztērēts", "Signals that warn before budget is spent")
  }, {
    icon: DollarSign,
    title: t("Budžeta optimizācija", "Budget optimization"),
    description: t("Dinamiska pārdale uz labāk strādājošiem kanāliem", "Dynamic reallocation to better-performing channels")
  }, {
    icon: ShoppingCart,
    title: t("Pilna piltuve", "Full funnel"),
    description: t("No apzināšanās līdz pirkumam — viss redzams", "From awareness to purchase — everything visible")
  }];
  return <div className="overflow-hidden">
      {/* ========== SECTION 1: Hero - Maksas reklāmu pārvalde ========== */}
      <section className="relative overflow-hidden">
        {/* Enhanced background with layered gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-amber-50/60 to-white" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />
        
        {/* Floating gradient orbs */}
        <motion.div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/15 to-amber-300/10 blur-3xl" animate={{
        scale: [1, 1.1, 1],
        opacity: [0.4, 0.6, 0.4]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-amber-200/20 to-orange-300/10 blur-3xl" animate={{
        scale: [1, 1.15, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} />
        
        {/* Accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="container-neo py-20 md:py-28 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-6">
                  <BarChart3 className="w-4 h-4" />
                  Performance Marketing
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1] lg:text-7xl">
                  {t("Maksas reklāmu", "Paid advertising")}{" "}
                  <span className="relative inline-block">
                    <span className="text-gradient-orange">{t("pārvalde", "management")}</span>
                    <motion.span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-amber-400 to-primary rounded-full" initial={{
                    scaleX: 0
                  }} animate={{
                    scaleX: 1
                  }} transition={{
                    delay: 0.8,
                    duration: 0.6
                  }} />
                  </span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                  {t("Maksas reklāmas risinājumi, kas fokusējas uz pieprasījuma piesaisti, konversijām un izmērāmu rezultātu vairākos kanālos.", "Paid advertising solutions that focus on demand generation, conversions, and measurable results across multiple channels.")}
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                    <Button variant="hero" size="lg" className="group">
                      {t("Sākt sadarbību", "Start collaboration")}
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
              
              {/* Trust indicators */}
              <ScrollReveal delay={0.4}>
                <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-border/50">
                  {[{
                  value: "4.8x",
                  label: "Vidējais ROAS"
                }, {
                  value: "65%+",
                  label: "Efektivitātes pieaugums"
                }, {
                  value: "92%",
                  label: "Klientu saglabāšana"
                }].map((stat, idx) => <div key={idx} className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">{stat.value}</span>
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                    </div>)}
                </div>
              </ScrollReveal>
            </div>

            {/* Dashboard preview - UNCHANGED */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="glass-warm rounded-2xl p-8 md:p-10 shadow-card">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-semibold text-lg">Performance Dashboard</span>
                  <span className="text-sm text-muted-foreground">Live</span>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {signals.map((signal, index) => <motion.div key={signal.label} initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.5 + index * 0.1
                }} className="bg-card rounded-xl p-5 border border-border">
                      <div className="text-sm text-muted-foreground mb-2">{signal.label}</div>
                      <div className={`text-2xl font-bold ${signal.color}`}>
                        {signal.value}
                        <TrendingUp className="w-5 h-5 inline ml-2" />
                      </div>
                    </motion.div>)}
                </div>
                
                {/* Mini chart placeholder */}
                <div className="h-32 bg-muted rounded-xl flex items-end justify-around p-3">
                  {[40, 65, 45, 80, 60, 90, 75].map((h, i) => <motion.div key={i} initial={{
                  height: 0
                }} animate={{
                  height: `${h}%`
                }} transition={{
                  delay: 0.8 + i * 0.05,
                  duration: 0.5
                }} className="w-8 bg-gradient-to-t from-primary to-primary/60 rounded-t" />)}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: Benefits of Paid Advertising ========== */}
      <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-muted/30 to-white" />
        
        <div className="container-neo relative z-10">
          {/* Section header */}
          <ScrollReveal className="max-w-3xl mb-14 md:mb-20">
            <span className="chip mb-4 inline-block">Priekšrocības</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Kādas ir maksas reklāmas priekšrocības
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Maksas reklāma ļauj uzņēmumam piesaistīt klientus brīdī, kad viņiem jau ir interese vai vajadzība. Tā balstās datos, nevis minējumos, un ļauj skaidri redzēt, kas strādā un kas nē.
            </p>
          </ScrollReveal>

          {/* Benefits grid - asymmetric professional layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {/* Benefit 1 - Featured large card */}
            <ScrollReveal delay={0.05} className="lg:col-span-2">
              <motion.div whileHover={{
              y: -3
            }} className="relative h-full p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/8 via-primary/4 to-transparent border border-primary/15 overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">Pieprasījuma piesaiste ar augstu pirkuma nodomu</h3>
                  <p className="text-muted-foreground">Sasniedziet klientus tieši tajā brīdī, kad viņi meklē jūsu produktu vai pakalpojumu.</p>
                </div>
                {/* Accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
              </motion.div>
            </ScrollReveal>

            {/* Benefit 2 */}
            <ScrollReveal delay={0.1}>
              <motion.div whileHover={{
              y: -3
            }} className="relative h-full p-7 md:p-8 rounded-2xl bg-card border border-border shadow-sm overflow-hidden group">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-bl from-amber-100 to-transparent rounded-full opacity-60" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-amber-200/50">
                    <DollarSign className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Pilnīga budžeta un izmaksu kontrole</h3>
                  <p className="text-sm text-muted-foreground">Jūs izlemjat, cik tērēt, un redzat katru centu.</p>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Benefit 3 */}
            <ScrollReveal delay={0.15}>
              <motion.div whileHover={{
              y: -3
            }} className="relative h-full p-7 md:p-8 rounded-2xl bg-card border border-border shadow-sm overflow-hidden group">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-bl from-green-100 to-transparent rounded-full opacity-60" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-green-200/50">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Izmērāmi rezultāti un skaidri KPI</h3>
                  <p className="text-sm text-muted-foreground">Katrs klikšķis, konversija un pārdošana ir izsekojama.</p>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Visual Metrics Panel - fills empty space */}
            <ScrollReveal delay={0.18} className="lg:row-span-2">
              <div className="relative h-full p-6 md:p-7 rounded-2xl bg-gradient-to-b from-foreground/[0.03] to-muted/50 border border-border overflow-hidden">
                <div className="absolute inset-0 opacity-[0.015]" style={{
                backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Rezultātu pārskats</span>
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </div>

                  {/* Mini funnel visualization */}
                  <div className="space-y-3 mb-6">
                    {[{
                    label: "Impressions",
                    value: "124K",
                    width: "100%",
                    color: "from-primary/20 to-primary/10"
                  }, {
                    label: "Clicks",
                    value: "8.2K",
                    width: "65%",
                    color: "from-primary/30 to-primary/15"
                  }, {
                    label: "Leads",
                    value: "1.4K",
                    width: "40%",
                    color: "from-primary/50 to-primary/25"
                  }, {
                    label: "Sales",
                    value: "312",
                    width: "25%",
                    color: "from-primary/70 to-primary/40"
                  }].map((item, idx) => <motion.div key={item.label} initial={{
                    opacity: 0,
                    x: -10
                  }} animate={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: 0.5 + idx * 0.1
                  }} className="flex items-center gap-3">
                        <div className="w-16 text-xs text-muted-foreground">{item.label}</div>
                        <div className="flex-1 h-6 bg-muted/50 rounded overflow-hidden">
                          <motion.div className={`h-full bg-gradient-to-r ${item.color} rounded flex items-center justify-end pr-2`} initial={{
                        width: 0
                      }} animate={{
                        width: item.width
                      }} transition={{
                        delay: 0.7 + idx * 0.15,
                        duration: 0.5
                      }}>
                            <span className="text-xs font-semibold text-foreground/80">{item.value}</span>
                          </motion.div>
                        </div>
                      </motion.div>)}
                  </div>

                  {/* Key metric */}
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Konversijas likme</div>
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
              <motion.div whileHover={{
              y: -3
            }} className="relative h-full p-7 md:p-8 rounded-2xl bg-card border border-border shadow-sm overflow-hidden group">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-bl from-blue-100 to-transparent rounded-full opacity-60" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-blue-200/50">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Iespēja ātri testēt piedāvājumus</h3>
                  <p className="text-sm text-muted-foreground">A/B testēšana, lai atrastu labāko ziņojumu un piedāvājumu.</p>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Benefit 5 - Featured bottom card */}
            <ScrollReveal delay={0.25} className="md:col-span-2 lg:col-span-2">
              <motion.div whileHover={{
              y: -3
            }} className="relative h-full p-8 md:p-10 rounded-2xl bg-gradient-to-br from-muted/80 to-muted/40 border border-border overflow-hidden group">
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary/5 to-transparent rounded-br-full" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-primary/10">
                    <TrendingUp className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">Elastība starp dažādiem reklāmas kanāliem</h3>
                    <p className="text-muted-foreground">Pārslēdzieties starp Meta, Google, LinkedIn un citiem kanāliem atkarībā no rezultātiem.</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Bottom statement */}
          <ScrollReveal delay={0.3}>
            <div className="mt-12 md:mt-16 pt-10 border-t border-border/60">
              
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 3: Who Is Paid Advertising For ========== */}
      <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
        {/* Warm welcoming background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/60 via-amber-50/40 to-white" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />
        
        {/* Warm glow orb */}
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gradient-to-br from-primary/8 to-amber-200/5 blur-3xl" animate={{
        scale: [1, 1.05, 1],
        opacity: [0.5, 0.7, 0.5]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }} />

        <div className="container-neo relative z-10">
          {/* Section header */}
          <ScrollReveal className="max-w-3xl mb-14 md:mb-20">
            <span className="chip mb-4 inline-block">Jūsu situācija</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Kādiem uzņēmumiem maksas reklāma ir vajadzīga?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Maksas reklāma vislabāk strādā uzņēmumiem, kuri zina, ko piedāvā, un vēlas redzēt atdevi no reklāmas budžeta.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left side - Criteria checklist */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.1}>
                <div className="rounded-2xl bg-card border border-border p-8 md:p-10 shadow-sm">
                  <p className="text-lg font-medium text-foreground mb-8">
                    Maksas reklāma ir piemērota, ja:
                  </p>
                  
                  <div className="space-y-5">
                    {[{
                    text: "Uzņēmumam ir konkrēts pakalpojums vai produkts",
                    icon: Target
                  }, {
                    text: "Nepieciešams ātri piesaistīt pieprasījumu",
                    icon: TrendingUp
                  }, {
                    text: "Tirgū jau notiek aktīva meklēšana vai interese",
                    icon: Eye
                  }, {
                    text: "Ir vēlme testēt jaunu piedāvājumu vai virzienu",
                    icon: Activity
                  }, {
                    text: "Ir noteikts un kontrolējams reklāmas budžets",
                    icon: DollarSign
                  }].map((item, idx) => <motion.div key={idx} initial={{
                    opacity: 0,
                    x: -20
                  }} animate={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: 0.3 + idx * 0.08
                  }} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border-l-3 border-primary/40 hover:border-primary/70 hover:from-primary/8 transition-all duration-300">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-foreground font-medium pt-2">{item.text}</span>
                      </motion.div>)}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right side - Segments & CTA */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Target segments card */}
              <ScrollReveal delay={0.2}>
                <motion.div whileHover={{
                y: -3
              }} className="relative rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-amber-50/50 border border-primary/15 p-8 md:p-10 overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/15 to-transparent rounded-bl-full" />
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-5">Īpaši efektīva maksas reklāma:</h3>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {[{
                      label: "Pakalpojumu uzņēmumiem",
                      color: "from-primary/20 to-primary/10"
                    }, {
                      label: "E-komercijai",
                      color: "from-amber-100 to-amber-50"
                    }, {
                      label: "B2B segmentam",
                      color: "from-blue-100/80 to-blue-50/50"
                    }, {
                      label: "Lokāliem pakalpojumiem",
                      color: "from-green-100/80 to-green-50/50"
                    }].map((segment, idx) => <motion.div key={idx} initial={{
                      opacity: 0,
                      scale: 0.95
                    }} animate={{
                      opacity: 1,
                      scale: 1
                    }} transition={{
                      delay: 0.5 + idx * 0.1
                    }} className={`px-4 py-3 rounded-xl bg-gradient-to-br ${segment.color} border border-border/50 text-center`}>
                          <span className="font-medium text-foreground my-0 py-0 text-center text-base">{segment.label}</span>
                        </motion.div>)}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* Welcoming CTA card */}
              <ScrollReveal delay={0.3}>
                <motion.div whileHover={{
                y: -3
              }} className="relative rounded-2xl bg-foreground/[0.03] border border-border p-8 md:p-10 overflow-hidden flex-1">
                  <div className="absolute inset-0 opacity-[0.02]" style={{
                  backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium text-muted-foreground">Atpazīstat sevi?</span>
                    </div>
                    
                    <p className="text-foreground mb-6 flex-1">Ja kaut viens no šiem punktiem atbilst jūsu situācijai, tad maksas reklāma var būt pareizais solis.</p>
                    
                    <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                      <Button variant="default" className="w-full group">
                        Sākt sarunu
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: NEOLab Offerings - Restructured ========== */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-muted/40 to-white" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '28px 28px'
      }} />
        
        {/* Accent orbs */}
        <motion.div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-primary/8 to-transparent blur-3xl" animate={{
        opacity: [0.4, 0.6, 0.4]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-20 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-amber-200/10 to-transparent blur-3xl" animate={{
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }} />

        <div className="container-neo relative z-10">
          {/* Section header */}
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
            <span className="chip mb-4 inline-block">Piedāvājumi</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              NEOLab maksas reklāmu{" "}
              <span className="text-gradient-orange">piedāvājumi</span>
            </h2>
          </ScrollReveal>

          {/* 3-Block Structure */}
          <div className="space-y-8 md:space-y-10">
            
            {/* BLOCK 1: Strategy */}
            <ScrollReveal delay={0.05}>
              <Link to={getLocalizedPath("/performance-reklama/strategija")}>
                <motion.div 
                  whileHover={{ y: -4 }} 
                  className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-amber-50/50 border border-primary/20 overflow-hidden group cursor-pointer"
                >
                  {/* Decorative visual */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 w-28 h-28 md:w-36 md:h-36">
                    <div className="relative w-full h-full">
                      <motion.div className="absolute inset-0 rounded-full border-2 border-primary/20" animate={{
                      rotate: 360
                    }} transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear"
                    }} />
                      <motion.div className="absolute inset-3 rounded-full border border-primary/15" animate={{
                      rotate: -360
                    }} transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear"
                    }} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <Compass className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                        </div>
                      </div>
                      {[0, 90, 180, 270].map(deg => (
                        <motion.div 
                          key={deg} 
                          className="absolute w-2 h-2 rounded-full bg-primary/40" 
                          style={{
                            top: '50%',
                            left: '50%',
                            transform: `rotate(${deg}deg) translateY(-45px) translate(-50%, -50%)`
                          }} 
                          animate={{ opacity: [0.4, 1, 0.4] }} 
                          transition={{ duration: 2, repeat: Infinity, delay: deg / 360 }} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative z-10 max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-5">
                      <Compass className="w-3.5 h-3.5" />
                      Stratēģija
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      Reklāmas stratēģija un kanālu izvēle
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Tiek izvērtēts, kuri kanāli konkrētajā situācijā dos labāko rezultātu – Google, Meta, TikTok, Microsoft vai to kombinācija. Mērķis nav būt visur, bet būt tur, kur tas strādā.
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      Uzzināt vairāk
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
                </motion.div>
              </Link>
            </ScrollReveal>

            {/* BLOCK 2: Ad Channels Grid */}
            <ScrollReveal delay={0.1}>
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Layers className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Reklāmas kanāli</h3>
                    <p className="text-sm text-muted-foreground">Izvēlies platformu, kas atbilst tavam mērķim</p>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Google Ads */}
                  <Link to={getLocalizedPath("/performance-reklama/google-ads")}>
                    <motion.div 
                      whileHover={{ y: -3 }} 
                      className="relative p-5 rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200/50 overflow-hidden group cursor-pointer h-full"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-green-100 border border-green-200/50 flex items-center justify-center">
                          <Search className="w-6 h-6 text-green-600" />
                        </div>
                        <ArrowRight className="w-4 h-4 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Google Ads</h4>
                      <p className="text-xs text-muted-foreground">Search, Display, YouTube, Performance Max</p>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </motion.div>
                  </Link>

                  {/* Meta Ads */}
                  <Link to={getLocalizedPath("/performance-reklama/meta-ads")}>
                    <motion.div 
                      whileHover={{ y: -3 }} 
                      className="relative p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50/50 border border-purple-200/50 overflow-hidden group cursor-pointer h-full"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-purple-100 border border-purple-200/50 flex items-center justify-center">
                          <Users className="w-6 h-6 text-purple-600" />
                        </div>
                        <ArrowRight className="w-4 h-4 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Meta Ads</h4>
                      <p className="text-xs text-muted-foreground">Facebook, Instagram, Audience Network</p>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </motion.div>
                  </Link>

                  {/* TikTok Ads */}
                  <Link to={getLocalizedPath("/performance-reklama/tiktok-ads")}>
                    <motion.div 
                      whileHover={{ y: -3 }} 
                      className="relative p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-pink-50/30 border border-cyan-200/50 overflow-hidden group cursor-pointer h-full"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                          <Play className="w-6 h-6 text-foreground" />
                        </div>
                        <ArrowRight className="w-4 h-4 text-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">TikTok Ads</h4>
                      <p className="text-xs text-muted-foreground">In-Feed, TopView, Spark Ads</p>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-foreground/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </motion.div>
                  </Link>

                  {/* Microsoft Ads */}
                  <Link to={getLocalizedPath("/performance-reklama/microsoft-ads")}>
                    <motion.div 
                      whileHover={{ y: -3 }} 
                      className="relative p-5 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/50 overflow-hidden group cursor-pointer h-full"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-100 border border-blue-200/50 flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-blue-600" />
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
              <Link to={getLocalizedPath("/performance-reklama/konversijas")}>
                <motion.div 
                  whileHover={{ y: -4 }} 
                  className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/10 via-amber-50/60 to-white border border-primary/20 overflow-hidden group cursor-pointer"
                >
                  {/* Conversion visual - Simple linear flow */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 w-40 h-24 md:w-48 md:h-28">
                    <div className="relative w-full h-full flex items-center justify-center gap-2">
                      {/* Step 1: Click */}
                      <motion.div 
                        className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <MousePointer className="w-5 h-5 text-primary" />
                      </motion.div>
                      
                      {/* Arrow 1 */}
                      <motion.div 
                        className="w-6 h-0.5 bg-gradient-to-r from-primary/40 to-primary/60"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                      />
                      
                      {/* Step 2: Target/Conversion */}
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-amber-200/30 border border-primary/30 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Target className="w-6 h-6 text-primary" />
                        </motion.div>
                      </motion.div>
                      
                      {/* Arrow 2 */}
                      <motion.div 
                        className="w-6 h-0.5 bg-gradient-to-r from-primary/60 to-primary/40"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 0.3 }}
                      />
                      
                      {/* Step 3: Analytics */}
                      <motion.div 
                        className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 }}
                      >
                        <BarChart3 className="w-5 h-5 text-primary" />
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="relative z-10 max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-5">
                      <Settings className="w-3.5 h-3.5" />
                      Tehniski
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      Konversiju uzstādīšana un optimizācija
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Bez korektas datu uzskaites reklāma netiek palaista. Tiek iestatītas konversijas, notikumi un mērījumi, lai lēmumi balstītos reālos datos.
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      Uzzināt vairāk
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
                </motion.div>
              </Link>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ========== SECTION 5: NEOLab Approach - Process Flow ========== */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/70 via-amber-50/40 to-white" />
        <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />
        
        {/* Decorative side accents */}
        <motion.div className="absolute top-1/4 -left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-primary/10 to-transparent blur-3xl" animate={{
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity
      }} />

        <div className="container-neo relative z-10">
          {/* Section header - centered */}
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <span className="chip mb-4 inline-block">Mūsu pieeja</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              NEOLab maksas reklāmu{" "}
              <span className="text-gradient-orange">pieeja</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              NEOLab nestrādā ar reklāmu kā atsevišķu rīku. Mēs to uztveram kā daļu no kopējās digitālās stratēģijas. Mūsu darbs sākas ar:    
            </p>
          </ScrollReveal>

          {/* Horizontal process flow - different style */}
          <div className="max-w-5xl mx-auto">
            {/* Intro statement */}
            <ScrollReveal delay={0.1}>
              <div className="text-center mb-12 md:mb-16">
                
              </div>
            </ScrollReveal>

            {/* Horizontal timeline flow */}
            <div className="relative">
              {/* Connection line - horizontal on desktop */}
              <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
              
              {/* Animated flow dots */}
              <motion.div className="hidden lg:block absolute top-[60px] left-[10%] w-3 h-3 rounded-full bg-primary" animate={{
              x: ["0%", "800%", "0%"],
              opacity: [0, 1, 1, 1, 0]
            }} transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }} />

              {/* Steps grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                {[{
                step: "01",
                title: "Mērķu izpratne",
                description: "Uzņēmuma biznesa mērķu un izaugsmes prioritāšu izpratne",
                icon: Target
              }, {
                step: "02",
                title: "Piedāvājuma izvērtēšana",
                description: "Produkta vai pakalpojuma konkurētspējas un pozicionējuma analīze",
                icon: Eye
              }, {
                step: "03",
                title: "Auditorijas analīze",
                description: "Mērķauditorijas un konkurences padziļināta izpēte",
                icon: Users
              }, {
                step: "04",
                title: "KPI noteikšana",
                description: "Skaidru, izmērāmu mērķu un panākumu kritēriju definēšana",
                icon: BarChart3
              }].map((item, idx) => <ScrollReveal key={item.step} delay={0.15 + idx * 0.1}>
                    <motion.div whileHover={{
                  y: -6
                }} className="relative group">
                      {/* Step indicator - circle on timeline */}
                      <div className="hidden lg:flex absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-card border-2 border-primary/30 items-center justify-center z-10 group-hover:border-primary/60 transition-colors">
                        <span className="text-xs font-bold text-primary">{idx + 1}</span>
                      </div>
                      
                      {/* Card */}
                      <div className="mt-0 lg:mt-10 p-6 md:p-7 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 h-full">
                        {/* Mobile step number */}
                        <div className="flex lg:hidden items-center gap-3 mb-4">
                          <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">{item.step}</span>
                          <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
                        </div>
                        
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  </ScrollReveal>)}
              </div>
            </div>

            {/* Result statement */}
            <ScrollReveal delay={0.5}>
              <div className="mt-14 md:mt-20 relative">
                <div className="max-w-2xl mx-auto text-center p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
                  {/* Arrow indicator */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-primary rotate-90" />
                  </div>
                  
                  <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
                    Tikai pēc tam tiek izvēlēti piemērotākie{" "}
                    <span className="text-primary font-semibold">reklāmas kanāli</span>{" "}
                    un{" "}
                    <span className="text-primary font-semibold">kampaņu struktūra</span>.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: FAQ ========== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Simple clean background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        
        <div className="container-neo relative z-10">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="chip mb-4 inline-block text-sm">FAQ</span>
              <h2 className="text-foreground">
                Biežāk uzdotie <span className="text-gradient-orange">jautājumi</span>
              </h2>
            </div>
          </ScrollReveal>
          
          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
              {[{
              icon: Layers,
              question: "Vai jāizmanto visi reklāmas kanāli?",
              answer: "Nē. Kanāli tiek izvēlēti pēc mērķa un auditorijas.",
              gradient: "from-primary to-orange-500"
            }, {
              icon: Wallet,
              question: "Kas apmaksā reklāmas budžetu?",
              answer: "Reklāmas budžetu apmaksā klients tieši platformām.",
              gradient: "from-orange-500 to-amber-500"
            }, {
              icon: ClipboardCheck,
              question: "Vai iespējams audits esošām kampaņām?",
              answer: "Jā, iespējams izvērtēt esošo reklāmas kontu un sniegt konkrētus ieteikumus.",
              gradient: "from-amber-500 to-yellow-500"
            }, {
              icon: TrendingUp,
              question: "Vai performance reklāmu var apvienot ar SEO?",
              answer: "Jā, kombinācija bieži dod labākos ilgtermiņa rezultātus.",
              gradient: "from-yellow-500 to-primary"
            }].map((faq, index) => <ScrollReveal key={index} delay={index * 0.05}>
                  <AccordionItem value={`item-${index}`} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 overflow-hidden data-[state=open]:shadow-lg data-[state=open]:border-primary/30">
                    <AccordionTrigger className="px-4 md:px-5 py-3 md:py-4 hover:no-underline group">
                      <div className="flex items-center gap-3 md:gap-4 text-left">
                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br ${faq.gradient} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                          <faq.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <span className="font-medium text-sm md:text-base text-foreground/90 group-hover:text-primary transition-colors duration-300">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 md:px-5 pb-4 md:pb-5">
                      <div className="pl-11 md:pl-14">
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: CTA ========== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50/50 to-white" />
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle, hsl(21 90% 48%) 1px, transparent 1px)`,
        backgroundSize: "40px 40px"
      }} />
        
        {/* Floating accents */}
        <motion.div className="absolute top-20 left-[10%] w-48 h-48 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity
      }} />
        <motion.div className="absolute bottom-20 right-[15%] w-56 h-56 rounded-full bg-gradient-to-tl from-amber-400/10 to-transparent blur-3xl" animate={{
        scale: [1.1, 1, 1.1],
        opacity: [0.4, 0.6, 0.4]
      }} transition={{
        duration: 10,
        repeat: Infinity
      }} />
        
        <div className="container-neo relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-foreground mb-6">
                Sāc ar skaidru <span className="text-gradient-orange">reklāmas stratēģiju</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 leading-relaxed">
                Maksas reklāma strādā tikai tad, ja ir skaidrs mērķis, struktūra un mērījumi.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                <motion.div whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className="inline-block">
                  <Button variant="hero" size="xl" className="shadow-xl hover:shadow-2xl transition-all duration-300">
                    Uzzini kā attīstīties
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>;
}