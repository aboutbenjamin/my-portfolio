import styles from "../CaseScreen.module.css";
import { SOLUTION_DETAILS } from "../../../constansts/cases";
import { useParams } from "react-router-dom";

export function CaseSolutionDetails() {
  const { id } = useParams();
  const caseId = Number(id);
  const details =
    Number.isFinite(caseId) && caseId >= 0 && caseId < SOLUTION_DETAILS.length
      ? SOLUTION_DETAILS[caseId]
      : SOLUTION_DETAILS[0];

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
