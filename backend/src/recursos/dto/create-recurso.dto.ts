import { IsBoolean, IsInt, IsString, IsOptional, IsNotEmpty, IsDate, IsNumber } from 'class-validator';

export class CreateRecursoDto {
  @IsOptional()
  @IsString()
  marca? : string;

  @IsNotEmpty()
  @IsString()
  descripcion : string;

  @IsDate()
  @IsNotEmpty()
  fecha_ingresa : Date;

  @IsNotEmpty()
  @IsString()
  modelo : string;

  @IsNumber()
  @IsNotEmpty()
  id_categoria : number;
}