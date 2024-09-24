import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { DatabaseService } from 'src/database/database/database.service';
import { ResponseDto } from './dto/response.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriasService {

  constructor(private readonly databaseService : DatabaseService){

  }

  async create(createCategoria: CreateCategoriaDto) : Promise<ResponseDto<CreateCategoriaDto>> {
    try {
      const nuevaCategoria = await this.databaseService.category.create({
        data : createCategoria,
      })

      const response : ResponseDto<CreateCategoriaDto> = {
        statusCode : HttpStatus.CREATED,
        message : 'Categoria creada con exito',
        data: createCategoria
      }
      return response
    }catch(error){
      throw new HttpException('Error al crear la categoria', HttpStatus.BAD_REQUEST)
    } 

  }

  async findAll() : Promise<Categoria[]>{
    try {
      return await this.databaseService.category.findMany();
    } catch(error){
      throw new HttpException('Error al mostrar las categorias', HttpStatus.BAD_REQUEST);
    }
    
  }

  async findOne(id: number) : Promise<Categoria> {
    try{
      return await this.databaseService.category.findUnique({
        where : {
          id : id,
        }
      })
    } catch(error){
      throw new HttpException('Error al mostrar la categoria', HttpStatus.BAD_REQUEST);
    }
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  async remove(id: number) : Promise<Categoria>{
    try {
      const removeCategoria = await this.databaseService.category.delete({
        where :{
          id : id,
        }
      });

      const response : ResponseDto<Categoria> = {
        statusCode : HttpStatus.OK,
        message: 'categoria borrada con exito',
        data: removeCategoria,
      };

      return response;
    } catch(error){
      throw new HttpException('Error al borrar categoria', HttpStatus.BAD_REQUEST);
    }
  }
}
