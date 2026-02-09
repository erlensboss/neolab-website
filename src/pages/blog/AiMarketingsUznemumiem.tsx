import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AiMarketingsUznemumiem() {
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
                  {t("Pārdošana", "Sales")}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {t("2024. gada 20. decembris", "December 20, 2024")}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {t("10 min", "10 min")}
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="mb-6">
                {t(
                  "Kā mākslīgais intelekts veicina mārketinga attīstību uzņēmumos",
                  "How Artificial Intelligence Drives Marketing Development in Businesses"
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
                "Mākslīgais intelekts pēdējos gados ir kļuvis par nozīmīgu faktoru mārketinga transformācijā, mainot gan stratēģisko plānošanu, gan ikdienas izpildes procesus. Zinātniskajā pētījumā uzsvērts, ka AI ieviešana mārketingā nav tikai tehnoloģisks uzlabojums, bet strukturāla pārmaiņa, kas ietekmē datu analīzi, klientu izpratni un lēmumu pieņemšanu. Uzņēmumi arvien biežāk izmanto AI, lai apstrādātu lielus datu apjomus un pārvērstu tos rīcībā izmantojamā ieskatā.",
                "Artificial intelligence in recent years has become a significant factor in marketing transformation, changing both strategic planning and day-to-day execution processes. Scientific research emphasizes that AI implementation in marketing is not just a technological improvement but a structural change that affects data analysis, customer understanding, and decision-making. Companies are increasingly using AI to process large volumes of data and turn them into actionable insights."
              )}
            </p>
            <p>
              {t(
                "Šī attīstība ir īpaši nozīmīga B2B vidē, kur mārketinga lēmumi balstās uz sarežģītiem pircēju ceļiem, vairākiem iesaistītajiem lēmumu pieņēmējiem un ilgtermiņa attiecībām. AI palīdz strukturēt šo sarežģītību un uzlabot mārketinga darbību efektivitāti.",
                "This development is particularly significant in the B2B environment, where marketing decisions are based on complex buyer journeys, multiple involved decision-makers, and long-term relationships. AI helps structure this complexity and improve the efficiency of marketing operations."
              )}
            </p>

            <h2>
              {t(
                "AI loma mārketinga datu analīzē",
                "AI's Role in Marketing Data Analysis"
              )}
            </h2>
            <p>
              {t(
                "Tradicionālais mārketings lielā mērā balstījās uz manuālu datu interpretāciju un ierobežotiem analītikas rīkiem. Pētījumā norādīts, ka mākslīgais intelekts būtiski paplašina datu analīzes iespējas, ļaujot apstrādāt strukturētus un nestrukturētus datus no dažādiem avotiem. AI sistēmas spēj identificēt modeļus, korelācijas un tendences, kas cilvēkam būtu grūti pamanāmas.",
                "Traditional marketing was largely based on manual data interpretation and limited analytics tools. The research indicates that artificial intelligence significantly expands data analysis capabilities, allowing the processing of structured and unstructured data from various sources. AI systems can identify patterns, correlations, and trends that would be difficult for humans to notice."
              )}
            </p>
            <p>
              {t(
                "Šāda pieeja ļauj mārketinga komandām pieņemt precīzākus lēmumus un ātrāk reaģēt uz tirgus izmaiņām, balstoties uz aktuāliem un dinamiskā veidā atjaunotiem datiem.",
                "This approach allows marketing teams to make more precise decisions and respond faster to market changes, based on current and dynamically updated data."
              )}
            </p>

            <h2>
              {t(
                "Personalizācija kā centrālais AI mārketinga ieguvums",
                "Personalization as the Central Benefit of AI Marketing"
              )}
            </h2>
            <p>
              {t(
                "Pētījumā uzsvērts, ka viena no nozīmīgākajām AI priekšrocībām mārketingā ir personalizācijas iespējas. Mākslīgais intelekts ļauj analizēt klientu uzvedību, preferences un iepriekšējo mijiedarbību, lai piedāvātu pielāgotu saturu un piedāvājumus. Tas palielina komunikācijas atbilstību un uzlabo klientu pieredzi.",
                "The research emphasizes that one of the most significant advantages of AI in marketing is personalization capabilities. Artificial intelligence allows analyzing customer behavior, preferences, and previous interactions to offer tailored content and offers. This increases communication relevance and improves customer experience."
              )}
            </p>
            <p>
              {t(
                "B2B kontekstā personalizācija iegūst īpašu nozīmi, jo lēmumu pieņemšana bieži ir kolektīva un balstīta uz specifiskām biznesa vajadzībām. AI palīdz segmentēt auditorijas precīzāk un pielāgot ziņojumus dažādiem lēmumu pieņēmējiem vienas organizācijas ietvaros.",
                "In the B2B context, personalization gains special significance, as decision-making is often collective and based on specific business needs. AI helps segment audiences more precisely and tailor messages to different decision-makers within a single organization."
              )}
            </p>

            <h2>
              {t(
                "AI ietekme uz mārketinga stratēģisko plānošanu",
                "AI's Impact on Marketing Strategic Planning"
              )}
            </h2>
            <p>
              {t(
                "Mākslīgais intelekts ietekmē ne tikai taktisko izpildi, bet arī mārketinga stratēģijas veidošanu. Pētījumā norādīts, ka AI balstītas sistēmas var palīdzēt prognozēt kampaņu rezultātus, novērtēt dažādu scenāriju ietekmi un optimizēt resursu sadali. Tas ļauj mārketinga vadītājiem pieņemt pamatotākus lēmumus un samazināt nenoteiktību.",
                "Artificial intelligence affects not only tactical execution but also marketing strategy formation. The research indicates that AI-based systems can help forecast campaign results, assess the impact of various scenarios, and optimize resource allocation. This allows marketing leaders to make more informed decisions and reduce uncertainty."
              )}
            </p>
            <p>
              {t(
                "Šāda pieeja veicina pāreju no intuīcijā balstītas plānošanas uz datu balstītu stratēģisko domāšanu, kas ir īpaši svarīga konkurences piesātinātos tirgos.",
                "This approach promotes the transition from intuition-based planning to data-driven strategic thinking, which is especially important in competitive saturated markets."
              )}
            </p>

            <h2>
              {t(
                "Automatizācija un efektivitātes pieaugums mārketingā",
                "Automation and Efficiency Growth in Marketing"
              )}
            </h2>
            <p>
              {t(
                "AI ieviešana mārketingā veicina arī procesu automatizāciju, īpaši rutīnas un atkārtojamu uzdevumu jomā. Pētījumā uzsvērts, ka automatizācija ļauj mārketinga komandām koncentrēties uz radošiem un stratēģiskiem uzdevumiem, vienlaikus uzlabojot darbības ātrumu un precizitāti.",
                "AI implementation in marketing also promotes process automation, especially in routine and repetitive tasks. The research emphasizes that automation allows marketing teams to focus on creative and strategic tasks while improving operational speed and accuracy."
              )}
            </p>
            <p>
              {t(
                "Tomēr pētījums arī norāda, ka efektivitātes pieaugums ir cieši saistīts ar pareizu AI integrāciju organizācijas procesos. Bez skaidras stratēģijas un mērķiem automatizācija var nesniegt gaidīto vērtību.",
                "However, the research also indicates that efficiency growth is closely related to proper AI integration into organizational processes. Without a clear strategy and goals, automation may not deliver the expected value."
              )}
            </p>

            <h2>
              {t(
                "Izaicinājumi un ierobežojumi AI mārketingā",
                "Challenges and Limitations of AI in Marketing"
              )}
            </h2>
            <p>
              {t(
                "Neraugoties uz ieguvumiem, pētījumā identificēti arī vairāki izaicinājumi, kas saistīti ar mākslīgā intelekta izmantošanu mārketingā. Tie ietver datu kvalitātes problēmas, privātuma jautājumus un organizatoriskās gatavības trūkumu. AI sistēmu efektivitāte ir tieši atkarīga no pieejamo datu precizitātes un pilnīguma.",
                "Despite the benefits, the research also identifies several challenges related to the use of artificial intelligence in marketing. These include data quality issues, privacy concerns, and lack of organizational readiness. The effectiveness of AI systems is directly dependent on the accuracy and completeness of available data."
              )}
            </p>
            <p>
              {t(
                "Uzņēmumiem tas nozīmē, ka AI ieviešana prasa ne tikai tehnoloģiskus ieguldījumus, bet arī strukturālas izmaiņas mārketinga procesos un kompetenču attīstību.",
                "For businesses, this means that AI implementation requires not only technological investments but also structural changes in marketing processes and competency development."
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
                "B2B uzņēmumiem mākslīgais intelekts mārketingā piedāvā iespēju uzlabot klientu izpratni, palielināt kampaņu efektivitāti un stiprināt ilgtermiņa attiecības. Pētījums uzsver, ka veiksmīga AI izmantošana prasa līdzsvaru starp tehnoloģijām un cilvēku lomu. AI kalpo kā atbalsta instruments, kas papildina mārketinga speciālistu kompetenci, nevis to aizvieto.",
                "For B2B companies, artificial intelligence in marketing offers the opportunity to improve customer understanding, increase campaign effectiveness, and strengthen long-term relationships. The research emphasizes that successful AI use requires a balance between technology and the human role. AI serves as a support tool that complements marketing specialists' competence rather than replacing it."
              )}
            </p>
            <p>
              {t(
                "Uzņēmumu vadītājiem tas nozīmē nepieciešamību skatīt AI mārketingā kā stratēģisku resursu, kas ietekmē konkurētspēju un organizācijas spēju pielāgoties digitālajai videi.",
                "For business leaders, this means the need to view AI in marketing as a strategic resource that affects competitiveness and the organization's ability to adapt to the digital environment."
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