/*
  Warnings:

  - You are about to drop the `clients` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "clients";

-- CreateTable
CREATE TABLE "client" (
    "id" TEXT NOT NULL,
    "system_id" INTEGER NOT NULL,
    "franchiseeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "client" ADD CONSTRAINT "client_franchiseeId_fkey" FOREIGN KEY ("franchiseeId") REFERENCES "franchisee"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
