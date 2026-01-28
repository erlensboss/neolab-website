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
      <section className="bg-gradient-hero min-h-[90vh] flex items-center relative overflow-hidden bg-atmosphere">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Centered content */}
            <div className="text-center mb-16">
              <ScrollReveal>
                <span className="chip-outline mb-8 inline-block text-sm">Problēma</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="mb-8 text-foreground">
                  Jūsu komanda tērē laiku <span className="text-gradient-orange">robotu darbam</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
                  AI automatizācija nav par cilvēku aizstāšanu. Tā ir par to, lai 
                  cilvēki varētu darīt to, ko roboti nevar — domāt, radīt, risināt problēmas.
                </p>
              </ScrollReveal>
            </div>
            
            {/* System Visual - centered workflow diagram */}
            <ScrollReveal delay={0.3}>
              <div className="relative max-w-4xl mx-auto mb-16">
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-10 md:p-12 border border-border shadow-card">
                  {/* Flow visualization */}
                  <svg className="w-full h-40" viewBox="0 0 400 80">
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
                  <div className="absolute inset-0 flex items-center">
                    {[
                      { icon: Zap, label: "Trigeris", delay: 0.3, position: "12.5%" },      // x=50 out of 400 = 12.5%
                      { icon: Layers, label: "Process", delay: 0.5, position: "40%" },     // x=160 out of 400 = 40%
                      { icon: Brain, label: "AI", delay: 0.7, position: "70%" },           // x=280 out of 400 = 70%
                      { icon: BarChart3, label: "Rezultāts", delay: 0.9, position: "92.5%" }, // x=370 out of 400 = 92.5%
                    ].map((node, i) => (
                      <motion.div
                        key={node.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: node.delay }}
                        className="absolute flex flex-col items-center -translate-x-1/2"
                        style={{ left: node.position }}
                      >
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${i === 3 ? 'bg-gradient-orange shadow-orange' : 'bg-primary/10'}`}>
                          <node.icon className={`w-8 h-8 ${i === 3 ? 'text-primary-foreground' : 'text-primary'}`} />
                        </div>
                        <span className="text-sm font-medium text-foreground mt-3">{node.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Problem cards - grid below */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {manualProblems.map((item, index) => (
                <ScrollReveal key={index} delay={0.4 + index * 0.1}>
                  <div className="flex items-center gap-5 bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover-lift">
                    <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-7 h-7 text-destructive" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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
