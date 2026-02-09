import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PreskriptivaAnalitika() {
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
                  AI
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {t("2024. gada 28. decembris", "December 28, 2024")}
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
                  "Preskriptīvā analītika un mākslīgais intelekts: kā AI sāk ietekmēt patērētāju lēmumus",
                  "Prescriptive Analytics and Artificial Intelligence: How AI Is Beginning to Influence Consumer Decisions"
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
                "Mākslīgā intelekta attīstība patērētāju uzvedības analīzē ir iezīmējusi būtisku paradigmas maiņu — no datu interpretācijas uz aktīvu lēmumu ietekmēšanu. Ja prognozējošā analītika koncentrējas uz iespējamo nākotnes scenāriju paredzēšanu, tad preskriptīvā analītika iet soli tālāk, piedāvājot konkrētas rekomendācijas un rīcības virzienus. Šī pieeja maina ne tikai tehnoloģisko vidi, bet arī to, kā patērētāji pieņem lēmumus un kā uzņēmumi veido attiecības ar saviem klientiem.",
                "The development of artificial intelligence in consumer behavior analysis has marked a significant paradigm shift — from data interpretation to actively influencing decisions. While predictive analytics focuses on forecasting possible future scenarios, prescriptive analytics goes a step further, offering specific recommendations and courses of action. This approach changes not only the technological environment but also how consumers make decisions and how businesses build relationships with their customers."
              )}
            </p>
            <p>
              {t(
                "Zinātniskajā pētījumā uzsvērts, ka preskriptīvā analītika balstās uz sarežģītu datu, algoritmu un konteksta integrāciju, kas ļauj sistēmām ne tikai analizēt uzvedību, bet arī aktīvi to virzīt. Tas rada jaunas iespējas, bet vienlaikus arī jaunus izaicinājumus uzņēmumiem.",
                "Scientific research emphasizes that prescriptive analytics is based on the integration of complex data, algorithms, and context, which allows systems not only to analyze behavior but also to actively direct it. This creates new opportunities, but at the same time also new challenges for businesses."
              )}
            </p>

            <h2>
              {t(
                "Prognozējošās un preskriptīvās analītikas atšķirības",
                "Differences Between Predictive and Prescriptive Analytics"
              )}
            </h2>
            <p>
              {t(
                "Prognozējošā analītika tradicionāli tiek izmantota, lai noteiktu varbūtības un tendences, balstoties uz vēsturiskajiem datiem. Tā palīdz saprast, kas varētu notikt noteiktos apstākļos, taču neatbild uz jautājumu, kā rīkoties konkrētajā situācijā. Preskriptīvā analītika šo plaisu aizpilda, piedāvājot konkrētus ieteikumus, kas balstīti uz datu modeļiem un optimizācijas principiem.",
                "Predictive analytics has traditionally been used to determine probabilities and trends based on historical data. It helps understand what could happen under certain conditions but does not answer the question of how to act in a specific situation. Prescriptive analytics fills this gap by offering specific recommendations based on data models and optimization principles."
              )}
            </p>
            <p>
              {t(
                "Pētījumā norādīts, ka šī pāreja būtiski maina patērētāja lomu. Patērētājs arvien biežāk saskaras ar sistēmām, kas ne tikai informē, bet arī strukturē izvēles, samazinot lēmumu pieņemšanas kognitīvo slodzi.",
                "The research indicates that this transition fundamentally changes the consumer's role. Consumers increasingly encounter systems that not only inform but also structure choices, reducing the cognitive load of decision-making."
              )}
            </p>

            <h2>
              {t(
                "AI kā aktīvs dalībnieks patērētāju lēmumu procesos",
                "AI as an Active Participant in Consumer Decision Processes"
              )}
            </h2>
            <p>
              {t(
                "Preskriptīvā analītika padara mākslīgo intelektu par aktīvu lēmumu procesa dalībnieku. Algoritmi analizē patērētāja uzvedību, kontekstu un mērķus, lai piedāvātu personalizētus ieteikumus, kas tiek uztverti kā racionāli un datu balstīti. Pētījumā uzsvērts, ka šāda pieeja var palielināt efektivitāti un apmierinātību, ja patērētājs uzticas sistēmai.",
                "Prescriptive analytics makes artificial intelligence an active participant in the decision process. Algorithms analyze consumer behavior, context, and goals to offer personalized recommendations that are perceived as rational and data-driven. The research emphasizes that such an approach can increase efficiency and satisfaction if the consumer trusts the system."
              )}
            </p>
            <p>
              {t(
                "Vienlaikus šī ietekme rada jautājumus par to, cik lielā mērā patērētājs saglabā kontroli pār saviem lēmumiem. Jo vairāk sistēma iesaistās rekomendāciju sniegšanā, jo svarīgāka kļūst uzticība un caurskatāmība.",
                "At the same time, this influence raises questions about the extent to which the consumer retains control over their decisions. The more the system is involved in providing recommendations, the more important trust and transparency become."
              )}
            </p>

            <h2>
              {t(
                "Uzticības un caurskatāmības nozīme AI balstītās rekomendācijās",
                "The Importance of Trust and Transparency in AI-Based Recommendations"
              )}
            </h2>
            <p>
              {t(
                "Pētījumā uzsvērts, ka patērētāju attieksme pret preskriptīvajām sistēmām ir cieši saistīta ar to uztverto caurskatāmību. Ja algoritmu darbība ir neskaidra, patērētāji var būt skeptiski pret ieteikumiem, pat ja tie ir objektīvi pamatoti. Tas īpaši attiecas uz sarežģītiem lēmumiem, kuros iesaistīti finanšu vai stratēģiski apsvērumi.",
                "The research emphasizes that consumer attitudes toward prescriptive systems are closely related to their perceived transparency. If the algorithm's operation is unclear, consumers may be skeptical of recommendations, even if they are objectively justified. This especially applies to complex decisions involving financial or strategic considerations."
              )}
            </p>
            <p>
              {t(
                "Tāpēc AI sistēmām ir jāspēj ne tikai sniegt ieteikumus, bet arī nodrošināt saprotamu pamatojumu, kas palīdz patērētājam izprast piedāvātā risinājuma loģiku.",
                "Therefore, AI systems must be able not only to provide recommendations but also to ensure an understandable rationale that helps the consumer understand the logic of the proposed solution."
              )}
            </p>

            <h2>
              {t(
                "Preskriptīvās analītikas riski un ierobežojumi",
                "Risks and Limitations of Prescriptive Analytics"
              )}
            </h2>
            <p>
              {t(
                "Neraugoties uz tās potenciālu, preskriptīvā analītika nav brīva no riskiem. Pētījumā norādīts, ka algoritmi var pastiprināt esošās aizspriedumu struktūras vai balstīties uz nepilnīgiem datiem, kas noved pie suboptimāliem ieteikumiem. Šādos gadījumos pastāv risks, ka patērētāji pārlieku paļaujas uz sistēmām, neapzinoties to ierobežojumus.",
                "Despite its potential, prescriptive analytics is not free from risks. The research indicates that algorithms can reinforce existing bias structures or rely on incomplete data, leading to suboptimal recommendations. In such cases, there is a risk that consumers over-rely on systems without recognizing their limitations."
              )}
            </p>
            <p>
              {t(
                "Tas uzsver nepieciešamību pēc līdzsvarotas pieejas, kur AI kalpo kā atbalsta instruments, nevis absolūts autoritātes avots lēmumu pieņemšanā.",
                "This emphasizes the need for a balanced approach, where AI serves as a support tool rather than an absolute source of authority in decision-making."
              )}
            </p>

            <h2>
              {t(
                "Nozīme B2B uzņēmumiem un vadītājiem",
                "Significance for B2B Companies and Leaders"
              )}
            </h2>
            <p>
              {t(
                "B2B vidē preskriptīvā analītika kļūst par nozīmīgu konkurences priekšrocību, jo tā palīdz strukturēt sarežģītus lēmumu pieņemšanas procesus. AI var piedāvāt scenārijus, optimizēt resursu sadali un atbalstīt stratēģiskus lēmumus, balstoties uz datiem. Tomēr pētījums uzsver, ka galīgā atbildība par lēmumiem joprojām paliek cilvēku ziņā.",
                "In the B2B environment, prescriptive analytics becomes a significant competitive advantage, as it helps structure complex decision-making processes. AI can offer scenarios, optimize resource allocation, and support strategic decisions based on data. However, the research emphasizes that the ultimate responsibility for decisions still remains with humans."
              )}
            </p>
            <p>
              {t(
                "Uzņēmumu vadītājiem tas nozīmē nepieciešamību izprast preskriptīvās analītikas ietekmi ne tikai tehniskā, bet arī uzvedības līmenī. Ilgtspējīga ieviešana prasa caurskatāmību, ētisku pieeju un skaidru izpratni par to, kā AI ietekmē patērētāju un organizācijas lēmumus.",
                "For business leaders, this means the need to understand the impact of prescriptive analytics not only at the technical level but also at the behavioral level. Sustainable implementation requires transparency, an ethical approach, and a clear understanding of how AI influences consumer and organizational decisions."
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