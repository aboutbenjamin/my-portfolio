import { CASE_KEYS } from "../caseKeys";

export const ZIGGO_CASE = {
  id: 2,
  key: CASE_KEYS.ZIGGO,
  titleKey: "case.ziggoTitle",
  tags: ["tags.design", "tags.development", "tags.web", "tags.mobile"],
  image: "cover-ziggo.png",
  images: {
    firstSection: ["zg-image-top.png"],
    secondSection: ["zg-image-grid-1.png"],
  },
  client: "Ziggo",
  website: "ziggo.nl",
  startProject: "2024",
  mediaType: "video" as const,
  mediaSrc: "ziggo-before-after.mp4",
  scrollGalleryImages: [
    "zg-horizontal-scroll-1.png",
    "zg-horizontal-scroll-2.png",
    "zg-horizontal-scroll-3.png",
    "zg-horizontal-scroll-4.png",
  ],
  results: [
    {
      value: "+3.5M",
      labelKey: "resultCards.ziggo.users",
      delay: 100,
    },
    {
      value: "28%",
      labelKey: "resultCards.ziggo.reduction",
      delay: 150,
    },
    {
      value: "+500K",
      labelKey: "resultCards.ziggo.notifications",
      delay: 200,
    },
  ],
  details: {
    about: {
      labelKey: "labels.about",
      titleKey: "about.ziggo",
      descriptionKey: "case.ziggoDescription",
    },
    challenge: {
      labelKey: "labels.challenge",
      titleKey: "challenge.ziggo",
      descriptionKey: "case.ziggoChallenge",
    },
    solution: {
      labelKey: "labels.solution",
      titleKey: "solution.ziggo",
      descriptionKey: "case.ziggoSolution",
    },
    conclusion: {
      labelKey: "labels.conclusion",
      titleKey: "conclusion.ziggo",
      descriptionKey: "case.ziggoConclusion",
    },
    results: {
      labelKey: "labels.results",
      titleKey: "results.ziggo",
      descriptionKey: "case.ziggoResults",
    },
  },
} as const;
