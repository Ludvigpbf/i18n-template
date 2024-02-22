import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Uncomment the following line for React Native projects
// import * as RNLocalize from "react-native-localize";

// Import the translations
import svTranslation from "./sv/index";
import enTranslation from "./en/index";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...enTranslation,
        // add more english translations here
      },
    },
    sv: {
      translation: {
        ...svTranslation,
        // add more swedish translations here
      },
    },
  },
  // Uncomment the following line for React Native projects
  lng: "sv",
  // Uncomment the following line for React Native projects and use the device's locale as default
  // lng: RNLocalize.getLocales()[0]?.languageCode || 'en',
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
