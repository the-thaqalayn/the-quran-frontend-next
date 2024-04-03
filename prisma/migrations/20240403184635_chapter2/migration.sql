/*
  Warnings:

  - You are about to drop the `Contact` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Contact";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Chapter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "revelation_place" TEXT NOT NULL,
    "revelation_order" INTEGER NOT NULL,
    "bismillah_pre" BOOLEAN NOT NULL,
    "name_simple" TEXT NOT NULL,
    "name_complex" TEXT NOT NULL,
    "name_arabic" TEXT NOT NULL,
    "verses_count" INTEGER NOT NULL,
    "pages" TEXT NOT NULL,
    "translated_name" TEXT NOT NULL
);
