import { CASE_KEYS } from "../caseKeys";

export const FREELUENCER_CASE = {
  id: 7,
  key: CASE_KEYS.FREELUENCER,
  titleKey: "case.freeluencerTitle",
  tags: ["tags.design", "tags.development", "tags.web", "tags.mobile"],
  image:
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer%2Fcover-freeluencer(1).png?alt=media&token=c133312f-d8ae-407e-b9b7-e804e955e3f7",
  images: {
    firstSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer%2Ffreeluencer.gif?alt=media&token=50cf9a3d-897c-4bf4-b30c-f881c4927a79",
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer%2Ffreeluencer-image-grid-2.png?alt=media&token=f76b1344-deaf-4596-bad5-8989961dcae1",
    ],
    secondSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer%2Ffree-image-grid-3.png?alt=media&token=186fe998-8d8e-4afa-9520-13c6ffe47cc5",
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer%2Ffree-image-grid-4.png?alt=media&token=f97ddce3-9fe0-48f9-ac40-c3ec3bab98d7",
    ],
    thirdSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer%2Ffree-full-image.png?alt=media&token=49eaf936-41b1-4a15-a050-801fc30e50a9",
    ],
  },
  client: "Freeluencer",
  startProject: "2019",
  mediaType: "video" as const,
  mediaSrc:
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer%2Ffreeluencer-movie-top.mp4?alt=media&token=ed4a02b1-b671-4e90-b4d6-79e917eb9752",
  scrollGalleryImages: [
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer%2Ffree-horizontal-scroll-1.png?alt=media&token=5c8676bb-082f-4f51-bbc3-f483142c53fe",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer%2Ffree-horizontal-scroll-2.png?alt=media&token=6b7185df-45b4-4063-9814-409fb79a77f6",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer%2Ffree-horizontal-scroll-3.png?alt=media&token=5fb5d5ad-626a-4e6d-99f3-83fd5579a69e",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer%2Ffree-horizontal-scroll-4.png?alt=media&token=b952e262-1acd-4b9b-bbce-292e1a63b706",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer%2Ffree-horizontal-scroll-5.png?alt=media&token=4100af5a-8b6d-42b0-8bd6-4e00170ddfba",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer%2Ffree-horizontal-scroll-6.png?alt=media&token=a7bc055d-762f-4d99-95d0-49dfeaaa8522",
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
