import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/shared/SEOHead";
export default function Sikdatnes() {
  const {
    t
  } = useLanguage();
  return <>
      <SEOHead titleLv="Sīkdatnes | NEOLab" titleEn="Cookies | NEOLab" descriptionLv="Informācija par sīkdatņu izmantošanu NEOLab vietnē." descriptionEn="Information about cookie usage on NEOLab website." />

      <main className="min-h-screen bg-background">
        <div className="container-neo py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 my-[50px]">
              {t("Sīkdatnes", "Cookies")}
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
              {/* Section 1 */}
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  {t("Kas ir sīkdatnes?", "What are cookies?")}
                </h2>
                <p>
                  {t("Sīki pagaidu teksta faili, kas tiek saglabāti Jūsu datorā vai mobilajā ierīcē, lai nodrošinātu pareizu interneta vietnes funkcionēšanu, un kas satur informāciju par interneta vietnēm, kuras apmeklējāt. Sīkdatnes padara lietotājam vienkāršāku interneta lietošanu, piemēram, ielogojoties savā lietotāja profilā interneta vietnē, pārlūkprogramma pasaka priekšā lietotāja vārdu, bet sīkdatnes izmanto arī citos nolūkos, piemēram, interneta vietnes īpašnieki iegūst vairāk informācijas par savas interneta vietnes apmeklētāju interesēm.", "Small temporary text files that are stored on your computer or mobile device to ensure the proper functioning of the website, and which contain information about the websites you have visited. Cookies make it easier for users to use the internet, for example, when logging into your user profile on a website, the browser suggests your username, but cookies are also used for other purposes, such as website owners gaining more information about their website visitors' interests.")}
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  {t("Kā mēs izmantojam sīkdatnes?", "How do we use cookies?")}
                </h2>
                <p className="mb-4">
                  {t("NEOLab izmanto Google Analytics pakalpojumus, padarot pieejamu informāciju par pakalpojumiem meklēšanas tīmeklī, minētais pakalpojums paredz sīkdatņu saglabāšanu Jūsu ierīcē.", "NEOLab uses Google Analytics services, making information about search web services available, this service provides for storing cookies on your device.")}
                </p>
                <p className="mb-4">
                  {t("Sīkdatnē tiek saglabāta informācija par to, ka apmeklējām mūsu interneta vietni, kad tas notika, iegaumē lietotāja IP adresi, kādas interneta vietnes sadaļas aplūkotas, šī informācija nonāk Google Inc. (Īrija) rīcībā un 60 dienas glabājas uz Google serveriem (Eiropas Savienībā un ASV). Pirms datu nodošanas Google, IP adreses tiek anonimizētas, aizvietojot tās ar specifisku kodu, kurš tiek piešķirts katram atsevišķam lietotājam.", "The cookie stores information that you visited our website, when it happened, remembers the user's IP address, which sections of the website were viewed, this information is received by Google Inc. (Ireland) and stored on Google servers (in the European Union and USA) for 60 days. Before transferring data to Google, IP addresses are anonymized by replacing them with a specific code assigned to each individual user.")}
                </p>
                <p className="mb-4">
                  {t("Google no savas puses apliecina datu apstrādes, tai skaitā datu nodošanas trešajām personām, atbilstību Eiropas Savienības un ASV normatīvo aktu prasībām, kā arī atsevišķi atzīmē, ka saņemtie dati netiek izmantoti Google pakalpojumu sniegšanai.", "Google confirms that its data processing, including data transfer to third parties, complies with the requirements of European Union and US regulations, and separately notes that the received data is not used for providing Google services.")}
                </p>
                <p>
                  {t("Jūs varat novērst sīkdatņu nodošanu Google, izmantojot spraudni ", "You can prevent the transfer of cookies to Google by using the plugin ")}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Google Analytics Opt-out Browser Add-on
                  </a>
                  .
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  {t("Kā kontrolēt sīkdatnes?", "How to control cookies?")}
                </h2>
                <p className="mb-4">
                  {t("Jums ir iespēja izdzēst sīkdatnes no sava datora vai citas ierīces, kā arī izmantot vairākuma pārlūkprogrammu piedāvātos uzstādījumus, kas liedz veidot sīkdatnes.", "You have the option to delete cookies from your computer or other device, as well as use the settings offered by most browsers that prevent the creation of cookies.")}
                </p>
                <p className="mb-4">
                  {t("Praktiski visas pārlūkprogrammas paredz iespēju:", "Practically all browsers provide the ability to:")}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("Aplūkot saglabātās sīkdatnes un izdzēst tās;", "View saved cookies and delete them;")}</li>
                  <li>{t("Liegt sīkdatņu veidošanu trešajām personām;", "Prevent third parties from creating cookies;")}</li>
                  <li>{t("Liegt sīkdatņu veidošanu mārketinga vietnēm;", "Prevent marketing sites from creating cookies;")}</li>
                  <li>{t("Bloķēt jebkuru sīkdatņu veidošanu;", "Block any cookie creation;")}</li>
                  <li>{t("Izdzēst visas sīkdatnes, izejot no pārlūkprogrammas.", "Delete all cookies when exiting the browser.")}</li>
                </ul>
                <p className="mt-4">
                  {t("Der atcerēties, ka izdzēšot visas sīkdatnes, tiks dzēsti arī Jūsu uzstādījumi atsevišķās interneta vietnēs. Papildus nepieciešams ņemt vērā, ka gadījumā, ja nobloķēsiet jebkuru sīkdatņu veidošanu, daudzas vietnes (ieskaitot mūsu) var sākt darboties nekorekti un pakalpojuma sniegšana var pārtrūkt, šī iemesla dēļ nerekomendējam izvēlēties opciju bloķēt jebkuru sīkdatņu veidošanu.", "It is worth remembering that by deleting all cookies, your settings on individual websites will also be deleted. Additionally, it should be noted that if you block any cookie creation, many websites (including ours) may start functioning incorrectly and service provision may be interrupted, for this reason we do not recommend choosing the option to block any cookie creation.")}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>;
}