"use server";

import VerseList from "@/components/verse/VerseList";
import {
  getDirection,
  getMinMaxPage,
  getVersesByPage,
} from "@/db/queries/verses";
import { Verse } from "@prisma/client";

interface ChapterWithVerseShowProps {
  params: {
    vid: string;
    cid: string;
  };
  searchParams: {
    translation: string;
  };
}

const ChapterWithVerseShowPage = async ({
  params,
  searchParams,
}: ChapterWithVerseShowProps) => {
  console.log(JSON.stringify(params));
  const chapterId = parseInt(params.cid);
  const verseId = parseInt(params.vid);
  const tid = searchParams.translation
    ? parseInt(searchParams.translation)
    : undefined;
  const search: Partial<Verse> = {
    chapter_id: chapterId,
    verse_number: verseId,
  };
  const pages = await getMinMaxPage(search);
  // const tid = 135;
  // console.log(tid);
  console.log(JSON.stringify(pages));

  const initialVerses = await getVersesByPage(
    {
      ...search,
      page_number: pages[0],
    },
    tid
  );
  const translation = await getDirection(tid);

  console.log(JSON.stringify(initialVerses));
  return (
    <div>
      <VerseList
        initialVerses={initialVerses}
        search={search}
        pages={pages}
        tid={tid}
        direction={translation?.language.direction}
      />
    </div>
  );
};
// export async function generateStaticParams() {
//   return [{ id: "1" }, { id: "113" }, { id: "114" }];
// }

export default ChapterWithVerseShowPage;
