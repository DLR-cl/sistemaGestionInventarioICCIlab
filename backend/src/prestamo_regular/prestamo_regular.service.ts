import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePrestamoRegularDto } from './dto/create-prestamo_regular.dto';
import { UpdatePrestamoRegularDto } from './dto/update-prestamo_regular.dto';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { DatabaseService } from 'src/database/database/database.service';

@Injectable()
export class PrestamoRegularService {

  constructor(private readonly databaseService : DatabaseService){}

  create(createPrestamoRegular: CreatePrestamoRegularDto) {
      try {
        const create_prestamo = this.databaseService.regular.create({
          data : createPrestamoRegular
        })
      }catch (error){
        throw new HttpException('Error al crear un prestamo regular', HttpStatus.BAD_REQUEST);
      }
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
