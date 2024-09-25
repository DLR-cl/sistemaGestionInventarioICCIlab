import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { DatabaseService } from 'src/database/database/database.service';
import { ResponseDto } from './dto/response.dto';
import { prestamo, recursos_inventario } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { UpdateRecursoDto } from 'src/recursos/dto/update-recurso.dto';

@Injectable()
export class PrestamosService {

  constructor(private readonly databaseService : DatabaseService){}

  async create(createPrestamo: CreatePrestamoDto) {
    try {

      // al crear el recurso se crea el prestamo generico  y se actualiza el estado del recurso

      const nuevoPrestamo = await this.databaseService.prestamo.create(
        {
          data : {
            fecha_inicio : new Date(),
            id_recurso : createPrestamo.id_recurso,
          }
        }
      )
      // actualizar estado del recuro
      const actualizarEstado = await this.databaseService.recursos_inventario.update({
        where : {id_recurso : createPrestamo.id_recurso},
        data : {
          estado_recurso : 0,
        }
      });

    
     
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

  async finalizarPrestamo(id_prestam : number) {
    try {
      console.log('check')
      const finalizarPrestamo = await this.databaseService.prestamo.update({
        where : {id_prestamo : id_prestam},
        data : {fecha_fin : new Date()}
      });
      console.log('check 2')

      const cambiarEstadoRecurso = await this.databaseService.recursos_inventario.update({
        where: {
          id_recurso : finalizarPrestamo.id_recurso
        },
        data : {
          estado_recurso : 1,
        }
      });
      console.log('check 3')

      // encontrar 
      const findRegular = await this.databaseService.regular.findUnique({
        where : {id_prestamo : id_prestam}
      });
      console.log('check4')

      if(findRegular){
        const changeState = await this.databaseService.regular.update({
          where :{
            id_prestamo : id_prestam,
          },
          data : {
            hora_fin : '11:25'
          }
        });
      }
      console.log('check5 ')

      const response : ResponseDto<recursos_inventario> = {
        statusCode : HttpStatus.OK,
        message : 'Recurso devuelto con exito',
        data : cambiarEstadoRecurso
      };
      return response;
    }catch(error){
      throw new HttpException('Error al finalizar un prestamo', HttpStatus.BAD_REQUEST);
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
