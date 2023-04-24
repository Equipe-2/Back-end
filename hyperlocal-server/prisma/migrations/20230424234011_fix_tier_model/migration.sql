/*
  Warnings:

  - You are about to alter the column `percentage_saas` on the `tier` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `percentage_mdr` on the `tier` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "tier" ALTER COLUMN "percentage_saas" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "percentage_mdr" SET DATA TYPE DOUBLE PRECISION;
