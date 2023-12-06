import { locale } from 'expo-localization';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { enUS, ptBR } from './locales';

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: locale,
  compatibilityJSON: 'v3',
  resources: {
    'en-US': enUS,
    'pt-BR': ptBR,
  },
});
