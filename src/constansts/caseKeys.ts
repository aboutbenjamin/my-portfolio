export const CASE_KEYS = {
  VODAFONE: "vodafone",
  ZIGGO: "ziggo",
  ILIONX: "ilionx",
  TERMYNEN: "termynen",
  TROUBLEFREE: "troublefree",
  CLEAN_BEACH: "cleanBeach",
  FREELUENCER: "freeluencer",
  TWILL: "twill",
  QPARK: "qpark",
} as const;

export type CaseKey = (typeof CASE_KEYS)[keyof typeof CASE_KEYS];
