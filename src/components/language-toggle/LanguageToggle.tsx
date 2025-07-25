import { useTranslation } from "../../i18n/useTranslation";
import styles from "./LanguageToggle.module.css";

export function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "nl" : "en");
  };

  return (
    <button
      type="button"
      className={styles.languageToggle}
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === "en" ? "Dutch" : "English"}`}
    >
      {language === "en" ? "NL" : "EN"}
    </button>
  );
}
