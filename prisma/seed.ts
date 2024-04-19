import { PrismaClient, Verse } from "@prisma/client";
import chapterFile from "./json-files/chapters.json";
import verseFile from "./json-files/verses.json";
import languageFile from "./json-files/languages.json";
import translationFile from "./json-files/translations.json";

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
const translationsCreate = translationFile.translations
  .map((t) => {
    let id = languageFile.languages.find((l) =>
      l.name.toLowerCase().includes(t.language_name.toLowerCase())
    )?.id;

    return {
      id: t.id,
      name: t.name ?? "",
      author_name: t.author_name ?? "",
      slug: t.slug,
      language_id: id ?? 0,
    };
  })
  .filter((l) => l.language_id > 0);
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
  // console.log(JSON.stringify(translationsCreate));
  await prisma.translation.createMany({
    data: translationsCreate,
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
