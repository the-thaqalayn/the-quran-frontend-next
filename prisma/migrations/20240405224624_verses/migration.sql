-- CreateTable
CREATE TABLE "Verse" (
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
    "sajdah_number" INTEGER NOT NULL,
    "text_uthmani" TEXT NOT NULL,
    "text_indopak" TEXT NOT NULL,
    "code_v1" TEXT NOT NULL,
    "code_v2" TEXT NOT NULL
);
