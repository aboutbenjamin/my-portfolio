import styles from "../CaseScreen.module.css";
import { CHALLENGE_DETAILS } from "../../../constansts/cases";
import { useParams } from "react-router-dom";
import { useTranslation } from "../../../i18n/useTranslation";

export function CaseChallengeDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const caseId = Number(id);
  const details = CHALLENGE_DETAILS.find((detail) => detail.id === caseId + 1);

  if (!details) {
    return null;
  }

  return (
    <section className={styles["case-details-section"]}>
      <section className={styles["case-details-left"]}>
        <p className={styles["case-details-label"]}>{t(details.labelKey)}</p>
        <h2 className={styles["case-details-title"]}>{t(details.titleKey)}</h2>
      </section>
      <section className={styles["case-details-right"]}>
        <p>{t(details.descriptionKey)}</p>
      </section>
    </section>
  );
}
