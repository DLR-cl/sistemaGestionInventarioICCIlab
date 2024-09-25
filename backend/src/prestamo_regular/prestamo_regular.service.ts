import { Injectable } from '@nestjs/common';
import { CreatePrestamoRegularDto } from './dto/create-prestamo_regular.dto';
import { UpdatePrestamoRegularDto } from './dto/update-prestamo_regular.dto';

@Injectable()
export class PrestamoRegularService {
  create(createPrestamoRegularDto: CreatePrestamoRegularDto) {
    return 'This action adds a new prestamoRegular';
  }

  findAll() {
    return `This action returns all prestamoRegular`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prestamoRegular`;
  }

  update(id: number, updatePrestamoRegularDto: UpdatePrestamoRegularDto) {
    return `This action updates a #${id} prestamoRegular`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestamoRegular`;
  }
}
