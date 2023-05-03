/*
  Warnings:

  - You are about to drop the `costumer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "costumer" DROP CONSTRAINT "costumer_franchiseeId_fkey";

-- DropTable
DROP TABLE "costumer";

-- CreateTable
CREATE TABLE "customer" (
    "id" TEXT NOT NULL,
    "system_id" INTEGER NOT NULL,
    "franchiseeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "customer" ADD CONSTRAINT "customer_franchiseeId_fkey" FOREIGN KEY ("franchiseeId") REFERENCES "franchisee"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
