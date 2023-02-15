import Image from "next/image";
import Starbucks from '../../assets/images/starbucks.png';
import BarbequeNation from '../../assets/images/barbeque_nation.jpeg';
import Hooters from '../../assets/images/hooters.png';
import LouisBurger from '../../assets/images/louis_burger.png';
import { stories } from "@/constants/data";

export const StoriesTray = () => {
  return (
    <div className="flex items-center">
      {stories.map((story, index) => (
        <div key={index} className={"flex flex-col items-center mr-5"}>
          <div className="p-0.5 border border-dashed border-white rounded-full">
            <Image src={story.logo} alt="" className="w-12 h-12 rounded-full" />
          </div>
          <div className="text-xs font-normal text-gray-200 mt-1">{story.name}</div>
        </div>
      ))}
    </div>
  )
}