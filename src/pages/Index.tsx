import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Search, 
  Brain, 
  TrendingUp, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Workflow,
  Target,
  BarChart3,
  Database,
  LineChart,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

// Problem-first opening data
const chaosProblems = [
  "Desmitiem rīku bez vienotas sistēmas",
  "AI risinājumi bez stratēģijas",
  "Dati, kas nekad netiek izmantoti",
  "Kampaņas bez skaidra virziena",
];

// Service directions with unique layouts
const services = [
  {
    id: "seo",
    title: "SEO & GEO",
    description: "Organiskā redzamība ar sistēmisku pieeju",
    icon: Search,
    chip: "Analītika",
    path: "/seo-un-geo",
    features: ["Tehniskais audits", "Satura stratēģija", "Lokālā optimizācija"],
  },
  {
    id: "ai",
    title: "AI Automatizācijas",
    description: "Manuālā darba transformācija inteliģentās sistēmās",
    icon: Brain,
    chip: "Sistēmas",
    path: "/ai-automatizacija",
    features: ["Darba plūsmas", "Integrācijas", "Pašmācīšanās"],
  },
  {
    id: "ads",
    title: "Digitālā reklāma",
    description: "Performance ar pilnu kontroli un signāliem",
    icon: TrendingUp,
    chip: "Performance",
    path: "/performance-reklama",
    features: ["Meta Ads", "Google Ads", "Atribūcija"],
  },
  {
    id: "lab",
    title: "AI Lab",
    description: "Eksperimentāla telpa nākotnes risinājumiem",
    icon: Zap,
    chip: "Izpēte",
    path: "/ai-lab",
    features: ["Prototipi", "Testēšana", "Inovācijas"],
  },
];

// Client reality problems
const clientProblems = [
  {
    problem: "Mārketinga haoss",
    detail: "Kampaņas darbojas, bet neviens īsti nezina kāpēc vai cik labi.",
  },
  {
    problem: "Datu pārpilnība",
    detail: "Analītika ir, bet insights — nav. Skaitļi bez konteksta.",
  },
  {
    problem: "AI sajukums",
    detail: "Visi runā par AI, bet konkrēti pielietojumi nav skaidri.",
  },
  {
    problem: "Aģentūru vilšanās",
    detail: "Iepriekšējā pieredze ar aģentūrām nav atstājusi labu iespaidu.",
  },
];

// Process steps
const processSteps = [
  { step: "01", title: "Diagnostika", description: "Sistēmas analīze" },
  { step: "02", title: "Stratēģija", description: "Personalizēts plāns" },
  { step: "03", title: "Implementācija", description: "Precīza izpilde" },
  { step: "04", title: "Optimizācija", description: "Nepārtraukta uzlabošana" },
];

// System nodes for the RIGHT side hero visual
const systemNodes = [
  { id: "seo", label: "SEO", icon: Search, x: 15, y: 12 },
  { id: "ads", label: "Ads", icon: BarChart3, x: 75, y: 8 },
  { id: "ai", label: "AI", icon: Brain, x: 85, y: 50 },
  { id: "crm", label: "CRM", icon: Database, x: 10, y: 55 },
  { id: "data", label: "Data", icon: LineChart, x: 45, y: 85 },
];

export default function Index() {
  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: Hero with RIGHT-side System Visual ========== */}
      <section className="bg-gradient-hero min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="container-neo section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Problem Statement — text always readable */}
            <div className="relative z-10">
              <ScrollReveal>
                <span className="chip-outline mb-6 inline-block">Realitāte</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="mb-6">
                  Jūsu digitālais mārketings ir <span className="text-gradient-orange">fragmentēts</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  Rīki, kas nerunā savā starpā. Dati bez insights. AI bez stratēģijas. 
                  Kampaņas bez vienotas sistēmas.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <ul className="space-y-3 mb-8">
                  {chaosProblems.map((problem, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {problem}
                    </motion.li>
                  ))}
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/bezmaksas-konsultacija">
                    <Button variant="hero" size="lg">
                      Sākt sarunu
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: LARGE System Diagram — intentional, dominant, centered */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="relative">
                <div className="relative aspect-square w-full max-w-lg mx-auto">
                  {/* Background circles - concentric rings */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    {/* Outer ring */}
                    <motion.circle
                      cx="200" cy="200" r="180"
                      fill="none"
                      stroke="hsl(21 90% 48%)"
                      strokeWidth="1"
                      strokeDasharray="4 8"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.15, scale: 1 }}
                      transition={{ duration: 1.5 }}
                    />
                    {/* Middle ring */}
                    <motion.circle
                      cx="200" cy="200" r="130"
                      fill="none"
                      stroke="hsl(21 90% 48%)"
                      strokeWidth="1.5"
                      strokeDasharray="6 4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.2, scale: 1 }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                    />
                    {/* Inner ring */}
                    <motion.circle
                      cx="200" cy="200" r="80"
                      fill="none"
                      stroke="hsl(21 90% 48%)"
                      strokeWidth="2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.25, scale: 1 }}
                      transition={{ duration: 1.5, delay: 0.4 }}
                    />
                    
                    {/* Connection lines from nodes to center */}
                    <motion.path
                      d="M 70 60 Q 130 120 200 200"
                      fill="none"
                      stroke="hsl(21 90% 48%)"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ duration: 1.5, delay: 0.6 }}
                    />
                    <motion.path
                      d="M 320 50 Q 270 120 200 200"
                      fill="none"
                      stroke="hsl(21 90% 48%)"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                    />
                    <motion.path
                      d="M 350 210 Q 280 210 200 200"
                      fill="none"
                      stroke="hsl(21 90% 48%)"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ duration: 1.5, delay: 1 }}
                    />
                    <motion.path
                      d="M 50 230 Q 120 220 200 200"
                      fill="none"
                      stroke="hsl(21 90% 48%)"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                    />
                    <motion.path
                      d="M 190 350 Q 195 280 200 200"
                      fill="none"
                      stroke="hsl(21 90% 48%)"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ duration: 1.5, delay: 1.4 }}
                    />
                  </svg>
                  
                  {/* System nodes positioned around */}
                  {systemNodes.map((node, i) => (
                    <motion.div
                      key={node.id}
                      className="absolute"
                      style={{ left: `${node.x}%`, top: `${node.y}%` }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.15, type: "spring", stiffness: 100 }}
                    >
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                        className="glass-warm p-4 rounded-xl shadow-card border border-white/40"
                      >
                        <node.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <span className="text-xs font-medium text-foreground/70 mt-2 block text-center">
                        {node.label}
                      </span>
                    </motion.div>
                  ))}
                  
                  {/* Central NEO hub - perfectly centered */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 80 }}
                  >
                    <div className="relative">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-6 border-2 border-dashed border-primary/20 rounded-full"
                      />
                      <div className="w-20 h-20 rounded-full bg-gradient-orange flex items-center justify-center shadow-orange">
                        <Workflow className="w-9 h-9 text-primary-foreground" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: NEOLab Perspective ========== */}
      <section className="bg-gradient-section relative">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="chip mb-6 inline-block">NEOLab pieeja</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="mb-8">
                Jauna ēra <span className="text-gradient-orange">optimizācijai</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Mēs neesam tipiskas aģentūras. Mēs esam sistēmas domātāji — jauni, gudri, 
                neatlaidīgi un unikāli. Mēs savienojam AI tehnoloģijas ar stratēģisku 
                domāšanu, radot personalizētus risinājumus katram klientam.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/bezmaksas-konsultacija">
                  <Button variant="hero" size="lg">
                    Sākt sarunu
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/par-mums">
                  <Button variant="hero-outline" size="lg">
                    Uzzināt vairāk
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: What NEOLab Does — Aligned & Reactive ========== */}
      <section className="section-offwhite">
        <div className="container-neo section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* System Diagram — with hover reactivity */}
            <ScrollReveal>
              <motion.div 
                className="relative bg-card rounded-2xl p-8 shadow-card border border-border"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Orange accent line on hover */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-orange rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "60%" }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="flex flex-col items-center">
                  {/* Top row */}
                  <div className="flex items-center justify-center gap-6 mb-4">
                    <motion.div 
                      className="glass-warm px-5 py-3 rounded-lg text-sm font-medium flex items-center gap-2"
                      whileHover={{ scale: 1.05, boxShadow: "0 8px 30px hsla(21, 90%, 48%, 0.15)" }}
                    >
                      <Search className="w-4 h-4 text-primary" />
                      SEO
                    </motion.div>
                    <div className="w-10 h-px bg-primary/30" />
                    <motion.div 
                      className="glass-warm px-5 py-3 rounded-lg text-sm font-medium flex items-center gap-2"
                      whileHover={{ scale: 1.05, boxShadow: "0 8px 30px hsla(21, 90%, 48%, 0.15)" }}
                    >
                      <TrendingUp className="w-4 h-4 text-primary" />
                      Ads
                    </motion.div>
                  </div>
                  
                  {/* Connectors */}
                  <div className="flex justify-center gap-24">
                    <motion.div 
                      className="w-px h-10 bg-primary/30"
                      whileHover={{ backgroundColor: "hsl(21 90% 48% / 0.5)" }}
                    />
                    <motion.div 
                      className="w-px h-10 bg-primary/30"
                      whileHover={{ backgroundColor: "hsl(21 90% 48% / 0.5)" }}
                    />
                  </div>
                  
                  {/* Center: NEO System */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    className="bg-gradient-orange text-primary-foreground px-8 py-5 rounded-xl font-semibold shadow-orange my-4"
                  >
                    <Workflow className="w-5 h-5 inline mr-2" />
                    NEO Sistēma
                  </motion.div>
                  
                  {/* Bottom connectors */}
                  <div className="flex justify-center gap-24">
                    <div className="w-px h-10 bg-primary/30" />
                    <div className="w-px h-10 bg-primary/30" />
                  </div>
                  
                  {/* Bottom row */}
                  <div className="flex items-center justify-center gap-6 mt-4">
                    <motion.div 
                      className="glass-warm px-5 py-3 rounded-lg text-sm font-medium flex items-center gap-2"
                      whileHover={{ scale: 1.05, boxShadow: "0 8px 30px hsla(21, 90%, 48%, 0.15)" }}
                    >
                      <Brain className="w-4 h-4 text-primary" />
                      AI
                    </motion.div>
                    <div className="w-10 h-px bg-primary/30" />
                    <motion.div 
                      className="glass-warm px-5 py-3 rounded-lg text-sm font-medium flex items-center gap-2"
                      whileHover={{ scale: 1.05, boxShadow: "0 8px 30px hsla(21, 90%, 48%, 0.15)" }}
                    >
                      <Target className="w-4 h-4 text-primary" />
                      Stratēģija
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Explanation — properly aligned with visual */}
            <div className="flex flex-col justify-center">
              <SectionHeading
                chip="Sistēmas domāšana"
                title="Viss savienots vienā ekosistēmā"
                description="Mēs neredzam SEO, reklāmas un AI kā atsevišķus pakalpojumus. Tie ir vienas sistēmas elementi, kas pastiprina viens otru."
                className="mb-8"
              />
              <ScrollReveal delay={0.2}>
                <ul className="space-y-4">
                  {[
                    "SEO dati informē reklāmas stratēģiju",
                    "AI automatizē manuālos procesus",
                    "Reklāmas signāli uzlabo SEO prioritātes",
                    "Viss optimizēts kopējam mērķim",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: Client Reality ========== */}
      <section className="section-warm">
        <div className="container-neo section-padding">
          <SectionHeading
            chip="Klientu realitāte"
            title="Pazīstamas problēmas?"
            description="Mēs dzirdam šīs lietas katru dienu. Tās nav unikālas — bet risinājumi ir."
            className="mb-16 max-w-2xl"
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            {clientProblems.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="card-bordered">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">{item.problem}</h3>
                      <p className="text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: Service Directions ========== */}
      <section className="section-offwhite">
        <div className="container-neo section-padding">
          <SectionHeading
            chip="Pakalpojumi"
            title="Četri virzieni. Viena sistēma."
            className="mb-16 text-center mx-auto"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.1}>
                <Link to={service.path} className="group block h-full">
                  <div className="card-neo h-full group-hover:border-primary/30">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <span className="chip text-xs">{service.chip}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span key={feature} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: Brand Moment ========== */}
      <section className="section-gray grid-overlay-subtle">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="border-l-4 border-primary pl-8 py-4">
                <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
                  "Mēs neesam aģentūra, kas pārdod stundas.
                  <br />
                  <span className="text-gradient-orange">Mēs esam partneri, kas būvē sistēmas.</span>"
                </blockquote>
                <p className="mt-6 text-muted-foreground">
                  — NEOLab filozofija
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: How We Work ========== */}
      <section className="section-offwhite overflow-hidden">
        <div className="container-neo section-padding">
          <SectionHeading
            chip="Process"
            title="Kā mēs strādājam"
            description="Strukturēta pieeja ar skaidriem soļiem un nepārtrauktu uzlabošanu."
            className="mb-16"
          />
          
          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-4 md:grid md:grid-cols-4 md:gap-8 min-w-max md:min-w-0">
              {processSteps.map((step, index) => (
                <ScrollReveal key={step.step} delay={index * 0.1} direction="up">
                  <div className="relative flex flex-col items-center w-48 md:w-auto">
                    <div className="w-14 h-14 rounded-full bg-gradient-orange text-primary-foreground flex items-center justify-center font-bold text-lg shadow-orange mb-4">
                      {step.step}
                    </div>
                    
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-primary/20" />
                    )}
                    
                    <h4 className="font-semibold text-lg mb-1 text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground text-center">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 8: Final CTA ========== */}
      <section className="bg-gradient-hero">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="mb-6 text-foreground">
                Gatavi sākt <span className="text-gradient-orange">jaunu nodaļu</span>?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-muted-foreground mb-8">
                Bezmaksas konsultācija bez saistībām. Izrunāsim jūsu situāciju 
                un redzēsim, vai varam palīdzēt.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link to="/bezmaksas-konsultacija">
                <Button variant="hero" size="xl">
                  Pieteikties bezmaksas konsultācijai
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
