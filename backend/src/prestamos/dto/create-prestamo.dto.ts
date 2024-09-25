import { IsDate, IsEnum, isNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePrestamoDto {

    @IsNotEmpty()
    @IsNumber()
    id_recurso : number;


}
