-- CreateTable
CREATE TABLE `hero` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `id_produkimg` INTEGER NOT NULL,

    INDEX `Hero_id_produkimg_fkey`(`id_produkimg`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `harga_rupiah` INTEGER NOT NULL,
    `harga_ringgit` INTEGER NULL,
    `harga_dolar` INTEGER NULL,
    `deskripsi` VARCHAR(191) NULL,
    `rank` VARCHAR(191) NOT NULL,
    `author_id` INTEGER NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `diskon` DOUBLE NULL,
    `highlight` BOOLEAN NULL DEFAULT false,
    `email_akun` VARCHAR(191) NULL,
    `password_akun` VARCHAR(191) NULL,
    `buyer_email` VARCHAR(191) NULL,
    `buyer_lang` VARCHAR(191) NULL,
    `merchant_order_id` VARCHAR(191) NULL,

    UNIQUE INDEX `Produk_nama_key`(`nama`),
    UNIQUE INDEX `produk_merchant_order_id_key`(`merchant_order_id`),
    INDEX `Produk_author_id_fkey`(`author_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produkimg` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `link` VARCHAR(191) NOT NULL,
    `id_produk` INTEGER NOT NULL,
    `urutan` INTEGER NOT NULL,

    INDEX `ProdukImg_id_produk_fkey`(`id_produk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `skin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `alias_skin` VARCHAR(191) NULL,
    `id_hero` INTEGER NOT NULL,

    UNIQUE INDEX `Skin_id_hero_key`(`id_hero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Users_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `banner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `highlight` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pengumuman` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pengumuman` TEXT NOT NULL,
    `highlight` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kode_promo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode` VARCHAR(255) NOT NULL,
    `diskon` FLOAT NOT NULL,

    UNIQUE INDEX `kode`(`kode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vw_search` (
    `id` INTEGER NOT NULL,
    `search` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `hero` ADD CONSTRAINT `Hero_id_produkimg_fkey` FOREIGN KEY (`id_produkimg`) REFERENCES `produkimg`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produk` ADD CONSTRAINT `Produk_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produkimg` ADD CONSTRAINT `ProdukImg_id_produk_fkey` FOREIGN KEY (`id_produk`) REFERENCES `produk`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `skin` ADD CONSTRAINT `Skin_id_hero_fkey` FOREIGN KEY (`id_hero`) REFERENCES `hero`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
