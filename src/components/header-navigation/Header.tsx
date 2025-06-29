import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Icon } from "../icons/Icon";
import { useTheme } from "../../theme/use-theme";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { mode } = useTheme();

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
      <div className={styles.left}>
        <Icon name="bars" />
      </div>
      <div className={styles.center}>
        <img src={logoSrc} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.right} />
    </header>
  );
}
