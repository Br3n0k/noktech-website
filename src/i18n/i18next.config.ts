import i18next from 'i18next';
import ptBR from '../../public/locales/pt-BR/translation.json';
import en from '../../public/locales/en/translation.json';

await i18next.init({
  lng: 'pt-BR',
  fallbackLng: 'pt-BR',
  resources: {
    'pt-BR': {
      translation: ptBR
    },
    'en': {
      translation: en
    }
  },
  interpolation: {
    escapeValue: false
  }
});

export default i18next; 