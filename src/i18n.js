import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import enTranslations from "./locales/en.json";
import deTranslations from "./locales/de.json";

i18n
  .use(initReactI18next) // Connects i18n to React
  .use(LanguageDetector) // Automatically detects the user's language
  .init({
    resources: {
      en: { translation: enTranslations },
      de: { translation: deTranslations },
    },
    fallbackLng: "de", // Fallback language if detection fails
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"], // Language detection order
      caches: ["cookie", "localStorage"], // Persist language selection in cookie/localStorage
    },
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
    debug: true, // Turn off for production
  });

export default i18n;
