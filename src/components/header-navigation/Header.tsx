import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useTheme } from "../../theme/use-theme";
import { useTranslation } from "../../i18n/useTranslation";
import { Toggle, type ToggleIcon } from "../toggle/Toggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { mode, toggleMode } = useTheme();
  const { language, setLanguage } = useTranslation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoSrc =
    mode === "dark"
      ? new URL("../../assets/portfolio-logo-dark.png", import.meta.url).href
      : new URL("../../assets/portfolio-logo-light.png", import.meta.url).href;

  const languageIcons: [ToggleIcon, ToggleIcon] = [
    {
      key: "en",
      iconName: "english",
      label: "English",
    },
    {
      key: "nl",
      iconName: "dutch",
      label: "Dutch",
    },
  ];

  const getIconColor = (isActive: boolean) => {
    if (isActive) return "#000000";
    return mode === "dark" ? "#ffffff" : "#666666";
  };

  const themeIcons: [ToggleIcon, ToggleIcon] = [
    {
      key: "light",
      iconName: "sun",
      label: "Light mode",
      iconColor: getIconColor(mode === "light"),
    },
    {
      key: "dark",
      iconName: "moon",
      label: "Dark mode",
      iconColor: getIconColor(mode === "dark"),
    },
  ];

  const handleLanguageToggle = (key: string) => {
    setLanguage(key as "en" | "nl");
  };

  const handleThemeToggle = () => {
    toggleMode();
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div>
        <Toggle
          icons={languageIcons}
          activeKey={language}
          onToggle={handleLanguageToggle}
          ariaLabel={`Switch to ${language === "en" ? "Dutch" : "English"}`}
        />
      </div>
      <div>
        <img src={logoSrc} alt="Logo" className={styles.logo} />
      </div>
      <div>
        <Toggle
          icons={themeIcons}
          activeKey={mode}
          onToggle={handleThemeToggle}
          ariaLabel={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
        />
      </div>
    </header>
  );
}
