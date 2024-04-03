"use server";
import { Chapter } from "@/db/models";
import SurahCard from "./SurahCard";

interface SurahListProps {
  fechData: () => Promise<Chapter[]>;
}
const SurahList = async ({ fechData }: SurahListProps) => {
  const chapters = await fechData();
  console.log(chapters[0]);
  console.log("ok");
  const renderedSurahList = "";
  //  chapters.map((c) => (
  //   <SurahCard
  //     id={c.id}
  //     simpleName={c.name_simple}
  //     translatedName={c.translated_name.name}
  //     versesCount={c.verses_count}
  //   />
  // ));
  return <div className="grid grid-cols-3 gap-4">{renderedSurahList}</div>;
};
export default SurahList;
