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
  Eye,
  Settings,
  PieChart,
  Bot,
  Rocket,
  ShoppingCart,
  Building2,
  Briefcase,
  AlertCircle,
  Wrench,
  CheckCircle,
  Clock,
  Users,
  Zap,
  MessageSquare,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const diagnosticsSteps = [
  { icon: Layers, label: "Tehniskais audits", description: "Pilna vietnes analīze" },
  { icon: FileText, label: "Satura inventārs", description: "Kas strādā, kas nē" },
  { icon: Target, label: "Konkurentu izpēte", description: "Tirgus pozicionēšana" },
  { icon: BarChart3, label: "Ranku analīze", description: "Esošās pozīcijas" },
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

      {/* ========== SECTION 3: Results System ========== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0 bg-gradient-to-tl from-amber-50/80 via-white to-orange-50/60" />
        
        {/* Animated mesh gradient */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 50% at 20% 40%, hsl(21 90% 48%) 0px, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 60%, hsl(32 90% 55%) 0px, transparent 50%)
            `,
          }}
        />
        
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(21 90% 48%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
        
        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-primary/5 to-amber-400/5 blur-2xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-[15%] w-40 h-40 rounded-full bg-gradient-to-tl from-amber-400/5 to-primary/5 blur-2xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container-neo relative z-10">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <span className="chip mb-6 inline-block text-sm">Sistēma</span>
              <h2 className="text-foreground max-w-4xl mx-auto leading-tight">
                Rezultāts nav viens cipars. Tā ir <span className="text-gradient-orange">sistēma</span>, kas sāk strādāt uzņēmuma labā.
              </h2>
            </div>
          </ScrollReveal>
          
          {/* Results grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Eye,
                title: "Stabilāka redzamība",
                description: "Uzņēmums kļūst atrodams meklējumos brīdī, kad potenciālie klienti aktīvi meklē risinājumus. Redzamība vairs nav atkarīga no īstermiņa reklāmas budžetiem vai kampaņu intensitātes.",
                gradient: "from-primary to-orange-500",
                delay: 0.1,
              },
              {
                icon: Settings,
                title: "Sakārtota digitālā struktūra",
                description: "Tiek uzlabota mājaslapas loģika, saturs un tehniskā kvalitāte. Tas pozitīvi ietekmē gan lietotāja pieredzi, gan meklētājprogrammu uztveri.",
                gradient: "from-orange-500 to-amber-500",
                delay: 0.15,
              },
              {
                icon: PieChart,
                title: "Skaidrība par to, kas strādā",
                description: "Uzņēmums saprot, kādi vaicājumi piesaista apmeklētājus, kā viņi nonāk līdz piedāvājumam un kur rodas reālais rezultāts.",
                gradient: "from-amber-500 to-yellow-500",
                delay: 0.2,
              },
              {
                icon: Bot,
                title: "Redzamība arī AI meklējumos",
                description: "GEO optimizācija paplašina klātbūtni jaunās meklēšanas platformās un AI ģenerētajās atbildēs, kur lietotāji sagaida koncentrētu un uzticamu informāciju.",
                gradient: "from-yellow-500 to-amber-400",
                delay: 0.25,
              },
              {
                icon: Rocket,
                title: "Ilgtermiņa izaugsmes pamats",
                description: "SEO un GEO kļūst par stabilu digitālās izaugsmes balstu, nevis taktisku rīku atsevišķām kampaņām.",
                gradient: "from-amber-400 to-primary",
                delay: 0.3,
                featured: true,
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative group h-full ${item.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`} />
                  
                  {/* Card */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                    {/* Icon with animated background */}
                    <div className="relative mb-6">
                      <motion.div 
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <item.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      {/* Pulse ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-30`}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                      />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                    
                    {/* Bottom accent line */}
                    <motion.div 
                      className={`mt-6 h-1 rounded-full bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: item.delay + 0.2 }}
                    />
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          
          {/* Visual connector at bottom */}
          <ScrollReveal delay={0.4}>
            <div className="mt-16 flex justify-center">
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-amber-500"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 4: Experience & Achievements ========== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50/50 to-white" />
        
        {/* Mesh gradient overlay */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 60% 40% at 30% 30%, hsl(21 90% 48%) 0px, transparent 50%),
              radial-gradient(ellipse 50% 50% at 70% 70%, hsl(32 90% 55%) 0px, transparent 50%)
            `,
          }}
        />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(21 90% 48%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-16 right-[20%] w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-amber-400/10 blur-2xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-24 left-[15%] w-32 h-32 rounded-full bg-gradient-to-tl from-amber-400/10 to-primary/10 blur-2xl"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container-neo relative z-10">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <span className="chip mb-6 inline-block text-sm">Pieredze</span>
              <h2 className="text-foreground max-w-3xl mx-auto">
                Mūsu <span className="text-gradient-orange">pieredze</span> un sasniegumi
              </h2>
            </div>
          </ScrollReveal>
          
          {/* Case study cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                industry: "E-komercija",
                icon: ShoppingCart,
                gradient: "from-primary to-orange-500",
                bgGradient: "from-primary/5 to-orange-500/5",
                situation: "Interneta veikals ar 2000+ produktiem netika atrasts Google meklējumos. Produktu lapas neindeksējās, un organiskais trafiks bija gandrīz nulle.",
                solution: "Veicām pilnu tehnisko auditu, sakārtojām vietnes struktūru, optimizējām produktu lapas ar strukturētiem datiem un izveidojām kategorizācijas stratēģiju.",
                result: "+340%",
                resultLabel: "organiskā trafika pieaugums",
                delay: 0.1,
              },
              {
                industry: "Lokāls pakalpojums",
                icon: Building2,
                gradient: "from-orange-500 to-amber-500",
                bgGradient: "from-orange-500/5 to-amber-500/5",
                situation: "Būvniecības uzņēmums netika atrasts lokālajos meklējumos. Klienti neatrada uzņēmumu, meklējot \"būvniecība + pilsēta\".",
                solution: "Optimizējām Google My Business profilu, izveidojām lokālā satura stratēģiju un nodrošinājām NAP konsistenci visās platformās.",
                result: "Top 3",
                resultLabel: "lokālajos rezultātos",
                delay: 0.2,
              },
              {
                industry: "B2B pakalpojumi",
                icon: Briefcase,
                gradient: "from-amber-500 to-yellow-500",
                bgGradient: "from-amber-500/5 to-yellow-500/5",
                situation: "Konsultāciju uzņēmums saņēma daudz apmeklētāju, bet maz pieprasījumu. Augsts bounce rate, lietotāji aizgāja bez darbības.",
                solution: "Pārstrukturējām saturu uz lietotāja vajadzībām, izveidojām skaidru konversijas piltuvi un optimizējām galvenās piezemēšanās lapas.",
                result: "+180%",
                resultLabel: "vairāk kvalificētu pieprasījumu",
                delay: 0.3,
              },
            ].map((caseStudy, index) => (
              <ScrollReveal key={caseStudy.industry} delay={caseStudy.delay}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative group h-full"
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`} />
                  
                  {/* Card */}
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full flex flex-col overflow-hidden">
                    {/* Header with icon and industry */}
                    <div className={`bg-gradient-to-br ${caseStudy.bgGradient} p-6 border-b border-primary/5`}>
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${caseStudy.gradient} flex items-center justify-center shadow-lg`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          <caseStudy.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <span className="font-bold text-lg text-foreground">{caseStudy.industry}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Situācija */}
                      <div className="mb-5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                            <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                          </div>
                          <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Situācija</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{caseStudy.situation}</p>
                      </div>
                      
                      {/* Arrow connector */}
                      <div className="flex justify-center my-2">
                        <motion.div
                          animate={{ y: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <svg className="w-5 h-5 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </motion.div>
                      </div>
                      
                      {/* Risinājums */}
                      <div className="mb-5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                            <Wrench className="w-3.5 h-3.5 text-blue-500" />
                          </div>
                          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Risinājums</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{caseStudy.solution}</p>
                      </div>
                      
                      {/* Arrow connector */}
                      <div className="flex justify-center my-2">
                        <motion.div
                          animate={{ y: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                        >
                          <svg className="w-5 h-5 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </motion.div>
                      </div>
                      
                      {/* Rezultāts */}
                      <div className="mt-auto">
                        <div className={`bg-gradient-to-br ${caseStudy.bgGradient} rounded-2xl p-5 border border-primary/10`}>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                            </div>
                            <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Rezultāts</span>
                          </div>
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: caseStudy.delay + 0.3, type: "spring" }}
                          >
                            <span className={`text-4xl font-bold bg-gradient-to-r ${caseStudy.gradient} bg-clip-text text-transparent`}>
                              {caseStudy.result}
                            </span>
                            <p className="text-muted-foreground text-sm mt-1">{caseStudy.resultLabel}</p>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom accent */}
                    <motion.div 
                      className={`h-1 bg-gradient-to-r ${caseStudy.gradient}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: caseStudy.delay + 0.2 }}
                    />
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          
          {/* Bottom visual connector */}
          <ScrollReveal delay={0.4}>
            <div className="mt-16 flex justify-center">
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-orange-500 flex items-center justify-center shadow-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <TrendingUp className="w-5 h-5 text-white" />
                </motion.div>
                <span className="text-muted-foreground font-medium">Jūsu veiksmes stāsts var būt nākamais</span>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 5: NEOLab Solution — PREMIUM CONVERSION BLOCK ========== */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Premium background with depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50/30" />
        
        {/* Subtle geometric pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, hsl(21 90% 48%) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, hsl(21 90% 48%) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        
        {/* Accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        {/* Floating accents */}
        <motion.div
          className="absolute top-32 left-[5%] w-64 h-64 rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-[8%] w-72 h-72 rounded-full bg-gradient-to-tl from-amber-400/5 to-transparent blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container-neo relative z-10">
          {/* Premium Header */}
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-widest">Metodika</span>
                <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-primary" />
              </motion.div>
              <h2 className="text-foreground max-w-4xl mx-auto mb-6">
                Kāds ir <span className="text-gradient-orange">NEOLab</span> risinājums
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                NEOLab piedāvā strukturētu un pārskatāmu pieeju SEO un GEO optimizācijai, balstoties uz auditu, prioritātēm un pakāpenisku ieviešanu.
              </p>
            </div>
          </ScrollReveal>
          
          {/* Services Grid - 3x2 layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {[
              {
                icon: Search,
                number: "01",
                title: "SEO audits un situācijas izvērtējums",
                description: "Tiek analizēta mājaslapas tehniskā puse, saturs, struktūra un esošā redzamība meklējumos, lai noteiktu galvenās optimizācijas iespējas.",
                accent: "from-primary to-orange-500",
                delay: 0.1,
              },
              {
                icon: Settings,
                number: "02",
                title: "Tehniskā SEO optimizācija",
                description: "Tiek sakārtoti tehniskie aspekti, kas ietekmē meklētājprogrammu uztveri un lietotāja pieredzi, tostarp lapas ātrums, struktūra un indeksācija.",
                accent: "from-orange-500 to-amber-500",
                delay: 0.15,
              },
              {
                icon: FileText,
                number: "03",
                title: "Satura un atslēgvārdu struktūra",
                description: "Tiek veidota loģiska satura struktūra, kas balstīta lietotāju meklēšanas paradumos un uzņēmuma mērķos, nodrošinot saprotamu informācijas plūsmu.",
                accent: "from-amber-500 to-yellow-500",
                delay: 0.2,
              },
              {
                icon: Target,
                number: "04",
                title: "Keyword list veidošana",
                description: "Tiek izstrādāts strukturēts atslēgvārdu saraksts, kas sadalīts pa lapām un meklēšanas nolūkiem, lai novērstu kanibalizāciju un palielinātu efektivitāti.",
                accent: "from-yellow-500 to-amber-400",
                delay: 0.25,
              },
              {
                icon: Globe,
                number: "05",
                title: "GEO mājaslapas audits",
                description: "Tiek izvērtēts, kā mājaslapa un tās saturs tiek uztverts AI balstītās meklēšanas vidēs un ģeneratīvajās atbildēs.",
                accent: "from-amber-400 to-orange-500",
                delay: 0.3,
              },
              {
                icon: Rocket,
                number: "06",
                title: "GEO stratēģijas izveide",
                description: "Balstoties auditā, tiek izstrādāta GEO stratēģija, kas palīdz uzlabot redzamību jaunās paaudzes meklēšanas kanālos.",
                accent: "from-orange-500 to-primary",
                delay: 0.35,
              },
            ].map((service, index) => (
              <ScrollReveal key={service.number} delay={service.delay}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group relative h-full"
                >
                  {/* Hover glow */}
                  <div className={`absolute -inset-2 bg-gradient-to-br ${service.accent} rounded-3xl blur-xl opacity-0 group-hover:opacity-15 transition-all duration-500`} />
                  
                  {/* Card */}
                  <div className="relative bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col overflow-hidden">
                    {/* Top accent line */}
                    <motion.div 
                      className={`h-1 bg-gradient-to-r ${service.accent}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: service.delay }}
                    />
                    
                    <div className="p-7 flex-1 flex flex-col">
                      {/* Header with number and icon */}
                      <div className="flex items-start justify-between mb-5">
                        <motion.div 
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                          whileHover={{ rotate: 5, scale: 1.05 }}
                        >
                          <service.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <span className={`text-5xl font-bold bg-gradient-to-br ${service.accent} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300`}>
                          {service.number}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                        {service.description}
                      </p>
                      
                      {/* Bottom visual indicator */}
                      <div className="mt-5 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <motion.div 
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.accent}`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                          />
                          <span className="group-hover:text-primary transition-colors duration-300">Iekļauts pakalpojumā</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          
          {/* Premium CTA Block */}
          <ScrollReveal delay={0.4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glow behind CTA */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-orange-500/10 to-amber-400/10 rounded-3xl blur-2xl" />
              
              <div className="relative bg-gradient-to-br from-white via-white to-orange-50/50 rounded-3xl p-8 md:p-12 border border-primary/10 shadow-xl overflow-hidden">
                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-400/5 to-transparent rounded-tr-full" />
                
                <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                      Katrs solis ir pielāgots <span className="text-gradient-orange">jūsu situācijai</span>
                    </h3>
                    <p className="text-muted-foreground text-lg max-w-xl">
                      Saņemiet bezmaksas konsultāciju, lai saprastu, kādi soļi ir būtiskākie tieši jūsu uzņēmumam.
                    </p>
                  </div>
                  
                  <Link to="/bezmaksas-konsultacija" className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button variant="hero" size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 text-base px-8">
                        Sākt ar bezmaksas auditu
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </motion.div>
                  </Link>
                </div>
                
                {/* Animated progress dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-primary/30"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 6: Collaboration Roadmap — VERTICAL FLOW ========== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Premium background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-orange-50/30" />
        
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(21 90% 48%) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        
        {/* Side accent lines */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute right-0 top-1/3 bottom-1/3 w-1 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent" />
        
        <div className="container-neo relative z-10">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-widest">Process</span>
                <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-primary" />
              </motion.div>
              <h2 className="text-foreground max-w-3xl mx-auto">
                Kā notiek <span className="text-gradient-orange">sadarbība</span>
              </h2>
            </div>
          </ScrollReveal>
          
          {/* Vertical Roadmap */}
          <div className="max-w-4xl mx-auto relative">
            {/* Central vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
              <motion.div 
                className="w-full h-full bg-gradient-to-b from-primary via-orange-500 to-amber-400"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              />
            </div>
            
            {/* Roadmap steps */}
            {[
              {
                number: "01",
                icon: Search,
                title: "Sākotnējais audits un izvērtējums",
                description: "Sadarbība sākas ar mājaslapas, esošās redzamības un konkurentu analīzi, lai noteiktu pašreizējo situāciju un galvenās iespējas.",
                gradient: "from-primary to-orange-500",
                delay: 0.1,
              },
              {
                number: "02",
                icon: Target,
                title: "Prioritātes un stratēģija",
                description: "Tiek noteiktas prioritātes un izstrādāta individuāla SEO/GEO stratēģija, kas atbilst uzņēmuma mērķiem un resursiem.",
                gradient: "from-orange-500 to-amber-500",
                delay: 0.2,
              },
              {
                number: "03",
                icon: Settings,
                title: "Pakāpeniska ieviešana",
                description: "Optimizācijas darbi tiek ieviesti pakāpeniski — tehniskie labojumi, satura uzlabojumi un strukturālās izmaiņas.",
                gradient: "from-amber-500 to-yellow-500",
                delay: 0.3,
              },
              {
                number: "04",
                icon: BarChart3,
                title: "Uzraudzība un analīze",
                description: "Rezultāti tiek nepārtraukti uzraudzīti un analizēti, izmantojot profesionālus rīkus un skaidrus atskaites.",
                gradient: "from-yellow-500 to-amber-400",
                delay: 0.4,
              },
              {
                number: "05",
                icon: TrendingUp,
                title: "Nepārtraukta uzlabošana",
                description: "Notiek nepārtraukta uzlabošana, balstoties datos un rezultātos. Stratēģija tiek pielāgota tirgus izmaiņām.",
                gradient: "from-amber-400 to-primary",
                delay: 0.5,
              },
            ].map((step, index) => (
              <ScrollReveal key={step.number} delay={step.delay}>
                <div className={`relative flex items-start gap-6 md:gap-12 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Node point on the line */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: step.delay + 0.2, type: "spring", stiffness: 300 }}
                      className="relative"
                    >
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      {/* Pulse ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} opacity-30`}
                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Content card - alternating sides on desktop */}
                  <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="group relative"
                    >
                      {/* Glow effect */}
                      <div className={`absolute -inset-2 bg-gradient-to-br ${step.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-all duration-500`} />
                      
                      <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                        {/* Number badge */}
                        <div className="flex items-start justify-between mb-4">
                          <span className={`text-4xl font-bold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-30`}>
                            {step.number}
                          </span>
                          {/* Arrow indicator pointing to center */}
                          <div className={`hidden md:block w-4 h-4 ${index % 2 === 0 ? 'rotate-0' : 'rotate-180'}`}>
                            <svg className="w-full h-full text-primary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                        
                        {/* Progress indicator */}
                        <div className="mt-4 pt-3 border-t border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                              <motion.div 
                                className={`h-full bg-gradient-to-r ${step.gradient}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: step.delay + 0.3 }}
                              />
                            </div>
                            <CheckCircle2 className="w-4 h-4 text-green-500 opacity-60" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-4rem)]" />
                </div>
              </ScrollReveal>
            ))}
            
            {/* End node - Success indicator */}
            <ScrollReveal delay={0.6}>
              <div className="relative flex justify-center mt-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="relative z-10"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-xl">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full bg-green-400 opacity-30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </ScrollReveal>
            
            {/* Final success message */}
            <ScrollReveal delay={0.7}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-8"
              >
                <p className="text-lg font-semibold text-foreground">Ilgtermiņa rezultāti</p>
                <p className="text-muted-foreground">Stabila un pieaugoša redzamība</p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: FAQ ========== */}
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
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  icon: Globe,
                  question: "Vai GEO aizvieto SEO?",
                  answer: "Nē. GEO papildina SEO un paplašina redzamību jaunās meklēšanas vidēs, bet neaizvieto tradicionālo SEO.",
                  gradient: "from-primary to-orange-500",
                },
                {
                  icon: Clock,
                  question: "Cik ilgā laikā SEO sāk dot rezultātus?",
                  answer: "Parasti pirmās izmaiņas ir redzamas dažu mēnešu laikā, bet stabils rezultāts veidojas ilgtermiņā.",
                  gradient: "from-orange-500 to-amber-500",
                },
                {
                  icon: Users,
                  question: "Vai SEO un GEO ir piemērots mazākiem uzņēmumiem?",
                  answer: "Jā, ja pieeja ir pielāgota uzņēmuma apjomam, mērķiem un resursiem.",
                  gradient: "from-amber-500 to-yellow-500",
                },
                {
                  icon: Zap,
                  question: "Vai SEO var apvienot ar Google Ads?",
                  answer: "Jā. SEO un Google Ads var veiksmīgi papildināt viens otru, veidojot stabilu pieprasījuma plūsmu.",
                  gradient: "from-yellow-500 to-amber-400",
                },
                {
                  icon: MessageSquare,
                  question: "Ar ko sākas sadarbība ar NEOLab?",
                  answer: "Sadarbība sākas ar auditu un situācijas izvērtējumu, lai noteiktu piemērotāko rīcības plānu.",
                  gradient: "from-amber-400 to-primary",
                },
              ].map((faq, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 overflow-hidden data-[state=open]:shadow-lg data-[state=open]:border-primary/30"
                  >
                    <AccordionTrigger className="px-5 py-4 hover:no-underline group">
                      <div className="flex items-center gap-4 text-left">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${faq.gradient} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                          <faq.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5">
                      <div className="pl-14">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ========== SECTION 8: Final CTA ========== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
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
        
        {/* Floating accents */}
        <motion.div
          className="absolute top-20 left-[10%] w-48 h-48 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-[15%] w-56 h-56 rounded-full bg-gradient-to-tl from-amber-400/10 to-transparent blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="container-neo relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-foreground mb-6">
                Sper soļus <span className="text-gradient-orange">jaunajā digitālajā laikmetā</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Neatpaliec no digitālajām pārmaiņām. Uzzini, kā šobrīd strādā tava uzņēmuma digitālā vide un kur slēpjas reālas izaugsmes iespējas.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link to="/bezmaksas-konsultacija">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
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
    </div>
  );
}
