import { UsuarioTipo } from "@prisma/client";
import { Prestamo } from "src/prestamos/entities/prestamo.entity";

export class Usuario {
    id : number;
    nombre : string;
    estado : boolean;
    tipo : UsuarioTipo;
}
