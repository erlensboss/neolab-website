import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Zap, Cpu, Sparkles, ArrowRight, Lock, Lightbulb, FlaskConical, Rocket, Brain, Shield, Users, Target, HelpCircle, Clock, Layers, Bot, Workflow, Database, LineChart, Network, CircuitBoard, Code2, Gauge, GitBranch, MessageSquare } from "lucide-react";
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

// Floating icon component for background
function FloatingIcon({ 
  icon: Icon, 
  x, 
  y, 
  size = 24, 
  delay = 0,
  duration = 20,
  opacity = 0.08
}: { 
  icon: React.ElementType;
  x: string;
  y: string;
  size?: number;
  delay?: number;
  duration?: number;
  opacity?: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none text-primary"
      style={{ left: x, top: y, opacity }}
      animate={{
        y: [0, -15, 0, 15, 0],
        x: [0, 8, 0, -8, 0],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Icon size={size} strokeWidth={1.5} />
    </motion.div>
  );
}

// Floating geometric shape
function FloatingShape({ 
  x, 
  y, 
  size = 40, 
  delay = 0,
  type = "circle"
}: { 
  x: string;
  y: string;
  size?: number;
  delay?: number;
  type?: "circle" | "ring" | "dot";
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -10, 0, 10, 0],
        scale: [1, 1.1, 1, 0.95, 1],
        opacity: [0.06, 0.12, 0.06, 0.1, 0.06],
      }}
      transition={{
        duration: 15 + Math.random() * 10,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {type === "circle" && (
        <div 
          className="rounded-full bg-gradient-to-br from-primary/20 to-primary/5"
          style={{ width: size, height: size }}
        />
      )}
      {type === "ring" && (
        <div 
          className="rounded-full border-2 border-primary/15"
          style={{ width: size, height: size }}
        />
      )}
      {type === "dot" && (
        <div 
          className="rounded-full bg-primary/20"
          style={{ width: size, height: size }}
        />
      )}
    </motion.div>
  );
}

export default function AiLab() {
  const { t, getLocalizedPath } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: Hero — Light Theme with Floating Icons ========== */}
      <section 
        ref={containerRef} 
        className="min-h-[95vh] relative overflow-hidden"
        style={{
          background: `linear-gradient(165deg, hsl(35 40% 97%) 0%, hsl(30 30% 95%) 40%, hsl(25 35% 93%) 100%)`
        }}
      >
        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 20%, hsl(var(--primary) / 0.04) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 80% 80%, hsl(var(--primary) / 0.05) 0%, transparent 70%),
            radial-gradient(ellipse 50% 30% at 50% 50%, hsl(var(--primary) / 0.02) 0%, transparent 70%)
          `
        }} />

        {/* Floating Icons - positioned around edges, not overlapping center text area */}
        {/* Top Left Area */}
        <FloatingIcon icon={Brain} x="5%" y="15%" size={32} delay={0} opacity={0.07} />
        <FloatingIcon icon={Cpu} x="12%" y="8%" size={24} delay={2} opacity={0.06} />
        <FloatingIcon icon={Network} x="3%" y="35%" size={28} delay={4} opacity={0.05} />
        
        {/* Top Right Area */}
        <FloatingIcon icon={Bot} x="88%" y="12%" size={30} delay={1} opacity={0.07} />
        <FloatingIcon icon={CircuitBoard} x="92%" y="28%" size={26} delay={3} opacity={0.06} />
        <FloatingIcon icon={Code2} x="85%" y="5%" size={22} delay={5} opacity={0.05} />
        
        {/* Bottom Left Area */}
        <FloatingIcon icon={Database} x="8%" y="70%" size={28} delay={2.5} opacity={0.06} />
        <FloatingIcon icon={Workflow} x="4%" y="55%" size={24} delay={4.5} opacity={0.05} />
        <FloatingIcon icon={GitBranch} x="15%" y="80%" size={26} delay={1.5} opacity={0.07} />
        
        {/* Bottom Right Area */}
        <FloatingIcon icon={LineChart} x="90%" y="65%" size={28} delay={3.5} opacity={0.06} />
        <FloatingIcon icon={Gauge} x="82%" y="78%" size={24} delay={0.5} opacity={0.05} />
        <FloatingIcon icon={MessageSquare} x="95%" y="50%" size={22} delay={2} opacity={0.07} />
        
        {/* Mid-edges - very subtle */}
        <FloatingIcon icon={Sparkles} x="2%" y="48%" size={20} delay={6} opacity={0.04} />
        <FloatingIcon icon={Zap} x="97%" y="40%" size={20} delay={7} opacity={0.04} />

        {/* Floating Geometric Shapes - edges only */}
        <FloatingShape x="6%" y="25%" size={60} delay={0} type="ring" />
        <FloatingShape x="90%" y="20%" size={50} delay={2} type="circle" />
        <FloatingShape x="4%" y="65%" size={40} delay={4} type="dot" />
        <FloatingShape x="92%" y="72%" size={55} delay={1} type="ring" />
        <FloatingShape x="88%" y="45%" size={35} delay={3} type="circle" />
        <FloatingShape x="10%" y="85%" size={45} delay={5} type="ring" />

        {/* Grid pattern overlay - very subtle */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Hero Content */}
        <div className="container-neo section-padding relative z-10 flex items-center justify-center min-h-[95vh]">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-white/60 backdrop-blur-sm mb-8 shadow-sm">
                <FlaskConical className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {t("Jauniešu AI laboratorija", "Youth AI Laboratory")}
                </span>
              </div>
            </ScrollReveal>
            
            {/* Main H1 - Much bigger */}
            <ScrollReveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground leading-[1.1] tracking-tight">
                AI Lab –{" "}
                <span className="text-gradient-orange">
                  {t("Inovatīva jauniešu AI laboratorija", "Innovative Youth AI Laboratory")}
                </span>
              </h1>
            </ScrollReveal>
            
            {/* Subtitle */}
            <ScrollReveal delay={0.2}>
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
                {t(
                  "Vide, kur mākslīgais intelekts tiek pētīts, izmēģināts un izmantots praksē, nevis tikai apspriests teorijā.",
                  "An environment where artificial intelligence is researched, tested, and applied in practice, not just discussed in theory."
                )}
              </p>
            </ScrollReveal>

            {/* Access badge */}
            <ScrollReveal delay={0.3}>
              <div className="inline-flex items-center gap-3 text-sm text-muted-foreground bg-white/70 backdrop-blur-sm px-6 py-4 rounded-2xl border border-gray-200/60 shadow-sm">
                <Lock className="w-4 h-4 text-primary" />
                <span className="font-medium">
                  {t("Pieejams tikai NEOLab partneriem", "Available only to NEOLab partners")}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{
          background: `linear-gradient(to top, hsl(30 25% 96%) 0%, transparent 100%)`
        }} />
      </section>

      {/* ========== SECTION 2: Kas ir AI Lab? — Light Theme ========== */}
      <section className="relative overflow-hidden py-20 lg:py-28" style={{
        background: `linear-gradient(180deg, hsl(30 25% 96%) 0%, hsl(35 30% 97%) 50%, hsl(30 20% 95%) 100%)`
      }}>
        {/* Subtle gradient accents */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `
            radial-gradient(ellipse 60% 40% at 10% 30%, hsl(var(--primary) / 0.05) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 90% 70%, hsl(var(--primary) / 0.04) 0%, transparent 70%)
          `
        }} />

        {/* Grid pattern - very subtle */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        <div className="container-neo relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content - Better structured */}
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-white/80 backdrop-blur-sm mb-6 shadow-sm">
                  <FlaskConical className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    {t("Par laboratoriju", "About the Laboratory")}
                  </span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <h2 className="text-foreground mb-8">
                  {t("Kas ir", "What is")}{" "}
                  <span className="text-gradient-orange">AI Lab</span>?
                </h2>
              </ScrollReveal>
              
              {/* Main description - highlighted card */}
              <ScrollReveal delay={0.15}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-primary/10 shadow-sm">
                  <p className="text-lg text-foreground leading-relaxed font-medium">
                    {t(
                      "AI Lab ir NEOLab veidota attīstības un eksperimentu vide, kas fokusējas uz mākslīgā intelekta praktisku izpēti, veidošanu un pielietošanu.",
                      "AI Lab is a development and experimentation environment created by NEOLab, focused on practical research, creation, and application of artificial intelligence."
                    )}
                  </p>
                </div>
              </ScrollReveal>
              
              {/* Secondary description - three key points */}
              <ScrollReveal delay={0.2}>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(
                        "Vieta, kur jaunieši ar interesi par tehnoloģijām strādā ar reāliem rīkiem, reāliem scenārijiem un reālām problēmām.",
                        "A place where young people interested in technology work with real tools, real scenarios, and real problems."
                      )}
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Rocket className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(
                        "Attīstoties prasmēs, spējās un domāšanā, šeit top AI un tehnoloģiju risinājumi, kuriem ir praktiska vērtība.",
                        "While developing skills, abilities, and thinking, AI and technology solutions with practical value are created here."
                      )}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              {/* Quote/emphasis - italic styled */}
              <ScrollReveal delay={0.25}>
                <div className="pl-5 border-l-2 border-primary/30">
                  <p className="text-muted-foreground italic">
                    {t(
                      "AI Lab tiek veidots ar skatu uz ilgtermiņa attīstību, nevis ātru rezultātu.",
                      "AI Lab is being built with a focus on long-term development, not quick results."
                    )}
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Visual Element — Light theme orbital */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="relative flex items-center justify-center py-12">
                {/* Central glowing orb */}
                <motion.div 
                  className="relative"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Outer glow rings - light theme */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-16 md:-inset-20 border border-dashed border-primary/10 rounded-full"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-10 md:-inset-14 border border-primary/15 rounded-full"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/40" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-primary/40" />
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/30" />
                  </motion.div>
                  
                  {/* Inner pulsing ring */}
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-4 md:-inset-6 rounded-full border-2 border-primary/20"
                  />
                  
                  {/* Central orb - light theme */}
                  <div 
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center"
                    style={{
                      boxShadow: "0 0 40px hsl(var(--primary) / 0.25), 0 0 80px hsl(var(--primary) / 0.15), 0 8px 32px hsl(var(--primary) / 0.2)"
                    }}
                  >
                    <FlaskConical className="w-10 h-10 md:w-14 md:h-14 text-white" />
                  </div>
                </motion.div>

                {/* Floating accent dots - light theme */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-primary/20"
                  animate={{ y: [-5, 5, -5], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-primary/25"
                  animate={{ y: [5, -5, 5], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div 
                  className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-primary/15"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                
                {/* Additional floating elements */}
                <motion.div 
                  className="absolute top-1/2 left-[15%] w-2 h-2 rounded-full bg-primary/20"
                  animate={{ x: [-3, 3, -3], y: [-2, 2, -2] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                <motion.div 
                  className="absolute bottom-1/4 right-[20%] w-2.5 h-2.5 rounded-full bg-primary/15"
                  animate={{ y: [-4, 4, -4], scale: [1, 1.2, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style={{
          background: `linear-gradient(to top, hsl(35 35% 95%) 0%, transparent 100%)`
        }} />
      </section>

      {/* ========== SECTION 3: Ko mēs darām — Light Theme ========== */}
      <section className="relative overflow-hidden py-20 lg:py-28" style={{
        background: `linear-gradient(180deg, hsl(35 35% 95%) 0%, hsl(38 40% 97%) 50%, hsl(35 30% 96%) 100%)`
      }}>
        {/* Subtle gradient accents */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `
            radial-gradient(ellipse 50% 40% at 80% 20%, hsl(var(--primary) / 0.04) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 20% 80%, hsl(var(--primary) / 0.03) 0%, transparent 70%)
          `
        }} />

        {/* Decorative grid dots */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.4]" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />

        <div className="container-neo relative z-10">
          {/* Header */}
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-white/80 backdrop-blur-sm mb-6 shadow-sm">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {t("Mūsu darbība", "Our Activities")}
              </span>
            </div>
            <h2 className="text-foreground mb-4">
              {t("Ko mēs darām", "What we do")}{" "}
              <span className="text-gradient-orange">{t("AI Lab ietvaros", "within AI Lab")}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("AI Lab ietvaros mēs:", "Within AI Lab we:")}
            </p>
          </ScrollReveal>

          {/* Activity cards - Interactive reactive design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Sparkles,
                title: t("Pētījumi", "Research"),
                text: t("Pētām jaunus AI rīkus un platformas", "Research new AI tools and platforms"),
                accent: "from-orange-500/20 to-amber-500/20"
              },
              {
                icon: Cpu,
                title: t("Testēšana", "Testing"),
                text: t("Testējam dažādus automatizācijas un datu apstrādes scenārijus", "Test various automation and data processing scenarios"),
                accent: "from-amber-500/20 to-yellow-500/20"
              },
              {
                icon: Lightbulb,
                title: t("Prototipi", "Prototypes"),
                text: t("Veidojam prototipus un eksperimentālus risinājumus", "Create prototypes and experimental solutions"),
                accent: "from-yellow-500/20 to-orange-500/20"
              },
              {
                icon: Target,
                title: t("Analīze", "Analysis"),
                text: t("Analizējam, kas strādā praksē un kas ne", "Analyze what works in practice and what doesn't"),
                accent: "from-orange-600/20 to-red-500/20"
              },
              {
                icon: FlaskConical,
                title: t("Pieredze", "Experience"),
                text: t("Krājam pieredzi, nevis tikai zināšanas", "Accumulate experience, not just knowledge"),
                accent: "from-red-500/20 to-orange-500/20"
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <motion.div 
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full"
                >
                  {/* Card */}
                  <div className="relative h-full p-6 rounded-2xl bg-white border border-gray-200/60 shadow-sm overflow-hidden transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                    {/* Gradient accent on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with reactive background */}
                      <div className="relative mb-4">
                        <motion.div 
                          className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/15 group-hover:border-primary/20"
                          whileHover={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <item.icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                        </motion.div>
                        
                        {/* Pulse indicator */}
                        <motion.div 
                          className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary/30 opacity-0 group-hover:opacity-100"
                          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-lg font-semibold text-foreground mb-2 transition-colors duration-300">
                        {item.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                    
                    {/* Corner decoration */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-primary/20 rounded-br-lg" />
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom emphasis quote */}
          <ScrollReveal delay={0.5}>
            <div className="max-w-3xl mx-auto">
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-primary/15 shadow-sm">
                {/* Quote accent */}
                <div className="absolute -top-3 left-8 px-4 py-1 bg-primary/10 rounded-full border border-primary/20">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {t("Mūsu pieeja", "Our Approach")}
                  </span>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 items-center justify-center">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg text-foreground font-medium leading-relaxed">
                      {t(
                        "Fokuss nav uz perfektiem rezultātiem, bet uz izpratni un progresu.",
                        "The focus is not on perfect results, but on understanding and progress."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style={{
          background: `linear-gradient(to top, hsl(30 30% 95%) 0%, transparent 100%)`
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
    </div>
  );
}