import { motion } from "framer-motion";
import { Search, MapPin, ArrowRight, Eye, BarChart3, Wrench, FileText, CheckCircle2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/shared/SEOHead";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
export default function SeoGeoPakalpojumi() {
  const { t, getLocalizedPath } = useLanguage();
  return (
    <>
      <SEOHead
        titleLv="SEO un GEO pakalpojumi uzņēmumiem | NEOLab"
        titleEn="SEO & GEO Services for Businesses | NEOLab"
        descriptionLv="Pilns SEO un GEO pakalpojumu cikls uzņēmumiem – audits, tehniskā un on-page optimizācija, atslēgvārdi, GEO audits un stratēģija. Skaidra pieeja, kas strādā."
        descriptionEn="Full SEO & GEO service cycle for businesses – audits, technical and on-page optimization, keywords, GEO audits and strategy. A clear approach that works."
      />

      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Chip */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 my-0 mt-[80px]"
            >
              <Search className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">SEO & GEO</span>
              <MapPin className="w-4 h-4 text-primary" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">SEO</span>{" "}
              {t("un", "&")}{" "}
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">GEO</span>{" "}
              {t("pakalpojumi uzņēmumiem", "Services for Businesses")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6"
            >
              {t(
                "Mājaslapas problēmas reti ir acīmredzamas. Rezultāta nav, bet nav arī skaidrs, kas tieši to kavē.",
                "The website's network problems are obvious. As a result, there is no, but there is also no winter that really hinders it.",
              )}
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              {t(
                "Tāpēc SEO nevar sākt ar labojumiem. Vispirms ir jābūt skaidrai situācijas izpratnei. Un tā sākas ar SEO auditu.",
                "That's why SEO can't start with fixes. First, you need to have a clear understanding of the situation. And that starts with an SEO audit.",
              )}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
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
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
            linear-gradient(hsl(21 90% 48%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />

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
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <motion.div
                      className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-r from-primary to-orange-400 flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 5 }}
                    >
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
                    {t(
                      "SEO audits ir sistemātiska mājaslapas izvērtēšana, kas parāda, kā tā šobrīd tiek uztverta meklētājos un kas tieši ierobežo tās redzamību. Tas ļauj saprast ne tikai to, kas nestrādā, bet arī kāpēc.",
                      "An SEO audit is a systematic website evaluation that shows how it is currently perceived by search engines and what exactly limits its visibility. It helps understand not only what isn't working, but also why.",
                    )}
                  </p>

                  {/* Audit areas visual */}
                  <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                    <p className="text-sm font-medium text-foreground mb-3">
                      {t("Audits dod skaidru priekšstatu par:", "The audit provides a clear picture of:")}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { icon: Eye, label: t("Redzamību", "Visibility") },
                        { icon: BarChart3, label: t("Konkurences situāciju", "Competitive landscape") },
                        { icon: Wrench, label: t("Tehnisko stāvokli", "Technical health") },
                        { icon: FileText, label: t("Satura kvalitāti", "Content quality") },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex items-center gap-2 bg-primary/5 rounded-lg p-2.5 border border-primary/10"
                        >
                          <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground font-medium">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
                      <CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <p className="text-xs text-muted-foreground">
                        {t(
                          "Bez šīs informācijas optimizācija balstās uz pieņēmumiem un intuitīviem lēmumiem.",
                          "Without this information, optimization is based on assumptions and intuitive decisions.",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Why it matters Card */}
            <ScrollReveal delay={0.2}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-amber-300/30 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <motion.div
                      className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: -5 }}
                    >
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
                    {t(
                      "Tieši tāpēc SEO audits ir būtisks. Tas nosaka prioritātes, secību un virzienu, ļaujot koncentrēties uz darbiem, kas dod reālu efektu, nevis tērēt laiku un resursus bez skaidra pamata.",
                      "That's exactly why an SEO audit is essential. It sets priorities, sequence, and direction, allowing you to focus on actions that deliver real impact rather than spending time and resources without a clear foundation.",
                    )}
                  </p>

                  {/* Visual: Priority flow */}
                  <div className="bg-amber-50/60 rounded-xl p-4 border border-amber-200/40 mb-6 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      {[
                        { icon: Search, label: t("Audits", "Audit"), step: "01" },
                        { icon: Target, label: t("Prioritātes", "Priorities"), step: "02" },
                        { icon: BarChart3, label: t("Rezultāts", "Result"), step: "03" },
                      ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.15 }}
                            className="relative"
                          >
                            <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center border border-amber-200/50">
                              <item.icon className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
                            </div>
                            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                              {item.step}
                            </span>
                          </motion.div>
                          <span className="text-xs font-medium text-foreground">{item.label}</span>
                        </div>
                      ))}
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
                        {t(
                          "Skaidras prioritātes, secība un virziens, lai katrs solis ved uz reālu progresu.",
                          "Clear priorities, sequence, and direction, so every step leads to real progress.",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
