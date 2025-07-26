import { CASE_KEYS } from "../caseKeys";

export const QPARK_CASE = {
  id: 9,
  key: CASE_KEYS.QPARK,
  titleKey: "case.qparkTitle",
  tags: ["tags.design", "tags.mobile"],
  image: "cover-qpark.png",
  images: {
    firstSection: ["qp-image-grid-1.png", "qp-image-grid-2.png"],
  },
  client: "QPark",
  website: "QPark App",
  startProject: "2018",
  mediaType: "image" as const,
  mediaSrc: "qp-image-top.png",
  scrollGalleryImages: [
    "qp-horizontal-scroll-1.png",
    "qp-horizontal-scroll-2.png",
    "qp-horizontal-scroll-3.png",
    "qp-horizontal-scroll-4.png",
  ],
  results: [
    { value: "+250K", labelKey: "resultCards.qpark.reduction", delay: 100 },
    {
      value: "+3,6K",
      labelKey: "resultCards.qpark.satisfaction",
      delay: 150,
    },
    { value: "+7", labelKey: "resultCards.qpark.engagement", delay: 200 },
  ],
  details: {
    about: {
      labelKey: "labels.about",
      titleKey: "about.qpark",
      descriptionKey: "case.qparkDescription",
    },
    challenge: {
      labelKey: "labels.challenge",
      titleKey: "challenge.qpark",
      descriptionKey: "case.qparkChallenge",
    },
    solution: {
      labelKey: "labels.solution",
      titleKey: "solution.qpark",
      descriptionKey: "case.qparkSolution",
    },
    conclusion: {
      labelKey: "labels.conclusion",
      titleKey: "conclusion.qpark",
      descriptionKey: "case.qparkConclusion",
    },
    results: {
      labelKey: "labels.results",
      titleKey: "results.qpark",
      descriptionKey: "case.qparkResults",
    },
  },
} as const;
