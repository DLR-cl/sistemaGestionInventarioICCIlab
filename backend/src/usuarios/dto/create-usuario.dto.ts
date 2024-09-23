import { IsBoolean, IsEnum, isNotEmpty, IsNotEmpty, IsString } from "class-validator";
import { TiposUsuario } from "../enums/tiposUsuarios.enum";

export class CreateUsuarioDto {

    @IsString()
    @IsNotEmpty()
    nombre : string;

    @IsBoolean()
    @IsNotEmpty()
    estado : boolean;

    @IsString()
    @IsNotEmpty()
    email : string;

    @IsString()
    @IsNotEmpty()
    password : string

    @IsEnum(TiposUsuario)
    @IsNotEmpty()
    tipo : TiposUsuario;
}
