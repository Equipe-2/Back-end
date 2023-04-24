-- CreateTable
CREATE TABLE "tier" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "score_min" INTEGER NOT NULL,
    "score_max" INTEGER NOT NULL,
    "percentage_saas" DECIMAL(65,30) NOT NULL,
    "percentage_mdr" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "tier_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tier_name_key" ON "tier"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tier_score_min_key" ON "tier"("score_min");

-- CreateIndex
CREATE UNIQUE INDEX "tier_score_max_key" ON "tier"("score_max");
