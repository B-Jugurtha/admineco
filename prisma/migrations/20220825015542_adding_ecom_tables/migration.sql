/*
  Warnings:

  - You are about to alter the column `role` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Enum("User_role")` to `Enum("User_role")`.
  - A unique constraint covering the columns `[company_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `company_id` VARCHAR(191) NULL,
    MODIFY `role` ENUM('Client', 'Staff', 'Livreur', 'Fournisseur', 'Admin', 'Superadmin') NOT NULL DEFAULT 'Client';

-- CreateTable
CREATE TABLE `Company` (
    `id` VARCHAR(191) NOT NULL,
    `role` ENUM('Livraison', 'Fournisseur', 'Vendeur') NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phones` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Command` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `delivery_company_id` VARCHAR(191) NOT NULL,
    `total_cost` DOUBLE NOT NULL,
    `delivery_fee` DOUBLE NOT NULL,
    `delivery_address` VARCHAR(191) NOT NULL,
    `delivery_address_gps` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `delivery_date` DATETIME(3) NULL,
    `status` ENUM('Approvisionement', 'Attente_Livraison', 'En_Livraison', 'Complete', 'Annulee') NOT NULL DEFAULT 'Approvisionement',
    `client_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Command_delivery_company_id_key`(`delivery_company_id`),
    UNIQUE INDEX `Command_client_id_key`(`client_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CommandItem` (
    `id` VARCHAR(191) NOT NULL,
    `sku` VARCHAR(191) NOT NULL,
    `qte` INTEGER NOT NULL,
    `unit_price` DOUBLE NOT NULL,
    `command_id` INTEGER NOT NULL,

    UNIQUE INDEX `CommandItem_sku_key`(`sku`),
    UNIQUE INDEX `CommandItem_command_id_key`(`command_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Supply` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `payed` BOOLEAN NOT NULL,
    `total_cost` DOUBLE NULL,
    `delivery_fees` DOUBLE NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_id` VARCHAR(191) NOT NULL,
    `delivery_date` DATETIME(3) NULL,
    `delivery_company_id` VARCHAR(191) NOT NULL,
    `provider_company_id` VARCHAR(191) NOT NULL,
    `status` ENUM('Complete', 'En_Livraison', 'En_Attente', 'Annulee') NOT NULL DEFAULT 'En_Attente',
    `extra_ref` VARCHAR(191) NULL,
    `delivery_address` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Supply_user_id_key`(`user_id`),
    UNIQUE INDEX `Supply_delivery_company_id_key`(`delivery_company_id`),
    UNIQUE INDEX `Supply_provider_company_id_key`(`provider_company_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SupplyItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sku` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SupplyItem_sku_key`(`sku`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductIdentity` (
    `sku` VARCHAR(191) NOT NULL,
    `product_group_id` VARCHAR(191) NOT NULL,
    `upc` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ProductIdentity_product_group_id_key`(`product_group_id`),
    UNIQUE INDEX `ProductIdentity_upc_key`(`upc`),
    PRIMARY KEY (`sku`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductVariation` (
    `id` VARCHAR(191) NOT NULL,
    `product_identity_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `photos` VARCHAR(191) NOT NULL,
    `color_name` VARCHAR(191) NULL,
    `color_hex` VARCHAR(191) NULL,
    `size` VARCHAR(191) NULL,
    `weight` VARCHAR(191) NULL,

    UNIQUE INDEX `ProductVariation_product_identity_id_key`(`product_identity_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductGroup` (
    `id` VARCHAR(191) NOT NULL,
    `characteristics` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductUnit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sku` VARCHAR(191) NOT NULL,
    `purchase_date` DATETIME(3) NULL,
    `purchase_price` DOUBLE NOT NULL,
    `expiration_date` DATETIME(3) NULL,

    UNIQUE INDEX `ProductUnit_sku_key`(`sku`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `invoice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_company_id_key` ON `User`(`company_id`);
