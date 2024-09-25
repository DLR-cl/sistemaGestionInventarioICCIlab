import { IsBoolean, IsInt, IsString, IsOptional, IsNotEmpty, IsDate, IsNumber } from 'class-validator';

export class CreateRecursoDto {



  @IsOptional()
  @IsString()
  marca? : string;

  @IsOptional()
  @IsString()
  descripcion? : string;

  @IsNotEmpty()
  @IsString()
  modelo : string;

  @IsNumber()
  @IsNotEmpty()
  id_categoria : number;
}