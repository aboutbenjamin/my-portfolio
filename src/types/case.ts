export type CaseResultCard = {
  value: string;
  label: string;
  delay: number;
};

export type CaseData = {
  id: number;
  title: string;
  tags: string[];
  image: string;
  images?:
    | string[]
    | {
        firstSection: string[];
        secondSection: string[];
      };
  description: string;
  client: string;
  website?: string;
  startProject: string;
  mediaType?: "image" | "video" | "";
  mediaSrc?: string;
  about?: string;
  conclustion?: string;
  scrollGalleryImages?: string[];
  results?: CaseResultCard[];
};
