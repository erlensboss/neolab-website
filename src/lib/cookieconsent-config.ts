/**
 * Cookie consent configuration with NEOLab branding
 * Uses vanilla-cookieconsent library with LV/EN translations
 */

import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";
import { loadGA4, removeGACookies } from "./analytics";

/**
 * Detect language from HTML lang attribute
 */
function detectLanguage(): "lv" | "en" {
  const htmlLang = document.documentElement.lang?.toLowerCase();
  return htmlLang === "en" ? "en" : "lv";
}

/**
 * Initialize cookie consent banner
 */
export function initCookieConsent(): void {
  CookieConsent.run({
    guiOptions: {
      consentModal: {
        layout: "cloud",
        position: "bottom center",
        equalWeightButtons: true,
        flipButtons: false,
      },
      preferencesModal: {
        layout: "box",
        position: "right",
        equalWeightButtons: true,
        flipButtons: false,
      },
    },

    categories: {
      necessary: {
        enabled: true,
        readOnly: true,
      },
      analytics: {
        enabled: false,
        readOnly: false,
        autoClear: {
          cookies: [{ name: /^_ga/ }, { name: "_gid" }, { name: "_gat" }],
        },
      },
    },

    language: {
      default: detectLanguage(),
      autoDetect: "document",
      translations: {
        lv: {
          consentModal: {
            title: "Mēs izmantojam sīkdatnes",
            description:
              "Mēs izmantojam sīkdatnes, lai uzlabotu jūsu pārlūkošanas pieredzi un analizētu vietnes apmeklējumu. Izvēlieties, kuras sīkdatnes vēlaties atļaut.",
            acceptAllBtn: "Pieņemt visas",
            acceptNecessaryBtn: "Tikai nepieciešamās",
            showPreferencesBtn: "Pielāgot izvēli",
          },
          preferencesModal: {
            title: "Sīkdatņu iestatījumi",
            acceptAllBtn: "Pieņemt visas",
            acceptNecessaryBtn: "Tikai nepieciešamās",
            savePreferencesBtn: "Saglabāt izvēli",
            closeIconLabel: "Aizvērt",
            sections: [
              {
                title: "Sīkdatņu izmantošana",
                description:
                  "Mēs izmantojam sīkdatnes, lai nodrošinātu vietnes pamatfunkcijas un uzlabotu jūsu pieredzi. Jūs varat izvēlēties katrai kategorijai, vai vēlaties to atļaut.",
              },
              {
                title: "Nepieciešamās sīkdatnes",
                description:
                  "Šīs sīkdatnes ir būtiskas vietnes darbībai. Tās nevar atspējot.",
                linkedCategory: "necessary",
              },
              {
                title: "Analītikas sīkdatnes",
                description:
                  "Šīs sīkdatnes ļauj mums analizēt, kā apmeklētāji izmanto mūsu vietni, lai to uzlabotu. Visa informācija tiek apkopota anonīmi.",
                linkedCategory: "analytics",
              },
            ],
          },
        },
        en: {
          consentModal: {
            title: "We use cookies",
            description:
              "We use cookies to enhance your browsing experience and analyze website traffic. Choose which cookies you want to allow.",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Necessary only",
            showPreferencesBtn: "Customize",
          },
          preferencesModal: {
            title: "Cookie settings",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Necessary only",
            savePreferencesBtn: "Save preferences",
            closeIconLabel: "Close",
            sections: [
              {
                title: "Cookie usage",
                description:
                  "We use cookies to ensure basic website functionality and to improve your experience. You can choose for each category whether you want to allow it.",
              },
              {
                title: "Necessary cookies",
                description:
                  "These cookies are essential for the website to function. They cannot be disabled.",
                linkedCategory: "necessary",
              },
              {
                title: "Analytics cookies",
                description:
                  "These cookies allow us to analyze how visitors use our website to improve it. All information is collected anonymously.",
                linkedCategory: "analytics",
              },
            ],
          },
        },
      },
    },

    onConsent: () => {
      if (CookieConsent.acceptedCategory("analytics")) {
        loadGA4();
      }
    },

    onChange: ({ changedCategories }) => {
      if (changedCategories.includes("analytics")) {
        if (CookieConsent.acceptedCategory("analytics")) {
          loadGA4();
        } else {
          removeGACookies();
        }
      }
    },
  });
}

// Re-export for footer link
export { CookieConsent };
