import { createContext } from "react";

export type Language = "en" | "nl";

export type TranslationContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

export const TranslationContext = createContext<
  TranslationContextType | undefined
>(undefined);
