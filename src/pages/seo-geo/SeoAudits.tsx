import { Search, FileSearch, BarChart3, Layers, Target, AlertTriangle, FileText, Key, Users } from "lucide-react";
import { motion } from "framer-motion";
import { ServiceSubpage } from "@/components/shared/ServiceSubpage";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SeoAudits() {
  const { language } = useLanguage();
  const lv = language === "lv";

  const problemCards = [
    {
      icon: AlertTriangle,
      title: lv ? "Tehniska problēma" : "Technical issue",
      description: lv ? "Mājaslapa neindeksējas pareizi, ātrums ir zems vai struktūra ir salauzta" : "Website isn't indexing properly, speed is low, or structure is broken",
    },
    {
      icon: FileText,
      title: lv ? "Saturs nestrādā" : "Content doesn't work",
      description: lv ? "Lapas neatbild uz lietotāju jautājumiem un nesasniedz mērķauditoriju" : "Pages don't answer user questions and don't reach the target audience",
    },
    {
      icon: Key,
      title: lv ? "Nepareizi atslēgvārdi" : "Wrong keywords",
      description: lv ? "Optimizācija notiek uz vārdiem, kurus neviens nemeklē vai kur konkurence ir pārāk liela" : "Optimization targets words nobody searches for or where competition is too high",
    },
    {
      icon: Users,
      title: lv ? "Konkurenti dara labāk" : "Competitors do it better",
      description: lv ? "Konkurentu saturs, struktūra un autoritāte vienkārši ir spēcīgāka" : "Competitor content, structure, and authority are simply stronger",
    },
  ];

  const customSection = (
    <>
      <section className="section-padding">
        <div className="container-neo">
          <div className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/[0.04] to-transparent overflow-hidden">
            {/* Subtle accent glow */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/[0.06] to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <ScrollReveal>
                <span className="chip mb-6 inline-block text-xs">
                  {lv ? "Kāpēc audits?" : "Why an audit?"}
                </span>
              </ScrollReveal>

              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                <ScrollReveal delay={0.05}>
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                      SEO audits{" "}
                      <span className="text-gradient-orange">
                        {lv ? "uzņēmumiem" : "for businesses"}
                      </span>
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                      {lv
                        ? "SEO audits ir pirmais solis, ar kuru sāk jebkuru nopietnu darbu pie mājaslapas redzamības. Ne tāpēc, ka tā ir pieņemts darīt, bet tāpēc, ka bez audita nav iespējams saprast, kas īsti šobrīd notiek ar mājaslapu un kur pazūd potenciālie klienti."
                        : "An SEO audit is the first step in any serious work on website visibility. Not because it's the standard practice, but because without an audit, it's impossible to understand what's actually happening with the website and where potential clients are being lost."}
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="absolute -left-4 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-primary via-primary/60 to-primary/10" />
                      <div className="pl-6 md:pl-8">
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                          {lv
                            ? "Ja nav skaidras bildes, jebkura SEO optimizācija ir minēšana. Reizēm trāpa, biežāk nē. SEO audits šo minēšanu izslēdz."
                            : "Without a clear picture, any SEO optimization is guesswork. Sometimes it hits, more often it doesn't. An SEO audit eliminates the guessing."}
                        </p>
                      </div>
                    </motion.div>

                    {/* Visual stats grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: FileSearch, label: lv ? "Tehniskā analīze" : "Technical Analysis" },
                        { icon: Layers, label: lv ? "Satura inventārs" : "Content Inventory" },
                        { icon: Target, label: lv ? "Konkurentu izpēte" : "Competitor Research" },
                        { icon: BarChart3, label: lv ? "Ranku analīze" : "Ranking Analysis" },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + i * 0.07 }}
                          className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm p-3"
                        >
                          <div className="w-8 h-8 rounded-lg bg-gradient-orange flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-foreground text-sm font-medium">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SEO audit is needed — horizontal cards */}
      <section className="section-padding">
        <div className="container-neo">
          <ScrollReveal>
            <div className="max-w-2xl mb-10">
              <span className="chip mb-4 inline-block text-xs">
                {lv ? "Ko audits atklāj" : "What an audit reveals"}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                {lv ? "Kāpēc SEO audits ir" : "Why an SEO audit is"}{" "}
                <span className="text-gradient-orange">{lv ? "nepieciešams" : "necessary"}</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {lv
                  ? "Lielākā daļa uzņēmumu redz tikai gala rezultātu — apmeklējums neaug, pieprasījumu ir maz, konkurenti ir priekšā. Bet pats iemesls parasti nav viens. Tas gandrīz vienmēr ir vairāku faktoru kopums."
                  : "Most businesses only see the end result — traffic isn't growing, inquiries are few, competitors are ahead. But the cause is usually not just one thing. It's almost always a combination of factors."}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="text-foreground font-semibold text-base md:text-lg mb-6">
              {lv ? "SEO audits ļauj saprast:" : "An SEO audit helps you understand:"}
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {problemCards.map((card, i) => (
              <ScrollReveal key={i} delay={0.08 + i * 0.06}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 h-full overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/[0.06] to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    <motion.div
                      className="w-11 h-11 rounded-xl bg-gradient-orange flex items-center justify-center mb-4 shadow-md"
                      whileHover={{ rotate: 6 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <card.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="text-foreground font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-8 rounded-xl border border-primary/15 bg-primary/[0.03] p-5 md:p-6">
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {lv
                  ? "Bez šīs sapratnes nav iespējams noteikt, ko labot vispirms un kam vispār ir jēga tērēt resursus."
                  : "Without this understanding, it's impossible to determine what to fix first and where it even makes sense to invest resources."}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );

  return (
    <ServiceSubpage
      seo={{
        titleLv: "SEO Audits un Situācijas Izvērtējums | NEOLab",
        titleEn: "SEO Audit & Analysis | NEOLab",
        descriptionLv: "Profesionāls SEO audits ar pilnu tehnisko, satura un konkurentu analīzi. Uzziniet savas mājaslapas izaugsmes iespējas.",
        descriptionEn: "Professional SEO audit with full technical, content and competitor analysis. Discover your website's growth opportunities.",
      }}
      chip={lv ? "Galvenais pakalpojums" : "Core Service"}
      titleMain="SEO audits un"
      titleGradient="situācijas izvērtējums"
      description={lv
        ? "Sadarbība vienmēr sākas ar auditu. Tiek analizēta mājaslapas tehniskā puse, saturs, struktūra, konkurenti un esošā redzamība, lai saprastu, kur tieši slēpjas galvenās izaugsmes iespējas."
        : "Collaboration always starts with an audit. We analyze your website's technical side, content, structure, competitors and existing visibility to understand where the main growth opportunities lie."
      }
      price="249 EUR"
      ctaText={lv ? "Pieteikties auditam" : "Request Audit"}
      customSection={customSection}
      benefits={[
        lv ? "Saprotat reālo situāciju pirms investīcijām" : "Understand the real situation before investing",
        lv ? "Identificējat prioritātes ar lielāko ROI" : "Identify priorities with the highest ROI",
        lv ? "Izvairāties no nevajadzīgiem darbiem" : "Avoid unnecessary work",
        lv ? "Saņemat skaidru rīcības plānu" : "Receive a clear action plan",
        lv ? "Saprastat konkurentu stiprās un vājās puses" : "Understand competitor strengths and weaknesses",
      ]}
      benefitsTitle={lv ? "Kāpēc sākt ar" : "Why Start With"}
      benefitsTitleGradient={lv ? "auditu?" : "an audit?"}
      ctaIcon={Search}
      ctaTitle={lv ? "Bezmaksas sākotnējā konsultācija" : "Free Initial Consultation"}
      ctaDescription={lv
        ? "Pirms audita piedāvājam bezmaksas 30 minūšu konsultāciju, lai saprastu jūsu mērķus un pielāgotu pieeju."
        : "Before the audit, we offer a free 30-minute consultation to understand your goals and tailor our approach."
      }
      ctaButtonText={lv ? "Pieteikties konsultācijai" : "Book Consultation"}
    />
  );
}
