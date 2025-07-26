import { CASE_KEYS } from "../caseKeys";

export const TERMYNEN_CASE = {
  id: 4,
  key: CASE_KEYS.TERMYNEN,
  titleKey: "case.termynenTitle",
  tags: ["tags.design", "tags.development", "tags.mobile"],
  image: "cover-termynen.png",
  client: "Termynen",
  website: "termynen.com",
  startProject: "2022",
  mediaType: "image" as const,
  mediaSrc: "termynen-full-image.png",
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
