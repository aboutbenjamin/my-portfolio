import { CASE_KEYS } from "../caseKeys";

export const TWILL_CASE = {
  id: 8,
  key: CASE_KEYS.TWILL,
  titleKey: "case.twillTitle",
  tags: ["tags.design", "tags.web", "tags.mobile"],
  image:
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/twill%2Fcover-twill.png?alt=media&token=a98dd8dc-3a44-4fdb-bce5-d4b4456e2f0a",
  images: {
    firstSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/twill%2Ftwil-image-top.png?alt=media&token=66fa0bed-c33c-4468-bf9d-1b2ce23ce420",
    ],
    secondSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/twill%2Ftwill-image-grid-1.png?alt=media&token=e56f8ef9-9a10-465c-90da-430c9f53b5c0",
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/twill%2Ftwill-image-grid-2.png?alt=media&token=b387a78c-7b65-4a6e-8f31-3b3997a296a7",
    ],
    thirdSection: [
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/twill%2Ftwill-full-image.png?alt=media&token=819cf958-7b83-453a-a672-f57f1c6c2629",
    ],
  },
  client: "Twill by Maersk",
  startProject: "2021",
  mediaType: "video" as const,
  mediaSrc:
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/twill-full-video.mp4?alt=media&token=4e8cd54f-a5a8-4bef-ac42-9a50dffb6460",
  scrollGalleryImages: [
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/twill%2Ftwill-horizontal-scroll-1.png?alt=media&token=143f0512-2015-4bc8-9531-e1b434f99ec5",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/twill%2Ftwill-horizontal-scroll-2.png?alt=media&token=bddb2a09-8321-4e79-9443-c2252c242705",
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/twill%2Ftwill-horizontal-scroll-3.png?alt=media&token=a5c35bbc-80dd-4205-a193-841732b0794e",
  ],
  results: [
    { value: "+100", labelKey: "resultCards.twill.countries", delay: 100 },
    { value: "+75K", labelKey: "resultCards.twill.activeUsers", delay: 150 },
    { value: "+500", labelKey: "resultCards.twill.freights", delay: 200 },
  ],
  details: {
    about: {
      labelKey: "labels.about",
      titleKey: "about.twill",
      descriptionKey: "case.twillDescription",
    },
    challenge: {
      labelKey: "labels.challenge",
      titleKey: "challenge.twill",
      descriptionKey: "case.twillChallenge",
    },
    solution: {
      labelKey: "labels.solution",
      titleKey: "solution.twill",
      descriptionKey: "case.twillSolution",
    },
    conclusion: {
      labelKey: "labels.conclusion",
      titleKey: "conclusion.twill",
      descriptionKey: "case.twillConclusion",
    },
    results: {
      labelKey: "labels.results",
      titleKey: "results.twill",
      descriptionKey: "case.twillResults",
    },
  },
} as const;
