"use server";

import VerseList from "@/components/verse/VerseList";
import { getVersesByPage } from "@/db/queries/verses";
import { Verse } from "@prisma/client";

interface ChapterShowProps {
  params: {
    id: string;
  };
}

const ChapterShowPage = async ({ params }: ChapterShowProps) => {
  const chapterId = parseInt(params.id);
  const search: Partial<Verse> = { chapter_id: 2 };
  return (
    <div>
      <VerseList
        initialVerses={await getVersesByPage({ chapter_id: 2, page_number: 2 })}
        search={search}
        pages={[2, 12]}
      />
    </div>
  );
};
// export async function generateStaticParams() {
//   return [{ id: "1" }, { id: "113" }, { id: "114" }];
// }

export default ChapterShowPage;
