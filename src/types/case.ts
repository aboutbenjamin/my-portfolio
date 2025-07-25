export type CaseResultCard = {
  value: string;
  labelKey: string;
  delay: number;
};

export type CaseDetailsSection = {
  labelKey: string;
  titleKey: string;
  descriptionKey: string;
};

export type CaseData = {
  id: number;
  key: string;
  titleKey: string;
  tags: readonly string[];
  image: string;
  images?:
    | string[]
    | {
        firstSection: string[];
        secondSection?: string[];
        thirdSection?: string[];
      };
  client: string;
  website?: string;
  startProject: string;
  mediaType?: "image" | "video" | "";
  mediaSrc?: string;
  conclustion?: string;
  scrollGalleryImages?: string[];
  results?: CaseResultCard[];
  details?: {
    about?: CaseDetailsSection;
    challenge?: CaseDetailsSection;
    solution?: CaseDetailsSection;
    conclusion?: CaseDetailsSection;
    results?: CaseDetailsSection;
  };
};
