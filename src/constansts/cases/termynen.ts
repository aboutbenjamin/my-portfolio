import { CASE_KEYS } from "../caseKeys";

export const TERMYNEN_CASE = {
  id: 4,
  key: CASE_KEYS.TERMYNEN,
  titleKey: "case.termynenTitle",
  tags: ["tags.design", "tags.development", "tags.mobile"],
  image:
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/termynen%2Fcover-termynen.png?alt=media&token=b716e1c7-391b-4a6b-89b8-89561dcec5ae",
  client: "Termynen",
  website: "termynen.com",
  startProject: "2022",
  mediaType: "image" as const,
  mediaSrc:
    "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/termynen%2Ftermynen-full-image.png?alt=media&token=4d3e707b-e125-48ae-9485-695fae25df4d",
  scrollGalleryImages: [],
  results: [],
  details: {
    about: {
      labelKey: "labels.about",
      titleKey: "about.termynen",
      descriptionKey: "case.termynenDescription",
    },
    challenge: undefined,
    solution: undefined,
    conclusion: undefined,
    results: undefined,
  },
} as const;
