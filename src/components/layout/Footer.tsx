import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { footerServiceLinks, footerCompanyLinks } from "@/lib/routeMapping";
import LogoBlack from "@/assets/logo-black.svg";

export function Footer() {
  const { language, t, getLocalizedPath } = useLanguage();

  return (
    <footer className="relative border-t border-border bg-background">
      {/* Orange accent line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-orange rounded-b-full" />
      
      <div className="container-neo py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <Link to={getLocalizedPath("/")} className="inline-block mb-4">
              <img src={LogoBlack} alt="NEOLab" className="h-6" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(
                "Inovatīva digitālā aģentūra, kas apvieno AI tehnoloģijas ar stratēģisku domāšanu jūsu biznesa izaugsmei.",
                "Innovative digital agency combining AI technology with strategic thinking for your business growth."
              )}
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              {t("Pakalpojumi", "Services")}
            </h4>
            <ul className="space-y-2.5">
              {footerServiceLinks.map((link) => (
                <li key={link.lv}>
                  <Link
                    to={getLocalizedPath(link.lv)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {language === "lv" ? link.labelLv : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              {t("Uzņēmums", "Company")}
            </h4>
            <ul className="space-y-2.5">
              {footerCompanyLinks.map((link) => (
                <li key={link.lv}>
                  <Link
                    to={getLocalizedPath(link.lv)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {language === "lv" ? link.labelLv : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              {t("Kontakti", "Contact")}
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>info@neolab.lv</li>
              <li>+371 27306077</li>
              <li>Rīga, Latvija</li>
            </ul>
            <Link 
              to={getLocalizedPath("/bezmaksas-konsultacija")}
              className="inline-block mt-4 text-primary font-medium text-sm hover:underline"
            >
              {t("Sazināties →", "Get in touch →")}
            </Link>
          </div>
        </div>

        {/* Bottom row with copyright */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NEOLab. {t("Visas tiesības aizsargātas.", "All rights reserved.")}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>{t("Privātuma politika", "Privacy Policy")}</span>
            <span className="w-1 h-1 rounded-full bg-primary/50" />
            <span>{t("Lietošanas noteikumi", "Terms of Use")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
