-- CreateTable
CREATE TABLE "client" (
    "id" TEXT NOT NULL,
    "system_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);
