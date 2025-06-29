import styles from "../CaseScreen.module.css";
import { PROCESS_DETAILS } from "../../../constansts/cases";
import { useParams } from "react-router-dom";

export function CaseProcessDetails() {
  const { id } = useParams();
  const caseId = Number(id);
  const details =
    Number.isFinite(caseId) && caseId >= 0 && caseId < PROCESS_DETAILS.length
      ? PROCESS_DETAILS[caseId]
      : PROCESS_DETAILS[0];

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
