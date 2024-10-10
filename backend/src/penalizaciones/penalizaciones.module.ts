import { Module } from '@nestjs/common';
import { PenalizacionesService } from './penalizaciones.service';
import { PenalizacionesController } from './penalizaciones.controller';

@Module({
  controllers: [PenalizacionesController],
  providers: [PenalizacionesService],
})
export class PenalizacionesModule {}
