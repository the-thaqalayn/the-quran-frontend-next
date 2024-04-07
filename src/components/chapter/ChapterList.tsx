"use server";
import type { Chapter } from "@prisma/client";
import ChapterListCard from "./ChapterListCard";

interface ChapterListProps {
  fechData: () => Promise<Chapter[]>;
}
const ChapterList = async ({ fechData }: ChapterListProps) => {
  const chapters = await fechData();

  const renderedChapterList = chapters.map((c) => (
    <ChapterListCard
      id={c.id}
      simpleName={c.name_simple}
      translatedName={c.translated_name}
      versesCount={c.verses_count}
    />
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {renderedChapterList}
    </div>
  );
};
export default ChapterList;
