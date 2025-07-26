import { CASE_KEYS } from "../caseKeys";

export const CLEAN_BEACH_CASE = {
  id: 6,
  key: CASE_KEYS.CLEAN_BEACH,
  titleKey: "case.cleanBeachTitle",
  tags: ["tags.design", "tags.development", "tags.mobile"],
  image:
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/beach%2Fcover-beach.png?alt=media&token=89b22d37-cf6c-4b89-8c3f-6b2065ac7470",
  images: {
    firstSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/beach%2Fbeach-image-grid-1.png?alt=media&token=8cf397a7-0924-42ca-994b-cc0d6130bb2c",
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/beach%2Fbeach-image-grid-2.png?alt=media&token=28ecea2e-d8a9-41ad-ae4c-95218e290562",
    ],
    secondSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/beach%2Fbeach-full-image.png?alt=media&token=a23cd7ed-4c01-42a1-95c5-731e5bf8cd9f",
    ],
  },
  client: "Clean Beach",
  website: "Clean Beach App",
  startProject: "2024",
  mediaType: "image" as const,
  mediaSrc: "beach-image-top.png",
  scrollGalleryImages: [
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/beach%2Fbeach-horizontal-scroll-1.png?alt=media&token=7db249aa-dc4d-4b11-a09f-5b7f3bb2bca8",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/beach%2Fbeach-horizontal-scroll-2.png?alt=media&token=9d1c7b38-b185-47b4-ad82-95bc855b11b3",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/beach%2Fbeach-horizontal-scroll-3.png?alt=media&token=5916479d-23fb-4bbd-bd45-5a84f4b73267",
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
