import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRecursoDto } from './dto/create-recurso.dto';
import { UpdateRecursoDto } from './dto/update-recurso.dto';
import { DatabaseService } from 'src/database/database/database.service';
import { prestamo, Prisma, recurso } from '@prisma/client';
import { ResponseDto } from './dto/response.dto';
import { RecursoEntity } from './entities/recurso.entity';
import { Prestamo } from 'src/prestamos/entities/prestamo.entity';
@Injectable()
export class recursoService {
  constructor(private readonly databaseService : DatabaseService){}
  
  
  async create(createRecurso: CreateRecursoDto) : Promise<ResponseDto<recurso>>{
    try {
      
        const newRecurso = await this.databaseService.recurso.create(
          {data : {
            marca : createRecurso.marca,
            Descripcion : createRecurso.descripcion,
            fecha_ingreso : createRecurso.fecha_ingresa,
            modelo : createRecurso.modelo,
            Id_categoria : createRecurso.id_categoria
          }});
          
        const response : ResponseDto<recurso> = {
          statusCode : HttpStatus.CREATED,
          message: 'Recurso creado con exito',
          data: newRecurso,
        }

        return response


    } catch (error){
      throw new HttpException('Error al crear el recurso',  HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() : Promise<recurso[]>{
    return await this.databaseService.recurso.findMany();
  }

  async findOne(id: number) : Promise<recurso>{
    return await this.databaseService.recurso.findUnique({
      where : {
        id_recurso: id
      }
    })
  }

  async update(id: number, updateRecurso: UpdateRecursoDto) : Promise<ResponseDto<recurso>>{
      try {
        const actRecurso = await this.databaseService.recurso.update({
          where : {id_recurso : id},
          data : updateRecurso      
        }) 

        const response : ResponseDto<recurso> = {
          statusCode : HttpStatus.ACCEPTED,
          message : 'Recurso actualizado',
          data : actRecurso,
        }
        return response;

      } catch (error){
        throw new HttpException('Error al actualizar recurso', HttpStatus.BAD_REQUEST)
      }
  }
    

  async remove(id: number) : Promise<ResponseDto<recurso>>{
   try {

    if(!await this.databaseService.recurso.findUnique({
      where : {
        id_recurso : id,
      }
    })){
      throw new HttpException('Recurso a eliminar no existe', HttpStatus.BAD_REQUEST);
    }

    const deleteRecurso = await this.databaseService.recurso.delete({
      where : {id_recurso : id},
    });
  

    const response : ResponseDto<recurso> = {
      statusCode : HttpStatus.OK,
      message : 'Recurso borrado con exito',
      data: deleteRecurso
    }
    return response
  } catch(error) {
    throw new HttpException('Error, no se pudo borrar el recurso', HttpStatus.BAD_REQUEST)
  }

  }

  // devuelve todos los prestamos en los que aparece el recurso
  async todosPrestamosRecurso(id_recurso : number) : Promise<prestamo[]>{
    try {
      const todosPrestamos = await this.databaseService.prestamo.findMany({
        where:{
          id_recurso: id_recurso,
        }
      });

      return todosPrestamos;
    }catch(error){
      throw new HttpException('Error al obtener todos los prestamos en los que aparece el recurso', HttpStatus.BAD_REQUEST);
    }
  }
}
