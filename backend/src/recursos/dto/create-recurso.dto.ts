import { IsBoolean, IsInt, IsString, IsOptional } from 'class-validator';

export class CreateRecursoDto {
  @IsInt()
  icci_id: number;

  @IsInt()
  id_uta: number;

  @IsString()
  nombre: string;

  @IsBoolean()
  estado: boolean;

  @IsBoolean()
  disponibilidad: boolean;

  @IsString()
  modelo: string;

  @IsString()
  marca: string;

  @IsString()
  descripcion: string;

  @IsString()
  lugar: string;

  @IsInt()
  category_id: number;
}