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
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

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

      {/* ========== SECTION 3: Benefits ========== */}
      <section className="section-warm section-full-bleed">
        <div className="container-neo section-padding relative z-10">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <span className="chip mb-6 inline-block text-sm">Ieguvumi</span>
                <h2 className="mb-8 text-foreground">
                  Ko jūs <span className="text-gradient-orange">iegūstat</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-10">
                  Automatizācija nav izdevums — tā ir investīcija, 
                  kas atmaksājas katru dienu.
                </p>
                <Link to="/bezmaksas-konsultacija">
                  <Button variant="hero" size="lg">
                    Novērtēt potenciālu
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <ScrollReveal key={benefit} delay={index * 0.1} direction="right">
                    <div className="flex items-center gap-4 bg-card rounded-xl p-6 border border-border hover-lift">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-foreground text-lg">{benefit}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: Philosophy ========== */}
      <section className="section-offwhite grid-full-bleed">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-primary/10 mb-10">
                <Brain className="w-12 h-12 text-primary" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mb-8 text-foreground">
                Mēs būvējam <span className="text-gradient-orange">mašīnas</span>, nevis skriptus
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                Katrs automatizācijas projekts ir unikāls. Mēs sākam ar jūsu procesu izpratni, 
                ne ar gatavu risinājumu. Rezultāts — sistēma, kas aug līdzi jūsu biznesam.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4">
                {["Zapier", "Make", "n8n", "Custom API", "OpenAI"].map((tool) => (
                  <span key={tool} className="px-5 py-3 bg-muted rounded-xl text-base font-medium text-foreground">
                    {tool}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: CTA ========== */}
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
