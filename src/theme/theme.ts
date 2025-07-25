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
    contactCardBg: string;
    contactCardText: string;
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
    foreground: "#0E0E0E",
    primary: "#f04cff",
    secondary: "#80f4ff",
    accent: "#ffb347",
    muted: "#757575",
    border: "#e0e0e0",
    overlay: "rgba(0,0,0,0.05)",
    contactCardBg: "#f6f6f6",
    contactCardText: "#0E0E0E",
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
    background: "#0E0E0E",
    foreground: "#f4f4f5",
    primary: "#80f4ff",
    secondary: "#f04cff",
    accent: "#ffb347",
    muted: "#D4D4D4",
    border: "#33334d",
    overlay: "rgba(0,0,0,0.7)",
    contactCardBg: "#23232a",
    contactCardText: "#fff",
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "2rem",
    lg: "4rem",
    xl: "8rem",
  },
};
