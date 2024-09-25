import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRecursoInventarioDto } from './dto/create-recurso_inventario.dto';
import { UpdateRecursoInventarioDto } from './dto/update-recurso_inventario.dto';
import { recursos_inventario } from '@prisma/client';
import { DatabaseService } from 'src/database/database/database.service';
import { ResponseDto } from 'src/recursos/dto/response.dto';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

@Injectable()
export class RecursoInventarioService {

  constructor(private readonly databaseService : DatabaseService){}

  async create(createRecursoInventarioDto: recursos_inventario) {
    
    try {
      const newRecursoInventario = await this.databaseService.recursos_inventario.create({
        data : createRecursoInventarioDto,
      });

      const response  : ResponseDto<recursos_inventario> = {
        statusCode : HttpStatus.CREATED,
        message : 'El recurso ha sido creado con exito',
        data : newRecursoInventario
      };

      return response;
    } catch (error){
      throw new HttpException('Error al crear un recurso de inventario', HttpStatus.BAD_REQUEST); 
    }
  }



  async findAll() : Promise<recursos_inventario[]>{

    return await this.databaseService.recursos_inventario.findMany();
  }

  async findOne(id_dici: string) {
    
    try {
      const find = await this.databaseService.recursos_inventario.findUnique({
        where : {
          id_dici : id_dici,
        }
      });

      if(!find){
        throw new HttpException('El recurso no existe', HttpStatus.NOT_FOUND);
      };

      return find;
    } catch(error){
      throw new HttpException('Error al encontrar el recurso', HttpStatus.BAD_REQUEST);
    };

  }

  async update(id_dici: string, updateRecursoInventarioDto: UpdateRecursoInventarioDto) {
    
  try {
    
    const find = await this.findOne(id_dici);

    if(!find){
      throw new HttpException('El recurso no existe', HttpStatus.BAD_REQUEST);
    };

    const updateRecurso = await this.databaseService.recursos_inventario.update({
      where : {
        id_dici : find.id_dici
      },
      data : updateRecursoInventarioDto,
    })

    const response : ResponseDto<recursos_inventario> = {
       statusCode : HttpStatus.OK,
       message : 'Recurso actualizado con exito',
       data : updateRecurso
    };
    return response;
  } catch(error){
    throw new HttpException('Error al actualizar el recurso', HttpStatus.BAD_REQUEST);
  };
  }

  async remove(id: string) {
    try {
      const find = await this.findOne(id);

      const removeRecurso = await this.databaseService.recursos_inventario.delete({
        where :{
          id_dici : id,
        }
      });

      const response : ResponseDto<recursos_inventario> = {
        statusCode : HttpStatus.OK,
        message : 'Recurso borrado con éxito',
        data : removeRecurso,
      };

      return response
    }catch(error){
      throw new HttpException('Error al borrar el recurso', HttpStatus.BAD_REQUEST);
    }
  }
}
