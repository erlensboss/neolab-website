import { Link } from "react-router-dom";
import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Search,
  Brain,
  TrendingUp,
  Zap,
  ArrowRight,
  CheckCircle2,
  Workflow,
  BarChart3,
  Lightbulb,
  Settings,
  Target,
  Activity,
  Database,
  Cpu,
  Globe,
  ChartLine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { OptimizedHeroVisual } from "@/components/shared/OptimizedHeroVisual";

// Service cards data
const services = [
  {
    id: "ai",
    titleLv: "AI automatizācija",
    titleEn: "AI Automation",
    descLv:
      "AI risinājumi tiek izmantoti procesu automatizācijai, manuālā darba samazināšanai un datu apstrādes uzlabošanai. Risinājumi tiek pielāgoti un izstrādāti atbilstoši uzņēmuma darbības modelim un esošajām sistēmām.",
    descEn:
      "AI solutions for process automation, reducing manual work, and improving data processing. Solutions are customized according to the company's business model and existing systems.",
    icon: Brain,
    path: "/ai-automatizacija",
  },
  {
    id: "seo",
    titleLv: "SEO un GEO optimizācija",
    titleEn: "SEO & GEO Optimization",
    descLv:
      "SEO darbs ietver tehnisko optimizāciju, satura struktūras uzlabošanu un atslēgvārdu plānošanu. Papildus tiek izmantoti GEO risinājumi, kas palīdz uzlabot redzamību jaunās paaudzes meklēšanas vidēs, tostarp AI balstītos meklējumos.",
    descEn:
      "SEO work includes technical optimization, content structure improvement, and keyword planning. GEO solutions help improve visibility in next-generation search environments, including AI-based searches.",
    icon: Search,
    path: "/seo-un-geo",
  },
  {
    id: "ads",
    titleLv: "Google Ads pārvaldība",
    titleEn: "Google Ads Management",
    descLv:
      "Google Ads tiek izmantots kā maksas pieprasījuma piesaistes kanāls. Darbs ietver kampaņu uzstādīšanu, optimizāciju, konversiju izsekošanu un rezultātu analīzi, lai nodrošinātu kontrolējamu un prognozējamu rezultātu.",
    descEn:
      "Google Ads is used as a paid demand acquisition channel. Work includes campaign setup, optimization, conversion tracking, and results analysis to ensure controllable and predictable outcomes.",
    icon: TrendingUp,
    path: "/performance-reklama",
  },
  {
    id: "lab",
    titleLv: "AI Lab",
    titleEn: "AI Lab",
    descLv:
      "AI Lab ir NEOLab iekšējā attīstības vide jaunu risinājumu testēšanai un pilnveidošanai. Šeit tiek analizētas un veidotas jaunākās tehnoloģijas, kā arī testēts to praktiskais pielietojums uzņēmumu vajadzībām.",
    descEn:
      "AI Lab is NEOLab's internal development environment for testing and refining new solutions. Here we analyze and develop the latest technologies, testing their practical applications for business needs.",
    icon: Zap,
    path: "/ai-lab",
  },
];

// Roadmap steps (updated labels per requirements)
const roadmapSteps = [
  { labelLv: "Sākotnējais audits", labelEn: "Initial Audit", icon: Search },
  { labelLv: "Analīze", labelEn: "Analysis", icon: BarChart3 },
  { labelLv: "Prioritātes un plāns", labelEn: "Priorities & Plan", icon: Target },
  { labelLv: "Ieviešana", labelEn: "Implementation", icon: Settings },
  { labelLv: "Optimizācija", labelEn: "Optimization", icon: Activity },
];

// Challenges list
const challenges = [
  {
    lv: "Procesi tiek papildināti, bet netiek sistemātiski pārskatīti.",
    en: "Processes are added to but not systematically reviewed.",
  },
  { lv: "Daļa darbu joprojām tiek veikta manuāli.", en: "Some work is still done manually." },
  {
    lv: "Dati ir pieejami, bet netiek pilnvērtīgi izmantoti lēmumu pieņemšanā.",
    en: "Data is available but not fully used in decision making.",
  },
  {
    lv: "SEO tiek īstenots bez skaidras struktūras un konsekventas stratēģijas.",
    en: "SEO is implemented without clear structure and consistent strategy.",
  },
  {
    lv: "Google Ads kampaņas darbojas, bet trūkst pārskatāmas kontroles pār rezultātiem.",
    en: "Google Ads campaigns run but lack transparent control over results.",
  },
];

// Solution steps
const solutionSteps = [
  { titleLv: "Analīze", titleEn: "Analysis", icon: Search },
  { titleLv: "Stratēģija", titleEn: "Strategy", icon: Target },
  { titleLv: "Ieviešana", titleEn: "Implementation", icon: Settings },
  { titleLv: "Optimizācija", titleEn: "Optimization", icon: BarChart3 },
];

// Features for hero section
const heroFeatures = [
  { lv: "AI risinājumu ieviešana", en: "AI solution implementation", icon: Brain },
  { lv: "Procesu automatizācija", en: "Process automation", icon: Cpu },
  { lv: "SEO un GEO optimizācija", en: "SEO & GEO optimization", icon: Globe },
  { lv: "Google Ads pārvaldība", en: "Google Ads management", icon: ChartLine },
];

export default function Index() {
  const { t, language, getLocalizedPath } = useLanguage();

  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: HERO — Large, Premium, Dashboard-Style ========== */}
      <section className="relative min-h-[85vh] bg-gradient-hero-strong dots-atmosphere overflow-hidden">
        {/* Grid pattern — stronger */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(hsl(21 90% 48%) 1px, transparent 1px), linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Orange glow accents */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

        {/* 2-Column Grid Layout */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh]">
            {/* LEFT COLUMN: Content — aligned left */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <ScrollReveal>
                <h1 className="mb-5 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95]">
                  {t("Jauna ēra", "A New Era for")} <br />
                  <span className="text-gradient-orange">{t("optimizācijai", "Optimization")}</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-md text-left">
                  {t("Jauna pieeja digitālajai izaugsmei.", "A new approach to digital growth.")}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  <Button
                    variant="hero"
                    size="xl"
                    className="mb-8 shadow-orange-strong hover:shadow-orange-hover text-lg px-10 py-7"
                  >
                    {t("Pieteikt konsultāciju", "Book Consultation")}
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Button>
                </Link>
              </ScrollReveal>

              {/* Enhanced Benefit chips — Larger with icons */}
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-3 justify-start">
                  {heroFeatures.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      whileHover={{ y: -3, boxShadow: "0 8px 25px hsla(21, 90%, 48%, 0.15)" }}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-background/90 backdrop-blur-sm border border-border/80 text-sm font-medium text-foreground shadow-md cursor-default"
                    >
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                      {language === "lv" ? feature.lv : feature.en}
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT COLUMN: Dashboard Visual - Optimized */}
            <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end">
              <OptimizedHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: Jauna pieeja (Control Panel Style) ========== */}
      <section className="relative py-12 md:py-16 bg-warm-peach dots-radial-right overflow-hidden">
        {/* Subtle grid extending beyond */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(21 90% 48%) 1px, transparent 1px), linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container-neo relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Performance Dashboard Visual (like PerformanceReklama) */}
            <ScrollReveal>
              <div className="glass-warm rounded-2xl p-6 md:p-8 shadow-dashboard max-w-lg mx-auto lg:max-w-none relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-semibold text-lg text-foreground">
                    {t("Sistēmas pārskats", "System Overview")}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="status-dot" />
                    <span className="text-sm text-muted-foreground">{t("Aktīvs", "Active")}</span>
                  </div>
                </div>

                {/* 4 KPI blocks in grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div
                    className="bg-card rounded-xl p-4 border border-border hover:border-primary/30 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <div className="text-sm text-muted-foreground mb-1">
                      {t("Procesu efektivitāte", "Process Efficiency")}
                    </div>
                    <div className="text-2xl font-bold text-primary">+85%</div>
                  </motion.div>
                  <motion.div
                    className="bg-card rounded-xl p-4 border border-border hover:border-primary/30 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <div className="text-sm text-muted-foreground mb-1">{t("Monitorings", "Monitoring")}</div>
                    <div className="text-2xl font-bold text-primary">24/7</div>
                  </motion.div>
                  <motion.div
                    className="bg-card rounded-xl p-4 border border-border hover:border-primary/30 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <div className="text-sm text-muted-foreground mb-1">{t("Vidējais ROI", "Average ROI")}</div>
                    <div className="text-2xl font-bold text-primary">4.2x</div>
                  </motion.div>
                  <motion.div
                    className="bg-card rounded-xl p-4 border border-border hover:border-primary/30 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <div className="text-sm text-muted-foreground mb-1">
                      {t("Klientu apmierinātība", "Client Satisfaction")}
                    </div>
                    <div className="text-2xl font-bold text-primary">98%</div>
                  </motion.div>
                </div>

                {/* Mini bar chart */}
                <div className="h-20 bg-muted/60 rounded-xl flex items-end justify-around p-3 gap-2">
                  {[65, 80, 55, 90, 75, 85, 70, 95].map((height, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-primary to-primary/60 rounded-t"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                  ))}
                </div>

                {/* Bottom status bar */}
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{t("Pēdējais atjauninājums", "Last updated")}: 2 min</span>
                  <span className="text-primary font-medium">v2.4</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Text */}
            <div>
              <ScrollReveal delay={0.1}>
                <span className="chip mb-4 inline-block">{t("NEOLab pieeja", "NEOLab Approach")}</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  {t("Jauna pieeja digitālajai izaugsmei", "A New Approach to Digital Growth")}
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {t(
                    "NEOLab strādā ar uzņēmumiem, kuri sniedzas pēc pilnveidošanās digitālajā pasaulē. Darbības fokusējas uz digitālo procesu sakārtošanu, tehnoloģiju ieviešanu, radīšanu un ilgtermiņa redzamības uzlabošanu.",
                    "NEOLab works with companies striving for improvement in the digital world. Our focus is on organizing digital processes, implementing technology, and improving long-term visibility.",
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                {/* Highlighted sentence — stronger */}
                <div className="p-5 rounded-xl bg-primary/8 border-l-4 border-primary shadow-sm">
                  <p className="text-foreground font-medium text-lg leading-relaxed">
                    {t(
                      "Katra organizācija ir īpatnēja, tieši tāpēc NEOLab fokusējas uz personalizētu risinājumu piedāvāšanu un implementēšanu, kas nodrošinātu sekmīgus rezultātus un izaugsmi uzņēmumam.",
                      "Every organization is unique, which is why NEOLab focuses on offering and implementing personalized solutions that ensure successful results and growth for the company.",
                    )}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: Digitālie risinājumi (Dashboard Blocks) ========== */}
      <section
        className="relative py-10 md:py-14 section-divider-top section-dots"
        style={{ background: "linear-gradient(180deg, hsl(40 15% 97%) 0%, hsl(38 12% 95%) 100%)" }}
      >
        {/* Full-bleed background panel */}
        <div className="absolute inset-0 border-y border-border/40" />

        <div className="container-neo relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="chip mb-4 inline-block">{t("Risinājumi", "Solutions")}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                {t("Digitālie un mākslīgā intelekta risinājumi uzņēmumiem", "Digital and AI solutions for businesses")}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                {t(
                  "NEOLab risinājumi tiek pielāgoti konkrētai uzņēmuma situācijai, esošajiem procesiem un biznesa mērķiem.",
                  "We adapt solutions to the specific company situation, existing processes, and business goals.",
                )}
              </p>
            </div>
          </ScrollReveal>

          {/* Dashboard-style grid */}
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {heroFeatures.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div className="card-dashboard flex items-center gap-5" whileHover={{ y: -6 }}>
                  {/* Status dot */}
                  <div className="absolute top-4 right-4">
                    <div className="status-dot" />
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground text-lg block">
                      {language === "lv" ? feature.lv : feature.en}
                    </span>
                    <span className="text-sm text-muted-foreground">{t("Aktīvs modulis", "Active module")}</span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: Izaicinājumi (Horizontal Diagnostic Dashboard) ========== */}
      <section
        className="relative py-8 md:py-12 section-divider-top section-dots block-side-dots"
        style={{ background: "linear-gradient(180deg, hsl(32 22% 95%) 0%, hsl(28 25% 92%) 100%)" }}
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(21 90% 48%) 1px, transparent 1px), linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container-neo relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl bg-background/70 backdrop-blur-sm border border-border/60 shadow-lg p-6 md:p-8">
              <ScrollReveal>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <span className="chip mb-2 inline-block">{t("Izaicinājumi", "Challenges")}</span>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                      {t("Ar kādiem izaicinājumiem saskaras mūsu klienti", "What challenges our clients face")}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-base max-w-xs">
                    {t(
                      "Laika gaitā digitālā vide uzņēmumos kļūst sarežģītāka.",
                      "Over time, the digital environment in companies becomes more complex.",
                    )}
                  </p>
                </div>
              </ScrollReveal>

              {/* Horizontal 2-column grid layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {challenges.map((challenge, i) => (
                  <ScrollReveal key={i} delay={i * 0.03}>
                    <div className="flex items-center gap-4 p-3.5 rounded-lg bg-muted/40 border border-border/50 transition-all hover:bg-muted/60 hover:translate-x-1">
                      {/* Orange indicator dot */}
                      <div className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
                      <p className="text-foreground font-medium text-sm leading-snug">
                        {language === "lv" ? challenge.lv : challenge.en}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Conclusion bar — Full-width, stronger orange gradient */}
              <ScrollReveal delay={0.2}>
                <div className="p-4 md:p-5 rounded-xl bg-gradient-to-r from-primary/20 via-primary/15 to-primary/10 border border-primary/30 shadow-md">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide block mb-0.5">
                        {t("Sistēmas brīdinājums", "System Alert")}
                      </span>
                      <p className="text-foreground font-semibold text-base md:text-lg">
                        {t(
                          "Rezultātā digitālie kanāli strādā, bet ne pilnā potenciālā.",
                          "As a result, digital channels work, but not at full potential.",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: NEOLab risinājums (Glow States, No Arrows) ========== */}
      <section
        className="relative py-10 md:py-16 section-divider-top section-dots"
        style={{ background: "linear-gradient(180deg, hsl(38 12% 96%) 0%, hsl(35 15% 94%) 100%)" }}
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(21 90% 48%) 1px, transparent 1px), linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container-neo relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text */}
            <div>
              <ScrollReveal>
                <span className="chip mb-4 inline-block">{t("Risinājums", "Solution")}</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  {t("Kāds ir NEOLab risinājums?", "What is NEOLab's solution?")}
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {t(
                    "NEOLab strādā ar jaunākajiem un efektīvākajiem digitālajiem risinājumiem, kas palīdz sakārtot procesus, novērst digitālās vājās vietas un paātrināt biznesa ikdienas darbu. Mēs fokusējamies uz risinājumiem, kuri dod praktisku ieguvumu un ir pielāgojami konkrētai uzņēmuma situācijai, nevis universālām shēmām.",
                    "NEOLab works with the latest and most effective digital solutions that help organize processes, eliminate digital weak points, and accelerate daily business operations. We focus on solutions that provide practical benefits and are adaptable to specific company situations, not universal schemes.",
                  )}
                </p>
              </ScrollReveal>
            </div>

            {/* Right: 4-step with glow states (no arrows) */}
            <ScrollReveal delay={0.2}>
              <div className="relative">
                {/* Vertical connector line with pulse */}
                <div className="absolute left-7 top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 rounded-full" />
                <motion.div
                  className="absolute left-7 top-10 w-0.5 h-8 bg-primary rounded-full"
                  animate={{ y: [0, 120, 240, 360, 0], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="space-y-5">
                  {solutionSteps.map((step, i) => (
                    <motion.div
                      key={i}
                      className="relative flex items-center gap-6 p-5 rounded-xl bg-muted/50 border border-border cursor-pointer"
                      whileHover={{
                        x: 10,
                        boxShadow: "0 12px 40px hsla(21, 90%, 48%, 0.2)",
                        borderColor: "hsl(21 90% 48% / 0.4)",
                        background: "hsl(40 20% 98%)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Glowing step indicator */}
                      <motion.div
                        className="w-14 h-14 rounded-full bg-gradient-orange flex items-center justify-center shadow-orange flex-shrink-0 relative z-10"
                        whileHover={{ scale: 1.1 }}
                      >
                        <step.icon className="w-6 h-6 text-primary-foreground" />
                      </motion.div>
                      <span className="font-semibold text-xl text-foreground">
                        {language === "lv" ? step.titleLv : step.titleEn}
                      </span>
                      {/* Glow indicator on hover instead of arrow */}
                      <motion.div
                        className="absolute right-5 w-3 h-3 rounded-full bg-primary/30"
                        whileHover={{ scale: 1.5, backgroundColor: "hsl(21 90% 48%)" }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: Pakalpojumu virzieni (Larger Cards) ========== */}
      <section
        className="relative py-12 md:py-16 section-divider-top section-dots"
        style={{ background: "linear-gradient(180deg, hsl(32 22% 94%) 0%, hsl(28 28% 91%) 100%)" }}
      >
        {/* Border frame */}
        <div className="absolute inset-0 border-y border-border/30" />

        <div className="container-neo relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="chip mb-4 inline-block">{t("Pakalpojumi", "Services")}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {t("Pakalpojumu virzieni", "Service Directions")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <Link to={getLocalizedPath(service.path)} className="group block h-full">
                  <motion.div
                    className="h-full p-8 md:p-10 rounded-2xl bg-background border border-border/60 relative overflow-hidden shadow-[inset_0_0_0_1px_hsla(25,15%,88%,0.4)]"
                    whileHover={{
                      y: -8,
                      boxShadow: "0 20px 60px hsla(21, 90%, 48%, 0.18)",
                    }}
                  >
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />

                    {/* Orange accent line — expands on hover */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-1 bg-gradient-orange transition-all duration-500" />

                    {/* Decorative pattern reveal */}
                    <div
                      className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, hsl(21 90% 48%) 1px, transparent 1px)`,
                        backgroundSize: "12px 12px",
                      }}
                    />

                    <div className="relative z-10">
                      {/* Larger icon container */}
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-orange transition-all duration-300">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>

                      {/* Divider */}
                      <div className="w-12 h-px bg-border mb-5 group-hover:bg-primary/30 group-hover:w-20 transition-all duration-300" />

                      <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                        {language === "lv" ? service.titleLv : service.titleEn}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {language === "lv" ? service.descLv : service.descEn}
                      </p>

                      <div className="flex items-center gap-2 text-primary font-semibold">
                        {t("Uzzināt vairāk", "Learn more")}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: NEO Brand Block (Dictionary/Etymology) ========== */}
      <section className="relative py-10 md:py-14 overflow-hidden section-dots">
        {/* Rich warm background with radial glows */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(35_22%_96%)] via-[hsl(30_28%_93%)] to-[hsl(25_32%_90%)]" />

        {/* Subtle corner glows for depth */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-primary/8 rounded-full blur-3xl" />

        {/* Fine grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(21 90% 48%) 1px, transparent 1px), linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="container-neo relative z-10">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              {/* Dictionary-style entry */}
              <div className="relative">
                {/* Main word */}
                <motion.h2
                  className="text-7xl md:text-8xl lg:text-9xl font-bold text-gradient-orange tracking-tight"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Neo
                </motion.h2>

                {/* Pronunciation / meaning */}
                <p className="text-xl md:text-2xl text-muted-foreground mt-4 italic">
                  /ˈniːoʊ/ — {t("jauns, jaundzimis", "new, young")}
                </p>

                {/* Etymology block - enhanced styling */}
                <div className="mt-8 p-6 rounded-xl border border-primary/15 bg-background/70 backdrop-blur-sm text-left max-w-md mx-auto shadow-md">
                  <p className="text-sm text-primary uppercase tracking-wider mb-2 font-semibold">
                    {t("Etimoloģija", "Etymology")}
                  </p>
                  <p className="text-foreground leading-relaxed">
                    {t(
                      'No sengrieķu νέος (néos, "jauns, jaundzimis"). Prefikss: neo-',
                      'From Ancient Greek νέος (néos, "new, young"). Prefix: neo-',
                    )}
                  </p>
                </div>

                {/* Animated gradient underline — more subtle */}
                <motion.div
                  className="mt-8 h-1 rounded-full bg-gradient-orange mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 8: Kā mēs strādājam (Horizontal Roadmap) ========== */}
      <section
        className="relative py-12 md:py-16 section-divider-top overflow-hidden"
        style={{ background: "linear-gradient(180deg, hsl(38 18% 96%) 0%, hsl(32 22% 93%) 100%)" }}
      >
        {/* Border frame */}
        <div className="absolute inset-0 border-y border-border/30" />

        <div className="container-neo relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="chip mb-4 inline-block">{t("Process", "Process")}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{t("Kā mēs strādājam", "How We Work")}</h2>
            </div>
          </ScrollReveal>

          {/* Horizontal roadmap on desktop, vertical on mobile */}
          <div className="relative">
            {/* Desktop: Horizontal */}
            <div className="hidden lg:block">
              {/* Connection line */}
              <div className="absolute top-12 left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full" />

              <div className="flex justify-between items-start">
                {roadmapSteps.map((step, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <motion.div className="flex flex-col items-center text-center max-w-[180px]" whileHover={{ y: -5 }}>
                      {/* Step circle with gradient progression */}
                      <motion.div
                        className="w-24 h-24 rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-orange relative z-10 mb-5"
                        style={{
                          background: `linear-gradient(135deg, hsl(${35 - i * 3} ${80 + i * 5}% ${60 - i * 3}%) 0%, hsl(${25 - i * 3} ${85 + i * 3}% ${50 - i * 2}%) 100%)`,
                        }}
                        whileHover={{ scale: 1.1, boxShadow: "0 12px 40px hsla(21 90% 48% / 0.35)" }}
                      >
                        <step.icon className="w-10 h-10" />
                      </motion.div>

                      <span className="text-xs text-muted-foreground font-semibold mb-2">
                        {t("SOLIS", "STEP")} {i + 1}
                      </span>
                      <h4 className="font-bold text-foreground">{language === "lv" ? step.labelLv : step.labelEn}</h4>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Mobile: Vertical */}
            <div className="lg:hidden max-w-md mx-auto">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

                <div className="space-y-6">
                  {roadmapSteps.map((step, i) => (
                    <ScrollReveal key={i} delay={i * 0.1}>
                      <motion.div className="relative flex items-center gap-5 pl-16" whileHover={{ x: 4 }}>
                        {/* Step number circle */}
                        <motion.div
                          className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-orange"
                          style={{
                            background: `linear-gradient(135deg, hsl(${35 - i * 3} ${80 + i * 5}% ${60 - i * 3}%) 0%, hsl(${25 - i * 3} ${85 + i * 3}% ${50 - i * 2}%) 100%)`,
                          }}
                        >
                          {i + 1}
                        </motion.div>

                        <div className="flex-1 p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors">
                          <span className="text-xs text-muted-foreground font-semibold block mb-1">
                            {t("SOLIS", "STEP")} {i + 1}
                          </span>
                          <p className="text-foreground font-semibold">
                            {language === "lv" ? step.labelLv : step.labelEn}
                          </p>
                        </div>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 9: Final CTA — Strong Orange ========== */}
      <section className="relative py-14 md:py-20 section-divider-top overflow-hidden">
        {/* Strong orange gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/8 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

        {/* Radial glow at center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/8 rounded-full blur-3xl" />

        {/* Subtle animated gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 30% 50%, hsla(21, 90%, 48%, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 50%, hsla(21, 90%, 48%, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 50%, hsla(21, 90%, 48%, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-neo relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t("Uzzini, kā varam palīdzēt tev.", "Find out how we can help you.")}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                {t(
                  "Piesakies bezmaksas konsultācijai, kurā mēs izvērtēsim uzņēmumu un tā procesus, lai sniegtu visprecīzāko pakalpojumu tava uzņēmuma vajadzībām.",
                  "Book a free consultation where we will evaluate your company and its processes to provide the most accurate service for your business needs.",
                )}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                <Button
                  variant="hero"
                  size="xl"
                  className="shadow-orange-strong hover:shadow-orange-hover text-lg px-12 py-8"
                >
                  {t("Pieteikt konsultāciju", "Book Consultation")}
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
