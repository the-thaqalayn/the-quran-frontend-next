import type { Verse, Translation, VerseTranslation } from "@prisma/client";
import { db } from "@/db";
import { select } from "@nextui-org/react";

export type VersWithTranslation = Omit<
  Verse,
  "text_indopak" | "code_v1" | "code_v2"
> & {
  verseTranslation?: { text: string }[];
};
export const getDirection = async (tid: number | undefined) => {
  if (tid === undefined) return null;

  return await db.translation.findFirst({
    where: { id: { equals: tid } },
    select: {
      language: {
        select: {
          direction: true,
        },
      },
    },
  });
};
export const getVersesByPage = (
  v: Partial<Verse>,
  tid: number | undefined
): Promise<VersWithTranslation[]> => {
  if (tid) {
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
          {
            ...(v.verse_number
              ? { verse_number: { gte: v.verse_number } }
              : {}),
          },
        ],
      },
      // include: {
      //   verseTranslation: {
      //     where: { resource_id: { equals: tid } },
      //     select: { text: true },
      //   },
      // },
      orderBy: {
        id: "asc",
      },
      select: {
        id: true,
        chapter_id: true,
        verse_number: true,
        verse_key: true,
        page_number: true,
        juz_number: true,
        hizb_number: true,
        rub_el_hizb_number: true,
        ruku_number: true,
        manzil_number: true,
        sajdah_number: true,
        text_uthmani: true,
        verseTranslation: {
          where: { resource_id: { equals: tid } },
          select: { text: true },
        },
      },
    });
  } else {
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
          {
            ...(v.verse_number
              ? { verse_number: { gte: v.verse_number } }
              : {}),
          },
        ],
      },
      orderBy: {
        id: "asc",
      },
      select: {
        id: true,
        chapter_id: true,
        verse_number: true,
        verse_key: true,
        page_number: true,
        juz_number: true,
        hizb_number: true,
        rub_el_hizb_number: true,
        ruku_number: true,
        manzil_number: true,
        sajdah_number: true,
        text_uthmani: true,
      },
    });
  }
};

export const getMinMaxPage = async (
  v: Partial<Verse>
): Promise<[number, number]> => {
  const aggregate = await db.verse.aggregate({
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
        {
          ...(v.verse_number ? { verse_number: { gte: v.verse_number } } : {}),
        },
      ],
    },
    _min: {
      page_number: true,
    },
    _max: {
      page_number: true,
    },
  });
  return [aggregate._min.page_number ?? 0, aggregate._max.page_number ?? 0];
};
