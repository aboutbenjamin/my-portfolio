import { useRef, useEffect } from "react";
import styles from "./HorizontalScrollGallery.module.css";
import { useParams } from "react-router-dom";
import { CASES } from "../../../constansts/cases";

export function HorizontalScrollGallery() {
  const { id } = useParams();
  const caseId = Number(id);
  const caseData =
    Number.isFinite(caseId) && caseId >= 0 && caseId < CASES.length
      ? CASES[caseId]
      : null;
  const images = caseData?.scrollGalleryImages ?? [];

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef(0);
  const targetRef = useRef(0);
  const animationFrameRef = useRef<number>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) return;

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const getTotalScrollable = () =>
      Math.max(scroller.scrollWidth - scroller.offsetWidth, 0);

    const animate = () => {
      currentRef.current = lerp(currentRef.current, targetRef.current, 0.2);
      const maxScroll = getTotalScrollable();
      currentRef.current = Math.max(0, Math.min(currentRef.current, maxScroll));
      scroller.style.transform = `translateX(-${currentRef.current}px)`;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const start = rect.top + scrollY - window.innerHeight * 0.08;
      const end = start + container.offsetHeight - window.innerHeight;
      const totalScrollable = getTotalScrollable();

      if (scrollY >= start && scrollY <= end) {
        const progress = (scrollY - start) / (end - start);
        targetRef.current = progress * totalScrollable;
      } else if (scrollY < start) {
        targetRef.current = 0;
      } else if (scrollY > end) {
        targetRef.current = totalScrollable;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className={styles.stickyWrapper}>
      <div className={styles.outer} ref={containerRef}>
        <div className={styles.stickyInner}>
          <div className={styles.galleryWrapper}>
            <div className={styles.galleryScroller} ref={scrollerRef}>
              {images.map((img, i) => (
                <div className={styles.galleryItem} key={img || i}>
                  <img
                    src={
                      new URL(`../../../assets/${img}`, import.meta.url).href
                    }
                    alt={`Gallery ${i + 1}`}
                    className={styles.galleryImg}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
