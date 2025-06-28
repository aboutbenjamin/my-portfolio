export type ThemeMode = "light" | "dark";

export type Theme = {
  colors: {
    background: string;
    foreground: string;
    primary: string;
    secondary: string;
    accent: string;
    muted: string;
    border: string;
    overlay: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
};

export const lightTheme: Theme = {
  colors: {
    background: "#fff",
    foreground: "#1a0d0d",
    primary: "#80f4ff",
    secondary: "#f04cff",
    accent: "#ffb347",
    muted: "#f6f6f6",
    border: "#e0e0e0",
    overlay: "rgba(0,0,0,0.05)",
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "2rem",
    lg: "4rem",
    xl: "8rem",
  },
};

export const darkTheme: Theme = {
  colors: {
    background: "#18181b",
    foreground: "#f4f4f5",
    primary: "#80f4ff",
    secondary: "#f04cff",
    accent: "#ffb347",
    muted: "#23232a",
    border: "#33334d",
    overlay: "rgba(0,0,0,0.7)",
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "2rem",
    lg: "4rem",
    xl: "8rem",
  },
};
