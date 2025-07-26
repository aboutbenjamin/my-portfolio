import { CASE_KEYS } from "../caseKeys";

export const VODAFONE_CASE = {
  id: 1,
  key: CASE_KEYS.VODAFONE,
  titleKey: "case.vodafoneTitle",
  tags: ["tags.design", "tags.development", "tags.mobile"],
  image:
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/vodafone%2Fcover-vdf.png?alt=media&token=baab6a51-3e23-4ca3-bff1-bdfd4072d679",
  images: {
    firstSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/vodafone%2Fvdf.gif?alt=media&token=0d1a9fea-fba2-4a69-ac6e-007e372ad19a",
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/vodafone%2Fvdf-image-grid-2.png?alt=media&token=b90d6992-0d8e-4c6d-9aab-0d7b50540ae3",
    ],
    secondSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/vodafone%2Fvdf-image-grid-3.png?alt=media&token=a2cfd4bb-3fa2-4845-92c4-5bbe701669be",
    ],
  },
  client: "Vodafone",
  website: "Vodafone app",
  startProject: "2025",
  mediaType: "image" as const,
  mediaSrc: "vdf-image-top.png",
  scrollGalleryImages: [
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/vodafone%2Fvdf-horizontal-scroll-1.png?alt=media&token=fcd8dff7-ab02-4cc6-a608-7d1504be233b",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/vodafone%2Fvdf-horizontal-scroll-2.png?alt=media&token=45db26bf-5639-48ad-a1cd-262462a92995",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/vodafone%2Fvdf-horizontal-scroll-3.png?alt=media&token=e40b4cd1-38c8-4679-ae14-e74e4f53c44a",
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
