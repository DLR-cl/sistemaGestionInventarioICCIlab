import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PenalizacionesService } from './penalizaciones.service';
import { CreatePenalizacioneDto } from './dto/create-penalizacione.dto';
import { UpdatePenalizacioneDto } from './dto/update-penalizacione.dto';

@Controller('penalizaciones')
export class PenalizacionesController {
  constructor(private readonly penalizacionesService: PenalizacionesService) {}

  @Post()
  create(@Body() createPenalizacioneDto: CreatePenalizacioneDto) {
    return this.penalizacionesService.create(createPenalizacioneDto);
  }

  @Get()
  findAll() {
    return this.penalizacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penalizacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePenalizacioneDto: UpdatePenalizacioneDto) {
    return this.penalizacionesService.update(+id, updatePenalizacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.penalizacionesService.remove(+id);
  }
}
