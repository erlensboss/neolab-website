import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SeoGeoOptimizacija() {
  const { t, getLocalizedPath } = useLanguage();

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-gradient-hero">
        <div className="container-neo section-padding relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <Link
                to={getLocalizedPath("/blog")}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 mt-[75px]"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("Atpakaļ uz blogu", "Back to blog")}
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="flex items-center gap-4 mb-6">
                <span className="chip">
                  <Tag className="w-3 h-3 mr-1" />
                  SEO
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {t("2024. gada 10. decembris", "December 10, 2024")}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {t("8 min", "8 min")}
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="mb-6">
                {t(
                  "SEO un GEO optimizācija: kāpēc redzamība mainās, bet SEO nepazūd",
                  "SEO and GEO Optimization: Why Visibility Is Changing, but SEO Isn't Disappearing"
                )}
              </h1>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-offwhite">
        <div className="container-neo section-padding">
          <article className="max-w-3xl prose prose-lg prose-neutral dark:prose-invert [&>h2]:my-[30px]">
            <p>
              {t(
                "Digitālās redzamības vide pēdējos gados piedzīvo būtiskas strukturālas pārmaiņas. Meklēšana vairs nenozīmē tikai atslēgvārdu ievadi Google meklētājā un saišu salīdzināšanu. Mākslīgā intelekta balstītas sistēmas arvien biežāk piedāvā tiešas, kontekstā balstītas atbildes, apkopojot informāciju no dažādiem avotiem. Šajā vidē līdzās tradicionālajai meklētājprogrammu optimizācijai nostiprinās arī GEO jeb ģeneratīvās meklēšanas optimizācija. Tomēr šo pārmaiņu kontekstā SEO nezaudē nozīmi, tā maina formu un funkciju.",
                "The digital visibility landscape has undergone significant structural changes in recent years. Search no longer means just entering keywords into Google and comparing links. AI-based systems increasingly offer direct, context-based answers by aggregating information from various sources. In this environment, alongside traditional search engine optimization, GEO or generative search optimization is also gaining ground. However, in the context of these changes, SEO does not lose its significance — it changes form and function."
              )}
            </p>

            <h2>
              {t(
                "Kā mainās meklēšanas uzvedība digitālajā vidē",
                "How Search Behavior Is Changing in the Digital Environment"
              )}
            </h2>
            <p>
              {t(
                "Lietotāju uzvedība arvien vairāk virzās uz ātru, tiešu atbilžu saņemšanu. AI balstīti asistenti un meklēšanas risinājumi samazina nepieciešamību pārlūkot vairākas lapas, piedāvājot apkopotu rezultātu. Tas nozīmē, ka redzamība vairs nav tikai pozīcija meklētājā, bet gan spēja kļūt par uzticamu informācijas avotu, uz kuru balstās ģenerētās atbildes. Meklēšana kļūst kontekstuāla, sarunveidīga un balstīta lietotāja nodomā, nevis tikai frāzēs.",
                "User behavior is increasingly moving toward receiving quick, direct answers. AI-based assistants and search solutions reduce the need to browse multiple pages by offering aggregated results. This means that visibility is no longer just a position in search engines, but the ability to become a trusted information source on which generated answers are based. Search becomes contextual, conversational, and based on user intent rather than just phrases."
              )}
            </p>

            <h2>
              {t(
                "Kas ir GEO un ar ko tā atšķiras no SEO",
                "What Is GEO and How Does It Differ from SEO"
              )}
            </h2>
            <p>
              {t(
                "GEO jeb ģeneratīvās meklēšanas optimizācija koncentrējas uz to, lai saturs būtu saprotams, strukturēts un izmantojams mākslīgā intelekta sistēmām, kas ģenerē atbildes lietotājiem. Atšķirībā no tradicionālā SEO, kura mērķis ir piesaistīt klikšķus, GEO mērķis ir kļūt par avotu. Tas prasa skaidru tematisko fokusu, semantisko konsekvenci un uzticamību, jo AI sistēmas izvērtē ne tikai atslēgvārdus, bet arī kontekstu, autoritāti un informācijas kvalitāti.",
                "GEO or generative search optimization focuses on making content understandable, structured, and usable by artificial intelligence systems that generate answers for users. Unlike traditional SEO, whose goal is to attract clicks, GEO's goal is to become a source. It requires a clear thematic focus, semantic consistency, and credibility, as AI systems evaluate not only keywords but also context, authority, and information quality."
              )}
            </p>

            <h2>
              {t(
                "Kāpēc SEO nezaudē nozīmi arī AI laikmetā",
                "Why SEO Doesn't Lose Its Significance Even in the AI Era"
              )}
            </h2>
            <p>
              {t(
                "Neraugoties uz ģeneratīvās meklēšanas attīstību, SEO joprojām ir pamats digitālajai redzamībai. AI sistēmas neeksistē informācijas vakuumā - tās mācās un ģenerē atbildes, balstoties uz esošu saturu. Kvalitatīvs SEO saturs nodrošina strukturētus, pārbaudāmus un tematiskus avotus, bez kuriem ģeneratīvā meklēšana nebūtu iespējama. SEO kļūst mazāk par tehnisku manipulāciju un vairāk par autoritātes un satura kvalitātes disciplīnu.",
                "Despite the development of generative search, SEO remains the foundation of digital visibility. AI systems do not exist in an information vacuum — they learn and generate answers based on existing content. Quality SEO content provides structured, verifiable, and thematic sources without which generative search would not be possible. SEO becomes less about technical manipulation and more about authority and content quality discipline."
              )}
            </p>

            <h2>
              {t(
                "SEO un GEO kā savstarpēji papildinošas pieejas",
                "SEO and GEO as Complementary Approaches"
              )}
            </h2>
            <p>
              {t(
                "Mūsdienu digitālajā vidē SEO un GEO nav pretstati, bet gan savstarpēji papildinoši procesi. SEO nodrošina redzamību, struktūru un uzticamību meklētājprogrammās, savukārt GEO palīdz saturam iekļūt AI ģenerētajās atbildēs. Uzņēmumiem tas nozīmē nepieciešamību veidot saturu, kas vienlaikus ir optimizēts meklētājiem un saprotams mākslīgajam intelektam.",
                "In today's digital environment, SEO and GEO are not opposites but complementary processes. SEO ensures visibility, structure, and credibility in search engines, while GEO helps content enter AI-generated answers. For businesses, this means the need to create content that is simultaneously optimized for search engines and understandable to artificial intelligence."
              )}
            </p>

            <h2>
              {t(
                "Nozīme uzņēmumiem un B2B vidē",
                "Significance for Businesses and B2B Environment"
              )}
            </h2>
            <p>
              {t(
                "B2B kontekstā redzamība arvien vairāk nozīmē klātbūtni pircēja izpētes procesā vēl pirms tiešas saziņas. SEO un GEO kombinācija ļauj uzņēmumiem būt daļai no šīs izpētes gan tradicionālajā meklēšanā, gan AI balstītās atbildēs. Ilgtspējīga pieeja balstās uz kvalitatīvu saturu, tematisku dziļumu un konsekventu digitālās autoritātes veidošanu.",
                "In the B2B context, visibility increasingly means presence in the buyer's research process even before direct communication. The combination of SEO and GEO allows businesses to be part of this research both in traditional search and in AI-based answers. A sustainable approach is based on quality content, thematic depth, and consistent digital authority building."
              )}
            </p>
          </article>

          {/* CTA */}
          <div className="max-w-3xl mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                to={getLocalizedPath("/blog")}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("Atpakaļ uz blogu", "Back to blog")}
              </Link>
              <Link to={getLocalizedPath("/bezmaksas-konsultacija")}>
                <Button variant="hero" size="lg">
                  {t("Rezervēt konsultāciju", "Book a consultation")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}