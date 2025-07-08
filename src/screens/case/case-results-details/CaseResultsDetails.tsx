import { useMemo } from "react";
import styles from "./CaseResultsDetails.module.css";
import { CASES, RESULTS_DETAILS } from "../../../constansts/cases";
import { useParams } from "react-router-dom";
import type { CaseResultCard } from "../../../types/case";

export function CaseResultsDetails() {
  const { id } = useParams<{ id?: string }>();
  const caseId = useMemo(() => Number(id), [id]);

  const details = useMemo(
    () =>
      Number.isFinite(caseId) && caseId >= 0 && caseId < RESULTS_DETAILS.length
        ? RESULTS_DETAILS[caseId]
        : RESULTS_DETAILS[0],
    [caseId]
  );

  const caseData = useMemo(
    () =>
      Number.isFinite(caseId) && caseId >= 0 && caseId < CASES.length
        ? CASES[caseId]
        : CASES[0],
    [caseId]
  );

  const resultCards = caseData.results ?? [];

  return (
    <section>
      <header className={styles.resultsGrid}>
        <p className={styles.resultsLabel} id="results-heading">
          {details.label}
        </p>
        <h2 className={styles.resultsTitle}>{details.title}</h2>
      </header>
      <ul className={styles.cardsGrid}>
        {resultCards.length > 0 &&
          resultCards.map((card: CaseResultCard) => (
            <li
              key={`${card.value}-${card.label}`}
              className={styles.resultCard}
            >
              <span className={styles.resultCardValue}>{card.value}</span>
              <p className={styles.resultCardLabel}>{card.label}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}
