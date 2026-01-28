import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Search, Brain, TrendingUp, Zap, ArrowRight, 
  Workflow, Target, BarChart3, Database, LineChart, 
  Layers, Settings, CheckCircle2, AlertCircle, Clock,
  FileSearch, Cog, RefreshCw, ChartBar, Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

// Service directions data
const services = [
  {
    id: "ai",
    title: "AI automatizācija",
    description: "AI risinājumi tiek izmantoti procesu automatizācijai, manuālā darba samazināšanai un datu apstrādes uzlabošanai. Risinājumi tiek pielāgoti un izstrādāti atbilstoši uzņēmuma darbības modelim un esošajām sistēmām.",
    icon: Brain,
    path: "/ai-automatizacija",
    color: "from-orange-500 to-amber-500"
  },
  {
    id: "seo",
    title: "SEO un GEO optimizācija",
    description: "SEO darbs ietver tehnisko optimizāciju, satura struktūras uzlabošanu un atslēgvārdu plānošanu. Papildus tiek izmantoti GEO risinājumi, kas palīdz uzlabot redzamību jaunās paaudzes meklēšanas vidēs, tostarp AI balstītos meklējumos.",
    icon: Search,
    path: "/seo-un-geo",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "ads",
    title: "Google Ads pārvaldība",
    description: "Google Ads tiek izmantots kā maksas pieprasījuma piesaistes kanāls. Darbs ietver kampaņu uzstādīšanu, optimizāciju, konversiju izsekošanu un rezultātu analīzi, lai nodrošinātu kontrolējamu un prognozējamu rezultātu.",
    icon: TrendingUp,
    path: "/performance-reklama",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: "lab",
    title: "AI Lab",
    description: "AI Lab ir NEOLab iekšējā attīstības vide jaunu risinājumu testēšanai un pilnveidošanai. Šeit tiek analizētas un veidotas jaunākās tehnoloģijas, kā arī testēts to praktiskais pielietojums uzņēmumu vajadzībām.",
    icon: Zap,
    path: "/ai-lab",
    color: "from-purple-500 to-pink-500"
  }
];

// Problems data
const problems = [
  {
    text: "Procesi tiek papildināti, bet netiek sistemātiski pārskatīti.",
    icon: RefreshCw
  },
  {
    text: "Daļa darbu joprojām tiek veikta manuāli.",
    icon: Clock
  },
  {
    text: "Dati ir pieejami, bet netiek pilnvērtīgi izmantoti lēmumu pieņemšanā.",
    icon: Database
  },
  {
    text: "SEO tiek īstenots bez skaidras struktūras un konsekventas stratēģijas.",
    icon: FileSearch
  },
  {
    text: "Google Ads kampaņas darbojas, bet trūkst pārskatāmas kontroles pār rezultātiem.",
    icon: ChartBar
  }
];

// Process steps
const processSteps = [
  {
    step: "01",
    title: "Izvērtējums",
    description: "Darbs sākas ar sākotnējo uzņēmuma izvērtējumu/auditu."
  },
  {
    step: "02",
    title: "Analīze",
    description: "Tiek analizēta digitālā vide un esošie procesi."
  },
  {
    step: "03",
    title: "Plānošana",
    description: "Definē prioritātes un rīcības plānu."
  },
  {
    step: "04",
    title: "Ieviešana",
    description: "Risinājumi tiek ieviesti pakāpeniski."
  },
  {
    step: "05",
    title: "Optimizācija",
    description: "Rezultāti tiek analizēti un optimizēti."
  }
];

// Hero system nodes
const heroNodes = [
  { id: "ai", label: "AI", icon: Brain, angle: 0 },
  { id: "seo", label: "SEO", icon: Search, angle: 72 },
  { id: "data", label: "Dati", icon: Database, angle: 144 },
  { id: "ads", label: "Ads", icon: BarChart3, angle: 216 },
  { id: "strategy", label: "Stratēģija", icon: Target, angle: 288 }
];

export default function Index() {
  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: HERO — Centered Large System Visual ========== */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Full background atmosphere */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_40%,hsla(21,90%,48%,0.08),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_20%_80%,hsla(35,100%,70%,0.05),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_80%_20%,hsla(21,90%,48%,0.04),transparent)]" />
        </div>
        
        {/* Subtle grid extending full width */}
        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsla(21,90%,48%,0.04)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>

        <div className="container-neo relative z-10 py-20 md:py-28">
          <div className="flex flex-col items-center text-center">
            {/* H1 */}
            <ScrollReveal>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-12 md:mb-16">
                Jauna ēra <span className="text-gradient-orange">optimizācijai</span>
              </h1>
            </ScrollReveal>

            {/* Large Centered System Visual */}
            <ScrollReveal delay={0.2}>
              <div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] mx-auto mb-12 md:mb-16">
                {/* Animated concentric rings */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  {/* Outer ring with dots */}
                  <motion.circle
                    cx="200" cy="200" r="190"
                    fill="none"
                    stroke="hsla(21,90%,48%,0.12)"
                    strokeWidth="1"
                    strokeDasharray="8 12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                  />
                  {/* Middle ring */}
                  <motion.circle
                    cx="200" cy="200" r="140"
                    fill="none"
                    stroke="hsla(21,90%,48%,0.18)"
                    strokeWidth="1.5"
                    strokeDasharray="6 8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                  />
                  {/* Inner ring */}
                  <motion.circle
                    cx="200" cy="200" r="90"
                    fill="none"
                    stroke="hsla(21,90%,48%,0.25)"
                    strokeWidth="2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                  />
                  
                  {/* Connection lines from nodes to center */}
                  {heroNodes.map((node, i) => {
                    const angleRad = (node.angle - 90) * (Math.PI / 180);
                    const outerX = 200 + 165 * Math.cos(angleRad);
                    const outerY = 200 + 165 * Math.sin(angleRad);
                    return (
                      <motion.line
                        key={node.id}
                        x1={outerX}
                        y1={outerY}
                        x2="200"
                        y2="200"
                        stroke="hsla(21,90%,48%,0.2)"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
                      />
                    );
                  })}
                </svg>

                {/* Orbiting nodes */}
                {heroNodes.map((node, i) => {
                  const angleRad = (node.angle - 90) * (Math.PI / 180);
                  const radius = 41.25; // 165/400 * 100 = 41.25%
                  const x = 50 + radius * Math.cos(angleRad);
                  const y = 50 + radius * Math.sin(angleRad);
                  
                  return (
                    <motion.div
                      key={node.id}
                      className="absolute"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.12, type: "spring", stiffness: 100 }}
                    >
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg flex items-center justify-center">
                          <node.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                        </div>
                        <span className="text-xs md:text-sm font-medium text-foreground/70 mt-2">{node.label}</span>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Central NEO hub */}
                <motion.div
                  className="absolute top-1/2 left-1/2"
                  style={{ transform: 'translate(-50%, -50%)' }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 80 }}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Rotating dashed circle */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      className="absolute w-32 h-32 md:w-40 md:h-40 border-2 border-dashed border-primary/20 rounded-full"
                    />
                    {/* Core */}
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-orange flex items-center justify-center shadow-orange">
                      <Workflow className="w-9 h-9 md:w-12 md:h-12 text-primary-foreground" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={0.4}>
              <Link to="/bezmaksas-konsultacija">
                <Button variant="hero" size="xl">
                  Pieteikt konsultāciju
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: Jauna pieeja digitālajai izaugsmei ========== */}
      <section className="relative overflow-hidden">
        {/* Full-bleed warm background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(35,25%,95%)] to-[hsl(30,20%,93%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_10%_50%,hsla(21,90%,48%,0.05),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_90%_50%,hsla(35,100%,70%,0.04),transparent)]" />
        
        <div className="container-neo section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Text Content */}
            <div>
              <ScrollReveal>
                <span className="chip mb-6 inline-block">NEOLab pieeja</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="mb-8">
                  Jauna pieeja <span className="text-gradient-orange">digitālajai izaugsmei</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    NEOLab strādā ar uzņēmumiem, kuri sniedzas pēc pilnveidošanās digitālajā pasaulē. Darbības fokusējas uz digitālo procesu sakārtošanu, tehnoloģiju ieviešanu, radīšanu un ilgtermiņa redzamības uzlabošanu.
                  </p>
                  <p>
                    Katra organizācija ir īpaša, tieši tāpēc NEOLab fokusējas uz personalizētu risinājumu piedāvāšanu un implementēšanu, kas nodrošinātu sekmīgus rezultātus un izaugsmi uzņēmumam.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Visual Elements */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Target, label: "Personalizēti risinājumi" },
                  { icon: Workflow, label: "Sistēmiska pieeja" },
                  { icon: Lightbulb, label: "Inovācijas" },
                  { icon: TrendingUp, label: "Ilgtermiņa izaugsme" }
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="card-neo text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <p className="font-medium text-foreground">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: Digitālie un AI risinājumi ========== */}
      <section className="relative overflow-hidden bg-atmosphere">
        <div className="absolute inset-0 bg-background" />
        
        {/* Extended grid pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-50" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sectionGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsla(21,90%,48%,0.03)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sectionGrid)" />
          </svg>
        </div>

        <div className="container-neo section-padding relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <span className="chip mb-6 inline-block">Ko mēs darām</span>
              <h2 className="mb-8">
                Digitālie un mākslīgā intelekta <span className="text-gradient-orange">risinājumi uzņēmumiem</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                NEOLab nodrošina inovatīvu AI risinājumu ieviešanu, procesu automatizāciju, SEO un GEO optimizāciju, un Google Ads pārvaldību. Mēs risinājumus pielāgojam konkrētai uzņēmuma situācijai, esošajiem procesiem un biznesa mērķiem.
              </p>
            </div>
          </ScrollReveal>

          {/* Large service blocks grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {[
              { icon: Brain, title: "AI risinājumu ieviešana", desc: "Automatizācija un datu apstrāde" },
              { icon: Cog, title: "Procesu automatizācija", desc: "Efektivitātes uzlabošana" },
              { icon: Search, title: "SEO un GEO optimizācija", desc: "Redzamība meklētājos" },
              { icon: BarChart3, title: "Google Ads pārvaldība", desc: "Kontrolējami rezultāti" }
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <motion.div
                  className="card-neo group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-orange flex items-center justify-center flex-shrink-0 shadow-orange group-hover:scale-105 transition-transform">
                      <item.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-foreground">{item.title}</h3>
                      <p className="text-lg text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: Klientu izaicinājumi ========== */}
      <section className="relative overflow-hidden">
        {/* Darker warm background for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,15%,92%)] via-[hsl(28,18%,90%)] to-[hsl(30,15%,92%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_30%_30%,hsla(21,90%,48%,0.06),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_70%_70%,hsla(35,100%,60%,0.04),transparent)]" />
        
        <div className="container-neo section-padding relative z-10">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <span className="chip mb-6 inline-block">Izaicinājumi</span>
              <h2 className="mb-6">
                Ar kādiem izaicinājumiem visbiežāk <span className="text-gradient-orange">saskarās mūsu klienti</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Laika gaitā digitālā vide uzņēmumos kļūst sarežģītāka.
              </p>
            </div>
          </ScrollReveal>

          {/* Problem blocks */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {problems.map((problem, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <motion.div
                  className="bg-white/80 backdrop-blur-sm border border-border rounded-2xl p-8 h-full"
                  whileHover={{ y: -6, boxShadow: "0 16px 50px hsla(21,90%,48%,0.12)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <problem.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">{problem.text}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Closing statement */}
          <ScrollReveal delay={0.4}>
            <div className="bg-gradient-orange rounded-2xl p-8 md:p-12 text-center shadow-orange">
              <p className="text-xl md:text-2xl font-medium text-primary-foreground">
                Rezultātā digitālie kanāli strādā, bet ne pilnā potenciālā.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 5: NEOLab risinājums ========== */}
      <section className="relative overflow-hidden bg-atmosphere">
        <div className="absolute inset-0 bg-background" />
        
        <div className="container-neo section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Diagram/Flow Visual */}
            <ScrollReveal>
              <div className="relative bg-card rounded-3xl p-10 md:p-14 shadow-card border border-border">
                {/* Flow diagram */}
                <div className="space-y-8">
                  {/* Top layer */}
                  <div className="flex items-center justify-between">
                    <motion.div 
                      className="glass-warm px-6 py-4 rounded-xl flex items-center gap-3"
                      whileHover={{ scale: 1.05, boxShadow: "0 8px 30px hsla(21,90%,48%,0.15)" }}
                    >
                      <Layers className="w-6 h-6 text-primary" />
                      <span className="font-medium">Analīze</span>
                    </motion.div>
                    <div className="flex-1 h-px bg-primary/20 mx-4" />
                    <motion.div 
                      className="glass-warm px-6 py-4 rounded-xl flex items-center gap-3"
                      whileHover={{ scale: 1.05, boxShadow: "0 8px 30px hsla(21,90%,48%,0.15)" }}
                    >
                      <Settings className="w-6 h-6 text-primary" />
                      <span className="font-medium">Pielāgošana</span>
                    </motion.div>
                  </div>

                  {/* Connectors */}
                  <div className="flex justify-center">
                    <div className="w-px h-10 bg-primary/20" />
                  </div>

                  {/* Center: NEO System */}
                  <div className="flex justify-center">
                    <motion.div
                      className="bg-gradient-orange text-primary-foreground px-10 py-6 rounded-2xl font-semibold text-lg shadow-orange"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Workflow className="w-6 h-6 inline mr-3" />
                      NEOLab Risinājums
                    </motion.div>
                  </div>

                  {/* Connectors */}
                  <div className="flex justify-center">
                    <div className="w-px h-10 bg-primary/20" />
                  </div>

                  {/* Bottom layer */}
                  <div className="flex items-center justify-between">
                    <motion.div 
                      className="glass-warm px-6 py-4 rounded-xl flex items-center gap-3"
                      whileHover={{ scale: 1.05, boxShadow: "0 8px 30px hsla(21,90%,48%,0.15)" }}
                    >
                      <Target className="w-6 h-6 text-primary" />
                      <span className="font-medium">Ieviešana</span>
                    </motion.div>
                    <div className="flex-1 h-px bg-primary/20 mx-4" />
                    <motion.div 
                      className="glass-warm px-6 py-4 rounded-xl flex items-center gap-3"
                      whileHover={{ scale: 1.05, boxShadow: "0 8px 30px hsla(21,90%,48%,0.15)" }}
                    >
                      <LineChart className="w-6 h-6 text-primary" />
                      <span className="font-medium">Rezultāti</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Text */}
            <div>
              <ScrollReveal>
                <span className="chip mb-6 inline-block">Mūsu pieeja</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="mb-8">
                  Kāds ir <span className="text-gradient-orange">NEOLab risinājums?</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  NEOLab strādā ar jaunākajiem un efektīvākajiem digitālajiem risinājumiem, kas palīdz sakārtot procesus, novērst digitālās vājās vietas un paātrināt biznesa ikdienas darbu. Mēs fokusējamies uz risinājumiem, kuri dod praktisku ieguvumu un ir pielāgojami konkrētai uzņēmuma situācijai, nevis universālām shēmām.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: Pakalpojumu virzieni ========== */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(35,25%,96%)] to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_20%_30%,hsla(21,90%,48%,0.05),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_80%_70%,hsla(35,100%,70%,0.04),transparent)]" />
        
        {/* Extended grid */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="serviceGrid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="hsla(21,90%,48%,0.025)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#serviceGrid)" />
          </svg>
        </div>

        <div className="container-neo section-padding relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <span className="chip mb-6 inline-block">Pakalpojumi</span>
              <h2>Pakalpojumu <span className="text-gradient-orange">virzieni</span></h2>
            </div>
          </ScrollReveal>

          {/* Large colorful service cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <Link to={service.path} className="group block h-full">
                  <motion.div
                    className="relative bg-card rounded-3xl p-10 md:p-12 h-full border border-border overflow-hidden"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Hover gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                    
                    {/* Orange accent line */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-orange origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-8">
                        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                          <service.icon className="w-10 h-10 text-primary" />
                        </div>
                        <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
                      </div>

                      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">{service.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: NEO Brand Block ========== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(30,12%,94%)]" />
        
        {/* Full-bleed grid */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="brandGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsla(21,90%,48%,0.04)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#brandGrid)" />
          </svg>
        </div>

        <div className="container-neo py-28 md:py-36 lg:py-44 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-gradient-orange leading-none">
                  Neo
                </span>
                <p className="text-2xl md:text-3xl text-muted-foreground mt-6 italic">
                  — jauns in Latin
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 8: Kā mēs strādājam ========== */}
      <section className="relative overflow-hidden bg-atmosphere">
        <div className="absolute inset-0 bg-background" />
        
        <div className="container-neo section-padding relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <span className="chip mb-6 inline-block">Process</span>
              <h2>Kā mēs <span className="text-gradient-orange">strādājam</span></h2>
            </div>
          </ScrollReveal>

          {/* Timeline steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
              {processSteps.map((step, i) => (
                <ScrollReveal key={step.step} delay={i * 0.1}>
                  <motion.div
                    className="flex flex-col items-center text-center"
                    whileHover={{ y: -4 }}
                  >
                    <motion.div
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-orange flex items-center justify-center text-primary-foreground font-bold text-xl md:text-2xl shadow-orange mb-6 relative z-10"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.step}
                    </motion.div>
                    <h4 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 9: Final CTA ========== */}
      <section className="relative overflow-hidden">
        {/* Strong gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(25,30%,92%)] via-[hsl(21,40%,88%)] to-[hsl(30,25%,90%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,hsla(21,90%,48%,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_20%_80%,hsla(35,100%,70%,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_80%_20%,hsla(21,90%,48%,0.06),transparent)]" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-60">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ctaGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsla(21,90%,48%,0.05)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ctaGrid)" />
          </svg>
        </div>

        <div className="container-neo section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="mb-8 text-foreground">
                Uzzini, kā varam <span className="text-gradient-orange">palīdzēt tev.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Piesakies bezmaksas konsultācijai, kurā mēs izvērtēsim uzņēmumu un tā procesus, lai sniegtu visprecīzāko pakalpojumu tava uzņēmuma vajadzībām.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link to="/bezmaksas-konsultacija">
                <Button variant="hero" size="xl">
                  Pieteikt konsultāciju
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
