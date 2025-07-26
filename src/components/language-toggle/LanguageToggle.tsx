import { useTranslation } from "../../i18n/useTranslation";
import styles from "./LanguageToggle.module.css";

const FlagIcon = ({ country }: { country: "nl" | "en" }) => {
  if (country === "nl") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={styles.flagIcon}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="#fff"
          stroke="#ddd"
          strokeWidth="1"
        />
        <defs>
          <clipPath id="nl-clip">
            <circle cx="12" cy="12" r="10" />
          </clipPath>
        </defs>
        <g clipPath="url(#nl-clip)">
          <rect x="2" y="2" width="20" height="6.67" fill="#ae1c28" />
          <rect x="2" y="8.67" width="20" height="6.67" fill="#fff" />
          <rect x="2" y="15.33" width="20" height="6.67" fill="#21468b" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={styles.flagIcon}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="#fff"
        stroke="#ddd"
        strokeWidth="1"
      />
      <defs>
        <clipPath id="gb-clip">
          <circle cx="12" cy="12" r="10" />
        </clipPath>
      </defs>
      <g clipPath="url(#gb-clip)">
        <rect x="2" y="2" width="20" height="20" fill="#012169" />
        <path d="M2 2l20 20M22 2L2 22" stroke="#fff" strokeWidth="2" />
        <path d="M2 2l20 20M22 2L2 22" stroke="#c8102e" strokeWidth="1" />
        <path d="M12 2v20M2 12h20" stroke="#fff" strokeWidth="3" />
        <path d="M12 2v20M2 12h20" stroke="#c8102e" strokeWidth="2" />
      </g>
    </svg>
  );
};

export function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "nl" : "en");
  };

  return (
    <button
      type="button"
      className={styles.toggleSwitch}
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === "en" ? "Dutch" : "English"}`}
      role="switch"
      aria-checked={language === "nl"}
    >
      <span
        className={`${styles.languageLabel} ${
          language === "en" ? styles.active : ""
        }`}
      >
        <FlagIcon country="en" />
      </span>
      <span
        className={`${styles.languageLabel} ${
          language === "nl" ? styles.active : ""
        }`}
      >
        <FlagIcon country="nl" />
      </span>
      <span className={styles.toggleSlider} />
    </button>
  );
}
