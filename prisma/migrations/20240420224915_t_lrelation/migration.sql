/*
  Warnings:

  - The primary key for the `VerseTranslation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `VerseTranslation` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_VerseTranslation" (
    "resource_id" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "verse_id" INTEGER NOT NULL,

    PRIMARY KEY ("verse_id", "resource_id"),
    CONSTRAINT "VerseTranslation_verse_id_fkey" FOREIGN KEY ("verse_id") REFERENCES "Verse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "VerseTranslation_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Translation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_VerseTranslation" ("resource_id", "text", "verse_id") SELECT "resource_id", "text", "verse_id" FROM "VerseTranslation";
DROP TABLE "VerseTranslation";
ALTER TABLE "new_VerseTranslation" RENAME TO "VerseTranslation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
