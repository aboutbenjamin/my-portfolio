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
  image: "cover-tf.png",
  images: {
    firstSection: ["tf-image-grid-1.png", "tf-image-grid-2.png"],
    secondSection: ["tf-image-grid-3.png", "tf-image-grid-4.png"],
    thirdSection: ["tf-full-image.png"],
  },
  client: "Troublefree",
  website: "troublefree.nl",
  startProject: "2018",
  mediaType: "video" as const,
  mediaSrc: "TF-before-after.mp4",
  scrollGalleryImages: [
    "tf-horizontal-scroll-1.png",
    "tf-horizontal-scroll-2.png",
    "tf-horizontal-scroll-3.png",
    "tf-horizontal-scroll-4.png",
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
