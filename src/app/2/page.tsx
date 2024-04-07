"use server";

import VerseList from "@/components/verse/VerseList";
import { getVersesByChapter } from "@/db/queries/verses";
import { parse } from "path";

interface ChapterShowProps {
  params: {
    id: string;
  };
}
const ChapterShowPage = async () => {
  // const chapterId = parseInt(params.id);

  return (
    <div>
      <VerseList fetchData={() => getVersesByChapter(2)} />
    </div>
  );
};
export default ChapterShowPage;
