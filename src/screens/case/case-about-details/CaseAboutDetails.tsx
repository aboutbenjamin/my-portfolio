import styles from "../CaseScreen.module.css";
import { ABOUT_DETAILS } from "../../../constansts/cases";
import { useParams } from "react-router-dom";

export function CaseAboutDetails() {
  const { id } = useParams();
  const caseId = Number(id);
  const details =
    Number.isFinite(caseId) && caseId >= 0 && caseId < ABOUT_DETAILS.length
      ? ABOUT_DETAILS[caseId]
      : ABOUT_DETAILS[0];

  return (
    <section className={styles["case-details-section"]}>
      <section className={styles["case-details-left"]}>
        <p className={styles["case-details-label"]}>{details.label}</p>
        <h2 className={styles["case-details-title"]}>{details.title}</h2>
      </section>
      <section className={styles["case-details-right"]}>
        <p>{details.description}</p>
      </section>
    </section>
  );
}
