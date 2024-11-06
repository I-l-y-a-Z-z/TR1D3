/*
  Warnings:

  - You are about to drop the column `name` on the `Offer` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Stars" AS ENUM ('ONE', 'TWO', 'THREE', 'FOUR', 'FIVE');

-- AlterTable
ALTER TABLE "Offer" DROP COLUMN "name",
ADD COLUMN     "category" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "stars" "Stars" NOT NULL DEFAULT 'ONE',
ADD COLUMN     "title" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "imageSrc" SET DEFAULT '';
