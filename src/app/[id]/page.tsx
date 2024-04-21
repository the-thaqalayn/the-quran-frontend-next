"use server";

import VerseList from "@/components/verse/VerseList";
import { getMinMaxPage, getVersesByPage } from "@/db/queries/verses";
import { Verse } from "@prisma/client";

interface ChapterShowProps {
  params: {
    id: string;
  };
}

const ChapterShowPage = async ({ params }: ChapterShowProps) => {
  const chapterId = parseInt(params.id);
  const search: Partial<Verse> = { chapter_id: chapterId };
  const pages = await getMinMaxPage(search);
  const initialVerses = await getVersesByPage({
    ...search,
    page_number: pages[0],
  });
  console.log(JSON.stringify(initialVerses));
  return (
    <div>
      <VerseList initialVerses={initialVerses} search={search} pages={pages} />
    </div>
  );
};
// export async function generateStaticParams() {
//   return [{ id: "1" }, { id: "113" }, { id: "114" }];
// }

export default ChapterShowPage;
