import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, Target, BarChart3, ArrowRight, AlertTriangle, Eye, DollarSign, PieChart, Activity, Gauge, MousePointer, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
const controlProblems = ["Nezināt, kura kampaņa tiešām nes peļņu", "Aģentūras atskaites, ko neviens nesaprot", "Budžets, kas iztukšojas bez skaidra ROI", "A/B testi bez reāla mācīšanās"];
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
  title: "Atribūcijas modelēšana",
  description: "Ziniet precīzi, kura saskarsme noveda pie pirkuma"
}, {
  icon: Gauge,
  title: "Real-time monitorings",
  description: "Signāli, kas brīdina pirms budžets ir iztērēts"
}, {
  icon: DollarSign,
  title: "Budžeta optimizācija",
  description: "Dinamiska pārdale uz labāk strādājošiem kanāliem"
}, {
  icon: ShoppingCart,
  title: "Pilna piltuve",
  description: "No apzināšanās līdz pirkumam — viss redzams"
}];
export default function PerformanceReklama() {
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
                  Maksas reklāmu{" "}
                  <span className="relative inline-block">
                    <span className="text-gradient-orange">pārvalde</span>
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
                  Maksas reklāmas risinājumi, kas fokusējas uz pieprasījuma piesaisti, konversijām un izmērāmu rezultātu vairākos kanālos.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/bezmaksas-konsultacija">
                    <Button variant="hero" size="lg" className="group">
                      Sākt sadarbību
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
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gradient-to-br from-primary/8 to-amber-200/5 blur-3xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-neo relative z-10">
          {/* Section header */}
          <ScrollReveal className="max-w-3xl mb-14 md:mb-20">
            <span className="chip mb-4 inline-block">Jūsu situācija</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Kādiem uzņēmumiem un kādos gadījumos maksas reklāma ir piemērota
            </h2>
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
                    {[
                      { text: "Uzņēmumam ir konkrēts pakalpojums vai produkts", icon: Target },
                      { text: "Nepieciešams ātri piesaistīt pieprasījumu", icon: TrendingUp },
                      { text: "Tirgū jau notiek aktīva meklēšana vai interese", icon: Eye },
                      { text: "Ir vēlme testēt jaunu piedāvājumu vai virzienu", icon: Activity },
                      { text: "Ir noteikts un kontrolējams reklāmas budžets", icon: DollarSign },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.08 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border-l-3 border-primary/40 hover:border-primary/70 hover:from-primary/8 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-foreground font-medium pt-2">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right side - Segments & CTA */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Target segments card */}
              <ScrollReveal delay={0.2}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="relative rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-amber-50/50 border border-primary/15 p-8 md:p-10 overflow-hidden"
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/15 to-transparent rounded-bl-full" />
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-5">Īpaši efektīva maksas reklāma:</h3>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Pakalpojumu uzņēmumiem", color: "from-primary/20 to-primary/10" },
                        { label: "E-komercijai", color: "from-amber-100 to-amber-50" },
                        { label: "B2B segmentam", color: "from-blue-100/80 to-blue-50/50" },
                        { label: "Lokāliem pakalpojumiem", color: "from-green-100/80 to-green-50/50" },
                      ].map((segment, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className={`px-4 py-3 rounded-xl bg-gradient-to-br ${segment.color} border border-border/50 text-center`}
                        >
                          <span className="text-sm font-medium text-foreground">{segment.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* Welcoming CTA card */}
              <ScrollReveal delay={0.3}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="relative rounded-2xl bg-foreground/[0.03] border border-border p-8 md:p-10 overflow-hidden flex-1"
                >
                  <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium text-muted-foreground">Atpazīstat sevi?</span>
                    </div>
                    
                    <p className="text-foreground mb-6 flex-1">
                      Ja kaut viens no šiem punktiem atbilst jūsu situācijai — maksas reklāma var būt pareizais solis.
                    </p>
                    
                    <Link to="/bezmaksas-konsultacija">
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

      {/* ========== SECTION 4: Strategy Over Hacks ========== */}
      <section className="section-offwhite grid-full-bleed">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="border-l-4 border-primary pl-10 py-6 mb-14">
                <blockquote className="text-3xl md:text-4xl font-medium text-foreground leading-relaxed">
                  "Mēs neredzam reklāmu kā izdevumu. Mēs redzam to kā 
                  <span className="text-gradient-orange"> sistēmu, kas ģenerē ieņēmumus</span>."
                </blockquote>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-10">
              {[{
              label: "Vidējais ROAS",
              value: "4.8x"
            }, {
              label: "Budžeta efektivitāte",
              value: "+65%"
            }, {
              label: "Klientu saglabāšana",
              value: "92%"
            }].map((stat, index) => <ScrollReveal key={stat.label} delay={index * 0.1}>
                  <div className="text-center p-8 bg-card rounded-2xl border border-border">
                    <div className="text-5xl font-bold text-primary mb-3">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </ScrollReveal>)}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: CTA ========== */}
      <section className="bg-gradient-hero section-full-bleed">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="mb-8">
                Atgūstiet <span className="text-gradient-orange">kontroli</span> pār reklāmas budžetu
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl text-muted-foreground mb-10">
                Bezmaksas audits parādīs, kur jūsu budžets strādā un kur tas aizplūst.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link to="/bezmaksas-konsultacija">
                <Button variant="hero" size="xl">
                  Pieprasīt performance auditu
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>;
}