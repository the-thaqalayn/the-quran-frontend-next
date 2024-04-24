import { db } from "@/db";
import type { Chapter } from "@prisma/client";

// export type Chapter = {
//   id: number;
//   revelation_place: string;
//   revelation_order: number;
//   bismillah_pre: boolean;
//   name_simple: string;
//   name_complex: string;
//   name_arabic: string;
//   verses_count: number;
//   pages: number[];
//   translated_name: string;
// };

export const getChapters = (): Promise<Chapter[]> => {
  return db.chapter.findMany({
    where: {},
  });
};

export const getChapterDetails = (
  chapterId: number
): Promise<Chapter | null> => {
  return db.chapter.findFirst({
    where: { id: chapterId },
  });
};
