import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface Skill {
  image: StaticImageData;
  techStack: string;
  japaneseDescription: string;
  englishDescription: string;
}

export interface Project {
  id: string;
  englishTitle: string;
  japaneseTitle: string;
  year: string;
  image: StaticImageData;
  englishDescription: string;
  japaneseDescription: string;
  englishAchievements: string;
  japaneseAchievements: string;
  login?: boolean;
  loginUser?: { user: string; password: string }[];
  techStach: { name: string; icon: IconType }[];
  url: string;
  github?: string;
  projectUrls?: {
    name: string;
    url: string;
  }[];
}
