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
  CheckCircle2
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

export default function AiAutomatizacija() {
  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: Manual Work Problem ========== */}
      <section className="bg-gradient-hero grid-overlay">
        <div className="container-neo section-padding">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="chip-outline mb-6 inline-block">Problēma</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="mb-8">
                Jūsu komanda tērē laiku <span className="text-gradient-orange">robotu darbam</span>
              </h1>
            </ScrollReveal>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {manualProblems.map((item, index) => (
                <ScrollReveal key={index} delay={0.2 + index * 0.1}>
                  <div className="flex items-center gap-4 bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border">
                    <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.5}>
              <p className="text-lg text-muted-foreground max-w-2xl">
                AI automatizācija nav par cilvēku aizstāšanu. Tā ir par to, lai 
                cilvēki varētu darīt to, ko roboti nevar — domāt, radīt, risināt problēmas.
              </p>
            </ScrollReveal>
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

          {/* Flow diagram */}
          <div className="relative max-w-5xl mx-auto">
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                d="M 200 100 Q 400 100 400 200 Q 400 300 600 300"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="8 4"
                opacity="0.3"
              />
            </svg>

            {/* Input trigger */}
            <ScrollReveal className="mb-8">
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
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="card-neo h-full"
                  >
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
                    <h4 className="font-semibold mb-2">{module.title}</h4>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Output */}
            <ScrollReveal delay={0.8} className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 glass-warm px-6 py-3 rounded-xl">
                <Settings className="w-5 h-5 text-primary animate-spin" style={{ animationDuration: "3s" }} />
                <span className="font-medium">Automatizēts rezultāts</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: Benefits (Asymmetric Layout) ========== */}
      <section className="section-warm">
        <div className="container-neo section-padding">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left: Large statement */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <span className="chip mb-4 inline-block">Ieguvumi</span>
                <h2 className="mb-6">
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

            {/* Right: Benefits grid */}
            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <ScrollReveal key={benefit} delay={index * 0.1} direction="right">
                    <div className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: How It Feels (Machine Building) ========== */}
      <section className="section-offwhite grid-overlay-subtle">
        <div className="container-neo section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-8">
                <Brain className="w-10 h-10 text-primary" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mb-6">
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
                  <span key={tool} className="px-4 py-2 bg-muted rounded-lg text-sm font-medium">
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
        <div className="container-neo section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="mb-6">
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
