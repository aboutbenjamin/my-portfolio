import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";
import { Icon } from "../icons/Icon";

export function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={styles.backButton}
      aria-label="Terug naar overzicht"
      onClick={() => navigate("/")}
    >
      <Icon name="left-arrow" className={styles["icon-svg"]} />
      <span className="relative">Back to overview</span>
    </button>
  );
}
