-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Verse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "chapter_id" INTEGER NOT NULL,
    "verse_number" INTEGER NOT NULL,
    "verse_key" TEXT NOT NULL,
    "page_number" INTEGER NOT NULL,
    "juz_number" INTEGER NOT NULL,
    "hizb_number" INTEGER NOT NULL,
    "rub_el_hizb_number" INTEGER NOT NULL,
    "ruku_number" INTEGER NOT NULL,
    "manzil_number" INTEGER NOT NULL,
    "sajdah_number" INTEGER,
    "text_uthmani" TEXT NOT NULL,
    "text_indopak" TEXT NOT NULL,
    "code_v1" TEXT NOT NULL,
    "code_v2" TEXT NOT NULL
);
INSERT INTO "new_Verse" ("chapter_id", "code_v1", "code_v2", "hizb_number", "id", "juz_number", "manzil_number", "page_number", "rub_el_hizb_number", "ruku_number", "sajdah_number", "text_indopak", "text_uthmani", "verse_key", "verse_number") SELECT "chapter_id", "code_v1", "code_v2", "hizb_number", "id", "juz_number", "manzil_number", "page_number", "rub_el_hizb_number", "ruku_number", "sajdah_number", "text_indopak", "text_uthmani", "verse_key", "verse_number" FROM "Verse";
DROP TABLE "Verse";
ALTER TABLE "new_Verse" RENAME TO "Verse";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
