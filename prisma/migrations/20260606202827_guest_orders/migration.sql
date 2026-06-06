/*
  Warnings:

  - You are about to drop the column `fawryRefNum` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `stripePaymentId` on the `Order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "fawryRefNum",
DROP COLUMN "stripePaymentId",
ADD COLUMN     "guestEmail" TEXT,
ADD COLUMN     "paymobOrderId" TEXT,
ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
