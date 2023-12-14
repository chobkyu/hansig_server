/*
  Warnings:

  - You are about to drop the column `googleStar` on the `hansics` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "hansics" DROP COLUMN "googleStar",
ADD COLUMN     "google_star" VARCHAR(100);
