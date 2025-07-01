import { BackButton } from "../../../components/back-button/BackButton";
import type { CaseData } from "../../../types/case";
import styles from "./CaseHeader.module.css";

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
            alt={caseData.title}
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
          <h1 className={styles["case-title-animated"]}>{caseData.title}</h1>
          <span>{caseData.client}</span>
        </div>
      )}
    </>
  );
}
