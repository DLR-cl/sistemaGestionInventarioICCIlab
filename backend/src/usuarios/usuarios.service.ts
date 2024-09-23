import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { DatabaseService } from 'src/database/database/database.service';
import { ResponseDto } from './dto/response.dto';
import { Usuario } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { promises } from 'dns';

@Injectable()
export class UsuariosService {

  constructor(private readonly databaseService : DatabaseService){}

  async create(createUsuario: CreateUsuarioDto) : Promise<ResponseDto<CreateUsuarioDto>>{
    try {
      const nuevoUsuario = await this.databaseService.usuario.create(
        {
          data: createUsuario,
        }
      );
      const response : ResponseDto<CreateUsuarioDto> = {
        statusCode : HttpStatus.CREATED,
        message: 'Usuario creado con exito',
        data : createUsuario,
      };

      return response;

    } catch(error){
      throw new HttpException('Error al crear usuario', HttpStatus.BAD_REQUEST);
    }
  }


  findAll() {
    try {
      return this.databaseService.usuario.findMany();
    }catch(error){
      throw new HttpException('Error al cargar todos los usuarios', HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id_usuario: number) : Promise<Prisma.Prisma__UsuarioClient<Usuario>>{
    try{
        return await this.databaseService.usuario.findUnique({
          where : {
            id : id_usuario,
          }
        })
      }
      catch(error){
        throw new HttpException('Error al obtener el usuario', HttpStatus.BAD_REQUEST)
      }
    }
  

  async update(id_usuario: number, updateUsuario: UpdateUsuarioDto) : Promise<ResponseDto<UpdateUsuarioDto>> {
    try {
      const actUsuario = await this.databaseService.usuario.update(
        {
          where: {id : id_usuario},
          data: updateUsuario
        }
      )

      const response : ResponseDto<UpdateUsuarioDto> = {
        statusCode : HttpStatus.OK,
        message : 'Usuario actualizado',
        data : updateUsuario,
      }

      return response
    }catch(error){
      throw new HttpException('Error al actualizar el usuario', HttpStatus.BAD_REQUEST)
    }
  }

  remove(id_usuario: number) {
    try {
      const removeUser : Prisma.Prisma__UsuarioClient<Usuario>= this.databaseService.usuario.delete({
        where : {id : id_usuario}
      })

      const response : ResponseDto<Prisma.Prisma__UsuarioClient<Usuario>> = {
        statusCode : HttpStatus.OK,
        message : 'Usuario modificado con exito',
        data : removeUser
      }

      return response;
    } catch(error){
      throw new HttpException('Error al borrar el usuario', HttpStatus.BAD_REQUEST);
    }
  }
}
