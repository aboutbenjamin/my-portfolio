import { CASE_KEYS } from "../caseKeys";

export const ILIONX_CASE = {
  id: 3,
  key: CASE_KEYS.ILIONX,
  titleKey: "case.ilionxTitle",
  tags: ["tags.accessibility", "tags.wcag", "tags.eaa"],
  image: "cover-wcag.png",
  images: {
    firstSection: ["wcag-image-grid-1.png", "wcag-image-grid-2.png"],
    secondSection: ["wcag-image-grid-3.png", "wcag-image-grid-4.png"],
    thirdSection: ["wcag-image-grid-5.png"],
  },
  client: "ilionx",
  website: "ilionx.nl",
  startProject: "2023",
  mediaType: "image" as const,
  mediaSrc: "wcag-full-image.png",
  scrollGalleryImages: [
    "wcag-scroll-1.png",
    "wcag-scroll-2.png",
    "wcag-scroll-3.png",
    "wcag-scroll-4.png",
  ],
  results: [
    {
      value: "86%",
      labelKey: "resultCards.ilionx.onboarding",
      delay: 100,
    },
    {
      value: "12",
      labelKey: "resultCards.ilionx.teams",
      delay: 150,
    },
    {
      value: "44",
      labelKey: "resultCards.ilionx.guidelines",
      delay: 200,
    },
  ],
  details: {
    about: {
      labelKey: "labels.about",
      titleKey: "about.ilionx",
      descriptionKey: "case.ilionxDescription",
    },
    challenge: {
      labelKey: "labels.challenge",
      titleKey: "challenge.ilionx",
      descriptionKey: "case.ilionxChallenge",
    },
    solution: {
      labelKey: "labels.solution",
      titleKey: "solution.ilionx",
      descriptionKey: "case.ilionxSolution",
    },
    conclusion: {
      labelKey: "labels.conclusion",
      titleKey: "conclusion.ilionx",
      descriptionKey: "case.ilionxConclusion",
    },
    results: {
      labelKey: "labels.results",
      titleKey: "results.ilionx",
      descriptionKey: "case.ilionxResults",
    },
  },
} as const;
