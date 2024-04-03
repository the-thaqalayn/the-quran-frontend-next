import type { Chapter } from "./models";

export const fetchChapters = async (): Promise<Chapter[]> => {
  const res = await fetch("https://api.quran.com/api/v4/chapters");

  if (!res.ok) {
    throw new Error("Failed to fetch Chaperts");
  }
  return res.json();
  // const result: Promise<Chapter[]> = res.json();
  // console.log(result);
  // return result;
};
