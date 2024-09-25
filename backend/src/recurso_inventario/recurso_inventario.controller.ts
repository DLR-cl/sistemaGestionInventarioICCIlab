import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecursoInventarioService } from './recurso_inventario.service';
import { CreateRecursoInventarioDto } from './dto/create-recurso_inventario.dto';
import { UpdateRecursoInventarioDto } from './dto/update-recurso_inventario.dto';
import { recursos_inventario } from '@prisma/client';

@Controller('recurso-inventario')
export class RecursoInventarioController {
  constructor(private readonly recursoInventarioService: RecursoInventarioService) {}

  @Post()
  create(@Body() createRecursoInventarioDto: recursos_inventario) {
    return this.recursoInventarioService.create(createRecursoInventarioDto);
  }

  @Get()
  findAll() {
    return this.recursoInventarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recursoInventarioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecursoInventarioDto: UpdateRecursoInventarioDto) {
    return this.recursoInventarioService.update(id, updateRecursoInventarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recursoInventarioService.remove(id);
  }
}
