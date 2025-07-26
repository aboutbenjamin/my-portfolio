import React from "react";
import styles from "./Case.module.css";
import type { CaseData } from "../../types/case";
import { useTranslation } from "../../i18n/useTranslation";
import { getImageSrc } from "../../utils/getImageSrc";

type CaseProps = {
  caseData: CaseData;
  onClick?: () => void;
  imgRef?: React.Ref<HTMLImageElement>;
};

const Case: React.FC<CaseProps> = ({ caseData, onClick, imgRef }) => {
  const { t } = useTranslation();
  const { titleKey, client, image, id } = caseData;

  const title = t(titleKey);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <section
      className={styles.caseLink}
      tabIndex={0}
      role="button"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      onKeyDown={handleKeyDown}
      aria-label={`Open case: ${title}`}
    >
      <article className={styles.caseRoot}>
        <figure className={styles.caseFigure}>
          <img
            ref={imgRef}
            src={getImageSrc(image)}
            alt={title}
            className={styles.caseImage}
            data-shared-image={`case-image-${id}`}
          />
        </figure>
        <h3 className={styles.caseTitle}>{title}</h3>
        <span className={styles.caseTags}>
          <span key={client}>{client}</span>
        </span>
      </article>
    </section>
  );
};

export default React.memo(Case);
