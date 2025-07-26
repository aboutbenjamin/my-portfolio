import { CASE_KEYS } from "../caseKeys";

export const TWILL_CASE = {
  id: 8,
  key: CASE_KEYS.TWILL,
  titleKey: "case.twillTitle",
  tags: ["tags.design", "tags.web", "tags.mobile"],
  image: "cover-twill.png",
  images: {
    firstSection: ["twil-image-top.png"],
    secondSection: ["twill-image-grid-1.png", "twill-image-grid-2.png"],
    thirdSection: ["twill-full-image.png"],
  },
  client: "Twill by Maersk",
  startProject: "2021",
  mediaType: "video" as const,
  mediaSrc:
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/twill-full-video.mp4?alt=media&token=4e8cd54f-a5a8-4bef-ac42-9a50dffb6460",
  scrollGalleryImages: [
    "twill-horizontal-scroll-1.png",
    "twill-horizontal-scroll-2.png",
    "twill-horizontal-scroll-3.png",
  ],
  results: [
    { value: "+100", labelKey: "resultCards.twill.countries", delay: 100 },
    { value: "+75K", labelKey: "resultCards.twill.activeUsers", delay: 150 },
    { value: "+500", labelKey: "resultCards.twill.freights", delay: 200 },
  ],
  details: {
    about: {
      labelKey: "labels.about",
      titleKey: "about.twill",
      descriptionKey: "case.twillDescription",
    },
    challenge: {
      labelKey: "labels.challenge",
      titleKey: "challenge.twill",
      descriptionKey: "case.twillChallenge",
    },
    solution: {
      labelKey: "labels.solution",
      titleKey: "solution.twill",
      descriptionKey: "case.twillSolution",
    },
    conclusion: {
      labelKey: "labels.conclusion",
      titleKey: "conclusion.twill",
      descriptionKey: "case.twillConclusion",
    },
    results: {
      labelKey: "labels.results",
      titleKey: "results.twill",
      descriptionKey: "case.twillResults",
    },
  },
} as const;
