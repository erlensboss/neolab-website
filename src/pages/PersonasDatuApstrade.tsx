import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/shared/SEOHead";
export default function PersonasDatuApstrade() {
  const {
    t
  } = useLanguage();
  return <>
      <SEOHead titleLv="Personas datu apstrāde | NEOLab" titleEn="Personal Data Processing | NEOLab" descriptionLv="Informācija par personas datu apstrādi NEOLab vietnē." descriptionEn="Information about personal data processing on NEOLab website." />

      <main className="min-h-screen bg-background">
        <div className="container-neo py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 my-[50px]">
              {t("Personas datu apstrāde", "Personal Data Processing")}
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed">
                {t(`Atbilstoši Eiropas Parlamenta un Padomes Regulai 2016/679, uzņēmums SIA "Grandem Group" (E-pasts info@grandem.lv Tel.: +371 26009276) saņem, 2 gadus uzglabā un apstrādā manis nodotos personas datus (E-pasts, vārdu, uzvārdu un tālruņa numuru), ar mērķi nodrošināt saziņu, sniegt pilnvērtīgāku saturu un atbilstošākas reklāmas.`, `In accordance with Regulation 2016/679 of the European Parliament and of the Council, the company SIA "Grandem Group" (E-mail info@grandem.lv Tel.: +371 26009276) receives, stores for 2 years and processes my personal data (E-mail, first name, last name and phone number), with the purpose of ensuring communication, providing more complete content and more relevant advertising.`)}
              </p>
              
              <p className="leading-relaxed mt-6">
                {t("Piekrītot datu apstrādei, tieku informēts, ka mani personas dati netiks nosūtīti citiem ES uzņēmumiem, vai uz trešo valsti, vai starptautisku organizāciju.", "By agreeing to data processing, I am informed that my personal data will not be sent to other EU companies, or to a third country, or to an international organization.")}
              </p>

              <p className="leading-relaxed mt-6">
                {t("Apzinos savas tiesības saistībā ar manu personas datu dzēšanu, labošanu, apstrādes ierobežošanu, u.c.", "I acknowledge my rights regarding the deletion, correction, restriction of processing of my personal data, etc.")}
              </p>

              <p className="mt-6">
                <a href="http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2016.119.01.0001.01.ENG" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {t("Vairāk informācijas par GDPR regulu", "More information about GDPR regulation")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>;
}