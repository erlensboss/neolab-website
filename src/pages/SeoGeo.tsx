import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Search, 
  MapPin, 
  BarChart3, 
  FileText, 
  Layers, 
  ArrowRight,
  CheckCircle2,
  Target,
  Globe,
  TrendingUp,
  Navigation,
  Radio
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const diagnosticsSteps = [
  { icon: Layers, label: "Tehniskais audits", description: "Pilna vietnes analīze" },
  { icon: FileText, label: "Satura inventārs", description: "Kas strādā, kas nē" },
  { icon: Target, label: "Konkurentu izpēte", description: "Tirgus pozicionēšana" },
  { icon: BarChart3, label: "Ranku analīze", description: "Esošās pozīcijas" },
];

const scenarios = [
  {
    title: "E-komercija",
    problem: "Produktu lapas neindeksējas pareizi",
    solution: "Tehniskā optimizācija + strukturēti dati",
    result: "3x organiskais trafiks",
  },
  {
    title: "Lokāls bizness",
    problem: "Neatrodami meklētājos savā pilsētā",
    solution: "GEO optimizācija + GMB stratēģija",
    result: "Top 3 lokālajos rezultātos",
  },
  {
    title: "B2B pakalpojumi",
    problem: "Augsts bounce rate, zems engagement",
    solution: "Satura pārstrukturēšana + piltuves būvēšana",
    result: "45% lead pieaugums",
  },
];

const geoFeatures = [
  "Google My Business optimizācija",
  "Lokālo atsauksmju stratēģija",
  "NAP konsistence",
  "Lokālais satura mārketings",
  "Ģeogrāfiski mērķētas lapas",
  "Strukturēti dati lokālajam biznesam",
];

const metrics = [
  { metric: "Organiskais trafiks", icon: TrendingUp, description: "Apmeklētāju plūsma no meklētājiem" },
  { metric: "Keyword pozīcijas", icon: Search, description: "Ranki mērķa atslēgvārdiem" },
  { metric: "Konversijas no SEO", icon: Target, description: "Leads un pārdošanas" },
  { metric: "Domēna autoritāte", icon: BarChart3, description: "Vietnes uzticamība" },
];

export default function SeoGeo() {
  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: Diagnosis First (Not Hero) ========== */}
      <section className="bg-gradient-hero">
        <div className="container-neo section-padding relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: Diagnostic intro */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <span className="chip-outline mb-6 inline-block">Diagnostika vispirms</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="mb-6">
                  SEO bez <span className="text-gradient-orange">minēšanas</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg text-muted-foreground mb-8">
                  Pirms jebkādas optimizācijas — pilna sistēmas diagnoze. 
                  Mēs nedarām SEO "jo tā vajag". Mēs zinām, kāpēc katrs solis ir nepieciešams.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <Link to="/bezmaksas-konsultacija">
                  <Button variant="hero" size="lg">
                    Saņemt bezmaksas auditu
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>

            {/* Right: Diagnostic steps as layered cards */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {diagnosticsSteps.map((step, index) => (
                  <ScrollReveal key={step.label} delay={0.2 + index * 0.1} direction="right">
                    <div className="glass-warm rounded-xl p-5 flex items-center gap-5 hover-lift">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{step.label}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      <div className="text-5xl font-bold text-primary/10">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: SEO System Layers ========== */}
      <section className="section-offwhite">
        <div className="container-neo section-padding">
          <SectionHeading
            chip="Sistēmas pieeja"
            title="SEO kā slāņu sistēma"
            description="Katrs slānis būvējas uz iepriekšējā. Nav shortcut — ir process."
            className="mb-16 max-w-2xl"
          />

          {/* Stacked layers visualization */}
          <div className="max-w-3xl mx-auto">
            {[
              { layer: "Rezultāti", color: "bg-primary", desc: "Rankings, trafiks, konversijas" },
              { layer: "Saturs", color: "bg-primary/80", desc: "Stratēģisks, mērķēts, vērtīgs" },
              { layer: "Struktūra", color: "bg-primary/60", desc: "Saites, hierarhija, UX" },
              { layer: "Tehnika", color: "bg-primary/40", desc: "Ātrums, crawlability, indexing" },
              { layer: "Pamati", color: "bg-primary/20", desc: "Audits, izpēte, stratēģija" },
            ].map((item, index) => (
              <ScrollReveal key={item.layer} delay={index * 0.1}>
                <motion.div
                  initial={{ scaleX: 0.8 + index * 0.05 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  className={`
                    ${item.color} rounded-xl mb-2 p-6 text-center
                    ${index < 3 ? "text-primary-foreground" : "text-foreground"}
                  `}
                  style={{ marginLeft: `${index * 2}%`, marginRight: `${index * 2}%` }}
                >
                  <div className="font-semibold text-lg">{item.layer}</div>
                  <div className={`text-sm ${index < 3 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {item.desc}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: Scenarios → Solutions → Results ========== */}
      <section className="section-warm">
        <div className="container-neo section-padding">
          <SectionHeading
            chip="Scenāriji"
            title="Reālas situācijas. Reāli rezultāti."
            className="mb-16"
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <ScrollReveal key={scenario.title} delay={index * 0.15}>
                <div className="card-neo h-full flex flex-col">
                  <span className="chip mb-4">{scenario.title}</span>
                  
                  <div className="space-y-4 flex-1">
                    <div>
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                        Problēma
                      </div>
                      <p className="text-foreground">{scenario.problem}</p>
                    </div>
                    
                    <div className="border-l-2 border-primary/30 pl-4">
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                        Risinājums
                      </div>
                      <p className="text-foreground">{scenario.solution}</p>
                    </div>
                    
                    <div className="bg-primary/5 rounded-lg p-4">
                      <div className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                        Rezultāts
                      </div>
                      <p className="text-2xl font-bold text-primary">{scenario.result}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: GEO Optimization (Enhanced Visual) ========== */}
      <section className="section-offwhite grid-overlay-subtle">
        <div className="container-neo section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Map/Location visual */}
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-[4/3] w-full bg-gradient-section rounded-2xl p-8 relative overflow-hidden border border-border shadow-card">
                  {/* Grid lines - more structured */}
                  <div className="absolute inset-0">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      {/* Horizontal grid lines */}
                      {[50, 100, 150, 200, 250].map((y) => (
                        <motion.line
                          key={`h-${y}`}
                          x1="0" y1={y} x2="400" y2={y}
                          stroke="hsl(21 90% 48%)" strokeWidth="0.5" opacity="0.1"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1 }}
                        />
                      ))}
                      {/* Vertical grid lines */}
                      {[50, 100, 150, 200, 250, 300, 350].map((x) => (
                        <motion.line
                          key={`v-${x}`}
                          x1={x} y1="0" x2={x} y2="300"
                          stroke="hsl(21 90% 48%)" strokeWidth="0.5" opacity="0.1"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      ))}
                      
                      {/* Main radius zones */}
                      <motion.circle
                        cx="200" cy="140" r="40"
                        fill="none"
                        stroke="hsl(21 90% 48%)"
                        strokeWidth="2"
                        opacity="0.3"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      />
                      <motion.circle
                        cx="200" cy="140" r="80"
                        fill="none"
                        stroke="hsl(21 90% 48%)"
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                        opacity="0.2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      />
                      <motion.circle
                        cx="200" cy="140" r="120"
                        fill="none"
                        stroke="hsl(21 90% 48%)"
                        strokeWidth="1"
                        strokeDasharray="4 6"
                        opacity="0.15"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                      />
                      
                      {/* Connection lines to secondary locations */}
                      <motion.path
                        d="M 200 140 L 80 80"
                        stroke="hsl(21 90% 48%)"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                        opacity="0.25"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      />
                      <motion.path
                        d="M 200 140 L 320 100"
                        stroke="hsl(21 90% 48%)"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                        opacity="0.25"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                      />
                      <motion.path
                        d="M 200 140 L 150 220"
                        stroke="hsl(21 90% 48%)"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                        opacity="0.25"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1 }}
                      />
                      <motion.path
                        d="M 200 140 L 300 200"
                        stroke="hsl(21 90% 48%)"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                        opacity="0.25"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                      />
                    </svg>
                  </div>
                  
                  {/* Central main location */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-gradient-orange flex items-center justify-center shadow-orange">
                        <MapPin className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-primary/30"
                      />
                    </div>
                  </motion.div>
                  
                  {/* Secondary locations */}
                  {[
                    { x: "18%", y: "22%", delay: 0.7 },
                    { x: "78%", y: "30%", delay: 0.8 },
                    { x: "35%", y: "72%", delay: 0.9 },
                    { x: "72%", y: "65%", delay: 1.0 },
                  ].map((loc, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: loc.delay, type: "spring" }}
                      style={{ left: loc.x, top: loc.y }}
                      className="absolute"
                    >
                      <div className="w-8 h-8 rounded-full bg-card border-2 border-primary/40 flex items-center justify-center shadow-neo">
                        <Navigation className="w-4 h-4 text-primary" />
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Signal indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-4 right-4 flex items-center gap-2 bg-card/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border"
                  >
                    <Radio className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-foreground">5 km rādiuss</span>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>

            {/* GEO content */}
            <div>
              <ScrollReveal>
                <span className="chip mb-4 inline-block">
                  <Globe className="w-3 h-3 inline mr-1" />
                  GEO Optimizācija
                </span>
                <h2 className="mb-6">Esiet atrasti tur, kur tas svarīgi</h2>
                <p className="text-muted-foreground mb-8">
                  Lokālā meklēšana ir īpaša disciplīna. Mēs palīdzam jums dominēt 
                  savā ģeogrāfiskajā zonā — no Google Maps līdz lokāliem rezultātiem.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {geoFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: Data-Inspired Metrics (Enhanced Cards) ========== */}
      <section className="section-warm">
        <div className="container-neo section-padding">
          <SectionHeading
            chip="Analītika"
            title="Ko mēs sekojam"
            description="Ne tukši skaitļi. Metrikas, kas tiešām ietekmē jūsu biznesu."
            className="mb-16 text-center mx-auto"
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((item, index) => (
              <ScrollReveal key={item.metric} delay={index * 0.1}>
                <div className="card-neo text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-orange flex items-center justify-center mx-auto mb-5 shadow-orange">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{item.metric}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: CTA ========== */}
      <section className="bg-gradient-hero">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="mb-6">
                Gatavi uzlabot <span className="text-gradient-orange">organisko redzamību</span>?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-muted-foreground mb-8">
                Sāksim ar bezmaksas auditu. Jūs redzēsiet precīzi, kur ir iespējas uzlabojumiem.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link to="/bezmaksas-konsultacija">
                <Button variant="hero" size="xl">
                  Pieprasīt bezmaksas SEO auditu
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
