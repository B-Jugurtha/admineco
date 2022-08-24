-- AlterTable
ALTER TABLE `User` ADD COLUMN `phones` VARCHAR(191) NULL,
    ADD COLUMN `role_` ENUM('CLIENT', 'STAFF', 'DEVLIV', 'PROV', 'ADMIN', 'SUPERADMIN') NOT NULL DEFAULT 'CLIENT',
    MODIFY `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE `Note` (
    `id` VARCHAR(191) NOT NULL,
    `authorId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `note` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;