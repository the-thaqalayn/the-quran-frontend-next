/*
  Warnings:

  - You are about to drop the column `language_name` on the `Translation` table. All the data in the column will be lost.
  - Added the required column `language_id` to the `Translation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Translation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "author_name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "language_id" INTEGER NOT NULL,
    CONSTRAINT "Translation_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "Language" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Translation" ("author_name", "id", "name", "slug") SELECT "author_name", "id", "name", "slug" FROM "Translation";
DROP TABLE "Translation";
ALTER TABLE "new_Translation" RENAME TO "Translation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
