import { CASE_KEYS } from "../caseKeys";

export const ZIGGO_CASE = {
  id: 2,
  key: CASE_KEYS.ZIGGO,
  titleKey: "case.ziggoTitle",
  tags: ["tags.design", "tags.development", "tags.web", "tags.mobile"],
  image:
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ziggo%2Fcover-ziggo.png?alt=media&token=bd2f1995-c2de-45f9-aa5e-343eb00044cf",
  images: {
    firstSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ziggo%2Fzg-image-top.png?alt=media&token=7a43628b-37a4-424f-be38-9bbde390549d",
    ],
    secondSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ziggo%2Fzg-image-grid-1.png?alt=media&token=f1679591-928b-4b7d-ad1e-2e71bb64c854",
    ],
  },
  client: "Ziggo",
  website: "ziggo.nl",
  startProject: "2024",
  mediaType: "video" as const,
  mediaSrc:
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ziggo%2Fziggo-before-after.mp4?alt=media&token=0ba8b456-af84-483b-9fd1-b7dd5d5307cf",
  scrollGalleryImages: [
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ziggo%2Fzg-horizontal-scroll-1.png?alt=media&token=0f31729e-9d40-4e7c-93eb-c5f68a2d0bd1",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ziggo%2Fzg-horizontal-scroll-2.png?alt=media&token=aa2a2ea2-cf4d-4188-87d8-ad5386963fa1",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ziggo%2Fzg-horizontal-scroll-3.png?alt=media&token=112693e0-b135-46cc-80b3-1466ff8693f3",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ziggo%2Fzg-horizontal-scroll-4.png?alt=media&token=262aae4f-38b1-418d-91a2-6dbaa3f4d8ae",
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
