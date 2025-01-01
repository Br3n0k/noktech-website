import i18next from 'i18next';

export function getLanguageFromURL(pathname: string) {
  const langMatch = pathname.match(/^\/(pt-BR|en)\//);
  return langMatch ? langMatch[1] : 'pt-BR';
}

export function useTranslations(lang: string) {
  return function t(key: string) {
    return i18next.getFixedT(lang)(key);
  };
} 