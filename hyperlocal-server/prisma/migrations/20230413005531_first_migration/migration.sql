-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "franchisee" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "personal_email" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "franchisee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "franchisee_userId_key" ON "franchisee"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "franchisee_personal_email_key" ON "franchisee"("personal_email");

-- CreateIndex
CREATE UNIQUE INDEX "franchisee_cnpj_key" ON "franchisee"("cnpj");

-- AddForeignKey
ALTER TABLE "franchisee" ADD CONSTRAINT "franchisee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
