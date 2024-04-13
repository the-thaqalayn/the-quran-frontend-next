"use client";

import { fetchChapterDetails } from "@/actions/verse";
import { Chapter } from "@prisma/client";
import { useEffect, useState } from "react";

interface ChapterHeaderProps {
  chapterId?: number;
}

const upperFirstChar = (word?: string) => {
  const capitalized =
    word !== undefined ? word.charAt(0).toUpperCase() + word.slice(1) : "";
  return capitalized;
};
const ChapterHeader = ({ chapterId }: ChapterHeaderProps) => {
  const [chapter, setChapter] = useState<Chapter | null>(null);

  useEffect(() => {
    const loadData = async () => {
      if (chapterId !== undefined) {
        const result = await fetchChapterDetails(chapterId);
        setChapter(result);
      }
    };
    loadData();
  }, []);

  return (
    <div className="flex bg-white  group-hover:border-cyan-600 group-hover:bg-gray-100  w-full  flex-row align-middle justify-between border border-solid border-gray-200 rounded cursor-pointer p-4">
      <div className="flex flex-row align-middle w-1/3">
        <div className="flex rounded  group-hover:bg-cyan-600 group-hover:text-white bg-gray-100  align-middle justify-center rotate-45 border border-solid round me-5  w-10 h-10">
          <span className="-rotate-45 my-auto font-bold align-baseline leading-5 justify-center m-0 p-0 text-gray-500">
            {chapter?.id}
          </span>
        </div>
        <div className="flex flex-col ">
          <div className="font-bold ">{chapter?.name_simple}</div>
          <div className="text-xs font-bold text-gray-500  group-hover:text-cyan-600">
            {chapter?.translated_name}
          </div>
        </div>
      </div>

      <div className="flex flex-col text-center w-1/3 ">
        <div className="font-surah text-3xl text-cyan-600">
          {chapter?.id.toString().padStart(3, "0")}
        </div>
        <div className="font-sans font-bold text-[0.7rem] text-gray-500  group-hover:text-cyan-600">
          {chapter?.verses_count} Ayahs
        </div>
      </div>

      <div className="flex flex-row align-middle justify-end w-1/3">
        <div className="flex flex-col ">
          <div className="font-bold ">
            {upperFirstChar(chapter?.revelation_place)}
          </div>
          <div className="text-xs font-bold text-gray-500  group-hover:text-cyan-600 text-center">
            Order {chapter?.revelation_order}
          </div>
        </div>
        <div className="flex rounded  group-hover:bg-cyan-600 group-hover:text-white bg-gray-100  align-middle justify-center rotate-45 border border-solid round ms-5  w-10 h-10">
          <span className="-rotate-45 my-auto font-bold align-baseline leading-5 justify-center m-0 p-0  text-gray-500">
            {chapter?.id}
          </span>
        </div>
      </div>
    </div>
  );
};
export default ChapterHeader;
