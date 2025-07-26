import { CASE_KEYS } from "../caseKeys";

export const TROUBLEFREE_CASE = {
  id: 5,
  key: CASE_KEYS.TROUBLEFREE,
  titleKey: "case.troublefreeTitle",
  tags: [
    "tags.design",
    "tags.development",
    "tags.saas",
    "tags.rapidPrototyping",
  ],
  image:
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/troublefree%2Fcover-tf.png?alt=media&token=2d84eb82-f663-4fc9-a4a4-e728a8942a15",
  images: {
    firstSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/troublefree%2Ftf-image-grid-1.png?alt=media&token=06e487f2-f073-49cc-bdc3-0e74add59416",
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/troublefree%2Ftf-image-grid-2.png?alt=media&token=81803b4e-1566-4a2c-ae6f-177bad7f7b02",
    ],
    secondSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/troublefree%2Ftf-image-grid-3.png?alt=media&token=941bf500-6293-42f1-bf8c-06919ca8d7d2",
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/troublefree%2Ftf-image-grid-4.png?alt=media&token=d6c3bc21-0d80-4a25-9b70-dfff5c38432d",
    ],
    thirdSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/troublefree%2Ftf-full-image.png?alt=media&token=3d10f301-4424-4f23-a335-db24f3f4afa2",
    ],
  },
  client: "Troublefree",
  website: "troublefree.nl",
  startProject: "2018",
  mediaType: "video" as const,
  mediaSrc: "TF-before-after.mp4",
  scrollGalleryImages: [
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/troublefree%2Ftf-horizontal-scroll-1.png?alt=media&token=657e0e0f-fc34-44c8-8668-508821387c48",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/troublefree%2Ftf-horizontal-scroll-2.png?alt=media&token=c168e964-4055-484a-9765-fe2addf2e7f6",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/troublefree%2Ftf-horizontal-scroll-3.png?alt=media&token=67e2d224-c999-4330-b3e0-a1321e446e8f",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/troublefree%2Ftf-horizontal-scroll-4.png?alt=media&token=dd1cc41c-9741-45d5-bf34-4df38b9702e3",
  ],
  results: [
    { value: "+10", labelKey: "resultCards.troublefree.modules", delay: 100 },
    { value: "+55K", labelKey: "resultCards.troublefree.users", delay: 150 },
    {
      value: "+9 years",
      labelKey: "resultCards.troublefree.experience",
      delay: 200,
    },
  ],
  details: {
    about: {
      labelKey: "labels.about",
      titleKey: "about.troublefree",
      descriptionKey: "case.troublefreeDescription",
    },
    challenge: {
      labelKey: "labels.challenge",
      titleKey: "challenge.troublefree",
      descriptionKey: "case.troublefreeChallenge",
    },
    solution: {
      labelKey: "labels.solution",
      titleKey: "solution.troublefree",
      descriptionKey: "case.troublefreeSolution",
    },
    conclusion: {
      labelKey: "labels.conclusion",
      titleKey: "conclusion.troublefree",
      descriptionKey: "case.troublefreeConclusion",
    },
    results: {
      labelKey: "labels.results",
      titleKey: "results.troublefree",
      descriptionKey: "case.troublefreeResults",
    },
  },
} as const;
