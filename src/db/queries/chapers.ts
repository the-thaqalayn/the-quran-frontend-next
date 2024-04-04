import { db } from "..";
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

export const fetchChapters = async (): Promise<Chapter[]> => {
  return await db.chapter.findMany({
    where: {},
  });
};
