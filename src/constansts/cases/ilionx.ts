import { CASE_KEYS } from "../caseKeys";

export const ILIONX_CASE = {
  id: 3,
  key: CASE_KEYS.ILIONX,
  titleKey: "case.ilionxTitle",
  tags: ["tags.accessibility", "tags.wcag", "tags.eaa"],
  image:
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ilionx%2Fcover-wcag.png?alt=media&token=0ea9b8f5-ecfe-452a-b9d1-50bf98a73fac",
  images: {
    firstSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ilionx%2Fwcag-image-grid-1.png?alt=media&token=c1c264b0-9fa2-4386-9b70-3b06a06ad350",
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ilionx%2Fwcag-image-grid-2.png?alt=media&token=6eb4f41f-bd91-43da-8e7a-3eccabf3ef3b",
    ],
    secondSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ilionx%2Fwcag-image-grid-3.png?alt=media&token=bd75c3e5-df2b-487f-92a1-7742545fd30e",
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ilionx%2Fwcag-image-grid-4.png?alt=media&token=d37496fc-6d16-4472-833b-de3125d7b2e8",
    ],
    thirdSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ilionx%2Fwcag-image-grid-5.png?alt=media&token=4b1b8279-a23b-4f41-89c3-e7c135c49301",
    ],
  },
  client: "ilionx",
  website: "ilionx.nl",
  startProject: "2023",
  mediaType: "image" as const,
  mediaSrc:
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ilionx%2Fwcag-full-image.png?alt=media&token=5e66d6a2-12b4-492c-b393-919c24600380",
  scrollGalleryImages: [
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ilionx%2Fwcag-scroll-1.png?alt=media&token=941b5ed4-f39c-4fc7-a118-262df0a8f7d9",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ilionx%2Fwcag-scroll-2.png?alt=media&token=221a0c18-e976-4f8d-91a3-d784c980e705",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ilionx%2Fwcag-scroll-3.png?alt=media&token=2611b33c-c6d9-4a9a-8a8a-a31f2986cff4",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/ilionx%2Fwcag-scroll-4.png?alt=media&token=81eed3bf-11a0-48f6-ada3-28661ad6589a",
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
