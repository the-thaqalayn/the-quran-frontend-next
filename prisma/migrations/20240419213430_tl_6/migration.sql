-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Translation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "author_name" TEXT NOT NULL,
    "slug" TEXT,
    "language_id" INTEGER NOT NULL
);
INSERT INTO "new_Translation" ("author_name", "id", "language_id", "name", "slug") SELECT "author_name", "id", "language_id", "name", "slug" FROM "Translation";
DROP TABLE "Translation";
ALTER TABLE "new_Translation" RENAME TO "Translation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
