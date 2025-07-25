import { BackButton } from "../../../components/back-button/BackButton";
import type { CaseData } from "../../../types/case";
import styles from "./CaseHeader.module.css";
import { useTranslation } from "../../../i18n/useTranslation";

type CaseHeaderProps = {
  showHeaderContent: boolean;
  imgRef: React.RefObject<HTMLImageElement | null>;
  caseData: CaseData;
};

export function CaseHeader({
  showHeaderContent,
  imgRef,
  caseData,
}: CaseHeaderProps) {
  const { t } = useTranslation();
  return (
    <>
      <header>
        {showHeaderContent && <BackButton />}
        <section className={styles["image-container"]}>
          <img
            ref={imgRef}
            src={
              new URL(`../../../assets/${caseData.image}`, import.meta.url).href
            }
            alt={t(caseData.titleKey)}
            className={styles["case-image-bg"]}
          />
          <div
            className={`${styles.overlay} ${
              showHeaderContent ? styles["overlay-visible"] : ""
            }`}
            aria-hidden="true"
          />
        </section>
      </header>
      {showHeaderContent && (
        <div className={styles["case-content"]}>
          <h1 className={styles["case-title-animated"]}>
            {t(caseData.titleKey)}
          </h1>
          <span>{caseData.client}</span>
        </div>
      )}
    </>
  );
}
