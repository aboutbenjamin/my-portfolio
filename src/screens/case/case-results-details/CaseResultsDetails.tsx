import styles from "../CaseScreen.module.css";
import { CASES } from "../../../constansts/cases";
import { useParams } from "react-router-dom";

export function CaseResultsDetails() {
  const { id } = useParams();
  const caseId = Number(id);
  const caseData =
    Number.isFinite(caseId) && caseId >= 0 && caseId < CASES.length
      ? CASES[caseId]
      : null;

  if (!caseData) return null;

  return (
    <section className={styles["case-details-section"]}>
      <section className={styles["case-details-left"]}>
        <p className={styles["case-details-label"]}>Results</p>
      </section>
      <section className={styles["case-details-right"]}>
        <p>{caseData.results || "Results coming soon."}</p>
      </section>
    </section>
  );
}
