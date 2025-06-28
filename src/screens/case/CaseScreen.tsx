import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { CASES } from "../../constansts/cases";
import { useTransitionContext } from "../../hooks/use-transition";
import styles from "./CaseScreen.module.css";

function CaseScreen() {
  const { id } = useParams();
  const caseId = Number(id);
  const validCase =
    Number.isFinite(caseId) && caseId >= 0 && caseId < CASES.length;
  const caseData = validCase ? CASES[caseId] : null;
  const imgRef = useRef<HTMLImageElement>(null);
  const { transitionData } = useTransitionContext();

  useEffect(() => {
    if (transitionData.id === caseId && transitionData.rect && imgRef.current) {
      const img = imgRef.current;
      const startRect = transitionData.rect;
      const endRect = img.getBoundingClientRect();

      const floatingImg = img.cloneNode(true) as HTMLImageElement;
      floatingImg.style.position = "fixed";
      floatingImg.style.left = `${startRect.left}px`;
      floatingImg.style.top = `${startRect.top}px`;
      floatingImg.style.width = `${startRect.width}px`;
      floatingImg.style.height = `${startRect.height}px`;
      floatingImg.style.zIndex = "9999";
      floatingImg.style.transition = "all 0.7s cubic-bezier(.77,0,.18,1)";
      floatingImg.style.objectFit = "cover";
      floatingImg.style.pointerEvents = "none";
      document.body.appendChild(floatingImg);

      img.style.visibility = "hidden";

      requestAnimationFrame(() => {
        floatingImg.style.left = "0px";
        floatingImg.style.top = "0px";
        floatingImg.style.width = `${window.innerWidth}px`;
        floatingImg.style.height = `${endRect.height}px`;
      });

      floatingImg.addEventListener(
        "transitionend",
        () => {
          img.style.visibility = "";
          floatingImg.remove();
        },
        { once: true }
      );
    }
  }, [caseId, transitionData]);

  if (!caseData) {
    return (
      <main>
        <h2>Case not found</h2>
      </main>
    );
  }

  return (
    <main>
      <header>
        <img
          ref={imgRef}
          src={new URL(`../../assets/${caseData.image}`, import.meta.url).href}
          alt={caseData.title}
          className={styles["case-image-bg"]}
        />
        <h1>{caseData.title}</h1>
      </header>
      <h1>{caseData.title}</h1>
    </main>
  );
}

export default CaseScreen;
