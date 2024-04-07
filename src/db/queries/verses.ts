import type { Verse } from "@prisma/client";
import { db } from "..";

export const getVersesByChapter = async (
  chapterId: number
): Promise<Verse[]> => {
  return await db.verse.findMany({
    where: { chapter_id: chapterId },
  });
};
