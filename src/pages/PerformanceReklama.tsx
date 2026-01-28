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
  ShoppingCart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const controlProblems = [
  "Nezināt, kura kampaņa tiešām nes peļņu",
  "Aģentūras atskaites, ko neviens nesaprot",
  "Budžets, kas iztukšojas bez skaidra ROI",
  "A/B testi bez reāla mācīšanās",
];

const platforms = [
  { name: "Meta Ads", icon: Eye },
  { name: "Google Ads", icon: Target },
  { name: "LinkedIn Ads", icon: MousePointer },
  { name: "TikTok Ads", icon: Activity },
];

const signals = [
  { label: "CTR", value: "2.4%", trend: "up", color: "text-green-600" },
  { label: "CPA", value: "€12.50", trend: "down", color: "text-green-600" },
  { label: "ROAS", value: "4.2x", trend: "up", color: "text-green-600" },
  { label: "Conv. Rate", value: "3.8%", trend: "up", color: "text-green-600" },
];

const approach = [
  {
    icon: PieChart,
    title: "Atribūcijas modelēšana",
    description: "Ziniet precīzi, kura saskarsme noveda pie pirkuma",
  },
  {
    icon: Gauge,
    title: "Real-time monitorings",
    description: "Signāli, kas brīdina pirms budžets ir iztērēts",
  },
  {
    icon: DollarSign,
    title: "Budžeta optimizācija",
    description: "Dinamiska pārdale uz labāk strādājošiem kanāliem",
  },
  {
    icon: ShoppingCart,
    title: "Pilna piltuve",
    description: "No apzināšanās līdz pirkumam — viss redzams",
  },
];

export default function PerformanceReklama() {
  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: Loss of Control ========== */}
      <section className="bg-gradient-hero bg-atmosphere">
        <div className="container-neo section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <ScrollReveal>
                <span className="chip-outline mb-8 inline-flex items-center gap-2 text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  Kontroles zudums
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="mb-8">
                  Reklāmas budžets bez <span className="text-gradient-orange">kontroles</span>?
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-xl text-muted-foreground mb-10">
                  Performance reklāma nav par tērēšanu — tā ir par ieguldījumu ar skaidru atdevi. 
                  Mēs atgriežam kontroli jūsu rokās.
                </p>
              </ScrollReveal>
              
              <ul className="space-y-4 mb-10">
                {controlProblems.map((problem, index) => (
                  <ScrollReveal key={index} delay={0.3 + index * 0.1}>
                    <li className="flex items-start gap-4 text-foreground/80 text-lg">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2.5" />
                      {problem}
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>

            {/* Dashboard preview */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="glass-warm rounded-2xl p-8 md:p-10 shadow-card">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-semibold text-lg">Performance Dashboard</span>
                  <span className="text-sm text-muted-foreground">Live</span>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {signals.map((signal, index) => (
                    <motion.div
                      key={signal.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="bg-card rounded-xl p-5 border border-border"
                    >
                      <div className="text-sm text-muted-foreground mb-2">{signal.label}</div>
                      <div className={`text-2xl font-bold ${signal.color}`}>
                        {signal.value}
                        <TrendingUp className="w-5 h-5 inline ml-2" />
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Mini chart placeholder */}
                <div className="h-32 bg-muted rounded-xl flex items-end justify-around p-3">
                  {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                      className="w-8 bg-gradient-to-t from-primary to-primary/60 rounded-t"
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: Platforms ========== */}
      <section className="section-offwhite section-full-bleed">
        <div className="container-neo section-padding-sm relative z-10">
          <ScrollReveal className="text-center mb-14">
            <span className="chip mb-6 inline-block text-sm">Platformas</span>
            <h3>Mēs strādājam ar</h3>
          </ScrollReveal>
          
          <div className="flex flex-wrap justify-center gap-10">
            {platforms.map((platform, index) => (
              <ScrollReveal key={platform.name} delay={index * 0.1}>
                <div className="flex items-center gap-4 px-8 py-5 bg-card rounded-2xl border border-border shadow-neo">
                  <platform.icon className="w-8 h-8 text-primary" />
                  <span className="font-medium text-lg">{platform.name}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: Our Approach (Signal-Based) ========== */}
      <section className="section-warm bg-atmosphere">
        <div className="container-neo section-padding relative z-10">
          <SectionHeading
            chip="Pieeja"
            title="Signālu vadīta performance"
            description="Mēs nesekojam tikai skaitļiem. Mēs sekojam signāliem, kas prognozē rezultātus."
            className="mb-20"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="card-bordered h-full"
                >
                  <div className="w-18 h-18 md:w-20 md:h-20 rounded-2xl bg-gradient-orange flex items-center justify-center mb-8 shadow-orange">
                    <item.icon className="w-9 h-9 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-lg mb-3">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
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
              {[
                { label: "Vidējais ROAS", value: "4.8x" },
                { label: "Budžeta efektivitāte", value: "+65%" },
                { label: "Klientu saglabāšana", value: "92%" },
              ].map((stat, index) => (
                <ScrollReveal key={stat.label} delay={index * 0.1}>
                  <div className="text-center p-8 bg-card rounded-2xl border border-border">
                    <div className="text-5xl font-bold text-primary mb-3">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
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
    </div>
  );
}
