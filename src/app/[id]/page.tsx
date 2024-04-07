"use server";

import VerseList from "@/components/verse/VerseList";
import { getVersesByChapter } from "@/db/queries/verses";
import { parse } from "path";

interface ChapterShowProps {
  params: {
    id: string;
  };
}
const ChapterShowPage = async ({ params }: ChapterShowProps) => {
  const chapterId = parseInt(params.id);

  return (
    <div>
      <VerseList fetchData={() => getVersesByChapter(chapterId)} />
    </div>
  );
};
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "113" }, { id: "114" }];
}

export default ChapterShowPage;
