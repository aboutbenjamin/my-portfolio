import React, { useEffect, useState } from "react";
import type { Theme, ThemeMode } from "./theme";
import { lightTheme, darkTheme } from "./theme";
import { ThemeContext } from "./ThemeContext";

export type ThemeContextType = {
  mode: ThemeMode;
  theme: Theme;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== "undefined") {
      return (
        (localStorage.getItem("theme") as ThemeMode) ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
      );
    }
    return "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", mode);
    const theme = mode === "dark" ? darkTheme : lightTheme;
    for (const [key, value] of Object.entries(theme.colors)) {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    }
    for (const [key, value] of Object.entries(theme.spacing)) {
      document.documentElement.style.setProperty(`--spacing-${key}`, value);
    }
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  const theme = mode === "dark" ? darkTheme : lightTheme;

  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ mode, theme, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
