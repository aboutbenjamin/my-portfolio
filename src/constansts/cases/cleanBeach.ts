import { CASE_KEYS } from "../caseKeys";

export const CLEAN_BEACH_CASE = {
  id: 6,
  key: CASE_KEYS.CLEAN_BEACH,
  titleKey: "case.cleanBeachTitle",
  tags: ["tags.design", "tags.development", "tags.mobile"],
  image: "cover-beach.png",
  images: {
    firstSection: ["beach-image-grid-1.png", "beach-image-grid-2.png"],
    secondSection: ["beach-full-image.png"],
  },
  client: "Clean Beach",
  website: "Clean Beach App",
  startProject: "2024",
  mediaType: "image" as const,
  mediaSrc: "beach-image-top.png",
  scrollGalleryImages: [
    "beach-horizontal-scroll-1.png",
    "beach-horizontal-scroll-2.png",
    "beach-horizontal-scroll-3.png",
  ],
  results: [
    { value: "7", labelKey: "resultCards.cleanBeach.continents", delay: 100 },
    { value: "+10K", labelKey: "resultCards.cleanBeach.beaches", delay: 150 },
    {
      value: "+1T $",
      labelKey: "resultCards.cleanBeach.economic",
      delay: 200,
    },
  ],
  details: {
    about: {
      labelKey: "labels.about",
      titleKey: "about.cleanBeach",
      descriptionKey: "case.cleanBeachDescription",
    },
    challenge: {
      labelKey: "labels.challenge",
      titleKey: "challenge.cleanBeach",
      descriptionKey: "case.cleanBeachChallenge",
    },
    solution: {
      labelKey: "labels.solution",
      titleKey: "solution.cleanBeach",
      descriptionKey: "case.cleanBeachSolution",
    },
    conclusion: {
      labelKey: "labels.conclusion",
      titleKey: "conclusion.cleanBeach",
      descriptionKey: "case.cleanBeachConclusion",
    },
    results: {
      labelKey: "labels.results",
      titleKey: "results.cleanBeach",
      descriptionKey: "case.cleanBeachResults",
    },
  },
} as const;
