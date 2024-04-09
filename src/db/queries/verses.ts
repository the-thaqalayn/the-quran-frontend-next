import type { Verse } from "@prisma/client";
import { db } from "@/db";

export const getVersesByPage = (v: Partial<Verse>): Promise<Verse[]> => {
  return db.verse.findMany({
    where: {
      AND: [
        {
          ...(v.juz_number ? { juz_number: v.juz_number } : {}),
        },
        {
          ...(v.hizb_number ? { hizb_number: v.hizb_number } : {}),
        },
        {
          ...(v.rub_el_hizb_number
            ? { rub_el_hizb_number: v.rub_el_hizb_number }
            : {}),
        },
        {
          ...(v.ruku_number ? { ruku_number: v.ruku_number } : {}),
        },
        {
          ...(v.manzil_number ? { manzil_number: v.manzil_number } : {}),
        },
        {
          ...(v.chapter_id ? { chapter_id: v.chapter_id } : {}),
        },
        {
          ...(v.page_number ? { page_number: v.page_number } : {}),
        },
        {
          ...(v.verse_key ? { verse_key: v.verse_key } : {}),
        },
      ],
    },
    orderBy: {
      id: "asc",
    },
  });
};
