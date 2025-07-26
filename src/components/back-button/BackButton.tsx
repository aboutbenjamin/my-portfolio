import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";
import { Icon } from "../icons/Icon";
import { useTranslation } from "../../i18n/useTranslation";

export function BackButton() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <button
      type="button"
      className={styles.backButton}
      aria-label={t("navigation.backToOverview")}
      onClick={() => navigate("/")}
    >
      <Icon name="left-arrow" className={styles["icon-svg"]} />
      <span className="relative">{t("navigation.backToOverview")}</span>
    </button>
  );
}
