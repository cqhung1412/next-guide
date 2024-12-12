import { StaticImageData } from "next/image";

export interface Meal {
  id: string;
  slug: string;
  title: string;
  image: StaticImageData;
  image_path: string;
  summary: string;
  creator: string;
}