import type { CaseData } from "../types/case";
import { CASE_KEYS } from "./caseKeys";

export type CaseDetails = {
  id: number;
  labelKey: string;
  titleKey: string;
  descriptionKey: string;
};

const CASE_DEFINITIONS = {
  [CASE_KEYS.VODAFONE]: {
    id: 1,
    key: CASE_KEYS.VODAFONE,
    titleKey: "case.vodafoneTitle",
    tags: ["tags.design", "tags.development", "tags.mobile"],
    image: "cover-vdf.png",
    images: {
      firstSection: ["vdf.gif", "vdf-image-grid-2.png"],
      secondSection: ["vdf-image-grid-3.png"],
    },
    client: "Vodafone",
    website: "Vodafone app",
    startProject: "2025",
    mediaType: "image" as const,
    mediaSrc: "vdf-image-top.png",
    scrollGalleryImages: [
      "vdf-horizontal-scroll-1.png",
      "vdf-horizontal-scroll-2.png",
      "vdf-horizontal-scroll-3.png",
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
  },
  [CASE_KEYS.ZIGGO]: {
    id: 2,
    key: CASE_KEYS.ZIGGO,
    titleKey: "case.ziggoTitle",
    tags: ["tags.design", "tags.development", "tags.web", "tags.mobile"],
    image: "cover-ziggo.png",
    images: {
      firstSection: ["zg-image-top.png"],
      secondSection: ["zg-image-grid-1.png"],
    },
    client: "Ziggo",
    website: "ziggo.nl",
    startProject: "2024",
    mediaType: "video" as const,
    mediaSrc: "ziggo-before-after.mp4",
    scrollGalleryImages: [
      "zg-horizontal-scroll-1.png",
      "zg-horizontal-scroll-2.png",
      "zg-horizontal-scroll-3.png",
      "zg-horizontal-scroll-4.png",
    ],
    results: [
      {
        value: "+3.5M",
        labelKey: "resultCards.ziggo.users",
        delay: 100,
      },
      {
        value: "28%",
        labelKey: "resultCards.ziggo.reduction",
        delay: 150,
      },
      {
        value: "+500K",
        labelKey: "resultCards.ziggo.notifications",
        delay: 200,
      },
    ],
    details: {
      about: {
        labelKey: "labels.about",
        titleKey: "about.ziggo",
        descriptionKey: "case.ziggoDescription",
      },
      challenge: {
        labelKey: "labels.challenge",
        titleKey: "challenge.ziggo",
        descriptionKey: "case.ziggoChallenge",
      },
      solution: {
        labelKey: "labels.solution",
        titleKey: "solution.ziggo",
        descriptionKey: "case.ziggoSolution",
      },
      conclusion: {
        labelKey: "labels.conclusion",
        titleKey: "conclusion.ziggo",
        descriptionKey: "case.ziggoConclusion",
      },
      results: {
        labelKey: "labels.results",
        titleKey: "results.ziggo",
        descriptionKey: "case.ziggoResults",
      },
    },
  },
  [CASE_KEYS.ILIONX]: {
    id: 3,
    key: CASE_KEYS.ILIONX,
    titleKey: "case.ilionxTitle",
    tags: ["tags.accessibility", "tags.wcag", "tags.eaa"],
    image: "cover-wcag.png",
    images: {
      firstSection: ["wcag-image-grid-1.png", "wcag-image-grid-2.png"],
      secondSection: ["wcag-image-grid-3.png", "wcag-image-grid-4.png"],
      thirdSection: ["wcag-image-grid-5.png"],
    },
    client: "ilionx",
    website: "ilionx.nl",
    startProject: "2023",
    mediaType: "image" as const,
    mediaSrc: "wcag-full-image.png",
    scrollGalleryImages: [
      "wcag-scroll-1.png",
      "wcag-scroll-2.png",
      "wcag-scroll-3.png",
      "wcag-scroll-4.png",
    ],
    results: [
      {
        value: "86%",
        labelKey: "resultCards.ilionx.onboarding",
        delay: 100,
      },
      {
        value: "12",
        labelKey: "resultCards.ilionx.teams",
        delay: 150,
      },
      {
        value: "44",
        labelKey: "resultCards.ilionx.guidelines",
        delay: 200,
      },
    ],
    details: {
      about: {
        labelKey: "labels.about",
        titleKey: "about.ilionx",
        descriptionKey: "case.ilionxDescription",
      },
      challenge: {
        labelKey: "labels.challenge",
        titleKey: "challenge.ilionx",
        descriptionKey: "case.ilionxChallenge",
      },
      solution: {
        labelKey: "labels.solution",
        titleKey: "solution.ilionx",
        descriptionKey: "case.ilionxSolution",
      },
      conclusion: {
        labelKey: "labels.conclusion",
        titleKey: "conclusion.ilionx",
        descriptionKey: "case.ilionxConclusion",
      },
      results: {
        labelKey: "labels.results",
        titleKey: "results.ilionx",
        descriptionKey: "case.ilionxResults",
      },
    },
  },
  [CASE_KEYS.TERMYNEN]: {
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
  },
  [CASE_KEYS.TROUBLEFREE]: {
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
  },
  [CASE_KEYS.CLEAN_BEACH]: {
    id: 6,
    key: CASE_KEYS.CLEAN_BEACH,
    titleKey: "case.cleanBeachTitle",
    tags: ["tags.design", "tags.development", "tags.mobile"],
    image: "cover-beach.png",
    images: {
      firstSection: ["beach-image-grid-1.png", "beach-image-grid-2.png"],
      secondSection: ["beach-full-image.png"],
    },
    client: "Clean Beach",
    website: "Clean Beach App",
    startProject: "2024",
    mediaType: "image" as const,
    mediaSrc: "beach-image-top.png",
    scrollGalleryImages: [
      "beach-horizontal-scroll-1.png",
      "beach-horizontal-scroll-2.png",
      "beach-horizontal-scroll-3.png",
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
  },
  [CASE_KEYS.FREELUENCER]: {
    id: 7,
    key: CASE_KEYS.FREELUENCER,
    titleKey: "case.freeluencerTitle",
    tags: ["tags.design", "tags.development", "tags.web", "tags.mobile"],
    image: "cover-freeluencer.png",
    images: {
      firstSection: [
        "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer.gif?alt=media&token=160d7680-e81e-47fd-80f6-f1ff75c6e4bd",
        "freeluencer-image-grid-2.png",
      ],
      secondSection: ["free-image-grid-3.png", "free-image-grid-4.png"],
      thirdSection: ["free-full-image.png"],
    },
    client: "Freeluencer",
    startProject: "2019",
    mediaType: "video" as const,
    mediaSrc:
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/freeluencer-movie-top.mp4?alt=media&token=04b70727-6435-4d83-8a95-3b3d4ba0526c",
    scrollGalleryImages: [
      "free-horizontal-scroll-1.png",
      "free-horizontal-scroll-2.png",
      "free-horizontal-scroll-3.png",
      "free-horizontal-scroll-4.png",
      "free-horizontal-scroll-5.png",
      "free-horizontal-scroll-6.png",
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
  },
  [CASE_KEYS.TWILL]: {
    id: 8,
    key: CASE_KEYS.TWILL,
    titleKey: "case.twillTitle",
    tags: ["tags.design", "tags.web", "tags.mobile"],
    image: "cover-twill.png",
    images: {
      firstSection: ["twil-image-top.png"],
      secondSection: ["twill-image-grid-1.png", "twill-image-grid-2.png"],
      thirdSection: ["twill-full-image.png"],
    },
    client: "Twill by Maersk",
    startProject: "2021",
    mediaType: "video" as const,
    mediaSrc:
      "https://firebasestorage.googleapis.com/v0/b/marketplace-696bf.appspot.com/o/twill-full-video.mp4?alt=media&token=4e8cd54f-a5a8-4bef-ac42-9a50dffb6460",
    scrollGalleryImages: [
      "twill-horizontal-scroll-1.png",
      "twill-horizontal-scroll-2.png",
      "twill-horizontal-scroll-3.png",
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
  },
  [CASE_KEYS.QPARK]: {
    id: 9,
    key: CASE_KEYS.QPARK,
    titleKey: "case.qparkTitle",
    tags: ["tags.design", "tags.mobile"],
    image: "cover-qpark.png",
    images: {
      firstSection: ["qp-image-grid-1.png", "qp-image-grid-2.png"],
    },
    client: "QPark",
    website: "QPark App",
    startProject: "2018",
    mediaType: "image" as const,
    mediaSrc: "qp-image-top.png",
    scrollGalleryImages: [
      "qp-horizontal-scroll-1.png",
      "qp-horizontal-scroll-2.png",
      "qp-horizontal-scroll-3.png",
      "qp-horizontal-scroll-4.png",
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
  },
} as const;

export const CASES: CaseData[] = Object.values(CASE_DEFINITIONS).map(
  (caseData) => caseData as unknown as CaseData
);

export const getCaseDetails = (
  caseId: number,
  detailType: keyof NonNullable<
    (typeof CASE_DEFINITIONS)[keyof typeof CASE_DEFINITIONS]["details"]
  >
): CaseDetails | null => {
  const caseDefinition = Object.values(CASE_DEFINITIONS).find(
    (def) => def.id === caseId + 1
  );

  if (!caseDefinition || !caseDefinition.details[detailType]) {
    return null;
  }

  const details = caseDefinition.details[detailType];
  if (!details) return null;

  return {
    id: caseDefinition.id,
    labelKey: details.labelKey,
    titleKey: details.titleKey,
    descriptionKey: details.descriptionKey,
  };
};

export const ABOUT_DETAILS: CaseDetails[] = Object.values(CASE_DEFINITIONS)
  .map((def) => {
    if (!def.details.about) return null;
    return {
      id: def.id,
      labelKey: def.details.about.labelKey,
      titleKey: def.details.about.titleKey,
      descriptionKey: def.details.about.descriptionKey,
    } as CaseDetails;
  })
  .filter((item): item is CaseDetails => item !== null);

export const CHALLENGE_DETAILS: CaseDetails[] = Object.values(CASE_DEFINITIONS)
  .map((def) => {
    if (!def.details.challenge) return null;
    return {
      id: def.id,
      labelKey: def.details.challenge.labelKey,
      titleKey: def.details.challenge.titleKey,
      descriptionKey: def.details.challenge.descriptionKey,
    } as CaseDetails;
  })
  .filter((item): item is CaseDetails => item !== null);

export const SOLUTION_DETAILS: CaseDetails[] = Object.values(CASE_DEFINITIONS)
  .map((def) => {
    if (!def.details.solution) return null;
    return {
      id: def.id,
      labelKey: def.details.solution.labelKey,
      titleKey: def.details.solution.titleKey,
      descriptionKey: def.details.solution.descriptionKey,
    } as CaseDetails;
  })
  .filter((item): item is CaseDetails => item !== null);

export const CONCLUSION_DETAILS: CaseDetails[] = Object.values(CASE_DEFINITIONS)
  .map((def) => {
    if (!def.details.conclusion) return null;
    return {
      id: def.id,
      labelKey: def.details.conclusion.labelKey,
      titleKey: def.details.conclusion.titleKey,
      descriptionKey: def.details.conclusion.descriptionKey,
    } as CaseDetails;
  })
  .filter((item): item is CaseDetails => item !== null);

export const RESULTS_DETAILS: CaseDetails[] = Object.values(CASE_DEFINITIONS)
  .map((def) => {
    if (!def.details.results) return null;
    return {
      id: def.id,
      labelKey: def.details.results.labelKey,
      titleKey: def.details.results.titleKey,
      descriptionKey: def.details.results.descriptionKey,
    } as CaseDetails;
  })
  .filter((item): item is CaseDetails => item !== null);
