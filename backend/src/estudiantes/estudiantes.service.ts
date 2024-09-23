import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { DatabaseService } from 'src/database/database/database.service';
import { ResponseDto } from './dto/response.dto';

@Injectable()
export class EstudiantesService {

  constructor(private readonly databaseService : DatabaseService){}

  async create(createEstudiante: CreateEstudianteDto) : Promise<ResponseDto<CreateEstudianteDto>> {
    try {
      const nuevoEstudiante  = await this.databaseService.estudiante.create({
        data : createEstudiante
      })

      const response : ResponseDto<CreateEstudianteDto>= {
        statusCode : HttpStatus.CREATED,
        message: 'Usuario creado con exito',
        data : createEstudiante
      }
      return response
    } catch(error){
      throw new HttpException('Error al crear estudiante', HttpStatus.BAD_REQUEST)
    }
  }

  async findAll()  {
    try {
      return this.databaseService.estudiante.findMany()
    }catch(error){
      throw new HttpException('Error al encontrar estudiantes', HttpStatus.BAD_GATEWAY)
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} estudiante`;
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `This action updates a #${id} estudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
