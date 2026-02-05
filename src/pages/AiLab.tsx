import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Zap, Cpu, Sparkles, ArrowRight, Lock, Lightbulb, FlaskConical, Rocket, Hexagon, Triangle, Circle, Square, Shield, Users, Brain, Target, HelpCircle, Clock, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const experiments = [{
  id: "exp-001",
  title: "Prognozējošā analītika",
  status: "Izstrādē",
  description: "AI modeli, kas prognozē klientu uzvedību pirms tā notiek"
}, {
  id: "exp-002",
  title: "Satura ģenerēšana",
  status: "Testēšana",
  description: "Automatizēta, zīmolam pielāgota satura radīšana"
}, {
  id: "exp-003",
  title: "Voice Analytics",
  status: "Koncepcija",
  description: "Zvanu analīze ar AI — insights bez manuālas klausīšanās"
}];

// Subtle star particle
function Star({
  x,
  y,
  size,
  delay
}: {
  x: number;
  y: number;
  size: number;
  delay: number;
}) {
  return <motion.div className="absolute rounded-full bg-white" style={{
    left: `${x}%`,
    top: `${y}%`,
    width: size,
    height: size
  }} initial={{
    opacity: 0
  }} animate={{
    opacity: [0, 0.6, 0.3, 0.6, 0]
  }} transition={{
    duration: 4 + Math.random() * 3,
    delay,
    repeat: Infinity,
    ease: "easeInOut"
  }} />;
}
export default function AiLab() {
  const { t, getLocalizedPath } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = {
    damping: 30,
    stiffness: 100
  };
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
  const stars = Array.from({
    length: 40
  }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    // 0.5px to 2px
    delay: Math.random() * 6
  }));
  return <div className="overflow-hidden">
      {/* ========== SECTION 1: INVERTED Hero — Cosmos/Night Sky ========== */}
      <section ref={containerRef} className="min-h-[95vh] relative overflow-hidden" style={{
      background: `linear-gradient(160deg, hsl(21 85% 45%) 0%, hsl(18 80% 38%) 35%, hsl(12 70% 28%) 70%, hsl(8 60% 20%) 100%)`
    }}>
        {/* Deep space overlay for cosmos feel */}
        <div className="absolute inset-0" style={{
        background: `
              radial-gradient(ellipse 100% 80% at 50% 20%, transparent 0%, hsla(8 60% 15% / 0.4) 100%),
              radial-gradient(circle 300px at 20% 80%, hsla(25 90% 50% / 0.08) 0%, transparent 100%),
              radial-gradient(circle 400px at 85% 30%, hsla(30 80% 55% / 0.06) 0%, transparent 100%)
            `
      }} />

        {/* Subtle star field - very low opacity, won't interfere with text */}
        <div className="absolute inset-0 pointer-events-none">
          {stars.map(star => <Star key={star.id} x={star.x} y={star.y} size={star.size} delay={star.delay} />)}
        </div>
        
        {/* Distant nebula glow - very subtle */}
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{
        background: `
              radial-gradient(ellipse 40% 30% at 75% 25%, hsla(35 100% 70% / 0.1) 0%, transparent 70%),
              radial-gradient(ellipse 35% 25% at 20% 70%, hsla(21 90% 55% / 0.08) 0%, transparent 70%)
            `
      }} />

        {/* Hero Content — Enhanced text with shadows */}
        <div className="container-neo section-padding relative z-10 flex items-center justify-center min-h-[95vh]">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-10" style={{
              boxShadow: "0 4px 20px hsla(0, 0%, 0%, 0.2)"
            }}>
                <FlaskConical className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white/90">Inovatīva jauniešu AI laboratorija</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h1 className="mb-8 text-white font-bold" style={{
              textShadow: "0 4px 30px hsla(0, 0%, 0%, 0.4), 0 2px 10px hsla(0, 0%, 0%, 0.3)"
            }}>
                AI Lab
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium" style={{
              textShadow: "0 2px 20px hsla(0, 0%, 0%, 0.5), 0 1px 4px hsla(0, 0%, 0%, 0.3)"
            }}>
                Vide, kur mākslīgais intelekts tiek pētīts, izmēģināts un izmantots praksē, nevis tikai apspriests teorijā.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="inline-flex items-center gap-3 text-sm text-white/80 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10" style={{
              boxShadow: "0 4px 20px hsla(0, 0%, 0%, 0.2)"
            }}>
                <Lock className="w-4 h-4" />
                <span>Pieejams tikai NEOLab partneriem</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{
        background: `linear-gradient(to top, hsl(18 80% 38%) 0%, transparent 100%)`
      }} />
      </section>

      {/* ========== SECTION 2: Kas ir AI Lab? — Inverted Cosmos Style ========== */}
      <section className="relative overflow-hidden" style={{
      background: `linear-gradient(180deg, hsl(18 80% 38%) 0%, hsl(15 75% 32%) 50%, hsl(12 70% 28%) 100%)`
    }}>
        {/* Subtle star field continues */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({
          length: 25
        }, (_, i) => <motion.div key={`star-s2-${i}`} className="absolute rounded-full bg-white" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: Math.random() * 1.5 + 0.5,
          height: Math.random() * 1.5 + 0.5
        }} initial={{
          opacity: 0
        }} animate={{
          opacity: [0, 0.4, 0.2, 0.4, 0]
        }} transition={{
          duration: 5 + Math.random() * 3,
          delay: Math.random() * 4,
          repeat: Infinity,
          ease: "easeInOut"
        }} />)}
        </div>

        {/* Nebula glow accents */}
        <div className="absolute inset-0 pointer-events-none" style={{
        background: `
              radial-gradient(ellipse 50% 40% at 10% 50%, hsla(35 100% 70% / 0.06) 0%, transparent 70%),
              radial-gradient(ellipse 40% 50% at 90% 30%, hsla(21 90% 55% / 0.05) 0%, transparent 70%)
            `
      }} />

        <div className="container-neo section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-8" style={{
                boxShadow: "0 4px 20px hsla(0, 0%, 0%, 0.2)"
              }}>
                  <FlaskConical className="w-4 h-4 text-white/80" />
                  <span className="text-sm font-medium text-white/80">Par laboratoriju</span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <h2 className="text-white mb-8" style={{
                textShadow: "0 4px 30px hsla(0, 0%, 0%, 0.4)"
              }}>
                  Kas ir <span className="text-white/60">AI Lab</span>?
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <p className="text-lg text-white/85 mb-6 leading-relaxed" style={{
                textShadow: "0 2px 15px hsla(0, 0%, 0%, 0.4)"
              }}>
                  AI Lab ir NEOLab veidota attīstības un eksperimentu vide, kas fokusējas uz mākslīgā intelekta praktisku izpēti, veidošanu un pielietošanu.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <p className="text-lg text-white/75 mb-6 leading-relaxed" style={{
                textShadow: "0 2px 15px hsla(0, 0%, 0%, 0.4)"
              }}>
                  Tā ir vieta, kur jaunieši ar interesi par tehnoloģijām strādā ar reāliem rīkiem, reāliem scenārijiem un reālām problēmām. Attīstoties prasmēs, spējās un domāšanā, šeit top AI un tehnoloģiju risinājumi, kuriem ir praktiska vērtība.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.4}>
                <p className="text-base text-white/60 italic" style={{
                textShadow: "0 2px 10px hsla(0, 0%, 0%, 0.3)"
              }}>
                  AI Lab tiek veidots ar skatu uz ilgtermiņa attīstību, nevis ātru rezultātu.
                </p>
              </ScrollReveal>
            </div>

            {/* Right: Visual Element — Mysterious orb/constellation */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="relative flex items-center justify-center py-12">
                {/* Central glowing orb */}
                <motion.div className="relative" animate={{
                scale: [1, 1.02, 1]
              }} transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}>
                  {/* Outer glow rings */}
                  <motion.div animate={{
                  rotate: 360
                }} transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear"
                }} className="absolute -inset-16 md:-inset-20 border border-dashed border-white/8 rounded-full" />
                  <motion.div animate={{
                  rotate: -360
                }} transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear"
                }} className="absolute -inset-10 md:-inset-14 border border-white/10 rounded-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/40" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/40" />
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/30" />
                  </motion.div>
                  
                  {/* Inner pulsing ring */}
                  <motion.div animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }} transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} className="absolute -inset-4 md:-inset-6 rounded-full border border-white/20" />
                  
                  {/* Central orb */}
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center" style={{
                  boxShadow: "0 0 60px hsla(0, 0%, 100%, 0.3), 0 0 120px hsla(21, 90%, 50%, 0.2), inset 0 -4px 20px hsla(0, 0%, 0%, 0.1)"
                }}>
                    <FlaskConical className="w-10 h-10 md:w-14 md:h-14 text-primary" />
                  </div>
                </motion.div>

                {/* Floating accent dots */}
                <motion.div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white/30" animate={{
                y: [-5, 5, -5],
                opacity: [0.3, 0.6, 0.3]
              }} transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }} />
                <motion.div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-white/25" animate={{
                y: [5, -5, 5],
                opacity: [0.2, 0.5, 0.2]
              }} transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }} />
                <motion.div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-white/20" animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2]
              }} transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Bottom fade to lighter section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{
        background: `linear-gradient(to top, hsl(25 70% 55%) 0%, transparent 100%)`
      }} />
      </section>

      {/* ========== SECTION 3: Ko mēs darām — Lighter inverted style ========== */}
      <section className="relative overflow-hidden" style={{
      background: `linear-gradient(180deg, hsl(25 70% 55%) 0%, hsl(23 65% 52%) 50%, hsl(21 60% 48%) 100%)`
    }}>
        {/* Subtle stars - sparser here */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({
          length: 15
        }, (_, i) => <motion.div key={`star-s3-${i}`} className="absolute rounded-full bg-white" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: Math.random() * 1 + 0.5,
          height: Math.random() * 1 + 0.5
        }} initial={{
          opacity: 0
        }} animate={{
          opacity: [0, 0.3, 0.15, 0.3, 0]
        }} transition={{
          duration: 6 + Math.random() * 3,
          delay: Math.random() * 5,
          repeat: Infinity,
          ease: "easeInOut"
        }} />)}
        </div>

        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: `linear-gradient(90deg, transparent 0%, hsla(0, 0%, 100%, 0.2) 50%, transparent 100%)`
      }} />

        <div className="container-neo section-padding relative z-10">
          {/* Header */}
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6" style={{
            boxShadow: "0 4px 20px hsla(0, 0%, 0%, 0.15)"
          }}>
              <Cpu className="w-4 h-4 text-white/80" />
              <span className="text-sm font-medium text-white/80">Mūsu darbība</span>
            </div>
            <h2 className="text-white" style={{
            textShadow: "0 4px 25px hsla(0, 0%, 0%, 0.3)"
          }}>
              Ko mēs darām <span className="text-white/60">AI Lab ietvaros</span>
            </h2>
          </ScrollReveal>

          {/* Activity cards - clean grid with white accents */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[{
            icon: Sparkles,
            text: "Pētām jaunus AI rīkus un platformas"
          }, {
            icon: Cpu,
            text: "Testējam automatizācijas un datu apstrādes scenārijus"
          }, {
            icon: Lightbulb,
            text: "Veidojam prototipus un eksperimentālus risinājumus"
          }, {
            icon: Zap,
            text: "Analizējam, kas strādā praksē un kas ne"
          }, {
            icon: FlaskConical,
            text: "Krājam pieredzi, nevis tikai zināšanas"
          }].map((item, index) => <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div whileHover={{
              y: -4,
              scale: 1.02
            }} className="relative p-6 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm" style={{
              boxShadow: "0 8px 32px hsla(0, 0%, 0%, 0.15)"
            }}>
                  {/* White accent line at top */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white/90" />
                    </div>
                    <p className="text-white/90 text-base leading-relaxed pt-2" style={{
                  textShadow: "0 1px 8px hsla(0, 0%, 0%, 0.3)"
                }}>
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>)}
          </div>

          {/* Bottom note */}
          <ScrollReveal delay={0.5}>
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-block px-6 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm" style={{
              boxShadow: "0 4px 20px hsla(0, 0%, 0%, 0.1)"
            }}>
                <p className="text-white/70 italic" style={{
                textShadow: "0 1px 8px hsla(0, 0%, 0%, 0.2)"
              }}>Fokusējamies uz izpratni un izaugsmi.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{
        background: `linear-gradient(to top, hsl(28 75% 62%) 0%, transparent 100%)`
      }} />
        
        {/* Bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px z-10" style={{
        background: `linear-gradient(90deg, transparent 0%, hsla(0, 0%, 100%, 0.2) 50%, transparent 100%)`
      }} />
      </section>

      {/* ========== SECTION 4: Kāpēc AI Lab — Lightest, Most Advanced ========== */}
      <section className="relative overflow-hidden" style={{
        background: `linear-gradient(180deg, hsl(28 75% 62%) 0%, hsl(30 70% 68%) 40%, hsl(32 65% 72%) 100%)`
      }}>
        {/* Very subtle stars - minimal */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({
            length: 10
          }, (_, i) => <motion.div key={`star-s4-${i}`} className="absolute rounded-full bg-white" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 1 + 0.5,
            height: Math.random() * 1 + 0.5
          }} initial={{
            opacity: 0
          }} animate={{
            opacity: [0, 0.25, 0.1, 0.25, 0]
          }} transition={{
            duration: 7 + Math.random() * 4,
            delay: Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut"
          }} />)}
        </div>

        {/* Advanced geometric pattern - DNA helix inspired */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Left side helix */}
          <motion.div 
            className="absolute left-0 top-0 bottom-0 w-32 opacity-[0.06]"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            {Array.from({ length: 8 }, (_, i) => (
              <div key={`helix-l-${i}`} className="absolute" style={{ top: `${i * 14}%` }}>
                <div className="w-16 h-16 border border-white rounded-full" style={{ marginLeft: i % 2 === 0 ? '0' : '16px' }} />
              </div>
            ))}
          </motion.div>
          
          {/* Right side helix */}
          <motion.div 
            className="absolute right-0 top-0 bottom-0 w-32 opacity-[0.06]"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          >
            {Array.from({ length: 8 }, (_, i) => (
              <div key={`helix-r-${i}`} className="absolute" style={{ top: `${i * 14}%` }}>
                <div className="w-16 h-16 border border-white rounded-full" style={{ marginLeft: i % 2 === 0 ? '16px' : '0' }} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Top border accent - strong separation */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{
          background: `linear-gradient(90deg, transparent 0%, hsla(0, 0%, 100%, 0.4) 50%, transparent 100%)`
        }} />

        <div className="container-neo section-padding relative z-10">
          {/* Header with advanced badge */}
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/30 bg-white/15 backdrop-blur-md mb-6" style={{
              boxShadow: "0 8px 32px hsla(0, 0%, 0%, 0.1), inset 0 1px 0 hsla(0, 0%, 100%, 0.3)"
            }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Target className="w-4 h-4 text-white" />
              </motion.div>
              <span className="text-sm font-semibold text-white tracking-wide">Mūsu misija</span>
            </div>
            <h2 className="text-white" style={{
              textShadow: "0 4px 30px hsla(0, 0%, 0%, 0.25)"
            }}>
              Kāpēc <span className="text-white/70">AI Lab</span> tiek veidots
            </h2>
          </ScrollReveal>

          {/* Main content grid - advanced layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Intro text with sophisticated styling */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.1}>
                <div className="relative p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md" style={{
                  boxShadow: "0 16px 48px hsla(0, 0%, 0%, 0.12), inset 0 1px 0 hsla(0, 0%, 100%, 0.2)"
                }}>
                  {/* Decorative corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30 rounded-tl-lg" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/30 rounded-br-lg" />
                  
                  <p className="text-lg text-white/95 leading-relaxed font-medium" style={{
                    textShadow: "0 2px 12px hsla(0, 0%, 0%, 0.2)"
                  }}>
                    Latvijā un plašākā reģionā trūkst vietu, kur jaunieši var droši un atbildīgi attīstīt savas tehnoloģiju prasmes ar mākslīgo intelektu.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Feature cards - advanced glass morphism */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { icon: Shield, text: "Droši strādāt ar mākslīgo intelektu", delay: 0.15 },
                  { icon: Lightbulb, text: "Mācīties caur darīšanu, nevis tikai teoriju", delay: 0.2 },
                  { icon: Brain, text: "Attīstīt reālas digitālās prasmes", delay: 0.25 },
                  { icon: Users, text: "Veidot domāšanu, kas balstīta tehnoloģijās un atbildībā", delay: 0.3 }
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={item.delay}>
                    <motion.div 
                      whileHover={{ 
                        y: -6, 
                        scale: 1.02,
                        boxShadow: "0 24px 48px hsla(0, 0%, 0%, 0.15), inset 0 1px 0 hsla(0, 0%, 100%, 0.4)"
                      }}
                      className="relative p-6 rounded-2xl border border-white/25 bg-white/15 backdrop-blur-lg overflow-hidden group"
                      style={{
                        boxShadow: "0 12px 40px hsla(0, 0%, 0%, 0.1), inset 0 1px 0 hsla(0, 0%, 100%, 0.25)"
                      }}
                    >
                      {/* Animated gradient overlay on hover */}
                      <motion.div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: "linear-gradient(135deg, hsla(0, 0%, 100%, 0.1) 0%, transparent 50%)"
                        }}
                      />
                      
                      {/* Top accent line */}
                      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      
                      <div className="relative flex items-start gap-4">
                        <motion.div 
                          className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/20 border border-white/20 flex items-center justify-center"
                          whileHover={{ rotate: 5 }}
                          style={{
                            boxShadow: "0 4px 16px hsla(0, 0%, 0%, 0.1)"
                          }}
                        >
                          <item.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <p className="text-white font-medium leading-relaxed pt-1" style={{
                          textShadow: "0 1px 10px hsla(0, 0%, 0%, 0.2)"
                        }}>
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom statement - sophisticated typography */}
          <ScrollReveal delay={0.4}>
            <div className="mt-16 max-w-3xl mx-auto">
              <div className="relative text-center p-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md" style={{
                boxShadow: "0 12px 40px hsla(0, 0%, 0%, 0.1), inset 0 1px 0 hsla(0, 0%, 100%, 0.2)"
              }}>
                {/* Decorative side lines */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent hidden md:block" />
                <div className="absolute right-8 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent hidden md:block" />
                
                <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed" style={{
                  textShadow: "0 2px 20px hsla(0, 0%, 0%, 0.2)"
                }}>
                  AI Lab tiek veidots kā šāda vide.
                </p>
                <p className="text-base text-white/70 mt-3 italic" style={{
                  textShadow: "0 1px 8px hsla(0, 0%, 0%, 0.15)"
                }}>
                  Nevis kustība, bet telpa, kurā var augt.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Bottom fade to CTA section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{
          background: `linear-gradient(to top, hsl(35 25% 96%) 0%, transparent 100%)`
        }} />
        
        {/* Bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px z-10" style={{
          background: `linear-gradient(90deg, transparent 0%, hsla(0, 0%, 100%, 0.25) 50%, transparent 100%)`
        }} />
      </section>

      {/* ========== SECTION 5: FAQ ========== */}
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
                  icon: HelpCircle,
                  question: "Vai AI Lab ir pakalpojums?",
                  answer: "Nē. AI Lab nav pakalpojums un nav produkts. Tā ir attīstības vide un iniciatīva.",
                  gradient: "from-primary to-orange-500",
                },
                {
                  icon: Layers,
                  question: "Vai AI Lab aizvieto AI automatizācijas pakalpojumus?",
                  answer: "Nē. AI Lab pastāv paralēli un kalpo kā pieredzes un izpētes bāze.",
                  gradient: "from-orange-500 to-amber-500",
                },
                {
                  icon: Clock,
                  question: "Kad AI Lab pieeja ir īpaši nozīmīga?",
                  answer: "Ja nepieciešama dziļāka izpratne par tehnoloģijām, nestandarta risinājumi vai ilgtermiņa skatījums uz AI attīstību.",
                  gradient: "from-amber-500 to-yellow-500",
                },
                {
                  icon: Users,
                  question: "Vai AI Lab ir atvērts visiem?",
                  answer: "AI Lab veidojas pakāpeniski. Šobrīd tas ir attīstības stadijā, un dalība notiek ar atlasi.",
                  gradient: "from-yellow-500 to-amber-400",
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

      {/* ========== SECTION 6: Contact CTA ========== */}
      <section className="bg-gradient-hero">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 text-sm text-primary mb-6">
                <Rocket className="w-4 h-4" />
                <span>Seko līdzi attīstībai</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="mb-6 text-foreground">
                AI Lab aug. <span className="text-gradient-orange">Tāpat kā cilvēki, kas to veido.</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8">
                Ja tevi interesē mākslīgais intelekts, tehnoloģijas un digitālā domāšana, 
                seko līdzi NEOLab attīstībai vai sazinies ar mums.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                <Button variant="hero" size="xl">
                  Sazināties ar NEOLab
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>;
}