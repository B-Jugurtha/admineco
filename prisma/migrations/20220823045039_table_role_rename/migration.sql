/*
  Warnings:

  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `role`,
    ADD COLUMN `role_` ENUM('CLIENT', 'STAFF', 'DEVLIV', 'PROV', 'ADMIN', 'SUPERADMIN') NOT NULL DEFAULT 'CLIENT';
