"use server";

import { getChapterDetails } from "@/db/queries/chapers";
import { VersWitnTranslation, getVersesByPage } from "@/db/queries/verses";
import { Chapter, Verse } from "@prisma/client";

export const fetchVerses = async (
  search: Partial<Verse>,
  tid: number | undefined
): Promise<VersWitnTranslation[]> => {
  return await getVersesByPage(search, tid);
};
export const fetchChapterDetails = async (
  chapterId: number
): Promise<Chapter | null> => {
  return await getChapterDetails(chapterId);
};
