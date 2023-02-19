import Image from "next/image";
import { stories } from "@/constants/data";
import clsx from "clsx";

export const StoriesTray = () => {
  return (
    <div className="w-full flex items-center overflow-x-auto no-scrollbar">
      {stories.map((story, index) =>
        <div key={index} className={clsx(index === stories.length - 1 ? '' : 'mr-3', "flex flex-col items-center w-14")}>
          <div className="w-12 h-12 flex items-center justify-center p-[0.2rem] border border-dashed border-white rounded-full">
            <Image src={story.logo} alt="" className="w-10 h-10 rounded-full" />
          </div>
          <div className="text-xs font-normal text-gray-200 mt-1 w-full truncate text-center">{story.name}</div>
        </div>
      )}
    </div>
  )
}