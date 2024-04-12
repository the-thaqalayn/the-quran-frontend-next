"use server";

import { getVersesByPage } from "@/db/queries/verses";
import { Verse } from "@prisma/client";

export const fetchVerses = async (search: Partial<Verse>): Promise<Verse[]> => {
  return await getVersesByPage(search);
};
