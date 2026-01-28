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
  TrendingUp
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

export default function SeoGeo() {
  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: Diagnosis First (Not Hero) ========== */}
      <section className="bg-gradient-hero">
        <div className="container-neo section-padding">
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
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{step.label}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      <div className="ml-auto text-4xl font-bold text-primary/10">
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

      {/* ========== SECTION 4: GEO Optimization (Location Focus) ========== */}
      <section className="section-offwhite grid-overlay-subtle">
        <div className="container-neo section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Map/Location visual */}
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto bg-gradient-section rounded-2xl p-8 relative overflow-hidden">
                  {/* Grid lines */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div key={i} className="border border-primary/5" />
                    ))}
                  </div>
                  
                  {/* Location pins */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="absolute top-1/4 left-1/3"
                  >
                    <div className="relative">
                      <MapPin className="w-8 h-8 text-primary" />
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary animate-pulse" />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute top-1/2 right-1/4"
                  >
                    <div className="relative">
                      <MapPin className="w-6 h-6 text-primary/60" />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, type: "spring" }}
                    className="absolute bottom-1/3 left-1/2"
                  >
                    <div className="relative">
                      <MapPin className="w-6 h-6 text-primary/60" />
                    </div>
                  </motion.div>
                  
                  {/* Central area highlight */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-dashed border-primary/30" />
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
                <div className="grid grid-cols-2 gap-3">
                  {geoFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: Data-Inspired Metrics ========== */}
      <section className="section-warm">
        <div className="container-neo section-padding">
          <SectionHeading
            chip="Analītika"
            title="Ko mēs sekojam"
            description="Ne tukši skaitļi. Metrikas, kas tiešām ietekmē jūsu biznesu."
            className="mb-16 text-center mx-auto"
            align="center"
          />

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: "Organiskais trafiks", icon: TrendingUp },
              { metric: "Keyword pozīcijas", icon: Search },
              { metric: "Konversijas no SEO", icon: Target },
              { metric: "Domēna autoritāte", icon: BarChart3 },
            ].map((item, index) => (
              <ScrollReveal key={item.metric} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-medium">{item.metric}</h4>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: CTA ========== */}
      <section className="bg-gradient-hero">
        <div className="container-neo section-padding">
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
