-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "Domain" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "employment_type" TEXT NOT NULL DEFAULT '',
ADD CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id");
