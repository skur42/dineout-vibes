import { RestaurantStory } from "@/typings/restaurantStory.types";
import Starbucks from '../assets/images/starbucks.png';
import BarbequeNation from '../assets/images/barbeque_nation.jpeg';
import Hooters from '../assets/images/hooters.png';
import LouisBurger from '../assets/images/louis_burger.png';

export const stories: RestaurantStory[] = [
  {
    id: 1,
    name: 'Starbucks',
    logo: Starbucks
  },
  {
    id: 2,
    name: 'BBQ',
    logo: BarbequeNation
  },
  {
    id: 3,
    name: 'Hooters',
    logo: Hooters
  },
  {
    id: 4,
    name: 'Louis',
    logo: LouisBurger
  },
]