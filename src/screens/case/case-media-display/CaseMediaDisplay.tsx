import React, { useMemo } from "react";
import styles from "../CaseScreen.module.css";
import type { CaseData } from "../../../constansts/cases";

type CaseMediaDisplayProps = {
  caseData: CaseData;
  videoRef?: React.RefObject<HTMLVideoElement | null>;
};

export function CaseMediaDisplay({
  caseData,
  videoRef,
}: CaseMediaDisplayProps) {
  const assetUrl = useMemo(
    () => new URL(`../../../assets/${caseData.mediaSrc}`, import.meta.url).href,
    [caseData.mediaSrc]
  );

  return (
    <section className={styles["case-media-section"]}>
      {caseData.mediaType === "video" ? (
        <video
          ref={videoRef}
          playsInline
          loop
          preload="metadata"
          controls
          className={styles["video-element"]}
        >
          <source src={assetUrl} type="video/mp4" />
        </video>
      ) : (
        <figure>
          <img
            src={assetUrl}
            alt={caseData.title || "Case media"}
            loading="eager"
            className={styles["case-image-media"]}
          />
        </figure>
      )}
    </section>
  );
}
