import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GenerativaisAi() {
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
                  {t("2025. gada 5. janvāris", "January 5, 2025")}
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
                  "Ģeneratīvais mākslīgais intelekts: pašreizējais stāvoklis un nākotnes attīstības virzieni",
                  "Generative Artificial Intelligence: Current State and Future Development Directions"
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
                "Ģeneratīvais mākslīgais intelekts pēdējos gados ir kļuvis par vienu no straujāk augošajām AI apakšnozarēm, būtiski ietekmējot gan pētniecību, gan praktiskos pielietojumus uzņēmējdarbībā. Atšķirībā no tradicionālajām analītiskajām sistēmām, kas koncentrējas uz datu klasifikāciju vai prognozēšanu, ģeneratīvais AI spēj radīt jaunu saturu — tekstu, attēlus, audio, video un pat strukturētus datus. Šī spēja maina izpratni par to, kā mākslīgais intelekts var atbalstīt lēmumu pieņemšanu, inovāciju procesus un vērtības radīšanu.",
                "Generative artificial intelligence has become one of the fastest-growing AI subfields in recent years, significantly impacting both research and practical applications in business. Unlike traditional analytical systems that focus on data classification or prediction, generative AI is capable of creating new content — text, images, audio, video, and even structured data. This capability changes the understanding of how artificial intelligence can support decision-making, innovation processes, and value creation."
              )}
            </p>
            <p>
              {t(
                "Zinātniskajā literatūrā ģeneratīvais AI tiek raksturots kā tehnoloģija, kas pāriet no šauri definētiem uzdevumiem uz plašāku, elastīgāku pielietojumu spektru. Tas padara to īpaši nozīmīgu organizācijām, kuras strādā ar zināšanām, informācijas apstrādi un sarežģītiem biznesa procesiem.",
                "In scientific literature, generative AI is characterized as a technology that transitions from narrowly defined tasks to a broader, more flexible spectrum of applications. This makes it particularly significant for organizations that work with knowledge, information processing, and complex business processes."
              )}
            </p>

            <h2>
              {t(
                "Kas raksturo mūsdienu ģeneratīvo mākslīgo intelektu",
                "What Characterizes Modern Generative Artificial Intelligence"
              )}
            </h2>
            <p>
              {t(
                "Mūsdienu ģeneratīvā AI pamatā ir dziļās mācīšanās modeļi, īpaši neironu tīklu arhitektūras, kas spēj apgūt sarežģītas datu struktūras no lieliem apmācības kopumiem. Šīs sistēmas tiek trenētas uz plašiem, daudzveidīgiem datiem, kas ļauj tām ģenerēt saturu, kas pēc formas un loģikas līdzinās cilvēka radītajam.",
                "Modern generative AI is based on deep learning models, particularly neural network architectures capable of learning complex data structures from large training sets. These systems are trained on broad, diverse data, allowing them to generate content that resembles human-created output in form and logic."
              )}
            </p>
            <p>
              {t(
                "Pētījumā uzsvērts, ka ģeneratīvā AI efektivitāte ir cieši saistīta ar datu kvalitāti, modeļa arhitektūru un apmācības metodēm. Lai gan rezultāti bieži ir iespaidīgi, sistēmas joprojām darbojas uz statistisku sakarību pamata, nevis patiesas izpratnes. Tas nosaka gan to iespējas, gan ierobežojumus praktiskā lietošanā.",
                "The research emphasizes that the effectiveness of generative AI is closely linked to data quality, model architecture, and training methods. Although results are often impressive, systems still operate on the basis of statistical correlations rather than genuine understanding. This determines both their capabilities and limitations in practical use."
              )}
            </p>

            <h2>
              {t(
                "Pašreizējie pielietojumi un to nozīme uzņēmumiem",
                "Current Applications and Their Significance for Businesses"
              )}
            </h2>
            <p>
              {t(
                "Ģeneratīvais mākslīgais intelekts jau šobrīd tiek izmantots dažādās jomās, tostarp satura veidošanā, programmatūras izstrādē, dizainā un klientu apkalpošanā. Uzņēmumiem tas paver iespējas automatizēt radošus un pusstrukturētus uzdevumus, kas iepriekš prasīja ievērojamu cilvēkresursu iesaisti.",
                "Generative artificial intelligence is already being used in various fields, including content creation, software development, design, and customer service. For businesses, it opens opportunities to automate creative and semi-structured tasks that previously required significant human resource involvement."
              )}
            </p>
            <p>
              {t(
                "Pētījumā norādīts, ka īpaši nozīmīgs ir ģeneratīvā AI potenciāls kā atbalsta instruments, nevis pilnīgs cilvēka aizvietotājs. Sistēmas spēj paātrināt ideju ģenerēšanu, piedāvāt alternatīvus risinājumus un samazināt rutīnas darbu, ļaujot cilvēkiem koncentrēties uz stratēģiskiem un kritiskās domāšanas uzdevumiem.",
                "The research indicates that particularly significant is generative AI's potential as a support tool rather than a complete human replacement. Systems can accelerate idea generation, offer alternative solutions, and reduce routine work, allowing people to focus on strategic and critical thinking tasks."
              )}
            </p>

            <h2>
              {t(
                "Galvenie tehnoloģiskie un konceptuālie izaicinājumi",
                "Key Technological and Conceptual Challenges"
              )}
            </h2>
            <p>
              {t(
                "Neraugoties uz straujo progresu, ģeneratīvais AI saskaras ar vairākiem būtiskiem izaicinājumiem. Viens no tiem ir ģenerētā satura uzticamība un precizitāte. Modeļi var radīt pārliecinošu, bet faktoloģiski neprecīzu informāciju, kas rada riskus, īpaši biznesa un lēmumu pieņemšanas kontekstā.",
                "Despite rapid progress, generative AI faces several significant challenges. One of them is the reliability and accuracy of generated content. Models can create convincing but factually inaccurate information, which poses risks, especially in business and decision-making contexts."
              )}
            </p>
            <p>
              {t(
                "Pētījumā uzsvērta arī caurskatāmības un izskaidrojamības problēma. Sarežģītie modeļi bieži darbojas kā \"melnās kastes\", kas apgrūtina to rezultātu interpretāciju un kontroli. Tas savukārt ietekmē uzticību tehnoloģijai un tās pieņemšanu organizācijās.",
                "The research also emphasizes the problem of transparency and explainability. Complex models often operate as \"black boxes,\" making it difficult to interpret and control their results. This in turn affects trust in the technology and its adoption in organizations."
              )}
            </p>

            <h2>
              {t(
                "Ētiskie, juridiskie un sociālie aspekti",
                "Ethical, Legal, and Social Aspects"
              )}
            </h2>
            <p>
              {t(
                "Ģeneratīvā AI attīstība aktualizē arī virkni ētisku un juridisku jautājumu. Datu izcelsme, autorības tiesības un atbildība par ģenerēto saturu kļūst par būtiskiem diskusiju tematiem. Pētījumā norādīts, ka bez skaidriem regulējumiem un vadlīnijām pastāv risks, ka tehnoloģija tiks izmantota neētiski vai kaitnieciski.",
                "The development of generative AI also raises a number of ethical and legal questions. Data origin, copyright, and responsibility for generated content become significant discussion topics. The research indicates that without clear regulations and guidelines, there is a risk that the technology will be used unethically or harmfully."
              )}
            </p>
            <p>
              {t(
                "Uzņēmumiem tas nozīmē nepieciešamību izstrādāt iekšējos principus un politikas, kas nosaka, kā un kādos nolūkos ģeneratīvais AI tiek izmantots. Atbildīga pieeja kļūst par priekšnoteikumu ilgtermiņa uzticības saglabāšanai gan klientu, gan sabiedrības acīs.",
                "For businesses, this means the need to develop internal principles and policies that determine how and for what purposes generative AI is used. A responsible approach becomes a prerequisite for maintaining long-term trust in the eyes of both clients and society."
              )}
            </p>

            <h2>
              {t(
                "Nākotnes attīstības virzieni ģeneratīvā AI jomā",
                "Future Development Directions in Generative AI"
              )}
            </h2>
            <p>
              {t(
                "Zinātniskā literatūra paredz, ka ģeneratīvais mākslīgais intelekts turpinās attīstīties vairākos virzienos. Sagaidāma lielāka modeļu integrācija ar specifiskām domēna zināšanām, kas ļaus radīt precīzākus un kontekstā piemērotākus rezultātus. Tāpat tiek uzsvērta cilvēka un AI sadarbības nozīme, kur sistēmas darbojas kā intelektuāli palīgi, nevis autonomi lēmumu pieņēmēji.",
                "Scientific literature predicts that generative artificial intelligence will continue to develop in several directions. Greater integration of models with specific domain knowledge is expected, which will allow creating more precise and contextually appropriate results. The importance of human-AI collaboration is also emphasized, where systems function as intellectual assistants rather than autonomous decision-makers."
              )}
            </p>
            <p>
              {t(
                "Šī attīstība norāda uz pāreju no universāliem risinājumiem uz mērķtiecīgām, uzdevumam pielāgotām sistēmām, kas labāk atbilst konkrētu nozaru un organizāciju vajadzībām.",
                "This development points to a transition from universal solutions to targeted, task-adapted systems that better meet the needs of specific industries and organizations."
              )}
            </p>

            <h2>
              {t(
                "Stratēģiskā nozīme B2B vadītājiem",
                "Strategic Significance for B2B Leaders"
              )}
            </h2>
            <p>
              {t(
                "B2B vidē ģeneratīvais AI kļūst par stratēģisku resursu, kas var ietekmēt konkurētspēju, inovāciju tempu un darbības efektivitāti. Pētījums uzsver, ka veiksmīga ieviešana prasa ne tikai tehnoloģiskās investīcijas, bet arī izpratni par organizatoriskajiem procesiem un cilvēku lomām.",
                "In the B2B environment, generative AI becomes a strategic resource that can impact competitiveness, innovation pace, and operational efficiency. The research emphasizes that successful implementation requires not only technological investments but also understanding of organizational processes and human roles."
              )}
            </p>
            <p>
              {t(
                "Uzņēmumu vadītājiem ir jāvērtē ģeneratīvā AI iespējas kritiski, apzinoties gan tā potenciālu, gan ierobežojumus. Ilgtspējīga pieeja balstās uz līdzsvaru starp automatizāciju, cilvēka iesaisti un atbildīgu tehnoloģijas izmantošanu.",
                "Business leaders need to evaluate generative AI's capabilities critically, being aware of both its potential and limitations. A sustainable approach is based on a balance between automation, human involvement, and responsible use of technology."
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
