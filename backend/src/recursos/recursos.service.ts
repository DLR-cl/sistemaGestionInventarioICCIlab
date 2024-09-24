import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRecursoDto } from './dto/create-recurso.dto';
import { UpdateRecursoDto } from './dto/update-recurso.dto';
import { DatabaseService } from 'src/database/database/database.service';
import { Prisma } from '@prisma/client';
import { ResponseDto } from './dto/response.dto';
import { RecursoEntity } from './entities/recurso.entity';
import { Prestamo } from 'src/prestamos/entities/prestamo.entity';
@Injectable()
export class RecursosService {
  constructor(private readonly databaseSercie : DatabaseService){}
  
  
  async create(createRecurso: CreateRecursoDto) : Promise<ResponseDto<CreateRecursoDto>>{
    try {
        const newRecurso = await this.databaseSercie.recursos.create(
          {data : createRecurso});
          
        const response : ResponseDto<CreateRecursoDto> = {
          statusCode : HttpStatus.CREATED,
          message: 'Recurso creado con exito',
          data: createRecurso,
        }
        return response


    } catch (error){
      throw new HttpException('Error al crear el recurso',  HttpStatus.BAD_REQUEST);
    }
  }

  findAll() : Prisma.PrismaPromise<RecursoEntity[]>{
    return this.databaseSercie.recursos.findMany({})
  }

  findOne(id: number) :Prisma.Prisma__RecursosClient<RecursoEntity>{
    return this.databaseSercie.recursos.findUnique({
      where : {
        icci_id: id
      }
    })
  }

  async update(id: number, updateRecurso: UpdateRecursoDto) : Promise<ResponseDto<UpdateRecursoDto>>{
      try {
        const actRecurso = await this.databaseSercie.recursos.update({
          where : {icci_id : id},
          data : updateRecurso      
        }) 

        const response : ResponseDto<UpdateRecursoDto> = {
          statusCode : HttpStatus.ACCEPTED,
          message : 'Recurso actualizado',
          data : updateRecurso,
        }
        return response;

      } catch (error){
        throw new HttpException('Error al actualizar recurso', HttpStatus.BAD_REQUEST)
      }
  }
    

  async remove(id: number) : Promise<ResponseDto<Prisma.Prisma__RecursosClient<RecursoEntity>>>{
   try {
    const deleteRecurso : Prisma.Prisma__RecursosClient<RecursoEntity> = this.databaseSercie.recursos.delete({
      where : {icci_id : id},
    })

    const response : ResponseDto<any> = {
      statusCode : HttpStatus.OK,
      message : 'Recurso borrado con exito',
      data: deleteRecurso
    }
    return response
  } catch(error) {
    throw new HttpException('Error, no se pudo borrar el recurso', HttpStatus.BAD_REQUEST)
  }

  }

  async todosPrestamosRecurso(id_recurso : number) : Promise<Prestamo[]>{
    try {
      const todosPrestamos = await this.databaseSercie.prestamo.findMany({
        where:{
          recurso_icci_id: id_recurso,
        }
      });

      return todosPrestamos;
    }catch(error){
      throw new HttpException('Error al obtener todos los prestamos en los que aparece el recurso', HttpStatus.BAD_REQUEST);
    }
  }
}
