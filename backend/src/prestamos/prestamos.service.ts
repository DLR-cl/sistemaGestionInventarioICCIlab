import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { DatabaseService } from 'src/database/database/database.service';
import { ResponseDto } from './dto/response.dto';
import { prestamo } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { UpdateRecursoDto } from 'src/recursos/dto/update-recurso.dto';

@Injectable()
export class PrestamosService {

  constructor(private readonly databaseService : DatabaseService){}

  async create(createPrestamo: CreatePrestamoDto) {
    try {

      // encontrar que recurso existe
      const findRecurso = await this.databaseService.recursos_inventario.findUnique({
        where : {
           id_recurso : createPrestamo.id_recurso,
        }
      });



      if(!findRecurso){
        throw new HttpException('Recurso no existe en la base de datos', HttpStatus.BAD_REQUEST);
      }else if(findRecurso.cont_recurso == 0){
        throw new HttpException('No hay más recursos de este tipo ', HttpStatus.NOT_ACCEPTABLE);
      }

      // actualizar cantidad de recursos
      this.databaseService.recursos_inventario.update({
        where : {
          id_recurso : createPrestamo.id_recurso,
        },
        data : {
          cont_recurso : findRecurso.cont_recurso - 1,
        }
      })
      

      const nuevoPrestamo = await this.databaseService.prestamo.create(
        {
          data : {
            fecha_fin : createPrestamo.fecha_fin,
            fecha_inicio : createPrestamo.fecha_ini,
            id_recurso : createPrestamo.id_recurso,
          }
        }
      )

     
      const response : ResponseDto<CreatePrestamoDto> = {
        statusCode : HttpStatus.CREATED,
        message : 'Prestamo creado con exito',
        data : createPrestamo,
      }
      return response;
    } catch(error){
      throw new HttpException('Error al crear un prestamo', HttpStatus.BAD_REQUEST)
    }
  }

  async findAll() {
    return await this.databaseService.prestamo.findMany();
  }

  async findOne(id: number) {
    
    try {
      const prestamo = await this.databaseService.prestamo.findUnique({
        where : {
          id_prestamo : id,
        }
      });

      return prestamo;
    }catch (error){
      throw new HttpException('Error al momento de obtener el prestamo', HttpStatus.BAD_REQUEST);
    }
  }




  // async findActivos() : Promise<prestamo[]>{
  //   try {
  //     console.log('hola');
  //     const prestamosActivos  = await this.databaseService.prestamo.findMany({
  //       where : {
  //         fecha_fin : null,
  //       }
  //     });

  //     return prestamosActivos ||  [];
  //   } catch(error){
  //     throw new HttpException('Error al obtener todos los prestamos activos', HttpStatus.BAD_REQUEST);
  //   }
  // }





  
  update(id: number, updatePrestamoDto: UpdatePrestamoDto) {
    return `This action updates a #${id} prestamo`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestamo`;
  }
}
