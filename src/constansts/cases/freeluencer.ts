import { CASE_KEYS } from "../caseKeys";

export const FREELUENCER_CASE = {
  id: 7,
  key: CASE_KEYS.FREELUENCER,
  titleKey: "case.freeluencerTitle",
  tags: ["tags.design", "tags.development", "tags.web", "tags.mobile"],
  image: "cover-freeluencer.png",
  images: {
    firstSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer.gif?alt=media&token=160d7680-e81e-47fd-80f6-f1ff75c6e4bd",
      "freeluencer-image-grid-2.png",
    ],
    secondSection: ["free-image-grid-3.png", "free-image-grid-4.png"],
    thirdSection: ["free-full-image.png"],
  },
  client: "Freeluencer",
  startProject: "2019",
  mediaType: "video" as const,
  mediaSrc:
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer-movie-top.mp4?alt=media&token=04b70727-6435-4d83-8a95-3b3d4ba0526c",
  scrollGalleryImages: [
    "free-horizontal-scroll-1.png",
    "free-horizontal-scroll-2.png",
    "free-horizontal-scroll-3.png",
    "free-horizontal-scroll-4.png",
    "free-horizontal-scroll-5.png",
    "free-horizontal-scroll-6.png",
  ],
  results: [
    {
      value: "+10",
      labelKey: "resultCards.freeluencer.services",
      delay: 100,
    },
    {
      value: "+50B $",
      labelKey: "resultCards.freeluencer.industry",
      delay: 150,
    },
    {
      value: "+64M",
      labelKey: "resultCards.freeluencer.creators",
      delay: 200,
    },
  ],
  details: {
    about: {
      labelKey: "labels.about",
      titleKey: "about.freeluencer",
      descriptionKey: "case.freeluencerDescription",
    },
    challenge: {
      labelKey: "labels.challenge",
      titleKey: "challenge.freeluencer",
      descriptionKey: "case.freeluencerChallenge",
    },
    solution: {
      labelKey: "labels.solution",
      titleKey: "solution.freeluencer",
      descriptionKey: "case.freeluencerSolution",
    },
    conclusion: {
      labelKey: "labels.conclusion",
      titleKey: "conclusion.freeluencer",
      descriptionKey: "case.freeluencerConclusion",
    },
    results: {
      labelKey: "labels.results",
      titleKey: "results.freeluencer",
      descriptionKey: "case.freeluencerResults",
    },
  },
} as const;
