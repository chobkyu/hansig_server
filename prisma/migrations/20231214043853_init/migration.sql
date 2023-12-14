/*
  Warnings:

  - You are about to drop the column `locationId` on the `hansics` table. All the data in the column will be lost.
  - Added the required column `location_id` to the `hansics` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "hansics" DROP CONSTRAINT "hansics_locationId_fkey";

-- AlterTable
ALTER TABLE "hansics" DROP COLUMN "locationId",
ADD COLUMN     "location_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "hansics" ADD CONSTRAINT "hansics_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
