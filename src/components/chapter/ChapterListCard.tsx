"use client";

import Link from "next/link";
interface ChapterListCardProps {
  id: number;
  nameArabic: string;
  simpleName: string;
  translatedName: string;
  versesCount: number;
}

const ChapterListCard = ({
  id,
  nameArabic,
  simpleName,
  translatedName,
  versesCount,
}: ChapterListCardProps) => {
  return (
    <Link
      key={id}
      href={`surah/${id}?translation=135`}
      target="_blank"
      className="group"
    >
      <div className="flex bg-white dark:bg-gray-600  group-hover:border-cyan-600 dark:group-hover:border-gray-50 group-hover:bg-gray-100 dark:group-hover:bg-sky-900  w-full  flex-row align-middle justify-between border border-solid border-gray-200 rounded cursor-pointer p-4">
        <div className="flex flex-row align-middle">
          <div className="flex rounded  group-hover:bg-cyan-600 group-hover:text-white bg-gray-100 dark:bg-cyan-800 align-middle justify-center rotate-45 border border-solid round me-5  w-10 h-10">
            <span className="-rotate-45 my-auto font-bold align-baseline leading-5 justify-center m-0 p-0">
              {id}
            </span>
          </div>
          <div className="flex flex-col ">
            <div className="font-bold dark:text-gray-50">{simpleName}</div>
            <div className="text-xs font-bold text-gray-500 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
              {translatedName}
            </div>
          </div>
        </div>

        <div className="flex flex-col text-center dark:text-gray-50">
          <div className="text-xl font-textArabic">{nameArabic}</div>
          <div className="font-sans font-bold text-[0.7rem] text-gray-500 dark:text-gray-300  group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
            {versesCount} Ayahs
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ChapterListCard;
