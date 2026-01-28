import { Link } from "react-router-dom";
import LogoBlack from "@/assets/logo-black.svg";

const footerLinks = {
  services: [
    { label: "SEO & GEO", path: "/seo-un-geo" },
    { label: "AI Automatizācijas", path: "/ai-automatizacija" },
    { label: "Digitālā reklāma", path: "/performance-reklama" },
    { label: "AI Lab", path: "/ai-lab" },
  ],
  company: [
    { label: "Par mums", path: "/par-mums" },
    { label: "Blog", path: "/blog" },
    { label: "Kontakti", path: "/bezmaksas-konsultacija" },
  ],
};

export function Footer() {
  return (
    <footer className="section-warm border-t border-border">
      <div className="container-neo section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/">
              <img src={LogoBlack} alt="NEOLab" className="h-6 mb-4" />
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Inovatīva digitālā aģentūra, kas apvieno AI tehnoloģijas ar 
              stratēģisku domāšanu. Personalizēti risinājumi katram klientam.
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NEOLab. Visas tiesības aizsargātas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Pakalpojumi</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Uzņēmums</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
