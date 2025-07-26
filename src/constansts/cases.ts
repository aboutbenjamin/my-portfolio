import type { CaseData } from "../types/case";
import { CASE_KEYS } from "./caseKeys";
import { VODAFONE_CASE } from "./cases/vodafone";
import { ZIGGO_CASE } from "./cases/ziggo";
import { ILIONX_CASE } from "./cases/ilionx";
import { TERMYNEN_CASE } from "./cases/termynen";
import { TROUBLEFREE_CASE } from "./cases/troublefree";
import { CLEAN_BEACH_CASE } from "./cases/cleanBeach";
import { FREELUENCER_CASE } from "./cases/freeluencer";
import { TWILL_CASE } from "./cases/twill";
import { QPARK_CASE } from "./cases/qpark";

export type CaseDetails = {
  id: number;
  labelKey: string;
  titleKey: string;
  descriptionKey: string;
};

const CASE_DEFINITIONS = {
  [CASE_KEYS.VODAFONE]: VODAFONE_CASE,
  [CASE_KEYS.ZIGGO]: ZIGGO_CASE,
  [CASE_KEYS.ILIONX]: ILIONX_CASE,
  [CASE_KEYS.TERMYNEN]: TERMYNEN_CASE,
  [CASE_KEYS.TROUBLEFREE]: TROUBLEFREE_CASE,
  [CASE_KEYS.CLEAN_BEACH]: CLEAN_BEACH_CASE,
  [CASE_KEYS.FREELUENCER]: FREELUENCER_CASE,
  [CASE_KEYS.TWILL]: TWILL_CASE,
  [CASE_KEYS.QPARK]: QPARK_CASE,
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
