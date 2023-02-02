import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en_locales from './locales/en.locale.json';

const resources = {
    en: { translation: en_locales }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });