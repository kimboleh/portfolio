import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'es'],
        fallbackLng: 'en',
        debug: true,
        backend: {
        loadPath: '/translations/{{lng}}/translation.json',
        },
        interpolation: {
        escapeValue: false,
        },
    });

export default i18n;
