import styles from "./Case.module.css";

type CaseProps = {
  title: string;
  tags: string[];
  image: string;
};

function Case({ title, tags, image }: CaseProps) {
  return (
    <article className={styles["case-root"]}>
      <figure className={styles["case-figure"]}>
        <img
          src={new URL(`../../assets/${image}`, import.meta.url).href}
          alt={title}
          className={styles["case-image"]}
        />
      </figure>
      <h3 className={styles["case-title"]}>{title}</h3>
      <span className={styles["case-tags"]}>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </span>
    </article>
  );
}

export default Case;
