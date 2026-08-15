'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type Lang = 'ar' | 'en';

const C = createContext({ lang: 'ar' as Lang, setLang: (_l: Lang) => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return <C.Provider value={{ lang, setLang }}>{children}</C.Provider>;
}

export const useLanguage = () => useContext(C);
