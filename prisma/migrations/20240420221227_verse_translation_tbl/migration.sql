-- CreateTable
CREATE TABLE "VerseTranslation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "resource_id" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "verse_id" INTEGER NOT NULL
);
