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

      {/* ========== SECTION 2: Visual Workflow Builder ========== */}
      <section className="section-offwhite bg-atmosphere">
        <div className="container-neo section-padding">
          <SectionHeading
            chip="Sistēmas būvēšana"
            title="No manuāla līdz automatizētam"
            description="Katrs modulis ir kā LEGO klucis — savienojams ar citiem, veidojot pilnu sistēmu."
            className="mb-20"
          />

          <div className="relative max-w-6xl mx-auto">
            {/* Input trigger */}
            <ScrollReveal className="mb-10 text-center">
              <div className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 rounded-2xl shadow-orange">
                <Zap className="w-6 h-6" />
                <span className="font-semibold text-lg">Trigeris</span>
                <span className="text-primary-foreground/70">Jauns lead, forma, e-pasts...</span>
              </div>
            </ScrollReveal>

            {/* Workflow steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {automationModules.map((module, index) => (
                <ScrollReveal key={module.title} delay={0.2 + index * 0.15}>
                  <div className="card-neo h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <module.icon className="w-8 h-8 text-primary" />
                      </div>
                      <span className={`
                        text-sm px-3 py-1.5 rounded-full
                        ${module.complexity === "Vienkārši" ? "bg-green-100 text-green-700" : ""}
                        ${module.complexity === "Vidēji" ? "bg-yellow-100 text-yellow-700" : ""}
                        ${module.complexity === "Kompleksi" ? "bg-primary/10 text-primary" : ""}
                      `}>
                        {module.complexity}
                      </span>
                    </div>
                    <h4 className="font-semibold text-lg mb-3 text-foreground">{module.title}</h4>
                    <p className="text-muted-foreground">{module.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Output */}
            <ScrollReveal delay={0.8} className="mt-10 text-center">
              <div className="inline-flex items-center gap-4 glass-warm px-8 py-4 rounded-2xl">
                <Settings className="w-6 h-6 text-primary animate-spin" style={{ animationDuration: "3s" }} />
                <span className="font-medium text-lg text-foreground">Automatizēts rezultāts</span>
              </div>
            </ScrollReveal>
          </div>
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
