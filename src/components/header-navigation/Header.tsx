import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useTheme } from "../../theme/use-theme";
import { ThemeToggleButton } from "../theme-toggle-button/ThemeToggleButton";
import { IconButton } from "../icon-button/IconButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { mode } = useTheme();

  const barsColor = mode === "dark" ? "#fff" : "#000";

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

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div>
        <IconButton
          icon="bars"
          iconColor={barsColor}
          aria-label="Open navigation"
        />
      </div>
      <div>
        <img src={logoSrc} alt="Logo" className={styles.logo} />
      </div>
      <div>
        <ThemeToggleButton />
      </div>
    </header>
  );
}
