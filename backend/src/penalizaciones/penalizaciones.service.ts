import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePenalizacioneDto } from './dto/create-penalizacione.dto';
import { UpdatePenalizacioneDto } from './dto/update-penalizacione.dto';
import { Penalizacione } from './entities/penalizacione.entity';
import { DatabaseService } from 'src/database/database/database.service';
import { sanciones } from '@prisma/client';

@Injectable()
export class PenalizacionesService {

  constructor(private readonly databaseService : DatabaseService){}
  create(createPenalizacioneDto: sanciones) {
    try{
      this.databaseService.sanciones.create({data : createPenalizacioneDto })

    }catch(error){
      throw new HttpException('Error al crear la sancion', HttpStatus.BAD_REQUEST);
    }
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
