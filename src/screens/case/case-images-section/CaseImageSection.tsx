import styles from "./CaseImageSection.module.css";

type Props = {
  images: string[];
  altTexts?: string[];
};

export function CaseImageSection({ images, altTexts }: Props) {
  return (
    <section className={styles.imageGridSection}>
      {images.map((img, idx) => (
        <figure className={styles.imageGridFigure} key={img}>
          <img
            src={new URL(`../../../assets/${img}`, import.meta.url).href}
            alt={altTexts?.[idx] || `Case image ${idx + 1}`}
            loading="eager"
            className={styles.imageGridImg}
          />
        </figure>
      ))}
    </section>
  );
}
