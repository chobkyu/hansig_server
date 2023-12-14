/*
  Warnings:

  - You are about to drop the column `userId` on the `location` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "location" DROP CONSTRAINT "location_userId_fkey";

-- AlterTable
ALTER TABLE "location" DROP COLUMN "userId";
