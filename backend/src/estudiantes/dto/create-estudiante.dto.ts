import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateEstudianteDto {
    
    @IsString()
    @IsNotEmpty()
    rut : string
    
    @IsString()
    @IsNotEmpty()
    nombre : string
    
    @IsEmail()
    @IsNotEmpty()
    email : string
    
    @IsBoolean()
    @IsNotEmpty()
    estado : boolean
}
