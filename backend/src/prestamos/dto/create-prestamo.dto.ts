import { PrestamoTipo } from "@prisma/client";
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePrestamoDto {
    @IsDate()
    @IsNotEmpty()
    fecha_ini : Date;

    @IsDate()
    @IsOptional()
    fecha_fin? : Date;
    
    @IsDate()
    @IsNotEmpty()
    hora_ini : Date;

    @IsDate()
    @IsOptional()
    hora_fin?: Date;

    @IsEnum(PrestamoTipo)
    @IsNotEmpty()
    prestamo_tipo : PrestamoTipo;

    @IsNotEmpty()
    @IsString()
    estudiante_rut : string;

    @IsNotEmpty()
    @IsNumber()
    recurso_icci_id : number;

    @IsNotEmpty()
    @IsNumber()
    usuario_id : number;



}
