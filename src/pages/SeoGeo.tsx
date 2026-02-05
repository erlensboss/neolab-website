import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, BarChart3, FileText, Layers, ArrowRight, CheckCircle2, Target, Globe, TrendingUp, Eye, Settings, PieChart, Bot, Rocket, ShoppingCart, Building2, Briefcase, AlertCircle, Wrench, CheckCircle, Clock, Users, Zap, MessageSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// These will be translated inline with the t() function

export default function SeoGeo() {
  const {
    t,
    getLocalizedPath,
    language
  } = useLanguage();
  const diagnosticsSteps = [{
    icon: Layers,
    label: t("Tehniskais audits", "Technical audit"),
    description: t("Pilna vietnes analīze", "Full site analysis")
  }, {
    icon: FileText,
    label: t("Satura inventārs", "Content inventory"),
    description: t("Kas strādā, kas nē", "What works, what doesn't")
  }, {
    icon: Target,
    label: t("Konkurentu izpēte", "Competitor research"),
    description: t("Tirgus pozicionēšana", "Market positioning")
  }, {
    icon: BarChart3,
    label: t("Ranku analīze", "Rank analysis"),
    description: t("Esošās pozīcijas", "Current positions")
  }];
  const geoFeatures = [t("Google My Business optimizācija", "Google My Business optimization"), t("Lokālo atsauksmju stratēģija", "Local review strategy"), t("NAP konsistence", "NAP consistency"), t("Lokālais satura mārketings", "Local content marketing"), t("Ģeogrāfiski mērķētas lapas", "Geographically targeted pages"), t("Strukturēti dati lokālajam biznesam", "Structured data for local business")];
  return <div className="overflow-hidden">
      {/* ========== SECTION 1: Premium Hero ========== */}
      <section className="relative bg-gradient-hero bg-atmosphere overflow-hidden min-h-[60vh] md:min-h-[70vh] flex items-center py-12 md:py-0">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient mesh */}
          <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `
                radial-gradient(ellipse 80% 60% at 70% 40%, hsl(21 90% 48%) 0px, transparent 50%),
                radial-gradient(ellipse 50% 40% at 20% 60%, hsl(32 90% 55%) 0px, transparent 50%)
              `
        }} />

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
                linear-gradient(hsl(21 90% 48%) 1px, transparent 1px),
                linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)
              `,
          backgroundSize: "80px 80px"
        }} />

          {/* Floating orbs */}
          <motion.div className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-amber-400/5 blur-3xl" animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          <motion.div className="absolute bottom-1/4 left-[10%] w-48 h-48 rounded-full bg-gradient-to-tl from-amber-400/10 to-primary/5 blur-3xl" animate={{
          y: [0, 20, 0],
          scale: [1, 1.15, 1]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
        </div>

        <div className="container-neo section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div className="max-w-2xl">
              <ScrollReveal>
                <span className="chip mb-6 inline-block text-sm my-[40px]">SEO & GEO</span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 text-foreground">
                  {t("SEO un GEO optimizācija", "SEO and GEO optimization")} <span className="text-gradient-orange">{t("uzņēmumiem", "for businesses")}</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-6 md:mb-10">
                  {t("Kvalitatīvi un pārbaudīti SEO un GEO risinājumi, balstīti pieredzē, datos un skaidrā pieejā digitālajai redzamībai.", "Quality and proven SEO and GEO solutions, based on experience, data, and a clear approach to digital visibility.")}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                    <Button variant="hero" size="lg">
                      {t("Pieteikties auditam", "Apply for audit")}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Visual system */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="relative">
                {/* Main visual container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-5 md:p-8 border border-primary/10 shadow-xl md:shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5 md:mb-8">
                    <div className="flex items-center gap-3">
                      <motion.div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-orange flex items-center justify-center" animate={{
                      rotate: [0, 5, -5, 0]
                    }} transition={{
                      duration: 4,
                      repeat: Infinity
                    }}>
                        <Search className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </motion.div>
                      <span className="font-semibold text-sm md:text-base text-foreground">{t("Redzamības sistēma", "Visibility system")}</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-primary/20" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/30" />
                      <div className="w-3 h-3 rounded-full bg-green-400/30" />
                    </div>
                  </div>

                  {/* Visual cards grid */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                    {/* SEO Card */}
                    <motion.div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl md:rounded-2xl p-3 md:p-5 border border-primary/20" whileHover={{
                    y: -2
                  }}>
                      <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
                        <Globe className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        <span className="font-medium text-sm text-foreground">SEO</span>
                      </div>

                      <div className="space-y-2">
                        <div className="h-2 bg-primary/30 rounded-full w-full" />
                        <div className="h-2 bg-primary/20 rounded-full w-4/5" />
                        <div className="h-2 bg-primary/10 rounded-full w-3/5" />
                      </div>
                    </motion.div>

                    {/* GEO Card */}
                    <motion.div className="bg-gradient-to-br from-amber-400/5 to-amber-400/10 rounded-xl md:rounded-2xl p-3 md:p-5 border border-amber-400/20" whileHover={{
                    y: -2
                  }}>
                      <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
                        <Bot className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
                        <span className="font-medium text-sm text-foreground">GEO</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-amber-400/30 rounded-full w-full" />
                        <div className="h-2 bg-amber-400/20 rounded-full w-3/4" />
                        <div className="h-2 bg-amber-400/10 rounded-full w-1/2" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Results indicator */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg md:rounded-xl p-3 md:p-4 border border-green-200/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <motion.div className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-green-500/20 flex items-center justify-center" animate={{
                        scale: [1, 1.1, 1]
                      }} transition={{
                        duration: 2,
                        repeat: Infinity
                      }}>
                            <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                          </motion.div>
                          <span className="text-xs md:text-sm font-medium text-green-700">{t("Sistēmiska izaugsme", "Systematic growth")}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <motion.div className="w-2 h-2 rounded-full bg-green-400" animate={{
                        opacity: [0.5, 1, 0.5]
                      }} transition={{
                        duration: 1.5,
                        repeat: Infinity
                      }} />
                          <span className="text-xs text-green-600 font-medium">{t("Aktīvs", "Active")}</span>
                        </div>
                    </div>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-amber-400/10 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-tl from-amber-400/10 to-primary/10 blur-2xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: What is SEO & GEO ========== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Dynamic background with gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50/50" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
              radial-gradient(circle at 20% 30%, hsl(21 90% 48%) 0px, transparent 50%),
              radial-gradient(circle at 80% 70%, hsl(32 90% 55%) 0px, transparent 50%)
            `
      }} />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
              linear-gradient(hsl(21 90% 48%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)
            `,
        backgroundSize: "60px 60px"
      }} />

        <div className="container-neo relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="chip mb-6 inline-block text-sm">{t("Pamati", "Basics")}</span>
              <h2 className="text-foreground max-w-3xl mx-auto">
                {t("Kas ir", "What is")} <span className="text-gradient-orange">SEO</span> {t("un", "and")}{" "}
                <span className="text-gradient-orange">GEO</span> {t("optimizācija", "optimization")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
            {/* SEO Card */}
            <ScrollReveal delay={0.1}>
              <motion.div whileHover={{
              y: -4,
              scale: 1.01
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }} className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Header with icon */}
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <motion.div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-orange flex items-center justify-center shadow-orange" whileHover={{
                    rotate: 5
                  }}>
                      <Search className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">SEO</h3>
                      <span className="text-xs md:text-sm text-primary font-medium">
                        {t("Meklētājprogrammu optimizācija", "Search engine optimization")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                    {t("SEO optimizācija nodrošina uzņēmuma redzamību tradicionālajās meklētājprogrammās, galvenokārt Google, uzlabojot mājaslapas tehnisko kvalitāti, saturu un struktūru. Tā palīdz piesaistīt stabilu, ilgtermiņa organisko datplūsmu.", "SEO optimization ensures business visibility in traditional search engines, primarily Google, by improving website technical quality, content, and structure. It helps attract stable, long-term organic traffic.")}
                  </p>

                  {/* Visual element - search results mockup */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-primary/30 rounded w-2/3 mb-1" />
                        <div className="h-2 bg-gray-200 rounded w-full" />
                      </div>
                    </div>
                    <div className="flex items-center gap-3 opacity-60">
                      <div className="w-8 h-8 rounded-lg bg-gray-100" />
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-1/2 mb-1" />
                        <div className="h-2 bg-gray-100 rounded w-full" />
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {[{
                    lv: "Google",
                    en: "Google"
                  }, {
                    lv: "Tehnika",
                    en: "Technical"
                  }, {
                    lv: "Saturs",
                    en: "Content"
                  }, {
                    lv: "Ilgtermiņš",
                    en: "Long-term"
                  }].map(tag => <span key={tag.lv} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {t(tag.lv, tag.en)}
                      </span>)}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* GEO Card */}
            <ScrollReveal delay={0.2}>
              <motion.div whileHover={{
              y: -4,
              scale: 1.01
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }} className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-amber-300/30 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Header with icon */}
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <motion.div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg" whileHover={{
                    rotate: -5
                  }}>
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a10 10 0 0 0 0 20" />
                        <path d="M2 12h20" />
                        <path d="M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10" />
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">GEO</h3>
                      <span className="text-xs md:text-sm text-amber-600 font-medium">
                        {t("Ģeneratīvā meklēšanas optimizācija", "Generative search optimization")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                    {t("GEO optimizācija fokusējas uz redzamību AI balstītos meklējumos un ģeneratīvajās atbildēs, kur informācija netiek vienkārši parādīta kā saišu saraksts, bet tiek apkopota, interpretēta un ieteikta. Tā palīdz uzņēmumam būt klātesošam tur, kur lietotāji uzdod jautājumus un sagaida konkrētas, uzticamas atbildes.", "GEO optimization focuses on visibility in AI-based searches and generative responses, where information is not simply displayed as a list of links but is compiled, interpreted, and recommended. It helps businesses be present where users ask questions and expect concrete, reliable answers.")}{" "}
                  </p>
                  {/* Visual element - AI answer mockup */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200/50">
                    <div className="flex items-start gap-3">
                      <motion.div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0" animate={{
                      scale: [1, 1.05, 1]
                    }} transition={{
                      duration: 2,
                      repeat: Infinity
                    }}>
                        <span className="text-white text-xs font-bold">AI</span>
                      </motion.div>
                      <div className="flex-1">
                        <div className="h-2 bg-amber-200/60 rounded w-full mb-2" />
                        <div className="h-2 bg-amber-200/40 rounded w-5/6 mb-2" />
                        <div className="h-2 bg-amber-200/30 rounded w-4/6" />
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {[{
                    lv: "AI",
                    en: "AI"
                  }, {
                    lv: "AI meklēšana",
                    en: "AI search"
                  }, {
                    lv: "ChatGPT",
                    en: "ChatGPT"
                  }, {
                    lv: "Gemini",
                    en: "Gemini"
                  }, {
                    lv: "Nākotne",
                    en: "Future"
                  }].map(tag => <span key={tag.lv} className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full font-medium">
                        {t(tag.lv, tag.en)}
                      </span>)}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Combined value proposition */}
          <ScrollReveal delay={0.3}>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-amber-400/10 to-primary/10 rounded-2xl blur-lg" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 border border-primary/20 text-center">
                <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6 flex-wrap">
                  <motion.div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-orange flex items-center justify-center" animate={{
                  rotate: [0, 360]
                }} transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}>
                    <Search className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </motion.div>
                  <div className="text-2xl md:text-3xl text-primary font-light">+</div>
                  <motion.div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center" animate={{
                  rotate: [360, 0]
                }} transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}>
                    <Globe className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </motion.div>
                  <div className="text-2xl md:text-3xl text-primary font-light">=</div>
                  <motion.div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-primary to-amber-500 flex items-center justify-center" animate={{
                  scale: [1, 1.1, 1]
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }}>
                    <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </motion.div>
                </div>
                <p className="text-lg md:text-xl lg:text-2xl text-foreground font-medium leading-relaxed">
                  {t("Apvienojot SEO un GEO, uzņēmums veido redzamību gan", "By combining SEO and GEO, a business builds visibility in both")}{" "}
                  <span className="text-primary font-semibold">{t("šodienas", "today's")}</span>, {t("gan", "and")}{" "}
                  <span className="text-amber-600 font-semibold">{t("nākotnes", "tomorrow's")}</span> {t("meklēšanas vidēs.", "search environments.")}
                </p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 3: Results System ========== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0 bg-gradient-to-tl from-amber-50/80 via-white to-orange-50/60" />

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `
              radial-gradient(ellipse 80% 50% at 20% 40%, hsl(21 90% 48%) 0px, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 60%, hsl(32 90% 55%) 0px, transparent 50%)
            `
      }} />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `
              linear-gradient(hsl(21 90% 48%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)
            `,
        backgroundSize: "50px 50px"
      }} />

        {/* Floating decorative elements */}
        <motion.div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-primary/5 to-amber-400/5 blur-2xl" animate={{
        y: [0, -20, 0],
        scale: [1, 1.1, 1]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-20 right-[15%] w-40 h-40 rounded-full bg-gradient-to-tl from-amber-400/5 to-primary/5 blur-2xl" animate={{
        y: [0, 20, 0],
        scale: [1, 1.15, 1]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }} />

        <div className="container-neo relative z-10">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <span className="chip mb-6 inline-block text-sm">{t("Sistēma", "System")}</span>
              <h2 className="text-foreground max-w-4xl mx-auto leading-tight">
                <span className="text-gradient-orange">SEO</span> {t("un", "and")} <span className="text-gradient-orange">GEO</span>{" "}
                {t("nav viens rezultāts, tā ir", "is not one result, it's a")} <span className="text-gradient-orange">{t("sistēma", "system")}</span> {t("uzņēmuma labā.", "for your business.")}
              </h2>
            </div>
          </ScrollReveal>

          {/* Results grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[{
            icon: Eye,
            title: t("Stabilāka redzamība", "Stable visibility"),
            description: t("Uzņēmums kļūst atrodams brīdī, kad potenciālie klienti aktīvi meklē risinājumus, nevis tikai redz reklāmu.", "The business becomes discoverable when potential clients are actively searching for solutions, not just seeing ads."),
            gradient: "from-primary to-orange-500",
            delay: 0.1
          }, {
            icon: Settings,
            title: t("Sakārtota digitālā struktūra", "Organized digital structure"),
            description: t("Tiek uzlabota mājaslapas loģika, saturs un tehniskā kvalitāte, kas ietekmē gan lietotāja pieredzi, gan meklētājprogrammu uztveri.", "Website logic, content, and technical quality are improved, affecting both user experience and search engine perception."),
            gradient: "from-orange-500 to-amber-500",
            delay: 0.15
          }, {
            icon: PieChart,
            title: t("Skaidrība par to, kas strādā", "Clarity about what works"),
            description: t("Uzņēmums saprot, kuri vaicājumi piesaista apmeklētājus, kā tie nonāk līdz piedāvājumam un kur rodas reālais rezultāts.", "The business understands which queries attract visitors, how they reach the offer, and where real results come from."),
            gradient: "from-amber-500 to-yellow-500",
            delay: 0.2
          }, {
            icon: Bot,
            title: t("Redzamība arī AI meklējumos", "Visibility in AI searches"),
            description: t("GEO optimizācija paplašina klātbūtni jaunās paaudzes meklēšanas platformās un AI ģenerētajās atbildēs.", "GEO optimization expands presence in next-generation search platforms and AI-generated responses."),
            gradient: "from-yellow-500 to-amber-400",
            delay: 0.25
          }, {
            icon: Rocket,
            title: t("Ilgtermiņa izaugsmes pamats", "Long-term growth foundation"),
            description: t("SEO un GEO kļūst par stabilu digitālās izaugsmes balstu, nevis taktisku rīku atsevišķām kampaņām.", "SEO and GEO become a stable foundation for digital growth, not a tactical tool for individual campaigns."),
            gradient: "from-amber-400 to-primary",
            delay: 0.3,
            featured: true
          }].map((item, index) => <ScrollReveal key={index} delay={item.delay}>
                <motion.div whileHover={{
              y: -6,
              scale: 1.02
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }} className={`relative group h-full ${item.featured ? "md:col-span-2 lg:col-span-1" : ""}`}>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`} />

                  {/* Card */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-5 md:p-8 border border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                    {/* Icon with animated background */}
                    <div className="relative mb-4 md:mb-6">
                      <motion.div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`} whileHover={{
                    rotate: 5,
                    scale: 1.05
                  }} transition={{
                    type: "spring",
                    stiffness: 400
                  }}>
                        <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </motion.div>
                      {/* Pulse ring */}
                      <motion.div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-30`} animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0, 0.3]
                  }} transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2
                  }} />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-4">{item.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed flex-1">
                      {item.description}
                    </p>

                    {/* Bottom accent line */}
                    <motion.div className={`mt-4 md:mt-6 h-1 rounded-full bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} initial={{
                  scaleX: 0
                }} whileInView={{
                  scaleX: 1
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.5,
                  delay: item.delay + 0.2
                }} />
                  </div>
                </motion.div>
              </ScrollReveal>)}
          </div>

          {/* Visual connector at bottom */}
          <ScrollReveal delay={0.4}>
            <div className="mt-16 flex justify-center">
              <motion.div className="flex items-center gap-3" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }}>
                {[0, 1, 2, 3, 4].map(i => <motion.div key={i} className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-amber-500" animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }} />)}
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 4: Experience & Achievements ========== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50/50 to-white" />

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `
              radial-gradient(ellipse 60% 40% at 30% 30%, hsl(21 90% 48%) 0px, transparent 50%),
              radial-gradient(ellipse 50% 50% at 70% 70%, hsl(32 90% 55%) 0px, transparent 50%)
            `
      }} />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
              linear-gradient(hsl(21 90% 48%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)
            `,
        backgroundSize: "40px 40px"
      }} />

        {/* Floating orbs */}
        <motion.div className="absolute top-16 right-[20%] w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-amber-400/10 blur-2xl" animate={{
        y: [0, -15, 0]
      }} transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-24 left-[15%] w-32 h-32 rounded-full bg-gradient-to-tl from-amber-400/10 to-primary/10 blur-2xl" animate={{
        y: [0, 15, 0]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />

        <div className="container-neo relative z-10">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <span className="chip mb-6 inline-block text-sm">{t("Pieredze", "Experience")}</span>
              <h2 className="text-foreground max-w-3xl mx-auto">
                {t("Mūsu", "Our")} <span className="text-gradient-orange">{t("pieredze", "experience")}</span> {t("un sasniegumi", "and achievements")}
              </h2>
            </div>
          </ScrollReveal>

          {/* Case study cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {[{
            industry: t("E-komercija", "E-commerce"),
            icon: ShoppingCart,
            gradient: "from-primary to-orange-500",
            bgGradient: "from-primary/5 to-orange-500/5",
            situation: t("Interneta veikals ar vairāk nekā 2000 produktiem netika atrasts Google meklējumos. Produktu lapas neindeksējās, un organiskais trafiks bija minimāls.", "An online store with more than 2000 products was not found in Google searches. Product pages were not indexed, and organic traffic was minimal."),
            solution: t("Veicām pilnu SEO auditu, sakārtojām vietnes struktūru, optimizējām produktu lapas ar strukturētiem datiem un izveidojām skaidru kategorizācijas stratēģiju.", "We performed a full SEO audit, organized the site structure, optimized product pages with structured data, and created a clear categorization strategy."),
            result: "+340%",
            resultLabel: t("organiskā trafika pieaugums", "organic traffic growth"),
            delay: 0.1
          }, {
            industry: t("Lokāls pakalpojums", "Local service"),
            icon: Building2,
            gradient: "from-orange-500 to-amber-500",
            bgGradient: "from-orange-500/5 to-amber-500/5",
            situation: t("Būvniecības uzņēmums netika atrasts lokālajos meklējumos. Klienti nespēja atrast uzņēmumu, meklējot pakalpojumu kopā ar pilsētu.", "A construction company was not found in local searches. Clients couldn't find the company when searching for the service with the city name."),
            solution: t("SEO audita laikā identificējām problēmas lokālajā redzamībā, optimizējām Google profilu, sakārtojām NAP datus un izveidojām lokālā satura struktūru.", "During the SEO audit, we identified problems with local visibility, optimized Google profile, organized NAP data, and created a local content structure."),
            result: "Top 3",
            resultLabel: t("pozīcija lokālajos rezultātos", "position in local results"),
            delay: 0.2
          }, {
            industry: t("B2B pakalpojumi", "B2B services"),
            icon: Briefcase,
            gradient: "from-amber-500 to-yellow-500",
            bgGradient: "from-amber-500/5 to-yellow-500/5",
            situation: t("Konsultāciju uzņēmums saņēma apmeklētājus, bet maz pieprasījumu. Augsts bounce rate un neskaidra konversijas plūsma.", "A consulting company received visitors but few inquiries. High bounce rate and unclear conversion flow."),
            solution: t("Balstoties audita secinājumos, pārstrukturējām saturu, uzlabojām galvenās lapas un izveidojām skaidru konversijas piltuvi.", "Based on audit findings, we restructured content, improved key pages, and created a clear conversion funnel."),
            result: "+180%",
            resultLabel: t("vairāk kvalificētu pieprasījumu", "more qualified inquiries"),
            delay: 0.3
          }].map((caseStudy, index) => <ScrollReveal key={index} delay={caseStudy.delay}>
                <motion.div whileHover={{
              y: -8,
              scale: 1.02
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }} className="relative group h-full">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`} />

                  {/* Card */}
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full flex flex-col overflow-hidden">
                    {/* Header with icon and industry */}
                    <div className={`bg-gradient-to-br ${caseStudy.bgGradient} p-4 md:p-6 border-b border-primary/5`}>
                      <div className="flex items-center gap-3 md:gap-4">
                        <motion.div className={`w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${caseStudy.gradient} flex items-center justify-center shadow-lg`} whileHover={{
                      rotate: 5,
                      scale: 1.1
                    }}>
                          <caseStudy.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                        </motion.div>
                        <span className="font-bold text-base md:text-lg text-foreground">{caseStudy.industry}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-6 flex-1 flex flex-col">
                      {/* Situācija */}
                      <div className="mb-4 md:mb-5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                            <AlertCircle className="w-3.5 h-3.5 text-muted-foreground" />
                          </div>
                          <span className="text-sm font-semibold text-foreground uppercase tracking-wider">
                            {t("Situācija", "Situation")}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{caseStudy.situation}</p>
                      </div>

                      {/* Risinājums */}
                      <div className="mb-5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                            <Wrench className="w-3.5 h-3.5 text-muted-foreground" />
                          </div>
                          <span className="text-sm font-semibold text-foreground uppercase tracking-wider">
                            {t("Risinājums", "Solution")}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{caseStudy.solution}</p>
                      </div>

                      {/* Rezultāts */}
                      <div className="mt-auto">
                        <div className={`bg-gradient-to-br ${caseStudy.bgGradient} rounded-2xl p-5 border border-primary/10`}>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                            </div>
                            <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                              {t("Rezultāts", "Result")}
                            </span>
                          </div>
                          <motion.div initial={{
                        scale: 0.8,
                        opacity: 0
                      }} whileInView={{
                        scale: 1,
                        opacity: 1
                      }} viewport={{
                        once: true
                      }} transition={{
                        delay: caseStudy.delay + 0.3,
                        type: "spring"
                      }}>
                            <span className={`text-4xl font-bold bg-gradient-to-r ${caseStudy.gradient} bg-clip-text text-transparent`}>
                              {caseStudy.result}
                            </span>
                            <p className="text-muted-foreground text-sm mt-1">{caseStudy.resultLabel}</p>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <motion.div className={`h-1 bg-gradient-to-r ${caseStudy.gradient}`} initial={{
                  scaleX: 0
                }} whileInView={{
                  scaleX: 1
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.6,
                  delay: caseStudy.delay + 0.2
                }} />
                  </div>
                </motion.div>
              </ScrollReveal>)}
          </div>

          {/* Bottom visual connector */}
          <ScrollReveal delay={0.4}>
            <div className="mt-16 flex justify-center">
              <motion.div className="flex items-center gap-4" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }}>
                <motion.div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-orange-500 flex items-center justify-center shadow-lg" animate={{
                scale: [1, 1.1, 1]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }}>
                  <TrendingUp className="w-5 h-5 text-white" />
                </motion.div>
                <span className="text-muted-foreground font-medium">{t("Jūsu veiksmes stāsts var būt nākamais", "Your success story could be next")}</span>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 5: NEOLab Solution — PREMIUM CONVERSION BLOCK ========== */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Premium background with depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50/30" />

        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
              radial-gradient(circle at 25% 25%, hsl(21 90% 48%) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, hsl(21 90% 48%) 1px, transparent 1px)
            `,
        backgroundSize: "60px 60px"
      }} />

        {/* Accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Floating accents */}
        <motion.div className="absolute top-32 left-[5%] w-64 h-64 rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-32 right-[8%] w-72 h-72 rounded-full bg-gradient-to-tl from-amber-400/5 to-transparent blur-3xl" animate={{
        scale: [1.1, 1, 1.1],
        opacity: [0.4, 0.6, 0.4]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }} />

        <div className="container-neo relative z-10">
          {/* Premium Header */}
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <motion.div initial={{
              opacity: 0,
              y: -10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-widest">{t("Metodika", "Methodology")}</span>
                <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-primary" />
              </motion.div>
              <h2 className="text-foreground max-w-4xl mx-auto mb-6">
                {t("Kāds ir", "What is the")} <span className="text-gradient-orange">NEOLab</span> {t("risinājums", "solution")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t("NEOLab piedāvā strukturētu un pārskatāmu pieeju SEO un GEO optimizācijai, kas balstīta auditos, prioritātēs un pakāpeniskā ieviešanā.", "NEOLab offers a structured and transparent approach to SEO and GEO optimization, based on audits, priorities, and gradual implementation.")}
              </p>
            </div>
          </ScrollReveal>

          {/* ===== HERO SERVICE: SEO Audit - The Main Block ===== */}
          <ScrollReveal delay={0.1}>
            <Link to={getLocalizedPath("/seo-un-geo/seo-audits")}>
              <motion.div whileHover={{
              y: -6,
              scale: 1.01
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 25
            }} className="group relative mb-8 md:mb-12 cursor-pointer">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-orange-500/15 to-amber-400/10 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-500" />
                
                {/* Main card */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Top accent gradient */}
                  <motion.div className="h-2 bg-gradient-to-r from-primary via-orange-500 to-amber-400" initial={{
                  scaleX: 0
                }} whileInView={{
                  scaleX: 1
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.8
                }} />
                  
                  <div className="p-6 md:p-10 lg:p-12">
                    <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-center">
                      {/* Left: Content - takes 3 columns */}
                      <div className="lg:col-span-3">
                        {/* Badge */}
                        <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-full mb-5" animate={{
                        scale: [1, 1.02, 1]
                      }} transition={{
                        duration: 3,
                        repeat: Infinity
                      }}>
                          <motion.div className="w-2 h-2 rounded-full bg-primary" animate={{
                          opacity: [0.5, 1, 0.5]
                        }} transition={{
                          duration: 1.5,
                          repeat: Infinity
                        }} />
                          <span className="text-sm font-semibold text-primary">{t("Galvenais pakalpojums", "Main service")}</span>
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                          {t("SEO audits un situācijas izvērtējums", "SEO audit and situation assessment")}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                          {t("Sadarbība vienmēr sākas ar auditu. Tiek analizēta mājaslapas tehniskā puse, saturs, struktūra, konkurenti un esošā redzamība, lai saprastu, kur tieši slēpjas galvenās izaugsmes iespējas.", "Collaboration always starts with an audit. The website's technical side, content, structure, competitors, and existing visibility are analyzed to understand where the main growth opportunities lie.")}
                        </p>

                        {/* Features list */}
                        <div className="grid sm:grid-cols-2 gap-3 mb-6">
                          {[t("Pilna tehniskā analīze", "Full technical analysis"), t("Konkurentu izpēte", "Competitor research"), t("Satura inventārs", "Content inventory"), t("Prioritāšu karte", "Priority map")].map((feature, i) => <div key={i} className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-sm font-medium text-foreground">{feature}</span>
                            </div>)}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-3 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
                          <span>{t("Uzzināt vairāk", "Learn more")}</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Right: Visual - takes 2 columns */}
                      <div className="lg:col-span-2">
                        <div className="relative bg-gradient-to-br from-slate-50 to-orange-50/50 rounded-2xl p-6 border border-primary/10">
                          {/* Audit visualization */}
                          <div className="space-y-4">
                            {/* Header bar */}
                            <div className="flex items-center gap-3 mb-4">
                              <motion.div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center shadow-lg" animate={{
                              rotate: [0, 5, -5, 0]
                            }} transition={{
                              duration: 4,
                              repeat: Infinity
                            }}>
                                <Search className="w-6 h-6 text-white" />
                              </motion.div>
                              <div>
                                <span className="text-sm font-semibold text-foreground">{t("Audita panelis", "Audit panel")}</span>
                                <div className="flex items-center gap-1.5 mt-1">
                                  <motion.div className="w-2 h-2 rounded-full bg-green-500" animate={{
                                  opacity: [0.5, 1, 0.5]
                                }} transition={{
                                  duration: 1.5,
                                  repeat: Infinity
                                }} />
                                  <span className="text-xs text-green-600">{t("Aktīvs", "Active")}</span>
                                </div>
                              </div>
                            </div>

                            {/* Progress bars representing audit areas */}
                            {[{
                            label: t("Tehnika", "Technical"),
                            progress: 85,
                            color: "from-primary to-orange-500"
                          }, {
                            label: t("Saturs", "Content"),
                            progress: 72,
                            color: "from-orange-500 to-amber-500"
                          }, {
                            label: t("Struktūra", "Structure"),
                            progress: 68,
                            color: "from-amber-500 to-yellow-500"
                          }, {
                            label: t("Saites", "Links"),
                            progress: 55,
                            color: "from-yellow-500 to-amber-400"
                          }].map((item, i) => <div key={i} className="space-y-1.5">
                                <div className="flex justify-between text-xs">
                                  <span className="text-muted-foreground font-medium">{item.label}</span>
                                  <span className="text-foreground font-semibold">{item.progress}%</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                  <motion.div className={`h-full bg-gradient-to-r ${item.color} rounded-full`} initial={{
                                width: 0
                              }} whileInView={{
                                width: `${item.progress}%`
                              }} viewport={{
                                once: true
                              }} transition={{
                                duration: 1,
                                delay: 0.2 + i * 0.1
                              }} />
                                </div>
                              </div>)}

                            {/* Summary stat */}
                            <div className="mt-5 pt-4 border-t border-primary/10 flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">{t("Kopējais vērtējums", "Overall score")}</span>
                              <motion.span className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent" initial={{
                              opacity: 0,
                              scale: 0.8
                            }} whileInView={{
                              opacity: 1,
                              scale: 1
                            }} viewport={{
                              once: true
                            }} transition={{
                              delay: 0.6
                            }}>
                                72/100
                              </motion.span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </ScrollReveal>

          {/* ===== SECONDARY SERVICES GRID - 5 services in compact layout ===== */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 mb-10 md:mb-16">
            {[{
            icon: Settings,
            title: t("Tehniskā SEO optimizācija", "Technical SEO optimization"),
            description: t("Lapas ātrums, struktūra, indeksācija un tehniskie pamati.", "Page speed, structure, indexing, and technical fundamentals."),
            accent: "from-orange-500 to-amber-500",
            link: "/seo-un-geo/tehniska-seo",
            delay: 0.1
          }, {
            icon: FileText,
            title: t("Satura un atslēgvārdu struktūra", "Content and keyword structure"),
            description: t("Loģiska satura struktūra balstīta lietotāju meklējumos.", "Logical content structure based on user searches."),
            accent: "from-amber-500 to-yellow-500",
            link: "/seo-un-geo/satura-struktura",
            delay: 0.15
          }, {
            icon: Target,
            title: t("Keyword list veidošana", "Keyword list creation"),
            description: t("Strukturēts atslēgvārdu saraksts pa lapām un nolūkiem.", "Structured keyword list by pages and intents."),
            accent: "from-yellow-500 to-amber-400",
            link: "/seo-un-geo/keyword-list",
            delay: 0.2
          }, {
            icon: Globe,
            title: t("GEO mājaslapas audits", "GEO website audit"),
            description: t("Redzamība AI meklēšanas vidēs un ģeneratīvajās atbildēs.", "Visibility in AI search environments and generative responses."),
            accent: "from-amber-400 to-orange-500",
            link: "/seo-un-geo/geo-audits",
            delay: 0.25
          }, {
            icon: Rocket,
            title: t("GEO stratēģijas izveide", "GEO strategy development"),
            description: t("GEO stratēģija jaunās paaudzes meklēšanas kanālos.", "GEO strategy in next-generation search channels."),
            accent: "from-orange-500 to-primary",
            link: "/seo-un-geo/geo-strategija",
            delay: 0.3
          }].map((service, index) => <ScrollReveal key={index} delay={service.delay}>
                <Link to={getLocalizedPath(service.link)}>
                  <motion.div whileHover={{
                y: -6,
                scale: 1.02
              }} transition={{
                type: "spring",
                stiffness: 400,
                damping: 25
              }} className="group relative h-full cursor-pointer">
                    {/* Hover glow */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${service.accent} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500`} />

                    {/* Card */}
                    <div className="relative bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col overflow-hidden">
                      {/* Top accent line - visible only on hover */}
                      <div className={`h-1 bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                      <div className="p-4 md:p-5 flex-1 flex flex-col">
                        {/* Icon */}
                        <motion.div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center shadow-md mb-3 md:mb-4`} whileHover={{
                      rotate: 5,
                      scale: 1.05
                    }}>
                          <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-sm md:text-base font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed flex-1 line-clamp-3">
                          {service.description}
                        </p>

                        {/* CTA button - orange like the main audit block */}
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary group-hover:text-primary-foreground bg-transparent group-hover:bg-primary px-3 py-1.5 rounded-lg transition-all duration-300">
                            {t("Uzzināt vairāk", "Learn more")}
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>)}
          </div>

          {/* Premium CTA Block */}
          <ScrollReveal delay={0.4}>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="relative">
              {/* Glow behind CTA */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-orange-500/10 to-amber-400/10 rounded-3xl blur-2xl" />

              <div className="relative bg-gradient-to-br from-white via-white to-orange-50/50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-primary/10 shadow-xl overflow-hidden">
                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-400/5 to-transparent rounded-tr-full" />

                <div className="relative flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-8">
                  <div className="text-center lg:text-left">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 md:mb-3">
                      {t("Katrs solis tiek pielāgots", "Every step is tailored to")} <span className="text-gradient-orange">{t("Jūsu situācijai", "your situation")}</span>
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg max-w-xl">
                      {t("Saņemiet bezmaksas konsultāciju, lai saprastu, kādi soļi ir būtiskākie tieši jūsu uzņēmumam.", "Get a free consultation to understand which steps are most important for your business.")}
                    </p>
                  </div>

                  <Link to={getLocalizedPath("/bezmaksas-konsultacija")} className="flex-shrink-0">
                    <motion.div whileHover={{
                    scale: 1.02
                  }} whileTap={{
                    scale: 0.98
                  }}>
                      <Button variant="hero" size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 text-base px-8">
                        {t("Sākt ar bezmaksas auditu", "Start with a free audit")}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </motion.div>
                  </Link>
                </div>

                {/* Animated progress dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {[0, 1, 2, 3, 4, 5].map(i => <motion.div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30" animate={{
                  opacity: [0.3, 1, 0.3]
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.15
                }} />)}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== SECTION 6: Collaboration Roadmap — VERTICAL FLOW ========== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Premium background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-orange-50/30" />

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle, hsl(21 90% 48%) 1px, transparent 1px)`,
        backgroundSize: "32px 32px"
      }} />

        {/* Side accent lines */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute right-0 top-1/3 bottom-1/3 w-1 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent" />

        <div className="container-neo relative z-10">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <motion.div initial={{
              opacity: 0,
              y: -10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-widest">{t("Process", "Process")}</span>
                <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-primary" />
              </motion.div>
              <h2 className="text-foreground max-w-3xl mx-auto">
                {t("Kā notiek", "How does")} <span className="text-gradient-orange">{t("sadarbība", "collaboration")}</span> {t("", "work")}
              </h2>
            </div>
          </ScrollReveal>

          {/* Vertical Roadmap */}
          <div className="max-w-4xl mx-auto relative px-2 md:px-0">
            {/* Central vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
              <motion.div className="w-full h-full bg-gradient-to-b from-primary via-orange-500 to-amber-400" initial={{
              scaleY: 0
            }} whileInView={{
              scaleY: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 1.5,
              ease: "easeOut"
            }} style={{
              transformOrigin: "top"
            }} />
            </div>

            {/* Roadmap steps */}
            {[{
            number: "01",
            icon: Search,
            title: t("Sākotnējais audits un izvērtējums", "Initial audit and assessment"),
            description: t("Sadarbība sākas ar mājaslapas, esošās redzamības un konkurentu analīzi, lai noteiktu pašreizējo situāciju un galvenās iespējas.", "Collaboration begins with website, existing visibility, and competitor analysis to determine the current situation and main opportunities."),
            gradient: "from-primary to-orange-500",
            delay: 0.1
          }, {
            number: "02",
            icon: Target,
            title: t("Prioritātes un stratēģija", "Priorities and strategy"),
            description: t("Tiek noteiktas prioritātes un izstrādāta individuāla SEO/GEO stratēģija, kas atbilst uzņēmuma mērķiem un resursiem.", "Priorities are set and an individual SEO/GEO strategy is developed that matches the company's goals and resources."),
            gradient: "from-orange-500 to-amber-500",
            delay: 0.2
          }, {
            number: "03",
            icon: Settings,
            title: t("Pakāpeniska ieviešana", "Gradual implementation"),
            description: t("Optimizācijas darbi tiek ieviesti pakāpeniski — tehniskie labojumi, satura uzlabojumi un strukturālās izmaiņas.", "Optimization work is implemented gradually — technical fixes, content improvements, and structural changes."),
            gradient: "from-amber-500 to-yellow-500",
            delay: 0.3
          }, {
            number: "04",
            icon: BarChart3,
            title: t("Uzraudzība un analīze", "Monitoring and analysis"),
            description: t("Rezultāti tiek nepārtraukti uzraudzīti un analizēti, izmantojot profesionālus rīkus un skaidrus atskaites.", "Results are continuously monitored and analyzed using professional tools and clear reports."),
            gradient: "from-yellow-500 to-amber-400",
            delay: 0.4
          }, {
            number: "05",
            icon: TrendingUp,
            title: t("Nepārtraukta uzlabošana", "Continuous improvement"),
            description: t("Notiek nepārtraukta uzlabošana, balstoties datos un rezultātos. Stratēģija tiek pielāgota tirgus izmaiņām.", "Continuous improvement based on data and results. Strategy is adjusted to market changes."),
            gradient: "from-amber-400 to-primary",
            delay: 0.5
          }].map((step, index) => <ScrollReveal key={step.number} delay={step.delay}>
                <div className={`relative flex items-start gap-4 md:gap-12 mb-10 md:mb-12 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Node point on the line */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div initial={{
                  scale: 0
                }} whileInView={{
                  scale: 1
                }} viewport={{
                  once: true
                }} transition={{
                  delay: step.delay + 0.2,
                  type: "spring",
                  stiffness: 300
                }} className="relative">
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                        <step.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                      </div>
                      {/* Pulse ring */}
                      <motion.div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} opacity-30`} animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0, 0.3]
                  }} transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.3
                  }} />
                    </motion.div>
                  </div>

                  {/* Content card - alternating sides on desktop */}
                  <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <motion.div whileHover={{
                  y: -4
                }} transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }} className="group relative">
                      {/* Glow effect */}
                      <div className={`absolute -inset-2 bg-gradient-to-br ${step.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-all duration-500`} />

                      <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                        {/* Number badge */}
                        <div className="flex items-start justify-between mb-4">
                          <span className={`text-4xl font-bold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-30`}>
                            {step.number}
                          </span>
                          {/* Arrow indicator pointing to center */}
                          <div className={`hidden md:block w-4 h-4 ${index % 2 === 0 ? "rotate-0" : "rotate-180"}`}>
                            <svg className="w-full h-full text-primary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

                        {/* Progress indicator */}
                        <div className="mt-4 pt-3 border-t border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                              <motion.div className={`h-full bg-gradient-to-r ${step.gradient}`} initial={{
                            width: 0
                          }} whileInView={{
                            width: "100%"
                          }} viewport={{
                            once: true
                          }} transition={{
                            duration: 0.8,
                            delay: step.delay + 0.3
                          }} />
                            </div>
                            <CheckCircle2 className="w-4 h-4 text-green-500 opacity-60" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-4rem)]" />
                </div>
              </ScrollReveal>)}

            {/* End node - Success indicator */}
            <ScrollReveal delay={0.6}>
              <div className="relative flex justify-center mt-8">
                <motion.div initial={{
                scale: 0
              }} whileInView={{
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.7,
                type: "spring"
              }} className="relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-xl">
                    <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <motion.div className="absolute inset-0 rounded-full bg-green-400 opacity-30" animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0, 0.3]
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }} />
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Final success message */}
            <ScrollReveal delay={0.7}>
              <motion.div initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} className="text-center mt-8">
                <p className="text-lg font-semibold text-foreground">{t("Ilgtermiņa rezultāti", "Long-term results")}</p>
                <p className="text-muted-foreground">{t("Stabila un pieaugoša redzamība", "Stable and growing visibility")}</p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: FAQ ========== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Simple clean background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />

        <div className="container-neo relative z-10">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="chip mb-4 inline-block text-sm">FAQ</span>
              <h2 className="text-foreground">
                {t("Biežāk uzdotie jautājumi par", "Frequently asked questions about")} <span className="text-gradient-orange">SEO</span> {t("un", "and")}{" "}
                <span className="text-gradient-orange">GEO</span> {t("pakalpojumiem.", "services.")}
              </h2>
            </div>
          </ScrollReveal>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
              {[{
              icon: Globe,
              question: t("Vai GEO aizvieto SEO?", "Does GEO replace SEO?"),
              answer: t("Nē. GEO papildina SEO un paplašina redzamību jaunās meklēšanas vidēs, bet neaizvieto tradicionālo SEO.", "No. GEO complements SEO and expands visibility in new search environments, but does not replace traditional SEO."),
              gradient: "from-primary to-orange-500"
            }, {
              icon: Clock,
              question: t("Cik ilgā laikā SEO sāk dot rezultātus?", "How long does it take for SEO to show results?"),
              answer: t("Parasti pirmās izmaiņas ir redzamas dažu mēnešu laikā, bet stabils rezultāts veidojas ilgtermiņā.", "Usually the first changes are visible within a few months, but stable results are formed in the long term."),
              gradient: "from-orange-500 to-amber-500"
            }, {
              icon: Users,
              question: t("Vai SEO un GEO ir piemērots mazākiem uzņēmumiem?", "Is SEO and GEO suitable for smaller businesses?"),
              answer: t("Jā, ja pieeja ir pielāgota uzņēmuma apjomam, mērķiem un resursiem.", "Yes, if the approach is tailored to the company's size, goals, and resources."),
              gradient: "from-amber-500 to-yellow-500"
            }, {
              icon: Zap,
              question: t("Vai SEO var apvienot ar Google Ads?", "Can SEO be combined with Google Ads?"),
              answer: t("Jā. SEO un Google Ads var veiksmīgi papildināt viens otru, veidojot stabilu pieprasījuma plūsmu.", "Yes. SEO and Google Ads can successfully complement each other, creating a stable demand flow."),
              gradient: "from-yellow-500 to-amber-400"
            }, {
              icon: MessageSquare,
              question: t("Ar ko sākas sadarbība ar NEOLab?", "How does collaboration with NEOLab start?"),
              answer: t("Sadarbība sākas ar auditu un situācijas izvērtējumu, lai noteiktu piemērotāko rīcības plānu.", "Collaboration starts with an audit and situation assessment to determine the most suitable action plan."),
              gradient: "from-amber-400 to-primary"
            }].map((faq, index) => <ScrollReveal key={index} delay={index * 0.05}>
                  <AccordionItem value={`item-${index}`} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 overflow-hidden data-[state=open]:shadow-lg data-[state=open]:border-primary/30">
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
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{faq.answer}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ========== SECTION 8: Final CTA ========== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50/50 to-white" />

        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle, hsl(21 90% 48%) 1px, transparent 1px)`,
        backgroundSize: "40px 40px"
      }} />

        {/* Floating accents */}
        <motion.div className="absolute top-20 left-[10%] w-48 h-48 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity
      }} />
        <motion.div className="absolute bottom-20 right-[15%] w-56 h-56 rounded-full bg-gradient-to-tl from-amber-400/10 to-transparent blur-3xl" animate={{
        scale: [1.1, 1, 1.1],
        opacity: [0.4, 0.6, 0.4]
      }} transition={{
        duration: 10,
        repeat: Infinity
      }} />

        <div className="container-neo relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-foreground mb-6">
                {t("Sper soļus", "Take steps")} <span className="text-gradient-orange">{t("jaunajā digitālajā laikmetā", "in the new digital era")}</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 leading-relaxed">
                {t("Neatpaliec no digitālajām pārmaiņām. Uzzini, kā šobrīd strādā tava uzņēmuma digitālā vide un kur slēpjas reālas izaugsmes iespējas.", "Don't fall behind on digital changes. Find out how your business's digital environment works now and where real growth opportunities lie.")}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                <motion.div whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className="inline-block">
                  <Button variant="hero" size="xl" className="shadow-xl hover:shadow-2xl transition-all duration-300">
                    {t("Pieteikties auditam", "Apply for audit")}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>;
}