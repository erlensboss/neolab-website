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
  Hexagon,
  Triangle,
  Circle,
  Square
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

// Inverted data point - white on orange
function DataPoint({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-white/60"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0.5, 1, 0],
        scale: [0, 1, 0.8, 1, 0]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function AiLab() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  const springConfig = { damping: 30, stiffness: 100 };
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
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Generate random data points
  const dataPoints = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
  }));

  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: INVERTED Hero — Orange Background, White Typography ========== */}
      <section 
        ref={containerRef}
        className="min-h-[95vh] relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, hsl(21 90% 48%) 0%, hsl(18 85% 42%) 40%, hsl(15 80% 35%) 100%)`,
        }}
      >
        {/* Subtle dark overlay for depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 30%, transparent 0%, hsla(15 80% 25% / 0.3) 100%)`,
          }}
        />

        {/* Inverted grid pattern — white lines on orange */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(hsla(0 0% 100% / 1) 1px, transparent 1px),
              linear-gradient(90deg, hsla(0 0% 100% / 1) 1px, transparent 1px),
              linear-gradient(hsla(0 0% 100% / 0.5) 0.5px, transparent 0.5px),
              linear-gradient(90deg, hsla(0 0% 100% / 0.5) 0.5px, transparent 0.5px)
            `,
            backgroundSize: "120px 120px, 120px 120px, 24px 24px, 24px 24px",
          }}
        />
        
        {/* Animated white data points */}
        <div className="absolute inset-0 pointer-events-none">
          {dataPoints.map((point) => (
            <DataPoint key={point.id} x={point.x} y={point.y} delay={point.delay} />
          ))}
        </div>
        
        {/* Geometric shapes — white on orange */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          {/* Rotating rings */}
          {[1, 2, 3, 4].map((ring) => (
            <motion.circle
              key={ring}
              cx="50%"
              cy="50%"
              r={60 + ring * 50}
              fill="none"
              stroke="hsla(0, 0%, 100%, 0.08)"
              strokeWidth="0.5"
              strokeDasharray={`${ring * 8} ${ring * 16}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: ring % 2 === 0 ? 360 : -360 }}
              transition={{ 
                opacity: { duration: 2, delay: ring * 0.2 },
                rotate: { duration: 80 * ring, repeat: Infinity, ease: "linear" }
              }}
            />
          ))}
          
          {/* Horizontal scan lines */}
          {[0, 1, 2, 3].map((i) => (
            <motion.line
              key={`scan-h-${i}`}
              x1="0%"
              y1={`${15 + i * 20}%`}
              x2="100%"
              y2={`${15 + i * 20}%`}
              stroke="hsla(0, 0%, 100%, 0.04)"
              strokeWidth="1"
              strokeDasharray="4 12"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: i % 2 === 0 ? -200 : 200 }}
              transition={{ duration: 20 + i * 3, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </svg>
        
        {/* Cursor-reactive floating elements — white/translucent */}
        <motion.div
          className="absolute hidden lg:block"
          style={{
            left: useTransform(springX, [0, 1], ["10%", "20%"]),
            top: useTransform(springY, [0, 1], ["15%", "25%"]),
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <Hexagon className="w-16 h-16 text-white/10 stroke-[0.5]" />
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute hidden lg:block"
          style={{
            right: useTransform(springX, [0, 1], ["15%", "8%"]),
            top: useTransform(springY, [0, 1], ["20%", "12%"]),
          }}
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <Triangle className="w-12 h-12 text-white/8 stroke-[0.5]" />
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute hidden lg:block"
          style={{
            left: useTransform(springX, [0, 1], ["15%", "25%"]),
            bottom: useTransform(springY, [0, 1], ["20%", "30%"]),
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Square className="w-10 h-10 text-white/10 stroke-[0.5]" />
          </motion.div>
        </motion.div>
        
        {/* Central lab icon — inverted: white bg, orange icon */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block pointer-events-none"
          style={{
            x: useTransform(springX, [0, 1], [-15, 15]),
            y: useTransform(springY, [0, 1], [-15, 15]),
          }}
        >
          <div className="relative">
            {/* Outer glow rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-24 border border-dashed border-white/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-16 border border-white/15 rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/50" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-white/50" />
            </motion.div>
            
            {/* Central flask — inverted colors */}
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center"
              style={{
                boxShadow: "0 20px 60px hsla(0, 0%, 0%, 0.3), 0 0 100px hsla(0, 0%, 100%, 0.15)"
              }}
            >
              <FlaskConical className="w-14 h-14 text-primary" />
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Content — White text on orange */}
        <div className="container-neo section-padding relative z-10 flex items-center justify-center min-h-[95vh]">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-10">
                <FlaskConical className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white/90">Inovatīva jauniešu AI laboratorija</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h1 className="mb-8 text-white">
                <span className="block">AI Lab</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Vide, kur mākslīgais intelekts tiek pētīts, izmēģināts un izmantots praksē, nevis tikai apspriests teorijā.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="inline-flex items-center gap-3 text-sm text-white/70 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10">
                <Lock className="w-4 h-4" />
                <span>Pieejams tikai NEOLab partneriem</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Bottom fade to next section */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: `linear-gradient(to top, hsl(35 25% 96%) 0%, transparent 100%)`
          }}
        />
      </section>

      {/* ========== SECTION 2: Current Experiments ========== */}
      <section className="section-warm">
        <div className="container-neo section-padding">
          <ScrollReveal className="mb-16">
            <span className="chip mb-4 inline-flex items-center gap-2">
              <Cpu className="w-3 h-3" />
              Aktīvie projekti
            </span>
            <h2 className="text-foreground">Kas šobrīd notiek laboratorijā</h2>
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
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{exp.title}</h3>
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
              <h2 className="mb-6 text-foreground">
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
              <h2 className="mb-6 text-foreground">
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
