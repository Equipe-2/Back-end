/*
  Warnings:

  - Added the required column `franchiseeId` to the `client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "client" ADD COLUMN     "franchiseeId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "client" ADD CONSTRAINT "client_franchiseeId_fkey" FOREIGN KEY ("franchiseeId") REFERENCES "franchisee"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
