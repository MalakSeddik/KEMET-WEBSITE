-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "leatherGrade" TEXT,
ADD COLUMN     "personalizable" BOOLEAN NOT NULL DEFAULT false;
