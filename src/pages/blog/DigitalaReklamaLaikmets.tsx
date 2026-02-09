import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DigitalaReklamaLaikmets() {
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
                  {t("Reklāma", "Advertising")}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {t("2024. gada 5. decembris", "December 5, 2024")}
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
                  "Digitālās reklāmas jaunais laikmets: Google Ads, Meta un TikTok pārmaiņu kontekstā",
                  "The New Era of Digital Advertising: Google Ads, Meta and TikTok in the Context of Change"
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
                "Digitālā reklāma pēdējos gados ir mainījusies ne tikai tehnoloģiski, bet arī konceptuāli. Platformas arvien vairāk pārņem lēmumu pieņemšanu, automatizējot mērķēšanu, radošo optimizāciju un budžetu sadali. Google Ads, Meta un TikTok virzās uz modeli, kur reklāmdevēja loma pakāpeniski mainās no manuālas kontroles uz stratēģisku virzību un datu interpretāciju.",
                "Digital advertising in recent years has changed not only technologically but also conceptually. Platforms are increasingly taking over decision-making, automating targeting, creative optimization, and budget allocation. Google Ads, Meta, and TikTok are moving toward a model where the advertiser's role is gradually shifting from manual control to strategic direction and data interpretation."
              )}
            </p>

            <h2>
              {t(
                "No manuālas kontroles uz automatizētu reklāmas ekosistēmu",
                "From Manual Control to an Automated Advertising Ecosystem"
              )}
            </h2>
            <p>
              {t(
                "Agrāk digitālās reklāmas efektivitāte lielā mērā bija atkarīga no precīzas manuālas iestatīšanas. Mūsdienās platformas izmanto mākslīgo intelektu, lai automatizētu auditoriju atlasi, radošo elementu kombinēšanu un optimizāciju. Reklāmas sistēmas pašas meklē rezultātus, balstoties uz mērķiem, nevis konkrētiem iestatījumiem.",
                "Previously, the effectiveness of digital advertising largely depended on precise manual setup. Today, platforms use artificial intelligence to automate audience selection, creative element combination, and optimization. Advertising systems themselves seek results based on objectives rather than specific settings."
              )}
            </p>

            <h2>
              {t(
                "Google Ads: no atslēgvārdiem uz nodomu izpratni",
                "Google Ads: From Keywords to Intent Understanding"
              )}
            </h2>
            <p>
              {t(
                "Google Ads attīstība virzās prom no klasiskas atslēgvārdu loģikas uz lietotāja nodoma interpretāciju. Performance balstīti risinājumi un plašāka automatizācija maina reklāmdevēja uzdevumu — svarīgāka kļūst datu kvalitāte, piedāvājuma skaidrība un konversijas signāli. Reklāma kļūst cieši saistīta ar kopējo digitālo stratēģiju.",
                "Google Ads development is moving away from classic keyword logic toward user intent interpretation. Performance-based solutions and broader automation are changing the advertiser's task — data quality, offer clarity, and conversion signals become more important. Advertising becomes closely linked to the overall digital strategy."
              )}
            </p>

            <h2>
              {t(
                "Meta reklāma un algoritmiskā auditoriju veidošana",
                "Meta Advertising and Algorithmic Audience Building"
              )}
            </h2>
            <p>
              {t(
                "Meta platformas arvien vairāk balstās uz algoritmisku auditoriju modelēšanu, samazinot manuālu segmentēšanu. Reklāmas efektivitāti nosaka nevis detalizēti iestatījumi, bet gan radošā kvalitāte, vēstījuma skaidrība un sistēmai sniegtie signāli. Reklāmas kampaņas kļūst dinamiskas un pielāgojas lietotāju uzvedībai reāllaikā.",
                "Meta platforms increasingly rely on algorithmic audience modeling, reducing manual segmentation. Advertising effectiveness is determined not by detailed settings but by creative quality, message clarity, and signals provided to the system. Advertising campaigns become dynamic and adapt to user behavior in real time."
              )}
            </p>

            <h2>
              {t(
                "TikTok kā uzvedības balstītas reklāmas vide",
                "TikTok as a Behavior-Based Advertising Environment"
              )}
            </h2>
            <p>
              {t(
                "TikTok būtiski atšķiras ar to, ka reklāmas efektivitāte balstās uz uzvedību, nevis sociālajiem sakariem. Algoritms analizē skatīšanās paradumus un iesaisti, ļaujot saturam sasniegt auditoriju bez iepriekšējas intereses. Tas padara platformu īpaši spēcīgu jaunu piedāvājumu testēšanā un zīmola redzamības veidošanā.",
                "TikTok fundamentally differs in that advertising effectiveness is based on behavior rather than social connections. The algorithm analyzes viewing habits and engagement, allowing content to reach audiences without prior interest. This makes the platform particularly powerful for testing new offerings and building brand visibility."
              )}
            </p>

            <h2>
              {t(
                "Radošā nozīme automatizētā reklāmas vidē",
                "The Role of Creativity in an Automated Advertising Environment"
              )}
            </h2>
            <p>
              {t(
                "Automatizācija nenozīmē radošuma samazināšanos — tieši pretēji. Jo vairāk sistēmas pārņem tehnisko optimizāciju, jo lielāka nozīme ir vēstījumam, formai un kontekstam. Radošais saturs kļūst par galveno diferenciatoru starp veiksmīgu un neefektīvu reklāmu.",
                "Automation does not mean a decrease in creativity — quite the opposite. The more systems take over technical optimization, the greater the importance of message, form, and context. Creative content becomes the main differentiator between successful and ineffective advertising."
              )}
            </p>

            <h2>
              {t(
                "Ko tas nozīmē uzņēmumiem un vadītājiem",
                "What This Means for Businesses and Leaders"
              )}
            </h2>
            <p>
              {t(
                "Uzņēmumiem jaunais reklāmas laikmets nozīmē nepieciešamību domāt stratēģiski, nevis taktiski. Reklāma vairs nav izolēts kanāls, bet daļa no kopējās digitālās ekosistēmas. Ilgtspējīgi rezultāti rodas tad, ja reklāma, saturs un piedāvājums darbojas kā vienota sistēma.",
                "For businesses, the new era of advertising means the need to think strategically rather than tactically. Advertising is no longer an isolated channel but part of the overall digital ecosystem. Sustainable results emerge when advertising, content, and offering work as a unified system."
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