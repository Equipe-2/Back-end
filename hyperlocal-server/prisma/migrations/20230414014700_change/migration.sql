/*
  Warnings:

  - The primary key for the `franchisee` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `franchisee` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "franchisee" DROP CONSTRAINT "franchisee_userId_fkey";

-- AlterTable
ALTER TABLE "franchisee" DROP CONSTRAINT "franchisee_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "franchisee_pkey" PRIMARY KEY ("userId");

-- AddForeignKey
ALTER TABLE "franchisee" ADD CONSTRAINT "franchisee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
