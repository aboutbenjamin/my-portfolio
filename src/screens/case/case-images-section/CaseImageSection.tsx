import styles from "./CaseImageSection.module.css";
import { getImageSrc } from "../../../utils/getImageSrc";

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

        const src = getImageSrc(img);

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
