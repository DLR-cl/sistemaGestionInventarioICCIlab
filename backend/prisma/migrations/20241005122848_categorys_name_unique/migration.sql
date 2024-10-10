/*
  Warnings:

  - A unique constraint covering the columns `[nombre_categoria]` on the table `categoria` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `categoria_nombre_categoria_key` ON `categoria`(`nombre_categoria`);
