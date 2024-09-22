-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Category_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recursos` (
    `icci_id` INTEGER NOT NULL,
    `id_uta` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `estado` BOOLEAN NOT NULL,
    `disponibilidad` BOOLEAN NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `lugar` VARCHAR(191) NOT NULL,
    `category_id` INTEGER NOT NULL,

    UNIQUE INDEX `Recursos_id_uta_key`(`id_uta`),
    PRIMARY KEY (`icci_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estudiante` (
    `rut` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `estado` BOOLEAN NOT NULL,

    UNIQUE INDEX `Estudiante_email_key`(`email`),
    PRIMARY KEY (`rut`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `estado` BOOLEAN NOT NULL,
    `tipo` ENUM('Administrador', 'Ayudante') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Prestamo` (
    `id_prestamo` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_ini` DATETIME(3) NOT NULL,
    `fecha_fin` DATETIME(3) NOT NULL,
    `hora_ini` DATETIME(3) NOT NULL,
    `hora_fin` DATETIME(3) NOT NULL,
    `prestamo_tipo` ENUM('Regular', 'Especial') NOT NULL,
    `estudiante_rut` VARCHAR(191) NOT NULL,
    `recurso_icci_id` INTEGER NOT NULL,
    `usuario_id` INTEGER NOT NULL,

    PRIMARY KEY (`id_prestamo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Penalizacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estado` BOOLEAN NOT NULL DEFAULT true,
    `grado` INTEGER NOT NULL,
    `fecha_ini` DATETIME(3) NOT NULL,
    `fecha_fin` DATETIME(3) NOT NULL,
    `comentario` VARCHAR(191) NOT NULL,
    `estudiante_rut` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Recursos` ADD CONSTRAINT `Recursos_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Prestamo` ADD CONSTRAINT `Prestamo_estudiante_rut_fkey` FOREIGN KEY (`estudiante_rut`) REFERENCES `Estudiante`(`rut`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Prestamo` ADD CONSTRAINT `Prestamo_recurso_icci_id_fkey` FOREIGN KEY (`recurso_icci_id`) REFERENCES `Recursos`(`icci_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Prestamo` ADD CONSTRAINT `Prestamo_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penalizacion` ADD CONSTRAINT `Penalizacion_estudiante_rut_fkey` FOREIGN KEY (`estudiante_rut`) REFERENCES `Estudiante`(`rut`) ON DELETE RESTRICT ON UPDATE CASCADE;
