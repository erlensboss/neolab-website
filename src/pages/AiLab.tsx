import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  Zap, 
  Cpu, 
  Sparkles, 
  ArrowRight,
  Lock,
  Lightbulb,
  FlaskConical,
  Rocket,
  Activity,
  Binary,
  Waves
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

// Particle component for background
function Particle({ delay, duration, x, y }: { delay: number; duration: number; x: number; y: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-primary/40"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Signal wave component
function SignalWave({ delay }: { delay: number }) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-primary/20"
      initial={{ scale: 0, opacity: 0.5 }}
      animate={{ scale: 4, opacity: 0 }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

export default function AiLab() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        mouseX.set(x);
        mouseY.set(y);
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Generate random particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: Mystery Opening with Dynamic Background ========== */}
      <section 
        ref={containerRef}
        className="min-h-[90vh] relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, hsl(40 20% 98%) 0%, hsl(35 25% 95%) 50%, hsl(30 15% 93%) 100%)`,
        }}
      >
        {/* Animated grid that reacts to scroll */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsla(21 90% 48% / 0.04) 1px, transparent 1px),
              linear-gradient(90deg, hsla(21 90% 48% / 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        
        {/* Signal waves emanating from center */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <SignalWave delay={0} />
          <SignalWave delay={1.5} />
          <SignalWave delay={3} />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <Particle key={particle.id} {...particle} />
          ))}
        </div>
        
        {/* Data flow lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          {/* Horizontal flowing lines */}
          {[20, 40, 60, 80].map((y, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0%" y1={`${y}%`} x2="100%" y2={`${y}%`}
              stroke="hsl(21 90% 48%)"
              strokeWidth="0.5"
              strokeDasharray="10 20"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -100 }}
              transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
              opacity="0.1"
            />
          ))}
          
          {/* Vertical flowing lines */}
          {[15, 35, 65, 85].map((x, i) => (
            <motion.line
              key={`v-${i}`}
              x1={`${x}%`} y1="0%" x2={`${x}%`} y2="100%"
              stroke="hsl(21 90% 48%)"
              strokeWidth="0.5"
              strokeDasharray="8 16"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: i % 2 === 0 ? -80 : 80 }}
              transition={{ duration: 15 + i * 3, repeat: Infinity, ease: "linear" }}
              opacity="0.08"
            />
          ))}
        </svg>
        
        {/* Floating tech elements that react to cursor */}
        <motion.div
          className="absolute top-[15%] left-[10%] hidden lg:block"
          style={{
            x: useTransform(springX, [0, 1], [-20, 20]),
            y: useTransform(springY, [0, 1], [-15, 15]),
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border border-dashed border-primary/20 rounded-lg flex items-center justify-center"
          >
            <Binary className="w-6 h-6 text-primary/30" />
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute top-[25%] right-[15%] hidden lg:block"
          style={{
            x: useTransform(springX, [0, 1], [15, -15]),
            y: useTransform(springY, [0, 1], [-10, 10]),
          }}
        >
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass-warm p-4 rounded-xl border border-primary/10"
          >
            <Activity className="w-6 h-6 text-primary/50" />
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-[20%] left-[20%] hidden lg:block"
          style={{
            x: useTransform(springX, [0, 1], [-10, 10]),
            y: useTransform(springY, [0, 1], [10, -10]),
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 rounded-full border-2 border-primary/15 flex items-center justify-center"
          >
            <Waves className="w-5 h-5 text-primary/40" />
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-[30%] right-[12%] hidden lg:block"
          style={{
            x: useTransform(springX, [0, 1], [20, -20]),
            y: useTransform(springY, [0, 1], [15, -15]),
          }}
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border border-primary/10 rounded-full"
          >
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/30"
            />
          </motion.div>
        </motion.div>
        
        {/* Central pulsing element */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block pointer-events-none"
          style={{
            x: useTransform(springX, [0, 1], [-5, 5]),
            y: useTransform(springY, [0, 1], [-5, 5]),
          }}
        >
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-16 rounded-full bg-primary/10"
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -inset-8 rounded-full bg-primary/15"
            />
            <div className="w-24 h-24 rounded-full bg-gradient-orange flex items-center justify-center shadow-orange">
              <FlaskConical className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
        </motion.div>

        <div className="container-neo section-padding relative z-10 flex items-center min-h-[90vh]">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-card/80 backdrop-blur-sm mb-8">
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
              <div className="flex items-center gap-3 text-sm text-muted-foreground bg-card/60 backdrop-blur-sm px-4 py-3 rounded-lg inline-flex border border-border/50">
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
                  whileHover={{ x: 4, y: -4 }}
                  className="glass-warm rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 border border-border/50 transition-shadow duration-300 hover:shadow-card"
                >
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Sparkles className="w-8 h-8 text-primary" />
                    </motion.div>
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
        <div className="container-neo section-padding relative z-10">
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
        <div className="container-neo section-padding relative z-10">
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
