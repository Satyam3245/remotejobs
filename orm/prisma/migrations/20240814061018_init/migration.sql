-- CreateTable
CREATE TABLE "Jobs" (
    "id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "skill" TEXT[]
);

-- CreateIndex
CREATE UNIQUE INDEX "Jobs_id_key" ON "Jobs"("id");
