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

const metrics = [
  { metric: "Organiskais trafiks", icon: TrendingUp, description: "Apmeklētāju plūsma no meklētājiem" },
  { metric: "Keyword pozīcijas", icon: Search, description: "Ranki mērķa atslēgvārdiem" },
  { metric: "Konversijas no SEO", icon: Target, description: "Leads un pārdošanas" },
  { metric: "Domēna autoritāte", icon: BarChart3, description: "Vietnes uzticamība" },
];

export default function SeoGeo() {
  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: Diagnosis First ========== */}
      <section className="bg-gradient-hero bg-atmosphere">
        <div className="container-neo section-padding relative z-10">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Left: Diagnostic intro */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <span className="chip-outline mb-8 inline-block text-sm">Diagnostika vispirms</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="mb-8 text-foreground">
                  SEO bez <span className="text-gradient-orange">minēšanas</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-xl text-muted-foreground mb-10">
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

            {/* Right: Diagnostic steps */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {diagnosticsSteps.map((step, index) => (
                  <ScrollReveal key={step.label} delay={0.2 + index * 0.1} direction="right">
                    <div className="glass-warm rounded-2xl p-7 flex items-center gap-6 hover-lift">
                      <div className="w-18 h-18 md:w-20 md:h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-9 h-9 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-xl text-foreground">{step.label}</h4>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                      <div className="text-6xl font-bold text-primary/10">
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

      {/* ========== SECTION 2: What is SEO & GEO ========== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Dynamic background with gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50/50" />
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, hsl(21 90% 48%) 0px, transparent 50%),
              radial-gradient(circle at 80% 70%, hsl(32 90% 55%) 0px, transparent 50%)
            `,
          }}
        />
        
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(21 90% 48%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        
        <div className="container-neo relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="chip mb-6 inline-block text-sm">Pamati</span>
              <h2 className="text-foreground max-w-3xl mx-auto">
                Kas ir <span className="text-gradient-orange">SEO</span> un <span className="text-gradient-orange">GEO</span> optimizācija
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* SEO Card */}
            <ScrollReveal delay={0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Header with icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-orange flex items-center justify-center shadow-orange"
                      whileHover={{ rotate: 5 }}
                    >
                      <Search className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">SEO</h3>
                      <span className="text-sm text-primary font-medium">Meklētājprogrammu optimizācija</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    SEO optimizācija nodrošina uzņēmuma redzamību tradicionālajās meklētājprogrammās, galvenokārt Google, uzlabojot mājaslapas tehnisko kvalitāti, saturu un struktūru. Tā palīdz piesaistīt stabilu, ilgtermiņa organisko datplūsmu.
                  </p>
                  
                  {/* Visual element - search results mockup */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-primary/30 rounded w-2/3 mb-1" />
                        <div className="h-2 bg-gray-200 rounded w-full" />
                      </div>
                    </div>
                    <div className="flex items-center gap-3 opacity-60">
                      <div className="w-8 h-8 rounded-lg bg-gray-100" />
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-1/2 mb-1" />
                        <div className="h-2 bg-gray-100 rounded w-full" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {["Google", "Tehnika", "Saturs", "Ilgtermiņa"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
            
            {/* GEO Card */}
            <ScrollReveal delay={0.2}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-amber-300/30 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Header with icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: -5 }}
                    >
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a10 10 0 0 0 0 20" />
                        <path d="M2 12h20" />
                        <path d="M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10" />
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">GEO</h3>
                      <span className="text-sm text-amber-600 font-medium">Ģeneratīvā meklēšanas optimizācija</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    GEO optimizācija ir nākamais solis meklēšanas attīstībā. Tā fokusējas uz redzamību mākslīgā intelekta balstītos meklējumos un ģeneratīvajās atbildēs, kurās informācija tiek apkopota un interpretēta, nevis vienkārši parādīta kā saišu saraksts.
                  </p>
                  
                  {/* Visual element - AI answer mockup */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200/50">
                    <div className="flex items-start gap-3">
                      <motion.div 
                        className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-white text-xs font-bold">AI</span>
                      </motion.div>
                      <div className="flex-1">
                        <div className="h-2 bg-amber-200/60 rounded w-full mb-2" />
                        <div className="h-2 bg-amber-200/40 rounded w-5/6 mb-2" />
                        <div className="h-2 bg-amber-200/30 rounded w-4/6" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {["AI meklēšana", "ChatGPT", "Gemini", "Nākotne"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
          
          {/* Combined value proposition */}
          <ScrollReveal delay={0.3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative max-w-4xl mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-amber-400/10 to-primary/10 rounded-2xl blur-lg" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-primary/20 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-orange flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Search className="w-5 h-5 text-white" />
                  </motion.div>
                  <div className="text-3xl text-primary font-light">+</div>
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center"
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Globe className="w-5 h-5 text-white" />
                  </motion.div>
                  <div className="text-3xl text-primary font-light">=</div>
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-amber-500 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <TrendingUp className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
                <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                  Apvienojot SEO un GEO, uzņēmums veido redzamību gan <span className="text-primary font-semibold">šodienas</span>, gan <span className="text-amber-600 font-semibold">nākotnes</span> meklēšanas vidēs.
                </p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 3: SEO System Layers ========== */}
      <section className="section-offwhite section-full-bleed">
        <div className="container-neo section-padding relative z-10">
          <SectionHeading
            chip="Sistēmas pieeja"
            title="SEO kā slāņu sistēma"
            description="Katrs slānis būvējas uz iepriekšējā. Nav shortcut — ir process."
            className="mb-20 max-w-3xl"
          />

          <div className="max-w-4xl mx-auto">
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
                    ${item.color} rounded-2xl mb-3 p-8 text-center
                    ${index < 3 ? "text-primary-foreground" : "text-foreground"}
                  `}
                  style={{ marginLeft: `${index * 2}%`, marginRight: `${index * 2}%` }}
                >
                  <div className="font-semibold text-xl">{item.layer}</div>
                  <div className={`text-base ${index < 3 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {item.desc}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: Scenarios ========== */}
      <section className="section-warm bg-atmosphere">
        <div className="container-neo section-padding relative z-10">
          <SectionHeading
            chip="Scenāriji"
            title="Reālas situācijas. Reāli rezultāti."
            className="mb-20"
          />

          <div className="grid lg:grid-cols-3 gap-10">
            {scenarios.map((scenario, index) => (
              <ScrollReveal key={scenario.title} delay={index * 0.15}>
                <div className="card-neo h-full flex flex-col">
                  <span className="chip mb-6 text-sm">{scenario.title}</span>
                  
                  <div className="space-y-6 flex-1">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                        Problēma
                      </div>
                      <p className="text-foreground text-lg">{scenario.problem}</p>
                    </div>
                    
                    <div className="border-l-2 border-primary/30 pl-5">
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                        Risinājums
                      </div>
                      <p className="text-foreground text-lg">{scenario.solution}</p>
                    </div>
                    
                    <div className="bg-primary/5 rounded-xl p-6">
                      <div className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
                        Rezultāts
                      </div>
                      <p className="text-3xl font-bold text-primary">{scenario.result}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: GEO Optimization — CENTERED & ALIGNED ========== */}
      <section className="section-offwhite grid-full-bleed">
        <div className="container-neo section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* GEO Map Visual — CENTERED & LARGER */}
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-square w-full max-w-lg mx-auto bg-card rounded-2xl p-8 relative overflow-hidden border border-border shadow-card">
                  {/* Grid background */}
                  <div 
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage: `
                        linear-gradient(hsl(21 90% 48%) 1px, transparent 1px),
                        linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)
                      `,
                      backgroundSize: "30px 30px",
                    }}
                  />
                  
                  {/* SVG centered visualization */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
                    {/* Radius circles - perfectly centered */}
                    <motion.circle
                      cx="150" cy="150" r="40"
                      fill="hsl(21 90% 48% / 0.1)"
                      stroke="hsl(21 90% 48%)"
                      strokeWidth="2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    />
                    <motion.circle
                      cx="150" cy="150" r="75"
                      fill="none"
                      stroke="hsl(21 90% 48%)"
                      strokeWidth="1.5"
                      strokeDasharray="6 4"
                      opacity="0.4"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                    <motion.circle
                      cx="150" cy="150" r="110"
                      fill="none"
                      stroke="hsl(21 90% 48%)"
                      strokeWidth="1"
                      strokeDasharray="4 6"
                      opacity="0.25"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    
                    {/* Connection lines from center to locations */}
                    {[
                      { x: 60, y: 60 },
                      { x: 240, y: 70 },
                      { x: 70, y: 220 },
                      { x: 230, y: 210 },
                    ].map((loc, i) => (
                      <motion.line
                        key={i}
                        x1="150" y1="150" x2={loc.x} y2={loc.y}
                        stroke="hsl(21 90% 48%)"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                        opacity="0.35"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.7 + i * 0.1 }}
                      />
                    ))}
                  </svg>
                  
                  {/* Central main location pin */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="relative">
                      <div className="w-18 h-18 md:w-20 md:h-20 rounded-full bg-gradient-orange flex items-center justify-center shadow-orange">
                        <MapPin className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-primary/30"
                      />
                    </div>
                  </motion.div>
                  
                  {/* Secondary location nodes - symmetrically positioned */}
                  {[
                    { x: "18%", y: "18%" },
                    { x: "78%", y: "20%" },
                    { x: "20%", y: "72%" },
                    { x: "75%", y: "68%" },
                  ].map((loc, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                      style={{ left: loc.x, top: loc.y }}
                      className="absolute"
                    >
                      <div className="w-10 h-10 rounded-full bg-card border-2 border-primary/40 flex items-center justify-center shadow-neo">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Radius label */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-sm px-4 py-3 rounded-xl border border-border"
                  >
                    <span className="text-sm font-medium text-foreground">5 km rādiuss</span>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>

            {/* GEO content */}
            <div className="flex flex-col justify-center">
              <ScrollReveal>
                <span className="chip mb-6 inline-block text-sm">
                  <Globe className="w-4 h-4 inline mr-1" />
                  GEO Optimizācija
                </span>
                <h2 className="mb-8 text-foreground">Esiet atrasti tur, kur tas svarīgi</h2>
                <p className="text-muted-foreground text-lg mb-10">
                  Lokālā meklēšana ir īpaša disciplīna. Mēs palīdzam jums dominēt 
                  savā ģeogrāfiskajā zonā — no Google Maps līdz lokāliem rezultātiem.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {geoFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: Metrics — LARGER CARD BLOCKS ========== */}
      <section className="section-warm section-full-bleed">
        <div className="container-neo section-padding relative z-10">
          <SectionHeading
            chip="Analītika"
            title="Ko mēs sekojam"
            description="Ne tukši skaitļi. Metrikas, kas tiešām ietekmē jūsu biznesu."
            className="mb-20 text-center mx-auto"
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((item, index) => (
              <ScrollReveal key={item.metric} delay={index * 0.1}>
                <div className="card-neo text-center h-full">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="font-semibold text-xl mb-3 text-foreground">{item.metric}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: CTA ========== */}
      <section className="bg-gradient-hero section-full-bleed">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="mb-8 text-foreground">
                Gatavi uzlabot <span className="text-gradient-orange">organisko redzamību</span>?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl text-muted-foreground mb-10">
                Bezmaksas audits parādīs, kur jūsu vietne zaudē pozīcijas un ko darīt tālāk.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link to="/bezmaksas-konsultacija">
                <Button variant="hero" size="xl">
                  Pieprasīt SEO auditu
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
