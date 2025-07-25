import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { CASES } from "../../constansts/cases";
import { useTransitionContext } from "../../hooks/use-transition";
import { CaseMetaInfo } from "./case-meta-into/CaseMetaInfo";
import { CaseHeader } from "./case-header/CaseHeader";
import styles from "./CaseScreen.module.css";
import { CaseChallengeDetails } from "./case-challenge-details/CaseChallengeDetails";
import { CaseMediaDisplay } from "./case-media-display/CaseMediaDisplay";
import { CaseSolutionDetails } from "./case-solution-details/CaseSolutionDetails";
import { CaseImageSection } from "./case-images-section/CaseImageSection";
import { CaseResultsDetails } from "./case-results-details/CaseResultsDetails";
import { Contact } from "../../components/contact/Contact";
import { CaseAboutDetails } from "./case-about-details/CaseAboutDetails";
import { CaseConclusionDetails } from "./case-conclusion-details/CaseConclusionDetails";
import { HorizontalScrollGallery } from "./case-horizontal-scroll-gallery/HorizontalScrollGallery";

function CaseScreen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const caseId = Number(id);
  const validCase =
    Number.isFinite(caseId) && caseId >= 0 && caseId < CASES.length;
  const caseData = validCase ? CASES[caseId] : null;
  const imgRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { transitionData } = useTransitionContext();
  const [showHeaderContent, setShowHeaderContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowHeaderContent(true), 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

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

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      floatingImg.offsetWidth;

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
      <CaseHeader
        showHeaderContent={showHeaderContent}
        imgRef={imgRef}
        caseData={caseData}
      />
      {showHeaderContent && (
        <article className={styles["content-container"]}>
          <CaseMetaInfo caseData={caseData} />
          {caseData.mediaType && caseData.mediaSrc && (
            <>
              <CaseAboutDetails />
              <CaseMediaDisplay caseData={caseData} videoRef={videoRef} />
            </>
          )}
          <CaseChallengeDetails />
          {caseData.images && (
            <CaseImageSection
              images={
                Array.isArray(caseData.images)
                  ? caseData.images
                  : caseData.images?.firstSection ?? []
              }
            />
          )}
          <CaseSolutionDetails />
          {caseData.scrollGalleryImages && <HorizontalScrollGallery />}
          <CaseConclusionDetails />
          {caseData.images && (
            <CaseImageSection
              images={
                Array.isArray(caseData.images)
                  ? caseData.images
                  : caseData.images?.secondSection ?? []
              }
            />
          )}
          <CaseResultsDetails />
          {caseData.images && (
            <CaseImageSection
              images={
                Array.isArray(caseData.images)
                  ? caseData.images
                  : caseData.images?.thirdSection ?? []
              }
            />
          )}
          <Contact />
        </article>
      )}
    </main>
  );
}

export default CaseScreen;
