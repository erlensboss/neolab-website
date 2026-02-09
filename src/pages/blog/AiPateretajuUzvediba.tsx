import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AiPateretajuUzvediba() {
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
                  {t("2025. gada 10. janvāris", "January 10, 2025")}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {t("9 min", "9 min")}
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="mb-6">
                {t(
                  "Mākslīgais intelekts un patērētāju uzvedība: kā AI maina lēmumu pieņemšanu digitālajā vidē",
                  "Artificial Intelligence and Consumer Behavior: How AI Is Changing Decision-Making in the Digital Environment"
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
                "Mākslīgā intelekta attīstība pēdējos gados ir būtiski mainījusi veidu, kā uzņēmumi analizē un ietekmē patērētāju uzvedību. Ja agrāk uzvedības analīze balstījās galvenokārt uz vēsturisko datu interpretāciju, tad mūsdienās AI ļauj prognozēt, ieteikt un pat virzīt patērētāju lēmumus reāllaikā. Zinātniskajā literatūrā šī pāreja tiek raksturota kā virzība no aprakstošas un prognozējošas analītikas uz preskriptīvu analītiku, kur sistēmas ne tikai paredz iespējamos scenārijus, bet arī aktīvi iesaka konkrētas darbības.",
                "The development of artificial intelligence in recent years has fundamentally changed the way companies analyze and influence consumer behavior. If behavioral analysis was previously based mainly on the interpretation of historical data, today AI allows predicting, recommending, and even directing consumer decisions in real time. In scientific literature, this transition is described as a shift from descriptive and predictive analytics to prescriptive analytics, where systems not only predict possible scenarios but also actively suggest specific actions."
              )}
            </p>
            <p>
              {t(
                "Šīs izmaiņas ietekmē gan patērētāju pieredzi, gan uzņēmumu stratēģijas, īpaši B2B vidē, kur lēmumu pieņemšana ir sarežģīta, daudzpakāpju un balstīta uz informācijas apstrādi. AI kļūst par starpnieku starp datiem un rīcību, mainot tradicionālo attiecību dinamiku starp uzņēmumu un patērētāju.",
                "These changes affect both consumer experience and business strategies, especially in the B2B environment, where decision-making is complex, multi-stage, and based on information processing. AI becomes an intermediary between data and action, changing the traditional relationship dynamics between business and consumer."
              )}
            </p>

            <h2>
              {t(
                "Patērētāju uzvedības analīzes evolūcija digitālajā laikmetā",
                "The Evolution of Consumer Behavior Analysis in the Digital Age"
              )}
            </h2>
            <p>
              {t(
                "Tradicionāli patērētāju uzvedības analīze koncentrējās uz pagātnes datu apkopošanu un modeļu identificēšanu. Šāda pieeja ļāva saprast, kas jau ir noticis, taču tai bija ierobežota spēja reaģēt uz mainīgiem apstākļiem. Ar mākslīgā intelekta ieviešanu analīze kļūst dinamiska un adaptīva. AI sistēmas spēj apstrādāt lielus, neviendabīgus datu apjomus, tostarp uzvedības, konteksta un vides datus, kas iepriekš bija grūti strukturējami.",
                "Traditionally, consumer behavior analysis focused on collecting past data and identifying patterns. This approach allowed understanding what had already happened, but had limited ability to respond to changing conditions. With the introduction of artificial intelligence, analysis becomes dynamic and adaptive. AI systems are capable of processing large, heterogeneous data volumes, including behavioral, contextual, and environmental data that were previously difficult to structure."
              )}
            </p>
            <p>
              {t(
                "Pētījumā uzsvērts, ka šī pāreja maina pašu patērētāja lomu tirgū. Patērētājs vairs nav tikai pasīvs datu avots, bet aktīvs sistēmas dalībnieks, kura darbības nepārtraukti ietekmē algoritmu darbību un turpmākos ieteikumus.",
                "The research emphasizes that this transition changes the consumer's role in the market itself. The consumer is no longer just a passive data source, but an active participant in the system, whose actions continuously influence algorithm operations and subsequent recommendations."
              )}
            </p>

            <h2>
              {t(
                "No prognozējošas uz preskriptīvu analītiku",
                "From Predictive to Prescriptive Analytics"
              )}
            </h2>
            <p>
              {t(
                "Prognozējošā analītika koncentrējas uz jautājumu \"kas, visticamāk, notiks?\", savukārt preskriptīvā analītika iet soli tālāk, atbildot uz jautājumu \"ko būtu jādara?\". Mākslīgais intelekts ļauj apvienot šīs pieejas, piedāvājot rekomendācijas, kas balstītas gan uz vēsturiskajiem datiem, gan uz aktuālo kontekstu.",
                "Predictive analytics focuses on the question \"what is most likely to happen?\", while prescriptive analytics goes a step further, answering the question \"what should be done?\". Artificial intelligence allows combining these approaches, offering recommendations based on both historical data and current context."
              )}
            </p>
            <p>
              {t(
                "Šāda pieeja būtiski ietekmē patērētāju lēmumu pieņemšanu, jo ieteikumi bieži tiek uztverti kā objektīvi un datu balstīti. Pētījumā norādīts, ka tas var palielināt uzticību sistēmām, bet vienlaikus rada jautājumus par autonomiju un lēmumu kontroles sadalījumu starp cilvēku un tehnoloģiju.",
                "This approach significantly affects consumer decision-making, as recommendations are often perceived as objective and data-driven. The research indicates that this can increase trust in systems, but at the same time raises questions about autonomy and the distribution of decision control between humans and technology."
              )}
            </p>

            <h2>
              {t(
                "AI ietekme uz patērētāju uztveri un lēmumu pieņemšanu",
                "AI's Impact on Consumer Perception and Decision-Making"
              )}
            </h2>
            <p>
              {t(
                "AI balstītas sistēmas ne tikai analizē patērētāju uzvedību, bet arī aktīvi to ietekmē, piedāvājot personalizētus ieteikumus, dinamisku cenu noteikšanu un pielāgotu saturu. Pētījumā uzsvērts, ka šāda personalizācija var uzlabot lietotāja pieredzi, ja tā tiek uztverta kā noderīga un atbilstoša. Tomēr pārmērīga automatizācija vai nepietiekama caurskatāmība var radīt neuzticēšanos.",
                "AI-based systems not only analyze consumer behavior but also actively influence it by offering personalized recommendations, dynamic pricing, and tailored content. The research emphasizes that such personalization can improve the user experience if it is perceived as useful and relevant. However, excessive automation or insufficient transparency can create distrust."
              )}
            </p>
            <p>
              {t(
                "Svarīgs aspekts ir arī tas, kā patērētāji interpretē AI lēmumus. Ja algoritma darbība nav saprotama, patērētāji var apšaubīt rekomendāciju kvalitāti vai objektivitāti, kas ietekmē viņu gatavību sekot sistēmas ieteikumiem.",
                "An important aspect is also how consumers interpret AI decisions. If the algorithm's operation is not understandable, consumers may question the quality or objectivity of recommendations, which affects their willingness to follow the system's suggestions."
              )}
            </p>

            <h2>
              {t(
                "Ētiskie un stratēģiskie izaicinājumi uzņēmumiem",
                "Ethical and Strategic Challenges for Businesses"
              )}
            </h2>
            <p>
              {t(
                "Mākslīgā intelekta izmantošana patērētāju uzvedības analīzē rada arī virkni ētisku jautājumu. Datu izmantošana, privātums un algoritmiskā ietekme uz lēmumiem kļūst par stratēģiski nozīmīgiem aspektiem uzņēmumu vadībā. Pētījumā uzsvērts, ka ilgtermiņa uzticības veidošanai ir nepieciešama līdzsvarota pieeja starp tehnoloģisko efektivitāti un patērētāju autonomijas respektēšanu.",
                "The use of artificial intelligence in consumer behavior analysis also raises a number of ethical questions. Data usage, privacy, and algorithmic influence on decisions become strategically significant aspects in business management. The research emphasizes that building long-term trust requires a balanced approach between technological efficiency and respecting consumer autonomy."
              )}
            </p>
            <p>
              {t(
                "Uzņēmumiem tas nozīmē, ka AI ieviešana nevar būt tikai tehnoloģisks projekts. Tā ir stratēģiska izvēle, kas ietekmē zīmola uztveri, attiecības ar klientiem un tirgus ilgtspēju.",
                "For businesses, this means that AI implementation cannot be just a technological project. It is a strategic choice that affects brand perception, customer relationships, and market sustainability."
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
                "B2B kontekstā AI ietekme uz patērētāju uzvedību ir īpaši būtiska, jo lēmumu pieņemšana parasti ir kolektīva un balstīta uz sarežģītu informācijas analīzi. AI var palīdzēt strukturēt šo procesu, piedāvājot datu balstītus ieteikumus un scenārijus. Tomēr pētījums uzsver, ka galīgais lēmums joprojām paliek cilvēku ziņā.",
                "In the B2B context, AI's impact on consumer behavior is particularly significant, as decision-making is typically collective and based on complex information analysis. AI can help structure this process by offering data-driven recommendations and scenarios. However, the research emphasizes that the final decision still remains with humans."
              )}
            </p>
            <p>
              {t(
                "Uzņēmumu vadītājiem tas nozīmē nepieciešamību izprast ne tikai tehnoloģiju iespējas, bet arī to ietekmi uz patērētāju uztveri un uzvedību. AI kļūst par daļu no lēmumu ekosistēmas, kurā svarīga ir caurskatāmība, uzticība un atbildīga izmantošana.",
                "For business leaders, this means the need to understand not only the capabilities of technology but also its impact on consumer perception and behavior. AI becomes part of the decision ecosystem, where transparency, trust, and responsible use are important."
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
