import { IsNotEmpty, isNumber, IsString, isString } from "class-validator";

export class CreateCategoriaDto {

    @IsString()
    @IsNotEmpty()
    name : string;

}
