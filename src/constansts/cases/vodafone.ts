import { CASE_KEYS } from "../caseKeys";

export const VODAFONE_CASE = {
  id: 1,
  key: CASE_KEYS.VODAFONE,
  titleKey: "case.vodafoneTitle",
  tags: ["tags.design", "tags.development", "tags.mobile"],
  image: "cover-vdf.png",
  images: {
    firstSection: ["vdf.gif", "vdf-image-grid-2.png"],
    secondSection: ["vdf-image-grid-3.png"],
  },
  client: "Vodafone",
  website: "Vodafone app",
  startProject: "2025",
  mediaType: "image" as const,
  mediaSrc: "vdf-image-top.png",
  scrollGalleryImages: [
    "vdf-horizontal-scroll-1.png",
    "vdf-horizontal-scroll-2.png",
    "vdf-horizontal-scroll-3.png",
  ],
  results: [
    {
      value: "30%",
      labelKey: "resultCards.vodafone.reduction",
      delay: 100,
    },
    {
      value: "+2M",
      labelKey: "resultCards.vodafone.satisfaction",
      delay: 150,
    },
    {
      value: "22%",
      labelKey: "resultCards.vodafone.engagement",
      delay: 200,
    },
  ],
  details: {
    about: {
      labelKey: "labels.about",
      titleKey: "about.vodafone",
      descriptionKey: "case.vodafoneDescription",
    },
    challenge: {
      labelKey: "labels.challenge",
      titleKey: "challenge.vodafone",
      descriptionKey: "case.vodafoneChallenge",
    },
    solution: {
      labelKey: "labels.solution",
      titleKey: "solution.vodafone",
      descriptionKey: "case.vodafoneSolution",
    },
    conclusion: {
      labelKey: "labels.conclusion",
      titleKey: "conclusion.vodafone",
      descriptionKey: "case.vodafoneConclusion",
    },
    results: {
      labelKey: "labels.results",
      titleKey: "results.vodafone",
      descriptionKey: "case.vodafoneResults",
    },
  },
} as const;
