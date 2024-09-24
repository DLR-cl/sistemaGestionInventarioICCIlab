import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { DatabaseService } from 'src/database/database/database.service';
import { ResponseDto } from './dto/response.dto';
import { Prestamo } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { UpdateRecursoDto } from 'src/recursos/dto/update-recurso.dto';

@Injectable()
export class PrestamosService {

  constructor(private readonly databaseService : DatabaseService){}

  async create(createPrestamo: CreatePrestamoDto) {
    try {

      const findRecurso = await this.databaseService.recursos.findUnique({
        where : {
          icci_id : createPrestamo.recurso_icci_id,
        }
      });

      if(!findRecurso){
        throw new HttpException('Recurso no existe en la base de datos', HttpStatus.BAD_REQUEST);
      }

      if (!findRecurso.disponibilidad) {
        throw new HttpException('Recurso no disponible para préstamo', HttpStatus.BAD_REQUEST);
      }

      const inhabilitarRecurso = await this.databaseService.recursos.update({
        where: {icci_id:findRecurso.icci_id},
        data: {
          disponibilidad : false,
        }
      });

      const nuevoPrestamo = await this.databaseService.prestamo.create(
        {
          data : createPrestamo
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

  async findByUsuario(id_usuario : number) : Promise<Prestamo[]>{
    try {
      const encontrarPrestamos  =  await this.databaseService.prestamo.findMany({
        where : {
          usuario_id : id_usuario,
        }
      })

      return encontrarPrestamos

      
    }catch(error){
      throw new HttpException('Error al encontrar los prestamos del usuario', HttpStatus.BAD_REQUEST);
    }
  }

  async findByEstudiante(id_estudiante : string) : Promise<Prestamo[]> {
    try {
      const encontrarPrestamos = await this.databaseService.prestamo.findMany({
        where : {
          estudiante_rut : id_estudiante,
        }
      });

      return encontrarPrestamos;
    }catch(error){
      throw new HttpException('Error al encontrar los prestamos del estudiante', HttpStatus.BAD_REQUEST);
    }
  }

  async findActivos() : Promise<Prestamo[]>{
    try {
      console.log('hola');
      const prestamosActivos  = await this.databaseService.prestamo.findMany({
        where : {
          hora_fin : null,
        }
      });

      return prestamosActivos ||  [];
    } catch(error){
      throw new HttpException('Error al obtener todos los prestamos activos', HttpStatus.BAD_REQUEST);
    }
  }

  async terminarPrestamo(id : number){
    try {
      const prestamoActivo  = await this.databaseService.prestamo.findUnique({
        where : {
          id_prestamo: id,
          hora_fin : null,
        },
      });

      if(!prestamoActivo){
        throw new HttpException('Prestamo no encontrado o ya ha sido entregado', HttpStatus.NOT_FOUND);
      }
      
      const habilitarRecurso = await this.databaseService.recursos.update({
        where : {
          icci_id : prestamoActivo.recurso_icci_id,
        },
        data: {
          disponibilidad: true,
        }
      });

      
      const prestamoTerminado = await this.databaseService.prestamo.update({
        where: {id_prestamo : id},
        data : {
          fecha_fin : new Date(),
          hora_fin : new Date(),
        }
      });

      const response : ResponseDto<Prestamo> = {
        statusCode : HttpStatus.OK,
        message: 'Prestamo actualizado con exito',
        data: prestamoTerminado,
      };

      return response;
    } catch(error){
      throw new HttpException('Error al obtener todos los prestamos activos', HttpStatus.BAD_REQUEST);
    }
  }

  
  update(id: number, updatePrestamoDto: UpdatePrestamoDto) {
    return `This action updates a #${id} prestamo`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestamo`;
  }
}
