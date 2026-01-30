import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Brain, 
  Workflow, 
  Zap, 
  ArrowRight,
  Clock,
  Users,
  RefreshCcw,
  Database,
  Mail,
  FileSpreadsheet,
  MessageSquare,
  Settings,
  CheckCircle2,
  Layers,
  BarChart3,
  Sparkles,
  Target,
  Puzzle,
  Handshake,
  Search,
  TrendingUp,
  Cog,
  Eye,
  Wrench
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

const manualProblems = [
  { icon: Clock, text: "Stundas pavadītas atkārtojošos uzdevumos" },
  { icon: Users, text: "Cilvēki dara robotu darbu" },
  { icon: RefreshCcw, text: "Tie paši procesi katru dienu" },
  { icon: Database, text: "Dati, kas jāpārvieto manuāli" },
];

const automationModules = [
  {
    icon: Mail,
    title: "E-pasta automatizācija",
    description: "Personalizētas secības, trigeri, follow-ups",
    complexity: "Vienkārši",
  },
  {
    icon: FileSpreadsheet,
    title: "Datu sinhronizācija",
    description: "CRM, spreadsheets, datubāzes — viss savienots",
    complexity: "Vidēji",
  },
  {
    icon: MessageSquare,
    title: "Klientu apkalpošana",
    description: "AI chatboti, automātiski atbildes, routing",
    complexity: "Vidēji",
  },
  {
    icon: Workflow,
    title: "Pilnas darba plūsmas",
    description: "No lead līdz klientam — automatizēts ceļš",
    complexity: "Kompleksi",
  },
];

const benefits = [
  "Ietaupiet 10+ stundas nedēļā",
  "Samaziniet cilvēciskās kļūdas",
  "Ātrāka reakcija uz klientiem",
  "Skaidra datu plūsma",
  "Mērogojamība bez papildu resursiem",
  "Focus uz stratēģisku darbu",
];

// System nodes for hero visual
const systemNodes = [
  { id: "input", icon: Zap, label: "Trigeris", x: 10, y: 50 },
  { id: "process", icon: Workflow, label: "Process", x: 40, y: 25 },
  { id: "ai", icon: Brain, label: "AI", x: 50, y: 75 },
  { id: "output", icon: BarChart3, label: "Rezultāts", x: 85, y: 50 },
];

export default function AiAutomatizacija() {
  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: CENTERED Hero with AI System Visual ========== */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-warm/30 to-background" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-[15%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-[10%] w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/15 blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Centered Hero Content */}
            <div className="text-center mb-12 md:mb-16">
              <ScrollReveal>
                <span className="chip-outline mb-6 md:mb-8 inline-block text-sm">
                  <Brain className="w-4 h-4 inline mr-2" />
                  Mākslīgais intelekts
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-foreground leading-tight">
                  AI automatizācijas –{" "}
                  <span className="text-gradient-orange">jaunās paaudzes</span>
                  <br className="hidden sm:block" />
                  {" "}risinājums uzņēmumiem
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 md:mb-12 px-4">
                  Pārbaudīti mākslīgā intelekta risinājumi, kas palīdz uzņēmumiem sakārtot procesus, samazināt manuālo darbu un strādāt efektīvāk
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <Link to="/bezmaksas-konsultacija">
                  <Button variant="hero" size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6">
                    Sākt ar bezmaksas konsultāciju
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
            
            {/* AI System Visual - Neural Network Dashboard */}
            <ScrollReveal delay={0.4}>
              <div className="relative max-w-5xl mx-auto">
                <div className="bg-card/90 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 border border-border shadow-neo-lg">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6 md:mb-8 pb-4 md:pb-6 border-b border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-orange flex items-center justify-center shadow-orange">
                        <Brain className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm md:text-base">AI Sistēma</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">Automatizācijas centrs</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-xs md:text-sm text-muted-foreground hidden sm:inline">Aktīvs</span>
                    </div>
                  </div>
                  
                  {/* Neural Network Visualization */}
                  <div className="relative h-48 md:h-64 mb-6 md:mb-8">
                    {/* Connection lines SVG */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 200">
                      {/* Layer 1 to Layer 2 connections */}
                      {[30, 70, 110].map((y1, i) => (
                        [60, 100, 140].map((y2, j) => (
                          <motion.line
                            key={`l1-${i}-${j}`}
                            x1="80" y1={y1} x2="200" y2={y2}
                            stroke="hsl(21 90% 48%)"
                            strokeWidth="1.5"
                            strokeOpacity="0.3"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.5 + (i + j) * 0.1 }}
                          />
                        ))
                      ))}
                      
                      {/* Layer 2 to Layer 3 connections */}
                      {[60, 100, 140].map((y1, i) => (
                        [70, 130].map((y2, j) => (
                          <motion.line
                            key={`l2-${i}-${j}`}
                            x1="200" y1={y1} x2="320" y2={y2}
                            stroke="hsl(21 90% 48%)"
                            strokeWidth="1.5"
                            strokeOpacity="0.3"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.8 + (i + j) * 0.1 }}
                          />
                        ))
                      ))}
                      
                      {/* Layer 3 to Output */}
                      {[70, 130].map((y1, i) => (
                        <motion.line
                          key={`l3-${i}`}
                          x1="320" y1={y1} x2="430" y2={100}
                          stroke="hsl(21 90% 48%)"
                          strokeWidth="2"
                          strokeOpacity="0.5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 1.1 + i * 0.1 }}
                        />
                      ))}
                    </svg>
                    
                    {/* Neural Network Nodes */}
                    <div className="absolute inset-0 flex items-center">
                      {/* Input Layer */}
                      <div className="absolute left-[12%] md:left-[14%] flex flex-col gap-4 md:gap-6 -translate-y-2">
                        {[
                          { icon: Mail, label: "E-pasts" },
                          { icon: Database, label: "Dati" },
                          { icon: Users, label: "Leads" }
                        ].map((node, i) => (
                          <motion.div
                            key={node.label}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                            className="flex items-center gap-2"
                          >
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-muted flex items-center justify-center">
                              <node.icon className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                            </div>
                            <span className="text-xs text-muted-foreground hidden md:inline">{node.label}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Hidden Layer 1 */}
                      <div className="absolute left-[38%] md:left-[40%] flex flex-col gap-4 md:gap-5 -translate-y-1">
                        {[Workflow, Settings, Layers].map((Icon, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                          >
                            <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Hidden Layer 2 */}
                      <div className="absolute left-[60%] md:left-[63%] flex flex-col gap-6 md:gap-8">
                        {[Brain, Zap].map((Icon, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/20 flex items-center justify-center"
                          >
                            <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Output Node */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, type: "spring" }}
                        className="absolute right-[10%] md:right-[12%] flex items-center gap-3"
                      >
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-orange shadow-orange flex items-center justify-center">
                          <BarChart3 className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
                        </div>
                        <div className="hidden md:block">
                          <p className="text-sm font-medium text-foreground">Rezultāts</p>
                          <p className="text-xs text-muted-foreground">Optimizēts</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 md:gap-6">
                    {[
                      { label: "Procesu automatizēti", value: "85%", icon: Workflow },
                      { label: "Laika ietaupījums", value: "10h+", icon: Clock },
                      { label: "Efektivitātes pieaugums", value: "3x", icon: Zap }
                    ].map((metric, i) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 + i * 0.1 }}
                        className="bg-muted/50 rounded-xl p-3 md:p-4 text-center"
                      >
                        <metric.icon className="w-4 h-4 md:w-5 md:h-5 text-primary mx-auto mb-1 md:mb-2" />
                        <p className="text-lg md:text-2xl font-bold text-foreground">{metric.value}</p>
                        <p className="text-xs text-muted-foreground hidden sm:block">{metric.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: What is AI Automation ========== */}
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
            <div className="text-center mb-10 md:mb-14">
              <span className="chip mb-6 inline-block text-sm">Pamati</span>
              <h2 className="text-foreground max-w-3xl mx-auto">
                Kas ir <span className="text-gradient-orange">AI automatizācija</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch">
            {/* Main Definition Card */}
            <ScrollReveal delay={0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Header with icon */}
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <motion.div 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-orange flex items-center justify-center shadow-orange"
                      whileHover={{ rotate: 5 }}
                    >
                      <Brain className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">Definīcija</h3>
                      <span className="text-xs md:text-sm text-primary font-medium">Mākslīgā intelekta risinājumi</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                    AI automatizācija ir uzņēmuma procesu uzlabošana, izmantojot mākslīgā intelekta tehnoloģijas, lai noteiktas darbības notiktu <span className="text-foreground font-medium">ātrāk, precīzāk</span> un ar <span className="text-foreground font-medium">mazāku cilvēka iesaisti</span>.
                  </p>
                  
                  {/* Visual element - process flow mockup */}
                  <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                    <div className="flex items-center justify-between gap-2 md:gap-4">
                      {[
                        { icon: Database, label: "Dati" },
                        { icon: Workflow, label: "Process" },
                        { icon: Brain, label: "AI" },
                        { icon: Zap, label: "Rezultāts" }
                      ].map((item, i) => (
                        <div key={item.label} className="flex flex-col items-center gap-1 flex-1">
                          <motion.div 
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center ${i === 3 ? 'bg-gradient-orange shadow-orange' : 'bg-primary/10'}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                          >
                            <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${i === 3 ? 'text-white' : 'text-primary'}`} />
                          </motion.div>
                          <span className="text-xs text-muted-foreground hidden sm:block">{item.label}</span>
                          {i < 3 && (
                            <motion.div 
                              className="absolute hidden md:block"
                              style={{ left: `calc(${(i + 1) * 25}% - 8px)`, top: '50%' }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    {/* Connection lines */}
                    <div className="flex items-center justify-center gap-0 mt-2 px-4">
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/30 to-primary/50 rounded" />
                      <ArrowRight className="w-4 h-4 text-primary/50 mx-1" />
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/50 to-primary/70 rounded" />
                      <ArrowRight className="w-4 h-4 text-primary/70 mx-1" />
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/70 to-primary rounded" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
            
            {/* Use Cases & Key Point Card */}
            <ScrollReveal delay={0.2}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-amber-300/30 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Header with icon */}
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <motion.div 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: -5 }}
                    >
                      <Layers className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">Pielietojumi</h3>
                      <span className="text-xs md:text-sm text-amber-600 font-medium">Praktiski scenāriji</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                    AI automatizācija var ietvert datu apstrādi, informācijas plūsmu starp sistēmām, klientu komunikāciju, satura veidošanu vai iekšējo procesu vadību.
                  </p>
                  
                  {/* Use case icons grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6 flex-1">
                    {[
                      { icon: Mail, label: "E-pasti" },
                      { icon: MessageSquare, label: "Komunikācija" },
                      { icon: FileSpreadsheet, label: "Datu apstrāde" },
                      { icon: RefreshCcw, label: "Procesu vadība" }
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-center gap-2 bg-amber-50/80 rounded-lg p-3 border border-amber-100"
                      >
                        <item.icon className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
                        <span className="text-sm text-foreground font-medium">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Key insight box */}
                  <div className="bg-gradient-to-r from-primary/5 to-amber-50 rounded-xl p-4 border border-primary/10">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-sm md:text-base text-foreground leading-relaxed">
                        <span className="font-semibold">Svarīgākais:</span> AI tiek pielietots tur, kur tas reāli atvieglo darbu un dod praktisku ieguvumu.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
          
          {/* Bottom note */}
          <ScrollReveal delay={0.4}>
            <div className="mt-8 md:mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-border/50">
                <Settings className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground text-sm md:text-base">
                  AI automatizācija nav viens konkrēts rīks — tā ir <span className="text-foreground font-medium">pieeja</span>, kā tehnoloģijas tiek izmantotas uzņēmuma ikdienas darbā.
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 3: Ready AI Solutions ========== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Subtle warm background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-warm/50 via-background to-background" />
        
        <div className="container-neo relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <ScrollReveal>
              <div className="text-center mb-10 md:mb-14">
                <span className="chip mb-6 inline-block text-sm">
                  <CheckCircle2 className="w-4 h-4 inline mr-2" />
                  Gatavi risinājumi
                </span>
                <h2 className="text-foreground mb-6">
                  Pārbaudīti un gatavi <span className="text-gradient-orange">AI risinājumi</span>
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                  NEOLab piedāvā vairākus pārbaudītus AI automatizācijas risinājumus, kuri jau ir izmantoti reālās situācijās un kurus iespējams ieviest salīdzinoši ātri.
                </p>
              </div>
            </ScrollReveal>
            
            {/* Main content card */}
            <ScrollReveal delay={0.2}>
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-10 border border-border shadow-neo">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  {/* Left side - text */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
                      Šie risinājumi ir piemēroti uzņēmumiem, kuri:
                    </h3>
                    
                    <div className="space-y-4">
                      {[
                        { icon: Zap, text: "Vēlas ātru rezultātu" },
                        { icon: Settings, text: "Meklē konkrētu problēmu risinājumu" },
                        { icon: Layers, text: "Nevēlas sākt no nulles" }
                      ].map((item, i) => (
                        <motion.div
                          key={item.text}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-center gap-4"
                        >
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                          </div>
                          <span className="text-foreground text-base md:text-lg font-medium">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-8">
                      <Link to="/bezmaksas-konsultacija">
                        <Button variant="hero" size="lg">
                          Uzzināt vairāk
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Right side - visual indicator */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-primary/5 to-amber-50/50 rounded-2xl p-6 md:p-8 border border-primary/10">
                      {/* Status indicators */}
                      <div className="space-y-4">
                        {[
                          { label: "Testēts praksē", status: "Apstiprināts" },
                          { label: "Ātra ieviešana", status: "1-2 nedēļas" },
                          { label: "Dokumentēts process", status: "Pilnībā" }
                        ].map((item, i) => (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="flex items-center justify-between bg-white/80 rounded-xl p-4 border border-border/50"
                          >
                            <span className="text-muted-foreground text-sm md:text-base">{item.label}</span>
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                              <span className="text-foreground font-medium text-sm md:text-base">{item.status}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Bottom badge */}
                      <div className="mt-6 flex items-center justify-center gap-2 text-primary">
                        <Brain className="w-5 h-5" />
                        <span className="font-medium text-sm">NEOLab pārbaudīti risinājumi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: AI Automation Offerings ========== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-warm/30 to-background" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        
        <div className="container-neo relative z-10">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="chip mb-6 inline-block text-sm">
                <Workflow className="w-4 h-4 inline mr-2" />
                Piedāvājumi
              </span>
              <h2 className="text-foreground mb-4">
                NEOLab AI automatizācijas <span className="text-gradient-orange">piedāvājumi</span>
              </h2>
            </div>
          </ScrollReveal>
          
          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: MessageSquare,
                title: "LinkedIn Content System",
                description: "Automatizēta sistēma, kas palīdz regulāri veidot un publicēt saturu LinkedIn, analizējot tēmas, esošo saturu un nozares kontekstu. Samazina laiku satura plānošanai un palīdz uzturēt konsekventu komunikāciju.",
                link: "/ai-automatizacija/linkedin-content-system",
                accent: "from-primary to-orange-400"
              },
              {
                icon: Users,
                title: "Lead Capture Agent",
                description: "AI aģents, kas sazinās ar mājaslapas apmeklētājiem, atbild uz jautājumiem un ievāc potenciālo klientu kontaktus. Palīdz nepazaudēt pieprasījumus un samazināt manuālu iesaisti.",
                link: "/ai-automatizacija/lead-capture-agent",
                accent: "from-amber-400 to-orange-500"
              },
              {
                icon: Zap,
                title: "Speed-to-Lead System",
                description: "Sistēma, kas reaģē uz jauniem pieprasījumiem gandrīz uzreiz, nodod informāciju CRM un informē atbildīgos cilvēkus. Palīdz būt pirmajiem, kas atbild.",
                link: "/ai-automatizacija/speed-to-lead",
                accent: "from-orange-500 to-red-400"
              },
              {
                icon: Layers,
                title: "Client Onboarding System",
                description: "Automatizē klienta uzsākšanas procesu – no pirmajām ziņām līdz iekšējo uzdevumu sadalei komandā. Samazina haosu sadarbības sākumā.",
                link: "/ai-automatizacija/client-onboarding",
                accent: "from-primary to-amber-500"
              },
              {
                icon: MessageSquare,
                title: "Customer Support Chatbot",
                description: "AI čatbots klientu jautājumu apstrādei, kas spēj sniegt atbildes uz biežākajiem jautājumiem un nodot sarežģītākus gadījumus komandai.",
                link: "/ai-automatizacija/support-chatbot",
                accent: "from-amber-500 to-primary"
              }
            ].map((product, index) => (
              <ScrollReveal key={product.title} delay={0.1 + index * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group h-full"
                >
                  <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border shadow-neo h-full flex flex-col hover:shadow-neo-lg hover:border-primary/20 transition-all duration-300">
                    {/* Icon */}
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${product.accent} flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      <product.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                      {product.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 flex-1">
                      {product.description}
                    </p>
                    
                    {/* CTA */}
                    <Link 
                      to={product.link}
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm md:text-base group-hover:gap-3 transition-all duration-300"
                    >
                      Uzzināt vairāk
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          
        </div>
      </section>

      {/* ========== SECTION 5: Personalized Solutions ========== */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Premium background with warm gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-orange-50 to-amber-50/80" />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/20 to-amber-300/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-amber-200/30 to-primary/15 blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            x: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(21 90% 48%) 1px, transparent 0)`,
            backgroundSize: "32px 32px"
          }}
        />
        
        <div className="container-neo relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main content grid */}
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              
              {/* Left: Visual - Custom Solution Builder */}
              <ScrollReveal delay={0.1}>
                <div className="relative">
                  {/* Glow behind card */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-amber-300/20 to-primary/20 rounded-3xl blur-2xl opacity-60" />
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-primary/30 shadow-2xl"
                  >
                    {/* Header with personalization indicator */}
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-primary/10">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-orange-500 to-amber-400 flex items-center justify-center shadow-lg"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Sparkles className="w-7 h-7 text-white" />
                        </motion.div>
                        <div>
                          <h4 className="font-bold text-foreground text-lg">Jūsu Risinājums</h4>
                          <span className="text-sm text-primary font-medium">Veidots tieši jums</span>
                        </div>
                      </div>
                      <motion.div 
                        className="flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-medium text-primary">Personalizēts</span>
                      </motion.div>
                    </div>
                    
                    {/* Building blocks visualization */}
                    <div className="space-y-4 mb-8">
                      {[
                        { icon: Target, label: "Jūsu mērķi", value: "Definēti", color: "from-primary to-orange-400" },
                        { icon: Puzzle, label: "Jūsu procesi", value: "Integrēti", color: "from-amber-400 to-orange-500" },
                        { icon: Settings, label: "Jūsu sistēmas", value: "Savienoti", color: "from-orange-500 to-primary" },
                      ].map((block, i) => (
                        <motion.div
                          key={block.label}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.15 }}
                          className="flex items-center gap-4 bg-gradient-to-r from-muted/50 to-transparent rounded-xl p-4 border border-border/50"
                        >
                          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${block.color} flex items-center justify-center shadow-md`}>
                            <block.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <span className="text-foreground font-medium">{block.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium">{block.value}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Bottom result indicator */}
                    <motion.div 
                      className="bg-gradient-to-r from-primary/10 via-amber-50 to-primary/10 rounded-2xl p-5 border border-primary/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-orange flex items-center justify-center shadow-orange">
                          <Handshake className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Ilgtermiņa partnerība</p>
                          <p className="text-sm text-muted-foreground">Stabils risinājums ar atbalstu</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </ScrollReveal>
              
              {/* Right: Content */}
              <ScrollReveal delay={0.2}>
                <div className="lg:pl-4">
                  <span className="chip mb-6 inline-block text-sm">
                    <Sparkles className="w-4 h-4 inline mr-2" />
                    Individuāli risinājumi
                  </span>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                    Personalizēta <span className="text-gradient-orange">AI risinājumu</span> izstrāde
                  </h2>
                  
                  <div className="space-y-5 mb-8">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      NEOLab izstrādā AI risinājumus, kas tiek būvēti konkrētam uzņēmumam un tā procesiem.
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Mēs veidojam pilnīgi jaunus un īpatnējus risinājumus dažādos gadījumos. AI automatizācijām nav jābūt vienpusīgam — mēs prioritizējam klienta vēlmes un vajadzības, attiecīgi pielāgojamies, lai klients sasniegtu labākos rezultātus.
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Risinājumi tiek integrēti esošajā sistēmu vidē un paredzēti stabilai, ilgtermiņa lietošanai.
                    </p>
                  </div>
                  
                  {/* Key benefits */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {[
                      "Būvēts jums",
                      "Integrēts ar esošo",
                      "Ilgtermiņa atbalsts"
                    ].map((benefit, i) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20 shadow-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Link to="/bezmaksas-konsultacija">
                    <Button variant="hero" size="lg" className="text-base md:text-lg px-8 py-6 shadow-xl">
                      Apspriest savu risinājumu
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: How We Work - Roadmap ========== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-white" />
        
        {/* Subtle pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(21 90% 48%) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        
        <div className="container-neo relative z-10">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="chip mb-4 inline-block text-sm">Process</span>
              <h2 className="text-foreground">
                Kā mēs <span className="text-gradient-orange">strādājam</span>
              </h2>
            </div>
          </ScrollReveal>
          
          {/* Vertical Roadmap */}
          <div className="max-w-4xl mx-auto relative px-2 md:px-0">
            {/* Central vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
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
                title: "Izvērtējam uzņēmuma situāciju un procesus",
                description: "Sākam ar rūpīgu esošo procesu un sistēmu analīzi, lai saprastu, kur automatizācija var dot vislielāko vērtību.",
                gradient: "from-primary to-orange-500",
                delay: 0.1,
              },
              {
                number: "02",
                icon: Target,
                title: "Nosakām, kur AI dod lielāko praktisko ieguvumu",
                description: "Identificējam konkrētus procesus un uzdevumus, kurus automatizējot, tiks sasniegts būtiskākais laika un resursu ietaupījums.",
                gradient: "from-orange-500 to-amber-500",
                delay: 0.2,
              },
              {
                number: "03",
                icon: Settings,
                title: "Izvēlamies gatavu risinājumu vai veidojam pielāgotu",
                description: "Atkarībā no vajadzībām piedāvājam jau pārbaudītu risinājumu vai izstrādājam individuālu sistēmu uzņēmuma specifiskajām prasībām.",
                gradient: "from-amber-500 to-yellow-500",
                delay: 0.3,
              },
              {
                number: "04",
                icon: Cog,
                title: "Ieviešam un integrējam sistēmās",
                description: "Nodrošinām pilnu ieviešanu un integrāciju ar esošajām sistēmām, lai automatizācija darbotos bez traucējumiem.",
                gradient: "from-yellow-500 to-amber-400",
                delay: 0.4,
              },
              {
                number: "05",
                icon: TrendingUp,
                title: "Uzraugām un pielāgojam pēc reālas lietošanas",
                description: "Nepārtraukti uzraugām risinājuma darbību un veicam pielāgojumus, balstoties reālās lietošanas datos un atgriezeniskajā saitē.",
                gradient: "from-amber-400 to-primary",
                delay: 0.5,
              },
            ].map((step, index) => (
              <ScrollReveal key={step.number} delay={step.delay}>
                <div className={`relative flex items-start gap-4 md:gap-12 mb-10 md:mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Node point on the line */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: step.delay + 0.2, type: "spring", stiffness: 300 }}
                      className="relative"
                    >
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                        <step.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
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
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-xl">
                    <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
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
                <p className="text-muted-foreground">Stabila un efektīva automatizācija</p>
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
            <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
              {[
                {
                  icon: Cog,
                  question: "Vai AI automatizācija nozīmē sarežģītu ieviešanu?",
                  answer: "Nē. Risinājumi tiek veidoti tā, lai tie būtu saprotami un pakāpeniski ieviešami.",
                  gradient: "from-primary to-orange-500",
                },
                {
                  icon: TrendingUp,
                  question: "Vai AI risinājumus var pielāgot uzņēmuma izaugsmei?",
                  answer: "Jā. Automatizācijas tiek veidotas elastīgi, lai tās varētu paplašināt vai mainīt.",
                  gradient: "from-orange-500 to-amber-500",
                },
                {
                  icon: Users,
                  question: "Vai AI aizvieto darbiniekus?",
                  answer: "AI automatizācija palīdz samazināt rutīnas darbus, nevis aizvietot cilvēkus.",
                  gradient: "from-amber-500 to-yellow-500",
                },
                {
                  icon: Layers,
                  question: "Vai risinājumus var integrēt ar esošajām sistēmām?",
                  answer: "Jā. Mēs strādājam ar dažādām platformām un sistēmām.",
                  gradient: "from-yellow-500 to-amber-400",
                },
                {
                  icon: MessageSquare,
                  question: "Ar ko sākas sadarbība ar NEOLab?",
                  answer: "Ar sarunu un uzņēmuma situācijas izvērtējumu.",
                  gradient: "from-amber-400 to-primary",
                },
              ].map((faq, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 overflow-hidden data-[state=open]:shadow-lg data-[state=open]:border-primary/30"
                  >
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
                </ScrollReveal>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ========== SECTION 8: CTA ========== */}
      <section className="bg-gradient-hero section-full-bleed">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="mb-8 text-foreground">
                Gatavi <span className="text-gradient-orange">automatizēt</span>?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl text-muted-foreground mb-10">
                Konsultācijā identificēsim jūsu lielākās automatizācijas iespējas.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link to="/bezmaksas-konsultacija">
                <Button variant="hero" size="xl">
                  Sākt automatizācijas ceļu
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
