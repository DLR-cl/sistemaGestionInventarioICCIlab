import { recurso } from "@prisma/client";
import { IsDate, isDate, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { RecursoEntity } from "src/recursos/entities/recurso.entity";

export class GetPrestamo {

    @IsNotEmpty()
    @IsNumber()
    id_prestamo: number;

    @IsNotEmpty()
    @IsDate()
    fecha_inicio: Date;

    @IsOptional()
    @IsDate()
    fecha_fin: Date;

    @IsNotEmpty()
    @IsString()
    id_dici: string;

    @IsNotEmpty()
    recursos: recurso[]

}