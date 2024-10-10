/*
  Warnings:

  - You are about to drop the column `id_uta` on the `prestamo` table. All the data in the column will be lost.
  - The primary key for the `recurso` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `nombre_categoria` on table `categoria` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_dici` on table `recurso` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `prestamo` DROP FOREIGN KEY `prestamo_ibfk_1`;

-- AlterTable
ALTER TABLE `categoria` MODIFY `nombre_categoria` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `prestamo` DROP COLUMN `id_uta`,
    ADD COLUMN `id_dici` VARCHAR(20) NULL;

-- AlterTable
ALTER TABLE `recurso` DROP PRIMARY KEY,
    MODIFY `id_dici` VARCHAR(20) NOT NULL,
    ADD PRIMARY KEY (`id_dici`);

-- CreateIndex
CREATE INDEX `id_dici` ON `prestamo`(`id_dici`);

-- AddForeignKey
ALTER TABLE `prestamo` ADD CONSTRAINT `prestamo_ibfk_1` FOREIGN KEY (`id_dici`) REFERENCES `recurso`(`id_dici`) ON DELETE NO ACTION ON UPDATE NO ACTION;
