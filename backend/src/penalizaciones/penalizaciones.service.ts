import { Injectable } from '@nestjs/common';
import { CreatePenalizacioneDto } from './dto/create-penalizacione.dto';
import { UpdatePenalizacioneDto } from './dto/update-penalizacione.dto';

@Injectable()
export class PenalizacionesService {
  create(createPenalizacioneDto: CreatePenalizacioneDto) {
    return 'This action adds a new penalizacione';
  }

  findAll() {
    return `This action returns all penalizaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} penalizacione`;
  }

  update(id: number, updatePenalizacioneDto: UpdatePenalizacioneDto) {
    return `This action updates a #${id} penalizacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} penalizacione`;
  }
}
