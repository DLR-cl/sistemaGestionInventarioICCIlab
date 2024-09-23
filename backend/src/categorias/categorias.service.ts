import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { DatabaseService } from 'src/database/database/database.service';
import { ResponseDto } from './dto/response.dto';

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

  findAll() {
    return `This action returns all categorias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
