import { IsDate, IsEnum, isNotEmpty, IsNotEmpty, isNumber, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePrestamoDto {


    @IsNotEmpty()
    @IsString()
    id_dici: string;

    @IsNotEmpty()
    @IsDate()
    fecha_inicio: Date;

    @IsOptional()
    @IsDate()
    fecha_fin?: Date;    
}
