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

// Subtle star particle
function Star({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{ 
        left: `${x}%`, 
        top: `${y}%`,
        width: size,
        height: size,
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 0.6, 0.3, 0.6, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
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

  // Generate sparse star field - small and subtle
  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5, // 0.5px to 2px
    delay: Math.random() * 6,
  }));

  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: INVERTED Hero — Cosmos/Night Sky ========== */}
      <section 
        ref={containerRef}
        className="min-h-[95vh] relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, hsl(21 85% 45%) 0%, hsl(18 80% 38%) 35%, hsl(12 70% 28%) 70%, hsl(8 60% 20%) 100%)`,
        }}
      >
        {/* Deep space overlay for cosmos feel */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 80% at 50% 20%, transparent 0%, hsla(8 60% 15% / 0.4) 100%),
              radial-gradient(circle 300px at 20% 80%, hsla(25 90% 50% / 0.08) 0%, transparent 100%),
              radial-gradient(circle 400px at 85% 30%, hsla(30 80% 55% / 0.06) 0%, transparent 100%)
            `,
          }}
        />

        {/* Subtle star field - very low opacity, won't interfere with text */}
        <div className="absolute inset-0 pointer-events-none">
          {stars.map((star) => (
            <Star key={star.id} x={star.x} y={star.y} size={star.size} delay={star.delay} />
          ))}
        </div>
        
        {/* Distant nebula glow - very subtle */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 40% 30% at 75% 25%, hsla(35 100% 70% / 0.1) 0%, transparent 70%),
              radial-gradient(ellipse 35% 25% at 20% 70%, hsla(21 90% 55% / 0.08) 0%, transparent 70%)
            `,
          }}
        />

        {/* Hero Content — Enhanced text with shadows */}
        <div className="container-neo section-padding relative z-10 flex items-center justify-center min-h-[95vh]">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-10"
                style={{
                  boxShadow: "0 4px 20px hsla(0, 0%, 0%, 0.2)"
                }}
              >
                <FlaskConical className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white/90">Inovatīva jauniešu AI laboratorija</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h1 
                className="mb-8 text-white font-bold"
                style={{
                  textShadow: "0 4px 30px hsla(0, 0%, 0%, 0.4), 0 2px 10px hsla(0, 0%, 0%, 0.3)"
                }}
              >
                AI Lab
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p 
                className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
                style={{
                  textShadow: "0 2px 20px hsla(0, 0%, 0%, 0.5), 0 1px 4px hsla(0, 0%, 0%, 0.3)"
                }}
              >
                Vide, kur mākslīgais intelekts tiek pētīts, izmēģināts un izmantots praksē, nevis tikai apspriests teorijā.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div 
                className="inline-flex items-center gap-3 text-sm text-white/80 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10"
                style={{
                  boxShadow: "0 4px 20px hsla(0, 0%, 0%, 0.2)"
                }}
              >
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
