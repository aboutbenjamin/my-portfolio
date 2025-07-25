import React, { useState, useEffect, useMemo } from "react";
import { TranslationContext } from "./TranslationContext";
import type { Language } from "./TranslationContext";
import { en } from "./translations/en";
import { nl } from "./translations/nl";

type TranslationProviderProps = {
  children: React.ReactNode;
};

const translations = { en, nl };

export function TranslationProvider({ children }: TranslationProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("language") as Language) || "en";
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = useMemo(() => {
    return (key: string): string => {
      const keys = key.split(".");
      let value: unknown = translations[language];

      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key;
        }
      }

      return typeof value === "string" ? value : key;
    };
  }, [language]);

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, t]
  );

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
}
