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
INSERT INTO "new_Translation" ("author_name", "id", "language_id", "name", "slug") SELECT "author_name", "id", "language_id", "name", "slug" FROM "Translation";
DROP TABLE "Translation";
ALTER TABLE "new_Translation" RENAME TO "Translation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
