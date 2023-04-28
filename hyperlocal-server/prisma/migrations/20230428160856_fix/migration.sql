/*
  Warnings:

  - You are about to drop the `client` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "client" DROP CONSTRAINT "client_franchiseeId_fkey";

-- DropTable
DROP TABLE "client";

-- CreateTable
CREATE TABLE "costumer" (
    "id" TEXT NOT NULL,
    "system_id" INTEGER NOT NULL,
    "franchiseeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),

    CONSTRAINT "costumer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "costumer" ADD CONSTRAINT "costumer_franchiseeId_fkey" FOREIGN KEY ("franchiseeId") REFERENCES "franchisee"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
