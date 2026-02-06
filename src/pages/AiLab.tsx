import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Cpu,
  Sparkles,
  ArrowRight,
  Lock,
  Lightbulb,
  FlaskConical,
  Rocket,
  Brain,
  Shield,
  Users,
  Target,
  HelpCircle,
  Clock,
  Layers,
  Bot,
  Workflow,
  Database,
  LineChart,
  Network,
  CircuitBoard,
  Code2,
  Gauge,
  GitBranch,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

// Floating icon component for background
function FloatingIcon({
  icon: Icon,
  x,
  y,
  size = 24,
  delay = 0,
  duration = 20,
  opacity = 0.08,
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
  type = "circle",
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
        <div className="rounded-full border-2 border-primary/15" style={{ width: size, height: size }} />
      )}
      {type === "dot" && <div className="rounded-full bg-primary/20" style={{ width: size, height: size }} />}
    </motion.div>
  );
}

export default function AiLab() {
  const { t, getLocalizedPath } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-hidden bg-background">
      {/* ========== SECTION 1: Hero — Light Theme with Floating Icons ========== */}
      <section ref={containerRef} className="min-h-[95vh] relative overflow-hidden">
        {/* Subtle gradient overlays */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
            radial-gradient(ellipse 80% 50% at 20% 20%, hsl(var(--primary) / 0.04) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 80% 80%, hsl(var(--primary) / 0.05) 0%, transparent 70%),
            radial-gradient(ellipse 50% 30% at 50% 50%, hsl(var(--primary) / 0.02) 0%, transparent 70%)
          `,
          }}
        />

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
            backgroundSize: "60px 60px",
          }}
        />

        {/* Hero Content */}
        <div className="container-neo px-4 py-12 md:section-padding relative z-10 flex items-center justify-center min-h-[80vh] md:min-h-[95vh]">
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
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 text-foreground leading-[1.1] tracking-tight">
                AI Lab –{" "}
                <span className="text-gradient-orange">
                  {t("Inovatīva jauniešu AI laboratorija", "Innovative Youth AI Laboratory")}
                </span>
              </h1>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-2xl lg:text-3xl text-muted-foreground mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed font-medium px-2">
                {t(
                  "Vide, kur mākslīgais intelekts tiek pētīts, izmēģināts un izmantots praksē, nevis tikai apspriests teorijā.",
                  "An environment where artificial intelligence is researched, tested, and applied in practice, not just discussed in theory.",
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
      </section>

      {/* ========== SECTION 2: Kas ir AI Lab? — Light Theme ========== */}
      <section className="relative overflow-hidden py-12 md:py-16">
        {/* Subtle gradient accents */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
            radial-gradient(ellipse 60% 40% at 10% 30%, hsl(var(--primary) / 0.05) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 90% 70%, hsl(var(--primary) / 0.04) 0%, transparent 70%)
          `,
          }}
        />

        {/* Grid pattern - very subtle */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="container-neo relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
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
                  {t("Kas ir", "What is")} <span className="text-gradient-orange">AI Lab</span>?
                </h2>
              </ScrollReveal>

              {/* Main description - highlighted card */}
              <ScrollReveal delay={0.15}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 mb-6 border border-primary/10 shadow-sm">
                  <p className="text-lg text-foreground leading-relaxed font-medium">
                    {t(
                      "AI Lab ir NEOLab veidota attīstības un eksperimentu vide, kas fokusējas uz mākslīgā intelekta izpēti, veidošanu un praktisku ieviešanu.",
                      "AI Lab is a development and experimentation environment created by NEOLab that focuses on the research, creation, and practical implementation of artificial intelligence.",
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
                        "Tā ir vieta jauniešiem ar interesi par tehnoloģijām, kuri vēlas strādāt ar īstiem rīkiem, reālām situācijām un uzdevumiem, kas prasa domāšanu, atbildību un spēju risināt problēmas.",
                        "It is a place for young people with an interest in technology who want to work with real tools, real situations, and tasks that require thinking, responsibility, and the ability to solve problems.",
                      )}
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Rocket className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(
                        "Attīstoties prasmēm, pieredzei un domāšanas veidam, šeit veidojas AI un tehnoloģiju risinājumi ar skaidru praktisku nozīmi un reālu pielietojumu.",
                        "As skills, experience, and mindset develop, AI and technology solutions with clear practical meaning and real-world applications are formed here.",
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
                      "AI Lab tiek veidots ar ilgtermiņa skatījumu, dodot telpu mācīšanās procesam un pakāpeniskai izaugsmei.",
                      "AI Lab is being built with a long-term perspective, allowing room for learning and gradual growth.",
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
                      boxShadow:
                        "0 0 40px hsl(var(--primary) / 0.25), 0 0 80px hsl(var(--primary) / 0.15), 0 8px 32px hsl(var(--primary) / 0.2)",
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
      </section>

      {/* ========== SECTION 3: Ko mēs darām — Light Theme ========== */}
      <section className="relative overflow-hidden py-12 md:py-16">
        {/* Subtle gradient accents */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
            radial-gradient(ellipse 50% 40% at 80% 20%, hsl(var(--primary) / 0.04) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 20% 80%, hsl(var(--primary) / 0.03) 0%, transparent 70%)
          `,
          }}
        />

        {/* Decorative grid dots */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.08) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container-neo relative z-10">
          {/* Header */}
          <ScrollReveal className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-white/80 backdrop-blur-sm mb-6 shadow-sm">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t("Mūsu darbība", "Our Activities")}</span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[
              {
                icon: Sparkles,
                title: t("Pētījumi", "Research"),
                text: t("Pētām jaunus AI rīkus un platformas", "Research new AI tools and platforms"),
                accent: "from-orange-500/20 to-amber-500/20",
              },
              {
                icon: Cpu,
                title: t("Testēšana", "Testing"),
                text: t(
                  "Testējam dažādus automatizācijas un datu apstrādes scenārijus",
                  "Test various automation and data processing scenarios",
                ),
                accent: "from-amber-500/20 to-yellow-500/20",
              },
              {
                icon: Lightbulb,
                title: t("Prototipi", "Prototypes"),
                text: t(
                  "Veidojam prototipus un eksperimentālus risinājumus",
                  "Create prototypes and experimental solutions",
                ),
                accent: "from-yellow-500/20 to-orange-500/20",
              },
              {
                icon: Target,
                title: t("Analīze", "Analysis"),
                text: t("Analizējam, kas strādā praksē un kas ne", "Analyze what works in practice and what doesn't"),
                accent: "from-orange-600/20 to-red-500/20",
              },
              {
                icon: FlaskConical,
                title: t("Pieredze", "Experience"),
                text: t("Krājam pieredzi, nevis tikai zināšanas", "Accumulate experience, not just knowledge"),
                accent: "from-red-500/20 to-orange-500/20",
              },
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
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

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
                      <p className="text-muted-foreground leading-relaxed">{item.text}</p>
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
                <div className="flex items-center gap-6">
                  <div className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 items-center justify-center">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg text-foreground font-medium leading-relaxed">
                      {t(
                        "Fokuss nav uz perfektiem rezultātiem, bet uz izpratni un progresu.",
                        "The focus is not on perfect results, but on understanding and progress.",
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 4: Kāpēc AI Lab — Light Theme, Standout Design ========== */}
      <section className="relative overflow-hidden py-12 md:py-16">
        {/* Decorative background elements */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
            radial-gradient(ellipse 70% 50% at 50% 0%, hsl(var(--primary) / 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 0% 50%, hsl(var(--primary) / 0.04) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 100% 50%, hsl(var(--primary) / 0.04) 0%, transparent 60%)
          `,
          }}
        />

        {/* Geometric pattern - subtle connecting lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-40 opacity-[0.03]"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          >
            {Array.from({ length: 6 }, (_, i) => (
              <div key={`geo-l-${i}`} className="absolute" style={{ top: `${i * 18}%` }}>
                <div
                  className="w-20 h-20 border border-primary rounded-full"
                  style={{ marginLeft: i % 2 === 0 ? "10px" : "30px" }}
                />
              </div>
            ))}
          </motion.div>

          <motion.div
            className="absolute right-0 top-0 bottom-0 w-40 opacity-[0.03]"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          >
            {Array.from({ length: 6 }, (_, i) => (
              <div key={`geo-r-${i}`} className="absolute" style={{ top: `${i * 18}%` }}>
                <div
                  className="w-20 h-20 border border-primary rounded-full"
                  style={{ marginLeft: i % 2 === 0 ? "30px" : "10px" }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="container-neo relative z-10">
          {/* Header - Centered with impact */}
          <ScrollReveal className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/25 bg-white/90 backdrop-blur-sm mb-6 shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                <Target className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-semibold text-primary tracking-wide">
                {t("Mūsu misija", "Our Mission")}
              </span>
            </motion.div>
            <h2 className="text-foreground mb-6">
              {t("Kāpēc", "Why")} <span className="text-gradient-orange">AI Lab</span>{" "}
              {t("tiek veidots", "is being created")}
            </h2>
          </ScrollReveal>

          {/* Main intro text - better formatted */}
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {t(
                  "Latvijā un plašākā reģionā trūkst vietu, kur jaunieši var droši un atbildīgi attīstīt savas tehnoloģiju prasmes.",
                  "In Latvia and the broader region, there is a lack of places where young people can safely and responsibly develop their technology skills.",
                )}
              </p>
            </div>
          </ScrollReveal>

          {/* Feature points - Clean grid without offset */}
          <div className="max-w-5xl mx-auto mb-10 md:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {[
                {
                  icon: Shield,
                  text: t("Droši strādāt ar mākslīgo intelektu", "Safely work with artificial intelligence"),
                },
                {
                  icon: Lightbulb,
                  text: t("Mācīties caur darīšanu, nevis tikai teoriju", "Learn by doing, not just theory"),
                },
                {
                  icon: Brain,
                  text: t("Attīstīt reālas digitālās prasmes", "Develop real digital skills"),
                },
                {
                  icon: Users,
                  text: t(
                    "Veidot domāšanu, kas balstīta tehnoloģijās un atbildībā",
                    "Build thinking based on technology and responsibility",
                  ),
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={0.1 + index * 0.05}>
                  <motion.div
                    className="group h-full"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:border-primary/20 sm:flex sm:flex-col">
                      {/* Top accent bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/15 flex items-center justify-center transition-all duration-300 group-hover:from-primary/25 group-hover:to-primary/10">
                          <item.icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        <div className="flex-1 pt-1">
                          <p className="text-lg text-foreground font-medium leading-relaxed">{item.text}</p>
                        </div>
                      </div>

                      {/* Number indicator */}
                      <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Bottom statement - Premium styled */}
          <ScrollReveal delay={0.5}>
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10 rounded-3xl p-1">
                <div className="relative bg-white rounded-[22px] p-8 md:p-10">
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-white rounded-full border border-primary/20 shadow-sm">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">
                      {t("Mūsu vīzija", "Our Vision")}
                    </span>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-xl md:text-3xl text-foreground font-bold leading-relaxed mb-4">
                      {t("AI Lab tiek veidots kā šāda vide.", "AI Lab is being built as such an environment.")}
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/30" />
                      <p className="text-lg text-muted-foreground italic">
                        {t(
                          "Nevis kustība, bet telpa, kurā var augt.",
                          "Not a movement, but a space where one can grow.",
                        )}
                      </p>
                      <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 5: FAQ ========== */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Simple clean background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />

        <div className="container-neo relative z-10">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="chip mb-4 inline-block text-sm">FAQ</span>
              <h2 className="text-foreground">
                {t("Biežāk uzdotie", "Frequently Asked")}{" "}
                <span className="text-gradient-orange">{t("jautājumi", "Questions")}</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto px-4 md:px-0">
            <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
              {[
                {
                  icon: HelpCircle,
                  question: t("Vai AI Lab ir pakalpojums?", "Is AI Lab a service?"),
                  answer: t(
                    "Nē. AI Lab nav pakalpojums un nav produkts. Tā ir attīstības vide un iniciatīva.",
                    "No. AI Lab is not a service and not a product. It's a development environment and initiative.",
                  ),
                  gradient: "from-primary to-orange-500",
                },
                {
                  icon: Layers,
                  question: t(
                    "Vai AI Lab aizvieto AI automatizācijas pakalpojumus?",
                    "Does AI Lab replace AI automation services?",
                  ),
                  answer: t(
                    "Nē. AI Lab pastāv paralēli un kalpo kā pieredzes un izpētes bāze.",
                    "No. AI Lab exists in parallel and serves as an experience and research base.",
                  ),
                  gradient: "from-orange-500 to-amber-500",
                },
                {
                  icon: Clock,
                  question: t("Kad AI Lab pieeja ir īpaši nozīmīga?", "When is AI Lab approach especially important?"),
                  answer: t(
                    "Ja nepieciešama dziļāka izpratne par tehnoloģijām, nestandarta risinājumi vai ilgtermiņa skatījums uz AI attīstību.",
                    "When deeper understanding of technologies, non-standard solutions, or long-term perspective on AI development is needed.",
                  ),
                  gradient: "from-amber-500 to-yellow-500",
                },
                {
                  icon: Users,
                  question: t("Vai AI Lab ir atvērts visiem?", "Is AI Lab open to everyone?"),
                  answer: t(
                    "AI Lab veidojas pakāpeniski. Šobrīd tas ir attīstības stadijā, un dalība notiek ar atlasi.",
                    "AI Lab is developing gradually. Currently it's in the development stage, and participation happens through selection.",
                  ),
                  gradient: "from-yellow-500 to-amber-400",
                },
              ].map((faq, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 overflow-hidden data-[state=open]:shadow-lg data-[state=open]:border-primary/30"
                  >
                    <AccordionTrigger className="px-3 md:px-5 py-3 md:py-4 hover:no-underline group">
                      <div className="flex items-center gap-3 md:gap-4 text-left">
                        <div
                          className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br ${faq.gradient} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300`}
                        >
                          <faq.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <span className="font-medium text-sm md:text-base text-foreground/90 group-hover:text-primary transition-colors duration-300">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-3 md:px-5 pb-4 md:pb-5">
                      <div className="pl-11 md:pl-14">
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{faq.answer}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: Contact CTA — Light Theme ========== */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Background with warm gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `hsl(var(--background))`,
          }}
        />

        {/* Decorative elements */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
            radial-gradient(ellipse 80% 60% at 50% 50%, hsl(var(--primary) / 0.06) 0%, transparent 70%)
          `,
          }}
        />

        {/* Floating shapes */}
        <FloatingShape x="5%" y="20%" size={80} delay={0} type="ring" />
        <FloatingShape x="90%" y="30%" size={60} delay={2} type="circle" />
        <FloatingShape x="10%" y="70%" size={50} delay={1} type="dot" />
        <FloatingShape x="85%" y="75%" size={70} delay={3} type="ring" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container-neo relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Card container */}
            <ScrollReveal>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 shadow-xl overflow-hidden">
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />

                <div className="p-6 md:p-12 lg:p-16 text-center">
                  {/* Badge */}
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Rocket className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      {t("Seko līdzi attīstībai", "Follow the development")}
                    </span>
                  </motion.div>

                  {/* Main heading */}
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                    {t("AI Lab aug.", "AI Lab is growing.")}{" "}
                    <span className="text-gradient-orange block mt-2">
                      {t("Tāpat kā cilvēki, kas to veido.", "Just like the people who build it.")}
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                    {t(
                      "Ja tevi interesē mākslīgais intelekts, tehnoloģijas un digitālā domāšana, seko līdzi NEOLab attīstībai vai sazinies ar mums.",
                      "If you're interested in artificial intelligence, technology, and digital thinking, follow NEOLab's development or contact us.",
                    )}
                  </p>

                  {/* CTA Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg"
                      >
                        {t("Sazināties ar NEOLab", "Contact NEOLab")}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </motion.div>

                  {/* Bottom decorative elements */}
                  <div className="mt-12 flex items-center justify-center gap-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span>{t("Aktīvi strādājam", "Actively working")}</span>
                    </div>
                    <div className="h-4 w-px bg-gray-300" />
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>{t("Droša vide", "Safe environment")}</span>
                    </div>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-primary/10 rounded-tr-3xl pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-primary/10 rounded-bl-3xl pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
