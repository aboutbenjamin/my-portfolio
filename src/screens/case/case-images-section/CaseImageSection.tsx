import styles from "./CaseImageSection.module.css";

type Props = {
  images: string[];
  altTexts?: string[];
};

export function CaseImageSection({ images, altTexts }: Props) {
  return (
    <section className={styles.imageGridSection}>
      {images.map((img, idx) => {
        const isGif = img.toLowerCase().endsWith(".gif");
        const alt = altTexts?.[idx] || `Case image ${idx + 1}`;

        const src = img.startsWith("http")
          ? img
          : new URL(`../../../assets/${img}`, import.meta.url).href;

        if (isGif) {
          return (
            <figure key={img} className={styles.imageGridFigure}>
              <img src={src} alt={alt} className={styles.imageGridImg} />
            </figure>
          );
        }
        return (
          <figure className={styles.imageGridFigure} key={img}>
            <img
              src={src}
              alt={alt}
              loading="eager"
              className={styles.imageGridImg}
            />
          </figure>
        );
      })}
    </section>
  );
}
