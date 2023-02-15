import { StaticImageData } from "next/image"

export type RestaurantStory = {
  id: number,
  name: string,
  logo: StaticImageData,
  stories?: any[],
}