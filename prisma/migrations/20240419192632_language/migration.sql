-- CreateTable
CREATE TABLE "Language" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "iso_code" TEXT NOT NULL,
    "native_name" TEXT NOT NULL,
    "direction" TEXT NOT NULL,
    "translations_count" INTEGER NOT NULL
);
