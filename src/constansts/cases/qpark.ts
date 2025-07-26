import { CASE_KEYS } from "../caseKeys";

export const QPARK_CASE = {
  id: 9,
  key: CASE_KEYS.QPARK,
  titleKey: "case.qparkTitle",
  tags: ["tags.design", "tags.mobile"],
  image:
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/qpark%2Fcover-qpark.png?alt=media&token=04cc86c4-7665-40ad-8b14-b183aa67cbc2",
  images: {
    firstSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/qpark%2Fqp-image-grid-1.png?alt=media&token=b971ba70-a1f0-40a8-9b12-621cd1e57b4b",
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/qpark%2Fqp-image-grid-2.png?alt=media&token=6101c3ce-64db-426e-8162-9a42ccdf909b",
    ],
  },
  client: "QPark",
  website: "QPark App",
  startProject: "2018",
  mediaType: "image" as const,
  mediaSrc:
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/qpark%2Fqp-image-top.png?alt=media&token=7166240d-c5ad-452f-a3fc-08fcbb4aff5b",
  scrollGalleryImages: [
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/qpark%2Fqp-horizontal-scroll-1.png?alt=media&token=e96d72be-c2ee-4413-a13e-970737bfec8e",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/qpark%2Fqp-horizontal-scroll-2.png?alt=media&token=4b16e8df-ff6e-48a2-81ff-bc27c4bffb53",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/qpark%2Fqp-horizontal-scroll-3.png?alt=media&token=ff527f01-545f-4dff-9852-c735d4d2ad6c",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/qpark%2Fqp-horizontal-scroll-4.png?alt=media&token=8e61f3b8-7713-4377-af41-54d601e75af3",
  ],
  results: [
    { value: "+250K", labelKey: "resultCards.qpark.reduction", delay: 100 },
    {
      value: "+3,6K",
      labelKey: "resultCards.qpark.satisfaction",
      delay: 150,
    },
    { value: "+7", labelKey: "resultCards.qpark.engagement", delay: 200 },
  ],
  details: {
    about: {
      labelKey: "labels.about",
      titleKey: "about.qpark",
      descriptionKey: "case.qparkDescription",
    },
    challenge: {
      labelKey: "labels.challenge",
      titleKey: "challenge.qpark",
      descriptionKey: "case.qparkChallenge",
    },
    solution: {
      labelKey: "labels.solution",
      titleKey: "solution.qpark",
      descriptionKey: "case.qparkSolution",
    },
    conclusion: {
      labelKey: "labels.conclusion",
      titleKey: "conclusion.qpark",
      descriptionKey: "case.qparkConclusion",
    },
    results: {
      labelKey: "labels.results",
      titleKey: "results.qpark",
      descriptionKey: "case.qparkResults",
    },
  },
} as const;
