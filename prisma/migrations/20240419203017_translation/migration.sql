-- CreateTable
CREATE TABLE "Translation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "author_name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "language_name" TEXT NOT NULL
);
