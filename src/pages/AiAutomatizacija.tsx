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
      {/* ========== SECTION 1: CENTERED Hero with System Visual ========== */}
      <section className="bg-gradient-hero min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Centered content */}
            <div className="text-center mb-12">
              <ScrollReveal>
                <span className="chip-outline mb-6 inline-block">Problēma</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="mb-6 text-foreground">
                  Jūsu komanda tērē laiku <span className="text-gradient-orange">robotu darbam</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  AI automatizācija nav par cilvēku aizstāšanu. Tā ir par to, lai 
                  cilvēki varētu darīt to, ko roboti nevar — domāt, radīt, risināt problēmas.
                </p>
              </ScrollReveal>
            </div>
            
            {/* System Visual - centered workflow diagram */}
            <ScrollReveal delay={0.3}>
              <div className="relative max-w-3xl mx-auto mb-12">
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-card">
                  {/* Flow visualization */}
                  <svg className="w-full h-32" viewBox="0 0 400 80">
                    {/* Connection lines */}
                    <motion.path
                      d="M 50 40 L 140 40"
                      stroke="hsl(21 90% 48%)"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.path
                      d="M 180 40 L 260 40"
                      stroke="hsl(21 90% 48%)"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                    <motion.path
                      d="M 300 40 L 370 40"
                      stroke="hsl(21 90% 48%)"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                    
                    {/* Arrow heads */}
                    <motion.polygon
                      points="370,40 360,35 360,45"
                      fill="hsl(21 90% 48%)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    />
                  </svg>
                  
                  {/* Nodes overlay - positioned to match SVG coordinates */}
                  <div className="absolute inset-0">
                    {[
                      { icon: Zap, label: "Trigeris", delay: 0.3, left: "10%", top: "58%" },
                      { icon: Layers, label: "Process", delay: 0.5, left: "35%", top: "58%" },
                      { icon: Brain, label: "AI", delay: 0.7, left: "62%", top: "58%" },
                      { icon: BarChart3, label: "Rezultāts", delay: 0.9, left: "88%", top: "58%" },
                    ].map((node, i) => (
                      <motion.div
                        key={node.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: node.delay }}
                        className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
                        style={{ left: node.left, top: node.top }}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${i === 3 ? 'bg-gradient-orange shadow-orange' : 'bg-primary/10'}`}>
                          <node.icon className={`w-6 h-6 ${i === 3 ? 'text-primary-foreground' : 'text-primary'}`} />
                        </div>
                        <span className="text-xs font-medium text-foreground mt-2">{node.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Problem cards - grid below */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {manualProblems.map((item, index) => (
                <ScrollReveal key={index} delay={0.4 + index * 0.1}>
                  <div className="flex items-center gap-4 bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border hover-lift">
                    <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <span className="text-foreground text-sm">{item.text}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: Visual Workflow Builder ========== */}
      <section className="section-offwhite">
        <div className="container-neo section-padding">
          <SectionHeading
            chip="Sistēmas būvēšana"
            title="No manuāla līdz automatizētam"
            description="Katrs modulis ir kā LEGO klucis — savienojams ar citiem, veidojot pilnu sistēmu."
            className="mb-16"
          />

          <div className="relative max-w-5xl mx-auto">
            {/* Input trigger */}
            <ScrollReveal className="mb-8 text-center">
              <div className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-orange">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Trigeris</span>
                <span className="text-primary-foreground/70 text-sm">Jauns lead, forma, e-pasts...</span>
              </div>
            </ScrollReveal>

            {/* Workflow steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {automationModules.map((module, index) => (
                <ScrollReveal key={module.title} delay={0.2 + index * 0.15}>
                  <div className="card-neo h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <module.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className={`
                        text-xs px-2 py-1 rounded-full
                        ${module.complexity === "Vienkārši" ? "bg-green-100 text-green-700" : ""}
                        ${module.complexity === "Vidēji" ? "bg-yellow-100 text-yellow-700" : ""}
                        ${module.complexity === "Kompleksi" ? "bg-primary/10 text-primary" : ""}
                      `}>
                        {module.complexity}
                      </span>
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">{module.title}</h4>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Output */}
            <ScrollReveal delay={0.8} className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 glass-warm px-6 py-3 rounded-xl">
                <Settings className="w-5 h-5 text-primary animate-spin" style={{ animationDuration: "3s" }} />
                <span className="font-medium text-foreground">Automatizēts rezultāts</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: Benefits ========== */}
      <section className="section-warm">
        <div className="container-neo section-padding">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <span className="chip mb-4 inline-block">Ieguvumi</span>
                <h2 className="mb-6 text-foreground">
                  Ko jūs <span className="text-gradient-orange">iegūstat</span>
                </h2>
                <p className="text-muted-foreground mb-8">
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
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <ScrollReveal key={benefit} delay={index * 0.1} direction="right">
                    <div className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border hover-lift">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: Philosophy ========== */}
      <section className="section-offwhite grid-overlay-subtle">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-8">
                <Brain className="w-10 h-10 text-primary" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mb-6 text-foreground">
                Mēs būvējam <span className="text-gradient-orange">mašīnas</span>, nevis skriptus
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Katrs automatizācijas projekts ir unikāls. Mēs sākam ar jūsu procesu izpratni, 
                ne ar gatavu risinājumu. Rezultāts — sistēma, kas aug līdzi jūsu biznesam.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4">
                {["Zapier", "Make", "n8n", "Custom API", "OpenAI"].map((tool) => (
                  <span key={tool} className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground">
                    {tool}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: CTA ========== */}
      <section className="bg-gradient-hero">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="mb-6 text-foreground">
                Gatavi <span className="text-gradient-orange">automatizēt</span>?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-muted-foreground mb-8">
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
