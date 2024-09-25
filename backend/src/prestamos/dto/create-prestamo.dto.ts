import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePrestamoDto {
    @IsDate()
    @IsNotEmpty()
    fecha_ini : Date;

    @IsDate()
    @IsNotEmpty()
    fecha_fin : Date;
    
    @IsNotEmpty()
    @IsNumber()
    id_recurso : number;
}
