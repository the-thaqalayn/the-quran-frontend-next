"use client";

import Link from "next/link";
interface SurahCardProps {
  id: number;
  simpleName: string;
  translatedName: string;
  versesCount: number;
}

const SurahCard = ({
  id,
  simpleName,
  translatedName,
  versesCount,
}: SurahCardProps) => {
  return (
    <Link key={id} href={`/${id}`} target="_blank" className="group">
      <div className="flex bg-white  group-hover:border-cyan-600 group-hover:bg-gray-100  w-full  flex-row align-middle justify-between border border-solid border-gray-200 rounded cursor-pointer p-4">
        <div className="flex flex-row align-middle">
          <div className="flex rounded  group-hover:bg-cyan-600 group-hover:text-white bg-gray-100  align-middle justify-center rotate-45 border border-solid round me-5  w-10 h-10">
            <span className="-rotate-45 my-auto font-bold align-baseline leading-5 justify-center m-0 p-0">
              {id}
            </span>
          </div>
          <div className="flex flex-col ">
            <div className="font-bold ">{simpleName}</div>
            <div className="text-xs font-bold text-gray-500  group-hover:text-cyan-600">
              {translatedName}
            </div>
          </div>
        </div>

        <div className="flex flex-col text-center">
          <div className="font-surah text-xl">
            {id.toString().padStart(3, "0")}
          </div>
          <div className="font-sans font-bold text-[0.7rem] text-gray-500  group-hover:text-cyan-600">
            {versesCount} Ayahs
          </div>
        </div>
      </div>
    </Link>
  );
};
export default SurahCard;
