import { Module } from '@nestjs/common';
import { RecursoInventarioService } from './recurso_inventario.service';
import { RecursoInventarioController } from './recurso_inventario.controller';

@Module({
  controllers: [RecursoInventarioController],
  providers: [RecursoInventarioService],
})
export class RecursoInventarioModule {}
