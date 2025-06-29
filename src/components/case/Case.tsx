import React from "react";
import styles from "./Case.module.css";

type CaseProps = {
  title: string;
  tags: string[];
  image: string;
  id: number;
  onClick?: () => void;
  imgRef?: React.Ref<HTMLImageElement>;
};

const Case: React.FC<CaseProps> = ({
  title,
  tags,
  image,
  id,
  onClick,
  imgRef,
}) => {
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
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </span>
      </article>
    </section>
  );
};

export default React.memo(Case);
