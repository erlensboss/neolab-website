import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AiPredictiveUzGenerative() {
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
                  {t("Stratēģija", "Strategy")}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {t("2024. gada 15. decembris", "December 15, 2024")}
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
                  "Mākslīgais intelekts un patērētāju uzvedība: pāreja no prognozējošā uz ģeneratīvo AI",
                  "Artificial Intelligence and Consumer Behavior: Transition from Predictive to Generative AI"
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

            <h2>
              {t(
                "Mākslīgā intelekta attīstības divi posmi patērētāju kontekstā",
                "Two Stages of Artificial Intelligence Development in the Consumer Context"
              )}
            </h2>
            <p>
              {t(
                "Pēdējo piecpadsmit gadu laikā mākslīgais intelekts ir attīstījies divos būtiskos virzienos, kas būtiski ietekmē patērētāju uzvedību. Pirmais posms ir saistīts ar prognozējošo jeb predictive AI, kura galvenais uzdevums ir patērētāju datu analīze un lēmumu paredzēšana. Otrs, daudz jaunāks posms, ir ģeneratīvais AI, kas ne tikai prognozē, bet arī rada saturu, idejas un risinājumus. Šī pāreja būtiski maina to, kā uzņēmumi izprot, ietekmē un mijiedarbojas ar patērētājiem.",
                "Over the past fifteen years, artificial intelligence has developed in two significant directions that fundamentally affect consumer behavior. The first stage is associated with predictive AI, whose main task is consumer data analysis and decision forecasting. The second, much newer stage, is generative AI, which not only predicts but also creates content, ideas, and solutions. This transition fundamentally changes how companies understand, influence, and interact with consumers."
              )}
            </p>

            <h2>
              {t(
                "Prognozējošais AI un algoritmiskā lēmumu pieņemšana",
                "Predictive AI and Algorithmic Decision-Making"
              )}
            </h2>
            <p>
              {t(
                "Prognozējošais AI balstās uz algoritmiem, kas analizē patērētāju digitālās pēdas, tostarp iepriekšējo uzvedību, intereses, demogrāfiskos datus un mijiedarbību ar digitālajām platformām. Šādi algoritmi tiek izmantoti ieteikumu sistēmās, reklāmas mērķēšanā, cenu personalizācijā un automatizētā konsultēšanā. Patērētāju lēmumi šādā vidē veidojas kā mijiedarbība starp cilvēka izvēlēm un algoritmisku atlasi, kas būtiski ietekmē informācijas plūsmu un redzamos piedāvājumus.",
                "Predictive AI is based on algorithms that analyze consumers' digital footprints, including previous behavior, interests, demographic data, and interactions with digital platforms. Such algorithms are used in recommendation systems, advertising targeting, price personalization, and automated consulting. Consumer decisions in such an environment are formed as an interaction between human choices and algorithmic selection, which significantly influences information flow and visible offerings."
              )}
            </p>

            <h2>
              {t(
                "Negatīvas patērētāju reakcijas uz algoritmiem",
                "Negative Consumer Reactions to Algorithms"
              )}
            </h2>
            <p>
              {t(
                "Pētījumi rāda, ka patērētāji bieži dod priekšroku cilvēku pieņemtiem lēmumiem, pat ja algoritmu sniegtie rezultāti ir objektīvi labāki. Šo parādību literatūrā dēvē par algoritmu noraidījumu. To veicina uztverta algoritmu neautentiskums, morālas bažas, privātuma riski un sajūta, ka algoritmi neņem vērā individuālo un unikālo patērētāja kontekstu. Negatīvas reakcijas pastiprinās arī situācijās, kur algoritmi tiek uztverti kā uzņēmuma interešu instruments, nevis patērētāja labuma veicinātājs.",
                "Research shows that consumers often prefer human-made decisions, even when algorithm-provided results are objectively better. This phenomenon is called algorithm aversion in the literature. It is driven by perceived algorithm inauthenticity, moral concerns, privacy risks, and the feeling that algorithms do not account for the individual and unique consumer context. Negative reactions are also amplified in situations where algorithms are perceived as a tool for company interests rather than a promoter of consumer benefit."
              )}
            </p>

            <h2>
              {t(
                "Pozitīvas patērētāju reakcijas un algoritmu pieņemšana",
                "Positive Consumer Reactions and Algorithm Acceptance"
              )}
            </h2>
            <p>
              {t(
                "Vienlaikus pētījumi apliecina, ka algoritmu pieņemšanu var būtiski palielināt. Patērētāji labvēlīgāk uztver AI risinājumus, ja tiem ir iespēja saglabāt zināmu kontroli, ja algoritmu darbība tiek skaidrota saprotamā veidā vai ja tiek uzsvērta algoritmu spēja mācīties un uzlaboties laika gaitā. Pozitīvāka attieksme vērojama arī utilitāros uzdevumos, objektīvos lēmumos un situācijās, kur algoritmi mazina sociālo spriedzi vai kauna sajūtu.",
                "At the same time, research confirms that algorithm acceptance can be significantly increased. Consumers view AI solutions more favorably when they have the opportunity to maintain some control, when algorithm operation is explained in an understandable way, or when the algorithm's ability to learn and improve over time is emphasized. A more positive attitude is also observed in utilitarian tasks, objective decisions, and situations where algorithms reduce social tension or feelings of shame."
              )}
            </p>

            <h2>
              {t(
                "Ģeneratīvais AI kā jauns posms patērētāju uzvedības ietekmē",
                "Generative AI as a New Stage in Consumer Behavior Influence"
              )}
            </h2>
            <p>
              {t(
                "Ģeneratīvais AI iezīmē jaunu attīstības posmu, kurā mākslīgais intelekts spēj radīt tekstu, attēlus, idejas un citus saturiskus risinājumus. Šajā kontekstā tiek nošķirti divi ģeneratīvā AI veidi: konverģentais, kas orientēts uz konkrētu uzdevumu izpildi un personalizētu satura ģenerēšanu, un diverģentais, kas vērsts uz radošumu, ideju radīšanu un jaunu risinājumu meklēšanu. Šāda AI spēja būtiski paplašina personalizācijas, inovāciju un mārketinga efektivitātes iespējas.",
                "Generative AI marks a new development stage in which artificial intelligence can create text, images, ideas, and other content-based solutions. In this context, two types of generative AI are distinguished: convergent, which is oriented toward specific task execution and personalized content generation, and divergent, which is focused on creativity, idea generation, and searching for new solutions. Such AI capability significantly expands the possibilities of personalization, innovation, and marketing effectiveness."
              )}
            </p>

            <h2>
              {t(
                "Ietekme uz uzņēmumu un B2B mārketinga praksi",
                "Impact on Business and B2B Marketing Practice"
              )}
            </h2>
            <p>
              {t(
                "Uzņēmumu kontekstā ģeneratīvais AI paver iespējas masveida personalizācijai, automatizētai mārketinga izpētei un pat sintētisku patērētāju modeļu izmantošanai. Vienlaikus tas rada jaunus izaicinājumus saistībā ar uzticamību, satura patiesumu, autorību un ētiku. B2B vidē šīs tehnoloģijas var būtiski mainīt pārdošanas, stratēģiskās plānošanas un klientu attiecību vadības pieeju, ja tās tiek ieviestas ar skaidru izpratni par patērētāju psiholoģiju un uztveri.",
                "In the business context, generative AI opens opportunities for mass personalization, automated marketing research, and even the use of synthetic consumer models. At the same time, it creates new challenges related to reliability, content truthfulness, authorship, and ethics. In the B2B environment, these technologies can significantly change sales, strategic planning, and customer relationship management approaches if they are implemented with a clear understanding of consumer psychology and perception."
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