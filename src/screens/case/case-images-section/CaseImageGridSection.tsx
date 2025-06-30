import styles from "./CaseImageGridSection.module.css";

type Props = {
  images: string[];
  altTexts?: string[];
};

export function ImageGridSection({ images, altTexts }: Props) {
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
