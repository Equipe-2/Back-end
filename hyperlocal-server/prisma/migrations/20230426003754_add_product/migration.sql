-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
