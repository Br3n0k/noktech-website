import i18next from 'i18next';
import { pt } from './pt';
import { en } from './en';
import { es } from './es';

i18next.init({
  lng: 'pt',
  resources: {
    pt: { translation: pt },
    en: { translation: en },
    es: { translation: es }
  },
  interpolation: {
    escapeValue: false
  }
});

export function getLanguageFromURL(pathname: string) {
  const langMatch = pathname.match(/^\/(pt|en|es)\//);
  return langMatch ? langMatch[1] : 'pt';
}

export function useTranslations(lang: string) {
  i18next.changeLanguage(lang);
  return function t(key: string) {
    const value = i18next.t(key, { returnObjects: true });
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value;
    if (typeof value === 'object') return value;
    return key;
  };
} 