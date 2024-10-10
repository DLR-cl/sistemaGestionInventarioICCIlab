/*
  Warnings:

  - You are about to drop the column `m_apellido` on the `estudiante` table. All the data in the column will be lost.
  - You are about to drop the column `p_apellido` on the `estudiante` table. All the data in the column will be lost.
  - You are about to drop the column `p_nombre` on the `estudiante` table. All the data in the column will be lost.
  - You are about to drop the column `s_nombre` on the `estudiante` table. All the data in the column will be lost.
  - You are about to alter the column `hora_fin` on the `regular` table. The data in that column could be lost. The data in that column will be cast from `VarChar(6)` to `Date`.
  - You are about to drop the column `apellido` on the `usuario` table. All the data in the column will be lost.
  - Made the column `descripcion` on table `especial` required. This step will fail if there are existing NULL values in that column.
  - Made the column `motivo` on table `especial` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `nombre` to the `estudiante` table without a default value. This is not possible if the table is not empty.
  - Made the column `fecha_inicio` on table `prestamo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_dici` on table `prestamo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hora_inicio` on table `regular` required. This step will fail if there are existing NULL values in that column.
  - Made the column `grado` on table `sanciones` required. This step will fail if there are existing NULL values in that column.
  - Made the column `estado_sancion` on table `sanciones` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_usuario` on table `sanciones` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rut` on table `sanciones` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `usuario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `usuario` on table `usuario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `correo` on table `usuario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `usuario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rut` on table `usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `prestamo` DROP FOREIGN KEY `prestamo_ibfk_1`;

-- DropForeignKey
ALTER TABLE `sanciones` DROP FOREIGN KEY `sanciones_ibfk_1`;

-- DropForeignKey
ALTER TABLE `sanciones` DROP FOREIGN KEY `sanciones_ibfk_2`;

-- AlterTable
ALTER TABLE `especial` MODIFY `descripcion` VARCHAR(1000) NOT NULL,
    MODIFY `motivo` VARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE `estudiante` DROP COLUMN `m_apellido`,
    DROP COLUMN `p_apellido`,
    DROP COLUMN `p_nombre`,
    DROP COLUMN `s_nombre`,
    ADD COLUMN `nombre` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `prestamo` MODIFY `fecha_inicio` DATE NOT NULL,
    MODIFY `id_dici` VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE `regular` MODIFY `hora_inicio` DATE NOT NULL,
    MODIFY `hora_fin` DATE NULL;

-- AlterTable
ALTER TABLE `sanciones` MODIFY `grado` INTEGER NOT NULL,
    MODIFY `estado_sancion` VARCHAR(9) NOT NULL,
    MODIFY `id_usuario` INTEGER NOT NULL,
    MODIFY `rut` VARCHAR(12) NOT NULL;

-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `apellido`,
    MODIFY `nombre` VARCHAR(100) NOT NULL,
    MODIFY `usuario` VARCHAR(30) NOT NULL,
    MODIFY `correo` VARCHAR(50) NOT NULL,
    MODIFY `password` VARCHAR(30) NOT NULL,
    MODIFY `rut` VARCHAR(12) NOT NULL;

-- AddForeignKey
ALTER TABLE `prestamo` ADD CONSTRAINT `prestamo_ibfk_1` FOREIGN KEY (`id_dici`) REFERENCES `recurso`(`id_dici`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `sanciones` ADD CONSTRAINT `sanciones_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `sanciones` ADD CONSTRAINT `sanciones_ibfk_2` FOREIGN KEY (`rut`) REFERENCES `estudiante`(`rut`) ON DELETE NO ACTION ON UPDATE NO ACTION;
