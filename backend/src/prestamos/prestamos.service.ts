import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { DatabaseService } from 'src/database/database/database.service';
import { ResponseDto } from './dto/response.dto';
import { prestamo, recurso} from '@prisma/client';
import { Prisma } from '@prisma/client';
import { UpdateRecursoDto } from 'src/recursos/dto/update-recurso.dto';

@Injectable()
export class PrestamosService {

  constructor(private readonly databaseService : DatabaseService){}

  async create(createPrestamo: CreatePrestamoDto) {
    try {

      // al crear el recurso se crea el prestamo generico  y se actualiza el estado del recurso

      const findEstado = await this.databaseService.recurso.findUnique({
        where : {
          id_dici : createPrestamo.id_dici,
        }
      });

      if(!findEstado.estado_recurso){
        throw new HttpException('El recurso ya está siendo utilizado', HttpStatus.BAD_REQUEST);
      };
      
      const nuevoPrestamo: prestamo = await this.databaseService.prestamo.create(
        {
          data : {
            fecha_inicio : new Date(),
            id_dici: createPrestamo.id_dici,
          }
        }
      )
      // actualizar estado del recuro
      const actualizarEstado = await this.databaseService.recurso.update({
        where : {id_dici : createPrestamo.id_dici},
        data : {
          estado_recurso : false,
        }
      });

    
     
      const response : ResponseDto<prestamo> = {
        statusCode : HttpStatus.CREATED,
        message : 'Prestamo creado con exito',
        data : nuevoPrestamo,
      }
      return response;
    } catch(error){
      throw new HttpException('Error al crear un prestamo', HttpStatus.BAD_REQUEST)
    }
  }

  async findAll() {
    try {

      const prestamos = await this.databaseService.prestamo.findMany({
        include: {
          recursos : true
        }
      });

      return prestamos; 
   
    } catch (error) {
      throw new HttpException('Error al obtener todos los prestamos', HttpStatus.BAD_REQUEST);
    }
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

      const findPrestamo = await this.databaseService.prestamo.findUnique({
        where : {id_prestamo  : id_prestam},
      })

      if(!findPrestamo){
        throw new HttpException('Error, no existe el préstamo', HttpStatus.BAD_REQUEST);
      }

      const finalizarPrestamo = await this.databaseService.prestamo.update({
        where : {id_prestamo : id_prestam},
        data : {fecha_fin : new Date()}
      });
      console.log('check 2')
      
      const cambiarEstadoRecurso = await this.databaseService.recurso.update({
        where: {
          id_dici : finalizarPrestamo.id_dici
        },
        data : {
          estado_recurso : true,
        }
      });
      console.log('check 3')

      // encontrar 
      const findRegular = await this.databaseService.regular.findUnique({
        where : {id_prestamo : id_prestam}
      });
      console.log('check4')

      const date = new Date();
      const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

      if(findRegular){
        const changeState = await this.databaseService.regular.update({
          where :{
            id_prestamo : id_prestam,
          },
          data : {
            hora_fin : formattedTime,
          }
        });
      }
      console.log('check5 ')

      const response : ResponseDto<recurso> = {
        statusCode : HttpStatus.OK,
        message : 'Recurso devuelto con exito',
        data : cambiarEstadoRecurso
      };
      return response;
    }catch(error){
      throw new HttpException('Error al finalizar un prestamo', HttpStatus.BAD_REQUEST);
    }
  }


   async findActivos() : Promise<prestamo[]>{
     try {
       const prestamosActivos  = await this.databaseService.prestamo.findMany({
         where : {
           fecha_fin : null,
         },
         include: {
          recursos : true,
         }
       })
       return prestamosActivos ||  [];
     } catch(error){
       throw new HttpException('Error al obtener todos los prestamos activos', HttpStatus.BAD_REQUEST);
     }
   }

   async findFinalizados() : Promise<prestamo[]>{
    try {
      const finalizados : prestamo[] = await this.databaseService.prestamo.findMany({
        where : {
          fecha_fin : {
            not : null,
          },
        },
        include : {
          recursos : true,
        }
      });


      return finalizados;
    } catch (error) {
      throw new HttpException('Error al obtener todos los prestamos inactivos', HttpStatus.BAD_REQUEST);
    }
   }



  
  update(id: number, updatePrestamoDto: UpdatePrestamoDto) {
    return `This action updates a #${id} prestamo`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestamo`;
  }
}
