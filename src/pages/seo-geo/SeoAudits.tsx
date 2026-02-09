import { Search, FileSearch, BarChart3, Layers, Target } from "lucide-react";
import { motion } from "framer-motion";
import { ServiceSubpage } from "@/components/shared/ServiceSubpage";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SeoAudits() {
  const { language } = useLanguage();
  const lv = language === "lv";

  const customSection = (
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
