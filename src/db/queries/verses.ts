import type { Verse } from "@prisma/client";
import { db } from "@/db";

export const getVersesByChapter = (chapterId: number): Promise<Verse[]> => {
  return db.verse.findMany({
    where: { chapter_id: chapterId },
  });
};
