import { motion } from "framer-motion";
import { Search, MapPin, ArrowRight, Shield, BarChart3, Users, Settings, FileText, Target, Layers, Bot, Compass, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/shared/SEOHead";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Link } from "react-router-dom";

export default function SeoGeoPakalpojumi() {
  const { t, getLocalizedPath } = useLanguage();

  const auditPoints = [
    t("nav iespējams noteikt prioritātes", "it's impossible to set priorities"),
    t("nav skaidrs, ko labot vispirms", "it's unclear what to fix first"),
    t("nav iespējams izmērīt progresu", "it's impossible to measure progress"),
  ];

  const sections = [
    {
      icon: BarChart3,
      title: t("Atslēgvārdu pozīciju un redzamības analīze", "Keyword Position & Visibility Analysis"),
      paragraphs: [
        t(
          "Redzamība meklētājos nav abstrakts jēdziens. Tā ir izmērāma. Šajā posmā tiek analizēts, uz kādiem atslēgvārdiem mājaslapa parādās, cik stabilas ir pozīcijas un vai tās atbilst reālajam biznesa mērķim.",
          "Visibility in search engines is not an abstract concept. It is measurable. At this stage, we analyze which keywords the website appears for, how stable the positions are, and whether they align with actual business goals."
        ),
        t(
          "Tas parāda, vai mājaslapa piesaista īstos meklējumus vai tikai klātbūtni bez atdeves. Šī analīze nosaka, kur ir jēga koncentrēties un kur tiek tērēta enerģija bez rezultāta.",
          "It reveals whether the website attracts the right searches or just presence without returns. This analysis determines where it makes sense to focus and where energy is being spent without results."
        ),
      ],
    },
    {
      icon: Users,
      title: t("Konkurentu analīze un salīdzinājums", "Competitor Analysis & Comparison"),
      paragraphs: [
        t(
          "SEO vienmēr notiek salīdzinājumā ar citiem. Šeit tiek analizēts, kāpēc konkurenti ieņem labākas pozīcijas un uz kā balstās viņu redzamība.",
          "SEO always happens in comparison with others. Here we analyze why competitors hold better positions and what their visibility is based on."
        ),
        t(
          "Tas ļauj saprast, vai priekšrocība ir saturā, struktūrā, tehniskajā izpildē vai autoritātē. Nevis minēt, bet redzēt. Šis posms palīdz izvairīties no kļūdainiem lēmumiem un koncentrēties uz to, kas patiešām dod rezultātu konkrētajā tirgū.",
          "It helps understand whether the advantage lies in content, structure, technical execution, or authority. Not guessing, but seeing. This step helps avoid wrong decisions and focus on what truly delivers results in the specific market."
        ),
      ],
    },
    {
      icon: Settings,
      title: t("Tehniskā SEO optimizācija", "Technical SEO Optimization"),
      paragraphs: [
        t(
          "Tehniskā optimizācija ir pamats, uz kura balstās viss pārējais. Ja mājaslapa ir lēna, nekorekti indeksēta vai strukturēta, pat labs saturs nestrādā pilnā apjomā.",
          "Technical optimization is the foundation on which everything else is built. If the website is slow, incorrectly indexed, or poorly structured, even great content doesn't perform at full capacity."
        ),
        t(
          "Šeit tiek sakārtoti tie elementi, kas meklētājprogrammām nosaka, cik viegli mājaslapa ir uztverama un novērtējama. Tehniskā SEO optimizācija parasti nedod tūlītēju \"wow\" efektu, bet tieši tā rada stabilu pamatu ilgtermiņa izaugsmei.",
          "Here we arrange the elements that determine how easily a website can be perceived and evaluated by search engines. Technical SEO optimization usually doesn't produce an immediate \"wow\" effect, but it creates a stable foundation for long-term growth."
        ),
      ],
    },
    {
      icon: FileText,
      title: t("On-page SEO optimizācija", "On-page SEO Optimization"),
      paragraphs: [
        t(
          "On-page optimizācija nodrošina, ka saturs ir ne tikai labs, bet arī saprotams meklētājiem un lietotājiem. Šeit tiek sakārtoti virsraksti, struktūra, teksti, iekšējās saites un semantiskā loģika.",
          "On-page optimization ensures that content is not only good but also understandable for search engines and users. Here we arrange headings, structure, texts, internal links, and semantic logic."
        ),
        t(
          "Bieži problēma nav informācijas trūkums, bet tas, ka tā nav izkārtota tā, lai palīdzētu lietotājam un meklētājam saprast lapas nozīmi. On-page SEO šo problēmu novērš un padara lapas mērķtiecīgas.",
          "Often the problem isn't a lack of information, but that it's not arranged to help users and search engines understand the page's purpose. On-page SEO eliminates this problem and makes pages purposeful."
        ),
      ],
    },
    {
      icon: Target,
      title: t("Atslēgvārdu saraksts un struktūra", "Keyword List & Structure"),
      paragraphs: [
        t(
          "Bez skaidras atslēgvārdu struktūras SEO kļūst haotisks. Šeit tiek izveidots mērķtiecīgs atslēgvārdu saraksts, kas balstīts uz reālu meklēšanas pieprasījumu un biznesa loģiku.",
          "Without a clear keyword structure, SEO becomes chaotic. Here we create a targeted keyword list based on real search demand and business logic."
        ),
        t(
          "Tas nodrošina, ka katrai lapai ir savs uzdevums, nav pārklāšanās un nav iekšējas konkurences. Atslēgvārdu struktūra palīdz veidot saturu ar mērķi, nevis \"rakstīt, lai būtu\".",
          "It ensures that each page has its own purpose, no overlap, and no internal competition. Keyword structure helps create content with purpose, not just \"writing for the sake of it\"."
        ),
      ],
    },
  ];

  const geoSections = [
    {
      icon: Bot,
      title: t("GEO mājaslapas audits", "GEO Website Audit"),
      paragraphs: [
        t(
          "Meklēšana arvien biežāk notiek caur AI balstītām sistēmām, kuras apkopo un interpretē informāciju, nevis vienkārši rāda saites. GEO audits novērtē, cik saprotama un izmantojama mājaslapa ir šādām sistēmām.",
          "Search increasingly happens through AI-based systems that aggregate and interpret information rather than simply showing links. GEO audit evaluates how understandable and usable the website is for such systems."
        ),
        t(
          "Tas parāda, vai saturs spēj kļūt par avotu, nevis tikai par vienu no daudziem rezultātiem. GEO audits papildina klasisko SEO skatījumu un sagatavo mājaslapu nākamajam meklēšanas posmam.",
          "It shows whether content can become a source, not just one of many results. GEO audit complements the classic SEO perspective and prepares the website for the next stage of search."
        ),
      ],
    },
    {
      icon: Compass,
      title: t("GEO stratēģija", "GEO Strategy"),
      paragraphs: [
        t(
          "GEO stratēģija nosaka, kā saturam jābūt veidotam, lai tas strādātu arī ārpus tradicionālajām meklētājprogrammām. Tā balstās uz struktūru, kontekstu un tematisko autoritāti.",
          "GEO strategy determines how content should be built to work beyond traditional search engines. It's based on structure, context, and topical authority."
        ),
        t(
          "Šī stratēģija nodrošina, ka uzņēmuma informācija tiek izmantota, interpretēta un parādīta arī AI ģenerētās atbildēs. Tas nav aizvietotājs SEO, bet tā loģisks turpinājums.",
          "This strategy ensures that business information is used, interpreted, and displayed in AI-generated answers as well. It's not a replacement for SEO, but its logical continuation."
        ),
      ],
    },
  ];

  return (
    <>
      <SEOHead
        titleLv="SEO un GEO pakalpojumi uzņēmumiem | NEOLab"
        titleEn="SEO & GEO Services for Businesses | NEOLab"
        descriptionLv="Pilns SEO un GEO pakalpojumu cikls uzņēmumiem – audits, tehniskā un on-page optimizācija, atslēgvārdi, GEO audits un stratēģija. Skaidra pieeja, kas strādā."
        descriptionEn="Full SEO & GEO service cycle for businesses – audits, technical and on-page optimization, keywords, GEO audits and strategy. A clear approach that works."
      />

      <div className="overflow-hidden">
        {/* ========== HERO ========== */}
        <section className="relative bg-gradient-hero bg-atmosphere overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center py-12 md:py-0">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `
                  radial-gradient(ellipse 80% 60% at 70% 40%, hsl(21 90% 48%) 0px, transparent 50%),
                  radial-gradient(ellipse 50% 40% at 20% 60%, hsl(32 90% 55%) 0px, transparent 50%)
                `,
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `
                  linear-gradient(hsl(21 90% 48%) 1px, transparent 1px),
                  linear-gradient(90deg, hsl(21 90% 48%) 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px",
              }}
            />
            <motion.div
              className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-amber-400/5 blur-3xl"
              animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 left-[10%] w-48 h-48 rounded-full bg-gradient-to-tl from-amber-400/10 to-primary/5 blur-3xl"
              animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="container-neo section-padding relative z-10">
            <div className="max-w-3xl">
              <ScrollReveal>
                <span className="chip mb-6 inline-block text-sm mt-[30px]">
                  <Search className="w-3.5 h-3.5 mr-1.5 inline" />
                  SEO & GEO
                  <MapPin className="w-3.5 h-3.5 ml-1.5 inline" />
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                  <span className="text-gradient-orange">{t("SEO un GEO", "SEO & GEO")}</span>{" "}
                  {t("pakalpojumi uzņēmumiem", "services for businesses")}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                  {t(
                    "Ja ar mājaslapu viss būtu kārtībā, šo lapu tu nelasītu. Parasti ir sajūta, ka potenciāls ir, bet rezultāts neatnāk. Redzamība stagnē, konkurenti ir priekšā, un nav līdz galam skaidrs, kur tieši ir problēma.",
                    "If everything were fine with your website, you wouldn't be reading this page. Usually there's a sense that potential exists, but results aren't coming. Visibility stagnates, competitors are ahead, and it's not entirely clear where exactly the problem is."
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                  {t(
                    "Tieši tāpēc SEO nevar sākt ar \"labojam šo\" vai \"pamēģinām to\". Visam pamatā ir skaidrība. Un skaidrība sākas ar SEO auditu.",
                    "That's why SEO can't start with \"let's fix this\" or \"let's try that.\" Everything is based on clarity. And clarity starts with an SEO audit."
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  <Button variant="hero" size="lg">
                    {t("Pieteikt konsultāciju", "Book a consultation")}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ========== SEO AUDITS ========== */}
        <section className="section-padding relative">
          <div className="container-neo relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-orange flex items-center justify-center shadow-orange">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-foreground">
                    {t("SEO audits – pamats visam, kas seko", "SEO audit – the foundation for everything that follows")}
                  </h2>
                </div>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl">
              <ScrollReveal delay={0.1}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {t(
                    "SEO audits ir vieta, kur beidzas minējumi. Bez tā nav iespējams saprast, kāpēc redzamība neaug, kāpēc konkurenti ir priekšā vai kāpēc ieguldījumi neatnes gaidīto rezultātu.",
                    "An SEO audit is where guessing ends. Without it, it's impossible to understand why visibility isn't growing, why competitors are ahead, or why investments aren't bringing expected results."
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {t(
                    "Audits dod skaidru atbildi uz vienu būtisku jautājumu:",
                    "The audit provides a clear answer to one essential question:"
                  )}
                </p>
                <p className="text-foreground text-lg font-semibold mb-8 pl-4 border-l-3 border-primary">
                  {t(
                    "kas šobrīd notiek ar jūsu mājaslapu un kāpēc.",
                    "what is currently happening with your website and why."
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {t(
                    "Tas ļauj redzēt reālo situāciju, nevis paļauties uz sajūtām vai fragmentāriem rīku datiem. Tieši šeit kļūst skaidrs, kur tiek zaudētas iespējas un kur ir potenciāls, ko iespējams izmantot.",
                    "It allows you to see the real situation instead of relying on feelings or fragmented tool data. This is where it becomes clear where opportunities are being lost and where there's potential that can be used."
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  {t("SEO audits ir obligāts solis, jo bez tā:", "An SEO audit is a mandatory step because without it:")}
                </p>
                <ul className="space-y-3 mb-8">
                  {auditPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-foreground text-lg font-medium">
                  {t("Viss pārējais balstās uz šo pamatu.", "Everything else is built on this foundation.")}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ========== SEO SECTIONS ========== */}
        {sections.map((section, index) => (
          <section
            key={index}
            className={`section-padding-sm relative ${index % 2 === 0 ? "section-warm" : ""}`}
          >
            <div className="container-neo relative z-10">
              <div className="max-w-3xl">
                <ScrollReveal>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-foreground text-2xl md:text-3xl lg:text-4xl">{section.title}</h2>
                  </div>
                </ScrollReveal>
                {section.paragraphs.map((p, pi) => (
                  <ScrollReveal key={pi} delay={0.1 * (pi + 1)}>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">{p}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ========== GEO SECTIONS ========== */}
        <section className="relative py-4">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
          <div className="container-neo relative z-10">
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-2">
                <span className="chip text-sm">
                  <MapPin className="w-3.5 h-3.5 mr-1.5 inline" />
                  GEO
                </span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {geoSections.map((section, index) => (
          <section
            key={`geo-${index}`}
            className={`section-padding-sm relative ${index % 2 === 1 ? "section-warm" : ""}`}
          >
            <div className="container-neo relative z-10">
              <div className="max-w-3xl">
                <ScrollReveal>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <h2 className="text-foreground text-2xl md:text-3xl lg:text-4xl">{section.title}</h2>
                  </div>
                </ScrollReveal>
                {section.paragraphs.map((p, pi) => (
                  <ScrollReveal key={pi} delay={0.1 * (pi + 1)}>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">{p}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ========== HOW IT WORKS TOGETHER ========== */}
        <section className="section-padding relative bg-gradient-hero-strong">
          <div className="absolute inset-0 overflow-hidden">
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
          </div>

          <div className="container-neo relative z-10">
            <div className="max-w-3xl">
              <ScrollReveal>
                <h2 className="text-foreground mb-6">
                  {t("Kā tas viss strādā kopā", "How it all works together")}
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {t(
                    "Šie pakalpojumi nav domāti atsevišķi. Tie veido vienu sistēmu, kur audits nosaka virzienu, optimizācija sakārto pamatus, atslēgvārdi dod fokusu un GEO sagatavo nākotnei.",
                    "These services are not meant to be used separately. They form one system where the audit sets the direction, optimization arranges the foundations, keywords provide focus, and GEO prepares for the future."
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-foreground text-lg font-medium">
                  {t(
                    "Mēs nestrādājam ar minējumiem. Mēs strādājam ar skaidrību, secību un datiem. Tieši tāpēc rezultāti ir paredzami, nevis nejauši.",
                    "We don't work with guesses. We work with clarity, sequence, and data. That's exactly why results are predictable, not random."
                  )}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ========== FINAL CTA ========== */}
        <section className="section-padding relative">
          <div className="container-neo relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-foreground mb-4">
                  {t("Sāksim ar skaidrību", "Let's start with clarity")}
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                  {t(
                    "Ja vēlies saprast, kāpēc mājaslapa nestrādā tā, kā vajadzētu, pirmais solis nav optimizācija. Pirmais solis ir skaidrība.",
                    "If you want to understand why your website isn't performing as it should, the first step isn't optimization. The first step is clarity."
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                  <Button variant="hero" size="lg">
                    {t("Pieteikt konsultāciju", "Book a consultation")}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
