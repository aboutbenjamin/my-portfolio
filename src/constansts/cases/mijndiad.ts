import { CASE_KEYS } from "../caseKeys";

export const MIJNDIAD_CASE = {
  id: 5,
  key: CASE_KEYS.MIJNDIAD,
  titleKey: "case.mijnDiadTitle",
  tags: ["tags.design", "tags.saas", "tags.rapidPrototyping"],
  image:
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/mijnDiad%2Fcover-md(1).png?alt=media&token=1a72f44d-822d-4431-b22c-5c53e7651286",
  images: {
    firstSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/mijnDiad%2Fmd-image-grid-1(1).png?alt=media&token=f71946e1-cff1-4f7b-aafd-c660d1268bd3",
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/mijnDiad%2Fmd-image-grid-2(1).png?alt=media&token=31e4ce10-69db-424a-8973-ee3752a3f61f",
    ],
    secondSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/mijnDiad%2Fmd-image-grid-3(1).png?alt=media&token=d863e685-2c32-40a5-9434-bd1e24e9850f",
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/mijnDiad%2Fmd-image-grid-4(1).png?alt=media&token=3c6c5a8a-a7aa-48f4-8e64-c201c16d0f69",
    ],
    thirdSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/mijnDiad%2Fmd-full-image(1).png?alt=media&token=abfc019c-f1e6-41f6-87b7-018e42252768",
    ],
  },
  client: "MijnDiad",
  website: "mijnDiad.nl",
  startProject: "2018",
  scrollGalleryImages: [
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/mijnDiad%2Fmd-horizontal-scroll-1(1).png?alt=media&token=a0795d81-2439-41fd-8555-4d7a5123f0cb",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/mijnDiad%2Fmd-horizontal-scroll-2(1).png?alt=media&token=f1d9d6f9-dbcd-4091-9dc5-c4bfe4a816cf",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/mijnDiad%2Fmd-horizontal-scroll-3(1).png?alt=media&token=48a540a5-0b5a-4fc1-8a83-587774110a5d",
  ],
  results: [
    {
      value: "End-to-end",
      labelKey: "resultCards.mijnDiad.modules",
      delay: 100,
    },
    {
      value: "From scratch",
      labelKey: "resultCards.mijnDiad.users",
      delay: 150,
    },
    {
      value: "All key flows",
      labelKey: "resultCards.mijnDiad.experience",
      delay: 200,
    },
  ],
  details: {
    about: {
      labelKey: "labels.about",
      titleKey: "about.mijnDiad",
      descriptionKey: "case.mijnDiadDescription",
    },
    challenge: {
      labelKey: "labels.challenge",
      titleKey: "challenge.mijnDiad",
      descriptionKey: "case.mijnDiadChallenge",
    },
    solution: {
      labelKey: "labels.solution",
      titleKey: "solution.mijnDiad",
      descriptionKey: "case.mijnDiadSolution",
    },
    conclusion: {
      labelKey: "labels.conclusion",
      titleKey: "conclusion.mijnDiad",
      descriptionKey: "case.mijnDiadConclusion",
    },
    results: {
      labelKey: "labels.results",
      titleKey: "results.mijnDiad",
      descriptionKey: "case.mijnDiadResults",
    },
  },
} as const;
