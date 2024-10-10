import { IsDate, isNotEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreatePrestamoRegularDto {

    @IsDate()
    @IsNotEmpty()
    hora_inicio : Date;

    @IsNumber()
    @IsNotEmpty()
    id_prestamo : number;

    @IsString()
    @IsNotEmpty()
    rut : string;

    @IsNumber()
    @IsNotEmpty()
    id_usuario : number;


}
