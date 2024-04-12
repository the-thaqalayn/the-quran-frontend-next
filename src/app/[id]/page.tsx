"use server";

import VerseList from "@/components/verse/VerseList";
import { getMinMaxPage, getVersesByPage } from "@/db/queries/verses";
import { Verse } from "@prisma/client";
import { useMemo, useState } from "react";

interface ChapterShowProps {
  params: {
    id: string;
  };
}

const ChapterShowPage = async ({ params }: ChapterShowProps) => {
  const [chapterId] = useState<number>(parseInt(params.id));
  const [search] = useState<Partial<Verse>>({ chapter_id: chapterId });

  const pages = await useMemo(
    async () => await getMinMaxPage(search),
    [chapterId]
  );
  return (
    <div>
      <VerseList
        initialVerses={await getVersesByPage({
          ...search,
          page_number: pages[0],
        })}
        search={search}
        pages={pages}
      />
    </div>
  );
};
// export async function generateStaticParams() {
//   return [{ id: "1" }, { id: "113" }, { id: "114" }];
// }

export default ChapterShowPage;
