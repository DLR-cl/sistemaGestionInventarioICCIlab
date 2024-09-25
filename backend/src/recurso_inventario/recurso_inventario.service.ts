import { Injectable } from '@nestjs/common';
import { CreateRecursoInventarioDto } from './dto/create-recurso_inventario.dto';
import { UpdateRecursoInventarioDto } from './dto/update-recurso_inventario.dto';

@Injectable()
export class RecursoInventarioService {
  create(createRecursoInventarioDto: CreateRecursoInventarioDto) {
    return 'This action adds a new recursoInventario';
  }

  findAll() {
    return `This action returns all recursoInventario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recursoInventario`;
  }

  update(id: number, updateRecursoInventarioDto: UpdateRecursoInventarioDto) {
    return `This action updates a #${id} recursoInventario`;
  }

  remove(id: number) {
    return `This action removes a #${id} recursoInventario`;
  }
}
