import type { Theme, ThemeMode } from "./theme";

export type ThemeContextType = {
  mode: ThemeMode;
  theme: Theme;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
};

import { createContext } from "react";
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
