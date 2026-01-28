import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Zap, 
  Cpu, 
  Sparkles, 
  ArrowRight,
  Lock,
  Lightbulb,
  FlaskConical,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const experiments = [
  {
    id: "exp-001",
    title: "Prognozējošā analītika",
    status: "Izstrādē",
    description: "AI modeli, kas prognozē klientu uzvedību pirms tā notiek",
  },
  {
    id: "exp-002",
    title: "Satura ģenerēšana",
    status: "Testēšana",
    description: "Automatizēta, zīmolam pielāgota satura radīšana",
  },
  {
    id: "exp-003",
    title: "Voice Analytics",
    status: "Koncepcija",
    description: "Zvanu analīze ar AI — insights bez manuālas klausīšanās",
  },
];

export default function AiLab() {
  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: Mystery Opening ========== */}
      <section className="min-h-[80vh] relative bg-gradient-section">
        {/* Grid overlay with animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(hsla(21 90% 48% / 0.03) 1px, transparent 1px),
                linear-gradient(90deg, hsla(21 90% 48% / 0.03) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
          
          {/* Floating elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-primary/40"
          />
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-primary/30"
          />
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-primary/50"
          />
        </div>

        <div className="container-neo section-padding relative z-10 flex items-center min-h-[80vh]">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
                <FlaskConical className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Eksperimentāla telpa</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h1 className="mb-8">
                <span className="text-gradient-orange">AI Lab</span>
                <br />
                <span className="text-foreground/70">Kur rodas nākotne</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                Šī nav pakalpojumu lapa. Šī ir vieta, kur mēs eksperimentējam, 
                testējam un veidojam risinājumus, kas vēl nepastāv tirgū.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Lock className="w-4 h-4" />
                <span>Pieejams tikai NEOLab partneriem</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: Current Experiments ========== */}
      <section className="section-warm">
        <div className="container-neo section-padding">
          <ScrollReveal className="mb-16">
            <span className="chip mb-4 inline-flex items-center gap-2">
              <Cpu className="w-3 h-3" />
              Aktīvie projekti
            </span>
            <h2>Kas šobrīd notiek laboratorijā</h2>
          </ScrollReveal>

          <div className="space-y-6">
            {experiments.map((exp, index) => (
              <ScrollReveal key={exp.id} delay={index * 0.15}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="glass-warm rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-muted-foreground">{exp.id}</span>
                      <span className={`
                        text-xs px-2 py-1 rounded-full
                        ${exp.status === "Izstrādē" ? "bg-primary/10 text-primary" : ""}
                        ${exp.status === "Testēšana" ? "bg-yellow-100 text-yellow-700" : ""}
                        ${exp.status === "Koncepcija" ? "bg-muted text-muted-foreground" : ""}
                      `}>
                        {exp.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full border border-dashed border-primary/30 flex items-center justify-center">
                      <Lock className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: Philosophy ========== */}
      <section className="section-offwhite grid-overlay-subtle">
        <div className="container-neo section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="w-20 h-20 rounded-2xl bg-gradient-orange flex items-center justify-center mx-auto mb-8 shadow-orange">
                <Lightbulb className="w-10 h-10 text-primary-foreground" />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="mb-6">
                Mēs nedarām to, ko visi citi
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8">
                AI Lab ir vieta, kur mēs riskējam, mācāmies un atklājam. 
                Katrs eksperiments var kļūt par nākamo lielo risinājumu — vai palikt 
                kā mācību stunda. Abos gadījumos — progress.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4">
                {["Prototipēšana", "A/B testēšana", "Mašīnmācīšanās", "NLP", "Computer Vision"].map((tag) => (
                  <span key={tag} className="chip-outline">
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: Contact CTA ========== */}
      <section className="bg-gradient-hero">
        <div className="container-neo section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 text-sm text-primary mb-6">
                <Rocket className="w-4 h-4" />
                <span>Interese par sadarbību?</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="mb-6">
                Sazināties ar <span className="text-gradient-orange">NEOLab</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8">
                Ja jūs interesē agrīna piekļuve mūsu eksperimentiem vai 
                vēlaties būt beta testētājs — sazinieties.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <Link to="/bezmaksas-konsultacija">
                <Button variant="hero" size="xl">
                  Sazināties ar NEOLab
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
