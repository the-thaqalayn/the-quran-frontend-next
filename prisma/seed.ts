import { PrismaClient, Verse } from "@prisma/client";
import chapterFile from "./json-files/chapters.json";
import verseFile from "./json-files/verses.json";
import languageFile from "./json-files/languages.json";

const prisma = new PrismaClient();
//type ChapetrInput = Prisma.Args<typeof prisma.chapter, "createMany">["data"];
const chaptersToCreate = chapterFile.chapters.map((c) => ({
  id: c.id,
  revelation_place: c.revelation_place,
  revelation_order: c.revelation_order,
  bismillah_pre: c.bismillah_pre,
  name_simple: c.name_simple,
  name_complex: c.name_complex,
  name_arabic: c.name_arabic,
  verses_count: c.verses_count,
  pages: c.pages.toString(),
  translated_name: c.translated_name.name,
}));
async function main() {
  await prisma.chapter.createMany({
    data: chaptersToCreate,
  });
  await prisma.verse.createMany({
    data: verseFile.verses,
  });
  await prisma.language.createMany({
    data: languageFile.languages,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
