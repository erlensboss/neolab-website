import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Search, Brain, TrendingUp, Zap, ArrowRight, CheckCircle2, 
  Workflow, BarChart3, Lightbulb, Settings, Target, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

// Service cards data
const services = [
  {
    id: "ai",
    titleLv: "AI automatizācija",
    titleEn: "AI Automation",
    descLv: "AI risinājumi tiek izmantoti procesu automatizācijai, manuālā darba samazināšanai un datu apstrādes uzlabošanai. Risinājumi tiek pielāgoti un izstrādāti atbilstoši uzņēmuma darbības modelim un esošajām sistēmām.",
    descEn: "AI solutions for process automation, reducing manual work, and improving data processing. Solutions are customized according to the company's business model and existing systems.",
    icon: Brain,
    path: "/ai-automatizacija",
  },
  {
    id: "seo",
    titleLv: "SEO un GEO optimizācija",
    titleEn: "SEO & GEO Optimization",
    descLv: "SEO darbs ietver tehnisko optimizāciju, satura struktūras uzlabošanu un atslēgvārdu plānošanu. Papildus tiek izmantoti GEO risinājumi, kas palīdz uzlabot redzamību jaunās paaudzes meklēšanas vidēs, tostarp AI balstītos meklējumos.",
    descEn: "SEO work includes technical optimization, content structure improvement, and keyword planning. GEO solutions help improve visibility in next-generation search environments, including AI-based searches.",
    icon: Search,
    path: "/seo-un-geo",
  },
  {
    id: "ads",
    titleLv: "Google Ads pārvaldība",
    titleEn: "Google Ads Management",
    descLv: "Google Ads tiek izmantots kā maksas pieprasījuma piesaistes kanāls. Darbs ietver kampaņu uzstādīšanu, optimizāciju, konversiju izsekošanu un rezultātu analīzi, lai nodrošinātu kontrolējamu un prognozējamu rezultātu.",
    descEn: "Google Ads is used as a paid demand acquisition channel. Work includes campaign setup, optimization, conversion tracking, and results analysis to ensure controllable and predictable outcomes.",
    icon: TrendingUp,
    path: "/performance-reklama",
  },
  {
    id: "lab",
    titleLv: "AI Lab",
    titleEn: "AI Lab",
    descLv: "AI Lab ir NEOLab iekšējā attīstības vide jaunu risinājumu testēšanai un pilnveidošanai. Šeit tiek analizētas un veidotas jaunākās tehnoloģijas, kā arī testēts to praktiskais pielietojums uzņēmumu vajadzībām.",
    descEn: "AI Lab is NEOLab's internal development environment for testing and refining new solutions. Here we analyze and develop the latest technologies, testing their practical applications for business needs.",
    icon: Zap,
    path: "/ai-lab",
  },
];

// Process steps
const processSteps = [
  { stepLv: "Darbs sākas ar sākotnējo uzņēmuma izvērtējumu/auditu.", stepEn: "Work begins with an initial company assessment/audit." },
  { stepLv: "Tiek analizēta digitālā vide un esošie procesi.", stepEn: "Digital environment and existing processes are analyzed." },
  { stepLv: "Definē prioritātes un rīcības plānu.", stepEn: "Priorities and action plan are defined." },
  { stepLv: "Risinājumi tiek ieviesti pakāpeniski.", stepEn: "Solutions are implemented gradually." },
  { stepLv: "Rezultāti tiek analizēti un optimizēti.", stepEn: "Results are analyzed and optimized." },
];

// Challenges list
const challenges = [
  { lv: "Procesi tiek papildināti, bet netiek sistemātiski pārskatīti.", en: "Processes are added to but not systematically reviewed." },
  { lv: "Daļa darbu joprojām tiek veikta manuāli.", en: "Some work is still done manually." },
  { lv: "Dati ir pieejami, bet netiek pilnvērtīgi izmantoti lēmumu pieņemšanā.", en: "Data is available but not fully used in decision making." },
  { lv: "SEO tiek īstenots bez skaidras struktūras un konsekventas stratēģijas.", en: "SEO is implemented without clear structure and consistent strategy." },
  { lv: "Google Ads kampaņas darbojas, bet trūkst pārskatāmas kontroles pār rezultātiem.", en: "Google Ads campaigns run but lack transparent control over results." },
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
  { lv: "AI risinājumu ieviešana", en: "AI solution implementation" },
  { lv: "Procesu automatizācija", en: "Process automation" },
  { lv: "SEO un GEO optimizācija", en: "SEO & GEO optimization" },
  { lv: "Google Ads pārvaldība", en: "Google Ads management" },
];

export default function Index() {
  const { t, language } = useLanguage();

  return (
    <div className="overflow-hidden">
      {/* ========== SECTION 1: HERO — Compact, Bold, Premium ========== */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-hero overflow-hidden">
        {/* Background system visual */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(hsl(21 90% 48%) 1px, transparent 1px), linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
          
          {/* Flowing nodes/system visual on right */}
          <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] h-[80%] opacity-20" viewBox="0 0 400 400">
            {/* Concentric circles */}
            <circle cx="250" cy="200" r="150" fill="none" stroke="hsl(21 90% 48%)" strokeWidth="0.5" strokeDasharray="4 8" />
            <circle cx="250" cy="200" r="100" fill="none" stroke="hsl(21 90% 48%)" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="250" cy="200" r="50" fill="none" stroke="hsl(21 90% 48%)" strokeWidth="1.5" />
            
            {/* Connection lines */}
            <path d="M 100 100 Q 175 150 250 200" fill="none" stroke="hsl(21 90% 48%)" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M 50 250 Q 150 225 250 200" fill="none" stroke="hsl(21 90% 48%)" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M 350 80 Q 300 140 250 200" fill="none" stroke="hsl(21 90% 48%)" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M 380 300 Q 315 250 250 200" fill="none" stroke="hsl(21 90% 48%)" strokeWidth="1" strokeDasharray="4 4" />
            
            {/* Nodes */}
            <circle cx="100" cy="100" r="8" fill="hsl(21 90% 48%)" opacity="0.3" />
            <circle cx="50" cy="250" r="6" fill="hsl(21 90% 48%)" opacity="0.3" />
            <circle cx="350" cy="80" r="7" fill="hsl(21 90% 48%)" opacity="0.3" />
            <circle cx="380" cy="300" r="5" fill="hsl(21 90% 48%)" opacity="0.3" />
            <circle cx="250" cy="200" r="20" fill="hsl(21 90% 48%)" opacity="0.15" />
          </svg>
          
          {/* Orange glow corners */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="container-neo py-16 md:py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="mb-4 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
                {t("Jauna ēra", "A New Era for")} <span className="text-gradient-orange">{t("optimizācijai", "Optimization")}</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("Jauna pieeja digitālajai izaugsmei.", "A new approach to digital growth.")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link to="/bezmaksas-konsultacija">
                <Button variant="hero" size="xl" className="mb-10">
                  {t("Pieteikt konsultāciju", "Book Consultation")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </ScrollReveal>

            {/* Benefit chips */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap justify-center gap-3">
                {heroFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-border text-sm font-medium text-foreground shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {language === "lv" ? feature.lv : feature.en}
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: Jauna pieeja (Split Layout) ========== */}
      <section className="relative bg-background py-12 md:py-20">
        {/* Framed background */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent" />
        
        <div className="container-neo relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Visual panel */}
            <ScrollReveal>
              <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
                {/* Layered gradient shapes */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
                <div className="absolute top-8 left-8 right-8 bottom-8 rounded-2xl bg-gradient-to-tr from-primary/15 to-primary/5 border border-primary/20" />
                
                {/* System diagram inside */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      className="w-48 h-48 md:w-56 md:h-56 border-2 border-dashed border-primary/20 rounded-full"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-orange flex items-center justify-center shadow-orange">
                      <Workflow className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
                    </div>
                    
                    {/* Orbiting icons */}
                    {[Search, Brain, TrendingUp, Zap].map((Icon, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-10 h-10 md:w-12 md:h-12 rounded-xl bg-background border border-border shadow-md flex items-center justify-center"
                        style={{
                          top: `${50 + 42 * Math.sin((i * Math.PI) / 2)}%`,
                          left: `${50 + 42 * Math.cos((i * Math.PI) / 2)}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Icon className="w-5 h-5 text-primary" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Text */}
            <div>
              <ScrollReveal delay={0.1}>
                <span className="chip mb-4 inline-block">
                  {t("NEOLab pieeja", "NEOLab Approach")}
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  {t("Jauna pieeja digitālajai izaugsmei", "A New Approach to Digital Growth")}
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {t(
                    "NEOLab strādā ar uzņēmumiem, kuri sniedzas pēc pilnveidošanās digitālaja pasaulē. Darbības fokusējas uz digitālo procesu sakārtošanu, tehnoloģiju ieviešanu, radīšanu un ilgtermiņa redzamības uzlabošanu.",
                    "NEOLab works with companies striving for improvement in the digital world. Our focus is on organizing digital processes, implementing technology, and improving long-term visibility."
                  )}
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                {/* Highlighted sentence */}
                <div className="p-4 rounded-xl bg-primary/5 border-l-4 border-primary mb-4">
                  <p className="text-foreground font-medium">
                    {t(
                      "Katra organizacija ir ipatneja, tiesi tapec NEOLab fokusejas uz personalizetu risinajumu piedavasanu un implementesanu, kas nodrosinatu sekmigus rezultatus un izaugsmi uznemumam.",
                      "Every organization is unique, which is why NEOLab focuses on offering and implementing personalized solutions that ensure successful results and growth for the company."
                    )}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: Digitālie risinājumi (Feature Chips) ========== */}
      <section className="relative py-12 md:py-20 bg-muted/30">
        {/* Frame */}
        <div className="absolute inset-4 md:inset-8 border border-border/50 rounded-3xl pointer-events-none" />
        
        <div className="container-neo relative z-10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="chip mb-4 inline-block">{t("Risinājumi", "Solutions")}</span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                {t("Digitālie un mākslīgā intelekta risinājumi uzņēmumiem", "Digital and AI solutions for businesses")}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t(
                  "Mēs risinājumus pielāgotojam konkrētai uzņēmuma situācijai, esošajiem procesiem un biznesa mērķiem.",
                  "We adapt solutions to the specific company situation, existing processes, and business goals."
                )}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            {heroFeatures.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div 
                  className="flex items-center gap-4 p-5 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-all"
                  whileHover={{ y: -4, boxShadow: "0 12px 40px hsla(21, 90%, 48%, 0.12)" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {i === 0 && <Lightbulb className="w-6 h-6 text-primary" />}
                    {i === 1 && <Settings className="w-6 h-6 text-primary" />}
                    {i === 2 && <Search className="w-6 h-6 text-primary" />}
                    {i === 3 && <TrendingUp className="w-6 h-6 text-primary" />}
                  </div>
                  <span className="font-medium text-foreground">
                    {language === "lv" ? feature.lv : feature.en}
                  </span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: Izaicinājumi (Framed Challenges) ========== */}
      <section className="relative py-12 md:py-20 bg-background">
        <div className="container-neo">
          <div className="rounded-3xl bg-muted/50 border border-border p-6 md:p-10 lg:p-12">
            <ScrollReveal>
              <span className="chip mb-4 inline-block">{t("Izaicinājumi", "Challenges")}</span>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                {t("Ar kādiem izaicinājumiem visbiežāk saskarās mūsu klienti", "What challenges our clients face most often")}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("Laika gaitā digitālā vide uzņēmumos kļūst sarežģītāka.", "Over time, the digital environment in companies becomes more complex.")}
              </p>
            </ScrollReveal>

            <div className="space-y-3 mb-8">
              {challenges.map((challenge, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-foreground">
                      {language === "lv" ? challenge.lv : challenge.en}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Result bar */}
            <ScrollReveal delay={0.3}>
              <div className="p-5 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                <p className="text-foreground font-medium text-center">
                  {t(
                    "Rezultātā digitālie kanāli strādā, bet ne pilnā potenciālā.",
                    "As a result, digital channels work, but not at full potential."
                  )}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: NEOLab risinājums (Interactive Steps) ========== */}
      <section className="relative py-12 md:py-20 bg-muted/20">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(hsl(21 90% 48%) 1px, transparent 1px), linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container-neo relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <ScrollReveal>
                <span className="chip mb-4 inline-block">{t("Risinājums", "Solution")}</span>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  {t("Kāds ir NEOLab risinājums?", "What is NEOLab's solution?")}
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <p className="text-muted-foreground leading-relaxed">
                  {t(
                    "NEOLab strādā ar jaunākajiem un efektīvākajiem digitālajiem risinājumiem, kas palīdz sakārtot procesus, novērst digitālās vājās vietas un paātrināt biznesa ikdienas darbu. Mēs fokusējamies uz risinājumiem, kuri dod praktisku ieguvumu un ir pielāgojami konkrētai uzņēmuma situācijai, nevis universālām shēmām.",
                    "NEOLab works with the latest and most effective digital solutions that help organize processes, eliminate digital weak points, and accelerate daily business operations. We focus on solutions that provide practical benefits and are adaptable to specific company situations, not universal schemes."
                  )}
                </p>
              </ScrollReveal>
            </div>

            {/* Right: 4-step interactive list */}
            <ScrollReveal delay={0.2}>
              <div className="relative">
                {/* Vertical connector line */}
                <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-primary/10" />
                
                <div className="space-y-4">
                  {solutionSteps.map((step, i) => (
                    <motion.div 
                      key={i}
                      className="relative flex items-center gap-5 p-4 rounded-xl bg-background border border-border cursor-pointer"
                      whileHover={{ 
                        x: 8, 
                        boxShadow: "0 8px 30px hsla(21, 90%, 48%, 0.15)",
                        borderColor: "hsl(21 90% 48% / 0.3)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-orange flex items-center justify-center shadow-orange flex-shrink-0 relative z-10">
                        <step.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="font-semibold text-lg text-foreground">
                        {language === "lv" ? step.titleLv : step.titleEn}
                      </span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground ml-auto" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: Pakalpojumu virzieni (4 Service Cards) ========== */}
      <section className="relative py-12 md:py-20 bg-background">
        <div className="container-neo">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="chip mb-4 inline-block">{t("Pakalpojumi", "Services")}</span>
              <h2 className="text-3xl md:text-4xl font-semibold">
                {t("Pakalpojumu virzieni", "Service Directions")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <Link to={service.path} className="group block h-full">
                  <motion.div 
                    className="h-full p-6 md:p-8 rounded-2xl bg-muted/30 border border-border relative overflow-hidden"
                    whileHover={{ 
                      y: -6,
                      boxShadow: "0 16px 50px hsla(21, 90%, 48%, 0.15)"
                    }}
                  >
                    {/* Hover gradient shift */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300" />
                    
                    {/* Orange accent line */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-1 bg-gradient-orange rounded-t-full transition-all duration-300" />
                    
                    <div className="relative z-10">
                      {/* Icon container */}
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {language === "lv" ? service.titleLv : service.titleEn}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {language === "lv" ? service.descLv : service.descEn}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-5 text-primary font-medium text-sm">
                        {t("Uzzināt vairāk", "Learn more")}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: Brand Block — NEO ========== */}
      <section className="relative py-10 md:py-16 bg-muted/30">
        {/* Subtle animated gradient underline will be added */}
        <div className="container-neo">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center">
              <motion.h2 
                className="text-6xl md:text-8xl lg:text-9xl font-bold text-gradient-orange"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Neo
              </motion.h2>
              <p className="text-muted-foreground mt-3 text-lg italic">
                — {t("jauns", "new")} in Latin
              </p>
              {/* Animated gradient underline */}
              <motion.div 
                className="mt-4 h-1 rounded-full bg-gradient-orange"
                initial={{ width: 0 }}
                whileInView={{ width: 120 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 8: Kā mēs strādājam (Compact Stepper) ========== */}
      <section className="relative py-12 md:py-20 bg-background">
        <div className="container-neo">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="chip mb-4 inline-block">{t("Process", "Process")}</span>
              <h2 className="text-3xl md:text-4xl font-semibold">
                {t("Kā mēs strādājam", "How We Work")}
              </h2>
            </div>
          </ScrollReveal>

          {/* Vertical stepper */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
              
              <div className="space-y-4">
                {processSteps.map((step, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <motion.div 
                      className="relative flex items-start gap-5 pl-12"
                      whileHover={{ x: 4 }}
                    >
                      {/* Step number dot */}
                      <div className="absolute left-0 w-10 h-10 rounded-full bg-gradient-orange flex items-center justify-center text-primary-foreground font-bold text-sm shadow-orange">
                        {i + 1}
                      </div>
                      
                      <div className="flex-1 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/20 transition-colors">
                        <p className="text-foreground">
                          {language === "lv" ? step.stepLv : step.stepEn}
                        </p>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 9: Final CTA — Orange, Premium, Compact ========== */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        {/* Orange gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        
        {/* Subtle depth elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container-neo relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5">
                {t("Uzzini, kā varam palīdzēt tev.", "Find out how we can help you.")}
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                {t(
                  "Piesakies bezmaksas konsultācijai, kurā mēs izvērtesim uzņēmumu un tā procesu, lai sniegtu visprecīzāko pakalpojumu tava uznemuma vajadzibam.",
                  "Book a free consultation where we will evaluate your company and its processes to provide the most accurate service for your business needs."
                )}
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <Link to="/bezmaksas-konsultacija">
                <Button variant="hero" size="xl" className="shadow-orange hover:shadow-orange-hover">
                  {t("Pieteikt konsultāciju", "Book Consultation")}
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
