import { recursos_inventario } from "@prisma/client";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
export class CreateRecursoInventarioDto {
    
    @IsNotEmpty()
    @IsNumber()
    id_recurso: number;
    

    @IsNotEmpty()
    @IsString()
    id_dici: string;
    
    @IsNotEmpty()
    @IsString()
    id_uta: string;
    
    @IsNotEmpty()
    @IsString()
    ubicacion: string;
}

