import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function B2bPardosana2025() {
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
                  {t("2025. gada 15. janvāris", "January 15, 2025")}
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
                  "B2B pārdošana 2025. gadā: kā AI, vērtība un uzticība nosaka rezultātus",
                  "B2B Sales in 2025: How AI, Value and Trust Determine Results"
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
                "B2B pārdošanas vide pēdējos gados ir būtiski mainījusies, un 2025. gads šo pārmaiņu tendences padara nepārprotamas. Pircēji ir informētāki, prasīgāki un daudz patstāvīgāki nekā jebkad agrāk. Lēmumu pieņemšana vairs nav lineārs process, kurā pārdevējs kontrolē informācijas plūsmu. Tā vietā tā ir sarežģīta, daudzkanālu pieredze, kur galveno lomu spēlē uztvertā vērtība, uzticība un spēja palīdzēt pircējam orientēties informācijas pārbagātībā. Šajā kontekstā mākslīgais intelekts ir kļuvis par neatņemamu B2B pārdošanas sastāvdaļu, taču ne kā aizvietotājs cilvēkam, bet kā instruments vērtības radīšanai.",
                "The B2B sales landscape has changed significantly in recent years, and 2025 makes these trends unmistakable. Buyers are more informed, more demanding, and far more independent than ever before. Decision-making is no longer a linear process where the seller controls the flow of information. Instead, it is a complex, multi-channel experience where perceived value, trust, and the ability to help the buyer navigate information overload play the main role. In this context, artificial intelligence has become an integral part of B2B sales, but not as a replacement for humans, but as a tool for creating value."
              )}
            </p>

            <h2>
              {t(
                "Pircēju vara B2B tirgū turpina pieaugt",
                "Buyer Power in the B2B Market Continues to Grow"
              )}
            </h2>
            <p>
              {t(
                "Mūsdienu B2B pircējs lielāko daļu izpētes veic vēl pirms pirmā kontakta ar pārdevēju. Digitālie kanāli, pašapkalpošanās rīki un AI balstītas platformas ļauj ātri salīdzināt piedāvājumus, izprast alternatīvas un veidot sākotnēju viedokli par produktu vai pakalpojumu. Pētījuma dati rāda, ka mākslīgais intelekts ir būtiski atvieglojis pircēju izpētes procesu, kas savukārt paaugstina prasības pārdevējiem. Ja agrāk pietika ar informācijas sniegšanu, tad šodien pircējs sagaida skaidru, kontekstā balstītu vērtības piedāvājumu, kas precīzi atbilst viņa situācijai un biznesa mērķiem.",
                "Today's B2B buyer conducts most of their research before the first contact with a seller. Digital channels, self-service tools, and AI-powered platforms allow quick comparison of offers, understanding alternatives, and forming an initial opinion about a product or service. Research data shows that artificial intelligence has significantly facilitated the buyer's research process, which in turn raises the bar for sellers. If providing information used to be enough, today's buyer expects a clear, context-based value proposition that precisely matches their situation and business goals."
              )}
            </p>
            <p>
              {t(
                "Šī tendence nozīmē, ka pircējs bieži vien sarunā ienāk jau ar izveidotu priekšstatu, un pārdevēja uzdevums nav to apstrīdēt, bet palīdzēt strukturēt, salīdzināt un pieņemt drošu lēmumu. Pārdošanas process kļūst par sadarbību, nevis pārliecināšanu.",
                "This trend means that the buyer often enters the conversation with an already formed perspective, and the seller's task is not to challenge it, but to help structure, compare, and make a confident decision. The sales process becomes a collaboration, not persuasion."
              )}
            </p>

            <h2>
              {t(
                "Kāpēc tradicionālā pārdošana vairs nestrādā",
                "Why Traditional Selling No Longer Works"
              )}
            </h2>
            <p>
              {t(
                "Viens no biežākajiem iemesliem, kāpēc B2B darījumi neizdodas, ir pircēja sajūta, ka piedāvājums nav pietiekami piemērots viņa vajadzībām vai neatbilst cenai. Tas nav tikai produkta vai pakalpojuma jautājums, bet gan pārdošanas pieejas problēma. Ja pārdevējs fokusējas uz funkciju uzskaitījumu vai vispārīgiem ieguvumiem, pircējs neredz tiešu saikni ar savu situāciju.",
                "One of the most common reasons why B2B deals fail is the buyer's feeling that the offer is not sufficiently tailored to their needs or does not match the price. This is not just a product or service issue, but a sales approach problem. If the seller focuses on listing features or general benefits, the buyer doesn't see a direct connection to their situation."
              )}
            </p>
            <p>
              {t(
                "2025. gadā veiksmīga B2B pārdošana balstās uz vērtībā balstītu pieeju, kur galvenais ir saprast pircēja kontekstu, izaicinājumus un lēmumu pieņemšanas dinamiku. Pārdošana kļūst par konsultatīvu procesu, kurā tiek risinātas konkrētas problēmas, nevis piedāvāti standarta risinājumi. Tieši šeit tradicionālās \"pitch\" taktikas zaudē efektivitāti.",
                "In 2025, successful B2B selling is based on a value-based approach, where the key is understanding the buyer's context, challenges, and decision-making dynamics. Selling becomes a consultative process that addresses specific problems rather than offering standard solutions. This is exactly where traditional \"pitch\" tactics lose their effectiveness."
              )}
            </p>

            <h2>
              {t(
                "AI loma B2B pārdošanā vairs nav eksperimentāla",
                "The Role of AI in B2B Sales Is No Longer Experimental"
              )}
            </h2>
            <p>
              {t(
                "Mākslīgais intelekts B2B pārdošanā vairs netiek izmantots tikai testēšanas nolūkos. Lielākā daļa pārdošanas profesionāļu to jau ir integrējuši ikdienas darbā, izmantojot pircēju izpētei, personalizētai komunikācijai un procesu efektivizācijai. AI palīdz apstrādāt lielu informācijas apjomu, identificēt prioritāros kontaktus un izprast pircēju signālus, kas liecina par gatavību iegādei.",
                "Artificial intelligence in B2B sales is no longer used only for testing purposes. Most sales professionals have already integrated it into their daily work, using it for buyer research, personalized communication, and process optimization. AI helps process large volumes of information, identify priority contacts, and understand buyer signals that indicate readiness to purchase."
              )}
            </p>
            <p>
              {t(
                "Tomēr svarīgi uzsvērt, ka AI pats par sevi negarantē labākus rezultātus. Tas paaugstina kopējo kvalitātes latiņu visā tirgū, jo automatizē pamata uzdevumus un samazina manuālo darbu. Rezultātā atšķirību rada tas, kā uzņēmumi izmanto atbrīvoto laiku un datus, lai radītu lielāku vērtību pircējam.",
                "However, it is important to emphasize that AI alone does not guarantee better results. It raises the overall quality bar across the market by automating basic tasks and reducing manual work. As a result, the difference is made by how companies use the freed-up time and data to create greater value for the buyer."
              )}
            </p>

            <h2>
              {t(
                "Kāpēc AI neizslēdz cilvēku no pārdošanas procesa",
                "Why AI Does Not Exclude Humans from the Sales Process"
              )}
            </h2>
            <p>
              {t(
                "Neraugoties uz tehnoloģiju attīstību, B2B pircēji joprojām piešķir lielu nozīmi cilvēciskajam faktoram. Lēmumi bieži ir saistīti ar emocionāliem un politiskiem aspektiem organizācijas iekšienē, kurus automatizēti risinājumi nespēj pilnībā aptvert. Pārdevējs šajā situācijā kļūst par uzticamu partneri, kurš palīdz pircējam izskaidrot izvēli kolēģiem, vadībai un citiem lēmumu pieņēmējiem.",
                "Despite technological advances, B2B buyers still attach great importance to the human factor. Decisions are often linked to emotional and political aspects within the organization that automated solutions cannot fully cover. The seller in this situation becomes a trusted partner who helps the buyer explain the choice to colleagues, management, and other decision-makers."
              )}
            </p>
            <p>
              {t(
                "AI var palīdzēt sagatavoties šīm sarunām, taču uzticības veidošana, empātija un spēja pielāgoties konkrētai situācijai joprojām ir cilvēka kompetence. Tieši šī kombinācija — datu atbalstīta analīze un cilvēciska pieeja — nosaka panākumus mūsdienu B2B pārdošanā.",
                "AI can help prepare for these conversations, but building trust, empathy, and the ability to adapt to a specific situation remain human competencies. It is precisely this combination — data-supported analysis and a human approach — that determines success in modern B2B sales."
              )}
            </p>

            <h2>
              {t(
                "Ko tas nozīmē uzņēmumu īpašniekiem un vadītājiem",
                "What This Means for Business Owners and Leaders"
              )}
            </h2>
            <p>
              {t(
                "Uzņēmumu vadītājiem 2025. gadā ir jāskatās uz pārdošanu kā uz sistēmu, nevis atsevišķu funkciju. AI ieviešana ir svarīga, taču vēl būtiskāka ir komandas spēja pielāgoties, mācīties un strādāt vērtības radīšanas režīmā. Tas nozīmē ieguldījumus gan tehnoloģijās, gan cilvēku kompetencēs, īpaši konsultatīvā pārdošanā un starpdisciplinārā sadarbībā.",
                "In 2025, business leaders need to view sales as a system, not a separate function. AI implementation is important, but even more critical is the team's ability to adapt, learn, and work in a value-creation mode. This means investments in both technologies and human competencies, especially in consultative selling and cross-disciplinary collaboration."
              )}
            </p>
            <p>
              {t(
                "Pētījuma dati rāda, ka organizācijas, kuras spēj saglabāt elastību un fokusēties uz pircēja vērtību, spēj uzlabot rezultātus pat ekonomiskās nenoteiktības apstākļos. Šāda pieeja ļauj ne tikai pārdot vairāk, bet arī veidot ilgtermiņa attiecības, kas kļūst par stabilu pamatu uzņēmuma izaugsmei.",
                "Research data shows that organizations that can maintain flexibility and focus on buyer value can improve results even in conditions of economic uncertainty. This approach allows not only to sell more but also to build long-term relationships that become a stable foundation for company growth."
              )}
            </p>

            <p className="text-sm text-muted-foreground italic mt-8 border-t border-border pt-6">
              {t(
                "Raksts balstīts uz HubSpot pētījumu \"2025 State of Sales\", kurā analizēti gandrīz 1000 B2B un B2C pārdošanas profesionāļu dati un tendences dažādos tirgos.",
                "Article based on HubSpot's \"2025 State of Sales\" research, which analyzed data and trends from nearly 1,000 B2B and B2C sales professionals across various markets."
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
