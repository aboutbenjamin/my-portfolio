import { useMemo } from "react";
import styles from "./CaseResultsDetails.module.css";
import { CASES, RESULTS_DETAILS } from "../../../constansts/cases";
import { useParams } from "react-router-dom";
import { useTranslation } from "../../../i18n/useTranslation";
import type { CaseResultCard } from "../../../types/case";

export function CaseResultsDetails() {
  const { id } = useParams<{ id?: string }>();
  const { t } = useTranslation();
  const caseId = useMemo(() => Number(id), [id]);

  const details = useMemo(
    () => RESULTS_DETAILS.find((detail) => detail.id === caseId + 1),
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

  if (!details || resultCards.length === 0) {
    return null;
  }

  return (
    <section>
      <header className={styles.resultsGrid}>
        <p className={styles.resultsLabel} id="results-heading">
          {t(details.labelKey)}
        </p>
        <h2 className={styles.resultsTitle}>{t(details.titleKey)}</h2>
      </header>
      <ul className={styles.cardsGrid}>
        {resultCards.map((card: CaseResultCard) => (
          <li
            key={`${card.value}-${card.labelKey}`}
            className={styles.resultCard}
          >
            <span className={styles.resultCardValue}>{card.value}</span>
            <p className={styles.resultCardLabel}>{t(card.labelKey)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
