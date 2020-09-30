import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import EStranslator from './EStranslator.json';
import ENtranslator from './ENtranslator.json';

const translator = {
    en: {
        translation: ENtranslator,
    },
    es: {
        translation: EStranslator,
    },
};

i18next
    .use(initReactI18next)
    .init({ resources: translator, lng: 'es', keySeparator: false, interpolation: { escapeValue: false } });

export default i18next;
