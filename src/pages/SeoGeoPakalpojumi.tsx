import { motion } from "framer-motion";
import { Search, MapPin, ArrowRight, Eye, BarChart3, Wrench, FileText, CheckCircle2, Target, Gauge, Code2, Link2, AlignLeft, KeyRound, Layers, Brain, Sparkles, Globe, BookOpen, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/shared/SEOHead";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
export default function SeoGeoPakalpojumi() {
  const {
    t,
    getLocalizedPath
  } = useLanguage();
  return <>
      <SEOHead titleLv="SEO un GEO pakalpojumi uzņēmumiem | NEOLab" titleEn="SEO & GEO Services for Businesses | NEOLab" descriptionLv="Pilns SEO un GEO pakalpojumu cikls uzņēmumiem – audits, tehniskā un on-page optimizācija, atslēgvārdi, GEO audits un stratēģija. Skaidra pieeja, kas strādā." descriptionEn="Full SEO & GEO service cycle for businesses – audits, technical and on-page optimization, keywords, GEO audits and strategy. A clear approach that works." />

      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Chip */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 my-0 mt-[80px]">
              <Search className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">SEO & GEO</span>
              <MapPin className="w-4 h-4 text-primary" />
            </motion.div>

            {/* Title */}
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">NEOLab</span>{" "}
              {t("SEO pakalpojumi", "SEO services")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              {t("Mājaslapas problēmas reti ir acīmredzamas. Rezultāta nav, bet nav arī skaidrs, kas tieši to kavē.", "The website's network problems are obvious. As a result, there is no, but there is also no winter that really hinders it.")}
            </motion.p>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.25
          }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              {t("Tāpēc SEO nevar sākt ar labojumiem. Vispirms ir jābūt skaidrai situācijas izpratnei. Un tā sākas ar SEO auditu.", "That's why SEO can't start with fixes. First, you need to have a clear understanding of the situation. And that starts with an SEO audit.")}
            </motion.p>

            {/* CTA */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  {t("Pieteikt konsultāciju", "Book a consultation")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: SEO Audits ========== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50/50" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
            linear-gradient(hsl(21 90% 48%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)
          `,
        backgroundSize: "60px 60px"
      }} />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 text-sm">
                <Search className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{t("Pamats", "Foundation")}</span>
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto">
                {t("SEO audits", "SEO audit")} –{" "}
                <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                  {t("pamats jebkurai optimizācijai", "the foundation of any optimization")}
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch">
            {/* Main Definition Card */}
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
                  {/* Header */}
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <motion.div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-r from-primary to-orange-400 flex items-center justify-center shadow-lg" whileHover={{
                    rotate: 5
                  }}>
                      <Search className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {t("Kas ir SEO audits?", "What is an SEO audit?")}
                      </h3>
                      <span className="text-xs md:text-sm text-primary font-medium">
                        {t("Sistemātiska izvērtēšana", "Systematic evaluation")}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                    {t("SEO audits ir sistemātiska mājaslapas izvērtēšana, kas parāda, kā tā šobrīd tiek uztverta meklētājos un kas tieši ierobežo tās redzamību. Tas ļauj saprast ne tikai to, kas nestrādā, bet arī kāpēc.", "An SEO audit is a systematic website evaluation that shows how it is currently perceived by search engines and what exactly limits its visibility. It helps understand not only what isn't working, but also why.")}
                  </p>

                  {/* Audit areas visual */}
                  <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                    <p className="text-sm font-medium text-foreground mb-3">
                      {t("Audits dod skaidru priekšstatu par:", "The audit provides a clear picture of:")}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {[{
                      icon: Eye,
                      label: t("Redzamību", "Visibility")
                    }, {
                      icon: BarChart3,
                      label: t("Konkurences situāciju", "Competitive landscape")
                    }, {
                      icon: Wrench,
                      label: t("Tehnisko stāvokli", "Technical health")
                    }, {
                      icon: FileText,
                      label: t("Satura kvalitāti", "Content quality")
                    }].map((item, i) => <motion.div key={i} initial={{
                      opacity: 0,
                      y: 10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      delay: 0.5 + i * 0.1
                    }} className="flex items-center gap-2 bg-primary/5 rounded-lg p-2.5 border border-primary/10">
                          <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground font-medium">{item.label}</span>
                        </motion.div>)}
                    </div>
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
                      <CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <p className="text-xs text-muted-foreground">
                        {t("Bez šīs informācijas optimizācija balstās uz pieņēmumiem un intuitīviem lēmumiem.", "Without this information, optimization is based on assumptions and intuitive decisions.")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Why it matters Card */}
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
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-amber-300/30 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <motion.div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg" whileHover={{
                    rotate: -5
                  }}>
                      <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {t("Kāpēc tas ir būtisks?", "Why does it matter?")}
                      </h3>
                      <span className="text-xs md:text-sm text-amber-600 font-medium">
                        {t("Skaidrība pirms darbības", "Clarity before action")}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                    {t("Tieši tāpēc SEO audits ir būtisks. Tas nosaka prioritātes, secību un virzienu, ļaujot koncentrēties uz darbiem, kas dod reālu efektu, nevis tērēt laiku un resursus bez skaidra pamata.", "That's exactly why an SEO audit is essential. It sets priorities, sequence, and direction, allowing you to focus on actions that deliver real impact rather than spending time and resources without a clear foundation.")}
                  </p>

                  {/* Visual: Priority flow */}
                  <div className="bg-amber-50/60 rounded-xl p-4 border border-amber-200/40 mb-6 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      {[{
                      icon: Search,
                      label: t("Audits", "Audit"),
                      step: "01"
                    }, {
                      icon: Target,
                      label: t("Prioritātes", "Priorities"),
                      step: "02"
                    }, {
                      icon: BarChart3,
                      label: t("Rezultāts", "Result"),
                      step: "03"
                    }].map((item, i) => <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
                          <motion.div initial={{
                        opacity: 0,
                        scale: 0.8
                      }} animate={{
                        opacity: 1,
                        scale: 1
                      }} transition={{
                        delay: 0.6 + i * 0.15
                      }} className="relative">
                            <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center border border-amber-200/50">
                              <item.icon className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
                            </div>
                            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                              {item.step}
                            </span>
                          </motion.div>
                          <span className="text-xs font-medium text-foreground">{item.label}</span>
                        </div>)}
                    </div>
                    <div className="flex items-center justify-center gap-0 mt-2 px-8">
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-amber-300/50 to-amber-400/70 rounded" />
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400 mx-1" />
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-amber-400/70 to-primary/60 rounded" />
                      <ArrowRight className="w-3.5 h-3.5 text-primary/60 mx-1" />
                    </div>
                  </div>

                  {/* Key insight box */}
                  <div className="bg-gradient-to-r from-primary/5 to-amber-50 rounded-xl p-4 border border-primary/10">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-sm md:text-base text-foreground leading-relaxed">
                        <span className="font-semibold">{t("Rezultāts:", "Result:")}</span>{" "}
                        {t("Skaidras prioritātes, secība un virziens, lai katrs solis ved uz reālu progresu.", "Clear priorities, sequence, and direction, so every step leads to real progress.")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: Papildus SEO pakalpojumi ========== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <div className="absolute inset-0 grid-overlay-subtle" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-6 md:mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 text-sm">
                <Layers className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{t("Pakalpojumi", "Services")}</span>
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl mx-auto mb-4">
                {t("Papildus SEO pakalpojumi", "Additional SEO services")},{" "}
                <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                  {t("kas balstās uz auditu", "based on audit findings")}
                </span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                {t("Pārējie pakalpojumi netiek veikti atrauti. Tie balstās uz audita secinājumiem un tiek pielāgoti konkrētajai situācijai. Tieši šī secība ļauj sasniegt stabilu rezultātu.", "Other services are not performed in isolation. They are based on audit findings and tailored to the specific situation. This sequence allows for stable results.")}
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8 md:space-y-10 max-w-5xl mx-auto">

            {/* ── Card 1: Tehniskā SEO optimizācija ── */}
            <ScrollReveal delay={0.1}>
              <motion.div whileHover={{
              y: -4
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
                <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />
                  
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                            <Wrench className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">{t("Tehniskā SEO optimizācija", "Technical SEO optimization")}</h3>
                            <span className="text-xs text-primary font-medium">{t("Stabils pamats", "Solid foundation")}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {t("Tehniskā SEO optimizācija novērš problēmas, kas fiziski neļauj mājaslapai augt. Ja tehniskā puse nav sakārtota, jebkura cita optimizācija strādā tikai daļēji. Šis pakalpojums nodrošina stabilu pamatu, uz kura var balstīt saturu un stratēģiju.", "Technical SEO optimization eliminates problems that physically prevent a website from growing. If the technical side isn't in order, any other optimization works only partially. This service provides a solid foundation for content and strategy.")}
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                          <span className="text-sm font-semibold text-foreground">{t("Cena: no 350€", "Price: from €350")}</span>
                          <Button size="default" asChild>
                            <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                              {t("Pieteikt tehnisko SEO optimizāciju", "Request technical SEO optimization")}
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div className="lg:w-64 flex-shrink-0">
                        <div className="bg-muted/50 rounded-xl p-4 border border-border/50 space-y-3">
                          {[{
                          icon: Gauge,
                          label: t("Lapas ātrums", "Page speed")
                        }, {
                          icon: Code2,
                          label: t("Indeksācija", "Indexation")
                        }, {
                          icon: Wrench,
                          label: t("Kļūdu labošana", "Error fixing")
                        }, {
                          icon: Layers,
                          label: t("Struktūra", "Structure")
                        }].map((item, i) => <motion.div key={i} initial={{
                          opacity: 0,
                          x: 20
                        }} whileInView={{
                          opacity: 1,
                          x: 0
                        }} viewport={{
                          once: true
                        }} transition={{
                          delay: 0.3 + i * 0.1
                        }} className="flex items-center gap-3 bg-card rounded-lg p-2.5 border border-border/40">
                              <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm font-medium text-foreground">{item.label}</span>
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary/40 ml-auto" />
                            </motion.div>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* ── Card 2: On-page SEO optimizācija ── */}
            <ScrollReveal delay={0.15}>
              <motion.div whileHover={{
              y: -4
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-l from-amber-400/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
                <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-primary/60" />
                  
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-10">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md">
                            <AlignLeft className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">{t("On-page SEO optimizācija", "On-page SEO optimization")}</h3>
                            <span className="text-xs text-amber-600 font-medium">{t("Satura precizitāte", "Content precision")}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {t("On-page SEO optimizācija sakārto to, kas notiek pašās lapās – virsrakstus, struktūru, tekstus, iekšējās saites un semantiku. Mērķis nav \"pārrakstīt visu\", bet panākt, lai katra lapa pilda savu uzdevumu. Šis posms novērš situācijas, kur saturs ir, bet tas netiek uztverts pareizi.", "On-page SEO optimization organizes what happens on the pages themselves – headings, structure, texts, internal links, and semantics. The goal isn't to \"rewrite everything\" but to make each page fulfill its purpose.")}
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                          <span className="text-sm font-semibold text-foreground">{t("Cena: no 300€", "Price: from €300")}</span>
                          <Button size="default" className="bg-amber-500 hover:bg-amber-600 text-primary-foreground" asChild>
                            <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                              {t("Pieteikt on-page SEO optimizāciju", "Request on-page SEO optimization")}
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div className="lg:w-56 flex-shrink-0">
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-200/40">
                          <div className="space-y-2.5">
                            {[{
                            label: "H1",
                            w: "w-full"
                          }, {
                            label: "H2",
                            w: "w-[85%]"
                          }, {
                            label: "H3",
                            w: "w-[70%]"
                          }, {
                            label: "P",
                            w: "w-[90%]"
                          }, {
                            label: "Link",
                            w: "w-[50%]"
                          }].map((item, i) => <motion.div key={i} initial={{
                            opacity: 0,
                            scaleX: 0
                          }} whileInView={{
                            opacity: 1,
                            scaleX: 1
                          }} viewport={{
                            once: true
                          }} transition={{
                            delay: 0.4 + i * 0.08,
                            duration: 0.4
                          }} className="origin-left">
                                <div className={`${item.w} h-6 rounded-md bg-gradient-to-r from-amber-200/80 to-amber-100/60 flex items-center px-2`}>
                                  <span className="text-[10px] font-mono font-bold text-amber-700/70">{item.label}</span>
                                </div>
                              </motion.div>)}
                          </div>
                          <p className="text-[10px] text-amber-600/60 mt-3 text-center font-medium">{t("Lapas struktūra", "Page structure")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* ── Card 3: Atslēgvārdu saraksts ── */}
            <ScrollReveal delay={0.2}>
              <motion.div whileHover={{
              y: -4
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
                <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500" />
                  
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-md">
                            <KeyRound className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">{t("Atslēgvārdu saraksta un struktūras izveide", "Keyword list & structure development")}</h3>
                            <span className="text-xs text-emerald-600 font-medium">{t("Ilgtermiņa pamats", "Long-term foundation")}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-3">
                          {t("Atslēgvārdu saraksts nav vienkārši vārdu kopa. Tā ir struktūra, kas nosaka, par ko katrai lapai ir jābūt un kā izvairīties no iekšējas konkurences.", "A keyword list isn't just a collection of words. It's a structure that determines what each page should be about and how to avoid internal competition.")}
                        </p>
                        <div className="space-y-2 mb-5">
                          {[t("Kuras tēmas ir prioritāras", "Which topics are priorities"), t("Kurām lapām jāstrādā uz konkrētiem meklējumiem", "Which pages should target specific searches"), t("Kā veidot saturu bez kanibalizācijas", "How to create content without cannibalization")].map((item, i) => <div key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                              <span className="text-sm text-foreground">{item}</span>
                            </div>)}
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                          <span className="text-sm font-semibold text-foreground">{t("Cena: 99€", "Price: €99")}</span>
                          <Button size="default" className="bg-emerald-500 hover:bg-emerald-600 text-primary-foreground" asChild>
                            <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                              {t("Saņemt atslēgvārdu struktūru", "Get keyword structure")}
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div className="lg:w-60 flex-shrink-0">
                        <div className="bg-emerald-50/60 rounded-xl p-5 border border-emerald-200/40">
                          <div className="flex flex-col items-center">
                            <div className="w-full bg-emerald-200/50 rounded-lg p-2.5 text-center mb-2">
                              <span className="text-xs font-bold text-emerald-700">{t("Galvenā tēma", "Main topic")}</span>
                            </div>
                            <div className="w-px h-4 bg-emerald-300" />
                            <div className="flex gap-3 w-full">
                              {[1, 2, 3].map((_, i) => <div key={i} className="flex-1 flex flex-col items-center">
                                  <div className="w-px h-3 bg-emerald-300" />
                                  <motion.div initial={{
                                opacity: 0,
                                scale: 0.8
                              }} whileInView={{
                                opacity: 1,
                                scale: 1
                              }} viewport={{
                                once: true
                              }} transition={{
                                delay: 0.5 + i * 0.1
                              }} className="w-full bg-emerald-100/80 rounded-md p-1.5 text-center border border-emerald-200/50">
                                    <span className="text-[9px] font-medium text-emerald-600">{t(`Tēma ${i + 1}`, `Topic ${i + 1}`)}</span>
                                  </motion.div>
                                  <div className="w-px h-2 bg-emerald-200" />
                                  <div className="w-full bg-emerald-50 rounded p-1 text-center">
                                    <span className="text-[8px] text-emerald-500">{t("Lapas", "Pages")}</span>
                                  </div>
                                </div>)}
                            </div>
                          </div>
                          <p className="text-[10px] text-emerald-600/60 mt-3 text-center font-medium">{t("Atslēgvārdu struktūra", "Keyword structure")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* ── Card 4: GEO mājaslapas audits ── */}
            <ScrollReveal delay={0.25}>
              <motion.div whileHover={{
              y: -4
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-l from-violet-400/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
                <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-violet-400 via-violet-500 to-purple-500" />
                  
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-10">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center shadow-md">
                            <Brain className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">{t("GEO mājaslapas audits", "GEO website audit")}</h3>
                            <span className="text-xs text-violet-600 font-medium">{t("AI meklēšanas gatavība", "AI search readiness")}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {t("GEO audits izvērtē, cik labi mājaslapa ir sagatavota AI balstītai meklēšanai. Tas parāda, vai saturs ir pietiekami skaidrs, strukturēts un uztverams, lai to izmantotu ģeneratīvās atbildēs. Šis audits ļauj saprast, vai mājaslapa spēj kļūt par avotu, nevis tikai par vienu no daudziem rezultātiem.", "A GEO audit evaluates how well a website is prepared for AI-based search. It shows whether content is clear, structured, and perceivable enough to be used in generative responses.")}
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                          <span className="text-sm font-semibold text-foreground">{t("Cena: 249€", "Price: €249")}</span>
                          <Button size="default" className="bg-violet-500 hover:bg-violet-600 text-primary-foreground" asChild>
                            <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                              {t("Pieteikt GEO auditu", "Request GEO audit")}
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div className="lg:w-56 flex-shrink-0">
                        <div className="bg-violet-50/60 rounded-xl p-5 border border-violet-200/40 flex flex-col items-center">
                          <div className="relative w-28 h-28">
                            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                              <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(263 60% 90%)" strokeWidth="8" />
                              <motion.circle cx="50" cy="50" r="40" fill="none" stroke="hsl(263 70% 60%)" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 40}`} initial={{
                              strokeDashoffset: 2 * Math.PI * 40
                            }} whileInView={{
                              strokeDashoffset: 2 * Math.PI * 40 * 0.35
                            }} viewport={{
                              once: true
                            }} transition={{
                              delay: 0.5,
                              duration: 1.2,
                              ease: "easeOut"
                            }} />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <Sparkles className="w-5 h-5 text-violet-500 mb-1" />
                              <span className="text-xs font-bold text-violet-700">GEO</span>
                            </div>
                          </div>
                          <p className="text-[10px] text-violet-600/60 mt-2 text-center font-medium">{t("AI gatavības līmenis", "AI readiness level")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* ── Card 5: GEO stratēģija ── */}
            <ScrollReveal delay={0.3}>
              <motion.div whileHover={{
              y: -4
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
                <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500" />
                  
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-md">
                            <Globe className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">{t("GEO stratēģija", "GEO strategy")}</h3>
                            <span className="text-xs text-sky-600 font-medium">{t("Ilgtermiņa redzējums", "Long-term vision")}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {t("GEO stratēģija nosaka, kā saturam un struktūrai jāattīstās tālāk, lai uzņēmuma informācija būtu konkurētspējīga arī AI meklēšanas vidē. Tā balstās uz skaidru tematisko fokusu, kontekstu un autoritātes veidošanu. Šis pakalpojums ir paredzēts uzņēmumiem, kuri skatās uz priekšu un plāno ilgtermiņā.", "GEO strategy determines how content and structure should evolve so that company information remains competitive in the AI search environment. It is based on clear topical focus, context, and authority building.")}
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                          <span className="text-sm font-semibold text-foreground">{t("Cena: no 350€", "Price: from €350")}</span>
                          <Button size="default" className="bg-sky-500 hover:bg-sky-600 text-primary-foreground" asChild>
                            <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                              {t("Izstrādāt GEO stratēģiju", "Develop GEO strategy")}
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div className="lg:w-60 flex-shrink-0">
                        <div className="bg-sky-50/60 rounded-xl p-5 border border-sky-200/40 pt-[30px]">
                          <div className="flex items-end justify-center gap-3 h-28">
                            {[{
                            label: t("Fokuss", "Focus"),
                            h: "h-14",
                            icon: Target
                          }, {
                            label: t("Konteksts", "Context"),
                            h: "h-20",
                            icon: BookOpen
                          }, {
                            label: t("Autoritāte", "Authority"),
                            h: "h-24",
                            icon: Shield
                          }].map((item, i) => <motion.div key={i} initial={{
                            opacity: 0,
                            scaleY: 0
                          }} whileInView={{
                            opacity: 1,
                            scaleY: 1
                          }} viewport={{
                            once: true
                          }} transition={{
                            delay: 0.5 + i * 0.15,
                            duration: 0.5
                          }} className="flex flex-col items-center gap-1.5 origin-bottom flex-1">
                                <item.icon className="w-3.5 h-3.5 text-sky-500" />
                                <div className={`${item.h} w-full rounded-t-lg bg-gradient-to-t from-sky-300/80 to-sky-200/50 border border-sky-200/50`} />
                                <span className="text-[9px] font-medium text-sky-600">{item.label}</span>
                              </motion.div>)}
                          </div>
                          <div className="h-px bg-sky-200/60 mt-1" />
                          <p className="text-[10px] text-sky-600/60 mt-2 text-center font-medium">{t("Stratēģijas pīlāri", "Strategy pillars")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>;
}