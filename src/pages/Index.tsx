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
  Settings2
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

export default function Index() {
  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: Problem-First Opening ========== */}
      <section className="bg-gradient-hero grid-overlay min-h-[80vh] flex items-center">
        <div className="container-neo section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Problem Statement */}
            <div>
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
                      className="flex items-center gap-3 text-foreground/80"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {problem}
                    </motion.li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            {/* Right: Abstract System Diagram */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="relative">
                {/* Fragmented system visualization */}
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Central chaos node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-muted border-2 border-dashed border-primary/30 flex items-center justify-center"
                  >
                    <span className="text-2xl">?</span>
                  </motion.div>
                  
                  {/* Scattered nodes */}
                  {[
                    { x: "10%", y: "20%", icon: Search, label: "SEO" },
                    { x: "75%", y: "15%", icon: BarChart3, label: "Ads" },
                    { x: "85%", y: "60%", icon: Brain, label: "AI" },
                    { x: "15%", y: "70%", icon: Settings2, label: "CRM" },
                  ].map((node, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.15 }}
                      style={{ left: node.x, top: node.y }}
                      className="absolute"
                    >
                      <div className="glass-warm p-3 rounded-xl shadow-card">
                        <node.icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <span className="text-xs text-muted-foreground mt-1 block text-center">
                        {node.label}
                      </span>
                    </motion.div>
                  ))}

                  {/* Disconnected lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                    <motion.line
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                      x1="20%" y1="25%" x2="40%" y2="45%"
                      stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"
                    />
                    <motion.line
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                      x1="75%" y1="25%" x2="60%" y2="45%"
                      stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"
                    />
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: NEOLab Perspective (Gradient Transition) ========== */}
      <section className="bg-gradient-section relative">
        <div className="container-neo section-padding">
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

      {/* ========== SECTION 3: What NEOLab Does (Diagram-Driven) ========== */}
      <section className="section-offwhite">
        <div className="container-neo section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* System Diagram */}
            <ScrollReveal>
              <div className="relative bg-card rounded-2xl p-8 shadow-card border border-border">
                <div className="flex flex-col items-center">
                  {/* Top row */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="glass-warm px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                      <Search className="w-4 h-4 text-primary" />
                      SEO
                    </div>
                    <div className="w-8 h-px bg-primary/30" />
                    <div className="glass-warm px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      Ads
                    </div>
                  </div>
                  
                  {/* Connectors */}
                  <div className="flex justify-center gap-20">
                    <div className="w-px h-8 bg-primary/30" />
                    <div className="w-px h-8 bg-primary/30" />
                  </div>
                  
                  {/* Center: NEO System */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-orange text-primary-foreground px-6 py-4 rounded-xl font-semibold shadow-orange my-4"
                  >
                    <Workflow className="w-5 h-5 inline mr-2" />
                    NEO Sistēma
                  </motion.div>
                  
                  {/* Bottom connectors */}
                  <div className="flex justify-center gap-20">
                    <div className="w-px h-8 bg-primary/30" />
                    <div className="w-px h-8 bg-primary/30" />
                  </div>
                  
                  {/* Bottom row */}
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <div className="glass-warm px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                      <Brain className="w-4 h-4 text-primary" />
                      AI
                    </div>
                    <div className="w-8 h-px bg-primary/30" />
                    <div className="glass-warm px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Stratēģija
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Explanation */}
            <div>
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
                      <span>{item}</span>
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
                <div className="card-bordered hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.problem}</h3>
                      <p className="text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: Service Directions (4 Unique Blocks) ========== */}
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
                <Link to={service.path} className="group block">
                  <div className={`
                    card-neo hover-lift h-full transition-all duration-300
                    ${index === 0 ? "md:col-span-1 row-span-1" : ""}
                    group-hover:border-primary/30
                  `}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <span className="chip text-xs">{service.chip}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
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

      {/* ========== SECTION 6: Brand Moment (Editorial) ========== */}
      <section className="section-gray grid-overlay-subtle">
        <div className="container-neo section-padding">
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

      {/* ========== SECTION 7: How We Work (Horizontal Timeline) ========== */}
      <section className="section-offwhite overflow-hidden">
        <div className="container-neo section-padding">
          <SectionHeading
            chip="Process"
            title="Kā mēs strādājam"
            description="Strukturēta pieeja ar skaidriem soļiem un nepārtrauktu uzlabošanu."
            className="mb-16"
          />
          
          {/* Horizontal scrolling timeline on mobile */}
          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-4 md:grid md:grid-cols-4 md:gap-8 min-w-max md:min-w-0">
              {processSteps.map((step, index) => (
                <ScrollReveal key={step.step} delay={index * 0.1} direction="up">
                  <div className="relative flex flex-col items-center w-48 md:w-auto">
                    {/* Step number */}
                    <div className="w-14 h-14 rounded-full bg-gradient-orange text-primary-foreground flex items-center justify-center font-bold text-lg shadow-orange mb-4">
                      {step.step}
                    </div>
                    
                    {/* Connector line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-primary/20" />
                    )}
                    
                    <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
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
        <div className="container-neo section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="mb-6">
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
