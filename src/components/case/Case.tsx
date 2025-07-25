import React from "react";
import styles from "./Case.module.css";
import type { CaseData } from "../../types/case";
import { useTranslation } from "../../i18n/useTranslation";

type CaseProps = {
  caseData: CaseData;
  onClick?: () => void;
  imgRef?: React.Ref<HTMLImageElement>;
};

const Case: React.FC<CaseProps> = ({ caseData, onClick, imgRef }) => {
  const { t } = useTranslation();
  const { titleKey, client, image, id, tags } = caseData;

  // Translate title and tags
  const title = t(titleKey);
  const translatedTags = tags.map((tag) => t(tag));

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
            src={new URL(`../../assets/${image}`, import.meta.url).href}
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
